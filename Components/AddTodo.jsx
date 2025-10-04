import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../src/ThemeContext'
import { Colors } from '../src/Colors'
import { Ionicons } from '@expo/vector-icons'

const AddTodo = () => {
    const { theme } = useContext(ThemeContext)
    const colors = theme === 'dark' ? Colors.dark : Colors.light

    return (
        <KeyboardAvoidingView
            style={styles.KeyboardAvoidingView}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <View style={styles.addContainer}>
               <View style={[styles.inputCon, {backgroundColor: colors.searchBackground,  borderColor: colors.searchBorder,}]}>
               <TextInput
                    placeholder='Enter your new task'
                    placeholderTextColor={colors.searchPlaceholder}
                    style={[styles.inputText, {
                        backgroundColor: colors.searchBackground,
                       
                        color: colors.searchText
                    }]}
                />
               </View>
                <TouchableOpacity style={[styles.addButton, { backgroundColor: colors.button }]}>
                    <Ionicons name='add' size={25} color='white' />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    inputText: {
        fontSize: 16,
        flex: 1,
        borderRadius: 10,
        
        
    },
    addButton: {
        borderRadius: 10,
        padding: 10
    },
    addContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
        
    },
    KeyboardAvoidingView: {
        width: '100%',
        position:'absolute',
        bottom:40,
        justifyContent:'center',
        alignItems:'center',
        right:14
    },
    inputCon:{
        width:'90%',
        padding:8,
        borderWidth:1,
        borderRadius:15,
        marginRight:10
        
    }
})