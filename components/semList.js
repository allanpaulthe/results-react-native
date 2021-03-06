import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView, TouchableHighlight,
  TouchableOpacity,Dimensions } from "react-native";
import { StackNavigator } from "react-navigation";
import { getImark,semCompare,getAvai } from '../networking/server';
const { width, height } = Dimensions.get("window");

class semList extends Component {
  constructor(props){
    super(props);
    this.state=({
        dataapi: [],
        aaa:[],
      });
  }
  tryNavigate(o,s){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    if(o==1){
        semCompare(params.d).then((movies)=> {
            this.setState({ dataapi: movies });
        }).catch((error)=>{  
            this.setState({ dataapi: []});
        }).then(()=>{
            if(this.state.dataapi.length==0){
                alert("not Available");
            }
            else{
                navigate("semCompare1",{d:params.d})
            }
        });
    }
    if(o==2){
        getAvai(s).then((movies)=> {
            this.setState({ aaa: movies });
        }).catch((error)=>{  
            this.setState({ aaa: []});
        }).then(()=>{
            if(this.state.aaa.length==0){
                alert("not Available");
            }
            else{
                navigate("batchList",{d:params.d,sem:s})
            }
        });
    }
  }
  tryExcel(){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    semCompare(params.d).then((movies)=> {
        this.setState({ dataapi: movies });
    }).catch((error)=>{  
        this.setState({ dataapi: []});
    }).then(()=>{
        if(this.state.dataapi.length==0){
            alert("not Available");
        }
        else{
            navigate("excelPage",{d:params.d});
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
                fontSize:35,
                fontStyle:'italic',
                fontWeight:'bold',
                fontFamily:'monospace',
                textAlign:'center',
                paddingTop:10
            }}>
                Semesters
            </Text>
            <TouchableOpacity
            //onPress={() => calculate('IT','2',this.props.item.rollno)}
             onPress={() => this.tryNavigate(1)}
            >
                <View style={styles.button1}>
                    <Text style={styles.buttonText1}>Semester comparison</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            //onPress={() => calculate('IT','2',this.props.item.rollno)}
             onPress={() => this.tryExcel()}
            >
                <View style={styles.button1}>
                    <Text style={styles.buttonText1}>Excel Results</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.tryNavigate(2,'1')}
                >
                    <Text
                        style={styles.buttonText}
                    >semester 1</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.tryNavigate(2,'2')}
                >
                    <Text
                        style={styles.buttonText}
                    >semester 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.tryNavigate(2,'3')}
                >
                    <Text
                        style={styles.buttonText}
                    >semester 3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.tryNavigate(2,'4')}
                >
                    <Text
                        style={styles.buttonText}
                    > semester 4</Text>
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
        height:60,
        borderRadius:20
      },
      buttonText:{
          color:'white',
          fontSize: 30,
          fontWeight:'bold',
          textAlign:'center',
          paddingVertical:8
      },
      button1: {
        backgroundColor: "#00bf8f",
        paddingVertical: 20,
        marginTop:40,
        alignItems: "center",
        justifyContent: "center",
        height:20,
        width:width,
        borderRadius:10
      },
      buttonText1: {
        color: "#FFF",
        fontSize: 18,
      },
});

export default semList;
