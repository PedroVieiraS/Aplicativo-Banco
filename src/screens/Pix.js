import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Pix({ navigation, route }) {
  const { saldo, setSaldo } = route.params;
  const { gastos, setGastos } = route.params;
  const {list} = route.params;
  const [chave, setChave] = useState("");
  const [valor, setValor] = useState("");

  const enviarPix = () => {
    const cash = parseFloat(valor);

    if (cash > saldo) {
      alert("Saldo insuficiente!");
    } else {
      setSaldo(saldo - cash);
      setGastos(gastos + cash);
      list.push({
        label: "Transferência PIX",
        value: cash,
      });
      navigation.goBack();
    }
  };

  return (
    <View>
      <TextInput
        placeholder="digite o valor de transferencia"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="digite a chave pix"
        value={chave}
        onChangeText={setChave}
      />
      <Button title="Enviar" onPress={enviarPix} />
      <Text>Saldo: {list.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
