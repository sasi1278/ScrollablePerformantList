import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useDispatch, useSelector } from 'react-redux';
import { storeOfflineData,filterOfflineData } from '../redux/offlineSlice';

import ItemList from '../../Screens/Items';
import SearchBar from '../SearchBar';


export default function Main() {
  const dispatch = useDispatch();
  const offlineData = useSelector((state) => state.offline.offlineData);
  const [data,setData]=useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilteredData(res);
        dispatch(storeOfflineData(res));
      })
      .catch((e) => {
        console.log('Error------>', e);
      }).finally(() => {
        setRefreshing(false)
      });
  };

  useEffect(()=>{
    fetchData()
  },[])

  const handleToggle = (id,toggled) => {
    dispatch(filterOfflineData({ id, toggled }));
    if (toggled) {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
      setFilteredData(newData);
    }
  };

  const handleSearch = (query) => {
    const filtered = offlineData.filter((item) => item.id.toString().includes(query));
    // const filtered = data.filter((item) =>
    //   item.id.toString().includes(query)
    // );
    setFilteredData(filtered);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <ItemList data={filteredData} onToggle={handleToggle} onRefresh={onRefresh} refreshing={refreshing} />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
