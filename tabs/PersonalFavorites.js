import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import FavoritesList from '../components/FavoritesList';

const REMOTE_FAVORITES_URL =
  'http://www.dmi.unict.it/~calanducci/LAP2/favorities.json';

export default class PersonalFavorites extends Component {
  static navigationOptions = { tabBarLabel: 'Your favorites' };
  state = {
    list: [],
    loading: true,
  };
  componentWillMount() {
    this.getFavorites();
  }
  render() {
    console.log(this.props);
    const { loading, list } = this.state;
    return (
      <FavoritesList
        data={this.state.list}
        loading={loading}
        nav={this.props.navigation}
      />
    );
  }
  async getFavorites() {
    try {
      const value = await AsyncStorage.getItem('places');
      if (value != null) 
        this.setState({list: JSON.parse(value), loading: false});
      throw 'Places not found';
    } catch (err) {
      console.log(err);
      this.getRemoteFavorites();
    }
  }
  getRemoteFavorites = () => {
    fetch(REMOTE_FAVORITES_URL).then(response =>
      response.json().then(res => {
        this.setState({ list: res.data, loading: false });
        AsyncStorage.setItem('places', JSON.stringify(res.data));
      })
    );
  };
}
