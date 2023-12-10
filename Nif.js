import React, {Component} from 'react';
import {View, TextInput, Keyboard} from 'react-native';
import calculatesLetterNif from './Calculates';

export default class Nif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theNifEntered: undefined,
      letterNif: undefined,
    };
  }
  saveNif = value => {
    if (value.length === 8) {
      this.setState({theNifEntered: value});
      let theLetter = calculatesLetterNif(value);
      this.setState({letterNif: theLetter});
      Keyboard.dismiss();
      this.props.returnsNif({nif: value, letter: theLetter});
    }
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          backgroundColor: this.props.color,
        }}>
        <TextInput
          style={{fontSize: 18, fontWeight: 'normal', width: 130}}
          placeholder="NIF"
          placeholderTextColor="#FF0000"
          onChangeText={this.saveNif}
          maxLength={8}
          keyboardType="number-pad"
          underlineColorAndroid="red"
        />

        <TextInput
          style={{ fontSize: 18, fontWeight: 'normal'}}
          placeholder="Letra"
          placeholderTextColor="#0000FF"
          value={this.state.letterNif}
          editable={false}
          underlineColorAndroid="blue"
        />
      </View>
    );
  }
}
