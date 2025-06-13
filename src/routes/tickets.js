import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";

export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        controller: create // Ele vai acionar a função e automaticamente vai repassar o request e a response.
    },
    {
        method: "GET",
        path: "/tickets",
        controller: index
    }

];