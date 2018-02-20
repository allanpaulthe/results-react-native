import React,{ component } from 'react';
import  { AppRegistry,Text,View,Alert} from 'react-native';


//const api='http://facebook.github.io/react-native/movies.json';
//const api='https://searchrestaurant.pythonanywhere.com/api/v1/?format=json&location=oslo&rtype=pizza';
//const api='http://127.0.0.1:8000/api/item/?format=json';
const marks='http://127.0.0.1:8000/api/marks/?format=json';
const login='http://127.0.0.1:8000/api/users/?format=json';
const it='http://127.0.0.1:8000/api/it/?format=json';
const cs='http://127.0.0.1:8000/api/cs/?format=json';
async function getapi() {
    try {
        let response= await fetch(marks);
        let responseJson=await response.json();
        console.log(response.json);
        //alert("result:"+JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
async function loginfunction() {
    try {
        let response= await fetch(login);
        let responseJson=await response.json();
        console.log(response.json);
       // alert("result:"+JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
async function getit() {
    try {
        let response= await fetch(it);
        let responseJson=await response.json();
        console.log(response.json);
       // alert("result:"+JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
async function getcs() {
    try {
        let response= await fetch(cs);
        let responseJson=await response.json();
        console.log(response.json);
       // alert("result:"+JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function calculate(dep,sem,rollno) {
    try {
        let urls='http://127.0.0.1:8000/apii/subs/'+dep+'/'+sem+'/'+'?format=json';
        let response= await fetch(urls);
        let subs=await response.json();
        iturl='http://127.0.0.1:8000/api/it/'+rollno+'/'+'?format=json';
        if(dep =='CS'){
            iturl='http://127.0.0.1:8000/api/cs/'+rollno+'/'+'?format=json';
        }
        let response1= await fetch(iturl);
        let marks=await response1.json();
        fail=0;
        percen=0;
        for(i=0;i<subs.length;i++){
            let s=subs[i].code;
            switch(marks[s]){
                case 'O':
                    percen=percen+subs[i].credit*10;
                    break;
                case 'A+':
                    percen=percen+subs[i].credit*9;
                    break;
                case 'A':
                    percen=percen+subs[i].credit*8;
                    break;
                case 'B+':
                    percen=percen+subs[i].credit*7;
                    break;
                case 'B':
                    percen=percen+subs[i].credit*6;
                    break;
                case 'C':
                    percen=percen+subs[i].credit*5;
                    break;
                case 'P':
                    percen=percen+subs[i].credit*4;
                    break;
                case 'F':
                    fail=1;
                    break;
                case 'absent':
                    fail=1;
                    break;
            }
        } 
        total=0;
        status='passed';
        for(i=0;i<subs.length;i++){
            total=total+subs[i].credit*10;
        }
        gpa=(percen/total)*10;
        gpa = Math.floor(gpa * 100) / 100;
        gpa=gpa.toFixed(2); 
        percen=(gpa*10)-3.75;
        percen = Math.floor(percen * 100) / 100;
        percen=percen.toFixed(2);
        if(fail==1){
            gpa=0;
            percen=0;
            status='failed';
        }
        var summary=[gpa,status,percen]
        return summary;
    } catch (error) {
        console.error(error);
    }
}
export async function calculateAll(params,dep,sem) {
    totalNo=params.length;
    try {
        let urls='http://127.0.0.1:8000/apii/subs/'+dep+'/'+sem+'/'+'?format=json';
        let response= await fetch(urls);
        let subs=await response.json();
        pass=0;
        percen=0;
        var summary=[];
        /*total=0;
        for(i=0;i<subs.length;i++){
            total=total+subs[i].credit*10;
        }*/
        for(e=1;e<=subs.length;e++){
                summary[e]=0;
        }
        for(k=0;k<totalNo;k++)
        {
            fail=0;
                for(i=0;i<subs.length;i++){
                    let s=subs[i].code;
                    switch(params[k][s]){
                        case 'F':
                            fail=1;
                            summary[++i]++;
                            break;
                        case 'absent':
                            fail=1;
                            summary[++i]++;
                            break;
                    }
                } 
            if(fail==0){
                pass=pass+1;
            }
        }
        for(i=1;i<=subs.length;i++){
            hh=totalNo-summary[i];
            qq=(hh/totalNo)*100;
            qq=qq.toFixed(1);
            summary[i]=qq;
        }
        per=(pass/totalNo)*100;
        per=per.toFixed(1);
        summary[0]=per;
        return summary;
    } catch (error) {
        console.error(error);
    }
}
export async function getSub(dep,sem) {
    try {
        let urls='http://127.0.0.1:8000/apii/subs/'+dep+'/'+sem+'/'+'?format=json';
        let response= await fetch(urls);
        let subs=await response.json();
        var sub=[];
        for (i = 1; i <= subs.length; i++) {
            sub[i]=subs[i-1].code;     
        }
        return sub;
    }catch(error){
        console.error(error);
    }   
}
export {getapi};
export {loginfunction};
export {getit,getcs};

//IN CMD TYPE adb reverse tcp:8000 tcp:8000