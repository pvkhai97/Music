
import { StyleSheet,FlatList, TimePickerAndroid } from 'react-native'
import { View,Text } from '../components/Themed'

import React, {useEffect, useState} from 'react';
import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';

export const AlbumScreen = () => {
    return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
         />
    </View>
           )
}







