import {View ,Text, FlatList} from 'react-native'
import styles from '../../stylesheets/base_stylesheet.js'
import functions from '../../scripts/base_functions.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useState, useEffect} from 'react'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage.js'
import {PasswordItem} from '../../pages/passwords/components/passwordItem.js'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage();

    useEffect(()=>{
        async function loadPasswords(){
            const passwords = await getItem('@pass')
            setListPasswords(passwords) 
        }

        loadPasswords()
    },[focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass",item)
        setListPasswords(passwords) 
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.passwordsHeader}>
                <Text style={styles.passwordsTittle}>Senhas salvas</Text>
            </View>
            <View style={styles.passwordsContent}>
                <FlatList style={{flex:1, padding:14}} data={listPasswords} 
                keyExtractor={(item)=>String(item)}
                renderItem={({item})=> <PasswordItem data={item} removePassword={()=> handleDeletePassword(item)} >{item}</PasswordItem>}></FlatList>
            </View>
        </SafeAreaView>
    )
}