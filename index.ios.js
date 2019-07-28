import GiftedMessenger from 'react-native-gifted-messenger'
import NavigationBar from 'react-native-navbar'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  ProgressViewIOS,
} from 'react-native'

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: "Hello World", tintColor: 'black', }}
          leftButton={{ title: 'Back', }}
          rightButton={{ title: 'Forward', }}
          style={{ 
            backgroundColor: "rgba(193,193,241,1)", 
            width: Dimensions.get('window').width
          }}
        />
        <ScrollView 
          horizontal={false}
        >
          <ProgressViewIOS 
            style={styles.progress}
            progress={50 / 100}
            progressTintColor={"rgba(74,144,226,1)"} 
          />
          <View style={{
              flex: 1,
              marginTop: 20,
            }}>
            <GiftedMessenger
              ref={(c) => this._GiftedMessenger = c}
              styles={{
                container: {
                  width: Dimensions.get('window').width,
                },
                bubbleRight: {
                  marginLeft: 37,
                  backgroundColor: "rgba(159,159,191,1)",
                },
              }}
              tae={50}
              autoFocus={true}
              messages={[
                {
                  text: 'Are you building a chat app?',
                  name: 'React-Bot',
                  image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
                  position: 'left',
                  date: new Date(2016, 3, 14, 13, 0),
                  uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
                },
                {
                  text: "Yes, and I use Gifted Messenger!",
                  name: 'Awesome Developer',
                  image: null,
                  position: 'right',
                  date: new Date(2016, 3, 14, 13, 1),
                  uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
                },
              ]}
              handleSend={() => {}}
              onErrorButtonPress={() => {}}
              maxHeight={Dimensions.get('window').height - 20}
          
              loadEarlierMessagesButton={false}
              onLoadEarlierMessages={() => {}}
          
              senderName='Awesome Developer'
              senderImage={null}
              onImagePress={() => {}}
              displayNames={true}
          
              parseText={true}
              handlePhonePress={() => {}}
              handleUrlPress={() => {}}
              handleEmailPress={() => {}}
          
              isLoadingEarlierMessages={true}
          
              typingMessage={""}
            />
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  progress: {
              margin: 20,
              width: 336,
            }
});

AppRegistry.registerComponent('Project', () => Project);
