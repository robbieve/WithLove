import React, {Component} from 'react';
import { Text, View} from 'react-native';
import styles from './styles';

class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Home Screen</Text>
        </View>
      );
    }
  }
export default Home;
