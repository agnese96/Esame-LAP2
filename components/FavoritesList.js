import React, { Component } from 'react';
import { Constants } from 'expo';
import { StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Text,
  Spinner,
  Right,
  Button,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';

import FavoritePlace from './FavoritePlace';
//import AddPlace from '../screens/AddPlace';
import Details from '../screens/Details';

export default class FavoritesList extends Component {
  
  render() {
    console.log(this.props);
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Your favorite places</Title>
          </Body>
          <Right>
            <Button transparent onPress={this._navToAdd}>
              <MaterialIcons name='add' size={25} color='white' />
            </Button>
          </Right>
        </Header>
        <Content>
          {this.props.loading ? (
            <Spinner color="blue" />
          ) : (
            <FlatList
              data={this.props.data}
              renderItem={obj => <FavoritePlace item={obj.item} onPress={this._navToDetails}/>}
              keyExtractor={item => item.id}
            />
          )}
        </Content>
      </Container>
    );
  }
  
  _navToAdd = () => {
    this.props.nav.navigate('AddPlace', {onAdd: this._add})
  }
  _navToDetails = () => {
    console.log(this.props);
    this.props.nav.navigate('Details', {item: this.props.item});
  }
  _add = (item) => {
    console.log(item);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
