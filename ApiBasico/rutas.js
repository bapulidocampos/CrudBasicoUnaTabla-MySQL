const router = require('express').Router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
//get equipos
router.get('/',(req, res)=>{
    let sql ='select * from personal_profesional'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
           // console.log(rows.TextRow);
            res.json(rows)
        }
    })

})

// get un equipo
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from personal_profesional where id = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
     const{nombre, apellido,cedula,fecha_nac,telefono,sexo,profesion,municipio,
        direccion,vehiculo,marca,ano} = req.body


    let sql = `insert into personal_profesional(nombre, apellido, cedula, fecha_nac,telefono
    ,sexo, profesion, municipio, direccion, vehiculo, marca, ano
    ) values('${nombre}','${apellido}','${cedula}','${fecha_nac}','${telefono}',
    '${sexo}','${profesion}','${municipio}','${direccion}','${vehiculo}','${marca}'
    ,'${ano}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from personal_profesional where id = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
});

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, apellido,cedula,fecha_nac,telefono,sexo,profesion,municipio,
        direccion,vehiculo,marca,ano} = req.body


    let sql = `update personal_profesional set 
                nombre ='${nombre}',
                apellido='${apellido}',
                cedula='${cedula}',
                 fecha_nac ='${fecha_nac}',
                 telefono='${telefono}',
                 sexo ='${sexo}',
                 profesion ='${profesion}',
                 municipio='${municipio}',
                 direccion ='${direccion}',
                  vehiculo='${vehiculo}',
                 marca ='${marca}',
                 ano ='${ano}'
                where id = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo modificado'})
        }
    })

})
//----------------------------------

module.exports = router