import React, {useContext} from 'react';
import CartContext from '../../context/cart';
import { MdDelete } from 'react-icons/md';
import { Container, ContainerList, TravelItem, Info, Quantity, Subtotal, TotalPrice } from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);
  const isTotalPrice = state.cart.reduce((acc, el) => acc + Number(el.price) * el.quantity, 0,)
 
  function deleteTravel(id) {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el viaje?`
    );
    if(isDelete) {
      let newData = state.cart.filter((el) => el.id !== id);
      setState({
        cart: newData,
      });
    }else{
      console.log("no se hizo");
    }
  }

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity}/>
            <Subtotal>
              <p>{el.quantity * el.price}</p>
              <button type="button" onClick={() => deleteTravel(el.id)}>
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
        </TravelItem>
        ))}
        <TotalPrice>
          <span>Total Price</span>
          <span>{isTotalPrice}</span>
        </TotalPrice>
      </ContainerList>
    </Container>
  );
}

export default Cart;

