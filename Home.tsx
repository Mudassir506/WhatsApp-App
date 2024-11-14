import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Camera} from 'react-native-vision-camera';
import {useCameraDevices} from 'react-native-vision-camera';
const Home = ({navigation}: any) => {
  const devices = useCameraDevices();
  const backCamera = devices.find(device => device.name === 'back');
  const [cameraVisibile, setCameraVisibile] = React.useState(false);

  if (backCamera) {
    console.log('Back camera found:', backCamera);
  } else {
    console.log('Back camera not found');
  }
  interface ImageData {
    image: any;
    name: string;
    id: number;
    name1: string;
    timestamp?: string;
  }

  const imageData: ImageData[] = [
    {
      image: require('../Images/pic1.webp'),
      name: 'Harry',
      id: 1,
      name1: 'Hey!How are you?',
      timestamp: '1:12 PM',
    },
    {
      image: require('../Images/pic2.jpg'),
      name: 'Stark',
      id: 2,
      name1: 'Hello stark Good Mornig!',
      timestamp: '7:07 AM',
    },
    {
      image: require('../Images/pic3.jpg'),
      name: 'Willson',
      id: 3,
      name1: 'Hello willson Can i help you?',
      timestamp: '1:12 PM',
    },
    {
      image: require('../Images/pic4.jpg'),
      name: 'Noah',
      id: 4,
      name1: 'Hello noah how are you?',
      timestamp: '7:07 AM',
    },
    {
      image: require('../Images/pic5.jpg'),
      name: 'Liam',
      id: 5,
      name1: 'Hello liam how about you?',
      timestamp: 'Yesterday',
    },
    {
      image: require('../Images/pic6.jpg'),
      name: 'Oliver',
      id: 6,
      name1: 'Hello oliver Good Afternoon!',
      timestamp: '5/18/24',
    },
    {
      image: require('../Images/pic7.jpg'),
      name: 'Elijah',
      id: 7,
      name1: 'Hello elijah Good Evening!',
      timestamp: '5/18/24',
    },
    {
      image: require('../Images/pic8.jpg'),
      name: 'James',
      id: 8,
      name1: 'Hello james Good Night!',
      timestamp: '5/18/24',
    },
    {
      image: require('../Images/pic9.jpg'),
      name: 'Lucas',
      id: 9,
      name1: 'Hello lucas You eat lunchers!',
      timestamp: 'Yesterday',
    },
    {
      image: require('../Images/pic10.jpg'),
      name: 'Theodore',
      id: 10,
      name1: 'Hello theodore what are u doing?',
      timestamp: '5/18/24',
    },
    {
      image: require('../Images/pic11.jpg'),
      name: 'Mason',
      id: 11,
      name1: 'Hello mason what is it',
      timestamp: 'Yesterday',
    },
    {
      image: require('../Images/pic12.jpg'),
      name: 'Logan',
      id: 12,
      name1: 'Hello logan how are you?',
      timestamp: '5/18/24',
    },
    {
      image: require('../Images/pic13.jpg'),
      name: 'Jackson',
      id: 13,
      name1: 'Hello jackson r u fine now!',
      timestamp: 'Yesterday',
    },
    {
      image: require('../Images/pic14.jpg'),
      name: 'Aiden',
      id: 14,
      name1: 'Hello aiden what are you doing?',
      timestamp: '5/18/24',
    },
    {
      image: require('../Images/pic15.jpg'),
      name: 'Benjamin',
      id: 15,
      name1: 'Hello benjamin what are you saying?',
      timestamp: 'Yesterday',
    },
  ];

  const handleCamerapress = () => {
    setCameraVisibile(true);
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          gap: 150,
          padding: 10,
          alignItems: 'center',
          height: 50,
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '900',
            fontFamily: 'serif',
            color: 'black',
          }}>
          WhatsApp
        </Text>
        <View style={{flexDirection: 'row', gap: 18}}>
          <TouchableOpacity onPress={handleCamerapress}>
            <AntDesignIcon style={{fontSize: 25}} name="camera" />
          </TouchableOpacity>
          <TouchableOpacity>
            <EntypoIcon style={{fontSize: 22}} name="dots-three-vertical" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TextInput
          placeholder="Ask Meta AI or Search"
          style={{
            height: 40,
            width: '92%',
            backgroundColor: 'white',
            borderRadius: 20,
            fontSize: 18,
            marginLeft: 15,
            color: 'black',
          }}
        />
      </View>

      {cameraVisibile && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={devices[0]}
          isActive={true}
        />
      )}
      <FlatList
        data={imageData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.name, {name1: item.name1});
            }}>
            <View
              style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
              <Image
                source={item.image}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  marginRight: 10,
                }}
              />
              <View>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 13, color: 'gray', marginTop: 5}}>
                  {item.name1}
                </Text>
              </View>
              {item.timestamp && (
                <Text
                  style={{
                    fontSize: 13,
                    color: 'gray',
                    alignSelf: 'flex-start',
                    marginLeft: 'auto',
                  }}>
                  {item.timestamp}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Home;
