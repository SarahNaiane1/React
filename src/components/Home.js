import React from "react";// importa a lib react

const Home = ()=> {
  const  saudacao = "Login";
  const welcome = "Crie sua conta para se logar"
  return   <div className="container" ><p>{saudacao}</p>
 <p> {welcome}</p>
  <form>
  <label>
    Nome:
    <input type="text" name="name" />
    </label>

    <label>
    Sobrenome:
    <input type="text" name="surname" />
    </label>

    <label>
    E-mail:
    <input type="email" name="email" />
    </label>

<label>
  Senha:
  <input type="password" placeholder="*******" />

</label>
    <label>
    Data de nascimento:
    <input type="date" name="date" />
    </label>

 <div className="termos">
  <input id="checkbox" type="checkbox" />
  <label for="checkbox"> Eu aceito os <a href="#">Termos e condições</a>.</label>
</div>

<div className="enviar">
   <input type="submit" value="Enviar" />
</div>
</form>

 </div>
  }; 
export default Home;



