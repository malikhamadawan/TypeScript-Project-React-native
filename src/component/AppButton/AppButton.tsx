import React, {CSSProperties, FC} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, family, size, WP} from '../../shared/exporter';

interface Props {
  title?: string;
  bgColor?: any;
  textColor?: any;
  onPressButton?: () => void | undefined;
  width?: string | any;
  height?: string | any;
  buttonStyle?: any;
  image?: any;
  imageStyle?: ImageStyle;
  loading?: boolean;
  disabled?: boolean | any;
}

const AppButton: FC<Props> = ({
  title,
  bgColor,
  textColor,
  onPressButton,
  width,
  height,
  buttonStyle,
  image,
  imageStyle,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressButton}
      style={buttonStyle}
      disabled={disabled}>
      <LinearGradient
        colors={bgColor ? bgColor : colors.db_gradient}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={[
          styles.btnContainer,
          {
            height: height ? height : WP('14.5'),
            width: width ? width : WP('87'),
          },
        ]}>
        {loading ? (
          <ActivityIndicator size={'small'} color={colors.white} />
        ) : (
          <Text
            style={[
              styles.btnText,
              {color: textColor ? textColor : colors.white},
            ]}>
            {title}
          </Text>
        )}

        {image && (
          <Image source={image} style={[styles.imageStyle, imageStyle]} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export {AppButton};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: WP('2'),
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 7,
    elevation: 6,
  },
  btnText: {
    color: colors.white,
    fontFamily: family.Poppins_Medium,
    fontSize: size.normal,
    letterSpacing: 0.6,
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
