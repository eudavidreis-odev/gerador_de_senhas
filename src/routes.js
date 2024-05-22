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