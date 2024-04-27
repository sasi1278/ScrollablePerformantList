import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity,Switch } from 'react-native';
import styles from './style';

const Card = ({ item, onToggle }) => {
  const { id, title, url} = item;
  const [toggled, setToggled] = useState(item.toggled);

  const handleToggle = () => {
    const newToggled = !toggled; 
    setToggled(newToggled); 
    onToggle(id, newToggled);
  };



  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1 }}>
      <Text>ID: {id}</Text>
      <Text>Title: {title}</Text>
      <Image source={{ uri: url }} style={{ width: 100, height: 100 }} />
      <TouchableOpacity onPress={handleToggle}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={toggled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleToggle}
        value={toggled}
      />
      </TouchableOpacity>
    </View>
  );
};

export default Card;