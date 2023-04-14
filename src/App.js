import React from 'react';
//import Mycars from './components/Mycars';
import Form from './components/Form';
import './App.css';

class App extends React.Component {

  state = {
    title: 'Mon catalogue de caisses',
    colorTitle: 'green',
}

  render (){
    return (
      <div className="App">
        <Form />

        {/*<Mycars title= { this.state.title } colorTitle = { this.state.colorTitle}/>*/}

        
      </div>
    );
  }
  
}

export default App;
















//BIN
/*
//import Wrapper from './components/Wrapper';

<button onClick = {this.changeTitle}>click here</button>
        <button onClick = { () => this.changeViaParam('nouveau titre')}>change title via param</button>
        <input onChange={this.changeViaInput} value= {this.state.title} />

changeTitle = (e) => {
    this.setState({
      title: 'Mon catalogue bateau'
    })
}

changeViaParam = (e) => {
this.setState({
  title: e
})
}

changeViaInput = (e) => {
   this.setState({
    title: e.target.value
   })
}

        */
