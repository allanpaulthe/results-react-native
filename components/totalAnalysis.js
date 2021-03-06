import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView,Dimensions,Alert,TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { calculateAll,getSub,SubAna } from '../networking/server';
const { width, height } = Dimensions.get("window");
class FlatListItem1 extends Component {
  render(){
    return(
      <View>
          <TouchableOpacity style={{
            flex:1,
            backgroundColor:'#f39c12'
          }}
          onPress={() =>this.props.navigate("SubAnalysis",{d:this.props.d,sem:this.props.sem,b:this.props.b,sub:this.props.item.name})}
          >
            <Text style={styles.welcome}>
              {this.props.item.name}
            </Text>
            <Text style={styles.data}>
                pass percentage:  {this.props.item.v}
            </Text>
          </TouchableOpacity>
          <View style={{
            height:1,
            backgroundColor:"black"
          }}>
          </View>
      </View>
    );
  }
}
class totalA extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: [],
      subs:[],
      total:[],
    });
  }
  componentWillMount(){
    const { params } = this.props.navigation.state;
    this.refreshDataFromServer();
  }
  refreshDataFromServer(){
    const { params } = this.props.navigation.state;
      calculateAll(params.d,params.sem,params.b).then((movies)=> {
        this.setState({ dataapi: movies });
        getSub(params.d,params.sem).then((alan)=>{
          this.setState({ subs: alan });
          for(i=1;i<alan.length;i++){
            var obj={
              "v":movies[i],
              "name":alan[i],
            }
            this.state.total.push(obj);
          }
        })
      });
  }
  static navigationOptions = {
    title: 'Total Analysis',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const {state} = this.props.navigation;
    return (
     <View style={styles.container}>
        <Text style={styles.welcome}>
              Total:{this.state.dataapi[0]}
        </Text>
        <FlatList
          style={{
            flex:1,
            width:width,
          }}
          data={this.state.total}
          renderItem={({item,index}) => {
                return(
                    <FlatListItem1 item={item} index={index} d={state.params.d} sem={state.params.sem} b={state.params.b} navigate={navigate} >
      
                    </FlatListItem1>
                  )
          }}
          keyExtractor={item => item.name}
        />  
        <TouchableOpacity
          //onPress={() => calculate('IT','2',this.props.item.rollno)}
          onPress={() => navigate("chart",{subs:this.state.subs,percen:this.state.dataapi})}
        >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Graphical view</Text>
              </View>
        </TouchableOpacity>
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
    backgroundColor: "#eccc68"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color:'#2c3e50',
    margin: 10
  },
  data:{
    fontSize:15,
    textAlign:'center',
    
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
    height:20,
    width:width,
    borderRadius:10
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default totalA;
