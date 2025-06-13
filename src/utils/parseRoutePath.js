// Receber o caminho da rota
// Valida se parâmetros estão sendo recebidos e transforma-os em expressão regular
export function parseRoutePath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g;

    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)");

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`);

    return pathRegex;
}