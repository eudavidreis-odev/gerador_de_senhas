import { View , Text, TouchableOpacity, Pressable} from "react-native";
import styles from "../../stylesheets/base_stylesheet";
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage'

let pass = ""
let handleClosePass = ""
async function handleCopyPassword(){
    const{saveItem} = useStorage()
    await Clipboard.setStringAsync(pass);
    handleClosePass();
    await saveItem('@pass',pass)
    alert("Senha salva com sucesso!")

}

export function ModalPassword({password, handleClose}){
    pass = password;
    handleClosePass = handleClose;
    return(
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTittle}>Senha gerada!</Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.modalPasswordText}>{password}</Text>
                </Pressable>
                <View style={styles.modalButtonsArea}>
                    <TouchableOpacity style={styles.modalButton} onPress={handleClose}>
                        <Text style={styles.modalButtonTextLight}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton}>
                        <Text style={styles.modalButtonTextDark} onPress={handleCopyPassword}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )    
}
