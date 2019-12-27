import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from './style';

import BackButton from '../BackButton'

class CharacterDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      character: {
        origin: {},
        location: {},
        episodes: {},
      },
    };
  }

  componentDidMount() {
    fetch(
      `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`,
      {method: 'get'},
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          character: data,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <View style={Style.card}>
        <Image style={Style.image} source={{uri: this.state.character.image}} />
        <View style={Style.info}>
          <Text style={Style.Item}>
            Species:{this.state.character.species}
          </Text>
          <Text style={Style.Item}>
            Status:{this.state.character.status}
          </Text>

          <Text style={Style.Item}>
            Gender:{this.state.character.gender}
          </Text>
          <Text style={Style.Item}>
            Origin:{this.state.character.origin.name}
          </Text>
          <Text style={Style.Item}>
            Location:{this.state.character.location.name}
          </Text>
        </View>

        <Text style={Style.name}>{this.state.character.name}</Text>
        {/* <BackButton icon="pero" to='/'>
          <Text>Back to Start</Text>
        </BackButton> */}
      </View>
    );
  }
}

export default CharacterDetails;
