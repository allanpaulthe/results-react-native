import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView, TouchableHighlight,
  TouchableOpacity,Dimensions } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs } from '../networking/server';
const { width, height } = Dimensions.get("window");
class FlatListItem extends Component {
  render(){
    return(
      <View>
        <TouchableOpacity activeOpacity={.5}
        onPress={() =>this.props.navigate("myhome",{rollno: this.props.item.rollno,department:this.props.department})}
        title="Home"
        >
          <View style={{
            flex:1,
            backgroundColor:this.props.index%2==0 ? '#f1c40f':'#f39c12'
          }}>
            <Text style={styles.welcome}>
              {this.props.item.rollno}
            </Text>
          </View>

          <View style={{
            height:1,
            backgroundColor:"black"
          }}>

          </View>
      </TouchableOpacity>
      </View>
    );
  }
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: [],
      data1:[],
    });
  }
  componentDidMount(){
    this.refreshDataFromServer();
  }
  refreshDataFromServer(){
    getit().then((movies)=> {
      this.setState({ dataapi: movies });
    }).catch((error)=>{
      this.setState({ dataapi: [] });
    });
    getcs().then((movies)=> {
      this.setState({ data1: movies });
    }).catch((error)=>{
      this.setState({ data1: [] });
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
        <View>
          <Text>Information Technology</Text>
        </View> 
        <FlatList
          style={styles.flat}
          data={this.state.dataapi}
          renderItem={({item,index}) => {
            return(
              <FlatListItem item={item} index={index} navigate={navigate} department={"Information Technology"} >

              </FlatListItem>
            )
          }}
          keyExtractor={item => item.rollno}
        />
        <View>
          <Text>Computer Science</Text>
        </View> 
        <FlatList
          style={styles.flat}
          data={this.state.data1}
          renderItem={({item,index}) => {
            return(
              <FlatListItem item={item} index={index} navigate={navigate} department={"Computer Science"}>

              </FlatListItem>
            )
          }}
          keyExtractor={item => item.rollno}
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
  },
  flat:{
    flex:1,
    width:width
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
