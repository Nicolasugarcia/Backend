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

 async function deleteCombosById(id){
    var query = "delete from combos where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
 }

 async function getCombosById(id){
    var query = "select * from combos where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
 }

 async function modificarCombosById(obj, id){
    try{
        var query = "update combos set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
 }

module.exports = { getCombos,
insertCombos, deleteCombosById, getCombosById, modificarCombosById }