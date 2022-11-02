const produtos = [
    {    
        id: "prod001",
        nome : "Fire Stick",
        preco: 360.05,
        cor: "preto",
        imagem: "fire-stick.jpg",
        descricao: "Fire TV Stick | Streaming em Full HD com Alexa | Com Controle Remoto por Voz com Alexa (inclui comandos de TV)"
    },
    {
        id: "prod002",
        nome : "Kindle",
        preco: 299.05,
        cor: "preto",
        imagem: "kindle.jpg",
        descricao: "Kindle 10a. geração com bateria de longa duração - Cor Preta"
    },
    {
        id: "prod003",
        nome : "Capa Kindle",
        preco: 69,
        cor: "preto",
        imagem: "capa-kindle.jpg",
        descricao: "Capa de tecido resistente à água para Kindle Paperwhite (10ª Geração não compatível com as versões anteriores do Kindle Paperwhite ou com 11ª Geração lançada em 2021) - Cor Azul"
    },
    {
        id: "prod004",
        nome : "Echo Dot",
        preco: 270.55,
        cor: "preto",
        imagem: "echo-dot.jpg",
        descricao: "Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta"       
    }
]

//Mockup de Banco de Dados de Usuário
const admin = {
    email: "admin@gmail.com",
    password: "admin",
    nome: 'John',
    sobrenome: 'Doe'
}






function showLogin () {
    console.log('showLogin foi chamada!');
    document.getElementById('div-form-login').style.visibility = 'visible';
}

function login () {
    console.log('login foi chamada!');

    //Ler o que o usuario digitou no campo email.
    let emailDigitado = document.getElementById('input-email').value
    console.log(emailDigitado);

    //Ler o que o ussuario digitou no campo password.
    let senhaDigitada = document.getElementById('input-password').value
    console.log(senhaDigitada);


    //Comparar Email e Sennha digitada com email e senha do Banco de Dados
    if(emailDigitado === admin.email && senhaDigitada === admin.password) {
        console.log('Login com sucesso!');
        renderizarTelaLogada();
    }else{
        alert("Email ou Senha Incorretos!")
    }
}

function renderizarTelaLogada (){
    //Ocultar o formulário de login
    document.getElementById('div-form-login').style.display = 'none';

    //Ocultar o botão de Entrar
    document.getElementById('btn-login').style.display = 'none';


    //Exibir a immagem do perfil do usuário;
    document.getElementById('img-profile').style.visibility = 'visible';

    //Exibir mennsagem de boas vindas
    const welcome = document.createElement('h2');
    welcome.innerText = `Bem-vindo, ${admin.nome}!`;
    document.getElementById('galeria-de-produtos').prepend(welcome);

    exibirProdutos();
}

const galeriaDeProdutos = document.getElementById('div-galeria')

function exibirProdutos () {
    for(i=0; i < produtos.length; i++){
        
        //Criando um div para o produto
        let produto = document.createElement('div');
        produto.setAttribute('class', 'produto');

        //Criando, exibindo o nome do produto e adicionnado o nome do produto ao div do produto
        let nomeProduto = document.createElement('h3');
        nomeProduto.innerText = produtos[i].nome;
        produto.append(nomeProduto);

        //Criando, exibindo a imagem e adicionnado a imagem do produto ao div do produto
        let imagemProduto = document.createElement('img');
        imagemProduto.src = `assets/products/${produtos[i].imagem}`;
        produto.append(imagemProduto);

        //Preço
        let precoProduto = document.createElement('p');
        precoProduto.innerText = `R$ ${produtos[i].preco}`;
        produto.append(precoProduto);

        //Descrção
        let descricaoProduto = document.createElement('p');
        descricaoProduto.innerText = produtos[i].descricao;
        produto.append(descricaoProduto);


        //Adicionando o produto à galeria
        galeriaDeProdutos.append(produto);

    }
}



//Exemplo para exercício de cadastro de aluno
const alunos = [
    {
        nome: 'Jhon',
        sobrenome: 'Doe',
        email: 'johndoe@gmail.com',
        turma: '5a',
        senha: '123',
    },
    {
        nome: 'Jhon',
        sobrenome: 'Doe',
        email: 'johndoe@gmail.com',
        turma: '5a',
        senha: '123',
    },
    {
        nome: 'Jhon',
        sobrenome: 'Doe',
        email: 'johndoe@gmail.com',
        turma: '5a',
        senha: '123',
    }
];

