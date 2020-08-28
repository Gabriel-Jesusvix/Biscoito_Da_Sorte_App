import React, { Component } from 'react'
import {  View, 
  StyleSheet, 
  Text, 
  Image,
  TouchableOpacity
  } from 'react-native'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.refreshApp = this.refreshApp.bind(this)

    this.frases = [
      'A vida trará coisas boas se tiveres paciência',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    ]
  }
  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length )
  
     
        this.setState({
         textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
         img: require('./src/biscoitoAberto.png')      
        })      

    
    }
  
  refreshApp() {
    this.setState({
      textoFrase: '',
      img: require('./src/biscoito.png')
    })
  }

  render() {

    return(
      <View style={styles.container}>
        
        <Image 
        source={this.state.img}
        style={styles.img}
        />
        <Text style={styles.textFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.buttonCokie} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}> Quebrar biscoito</Text>
           
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRefresh} onPress={this.refreshApp}>
          <View style={styles.btnArea}>           
            <Text style={styles.btnText}>Atualizar</Text>
          </View>
        </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    width: 250,
    height: 250,
  },

  textFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle:'italic',
    textAlign: 'center'
  },

  buttonCokie: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,    
  },

  buttonRefresh: {
    width: 230,
    height: 50,
    margin: 15,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25, 
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  },

})


export default App