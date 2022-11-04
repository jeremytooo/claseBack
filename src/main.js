import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const newproductos = await prisma.productos.create({
    data: {
        codigo: "123456",
        nombre: "Tomate",
        enstock: "si",
        precio: "500",
        tipo: "fruta",
        marca: "Manolo de cartago",
        descri: "Tomates organicos, de nuestro amigo de confianza manolo",
    },

  });
  console.log("Nuevo producto agregado: ", newproductos);
  const todosproduct = await prisma.productos.findMany();
  console.log("Todos los productos que hay son: ");
  console.dir(todosproduct, { depth: null });

}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });