import { writeFile } from "fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const writeContacts = async (contacts) => {
    try {
        await writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing contacts:", error.message);
    }
};
