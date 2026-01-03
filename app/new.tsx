import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { createHabit } from '@/data/habit';

export default function NewHabit() {
    const [name,setName] = useState<string>('');
    const router = useRouter();

    const save = async() => {
        await createHabit({name});
        router.push('/');
    }
  return (
    <View>
        <TextInput
        placeholder='Habit Name'
        value={name}
        onChangeText={setName}
        />
        <Button
        title='Save'
        onPress={save}
        />
    </View>
  )
}

const styles = StyleSheet.create({})