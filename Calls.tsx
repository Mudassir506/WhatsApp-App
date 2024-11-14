import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const Calls = () => {
  const createCallData = [
    {
      image: require('../Picture/picture1.jpg'),
      name: 'Create call link',
      id: 1,
      name1: 'Share a link for your WhatsApp call',
    },
  ];

  const recentCallsData = [
    {
      image: require('../Images/pic1.webp'),
      name: 'Harry',
      id: 1,
      name1: '1 November , 7.09PM',
    },
    {
      image: require('../Images/pic2.jpg'),
      name: 'Stark',
      id: 2,
      name1: '2 November , 7.09PM',
    },
    {
      image: require('../Images/pic3.jpg'),
      name: 'Willson',
      id: 3,
      name1: '3 November , 7.09PM',
    },
    {
      image: require('../Images/pic4.jpg'),
      name: 'Noah',
      id: 4,
      name1: '4 November , 7.09PM',
    },
    {
      image: require('../Images/pic5.jpg'),
      name: 'Liam',
      id: 5,
      name1: '5 November , 7.09PM',
    },
    {
      image: require('../Images/pic6.jpg'),
      name: 'Oliver',
      id: 6,
      name1: '6 November , 7.09PM',
    },
    {
      image: require('../Images/pic7.jpg'),
      name: 'Elijah',
      id: 7,
      name1: '7 November , 7.09PM',
    },
    {
      image: require('../Images/pic8.jpg'),
      name: 'James',
      id: 8,
      name1: '8 November , 7.09PM',
    },
    {
      image: require('../Images/pic9.jpg'),
      name: 'Lucas',
      id: 9,
      name1: '9 November , 7.09PM',
    },
    {
      image: require('../Images/pic10.jpg'),
      name: 'Theodore',
      id: 10,
      name1: '10 November , 7.09PM',
    },
    {
      image: require('../Images/pic11.jpg'),
      name: 'Mason',
      id: 11,
      name1: '11 November , 7.09PM',
    },
    {
      image: require('../Images/pic12.jpg'),
      name: 'Logan',
      id: 12,
      name1: '12 November , 7.09PM',
    },
    {
      image: require('../Images/pic13.jpg'),
      name: 'Jackson',
      id: 13,
      name1: '13 November , 7.09PM',
    },
    {
      image: require('../Images/pic14.jpg'),
      name: 'Aiden',
      id: 14,
      name1: '14 November , 7.09PM',
    },
    {
      image: require('../Images/pic15.jpg'),
      name: 'Benjamin',
      id: 15,
      name1: '15 November , 7.09PM',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          height: 50,
        }}>
        <Text style={{fontSize: 23, fontWeight: '900', color: 'black'}}>
          Calls
        </Text>
        <View style={{flexDirection: 'row', gap: 18}}>
          <TouchableOpacity>
            <AntDesignIcon style={{fontSize: 25}} name="camera" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesignIcon name="search1" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <EntypoIcon style={{fontSize: 22}} name="dots-three-vertical" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={createCallData}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
            <Image
              source={item.image}
              style={{height: 50, width: 50, borderRadius: 30}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20}}>{item.name}</Text>
              <Text style={{fontSize: 15, color: 'gray'}}>{item.name1}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>Recent</Text>
      <FlatList
        data={recentCallsData}
        renderItem={({item}) => (
          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Image
              source={item.image}
              style={{height: 60, width: 60, borderRadius: 30, marginRight: 10}}
            />
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18}}>{item.name}</Text>
              <Text style={{fontSize: 15, color: 'gray'}}>{item.name1}</Text>
            </View>
            <TouchableOpacity>
              <Feather name="phone" size={25} color="black" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Calls;
