import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, Switch, useTheme } from 'react-native-paper';

export default function SettingsScreen() {
  const theme = useTheme();
  const { t } = useTranslation();

  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.onSurface }}>{t('SettingsScreen.title')}</Text>
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
