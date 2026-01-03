import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { listLogs, logHabit } from '@/data/logs';
import { getStreak } from '@/data/functions';

export default function HabitDetail() {
    const {id} = useLocalSearchParams<{id:string}>();
    const [logs,setLogs]= useState<any>([]);
    const [streak,setStreak]= useState<number>(0);

    useEffect(()=>{
        const run = async()=>{
            // Fetch logs for the habit with id
            const response = await listLogs(id);
            setLogs(response);

            const streakResponse = await getStreak(id);
            setStreak(streakResponse.streak);
        };
        run();
    },[id]);

    const markDone = async() => {
        const today = new Date().toISOString().split('T')[0];
        await logHabit(id,today,'done');
        const response = await listLogs(id);
        setLogs(response);

        const streakResponse = await getStreak(id);
        setStreak(streakResponse.streak);
    }
  return (
    <View>
      <Text> Habit Detail</Text>
      <Text>Current Streak: {streak} days</Text>

      <Button
      title='Mark as Done Today'
      onPress={markDone}
      />

      <FlatList
      data={logs}
      keyExtractor={(l)=> l.$id}
      renderItem={({item})=>(
        <Text>{item.date}: {item.status}</Text>
      )}
      ListEmptyComponent={<Text>No logs found.</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})