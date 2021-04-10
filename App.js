/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { StyleSheet, Text,TextInput,SafeAreaView,View,Button} from 'react-native';
 
 export default class App extends Component { 
   
   constructor(){
   super(); 
   this.state = {
    word:'',
    CountVowel:0,
    CountCons:0,
    WordLength:0,
    Splitwords:''
   } 
   }
   
   

   analyze() {
    this.state.CountVowel=0;
    this.state.CountCons=0;
    const Splitwords=this.state.word.split('');
    this.state.WordLength=Splitwords.length;
    for (let i = 0; i< Splitwords.length; i++) {
    if(Splitwords[i]=='a'||Splitwords[i]=='e'||Splitwords[i]=='i'||Splitwords[i]=='o'||Splitwords[i]=='u'||
       Splitwords[i]=='A'||Splitwords[i]=='E'||Splitwords[i]=='I'||Splitwords[i]=='O'||Splitwords[i]=='U')
     {
      this.state.CountVowel+=1;
     }
     else{
      this.state.CountCons+=1;
     }
    }
    this.state.Splitwords=Splitwords.join('');
    this.setState({ word: '' })
    };

    
   
 
   render() {
   return (
    <View style={styles.container}>
   <View style={styles.container}>
   <Text style={styles.header}>A Word Analyzer</Text>
   <table>
    <tr>
    <td>Word</td> 
      <td><TextInput style={styles.TextInput} onChangeText={(word) => this.setState({word})} placeholder='enter word'/></td>
    </tr>


    <tr> <td>

    </td>
      <td><View style={styles.button}>
            <Button color="#1d2424" 
         title="Analyze"
         onPress={() => this.analyze() }/>
             </View></td>
    </tr>


    <tr>
         <td>
                Word
         </td>
        <td>   :{this.state.Splitwords}
        </td>
    </tr>

    <tr>
         <td>
            No of Consonants 
        </td>
      <td>:{this.state.CountCons}</td>
    </tr>
    <tr>
        <td> No of Vowels </td>
      <td>:{this.state.CountVowel}</td>
    </tr>
    <tr>
      <td> No of Character </td>
      <td>:{this.state.WordLength}</td>
    </tr>

    </table>
   </View>
    
   </View>
   ); 
   }}
 
  const styles = StyleSheet.create({ 
   container: {
   flex: 1,
   alignItems: 'center',
   backgroundColor: '#ffb7c5',
   }, 
   
   ButtonContainer:{
     marginHorizontal: 50,
     alignItems: 'center', 
     marginTop: 10,
   },
 
   button:{
    float: 'left'

   },
 TextInput:{

  backgroundColor: '#FFFFFF',
 },

 table:{
  alignItems:'center',
  textAlign:'center'
 },
   header: {
 
   marginTop: 60,
   marginBottom:40,
   fontSize: 30, 
   textAlign: 'center', 
   margin: 10,
   },
   
   contents: {
   textAlign: 'center',
   color: '#333333', 
   marginBottom: 5,
   } 
  })