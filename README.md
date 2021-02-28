# Move IT :walking:
> **Move IT consiste em uma aplicação que ajuda pessoas que ficam muito tempo no computador.**

A cada **30 minutos** a aplicação lhe dá um exercício simples para previnir possiveis problemas de *articulações*, *coluna* ou *olhos*, que são muito comuns de serem desenvolvidos caso a pessoa fique muito tempo na frente do computador parado. 

A aplicação foi desenvolvida em estilo *RPG*  , em que a cada desafio(exercício) completado, é concedido ao usuário experiência ou *xp*. Caso a quantidade de xp seja suficiente, o usuário poderá subir de nível. Essa mecânica foi adicionada com o intuito de incentivar a prática desses exercícios simples, mas muito importantes.

## História :blue_book:
A aplicação foi desenvolvida durante a semana **Next Level Week #04** ou **NLW #04**. Nela, [Diego Fernandes](https://twitter.com/dieegosf) ensinou conceitos de React e  Next JS. O principal deles para mim foi de como usar ***Contexts*** que são ferramentas que facilitam a conversa entre componentes.

Agradeço muito a todos da [Rockeseat](https://rocketseat.com.br), em especial [Diego Fernandes](https://twitter.com/dieegosf), por me proporcionar essa semana incrível com muito conteúdo sobre React e Next.

## Tecnologias utilizadas :computer:
- [React JS](https://reactjs.org) 
- [Next JS](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [js-cookie](https://www.npmjs.com/package/js-cookie)

## Como rodar o projeto localmente :open_file_folder:
Para testar a aplicação localmente você precisa clonar o repositório. Em seu git bash use
>git clone https://github.com/ofelipescherer/nlw04.git  

Em seguida precisamos instalar o pacote npm. Caso tenha o node instalado utilize
>npm install

Para iniciar o projeto utilize
>npm run dev

Pronto :smile: Agora é só abrir o navegador no endereço
>http://localhost:3000/

## Como usar :raising_hand:
Na tela incial, será pedido seu nome no github

![Screenshot_1](https://user-images.githubusercontent.com/62115215/109425876-481a4280-79c9-11eb-96d0-c76415e3e69a.png)

Mas não se preocupe, não é necessário criar uma conta caso não tenha uma. Apenas coloque qualquer nome ou deixe em branco. Porém caso tenha, é interessante coloca-lá pois assim, o programa consegue colocar sua imagem de perfil.

![Screenshot_3](https://user-images.githubusercontent.com/62115215/109426075-5321a280-79ca-11eb-8381-17fe74998252.png)
>Imagem padão quando o programa não encontra seu perfil no Gthub 

![Screenshot_2](https://user-images.githubusercontent.com/62115215/109426077-53ba3900-79ca-11eb-90c2-6a4435301556.png)
>Ao colocar um nome válido, podemos extrair a foto de perfil

Na próxima tela, você pode escolher o  Light Mode(padão) ou o Dark Mode.

![Screenshot_4](https://user-images.githubusercontent.com/62115215/109426214-3043be00-79cb-11eb-8e37-2229f25c312f.png)
> Light Mode

![Screenshot_5](https://user-images.githubusercontent.com/62115215/109426236-4e112300-79cb-11eb-9dac-4426f0a2e37f.png)
> Dark Mde

Próximo passo é clicar em*"iniciar um ciclo"* . O primeiro ciclo será sem desafios, portanto se pode relaxar.

Quando o *timer* chegar em 00:00, será disparado um som e uma notificação, caso o usuario tenha aceitado exibi-las. Em seguida, um novo desafio será proposto

![Screenshot_6](https://user-images.githubusercontent.com/62115215/109426369-31291f80-79cc-11eb-813a-628db1c114c5.png)

![Screenshot_7](https://user-images.githubusercontent.com/62115215/109426500-ba405680-79cc-11eb-9b3f-11cc02d3b005.png)
>Legenda: 
1. Quantidade de experiência que será recebida após o termino do desafio
2. Título e descrição do desafio
3. Botão Falhei, ao clicá-lo o contador será resetado e nenhuma experiência será recebida
4. Botão Cmpletei, ao clicá-lo a experiência será recebida e o contador de desafios será incrementado

Após ganhar experiência, você pode subir de level. Até que level você consegue chegar?

![Screenshot_8](https://user-images.githubusercontent.com/62115215/109426572-2327ce80-79cd-11eb-9a0f-702970d511ce.png)
> Level 2 alcançado 👏
