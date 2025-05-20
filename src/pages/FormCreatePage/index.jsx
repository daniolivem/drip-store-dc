import { useState } from 'react';
import './styles.css';

const CriarContaForm = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    email: '',
    celular: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    complemento: '',
    receberEmails: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="title-container">
      {/* Título */}
      <div>
        <h1>Criar Conta</h1>
      </div>

      {/* Informações Pessoais */}
      <div className="personal-info">
        <h2>Informações Pessoais</h2>
        <div className="form-section">
</div>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="nomeCompleto">Nome Completo *</label>
            <input
              type="text"
              id="nomeCompleto"
              name="nomeCompleto"
              placeholder="Insira seu nome"
              value={formData.nomeCompleto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="cpf">CPF *</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Insira seu CPF"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insira seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="celular">Celular *</label>
            <input
              type="tel"
              id="celular"
              name="celular"
              placeholder="Insira seu celular"
              value={formData.celular}
              onChange={handleChange}
              required
            />
          </div>
        </form>
      </div>

      {/* Informações de Entrega */}
      <div className="delivery-info">
        <h2>Informações de Entrega</h2>
        <div className="form-section">
          
        </div>
        <div className="form-field">
          <label htmlFor="endereco">Endereço *</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Insira seu endereço"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="bairro">Bairro *</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="Insira seu bairro"
            value={formData.bairro}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="cidade">Cidade *</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Insira sua cidade"
            value={formData.cidade}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="cep">CEP *</label>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="Insira seu CEP"
            value={formData.cep}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            placeholder="Insira complemento"
            value={formData.complemento}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Checkbox fora do fundo branco */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="receberEmails"
          name="receberEmails"
          checked={formData.receberEmails}
          onChange={handleChange}
        />
        <label htmlFor="receberEmails">
          Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a utilização do cliente.

        </label>
      </div>

      {/* Botão fora do fundo branco */}
      <div className="button-container">
        <button type="submit" className="submit-button">Criar Conta</button>
      </div>
    </div>
  );
};

export default CriarContaForm;