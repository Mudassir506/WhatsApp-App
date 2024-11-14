import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Oliver = ({navigation}:any) => {
  const [searchText, setSearchText] = useState('');
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    keyboardVerticalOffset={0}>
    <View style={styles.header}>
      <AntDesignIcon
        name="arrowleft"
        size={30}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <Image
        source={require('../Images/pic6.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.headerText}>Oliver</Text>
      <TouchableOpacity>
        <AntDesignIcon
          name="videocamera"
          size={20}
          color="black"
          style={{ marginLeft: 100 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesignIcon name="phone" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <EntypoIcon style={{ fontSize: 20 }} name="dots-three-vertical" />
      </TouchableOpacity>
    </View>

    {/* Chat Messages */}
    <ScrollView contentContainerStyle={styles.messagesContainer}>
      <Text style={styles.messageLeft}>Hey! How are you?</Text>
      <Text style={styles.messageRight}>I am good</Text>
      <Text style={styles.messageLeft}>What about you?</Text>
      <Text style={styles.messageRight}>I am also good</Text>
      <Text style={styles.messageLeft}>How was your day?</Text>
      <Text style={styles.messageRight}>It was good</Text>
      <Text style={styles.messageLeft}>What did you do today?</Text>
      <Text style={styles.messageRight}>I did some work</Text>
      <Text style={styles.messageLeft}>What about you?</Text>
      <Text style={styles.messageRight}>I did some work</Text>
      <Text style={styles.messageLeft}>How was your day?</Text>
      <Text style={styles.messageRight}>It was good</Text>
      <Text style={styles.messageLeft}>What did you do today?</Text>
      <Text style={styles.messageRight}>I did some work</Text>
      <Text style={styles.messageLeft}>What about you?</Text>
      <Text style={styles.messageRight}>I did some work</Text>
    </ScrollView>

    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <EntypoIcon name="emoji-happy" size={24} color="#333" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity style={styles.iconButton}>
        <AntDesignIcon name="camera" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <SimpleLineIcons name="camrecorder" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#f5f5f5',
},
header: {
  flexDirection: 'row',
  alignItems: 'center',
  margin: 10,
  gap: 10,
},
profileImage: {
  width: 40,
  height: 40,
  borderRadius: 20,
},
headerText: {
  fontSize: 20,
},
messagesContainer: {
  padding: 10,
  backgroundColor: '#f5f5f5',
},
messageLeft: {
  fontSize: 15,
  marginLeft: 20,
  marginTop: 20,
  textAlign: 'left',
  height: 40,
  width: 200,
  backgroundColor: '#e0e0e0',
  borderRadius: 20,
  padding: 10,
},
messageRight: {
  fontSize: 15,
  marginLeft: 150,
  marginTop: 40,
  textAlign: 'left',
  height: 40,
  width: 200,
  backgroundColor: 'lightgreen',
  borderRadius: 20,
  padding: 10,
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  borderTopColor: '#cccccc',
  marginTop: 20,
  backgroundColor: '#f5f5f5',
},
input: {
  flex: 1,
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 20,
  paddingHorizontal: 10,
},
iconButton: {
  marginHorizontal: 5,
},
});
export default Oliver;
