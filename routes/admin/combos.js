var express = require('express');
var router = express.Router();
var combosModel = require("./../../models/combosModel")

/* GET home page. */
router.get('/',async function (req, res, next) {
  var combos = await combosModel.getCombos();
  res.render("admin/combos", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    combos  
  });
});

router.get("/agregar",(req, res, next)=>{
  res.render("admin/agregar", {
    layout: "admin/layout"
  })
});


router.post("/agregar", async (req, res, next)=>{
  try{
    if (req.body.titulo != "" && req.body.descripcion != ""){
      await combosModel.insertCombos(req.body);
      res.redirect("/admin/combos")
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "todos los campos son requeridos"
      })
    }
  } catch (error){
    console.log(error)
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      massage: "no se cargo el nuevo combo"
    })
  }
})

module.exports= router;