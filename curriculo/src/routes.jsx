import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Home from "./pages/Home";

const tab = createBottomTabNavigator();

function Routes() {
    return (
        <tab.Navigator screenOptions={{ headerShown: false }}>
            <tab.Screen 
             name="Home" 
             component={Home} 
            />
            <tab.Screen 
             name="Search" 
             component={Search} 
            />
            <tab.Screen 
             name="Favorites" 
             component={Favorites} 
            />
            <tab.Screen 
             name="Profile" 
             component={Profile} 
            />
            
        </tab.Navigator>
    );
}

export default Routes;