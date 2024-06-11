import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from '../../../stylesheets/base_stylesheet'

export function PasswordItem({data, removePassword}){
    return (
        <Pressable onLongPress={removePassword} style={styles.containerItemPassword}>
            <Text style={styles.passwordTextItem}>{data}</Text>
        </Pressable>
    )
}