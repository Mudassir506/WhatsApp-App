import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Update = () => {
  interface ImageData {
    image: any;
    name: string;
    id: number;
  }
  interface PicData {
    image: any;
    name: string;
    id: number;
    name1: string;
  }

  const imageData: ImageData[] = [
    {image: require('../Images/pic1.webp'), name: 'My Status', id: 1},
    {image: require('../Images/pic2.jpg'), name: 'Stark', id: 2},
    {image: require('../Images/pic3.jpg'), name: 'Willson', id: 3},
    {image: require('../Images/pic4.jpg'), name: 'Noah', id: 4},
    {image: require('../Images/pic5.jpg'), name: 'Liam', id: 5},
    {image: require('../Images/pic6.jpg'), name: 'Oliver', id: 6},
    {image: require('../Images/pic7.jpg'), name: 'Elijah', id: 7},
    {image: require('../Images/pic8.jpg'), name: 'James', id: 8},
    {image: require('../Images/pic9.jpg'), name: 'Lucas', id: 9},
    {image: require('../Images/pic10.jpg'), name: 'Theodore', id: 10},
  ];

  const pictureData: PicData[] = [
    {
      image: require('../Picture/picture1.jpg'),
      name: 'Governor Sindh Initiative',
      id: 1,
      name1: 'Job Description Available for your Data',
    },
    {
      image: require('../Picture/picture2.jpg'),
      name: 'JobMe.Pk',
      id: 2,
      name1: 'Job Description Available for your Data',
    },
    {
      image: require('../Picture/picture3.jpg'),
      name: 'WhatsApp',
      id: 3,
      name1: 'Sticket Droup Harvest Season',
    },
    {
      image: require('../Picture/picture4.jpg'),
      name: 'Digital Right Foundation',
      id: 4,
      name1: 'Job Description Available for your Data',
    },
    {
      image: require('../Picture/picture5.png'),
      name: 'It Course web 3.0',
      id: 5,
      name1: 'Job Description Available for your Data',
    },
    {
      image: require('../Picture/picture6.png'),
      name: 'Pakistan Job Updates',
      id: 6,
      name1: 'Job Description Available for your Data',
    },
  ];

  const ListHeaderComponent = () => (
    <>
      <View
        style={{
          height: 50,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text style={{fontSize: 23, fontFamily: 'serif', color: 'black'}}>
          Updates
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 'auto',
            gap: 15,
          }}>
          <TouchableOpacity>
            <AntDesignIcon name="camera" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesignIcon name="search1" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <EntypoIcon name="dots-three-vertical" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={imageData}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={{alignItems: 'center', margin: 10}}>
              <Image
                source={item.image}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  borderWidth: 2.5,
                  borderColor: 'lightgreen',
                }}
              />
              <Text style={{fontSize: 13, marginTop: 5}}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 20}}>Channels</Text>
        <Text style={{fontSize: 20}}>Explore</Text>
      </View>
    </>
  );

  const ListFooterComponent = () => (
    <>
      <Text style={{fontSize: 20, marginLeft: 10, marginTop: 10}}>
        Find Channels
      </Text>
      <FlatList
        data={pictureData}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                padding: 10,
                marginRight: 10,
                height: 180,
                width: 180,
                borderRadius: 15,
                borderWidth: 0.2,
              }}>
              <Image
                source={item.image}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  marginBottom: 10,
                }}
              />
              <Text
                style={{fontSize: 15, fontWeight: 'bold', marginBottom: 10}}>
                {item.name}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'lightgreen',
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'green', fontWeight: 'bold'}}>Follow</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{height: 200, width: '100%'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightgreen',
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderRadius: 25,
            marginTop: 30,
            marginLeft: 20,
            height: 40,
            width: 150,
          }}>
          <Text style={{color: 'green', fontWeight: 'bold'}}>Explore more</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <FlatList
      data={pictureData}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      renderItem={({item}) => (
        <TouchableOpacity>
          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Image
              source={item.image}
              style={{height: 60, width: 60, borderRadius: 30, marginRight: 10}}
            />
            <View>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 13, color: 'gray', marginTop: 5}}>
                {item.name1}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Update;
