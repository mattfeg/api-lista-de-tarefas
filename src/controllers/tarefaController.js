const { executarSQL } = require("../database");


async function updateTarefa(id, data) {
    try {
        if (!data.tarefa_titulo || data.tarefa_titulo == "") {
            throw new Error("O parâmetro tarefa_titulo é obrigatório");
        }

        const result = await executarSQL(`UPDATE tarefas SET tarefa_titulo = "${data.tarefa_titulo}", tarefa_descricao = "${data.tarefa_descricao}" WHERE tarefa_id = ${id};`);

        if (result.affectedRows > 0) {
            return {
                status: 201,
                detail: "Dados atualizado com sucesso",
                severity: "success"
            };
        }else{
            return {
                status: 422,
                detail: "Algo de errado não certo",
                severity: "danger"
            }
        }
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        };
    }

}


module.exports = {
    updateTarefa
}