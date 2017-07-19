const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'elmo',
  password : '1234',
  database : 'elmo'
});

pool.getConnection( (err, conn) => {
  if(err){
    console.error('error connection : ' + err);
    return;
  }

  conn.query('select * from member', (err, results, fields) => {
    //console.log(results.length);
    console.log(results[0])

    conn.release();

    if(err) throw err;
  });
  //console.log('connected as id ' + conn.threadId);
});
