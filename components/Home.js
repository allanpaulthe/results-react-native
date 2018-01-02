import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView } from "react-native";
import { StackNavigator } from "react-navigation";
import { getapi } from '../networking/server';
class FlatListItem extends Component {
  render(){
    return(
      <View>
          <View style={{
            flex:1,
            backgroundColor:this.props.index%2==0 ? '#f1c40f':'#f39c12'
          }}>
            <Text style={styles.welcome}>
              {this.props.item.rollno}
            </Text>
            <Text style={styles.instructions}>
              {this.props.item.marks}
            </Text>
          </View>

          <View style={{
            height:1,
            backgroundColor:"black"
          }}>

          </View>
      </View>
    );
  }
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: []
    });
  }
  componentDidMount(){
    this.refreshDataFromServer();
  }
  refreshDataFromServer(){
    getapi().then((movies)=> {
      this.setState({ dataapi: movies });
    }).catch((error)=>{
      this.setState({ dataapi: [] });
    });
  }
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
     <View style={styles.container}>
        <FlatList
          data={this.state.dataapi}
          renderItem={({item,index}) => {
            return(
              <FlatListItem item={item} index={index}>

              </FlatListItem>
            )
          }}
          keyExtractor={item => item.id}
        />        
        <Button
          onPress={() => navigate("SecondScreen")}
          title="Home"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color:'#2c3e50',
    margin: 10
  },
  instructions: {
    fontSize: 13,
    textAlign: "center",
    color: "#3a3d42",
    marginBottom: 5,
    padding:5,
  },
});

export default Home;
