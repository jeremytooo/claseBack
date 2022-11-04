// importamos
const express = require('express');
const { PrismaClient } = require('@prisma/client');

// instanciamos los paquetes
const prisma = new PrismaClient();
const app = express();

// establecer motor del servidor
app.use(express.json());
const port = "3000";



// hacer GET de todos los productos
app.get('/productos', async (req, res) => {
    const productos = await prisma.productos.findMany();
    res.json(productos);
});

// hacer GET de un producto por id
app.get('/productos/:id', async (req, res) => {
    const { id } = req.params;
    const producto = await prisma.productos.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(producto);
});

// hacer POST de un producto
app.post('/productos', async (req, res) => {
    const { codigo, nombre, enstock, precio, tipo, marca, descri } = req.body;
    const newproductos = await prisma.productos.create({
        data: {
            codigo: codigo,
            nombre: nombre,
            enstock: enstock,
            precio: precio,
            tipo: tipo,
            marca: marca,
            descri: descri,
        },
    });
    res.json(newproductos);
});

//GET de VENTAS
app.get('/ventas', async (req, res) => {
    const ventas = await prisma.ventas.findMany();
    res.json(ventas);
});

// POST de VENTAS
app.post('/ventas', async (req, res) => {
    const { codigo, nombre, cantidadenstock, precio,tipo, marca,descri,cantidadvendida, productoId } = req.body;
    const newventas = await prisma.ventas.create({
        data: {
            codigo: codigo,
            nombre: nombre,   
            cantidadenstock: cantidadenstock,
            precio: precio,
            tipo: tipo,              
            marca: marca,       
            descri: descri,     
            cantidadvendida: cantidadvendida,   
            productoId: productoId,
        },
    });
    res.json(newventas);
});


// Get de ventas por codigounico
app.get('/ventas/:codigo', async (req, res) => {
    const { codigo } = req.params;
    try
    {
        const ventas = await prisma.ventas.findUnique({include: {producto: true}, 
          where: {codigo: codigo},});
        res.json(ventas);
    }
    catch (error)
    {
        res.json(error);
    }
});

// patch /job
app.patch('/job/:id', async function(req, res) {
  const job = await prisma.job.update({
    where: { id: Number(req.params.id) },
    data: req.body,
  });
  res.json(job);
});

// DELETE producto
app.delete('/productos/:id', async (req, res) => {
    const { id } = req.params;
    const producto = await prisma.productos.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(producto);
});

//actualizar producto
app.put('/productos/:id', async (req, res) => {
    const { id } = req.params;
    const { codigo, nombre, enstock, precio, tipo, marca, descri } = req.body;
    const producto = await prisma.productos.update({
        where: {
            id: Number(id),
        },  
        data: {
            codigo: codigo,
            nombre: nombre,
            enstock: enstock,
            precio: precio,
            tipo: tipo,
            marca: marca,
            descri: descri,
        },
    });
    res.json(producto);
});



// configuramos servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

