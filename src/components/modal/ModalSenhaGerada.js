import { View , Text, TouchableOpacity, Pressable} from "react-native";
import styles from "../../stylesheets/base_stylesheet";
import * as Clipboard from 'expo-clipboard';
let pass = ""
let handleClosePass = ""
async function handleCopyPassword(){
    await Clipboard.setStringAsync(pass);
    handleClosePass();
    alert("Senha copiada com sucesso!");
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
                        <Text style={styles.modalButtonTextDark}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )    
}
