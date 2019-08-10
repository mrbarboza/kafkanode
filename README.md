# Micro-Serviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

## Aplicações

- API Principal; (Station)
- Geração de Certificados;

## Fluxo

- API Principal envia uma mensagem pro serviço de certificados para gerar o certificado;
- Micro-Serviço de certificado devolve resposta (Sincrona/Assincrona);

Se conseguir sincrona/assincrona:

- Receber uma resposta assincrona de quando o e-mail com certificado foi enviado;

## O que sabemos?

- REST (latência);
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, Paypal, Netflix;
