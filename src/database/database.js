import fs from "node:fs/promises"; // 'promises' para usar async e await

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database{
    #database = {} // private '#'

    constructor(){
        fs.readFile(DATABASE_PATH, "utf8")
            .then((data) => {
                this.#database = JSON.parse(data) // Le os arquivos, caso encontre dados
            })
            .catch(() => {
                this.#persist(); // Caso não encontre dados, cria o arquivo
            })
    }

    #persist(){
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database)); // Cria o arquivo caso não exista
    }

    insert(table, data){
        // Verifica se a tabela existe dentro do banco de dados
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data);
        } else {
            // Caso não exista, crie a tabela e insira o primeiro registro
            this.#database[table] = [data];
        }

        this.#persist(); // Persistir, salvar no arquivo, os dados que acabamos de cadastrar
    }

    select(table){
        let data = this.#database[table] ?? []; // Caso não exista retorna uma lista vazia

        return data;

    }

}