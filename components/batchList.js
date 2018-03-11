import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView, TouchableHighlight,
  TouchableOpacity,Dimensions } from "react-native";
import { StackNavigator } from "react-navigation";
import { getmark,getAvai } from '../networking/server';
const { width, height } = Dimensions.get("window");
class FlatListItem extends Component {
  render(){
    return(
      <View>
        <TouchableOpacity activeOpacity={.5}
          onPress={() =>this.props.navigate("HomeScreen",{d:this.props.department,sem:this.props.sem,b:this.props.item.batch})}
          style={styles.button}
        >
          <View style={{
            flex:1,
            backgroundColor:this.props.index%2==0 ? '#f1c40f':'#f39c12'
          }}>
            <Text style={styles.welcome}>
              {this.props.item.batch}th Batch
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

class batchList extends Component {
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
  const { navigate } = this.props.navigation;
  const { params } = this.props.navigation.state;
  indivudual=0; 
    getAvai(params.sem).then((movies)=> {
      this.setState({ dataapi: movies });
    }).catch((error)=>{  
      this.setState({ dataapi: []});
    });
}
  static navigationOptions = {
    title: 'available batches',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const { state } = this.props.navigation;
    return (
     <View style={styles.container}>
            <Text style={{
                        color:'black',
                        fontSize:35,
                        fontStyle:'italic',
                        fontWeight:'bold',
                        fontFamily:'monospace',
                        textAlign:'center',
                        paddingTop:10,
                        paddingVertical:50
                    }}>
                        Batches
            </Text>
        <FlatList
          style={styles.flat}
          data={this.state.dataapi}
          renderItem={({item,index}) => {
                return(
                    
                    <FlatListItem item={item} index={index} navigate={navigate} department={state.params.d} sem={state.params.sem} >

                    </FlatListItem>
                )
          }}
          keyExtractor={item => item.id}
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
  welcome: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: 'bold',
    color:'#2c3e50',
    margin: 20
  },
  button: {
    backgroundColor: 'blue',
    padding:2,
    marginTop:25,
    width:250,
    height:80,
    borderRadius:20
  },
});

export default batchList;
