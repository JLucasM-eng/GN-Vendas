const connection = require('../database/connection')

const GenerateBilletService = require('../services/GenerateBilletService')

  
const defaultResponseModel = {
    success:false
}


module.exports = {

    async buyProduct(req,res){

        const response = {...defaultResponseModel}

        const {nome, cpf,telefone,item} = req.body;
        console.log("AQUI ESTAO OS DADOS",nome, cpf,telefone,item)
        // const service = new GenerateBilletService();

        const result = await GenerateBilletService.execute(nome, cpf,telefone,item)

        if(!result.error){

        const [,affectRows] = await connection.query(`
            INSERT INTO purchases VALUES (DEFAULT,'${nome}','${cpf}','${telefone}','${result.pdf.charge}','${result.charge_id}')
        `)
        response.success = affectRows > 0;
        }

        

        

        return res.json(result)

    },

    async listProduct(req,res){

        const [,data] = await connection.query(`
            SELECT * FROM products 
        `)

        return res.json(data)
        
    },

    async register(req,res) {
        const response = {...defaultResponseModel}

        const {nome_produto,valor_produto} = req.body;
        
        
        const [,affectRows] = await connection.query(`
            INSERT INTO products VALUES (DEFAULT,'${nome_produto}','${valor_produto}')
        `)

        response.success = affectRows > 0;

        return res.json(response)
    }
}