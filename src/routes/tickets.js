export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        controller: (request, response) => {
            response.writeHead(201).end("Criado com sucesso!")
        }
    }

];