
import sqlite from 'sqlite';
import conn from '../connect.js';

const modelObj = {

    async add(_obj) {
        try {
        
            const db = await conn();
            const rest = await db.all(`INSERT INTO Member (empCode, prefix, fname, lname, position, department, salary, otherSalary) VALUES ('${_obj.empCode}', '${_obj.prefix}', '${_obj.fname}', '${_obj.lname}', '${_obj.position}', '${_obj.department}', ${_obj.salary}, ${_obj.otherSalary});`);
            db.close();
            return ({ status: true, data: rest });
    
        } catch (error) {
            return ({ status: false, error: error });
        }
    },
    async addBulk(_obj) {
        try {
            // console.log("_obj -> ",_obj);
            const db = await conn();
            // const placeholders = _obj.map(() => "(?, ?, ?, ?, ?, ?, ?, ?)").join(', ');
            const artistQuery = "INSERT INTO Member (empCode, prefix, fname, lname, position, department, salary, otherSalary) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ";

            const del = await db.run("DELETE FROM Member");
            console.log("del -> ",del);

            const stmt = await db.prepare((artistQuery));
            _obj.forEach((element, index) => {
                console.log("index -> ",index);
                stmt.run(`${element.empCode}`, `${element.prefix}`, `${element.fname}`, `${element.lname}`, `${element.position}`, `${element.department}`, element.salary, element.otherSalary);
            });
            // stmt.finalize();
            db.close();
            return ({ status: true, data: _obj });
    
        } catch (error) {
            return ({ status: false, error: error });
        }
    },
    async getAll() {
        try {
        
            const db = await conn();
            const rest = await db.all(`select * from member`);
            db.close();
            return ({ status: true, data: rest });
    
        } catch (error) {
            return ({ status: false, error: error });
        }
    },
    async getById(_id) {
        try {
        
            const db = await conn();
            const rest = await db.all(`select * from member where id = ${_id}`);
            db.close();
            return ({ status: true, data: rest });
    
        } catch (error) {
            return ({ status: false, error: error });
        }
    },
    async delete(_id) {
        try {
        
            const db = await conn();
            const rest = await db.all(`delete from member where id = ${_id}`);
            db.close();
            return ({ status: true, data: rest });
    
        } catch (error) {
            return ({ status: false, error: error });
        }
    },

}

export default modelObj;