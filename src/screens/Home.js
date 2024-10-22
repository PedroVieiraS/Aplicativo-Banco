import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';
import { useState } from 'react';


const list = [
    {
        id: 1,
        label: 'boleto conta luz',
        value: '350,00',
        date: '03/04/2022',
        type: 0,
    },
    {
        id: 2,
        label: 'transferência bancaria',
        value: '250,00',
        date: '02/04/2022',
        type: 1,
    },
    {
        id: 3,
        label: 'pagamento a vista',
        value: '150,00',
        date: '01/04/2022',
        type: 1,
    }
]



export default function Home({navigation}) {

  const [saldo, setSaldo] = useState(3000);
  const [gastos, setGastos] = useState(300);
  
  
  const handlePix = () => {
    navigation.navigate("Pix",{saldo, setSaldo, gastos, setGastos, list});
  }

  return (
    <View style={styles.container}>
      <Header name="Pedro vieira"/>
      <Balance saldo={saldo} gastos={gastos}/>

      <Actions onPress={handlePix}/>

      <Text style={styles.title}>
        Ultimas Movimentacoes
      </Text>

    
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
    marginRight: 14,
    marginLeft: 14,
  },
  list: {
    marginStart: 14,
    marginBottom: 14,
  },
});
