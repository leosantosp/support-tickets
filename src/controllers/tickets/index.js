/**
 * CREATE - criar
 * INDEX - listar
 * UPDATE - atualizar
 * REMOVE - delete
 * SHOW - exibir unico registro
 */

export function index({ request, response, database }){
    const { status } = request.query; 
    console.log(status);

    const tickets = database.select('tickets');

    return response.end(JSON.stringify(tickets));

}