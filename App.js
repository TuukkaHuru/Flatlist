import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {DATA} from './Data';
import Row from './components/Row'
import Search from './components/Search';
import { useState, useEffect } from 'react';


/*function renderItem({item}) {
  return (<Text>{item.lastname}</Text>)
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        ></FlatList>
    </SafeAreaView>a
  );
}
*/

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, [])

/*const renderItem = ({ item }) => (
  <Text>{item.lastname}</Text>
);
*/

const executeSearch = (search) => {
  const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
  setItems(searchArray);
}

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem = {({ item }) => (
          <Row person={item}/>
        )}
        ></FlatList>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
});
