import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database(); // Instanciando a classe Database

export function routeHandler(request, response){
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url);
    });

    if(route){
        const routeParams = request.url.match(route.path);

        const { query } = routeParams.groups;

        // Se existir parâmetros faça a extração das querys, caso contrário, retorna um objeto vazio
        request.query = query ? extractQueryParams(query) : {};
        
        return route.controller({ request, response, database }); // Repassando o 'database' dentro para que todas as rotas tenham acesso ao mesmo banco de dados
    }

    return response.writeHead(404).end();
}