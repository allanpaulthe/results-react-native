'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';

import { Bar } from 'react-native-pathjs-charts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d3436',
  },
});

class chart extends Component {
  constructor(props){
    super(props);
    this.state=({
      dataapi: []
    });
  }
  componentWillMount(){
    const { params } = this.props.navigation.state;
    for(i=1;i<params.subs.length;i++){
      var obj=[{
        "v":params.percen[i],
        "name":params.subs[i],
      }]
      this.state.dataapi.push(obj);
    }
    //alert("result:"+JSON.stringify(this.state.dataapi));

  }

    static navigationOptions = {
        title: 'Graphical Analysis',
        headerStyle: { backgroundColor: '#e74c3c',height:25 },
        headerTitleStyle: { color: '#22313f',fontSize:15,justifyContent:"center",alignSelf: 'center' },
      };
  render() {

    let options = {
      width: 300,
      height: 300,
      margin: {
        top: 60,
        left: 15,
        bottom: 50,
        right: 10
      },
      color: '#8e44ad',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 2
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 13,
          fontWeight: true,
          fill: '#f39c12',
          rotate: -80
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: true,
          fill: '#f39c12'
        }
      }
    }

    return (
      <View style={styles.container}>
        <Bar data={this.state.dataapi} options={options} accessorKey='v'/>
      </View>
    )
  }
}

export default chart;