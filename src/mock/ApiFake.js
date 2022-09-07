const productos = [
        {
            nombre: 'buso apoaiqiqk M',
            descripcion: "short hombre",
            precio: 3100,
            stock: 6,
            imagen: 'https://i.im.ge/2022/09/07/OZPtp0.chelsea-market-3540-209868-1-product.webp',
            categoria:'para-hombre'
        },
        {
            nombre: 'buso lxkxdsnnsj XXL',
            descripcion: "short hombre",
            precio: 2900,
            stock: 26,
            imagen: 'https://i.im.ge/2022/09/07/OZPLH4.UB-U12L077-6577-1.jpg',
            categoria:'para-hombre'
        },
        {
            nombre: 'buso akjuwuw S',
            descripcion: "short hombre",
            precio: 2500,
            stock: 15,
            imagen: 'https://i.im.ge/2022/09/07/OZNZWP.stefani-0206-096139-1-catalog-new.webp',
            categoria:'para-hombre'
        },
        {
            nombre: 'buso cbnchhd L',
            descripcion: "short mujer",
            precio: 4000,
            stock: 17,
            imagen: 'https://i.im.ge/2022/09/07/OZPiwq.LU-INSS210015-1.jpg' ,
            categoria:'para-hombre'
        },
        {
            nombre: 'buso sjabgd M',
            descripcion: "short mujer",
            precio: 3000,
            stock: 19,
            imagen: 'https://i.im.ge/2022/09/07/OZPmbf.chambray-cotton-paperbag-waist-shorts.jpg',
            categoria:'para-hombre'
        },
        {
            nombre: 'buso akakaikaik XL',
            descripcion: "short mujer",
            precio: 2600,
            stock: 9,
            imagen: 'https://i.im.ge/2022/09/07/OZPN7r.546221-800-auto.webp',
            categoria:'para-hombre'
        }
]


export const data = new Promise((resolve, reject)=>{

    let condicion = true

    setTimeout(()=> {
        if (condicion){
            resolve(productos)
        } else {
            reject('salio mal, el producto no se encuentra en stock')
        }
    }, 2000)
})


export default productos



/*
short
--HOMBRES--
1

2

3

4



--MUJERES--
1

2

3

4


*/

