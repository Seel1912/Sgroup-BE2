var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    insecureAuth: true
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query('USE hehe;', (err, results) => {
        if (err) {
            console.log('Chon sai roi', err);
            return;
        }
    })

    con.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.log(('hehe', err));
            return
        }
        console.log(('All Items:', results));
    })
});
