
const sqlite = require('sqlite');

async function setUp() {

    const db = await sqlite.open('./database.db');
    await db.migrate({force:true});

}

setUp();

