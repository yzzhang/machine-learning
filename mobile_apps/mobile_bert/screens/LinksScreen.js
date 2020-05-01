import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
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
      </View>

      <OptionButton
        icon="md-school"
        label="Read the TensorFlow.js documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://www.tensorflow.org/js')}
      />

      <OptionButton
        icon="md-school"
        label="Read the BERT article"
        onPress={() => WebBrowser.openBrowserAsync('https://arxiv.org/abs/1810.04805')}
      />

      <OptionButton
        icon="md-school"
        label="Read the MobileBERT article"
        onPress={() => WebBrowser.openBrowserAsync('https://arxiv.org/abs/2004.02984')}
      />

      <OptionButton
        icon="md-school"
        label="Get the pre-trained MobileBERT model in Github"
        onPress={() => WebBrowser.openBrowserAsync('https://github.com/tensorflow/tfjs-models/tree/master/qna')}
      />

      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-school"
        label="Read the React Native documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnative.dev/docs/getting-started')}
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
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
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
