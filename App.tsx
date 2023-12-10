import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import imagexOff from './assets/icons/eco-light-off.png';
import imagex from './assets/icons/eco-light.png';
import logoWhite from './assets/icons/logo-dio-white.png';
import logo from './assets/icons/logo-dio.png';

const App = () => {
  const [toggle, setToggle] = useState(true);
  const onPressHandler = () => {
    console.log('tese');
    setToggle(!toggle); // Alternar o estado entre true e false
  };

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={onPressHandler}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={toggle ? imagex : imagexOff}
        />
        <Image style={style.logo} source={toggle ? logo : logoWhite} />
      </TouchableOpacity>
    </View>
  );
};
export {App};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 120,
    height: 120,
  },
});
