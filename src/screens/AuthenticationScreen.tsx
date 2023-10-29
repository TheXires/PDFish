import { Image } from 'expo-image';
import * as LocalAuthentication from 'expo-local-authentication';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import graphic from '../../assets/AuthenticationScreen.svg';

interface Props {
  isAuthenticationSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthenticationScreen({ isAuthenticationSuccessful }: Props) {
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    triggerAuthentication();
  }, []);

  const triggerAuthentication = async () => {
    const res = await LocalAuthentication.authenticateAsync();
    isAuthenticationSuccessful(res.success);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text variant="displaySmall">{t('screen.authentication.heading')}</Text>
        <Image source={graphic} style={styles.image} contentFit="contain" />
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={triggerAuthentication} style={styles.button}>
          {t('screen.authentication.button')}
        </Button>
        <Text style={{ color: theme.colors.outlineVariant }}>
          {t('screen.authentication.hint')}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
  },
  image: {
    alignSelf: 'center',
    flexGrow: 1,
    height: '50%',
    width: '75%',
  },
});
