const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.status(200).send("<h1>Servidor Online</h1>");
});

//Rota de teste
app.get('/t', async(req, res) =>{
    /*const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized']
    });
    const page = await browser.newPage();
    await page.goto('https://www2.tce.am.gov.br');
    await page.setViewport({width: 1080, height: 1024});

    //Mantem o navegador aberto por um tempo definido
    setTimeout(async () => {
        await browser.close();
        console.log('Navegador fechado.');
    }, 20000);*/
})

//Captura requisições não correspondentes a nenhuma rota.
app.use((req, res)=>{
    res.status(404).send("<h1>Página não encontrada - erro 404 </h1>")
})

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});