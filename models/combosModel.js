var pool = require("./bd");

async function getCombos(){
    var query = "select * from combos order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertCombos(obj){
try{
    var query = "insert into combos set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
} catch(error){
    console.log(error);
    throw error;
}
 }



module.exports = { getCombos,
insertCombos }