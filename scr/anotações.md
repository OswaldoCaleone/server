
src = source (ou código fonte)

dentro da src -> Seu código fonte
fora da src -> Arquivos de configuração


Servidor que sustenta uma aplicação

conceito de arquitetura N-layer

camadas:
- Controllers: controlar quem acessa e controlar as respostas de devolução (request e responses)

- Rotas: Quem faz o apontamento de endereços para os nossos controllers

- Model: é a forma de entrada/saida de dados no seu servidor

- Config: server para colocar configurações não embarcadas (.env): serve para isolar dados sensíveis

Cors: serve para identificar quem pode acessar sua aplicação
dotenv: permite separar as chaves(senhas , conficgurações)
openia: biblioteca que permite que o servidor também seja um cliente