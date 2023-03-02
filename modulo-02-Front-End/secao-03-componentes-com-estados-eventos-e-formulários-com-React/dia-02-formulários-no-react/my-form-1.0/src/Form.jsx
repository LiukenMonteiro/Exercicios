import React, { Component } from 'react';
import './form.css'

class Form extends Component {
  constructor() {
    super()
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    

    this.state = {
      faleSobreVocê: '',
      moradia: '',
      acordo: false,
      idade: 0,
    }
  }

 

  handleChangeTextArea(event) {
    this.setState ({
      faleSobreVocê: event.target.value
    })
  }
  render() {
        return (
            <div>
              <h1>Meu formulário</h1>
            <form className='form'>
              <label name="moradia">
                Moro em:
                <select type='checkbox'>
                  <option>Casa</option>
                  <option>Apartamento</option>
                  <option>Condominio</option>
                </select>
              </label>
              <label>
                Concordo com o termos
                <input type="checkbox" name="acordo"/>
              </label>
              <label>
                Idade
                <input type="number" name="idade"/>
              </label>
              <label>
                <textarea 
                name="FaleSobreVocê" 
                placeholder='Fale sobre você' 
                value={this.state.faleSobreVocê}
                onChange={ this.handleChangeTextArea }></textarea>
              </label>
            </form>
            </div>
          );
  }
}

export default Form;