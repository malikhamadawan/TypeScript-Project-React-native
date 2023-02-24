import React, {FC, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Modal,
} from 'react-native';
import {AppInput} from '../../../component/AppInput/AppInput';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamsList} from '../../../navigation/stack/AuthStack';
import {appIcons, appImages, WP} from '../../../shared/exporter';
import {styles} from './styles';
import {AppButton} from '../../../component';

const SignIn: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamsList, 'SignIn'>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={appImages.authBg}
        style={styles.contentContainer}
        resizeMode={'cover'}>
        <Text style={styles.clickTextStyle}>i.click</Text>
        <Image
          source={appIcons.welcome}
          resizeMode={'contain'}
          style={styles.welcomeImageStyle}
        />
      </ImageBackground>
      <View style={styles.secondContentContainer}>
        <View style={styles.inputContainer}>
          <AppInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <AppInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <AppButton
          title={'LOG IN'}
          loading={loading}
          disabled={loading}
          onPressButton={() => {
            setShow(!show);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
