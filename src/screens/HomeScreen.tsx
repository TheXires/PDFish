import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from 'react-native';
import { AnimatedFAB, Button, Divider, List, Text } from 'react-native-paper';
import { HomeNavigationProp } from '../types/navigation';

// TODO remove dummyData after implementation
const dummyData = Array(50).fill('Test');

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const { t } = useTranslation();

  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isFABExtended, setIsFABExtended] = useState(true);
  const [documents, setDocuments] = useState<string[] | undefined>(undefined);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition = Math.floor(event.nativeEvent?.contentOffset?.y) ?? 0;
    setLastScrollPosition(currentScrollPosition);
    setIsFABExtended(currentScrollPosition <= 0 || lastScrollPosition > currentScrollPosition);
  };

  return (
    <View style={styles.container}>
      {!documents ? (
        <>
          <Text>{t('screen.home.welcome')}</Text>
          <Button onPress={() => setDocuments(dummyData)}>Add Documents</Button>
        </>
      ) : (
        <FlatList
          onScroll={onScroll}
          style={{ width: '100%' }}
          data={dummyData}
          renderItem={(value) => <List.Item title={value.item} />}
          ItemSeparatorComponent={Divider}
        />
      )}
      <AnimatedFAB
        extended={isFABExtended}
        label={t('screen.home.add')}
        onPress={() => navigation.navigate('Scanner')}
        icon="plus"
        style={styles.fab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fab: {
    bottom: 0,
    margin: 16,
    position: 'absolute',
    right: 0,
  },
});
