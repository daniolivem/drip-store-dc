import { useState } from 'react';
import './styles.css';

export default function OrderTracking() {
  const [activeSection, setActiveSection] = useState('Meus Pedidos');
  
  const orders = [
    {
      id: '4438363562',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Produto em trânsito',
      statusClass: 'status in-transit'
    },
    {
      id: '4438362482',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'status completed'
    },
    {
      id: '4438361482',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Cancelado',
      statusClass: 'status canceled'
    },
    {
      id: '4438360362',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'status completed'
    },
    {
      id: '4438359362',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'status completed'
    }
  ];

  const sidebarItems = [
    'Meu Perfil',
    'Meus Pedidos',
    'Minhas Informações',
    'Métodos de Pagamento'
  ];

  return (
    <div className="order-tracking-container">
      {/* Sidebar */}
      <div className="sidebar">
        {sidebarItems.map((item) => (
          <div 
            key={item}
            className={`sidebar-item ${
              item === activeSection ? 'active' : ''
            }`}
            onClick={() => setActiveSection(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Meus Pedidos</h1>
          <div className="status-header">STATUS</div>
          <svg className="divider" xmlns="http://www.w3.org/2000/svg" width="832" height="2" viewBox="0 0 832 2" fill="none">
            <path d="M1 1H831" stroke="#CCCCCC" stroke-linecap="round"/>
          </svg>
        </div>

        {/* Orders List */}
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-details">
                <div className="product-image-container">
                  <div className="product-image">
                  </div>
                </div>
                <div className="order-info">
                  <div className="order-number">Pedido nº {order.id}</div>
                  <div className="product-name">{order.product}</div>
                </div>
              </div>
              <div className={order.statusClass}>
                {order.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}