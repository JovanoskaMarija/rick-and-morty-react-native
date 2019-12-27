import {StyleSheet} from 'react-native';
import BackButton from '../BackButton';

const Style = StyleSheet.create({
  card: {
    margin: 15,
    display: 'flex',
    //borderColor: '#ededed',
    borderColor: 'rgb(17, 176, 200)',
    borderWidth: 3,
    borderRadius: 4,
  },
  name: {
    backgroundColor: 'rgb(17, 176, 200)',
    color: 'white',
    fontSize: 24,
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 4,
  },

  info:{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingTop: 10,
  },

  
  Item:{
      margin: 5,
    fontSize:17,
    color: 'grey',
  },

  BackButton:{

  }

});

export default Style;
