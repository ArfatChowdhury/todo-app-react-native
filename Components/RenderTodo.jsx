import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../src/Context'
import { ThemeContext } from '../src/ThemeContext'
import { Colors } from '../src/Colors'
import Checkbox from 'expo-checkbox'
import { Ionicons } from '@expo/vector-icons'

const RenderTodo = () => {
    const { theme } = useContext(ThemeContext)
    const { tasks,
        setTasks,
        searchQuery,
        setSearchQuery,
        initial,
        setInitial,
        filteredTask,
        handleAddTask,
        deleteTask ,
    handleIsDone} = useContext(Context)
    const colors = theme === 'dark' ? Colors.dark : Colors.light
    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={searchQuery ? filteredTask : tasks}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                renderItem={({ item }) => (
                    <View style={[styles.container, {
                        backgroundColor: colors.surface,
                        borderColor: colors.border
                    }]}>
                        <View style={styles.textCon}>
                            <Checkbox 
                            onValueChange={()=> handleIsDone(item.id)}
                                value={item.isDone}
                                color={colors.primary}
                                style={styles.checkbox}
                            />
                            <Text style={[styles.text, {
                                color: colors.text,
                                textDecorationLine: item.isDone ? 'line-through' : 'none',
                                opacity: item.isDone ? 0.6 : 1
                            }]}>{item.task}</Text>
                        </View>
                        <TouchableOpacity 
                            onPress={() => deleteTask(item.id)}
                            style={styles.deleteButton}
                        >
                            <Ionicons name='trash-outline' size={24} color={colors.error} />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="list-outline" size={64} color={colors.textMuted} />
                        <Text style={[styles.emptyText, { color: colors.textMuted }]}>
                            No tasks yet
                        </Text>
                        <Text style={[styles.emptySubText, { color: colors.textMuted }]}>
                            Add your first task above
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default RenderTodo

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        marginTop: 10,
    },
    flatListContent: {
        paddingBottom: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginHorizontal: 1,
        marginVertical: 6,
        borderRadius: 12,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    textCon: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 12,
        
    },
    checkbox: {
        marginRight: 4,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        flex: 1,
        lineHeight: 22,
    },
    deleteButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(220, 53, 69, 0.1)',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 60,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 8,
    },
    emptySubText: {
        fontSize: 14,
        fontWeight: '400',
    }
})