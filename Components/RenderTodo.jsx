import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../src/Context'

const RenderTodo = () => {
    const { tasks,
        setTasks,
        searchQuery,
        setSearchQuery,
        initial,
        setInitial,
        filteredTask,
        handleAddTask,
        deleteTask } = useContext(Context)
    return (
        <View>
            <FlatList
                data={searchQuery ? filteredTask : tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.task}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default RenderTodo

const styles = StyleSheet.create({})