# Recuperação de senha

<!-- RF - REQUISITOS FUNCIONAIS -->
**RF**

- [x]  O usuário deve poder recuperar a sua senha informando o seu e-mail;
- [x]  O usuário deve receber um email com instruções de recuperação de senha;
- [x]  O usuário deve poder resetar sua senha;

<!-- RNF - REQUISITOS NÃO FUNCIONAIS -->
**RNF**

- [x]  Utilizar o Mailtrap para testar envios em ambiente de dev;
- [x]  Utilizar Amazon SES para envios de produção;
- [x]  O envio de e-mail deve acontecer em segundo plano (background job);

<!-- RN - REGRAS DE NEGÓCIO -->
**RN**

- [x]  O link enviado por email para resetar senha deve expirar em 2h;
- [x]  O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**RF**

- [x]  O usuário deve poder atualizar seu nome, e-mail e senha;

**RN**

- [x]  O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- [x] Para atualizar sua senha, o usuário deve informar a senha antiga;
- [x]  Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel de prestador

**RF**

- [x]  O usuário deve poder listar seus agendamentos de um dia específico;
- [x]  O prestador deve receber uma notificação sempre que houver um novo agendamento;
- [x]  O prestador deve poder visualizar as notificações não lidas

**RNF**

- [x]  Os agendamentos do prestador no dia devem ser armazenados em cache;
- [x]  As notificações do prestador devem ser armazenadas no MongoDB;
- [x]  As notificações do Prestador debem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- [x]  A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- [x]  O usuário deve poder listar todos prestadores de serviço cadastrados;
- [x]  O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- [x]  O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- [x]  O usuário deve poder realizar um novo agendamento com um prestador;


**RNF**

- [x]  A listagem de prestadores deve ser armazenada em cache;

**RN**

- [x]  Cada agendamento deve durar 1h exatamente;
- [x]  Os agendamentos devem estar disponíveis entre 8h e 18h (Primeiro às 8h, último às 17h);
- [x]  O usuário não pode agendar em um horário já ocupado;
- [x]  O usuário não pode agendar em um horário que já passou;
- [x]  O usuário não pode agendar serviços consigo mesmo;
