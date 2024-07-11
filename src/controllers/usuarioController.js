const { executarSQL } = require("../database")
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function logar(data){
    try {
        if (data.usuario_email == "" || !data.usuario_email){
            throw new Error("Campo email é obrigatório!")
        }
        if (data.usuario_senha == "" || !data.usuario_senha){
            throw new Error("Campo senha é obrigatório!")
        }

        const response = await executarSQL(`SELECT * FROM usuarios WHERE usuario_email = '${data.usuario_email}' AND usuario_senha = '${data.usuario_senha}';`)
        
        if (response.length > 0){
            const token = jwt.sign({
                data: response.usuario_id
            }, process.env.SECRET, {expiresIn: '1h'})
            return {
                token
            }
        } else{
            return {
                status: 200,
                detail: "Usuário ou senha incorretos",
                severity: "warn"
            }
        }
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "error"
        }
    }
}

module.exports = {
    logar
}