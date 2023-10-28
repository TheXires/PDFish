import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Button, Dialog, Portal, RadioButton, Text } from 'react-native-paper';

interface Props {
  setValue: (value: string) => void;
  title: string;
  translationPrefix: string;
  value: string;
  visible: boolean;
  options: string[];
  onDismiss: () => void;
  onSave: () => void;
}

export default function RadioButtonDialog({
  setValue,
  title,
  translationPrefix = '',
  value,
  visible,
  options,
  onDismiss,
  onSave,
}: Props) {
  const { t } = useTranslation();

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group onValueChange={(newValue) => setValue(newValue)} value={value}>
            {options.map((option) => (
              <View style={styles.listElement} key={option}>
                <RadioButton value={option} />
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <Text>{t(translationPrefix + option)}</Text>
              </View>
            ))}
          </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>{t('components.dialog.cancel')}</Button>
          <Button onPress={onSave}>{t('components.dialog.save')}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  listElement: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
