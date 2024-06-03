import axios from "axios";

const defautHeaders = {
    "Content-Type": "application/json",
};

export const SpendWiseClient = axios.create({
    baseURL: "https://localhost:44377/api/",
    headers: defautHeaders,
});