import './App.css';

function App() {
  return (
    <div className="overlay">
      <nav>
        <div className="titulo">SATP - TCE/AM</div>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Ranking</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>

      <div className="conteudo">
        <p>Digite abaixo a URL para avaliação:</p>
        <input type="text" placeholder="Digite a URL aqui..." />
        <br />
        <button>AVALIAR</button>
      </div>
    </div>
  );
}

export default App;
