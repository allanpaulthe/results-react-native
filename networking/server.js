import React,{ component } from 'react';
import  { AppRegistry,Text,View,Alert} from 'react-native';

//const api='http://facebook.github.io/react-native/movies.json';
//const api='https://searchrestaurant.pythonanywhere.com/api/v1/?format=json&location=oslo&rtype=pizza';
//const api='http://127.0.0.1:8000/api/item/?format=json';
const api='http://127.0.0.1:8000/api/marks/?format=json';
async function getapi() {
    try {
        let response= await fetch(api);
        let responseJson=await response.json();
        console.log(response.json);
        //alert("result:"+JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export {getapi};

//IN CMD TYPE adb reverse tcp:8000 tcp:8000