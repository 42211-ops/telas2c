import { useState } from 'react'
import './App.css'
import facebook from './assets/img/facebook_icon.png'
import google from './assets/img/google_icon.png'
import apple from './assets/img/apple_icon.png'

function App() {


  return (
    <>
      <div id="login">
        <h1>Login</h1>
        <input type="text" placeholder='Usuário'/>
        <input type="password" placeholder='Senha' />
        <p className='linha'>
          <input type="checkbox" /> Manter Conectado
          <a href='#' className='senha'>Esqueceu a Senha</a>
        </p>

        <button>Entrar</button>

        <p className='linha2'>Logar com</p>

        <div id="logos">
          <img src={facebook} alt="" />
          <img src={google} alt="" />
          <img src={apple} alt="" />
        </div>

        <p class="linha3">Não tem conta? <a href='#'>Inscreva-se</a></p>


        
      </div>
    </>
  )
}

export default App
