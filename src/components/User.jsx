import './User.css';

function User({ nome, idade, genero, email, telefone, imagem, empresa, cargo, cidade }) {
  return (
    <div className="cartao">
      <img src={imagem} alt="Foto do usuário" className="foto" />
      <div className="info">
        <h2>{nome}</h2>
        <p>{idade} anos {genero}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
        <p><strong>Empresa:</strong> {empresa}</p>
        <p><strong>Cargo:</strong> {cargo}</p>
        <p><strong>Cidade:</strong> {cidade}</p>
      </div>
    </div>
  );
}

export default User;