import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, List, Switch, Text } from 'react-native-paper';

export default function SettingsScreen() {
  const { t } = useTranslation();

  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text>{t('SettingsScreen.title')}</Text>
      <ScrollView>
        <List.Item
          title="Test"
          right={() =>
            Switch({
              onChange: () => setToggled((prev) => !prev),
              value: toggled,
            })
          }
          style={{ flex: 1, justifyContent: 'space-between' }}
        />
        <Divider />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
