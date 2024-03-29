import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export default function App() {
  const[resultado, setResultado] = useState("");
  const[imc, setImc] = useState<Float>(0);
  const[peso, setPeso] = useState<Float>(0);
  const[altura,setAltura] = useState<Float>(0);

  const ValidarIdade = () => {
    setImc( (peso / (altura * altura)) );   

    if(imc == 0 || imc == undefined)
      setResultado("Peso e Altura não informado")
    else if( imc < 18.5 )
      setResultado("A baixo do peso");
    else if ( imc < 25.0 )
      setResultado("Seu peso e adequado");
    else if ( imc < 30.0 )
      setResultado("Sobrepeso");
    else if ( imc < 35.0 )
     setResultado("Obesidade I");
    else if ( imc < 40.0 )
      setResultado("Obesidade II");
    else  if ( imc >= 40.0 && imc != Infinity)
      setResultado("Obesidade III");
    else 
      setResultado("Seu Peso ou Altura não informado");

    alert(`IMC: ${imc.toFixed(2)} kg/m² \n${resultado}`)
   }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput style={styles.input} placeholder='Digite o seu peso' onChangeText={id => setPeso(parseFloat(id))} />

      <TextInput style={styles.input} placeholder='Digite a sua altura' onChangeText={ id => setAltura(parseFloat(id))} />

      <TouchableOpacity onPress={ValidarIdade} style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} editable={false} selectTextOnFocus={false} value={"Seu IMC: " + imc} />
      <TextInput style={styles.input} editable={false} selectTextOnFocus={false} value={"Resultado: " + resultado} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e300',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 20
  },

  input: {
    padding: 5,
    width: '80%',
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff'
  },

  button: {
    padding: 5,
    width: '80%',
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#ff3300',
  }
});