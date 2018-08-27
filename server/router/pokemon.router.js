const router = require('express').Router();
const pool = require('../modules/pool');


router.get('/', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * From "pokemon";`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting pets', error);
        res.sendStatus(500);
    });
});
router.get('/kanto', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * From "pokemon" WHERE "region" like 'Kanto' ORDER BY "poke_id" ASC;`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting by Kanto', error);
        res.sendStatus(500);
    });
});

router.get('/johto', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * From "pokemon" WHERE "region" like 'Johto' ORDER BY "poke_id" ASC;`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting by johto', error);
        res.sendStatus(500);
    });
});

router.get('/hoenn', (req,res)=>{
    console.log('GET Route');
    const query = `SELECT * From "pokemon" WHERE "region" like 'Hoenn' ORDER BY "poke_id" ASC;`;
    pool.query(query).then(results=>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error GETting by hoenn', error);
        res.sendStatus(500);
    });
});
// router.get('/combo',(req,res)=>{
//     console.log('GET combo');
//     const query = `SELECT "owners"."name_first", "owners"."name_last","pets"."name" 
//                     From "owners" JOIN "pets"
//                     ON "owners"."id" = "pets"."owner_id";`;
//     pool.query(query).then(results=>{
//         res.send(results.rows);
//     }).catch((error)=>{
//         console.log('Error GETting Combo', error);
//         res.sendStatus(500);
//     });
// });

// router.delete('/:pet_id', function(req,res){
//     console.log('In Delete Route');
//     const deleteId = req.params.pet_id;
//     const query = `DELETE FROM "pets" WHERE "pet_id" = $1;`;
//     pool.query(query,[deleteId]).then((results)=>{
//         console.log(results);
//         res.sendStatus(200);
//     }).catch((error)=>{
//         console.log('Error in Delete route',error);
//         res.sendStatus(500);
//     });
// });




module.exports = router;