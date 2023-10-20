import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Dialog, Portal, RadioButton, Text } from 'react-native-paper';

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  value: string;
  visible: boolean;
  options: string[];
  onDismiss: () => void;
  onSave: () => void;
}

export default function RadioButtonDialog({
  setValue,
  title,
  value,
  visible,
  options,
  onDismiss,
  onSave,
}: Props) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group onValueChange={(newValue) => setValue(newValue)} value={value}>
            {options.map((language) => (
              <View style={styles.listElement} key={language}>
                <RadioButton value={language} />
                <Text>{language}</Text>
              </View>
            ))}
          </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>ToDo(Dismiss)</Button>
          <Button onPress={onSave}>ToDo(Save)</Button>
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
