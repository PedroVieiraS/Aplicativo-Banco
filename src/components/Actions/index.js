import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { 
    AntDesign,
    FontAwesome6,
} from '@expo/vector-icons'

export default function Actions({onPress}) {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name='addfolder' size={24} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name='tagso' size={24} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress} style={styles.actionButton}>
        <View style={styles.areaButton}>
            <FontAwesome6 name='pix' size={24} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Pix</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        maxHeight:84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
}) 