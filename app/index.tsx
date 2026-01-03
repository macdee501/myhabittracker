import { listHabits } from "@/data/habit";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function Dashboard() {

  const [habits,setHabits]= useState<any>([]);
  const [loading,setLoading]= useState<boolean>(true);

  useEffect(()=> {
    // Define an asynchronous function to fetch habits
    const run = async () => {
      try{
        // Fetch habits from Appwrite database
        const response = await listHabits();
        setHabits(response);
      }
      catch(error){
        console.error("Error fetching habits:", error);
      }
      finally{
        setLoading(false);
      }
    };
    run();

  },[])

  if(loading) return <View><Text>Loading Habits...</Text></View>
  return (
    <View>
      <Text>My Habits</Text>
      <FlatList
      data={habits}
      keyExtractor={(h) => h.$id}
      renderItem={({item}) => (
        <Link
        href={`/habit/${item.$id}`}>
        <Text>{item.name}</Text>
        </Link>
      )}
      ListEmptyComponent={<Text>No habits found.</Text>}
      
      />
      <View>
        <Link
        href={`/new`}
        >
        <Button title="Add Habit"/>
        </Link>
      </View>
    </View>
  );
}
