import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView,Dimensions, TouchableOpacity, } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs,calculate,getImark } from '../networking/server';
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
class FlatListItem3 extends Component {
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
                MA101:{this.props.item.MA101}
            </Text>
            <Text style={styles.instructions}>
                CY100:{this.props.item.CY100}
            </Text>
            <Text style={styles.instructions}>
                BE100:{this.props.item.BE100}
            </Text>
            <Text style={styles.instructions}>
                BE10105:{this.props.item.BE10105}
            </Text>
            <Text style={styles.instructions}>
                BE103:{this.props.item.BE103}
            </Text>
            <Text style={styles.instructions}>
                CY110:{this.props.item.CY110}
            </Text>
            <Text style={styles.instructions}>
                CS110:{this.props.item.CS110}
            </Text>
            <Text style={styles.instructions}>
                EE110:{this.props.item.EE110}
            </Text>
            <Text style={styles.instructions}>
                EE100:{this.props.item.EE100}
            </Text>
            <TouchableOpacity
              //onPress={() => calculate('CS','2',this.props.item.rollno)}
              onPress={() => this.props.navigate("selfA",{d:'IT',sem:'1',roll:this.props.item.rollno})}
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
class FlatListItem4   extends Component {
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
                MA101:{this.props.item.MA101}
            </Text>
            <Text style={styles.instructions}>
                CY100:{this.props.item.CY100}
            </Text>
            <Text style={styles.instructions}>
                BE100:{this.props.item.BE100}
            </Text>
            <Text style={styles.instructions}>
                BE10105:{this.props.item.BE10105}
            </Text>
            <Text style={styles.instructions}>
                EC100:{this.props.item.EC100}
            </Text>
            <Text style={styles.instructions}>
                BE103:{this.props.item.BE103}
            </Text>
            <Text style={styles.instructions}>
                CY110:{this.props.item.CY110}
            </Text>
            <Text style={styles.instructions}>
                CS110:{this.props.item.CS110}
            </Text>
            <Text style={styles.instructions}>
                EC110:{this.props.item.EC110}
            </Text>
            <TouchableOpacity
              //onPress={() => calculate('CS','2',this.props.item.rollno)}
              onPress={() => this.props.navigate("selfA",{d:'CS',sem:'1',roll:this.props.item.rollno})}
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
class FlatListItem5   extends Component {
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
                MA201:{this.props.item.MA201}
            </Text>
            <Text style={styles.instructions}>
                CS201:{this.props.item.CS201}
            </Text>
            <Text style={styles.instructions}>
                IT201:{this.props.item.IT201}
            </Text>
            <Text style={styles.instructions}>
                CS205:{this.props.item.CS205}
            </Text>
            <Text style={styles.instructions}>
                IT203:{this.props.item.IT203}
            </Text>
            <Text style={styles.instructions}>
                HS200:{this.props.item.HS200}
            </Text>
            <Text style={styles.instructions}>
                CS231:{this.props.item.CS231}
            </Text>
            <Text style={styles.instructions}>
                IT231:{this.props.item.IT231}
            </Text>
            <TouchableOpacity
              //onPress={() => calculate('CS','2',this.props.item.rollno)}
              onPress={() => this.props.navigate("selfA",{d:'IT',sem:'3',roll:this.props.item.rollno})}
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
class FlatListItem6   extends Component {
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
                MA201:{this.props.item.MA201}
            </Text>
            <Text style={styles.instructions}>
                CS201:{this.props.item.CS201}
            </Text>
            <Text style={styles.instructions}>
                CS203:{this.props.item.CS203}
            </Text>
            <Text style={styles.instructions}>
                CS205:{this.props.item.CS205}
            </Text>
            <Text style={styles.instructions}>
                CS207:{this.props.item.CS207}
            </Text>
            <Text style={styles.instructions}>
                HS200:{this.props.item.HS200}
            </Text>
            <Text style={styles.instructions}>
                CS231:{this.props.item.CS231}
            </Text>
            <Text style={styles.instructions}>
                CS233:{this.props.item.CS233}
            </Text>
            <TouchableOpacity
              //onPress={() => calculate('CS','2',this.props.item.rollno)}
              onPress={() => this.props.navigate("selfA",{d:'CS',sem:'3',roll:this.props.item.rollno})}
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
class FlatListItem7   extends Component {
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
                MA202:{this.props.item.MA202}
            </Text>
            <Text style={styles.instructions}>
                CS202:{this.props.item.CS202}
            </Text>
            <Text style={styles.instructions}>
                IT202:{this.props.item.IT202}
            </Text>
            <Text style={styles.instructions}>
                IT204:{this.props.item.IT204}
            </Text>
            <Text style={styles.instructions}>
                CS208:{this.props.item.CS208}
            </Text>
            <Text style={styles.instructions}>
                HS210:{this.props.item.HS210}
            </Text>
            <Text style={styles.instructions}>
                IT232:{this.props.item.IT232}
            </Text>
            <Text style={styles.instructions}>
                IT234:{this.props.item.IT234}
            </Text>
            <TouchableOpacity
              //onPress={() => calculate('CS','2',this.props.item.rollno)}
              onPress={() => this.props.navigate("selfA",{d:'IT',sem:'4',roll:this.props.item.rollno})}
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
class FlatListItem8   extends Component {
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
                MA202:{this.props.item.MA202}
            </Text>
            <Text style={styles.instructions}>
                CS202:{this.props.item.CS202}
            </Text>
            <Text style={styles.instructions}>
                CS204:{this.props.item.CS204}
            </Text>
            <Text style={styles.instructions}>
                CS206:{this.props.item.CS206}
            </Text>
            <Text style={styles.instructions}>
                CS208:{this.props.item.CS208}
            </Text>
            <Text style={styles.instructions}>
                HS210:{this.props.item.HS210}
            </Text>
            <Text style={styles.instructions}>
                CS232:{this.props.item.CS232}
            </Text>
            <Text style={styles.instructions}>
                CS234:{this.props.item.CS234}
            </Text>
            <TouchableOpacity
              //onPress={() => calculate('CS','2',this.props.item.rollno)}
              onPress={() => this.props.navigate("selfA",{d:'CS',sem:'4',roll:this.props.item.rollno})}
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
      dataapi: [],
    });
  }
  componentDidMount(){
      this.refreshDataFromServer();
  }
  refreshDataFromServer(){
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
      getImark(params.department,params.sem,params.rollno).then((movies)=> {
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
            if(item.rollno==state.params.rollno && state.params.department=="IT" && state.params.sem=='2'){
                return(
                    <FlatListItem1 item={item} index={index} navigate={navigate}>
      
                    </FlatListItem1>
                  )
            }
            if(item.rollno==state.params.rollno && state.params.department=="CS" && state.params.sem=='2'){
              return(
                  <FlatListItem2 item={item} index={index} navigate={navigate}>
    
                  </FlatListItem2>
                )
            }
            if(item.rollno==state.params.rollno && state.params.department=="IT" && state.params.sem=='1'){
              return(
                  <FlatListItem3 item={item} index={index} navigate={navigate}>
    
                  </FlatListItem3>
                )
            }
            if(item.rollno==state.params.rollno && state.params.department=="CS" && state.params.sem=='1'){
              return(
                  <FlatListItem4 item={item} index={index} navigate={navigate}>
    
                  </FlatListItem4>
                )
            }
            if(item.rollno==state.params.rollno && state.params.department=="IT" && state.params.sem=='3'){
              return(
                  <FlatListItem5 item={item} index={index} navigate={navigate}>
    
                  </FlatListItem5>
                )
            }
            if(item.rollno==state.params.rollno && state.params.department=="CS" && state.params.sem=='3'){
              return(
                  <FlatListItem6 item={item} index={index} navigate={navigate}>
    
                  </FlatListItem6>
                )
            }
            if(item.rollno==state.params.rollno && state.params.department=="CS" && state.params.sem=='4'){
              return(
                  <FlatListItem8 item={item} index={index} navigate={navigate}>
    
                  </FlatListItem8>
                )
            }
            if(item.rollno==state.params.rollno && state.params.department=="IT" && state.params.sem=='4'){
              return(
                  <FlatListItem7 item={item} index={index} navigate={navigate}>
    
                  </FlatListItem7>
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
