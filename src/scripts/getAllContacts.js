import { readContacts } from "../utils/readContacts.js";

const getAllContacts = async () => {
    const contacts = await readContacts();
    console.log("📋 All Contacts:", contacts);
};

getAllContacts();
