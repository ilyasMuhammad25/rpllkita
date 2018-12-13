

import React, { Component } from 'react';
import { View,StyleSheet,Text,Button,TextInput, TouchableOpacity,Image } from 'react-native';

class App extends Component{ 
  render() {
    return (
      <View style={styles.container}>
     
        <Image style={styles.logo} source={require('./images/ipb.png')}/>
        {/* <Text>{'\n'}</Text> */}
        <Text style={{height:100,textAlign:'center',fontSize:30,fontWeight:'bold'}}>IPB e-booking Seminar</Text>
        
      
        <TextInput style={{height:50,width:350,backgroundColor:'rgba(255,255,255,0.2)',color:'#FFF',
        fontSize:20}} 
        placeholder='User name IPB' value={this.state.ms}  />
        <Text>{'\n'}</Text>
        <TextInput style={{height:50,width:350,backgroundColor:'rgba(255,255,255,0.2)',color:'#FFF',
        fontSize:20}}  placeholder='Password'/>
        
        <Text>{'\n'}</Text>
        <TouchableOpacity>
        <Button 
        
        title="Login" color="#2e71ff" style={{width:50,height:100}}/>
        </TouchableOpacity>
         <Text>{'\n'}</Text> 
        <Text style={{textAlign:'center',fontWeight:'bold'}}>lupa Password?</Text>
      
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#ededed',
    justifyContent: 'center',
    paddingHorizontal:30
  },
  welcome: {
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'violet',
  },
  image:{
    width:290,
    height:350
  },
  text:{
    fontSize: 20,
    textAlign:'center'
  },
  logo:{
    height:300,
    width:330,
    alignItems: 'center',
    justifyContent:'center'
    
  }
});

export default App;

