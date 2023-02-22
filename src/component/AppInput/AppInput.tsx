import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {colors, family, HP, size, WP} from '../../shared/exporter';

interface Props {
  secureTextEntry?: boolean | undefined;
  onChangeText?: (val: string) => void | undefined;
  onBlur?: () => void | undefined;
  value?: string | any;
  autoCapitalize?: string | any;
  editable?: boolean;
  leftIcon?: any;
  placeholderTextColor?: any;
  placeholder?: string | any;
  rightIcon?: any;
  errorMessage?: string;
  labelStyle?: any;
  multiline?: boolean;
  maxLength?: any;
  keyboardType?: any;
  inputContainerStyle?: any;
  label?: string;
}

const AppInput: FC<Props> = ({
  secureTextEntry,
  onChangeText,
  onBlur,
  value,
  autoCapitalize,
  editable,
  leftIcon,
  placeholderTextColor,
  placeholder,
  rightIcon,
  errorMessage,
  multiline,
  maxLength,
  keyboardType,
  inputContainerStyle,
  label,
  labelStyle,
}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <Input
      label={label}
      labelStyle={[styles.labelStyle, labelStyle]}
      style={{fontFamily: family.Poppins_Regular}}
      placeholder={placeholder}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : colors.g1
      }
      containerStyle={styles.containerStyle}
      inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
      secureTextEntry={showPass}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      autoCapitalize={autoCapitalize}
      editable={editable}
      leftIcon={leftIcon}
      rightIcon={
        secureTextEntry ? (
          <Icon
            onPress={() => {
              setShowPass(!showPass);
            }}
            name={!showPass ? 'eye-outline' : 'eye-off-outline'}
            type={'material-community'}
            size={22}
            color={colors.b1}
          />
        ) : (
          rightIcon
        )
      }
      errorMessage={errorMessage}
      errorStyle={styles.errorStyle}
      renderErrorMessage={false}
      multiline={multiline}
      maxLength={maxLength}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: HP('1'),
    marginHorizontal: WP('1'),
  },
  inputStyle: {
    fontFamily: family.Poppins_Regular,
    fontSize: size.xsmall,
    borderBottomWidth: 0,
    color: colors.b1,
  },
  inputContainerStyle: {
    borderRadius: 30,
    backgroundColor: colors.white2,
    borderBottomWidth: 0,
    paddingHorizontal: WP('5'),
    fontFamily: family.Poppins_Regular,
    alignSelf: 'center',
  },
  errorStyle: {
    color: 'red',
    fontFamily: family.Poppins_Regular,
    paddingLeft: WP('3'),
  },
  labelStyle: {
    color: colors.b2,
    fontSize: size.xsmall,
    fontFamily: family.Poppins_Medium,
    marginLeft: HP('1'),
    marginBottom: HP('1'),
    fontWeight: '300',
  },
});

export {AppInput};
