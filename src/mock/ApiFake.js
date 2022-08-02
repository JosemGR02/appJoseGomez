const producto = [
    {
        id: '1',
        nombre: 'buso nike xl',
        descripcion: "buso hombre",
        precio: 3500,
        stock: 20,
        imagen: 'https://i.im.ge/2022/07/28/F9LN60.jpg'
    },
    {
        id: '2',
        nombre: 'buso adidas l',
        descripcion: "buso hombre",
        precio: 3700,
        stock: 13,
        imagen: 'https://i.im.ge/2022/07/28/F9L97f.webp'
    },
    {
        id: '3',
        nombre: 'buso volcom m',
        descripcion: "buso hombre",
        precio: 3100,
        stock: 6,
        imagen: 'https://i.im.ge/2022/07/28/F9LCcG.jpg'
    },
    {
        id: '4',
        nombre: 'buso dcshoes xxl',
        descripcion: "buso hombre",
        precio: 2900,
        stock: 26,
        imagen: 'https://i.im.ge/2022/07/28/F9Lmvr.jpg'
    },
    {
        id: '5',
        nombre: 'buso puma s',
        descripcion: "buso hombre",
        precio: 2500,
        stock: 15,
        imagen: 'https://i.im.ge/2022/07/28/F9LPVT.jpg'
    },
    {
        id: '6',
        nombre: 'buso thrasher l',
        descripcion: "buso hombre",
        precio: 4000,
        stock: 17,
        imagen: 'https://i.im.ge/2022/07/28/F9Lylc.jpg'
    },
    {
        id: '7',
        nombre: 'buso rstst m',
        descripcion: "buso hombre",
        precio: 3000,
        stock: 19,
        imagen: 'https://i.im.ge/2022/07/28/F9LEex.jpg'
    },
    {
        id: '8',
        nombre: 'buso fsdsg xl',
        descripcion: "buso hombre",
        precio: 2600,
        stock: 9,
        imagen: 'https://i.im.ge/2022/07/28/F9LYCJ.jpg'
    },
    {
        id: '9',
        nombre: 'buso asaas xxl',
        descripcion: "buso hombre",
        precio: 4200,
        stock: 22,
        imagen: 'https://i.im.ge/2022/07/28/F9L86z.jpg'
    }
]

export const data = new Promise((resolve, reject)=>{

    let condicion = true

    setTimeout(()=> {
        if (condicion){
            resolve(producto)
        } else {
            reject('salio mal, el producto no se encuentra en stock')
        }
    }, 2000)
})