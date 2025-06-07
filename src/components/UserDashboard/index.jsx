import { useState, useEffect } from 'react';
import './styles.css';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('Meus Pedidos');
  // Estado para controlar se estamos em mobile (útil para comportamentos específicos)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Hook para detectar mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dados do usuário
  const userProfile = {
    name: 'Francisco Antonio Pereira',
    email: 'francisco@gmail.com',
    cpf: '123.456.913-35',
    phone: '(85) 5555-5555',
    address: 'Rua João Pessoa, 333',
    neighborhood: 'Centro',
    city: 'Fortaleza, Ceará',
    zipCode: '433-8800',
    paymentMethod: '**** **** **** 1234',
  };

  // Dados dos pedidos
  const orders = [
    {
      id: '4438363562',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Produto em trânsito',
      statusClass: 'in-transit',
    },
    {
      id: '4438362482',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'completed',
    },
    {
      id: '4438361482',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Cancelado',
      statusClass: 'canceled',
    },
    {
      id: '4438360362',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'completed',
    },
    {
      id: '4438359362',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'completed',
    },
  ];

  const sidebarItems = [
    'Meu Perfil',
    'Meus Pedidos',
    'Minhas Informações',
    'Métodos de Pagamento',
  ];

  const handleSidebarClick = item => {
    setActiveSection(item);
  };

  // Componente para seção "Meu Perfil"
  const ProfileSection = () => (
    <div>
      <h2 className='profile-title'>Meu Perfil</h2>
      <div className='profile-section'>
        <div>
          <div className='profile-label'>Nome:</div>
          <div className='profile-info'>{userProfile.name}</div>
        </div>
        <div>
          <div className='profile-label'>Email:</div>
          <div className='profile-info'>{userProfile.email}</div>
        </div>
      </div>
    </div>
  );

  // Componente para seção "Meus Pedidos" - Otimizado para responsividade
  const OrdersSection = () => (
    <div>
      <div className='header'>
        <h1>Meus Pedidos</h1>
        {/* Só mostra o STATUS em telas maiores */}
        {!isMobile && <div className='status-header'>STATUS</div>}
      </div>

      <div className='orders-list'>
        {orders.map(order => (
          <div key={order.id} className='order-item'>
            <div className='order-details'>
              <div className='product-image-container'>
                <div className='product-image'></div>
              </div>
              <div className='order-info'>
                <div className='order-number'>Pedido nº {order.id}</div>
                <div className='product-name'>{order.product}</div>
              </div>
            </div>
            <div className={`status ${order.statusClass}`}>{order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // Componente para seção "Minhas Informações" - Layout melhorado
  const PersonalInfoSection = () => (
    <div style={{ position: 'relative' }}>
      <h2 className='profile-title'>Minhas Informações</h2>
      <div className='profile-edit'>Editar</div>

      <div className='profile-section'>
        <div className='divisor1'></div>
        <h3 className='profile-subtitle1'>Informações Pessoais</h3>
        <div>
          <div className='profile-label'>Nome:</div>
          <div className='profile-info'>{userProfile.name}</div>
        </div>
        <div>
          <div className='profile-label'>CPF:</div>
          <div className='profile-info'>{userProfile.cpf}</div>
        </div>
        <div>
          <div className='profile-label'>Email:</div>
          <div className='profile-info'>{userProfile.email}</div>
        </div>
        <div>
          <div className='profile-label'>Celular:</div>
          <div className='profile-info'>{userProfile.phone}</div>
        </div>
      </div>

      <div className='profile-section'>
        <div className='divisor2'></div>
        <h3 className='profile-subtitle2'>Informações de Entrega</h3>
        <div>
          <div className='profile-label'>Endereço:</div>
          <div className='profile-info'>{userProfile.address}</div>
        </div>
        <div>
          <div className='profile-label'>Bairro:</div>
          <div className='profile-info'>{userProfile.neighborhood}</div>
        </div>
        <div>
          <div className='profile-label'>Cidade:</div>
          <div className='profile-info'>{userProfile.city}</div>
        </div>
        <div>
          <div className='profile-label'>CEP:</div>
          <div className='profile-info'>{userProfile.zipCode}</div>
        </div>
      </div>
    </div>
  );

  // Componente para seção "Métodos de Pagamento"
  const PaymentMethodsSection = () => (
    <div>
      <h2 className='profile-title'>Métodos de Pagamento</h2>
      <div className='profile-section'>
        <div>
          <div className='profile-label'>Cartão:</div>
          <div className='profile-info'>{userProfile.paymentMethod}</div>
        </div>
      </div>
    </div>
  );

  // Função para renderizar o conteúdo baseado na seção ativa
  const renderContent = () => {
    switch (activeSection) {
      case 'Meu Perfil':
        return <ProfileSection />;
      case 'Meus Pedidos':
        return <OrdersSection />;
      case 'Minhas Informações':
        return <PersonalInfoSection />;
      case 'Métodos de Pagamento':
        return <PaymentMethodsSection />;
      default:
        return <OrdersSection />; // Fallback para a seção de pedidos
    }
  };

  // Container class baseado na seção ativa (mantido para compatibilidade)
  const containerClass =
    activeSection === 'Meus Pedidos'
      ? 'order-tracking-container'
      : 'profile-container';

  return (
    <div className={containerClass}>
      {/* Sidebar - Menu de navegação */}
      <div className='sidebar'>
        {sidebarItems.map(item => (
          <div
            key={item}
            className={`sidebar-item${item === activeSection ? ' active' : ''}`}
            onClick={() => handleSidebarClick(item)}
            // Adiciona role para acessibilidade
            role='button'
            tabIndex={0}
            // Suporte para navegação por teclado
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleSidebarClick(item);
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Conteúdo Principal */}
      <div
        className={
          activeSection === 'Meus Pedidos'
            ? 'main-content'
            : 'profile-main-content'
        }
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default UserDashboard;
