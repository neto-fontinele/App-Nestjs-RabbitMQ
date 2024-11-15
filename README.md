Para rodar aplicação

```json
docker compose up
```

- As mensagens enviadas estão sendo salvas em memória, pois quando o Consumer pegar a mensagem enviada pelo Producer, ela será automaticamente removida do sistema de filas do RabbitMQ, por isso está sendo salva previamente em memória

* Visualize as mensages que foram criadas em

_(GET) http://localhost:3001/orders_

- Para criar uma mensagem

_(POST) http://localhost:3001/orders_

- Request:

```json
{
  "productName": "alfredo@gmail.com",
  "email": "alfredo@gmail.com",
  "quantity": 10
}
```

- Response:

```json
{
  "message": "Order Placed!"
}
```
