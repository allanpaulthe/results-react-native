import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView,Dimensions, TouchableOpacity, } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs,calculate } from '../networking/server';
const { width, height } = Dimensions.get("window");
class FlatListItem1 extends Component {
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.data}>
            <Text style={styles.welcome}>
              Mark List
            </Text>
            <Text style={styles.instructions}>
              Rollno:{this.props.item.rollno}
            </Text>
            <Text style={styles.instructions}>
                PH100:{this.props.item.PH100}
            </Text>
            <Text style={styles.instructions}>
                MA102:{this.props.item.MA102}
            </Text>
            <Text style={styles.instructions}>
                BE110:{this.props.item.BE110}
            </Text>
            <Text style={styles.instructions}>
                BE102:{this.props.item.BE102}
            </Text>
            <Text style={styles.instructions}>
                PH110:{this.props.item.PH110}
            </Text>
            <Text style={styles.instructions}>
                EC100:{this.props.item.EC100}
            </Text>
            <Text style={styles.instructions}>
                EC110:{this.props.item.EC110}
            </Text>
            <Text style={styles.instructions}>
                CS120:{this.props.item.CS120}
            </Text>
            <Text style={styles.instructions}>
                CS100:{this.props.item.CS100}
            </Text>
            <TouchableOpacity
              //onPress={() => calculate('IT','2',this.props.item.rollno)}
              onPress={() => this.props.navigate("selfA",{d:'IT',sem:'2',roll:this.props.item.rollno})}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Analyse</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
class FlatListItem2 extends Component {
  render(){
    return(
      <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>
              Mark List
            </Text>
            <Text style={styles.instructions}>
              Rollno:{this.props.item.rollno}
            </Text>
            <Text style={styles.instructions}>
                PH100:{this.props.item.PH100}
            </Text>
            <Text style={styles.instructions}>
                MA102:{this.props.item.MA102}
            </Text>
            <Text style={styles.instructions}>
                BE110:{this.props.item.BE110}
            </Text>
            <Text style={styles.instructions}>
                BE102:{this.props.item.BE102}
            </Text>
            <Text style={styles.instructions}>
                PH110:{this.props.item.PH110}
            </Text>
            <Text style={styles.instructions}>
                EE100:{this.props.item.EE100}
            </Text>
            <Text style={styles.instructions}>
                EE110:{this.props.item.EE110}
            </Text>
            <Text style={styles.instructions}>
                CS120:{this.props.item.CS120}
            </Text>
            <Text style={styles.instructions}>
                CS100:{this.props.item.CS100}
            </Text>
            <TouchableOpacity
              //onPress={() => calculate('CS','2',this.props.item.rollno)}
              onPress={() => this.props.navigate("selfA",{d:'CS',sem:'2',roll:this.props.item.rollno})}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Analyse</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
class myhome extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: []
    });
  }
  componentDidMount(){
    const { params } = this.props.navigation.state;
    if(params.department=="IT")
      this.refreshDataFromServer(1);
    if(params.department=="CS")
      this.refreshDataFromServer(2);
  }
  refreshDataFromServer(i){
    if(i==1)
      getit().then((movies)=> {
        this.setState({ dataapi: movies });
      }).catch((error)=>{
        this.setState({ dataapi: [] });
      });
    if(i==2)
      getcs().then((movies)=> {
        this.setState({ dataapi: movies });
      }).catch((error)=>{
        this.setState({ dataapi: [] });
      });
  }
  static navigationOptions = {
    title: 'Mark list',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const {state} = this.props.navigation;
    return (
     <View style={styles.container}>
        <FlatList
          data={this.state.dataapi}
          renderItem={({item,index}) => {
            if(item.rollno==state.params.rollno && state.params.department=="IT"){
                return(
                    <FlatListItem1 item={item} index={index} navigate={navigate}>
      
                    </FlatListItem1>
                  )
            }
            if(item.rollno==state.params.rollno && state.params.department=="CS"){
              return(
                  <FlatListItem2 item={item} index={index} navigate={navigate}>
    
                  </FlatListItem2>
                )
            }
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
    width:width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19B5FE"
  },
  data:{
    paddingTop:40,
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
    color:'#2c3e50',
    margin: 10
  },
  instructions: {
    fontSize: 20,
    textAlign: "center",
    color: "#3a3d42",
    fontWeight: 'bold',
    marginBottom: 5,
    padding:5,
  },
  button: {
    backgroundColor: "#00bf8f",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    height:20,
    borderRadius:20
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default myhome;
