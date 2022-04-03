import {useState} from 'react'

import {Button,StyleSheet,Text,TextInput,View} from 'react-native';

export default function App() {
  //states

  const [enteredText,setEnteredText]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);



  //functions
  const goalInputHandler=(enteredText) => {
    setEnteredText(enteredText)
  };

  const addGoalHandler=() => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,enteredText,
    ]);
  }



  return (

    <View style={styles.appContainer}>
      <View style={styles.TextContainer}>
        <TextInput placeholder='your goals' style={styles.TextInput} onChangeText={goalInputHandler} />
        <Button title='add' onPress={addGoalHandler} />
      </View>
      <View style={styles.ListG}>
        <View >
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText} >{goal}</Text>
            </View>
          ))}
        </View>
      </View>

    </View>
  );
}





const styles=StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,

  },
  TextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#cccccccc'


  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8

  },
  ListG: {
    flex: 6,
    flexDirection: 'column',

  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
    padding: 8,
  }
  ,
  goalText: {

    color: 'white',
  }

});