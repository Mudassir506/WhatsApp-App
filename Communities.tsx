import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Communities = () => {
  interface PicData {
    image: any;
    name: string;
    id: number;
    name1: string;
    timestamp?: string;
  }

  const pictureData: PicData[] = [
    {
      image: require('../Picture/picture7.png'),
      name: 'New Community',
      id: 0,
      name1: 'Create a new community',
    },
    {
      image: require('../Picture/picture1.jpg'),
      name: 'Ubit Job Portal Community',
      id: 1,
      name1: 'Governor Sindh Initiative',
      timestamp: '1:12 PM',
    },
    {
      image: require('../Picture/picture2.jpg'),
      name: 'UBIT Jobs Portal 03',
      id: 2,
      name1: 'Hamza Hussain: ConceptRecall is looking...',
      timestamp: '7:07 AM',
    },
    {
      image: require('../Picture/picture3.jpg'),
      name: 'UBIT Jobs Portal 02',
      id: 3,
      name1: 'Mr. Jib: Secisys is looking for a Job...',
      timestamp: 'Yesterday',
    },
    {
      image: require('../Picture/picture4.jpg'),
      name: 'UBIT Job Portal 01',
      id: 4,
      name1: 'Faraz Ahmed: Graphic Designer Wanted...',
      timestamp: '5/18/24',
    },
    {
      image: require('../Picture/picture5.png'),
      name: 'CS Jobs/Internships',
      id: 5,
      name1: 'Announcements',
    },
  ];

  const ListHeaderComponent = () => (
    <View style={{backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
          height: 50,
          width: '100%',
        }}>
        <Text style={{fontSize: 23, fontWeight: '900', color: 'black'}}>
          Communities
        </Text>
        <View style={{flexDirection: 'row', gap: 18}}>
          <TouchableOpacity>
            <AntDesignIcon style={{fontSize: 25}} name="camera" />
          </TouchableOpacity>
          <TouchableOpacity>
            <EntypoIcon style={{fontSize: 22}} name="dots-three-vertical" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderItem = ({item}: {item: PicData}) => (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#E0E0E0',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={item.image}
            style={{height: 60, width: 60, borderRadius: 30, marginRight: 10}}
          />
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{fontSize: 13, color: 'gray', marginTop: 5}}>
              {item.name1}
            </Text>
          </View>
        </View>
        {item.timestamp && (
          <Text style={{fontSize: 13, color: 'gray', alignSelf: 'flex-start'}}>
            {item.timestamp}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderViewAll = () => (
    <TouchableOpacity style={{padding: 10, alignItems: 'center'}}>
      <Text style={{fontSize: 15, color: 'gray'}}>View all</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        data={pictureData}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={({item}) => renderItem({item})}
        ListFooterComponent={renderViewAll}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
      <FlatList
        data={pictureData}
        renderItem={({item}) => renderItem({item})}
        ListFooterComponent={renderViewAll}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default Communities;
