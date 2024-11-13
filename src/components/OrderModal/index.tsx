import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table  }</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </header>

        <div className='status-container'>
          <small>Status do Pedido</small>
          <strong>
            {order.status === 'WAITING' && 'Fila de Espera'}
            {order.status === 'IN_PRODUCTION' && 'Em produção'}
            {order.status === 'DONE' && 'Pronto!'}
          </strong>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className='order-items'>
            {order.products.map(({ _id, product, quantity }) => (
              <div className='item' key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width='56'
                  height='28.,51'
                />

                <span className='quantity'>{quantity}x</span>

                <div className='product-details'>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className='total'>
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <strong>Iniciar Produção</strong>
          </button>

          <button type='button' className='secondary'>
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
