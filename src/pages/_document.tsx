import Document, { Html, Head, Main, NextScript } from 'next/document';

//Esse arquivo é carregado somente UMA única vez e diferente do _app.tsx que é renderizado uma vez, mas toda vez que o usuario 
//entra em outra page, tem um pouco de processamento. Por isso, nesse arquivo _document.tsx colocamos o que realmente vai ser carregado uma vez

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png" ></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}