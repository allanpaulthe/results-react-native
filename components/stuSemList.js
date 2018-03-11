import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView, TouchableHighlight,
  TouchableOpacity,Dimensions } from "react-native";
import { StackNavigator } from "react-navigation";
import { getit,getcs,getImark } from '../networking/server';
const { width, height } = Dimensions.get("window");

class stuSemList extends Component {
  constructor(props){
    super(props);
    this.state=({
        dataapi: [],
      });
  }
  tryNavigate(s){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    getImark(params.d,s,params.rollno).then((movies)=> {
        this.setState({ dataapi: movies });
      }).catch((error)=>{  
        this.setState({ dataapi: []});
      }).then(()=>{
        if(this.state.dataapi.length==0){
            alert("not Available");
        }
        else{
            navigate("myhome",{rollno:params.rollno,department:params.d,sem:s})
        }
      });
  }
  static navigationOptions = {
    title: 'Semesters',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const { state } = this.props.navigation;
    return (
    <View>
        <View>
            <Text style={{
                color:'black',
                fontSize:40,
                fontStyle:'italic',
                fontWeight:'bold',
                fontFamily:'monospace',
                textAlign:'center',
                paddingTop:10
            }}>
                Semesters
            </Text>
        </View>
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>this.tryNavigate('1')}
                >
                    <Text
                        style={styles.buttonText}
                    >semster 1</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.tryNavigate('2')}
                >
                    <Text
                        style={styles.buttonText}
                    >semster 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.tryNavigate('3')}
                >
                    <Text
                        style={styles.buttonText}
                    >semster 3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.tryNavigate('4')}
                >
                    <Text
                        style={styles.buttonText}
                    >semster 4</Text>
                </TouchableOpacity>      
            </View>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection:'column',
        paddingHorizontal: 25,
      },
      row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems:'center'
      },
      button: {
        backgroundColor: 'blue',
        padding:2,
        marginTop:25,
        width:250,
        height:80,
        borderRadius:20
      },
      buttonText:{
          color:'white',
          fontSize: 30,
          fontWeight:'bold',
          textAlign:'center',
          paddingVertical:15
      },
});

export default stuSemList;
