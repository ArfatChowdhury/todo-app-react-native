import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../src/ThemeContext'
import { Colors } from '../src/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Context } from '../src/Context'

const AddTodo = () => {
    const { theme } = useContext(ThemeContext)
    const { tasks,
        setTasks,
        searchQuery,
        setSearchQuery,
        initial,
        setInitial,
        filteredTask,
        handleAddTask,
        deleteTask } = useContext(Context)
    const colors = theme === 'dark' ? Colors.dark : Colors.light

    return (
        <View style={styles.addContainer}>
            <TextInput
                placeholder='Enter your new task'
                value={initial}
                onChangeText={setInitial}
                placeholderTextColor={colors.searchPlaceholder}
                style={[styles.inputText, {
                    backgroundColor: colors.searchBackground,
                    borderColor: colors.searchBorder,
                    color: colors.searchText
                }]}
            />
            <TouchableOpacity onPress={handleAddTask} style={[styles.addButton, { backgroundColor: colors.button }]}>
                <Ionicons name='add' size={25} color='white' />
            </TouchableOpacity>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    inputText: {
        fontSize: 16,
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginRight: 10,
    },
    addButton: {
        borderRadius: 10,
        padding: 12
    },
    addContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 12,
        paddingVertical: 15,
    }
})