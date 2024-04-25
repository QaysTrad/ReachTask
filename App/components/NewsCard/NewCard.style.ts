import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {marginTop: 36},
  image: {
    // width: widthDimensions - 32,
    height: 200,
    borderRadius: 16,
  },
  featureTag: {
    position: 'absolute',
    backgroundColor: 'grey',
    width: 140,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 16,
  },
  featureTagText: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textSmallDescription: {
    fontSize: 16,
    fontWeight: '400',
    width: 250,
  },
  textProductsDescription: {
    fontSize: 16,
    fontWeight: '700',
  },
  textProductsContainer: {
    marginTop: 16,
  },
});

export default styles;
