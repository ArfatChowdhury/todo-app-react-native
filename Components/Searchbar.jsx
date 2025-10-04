import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeContext } from '../src/ThemeContext';
import { Colors } from '../src/Colors';

const Searchbar = () => {
    const {theme} = useContext(ThemeContext)
    const colors =  theme === 'dark' ? Colors.dark : Colors.light
    return (
        <View style={[styles.container, {backgroundColor: colors.searchBackground, borderColor: colors.searchBorder}]}>
            <Ionicons name='search' size={28} color={colors.textSecondary} />
            <TextInput
            placeholder='Search your items'
            placeholderTextColor={colors.searchPlaceholder}
            style={[styles.searchbarInput, {color: colors.searchText}]}
            />
        </View>
    )
}

export default Searchbar

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        padding: 6,
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    searchbarInput:{
        fontSize:16,
        flex:1
    }

})