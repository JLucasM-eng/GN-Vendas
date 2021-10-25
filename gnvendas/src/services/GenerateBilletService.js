
var Gerencianet = require('gn-api-sdk-node');
 //var credentials = require('./credentials');
var moment = require('moment');

module.exports = {
    async execute(nome, cpf,telefone,item){
        var expire_at = moment().add(2,'day').format("YYYY-MM-DD");
        var clientId = process.env.CLIENT_ID;
        var clientSecret =process.env.CLIENT_SECRET;
 
    var options = {
        client_id: clientId,
        client_secret: clientSecret,
        sandbox: true
    }

    var body = {

    payment: {
        banking_billet: {
        expire_at: expire_at, 
        customer: {
            name: nome,
            cpf: cpf,  
            phone_number: telefone,
        }
        }
    },

    items: [{
        name: item.nome_produto,
        value: item.valor_produto,
        amount: 1
    }]
    }

    var gerencianet = new Gerencianet(options);

    const handle = async ()=>{
        try {
            const response = await gerencianet.oneStep([], body)
            return response
        }catch(err){
            console.error(err)
            return err
        }
       
    }
    const response = await handle()
    return response
     /*gerencianet
        .oneStep([], body)
        .then(response=>{return response})
        .catch(console.log)
        .done();*/
 

    }
}