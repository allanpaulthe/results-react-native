import React, { Component } from "react";
import { StyleSheet, Text, Button, View, FlatList, ScrollView,Dimensions,Alert,TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { calculateAll,getSub,semCompare } from '../networking/server';
const { width, height } = Dimensions.get("window");
import { Bar } from 'react-native-pathjs-charts';
import RNFetchBlob from 'react-native-fetch-blob';
class FlatListItem1 extends Component {
    downLoad(sem,batch,dep){
            const { config, fs } = RNFetchBlob
            let PictureDir = fs.dirs.PictureDir // this is the pictures directory. You can check the available directories in the wiki.
            let options = {
            fileCache: true,
            addAndroidDownloads : {
            useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
            notification : false,
            path:  PictureDir + "/Result/s"+sem+"b"+batch+"d"+dep+".xlsx", // this is the path where your downloaded file will live in
            description : 'Downloading image.'
            }
        }
        let url="http://127.0.0.1:8000/apii/extractToExcel/"+sem+"/"+batch+"/"+dep+"/";
        config(options).fetch('GET', url).then((res) => {
            alert("download complete");
        })
    }
  render(){
    return(
      <View>
            <TouchableOpacity style={{
              flex:1,
              backgroundColor:'#f39c12',
              marginTop:25,
              height:100,
            }}
            onPress={() =>this.downLoad(this.props.item.semester,this.props.item.batch,this.props.d)}
            >
              <Text style={styles.welcome}>
                {this.props.item.name}
              </Text>
              <Text style={styles.data}>
                  Click to download the result in the excel format
              </Text>
            </TouchableOpacity>
          <View style={{
            height:3,
            backgroundColor:"black"
          }}>
          </View>
      </View>
    );
  }
}
class excelPage extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: [],
      subs:[],
      total:[],
      res:[]
    });
  }
  componentDidMount(){
    const { params } = this.props.navigation.state;
   // this.refreshDataFromServer();
    this.getResult();
  }
  getResult(){
    const { params } = this.props.navigation.state;
    semCompare(params.d).then((alan)=>{
      this.setState({subs:alan});
    }).catch((error)=>{
      this.setState({subs:[]});
    })
  } 
  static navigationOptions = {
    title: 'Excel results',
    headerStyle: { backgroundColor: '#e74c3c',height:25 },
    headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    const { navigate } = this.props.navigation;
    const { state } = this.props.navigation;
    return (
     <View style={styles.container}>
        <FlatList
          style={{
            flex:1,
            width:width,
          }}
          data={this.state.subs}
          renderItem={({item,index}) => {
              if(this.state.subs!=[]){
                    return(
                        <FlatListItem1 item={item} index={index} d={state.params.d}>
        
                        </FlatListItem1>
                    )
                }
                  
          }}
          keyExtractor={item => item.name}
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
    backgroundColor: "#eccc68"
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
    color:'#2c3e50',
    margin: 10
  },
  data:{
    fontSize:20,
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

export default excelPage;
