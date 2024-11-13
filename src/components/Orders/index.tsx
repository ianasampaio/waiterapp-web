import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const order:Order[] =
  [
    {
      _id: "672290ea25da3e2781768fd8",
      table: "1",
      status: "DONE",
      products: [
        {
          "product": {
            name: "Coca cola",
            imagePath: "1730317473124-coca-cola.png",
            price: 7,
          },
          quantity: 2,
          _id: "672290ea25da3e2781768fd9"
        },
        {
          "product": {
            name: "Pizza de queijo",
            imagePath: "1730235530720-quatro-queijos.png",
            price: 40,
          },
          quantity: 3,
          _id: "672290ea25da3e2781768fd8"
        }
      ],
    },
  ];

export function Orders() {
  return (
    <Container>
      <OrdersBoard title="Fila de espera" orders={order}/>
      <OrdersBoard title="Em preparação" orders={[]}/>
      <OrdersBoard title="Pronto!" orders={[]}/>
    </Container>
  )
}
