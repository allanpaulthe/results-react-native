import React,{ component } from 'react';
import  { AppRegistry,Text,View,Alert} from 'react-native';


//const api='http://facebook.github.io/react-native/movies.json';
//const api='https://searchrestaurant.pythonanywhere.com/api/v1/?format=json&location=oslo&rtype=pizza';
//const api='http://127.0.0.1:8000/api/item/?format=json';
const marks='http://127.0.0.1:8000/api/marks/?format=json';
const login='http://127.0.0.1:8000/api/users/?format=json';
let it='http://127.0.0.1:8000/api/it/?format=json';
let cs='http://127.0.0.1:8000/api/cs/?format=json';
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
export async function getmark(d,s,batch) {
    try {
        cs='http://127.0.0.1:8000/apii/marksBatch/'+d+'/'+s+'/'+batch+'/?format=json'
        let response= await fetch(cs);
        let responseJson=await response.json();
        console.log(response.json);
       //alert("result:"+JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}
export async function getImark(d,s,rollno) {
    try {
        cs='http://127.0.0.1:8000/apii/marksroll/'+d+'/'+s+'/'+rollno+'/?format=json'
        let response= await fetch(cs);
        let responseJson=await response.json();
       //alert("result:"+JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        alert("not available");
    }
}

export async function calculate(dep,sem,rollno) {
   try {
        let urls='http://127.0.0.1:8000/apii/subs/'+dep+'/'+sem+'/'+'?format=json';
        let response= await fetch(urls);
        let subs=await response.json();
        let iturl='http://127.0.0.1:8000/apii/marksroll/'+dep+'/'+sem+'/'+rollno+'/?format=json'
        let response1= await fetch(iturl);
        let marks=await response1.json();
        status='passed';
        percen=0;
        CreditArray={'O':10,"A+":9,"A":8,"B+":7,"B":6,"C":5,"P":4,"F":0,"FA":0,'FE':0,"FS":0,"absent":0};
        q=0;
        total=0;
        ArrearSubs='';
        for(i=0;i<subs.length;i++){
            let s=subs[i].code;
                if(marks[0][s]){
                    gr=marks[0][s];
                    percen=percen+subs[i].credit*CreditArray[gr];
                    total=total+subs[i].credit*10;
                    if(CreditArray[gr]==0){
                        status='failed';
                        ArrearSubs=ArrearSubs+s+',';
                        q+=1;
                    }
                }
        } 
        gpa=(percen/total)*10;
        gpa = Math.floor(gpa * 100) / 100;
        gpa=gpa.toFixed(2); 
        percen=(gpa*10)-3.75;
        percen = Math.ceil(percen * 100) / 100;
        percen=percen.toFixed(2);
        if(status=='failed'){
            gpa=0;
            percen=0;
            status='failed';
        }
        var summary=[gpa,status,percen,ArrearSubs,q];
        return summary;
    } catch (error) {
        console.error(error);
    }
}
export async function calculateAll(dep,sem,b) {
    try {
        let urls='http://127.0.0.1:8000/apii/subs/'+dep+'/'+sem+'/'+'?format=json';
        let response= await fetch(urls);
        let subs=await response.json();
        cs='http://127.0.0.1:8000/apii/marksBatch/'+dep+'/'+sem+'/'+b+'/?format=json';
        let response2= await fetch(cs);
        let params=await response2.json();
        totalNo=params.length;
        pass=0;
        percen=0;
        var summary=[];
        var avail=[];
        d=0;
        for(j=0;j<subs.length;j++){
            let s=subs[j].code;
            if(params[0][s]){
                avail[d]=s;
                d+=1;
            }
        }
        for(e=1;e<=avail.length;e++){
            summary[e]=0;
        }
        for(k=0;k<totalNo;k++)
        {
            var fail=0;
                for(i=0;i<avail.length;i++){
                    let s=avail[i];
                        switch(params[k][s]){
                            case 'O':
                                
                                break;
                            case 'A+':
                                
                                break;
                            case 'A':
                                
                                break;
                            case 'B+':
                                
                                break;
                            case 'B':
                                
                                break;
                            case 'C':
                                
                                break;
                            case 'P':
                                
                                break;
                            case 'F':
                            case 'FE':
                            case 'FA':
                            case 'FS':
                                fail=1;
                                summary[i+1]++;
                                break;
                            case 'absent':
                                fail=1;
                                summary[i+1]++;
                                break;
                            default:
                                fail=1;
                                summary[i+1]++;
                                break;
                        }  
                } 
            if(fail==0){
                pass=pass+1;
            }
        }
        for(i=1;i<=avail.length;i++){
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
export async function SubAna(d,se,bat,sub) {
    try {
        cs='http://127.0.0.1:8000/apii/marksBatch/'+d+'/'+se+'/'+bat+'/?format=json';
        let response2= await fetch(cs);
        let params=await response2.json();
        totalNo=params.length;
            var summary=[];
            for(e=0;e<15;e++){
                summary[e]=0;
            }
            fail=0;
            for(k=0;k<totalNo;k++)
            {
                        switch(params[k][sub]){
                            case 'O':
                                summary[0]+=1;
                                break;
                            case 'A+':
                                summary[1]+=1;
                                break;
                            case 'A':
                                summary[2]+=1;
                                break;
                            case 'B+':
                                summary[3]+=1;
                                break;
                            case 'B':
                                summary[4]+=1;
                                break;
                            case 'C':
                                summary[5]+=1;
                                break;
                            case 'P':
                                summary[6]+=1;
                                break;
                            case 'F':
                            case 'FE':
                            case 'FA':
                            case 'FS':
                                fail+=1;
                                break;
                            case 'absent':
                                fail+=1;
                                break;
                            default:
                                fail+=1;
                                break;
                        }
            }
        hh=totalNo-fail;
        qq=(hh/totalNo)*100;
        qq=qq.toFixed(1);
        summary[7]=qq;
        summary[8]=sub;
        summary[9]=fail;
        summary[10]=hh;
        return summary;
    } catch (error) {
        alert(error);
    }
}
export async function getSub(dep,sem) {
    try {
        let urls='http://127.0.0.1:8000/apii/subs/'+dep+'/'+sem+'/'+'?format=json';
        let response= await fetch(urls);
        let subs=await response.json();
        cs='http://127.0.0.1:8000/apii/marks/'+dep+'/'+sem+'/?format=json';
        let response2= await fetch(cs);
        let params=await response2.json();
        var avail=[];
        d=0;
        for(j=0;j<subs.length;j++){
            let s=subs[j].code;
            if(params[0][s]){
                avail[d]=s;
                d+=1;
            }
        }
        var sub=[];
        sub[0]='Total';
        for (i = 0; i < avail.length; i++) {
            sub[i+1]=avail[i];     
        }
        return sub;
    }catch(error){
        console.error(error);
    }   
}
export async function semCompare(d) {
    totalNo=0;
    hhh=[];
    avai=[];
        var summary=[];
        var name=[];
        var semester=[];
        var batchh=[];
        let url='http://127.0.0.1:8000/api/available/';
        let response1= await fetch(url);
        let avai=await response1.json();
        for(h=0;h<avai.length;h++){
                    se=avai[h].semester;
                    bat=avai[h].batch
                    cs='http://127.0.0.1:8000/apii/marksBatch/'+d+'/'+se+'/'+bat+'/?format=json';
                    let response2= await fetch(cs);
                    let responseJson=await response2.json();
                    totalNo=responseJson.length;
                    hhh=responseJson;
                    let urls='http://127.0.0.1:8000/apii/subs/'+d+'/'+se+'/'+'?format=json';
                    let response3 = await fetch(urls);
                    let subs=await response3.json();
                    pass=0;
                    percen=0;
                    for(k=0;k<totalNo;k++)
                    {
                        fail=0;
                            for(i=0;i<subs.length;i++){
                                let s=subs[i].code;
                                switch(hhh[k][s]){
                                    case 'F':
                                    case 'FE':
                                    case 'FA':
                                    case 'FS':
                                        fail=1;
                                        break;
                                    case 'absent':
                                        fail=1;
                                        break;
                                }
                            } 
                        if(fail==0){
                            pass=pass+1;
                        }
                    }
                    per=(pass/totalNo)*100;
                    per=per.toFixed(1);
                    summary[h]=per;
                    name[h]='semester'+' '+se+'('+hhh[0].batch+'th batch)';
                    batchh[h]=hhh[0].batch;
                    semester[h]=se;

                              
        }//for loop
    var total=[];
    for(i=0;i<summary.length;i++){
        var obj={
          "v":summary[i],
          "name":name[i],
          "semester":semester[i],
          "batch":batchh[i],
        }
        total.push(obj);
    }
    return total;
}
export async function getAvai(sem) {
    try {
        let url='http://127.0.0.1:8000/apii/GetAvai/'+sem+'/';
        let response= await fetch(url);
        let avai=await response.json();
        return avai;
    }catch(error){
        console.error(error);
    }   
}
export {getapi};
export {loginfunction};
export {getit,getcs};

//IN CMD TYPE adb reverse tcp:8000 tcp:8000