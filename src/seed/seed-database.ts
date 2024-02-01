import { initialData } from "./seed";
import prisma from '../lib/prisma';

async function main() {
    
    // 1. Borrar registros previos
    await Promise.all([

        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ])

    // categorias

    const {categories, products} = initialData

    // hacen lo mismo diferente sintaxis

    // const categoriesData = categories.map( category => ({
    //     name: category
    // }))

    const categoriesData = categories.map( (name) => ({ name   }))

    await prisma.category.createMany({
        data: categoriesData
    }); 

    // Productos

    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce( (map, category) => {

        map[category.name.toLowerCase()] = category.id; 

        return map; 
    }, {} as Record<string, string>); //<string=shirt, categoryId>
    

    console.log('Seed Ejecutado correctamente');
    
}



(() => {
    main(); 


})();