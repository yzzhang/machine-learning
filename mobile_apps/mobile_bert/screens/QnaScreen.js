
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Image, Button, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

import * as qna from '@tensorflow-models/qna'

import Constants from 'expo-constants'

export default class QnaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false,
      isModelReady: false,
      default_question: "Who is the CEO of Google?",
      default_passage: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet.",
      question: ' default question',
      passage: ' default pessage',
      answers: null,
    };
  }

  async componentDidMount() {
    await tf.ready(); // preparing TensorFlow
    this.setState({ isTfReady: true,});

    this.model = await qna.load(); // preparing MobileBERT model qna
    this.setState({ isModelReady: true });
  }

  findAnswers = async () => {
    try {
      const question = this.state.default_question;
      const passage  = this.state.default_passage;
    
      const answers = await this.model.findAnswers(question, passage);

      console.log('answers: ');
      console.log(answers);

      return answers;

    } catch (error) {
      console.log('Exception Error: ', error)
    }
  }

  /*
  answers:  

  Array [
  Object {
    "endIndex": 1206,
    "score": 12.2890625,
    "startIndex": 1186,
    "text": "replacing Larry Page",
  },
  Object {
    "endIndex": 1206,
    "score": 10.87109375,
    "startIndex": 1150,
    "text": "Pichai was appointed CEO of Google, replacing Larry Page",
  },
  Object {
    "endIndex": 1206,
    "score": 9.658203125,
    "startIndex": 1196,
    "text": "Larry Page",
  },
  Object {
    "endIndex": 1156,
    "score": 5.2802734375,
    "startIndex": 1150,
    "text": "Pichai",
  },
  ]
  */
  renderAnswer = (answer, index) => {
    const text = answer.text;
    const score  = answer.score;
    const startIndex = answer.startIndex;
    const endIndex = answer.endIndex;

    return (
      <View style={styles.welcomeContainer}>
        <Text  key={answer.text} style={styles.text}>
          Answer: {text} {', '} Probability: {score} {', '} start: {startIndex} {', '} end: {endIndex}
        </Text>
      </View>
    )
  }

  render() {
    const { isTfReady, isModelReady, passage, question, answers } = this.state

    const onPress = () => {
      this.findAnswers().then((the_answers) => {
          this.setState({ answers: the_answers });
      })
    }

    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/tfjs.jpg')
                : require('../assets/images/tfjs.jpg')
            }
            style={styles.welcomeImage}
          />

        <StatusBar barStyle='light-content' />
        <View style={styles.loadingContainer}>
          <Text style={styles.text}>
            TensorFlow.js ready? {isTfReady ? <Text>✅</Text> : ''}
          </Text>

          <View style={styles.loadingModelContainer}>
            <Text style={styles.text}>MobileBERT model qna ready? </Text>
            {isModelReady ? (
              <Text style={styles.text}>✅</Text>
            ) : (
              <ActivityIndicator size='small' />
            )}
          </View>
        </View>
        
        <View style={{flexDirection: "row"}}>
            <Text style={styles.text}> 
              Passage: 
            </Text>
            <TextInput
                style={styles.text}
                multiline
                numberOfLines={30}
                placeholder='passage'
                onChangeText={text => this.setState({passage: text})}
                value={this.state.passage}
            /> 

        </View>

        <View> 
              <Text>  
              </Text> 
        </View>
              
        <View style={{flexDirection: "row"}}> 
            <Text style={styles.text}> 
              Question: 
            </Text>

            <TextInput
                style={styles.text}
                placeholder='question'
                onChangeText={text => this.setState({question: text})}
                value={this.state.question}
            />   
        </View>

        <View>
            <Text>  
            </Text>
            <Text>  
            </Text> 
        </View>

        <View>
              <Button title="Find Answer" type="solid"
                      onPress={() => onPress()}
              />
        </View>

        <View style={styles.predictionWrapper}>
          {isModelReady && (
            <Text style={styles.text}>
              Predictions: {answers ? '' : 'Finding answers...'}
            </Text>
          )}

          {isModelReady &&
            answers &&
            answers.map((a, index) => this.renderAnswer(a, index))}
        </View>

        </View>
        
        </ScrollView>
      </View>
    )
  }
}

QnaScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171f24'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  loadingContainer: {
    marginTop: 80,
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  },
  loadingModelContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  imageWrapper: {
    width: 280,
    height: 280,
    padding: 10,
    borderColor: '#cf667f',
    borderWidth: 5,
    borderStyle: 'dashed',
    marginTop: 40,
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10
  },
  predictionWrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  transparentText: {
    color: '#ffffff',
    opacity: 0.7
  },
  footer: {
    marginTop: 40
  },
  poweredBy: {
    fontSize: 20,
    color: '#e69e34',
    marginBottom: 6
  },
  tfLogo: {
    width: 125,
    height: 70
  }
})