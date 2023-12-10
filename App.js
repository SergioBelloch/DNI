import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Nif from './Nif';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getNifAndLetter = ({nif, letter}) => {
    this.setState({nif: nif, letter: letter});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>
          Calculador Letra NIF
        </Text>
        <Text style={styles.sectionDescription}>
          App para calcular la letra del NIF
        </Text>
          <Nif returnsNif={this.getNifAndLetter}>
            {' '}
          </Nif>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 37,
    padding: 23,
  },
  sectionTitle: {
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'green',
    margin: 37,
  },
  sectionDescription: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color: 'purple',
    margin: 37,
  },
});
