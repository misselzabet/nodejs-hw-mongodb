import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (count = 5) => {
    const contacts = await readContacts();
    for (let i = 0; i < count; i++) {
        contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log(`✅ Added ${count} new contacts!`);
};

generateContacts();
