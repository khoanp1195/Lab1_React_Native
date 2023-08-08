import { StyleSheet,SafeAreaView,ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import {
    NearbyJobCard,
    ScreenHeaderBtn, Welcome,
  } from "../components";
import {COLORS, SIZES, icons} from '../constants';
import Popularjobs from '../components/home/popular/Popularjobs';
import PopularJobCard from '../components/common/cards/popular/PopularJobCard';
import Nearbyjobs from '../components/home/nearby/NearbyJob';


const Home = () => {
    const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn iconUrl = {icons.menu} dimesion ="60%"/>
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={icons.profile} dimesion="100%"/>

            )
            // headerTitle: ""
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex:1,
             padding: SIZES.medium}}>

            </View>
            <Welcome/>
            <Popularjobs/>
            <Nearbyjobs/>
        
      </ScrollView>
    </SafeAreaView>
  )
}
 export default Home;