const { redirect } = require("react-router-dom");
const db = require("../bd/db")

exports.update = (req,res) => {
    const { id } = req.params;
    const { Newquantidade } = req.body;

    const sql = "UPDATE Produto SET Quantidade = ? WHERE idproduto = ?";

    db.query(sql, [Newquantidade,id], (err, reuslt) => {
        if(err) {
            console.log(err)
        } else {
            res.send(reuslt)
        }
    })
}