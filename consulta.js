const express = require('express')
const axios = require('axios').default
const parse = require('node-html-parser').parse
const router = express.Router()


router.get('/consulta', function (req, res) {

    const query = req.query.tipo
    var url = "https://tudosobrecachorros.com.br/racas-de-cachorros/"
    var requisao = axios.get(url)
    requisao.then(function (resposta) {
        var root = parse(resposta.data)
        var vetorCachorro = root.querySelectorAll(".rounded")
        
        cachorros = vetorCachorro.map(function (cachorro) {
            return {

                "raça": cachorro["_rawAttrs"].title,
                "link": cachorro["_rawAttrs"].href,
                "timestamp": Date.now()
            }

        })
        

        const retorno = function filtro(cachorros){
            
            return cachorros.raça == query
        }
        
        res.json(cachorros.filter(retorno))   
        
      })
        
    })

    module.exports = router