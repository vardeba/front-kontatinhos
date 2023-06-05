# - - - - - Kontatinhos - - - - -

## Todos os seus contatinhos em um só lugar

#

## Descrição

#

### Frontend da aplicação Kontatinhos.

### Uma aplicação para cadastro de usuários e seus kontatos.

### Depois de criado, um usuário vê apenas seus dados, pode editar os próprios dados e deletar seu usuário.

### Um usuário, depois de logado, vê apenas seus próprios kontatos. Pode pesquisar seus kontatos, editar os dados dos seus kontatos e deletar os seus kontatos.

### Não será possível criar um usuário caso o e-mail já esteja sendo usado por outro usuário.

#

#

#

## Instalação das dependências

```bash
$ npm install
```

## Rodando a a aplicação

```bash
$ npm run dev
```

#

#

#

# URL Base: http://localhost:3000

#### Caso estela rodando o backend na mesma máquina, certifique-se de ter informado uma porta diferente de 3000 na chave PORT do arquivo ".env", na raíz do backend.

#

#

## Login - Rota "/"

## Dashboard - Rota "/dashboard"

#

### Na rota de login, o usuário pode clicar no link cadastrar, que abrirá um modal de cadastro de usuário. Depois de sucesso no cadastro o modal se fecha e o usuário pode fazer o login.

### Depois de realizado o login, o usuário é redirecionado para a dashboard, aonde pode visualizar um card com seus dados e uma lista com todos os seus kontatinhos.

### No card de usuários é possível ver uma imagem de usuário, caso tenha sido informada no cadastro, nome do usuário, email e telefone.

### Clicando no ícone de lápis, abre-se um modal para editar os dados do usuário logado, é possivel informar o link de uma imagem/avatar, além de poder editar os dados do usuário, atentando-se para, caso queira mudar o e-mail cadastrado, será feita uma checagem se já existe algum usuário cadastrado com o mesmo e-mail.

### Clicando no ícone de lixeira, abre-se um modal informando que o usuário será excluído e pedindo uma confirmação. Caso confirme, tanto usuário quanto todos os kontatinhos serão excluídos permanentemente da aplicação, sem possibilidades de recuperação ou reativação de usuário.

### No botão sair, o usuário realiza o logout da aplicação e é redirecionado para a página de login novamente.

### O usuário pode permanecer logado por 24 horas, mesmo que feche a aplicação o usuário permanece logado caso não tenha clicado no botão sair e feito o logout.

### Depois de 24 horas será necessário realizar o login novamente. A Aplicação avisa que o usuário não está logado com um modal que redirecionará para a tela de login.

### Os Kontatinhos são apresentados em forma de lista.

### Clicando sobre o kontatinho, abre-se um modal com as informações do kontatinho, mostrando uma imagem caso informada no cadastro, nome, email e telefone, além dos ícones de lápis e lixeira, que abrem modais de edição de dados e exclusão do kontatinho respectivamente.

### Clicando no ícone de lupa, abre-se um campo de pesquisa, aonde é possível pesquisar um contato pelo nome completo ou apenas parte dele. Os resultados são mostrados conforme se digita.
