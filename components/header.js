import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
        
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default Header