import Button from 'react-bootstrap/Button';
import "./Login.css";

function Login() {
  return (
    <div className="geral">
      <div className="login-container">
        <h1 className="login-name">Login</h1>
        <form className="form-login">
          <div className="usuario-form">
            <label className="user">Usuário</label>
            <input type="text" className="usuario" />
          </div>
          <div className="senha-form">
            <label className="password">Senha</label>
            <input type="password" className="senha" />
          </div>  
          <div className="buttons">
            <Button type="submit" id="login-button" href="/home" className="login">Login</Button>
            <Button id="cadastro-button" href="/cadastro" className="cadastro">Cadastre-se</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
