import { randomUUID } from "node:crypto";

/**
 * Entre chaves, eu posso passar os parâmetros em qualquer ordem
 */
export function create({ request, response, database }){
    // Criar um novo ticket
    const { equipment, description, user_name } = request.body;

    const ticket = {
        id: randomUUID(),
        equipment,
        description,
        user_name,
        status: 'open',
        created_at: new Date(),
        updated_at: new Date()
    }

    database.insert('tickets', ticket);

    return response.writeHead(201).end(JSON.stringify(ticket));
}