import './style.css';
import NikeImg from '../../assets/images/White-Sneakers.png';
import ConfeteIcon from '../../assets/icons/confete.png';
import { ButtonShop } from '../../components/Buttons/styles';

const BuySuccessPage = () => {
  return (
    <div className='container-main'>
      <div className='container'>
        <div className='content-icon-title'>
          <div className='confete-icon'>
            <img src={ConfeteIcon} alt='Confete de festa' />
          </div>

          <div className='content-title'>
            <h3>
              Compra Realizada <br /> com sucesso!{' '}
            </h3>
          </div>
        </div>

        <div className='linha-divisor'></div>

        <div className='section-info'>
          <h3>Informações Pessoais</h3>
          <p>
            <span>Nome:</span>
            <strong> Francisco Antonio Pereira</strong>
          </p>
          <p>
            <span>CPF:</span>
            <strong> 123485913-43</strong>
          </p>
          <p>
            <span>E-mail:</span>
            <strong> francisco@gmail.com</strong>
          </p>
          <p>
            <span>Telefone:</span>
            <strong> (85) 5555-5555</strong>
          </p>
        </div>

        <div className='linha-divisor'></div>

        <div className='section-info'>
          <h2>Informações de Entrega</h2>
          <p>
            <span>Endereço:</span>
            <strong> Rua João Pessoa, 333</strong>
          </p>
          <p>
            <span>Bairro:</span>
            <strong> Centro</strong>
          </p>
          <p>
            <span>Cidade:</span>
            <strong>Fortaleza, Ceará</strong>
          </p>
          <p>
            <span>CEP:</span>
            <strong>433-8800</strong>
          </p>
        </div>

        <div className='linha-divisor'></div>

        <div className='section-payment'>
          <h3>Informações de Pagamento</h3>
          <p>
            <span>Titular do cartão:</span>
            <strong>FRANCISCO A P</strong>
          </p>
          <p>
            <span>Final:</span>
            <strong> **** **** **** 1234</strong>
          </p>
        </div>

        <div className='linha-divisor'></div>

        <div className='section-resumo'>
          <h3>Resumo da compra</h3>

          <div className='container-imagem-texto'>
            <div className='lado-esquerdo'>
              <img src={NikeImg} alt='Ícone de menu' />
            </div>
            <div className='lado-direito'>
              <p>Tênis Nike Revolution 6 Next Nature</p>
              <p>Masculino</p>
            </div>
          </div>
        </div>

        <div className='container-total-valor'>
          <div className='total-valor'>
            <span>Total</span>
            <span>R$ 219,00</span>
          </div>
          <div className='info-parcelas'>
            <p>ou 10x de 21,90 sem juros </p>
          </div>
        </div>

        <div className='content-print'>
          <a href=''>Imprimir recibo</a>
        </div>
      </div>

      <ButtonShop>Voltar para Home</ButtonShop>
    </div>
  );
};

export default BuySuccessPage;
