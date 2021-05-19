Primeiramente foi feito o arquivo "index.js", após isso foi aberto o terminal
onde foi instalado a biblioteca "express", como também foi feito o
 comando "npm init" para iniciar um pacote,
criar o arquivo "package.json", neste arquivo foi modificado a estrutura do
 "script", renomeando para "start": "node index.js", fazendo com que a 
aplicação inicialize após subir para o Heroku.


2 arquivos foram criados "cachorros.js" e "consulta.js", onde cada um
deles tem uma rota onde neles foi usado as "Router" para melhorar a organização

em ambas as rotas foi instanciadas as bibliotecas "express", "axios" e "node-html-parser",
onde todos tem sua variavel

Primeira rota ('/cachorros') 
1º crio o vetor cachorros para a população dos dados
2º crio a variavel URL para a requisição do site
3º uso a biblioteca axios na url para fazer a requisao e guardo na variavel
"requisao"
4º como a requisão do axios é uma promessa, utilizaze o ".then" e uma
função para seu funcionamento da requisão.
5º dentro da requisão utilizaremos então a biblioteca "node-html-parser",
6º usamos a função "parse" na resposta da função para que ele retorne
o HTML da página, onde guardo em uma variavel(root).
7º encontro uma classe onde contém os dados que necessito, 
usando o QuerySelectorAll eu capturo esses dados e coloco na variavel "vetorCachorro".
8º após isso foi utilizado a função "map", para mapear todos os dados,
porém foi retornado somente o raça e o link, encontrados no escopo
da classe encontrada, também foi retornado o "timestamp" contendo data e
horário da requisição, conforme solicitado.
9º após mapear e capturar os dados necessário, foi usado a função "res.json"
para enviar a resposta ao cliente no formato json.
10º ao final foi exportado a rota.

Segunda rota('/consulta')

1º não muito diferente da primeira rota, foi feito do 1º passo ao 8º passo, 
mas antes ainda foi pego a query e guardado em uma variavel
2º após o retorno dos dado, foi feito uma função chamada "filtro", onde 
foi passado os dados capturados como parametros, nessa função retorna
apenas os dados que são iguais a query inserida em uma callback
3º após todo esse processo foi mandado a resposta ao cliente usando
a função "filter", filtrando somento o dado pesquisado.
4º ao final foi exportado a rota.

no arquivo index.js foi chamada a biblioteca express, onde será possivel
buscar as rotas atravez das requisições.

foi criado também a rota listen, para a verificação do servidor.