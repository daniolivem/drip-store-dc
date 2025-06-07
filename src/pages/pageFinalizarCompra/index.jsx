import './style.css';
import tenis from '../../assets/images/tenis.png';

const Confirmacompra = () => {
  return (
    <div className='checkout-container'>
      {/* Main Content */}
      <div className='main-content'>
        <div className='page-title'>
          <h1>Finalizar Compra</h1>
        </div>

        <div className='checkout-layout'>
          {/* Left Column */}
          <div className='left-column'>
            {/* Informações Pessoais */}
            <div className='form-section'>
              <h3>Informações Pessoais</h3>

              <div className='form-group'>
                <label htmlFor='nomecompleto'>Nome Completo *</label>
                <input
                  type='text'
                  id='nomecompleto'
                  name='nomecompleto'
                  placeholder='Insira seu nome'
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='cpf'>CPF *</label>
                <input
                  type='text'
                  id='cpf'
                  name='cpf'
                  placeholder='Insira seu CPF'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>E-mail *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Insira seu email'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='celular'>Celular *</label>
                <input
                  type='text'
                  id='celular'
                  name='celular'
                  placeholder='Insira seu celular'
                />
              </div>
            </div>

            {/* Informações de Entrega */}
            <div className='form-section'>
              <h3>Informações de Entrega</h3>

              <div className='form-group'>
                <label htmlFor='endereco'>Endereço *</label>
                <input
                  type='text'
                  id='endereco'
                  name='endereco'
                  placeholder='Insira seu endereço'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='bairro'>Bairro *</label>
                <input
                  type='text'
                  id='bairro'
                  name='bairro'
                  placeholder='Insira seu bairro'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='cidade'>Cidade *</label>
                <input
                  type='text'
                  id='cidade'
                  name='cidade'
                  placeholder='Insira sua cidade'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='cep'>CEP *</label>
                <input
                  type='text'
                  id='cep'
                  name='cep'
                  placeholder='Insira seu CEP'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='complemento'>Complemento</label>
                <input
                  type='text'
                  id='complemento'
                  name='complemento'
                  placeholder='Insira complemento'
                />
              </div>
            </div>

            {/* Informações de Pagamento */}
            <div className='form-section'>
              <h3>Informações de Pagamento</h3>

              <div className='payment-methods'>
                <h4>Forma de Pagamento</h4>
                <div className='radio-group'>
                  <div className='radio-item'>
                    <input
                      type='radio'
                      id='cartao'
                      name='pagamento'
                      value='cartao'
                      defaultChecked
                    />
                    <label htmlFor='cartao'>Cartão de Crédito</label>
                  </div>
                  <div className='radio-item'>
                    <input
                      type='radio'
                      id='boleto'
                      name='pagamento'
                      value='boleto'
                    />
                    <label htmlFor='boleto'>Boleto Bancário</label>
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='nomecartao'>Nome do Cartão *</label>
                <input
                  type='text'
                  id='nomecartao'
                  name='nomecartao'
                  placeholder='Insira o nome do cartão'
                />
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='numerocartao'>
                    Data e Número do Cartão *
                  </label>
                  <input
                    type='text'
                    id='numerocartao'
                    name='numerocartao'
                    placeholder='Insira número do cartão'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='validadecartao'>
                    Data de Validade do Cartão *
                  </label>
                  <input
                    type='text'
                    id='validadecartao'
                    name='validadecartao'
                    placeholder='Insira a validade do cartão'
                  />
                </div>
              </div>

              <div className='form-group cvv-group'>
                <label htmlFor='cvv'>CVV *</label>
                <input type='text' id='cvv' name='cvv' placeholder='CVV' />
              </div>
            </div>

            {/* Finalizar Compra */}
            <div className='form-section checkout-final'>
              <h3>Finalizar Compra</h3>
              <div className='total-section'>
                <div className='total-label'>Total</div>
                <div className='total-value'>
                  <div className='price'>R$ 219,00</div>
                  <div className='installments'>
                    ou 10x de R$ 21,90 sem juros
                  </div>
                </div>
              </div>
              <button className='payment-btn'>Realizar Pagamento</button>
            </div>
          </div>

          {/* Right Column - Resumo */}
          <div className='right-column'>
            <div className='summary-section'>
              <h3>RESUMO</h3>

              <div className='product-item'>
                <div className='product-image'>
                  <img
                    src={tenis}
                    alt='Tênis Nike Revolution 6 Next Nature Masculino'
                  />
                </div>
                <div className='product-info'>
                  <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                </div>
              </div>

              <div className='summary-content'>
                <div className='summary-line'>
                  <span className='label'>Subtotal</span>
                  <span className='value'>R$ 219,00</span>
                </div>

                <div className='summary-line'>
                  <span className='label'>Frete</span>
                  <span className='value'>R$ 0,00</span>
                </div>

                <div className='summary-line'>
                  <span className='label'>Desconto</span>
                  <span className='value'>R$ 30,00</span>
                </div>
              </div>

              <div className='summary-total'>
                <div className='total-info'>
                  <h3>Total</h3>
                  <p>R$ 219,00</p>
                </div>
                <div className='total-installments'>
                  <p>ou 10x de R$ 21,90 sem juros</p>
                </div>
              </div>

              <button className='summary-payment-btn'>
                Realizar Pagamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmacompra;
