# Gerador de Senhas Aleatórias e Persistência

Este é um aplicativo React Native que gera senhas aleatórias com base no número de caracteres especificado pelo usuário e permite salvar essas senhas para referência futura. O projeto utiliza o framework Expo do React e demonstra o uso de React Navigation, da fução useState da biblioteca React e React Native Async Storage para persistência de dados.

## Estrutura do Projeto

O projeto está estruturado em páginas e operações de persistência de dados.

### Páginas

O controle das atividades, abas ou páginas é gerenciado pelo componente `Routes`, que utiliza a função `createBottomTabNavigator` do pacote `@react-navigation/bottom-tabs`. As páginas disponíveis são:

- **Home**: Página inicial onde o usuário pode gerar senhas aleatórias.
- **Passwords**: Página onde o usuário pode visualizar e gerenciar as senhas salvas.

```javascript
    import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
    import { Home } from "./pages/home";
    import { Passwords } from "./pages/passwords/passwords";
    import Ionicons from '@expo/vector-icons/Ionicons';

    const Tab = createBottomTabNavigator();

    export function Routes(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{headerShown:false,tabBarIcon:({focused,size,color})=>{
                    return <Ionicons size={size} color={color} name={focused?"home" : "home-outline"}/>
                }}}/>
                <Tab.Screen name="Passwords" component={Passwords} options={{headerShown:false,tabBarIcon:({focused,size,color})=>{
                    return <Ionicons size={size} color={color} name={focused?"lock-closed" : "lock-closed-outline"}/>
                }}}/>
            </Tab.Navigator>
        )
    }
```

### Operações de Persistência

As operações básicas de persistência de dados no banco de dados são gerenciadas pelo hook `useStorage`. Este hook utiliza o AsyncStorage para armazenar e recuperar os dados.

```javascript
    import AsyncStorage from "@react-native-async-storage/async-storage";

    const useStorage = ()=>{
        const getItem = async (key) =>{
            try{
                const passwords = await AsyncStorage.getItem(key)
                return JSON.parse(passwords) || []
            }catch(error){
                console.log("Erro ao buscar!", error)
                return [];
            }r
        }

        const saveItem = async (key, value) =>{
            try {
                let passwords = await getItem(key)
                passwords.push(value)
                await AsyncStorage.setItem(key,JSON.stringify(passwords));
            } catch (error) {
                console.log("Erro ao salvar!", error)
            }
        }

        const removeItem = async (key, item) =>{
            try {
                let passwords = await getItem(key)
                let myPasswords = passwords.filter((password)=>{
                    return password !== item
                })

                await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
                return myPasswords
            } catch (error) {
                console.log("Erro ao deletar!", error)
            }
        }

        return{
            getItem,
            saveItem,
            removeItem
        }

    }

    export default useStorage;
```
## Como Usar

1. **Instalação**: Clone este repositório e instale as dependências utilizando o comando `npm install` ou `yarn install`.
2. **Execução**: Inicie o aplicativo utilizando o comando `npm start` ou `yarn start`.

Certifique-se de ter todas as dependências do ambiente React Native configuradas corretamente.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para relatar problemas ou propor melhorias.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
