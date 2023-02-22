import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    width: WP('100'),
    height: WP('75'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickTextStyle: {
    color: colors.white,
    fontFamily: family.Poppins_Medium,
    fontSize: size.huge,
    textAlign: 'center',
  },
  welcomeImageStyle: {
    width: WP('65'),
    marginBottom: WP('17'),
  },
  secondContentContainer: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: WP('-6.5'),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  inputContainer: {
    paddingVertical: WP('10'),
    alignItems: 'center',
  },
});

export {styles};
