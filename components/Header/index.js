import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from './style';
import {Link} from 'react-router-native';

class Header extends React.Component {
  render() {
    return (
      <Link to="/">
        <View style={Style.container}>
          <Image
            style={Style.logo}
            source={require('../../assets/img/logo.png')}
          />
        </View>
      </Link>
    );
  }
}
export default Header;
