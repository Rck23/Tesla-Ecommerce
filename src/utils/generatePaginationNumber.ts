import React from 'react'

export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {

    // SI EL NUMERO DE PAGINAS ES MENOR IGUAL A 7 MUESTRE TODAS LAS PAGINAS SIN PUNTOS SUSPENSIVOS 
    if(totalPages <= 7 ){
        return Array.from({length: totalPages}, (_, i) => i + 1); //1,2,3,4,5,6,7
    }

    // SI LA PAGINA ACTUAL ESTA ENTRE LAS PRIMERAS 3 MOSTRAR LAS PRIMERAS 3, PUNTOS SUSPENSIVOS, Y LAS ULTIMAS 2 

    if(currentPage <= 3) {
        return[1,2,3,'...', totalPages - 1, totalPages]; //[1,2,3,...,49,50]
    }

    // SI LA PAGNIA ACTUAL ESTA ENTRE LAS ULTIMAS 3 MOSTRAR LAS PRIMERAS 2, PUNTOS SUSPENSIVOS, LAS ULTIMAS 3 
    if(currentPage >= totalPages - 2){
        return [1,2,'...', totalPages - 2, totalPages - 1, totalPages];
    }

     // SI LA PAGINA ACTUAL ESTA EN MEDIO, MOSTRAR LA PRIMERA PAGINA, PUNTOS SUSPENSIVOS, PAGINA ACTUAL Y VECINOS
    return [1,'...',currentPage - 1, currentPage, currentPage + 1, '...'];
    
}
