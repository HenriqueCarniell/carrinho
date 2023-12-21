const db = require('../bd/db')

exports.getDatacontroller = (req, res) => {
    const sql = "select * from Produto";

    db.query(sql, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}