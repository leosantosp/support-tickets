export function extractQueryParams(query){
    return query
        .slice(1) // Pega a query e remove o '?'
        .split('&') // Vai dividir toda vez que encontrar o sinal de '&' que significa que é outro parãmetro
        .reduce((queryParams, param) => {
            // Vai criar um novo array com base no outro. 
            const [key, value] = param.split("="); // Divide os valores das querys pelo '='

            queryParams[key] = value; // Cria um novo valor na variável.

            return queryParams;

        }, {})
}