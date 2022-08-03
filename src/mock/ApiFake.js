const producto = [
    {
        id: '1',
        nombre: 'buso nike XL',
        descripcion: "buso hombre",
        precio: 3500,
        stock: 20,
        imagen: 'https://i.im.ge/2022/07/28/F9LN60.jpg',
        categoria:'para-hombre'
    },
    {
        id: '2',
        nombre: 'buso adidas L',
        descripcion: "buso hombre",
        precio: 3700,
        stock: 13,
        imagen: 'https://i.im.ge/2022/07/28/F9L97f.webp',
        categoria:'para-hombre'
    },
    {
        id: '3',
        nombre: 'buso volcom M',
        descripcion: "buso hombre",
        precio: 3100,
        stock: 6,
        imagen: 'https://i.im.ge/2022/07/28/F9LCcG.jpg',
        categoria:'para-hombre'
    },
    {
        id: '4',
        nombre: 'buso dcshoes XXL',
        descripcion: "buso hombre",
        precio: 2900,
        stock: 26,
        imagen: 'https://i.im.ge/2022/07/28/F9Lmvr.jpg',
        categoria:'para-hombre'
    },
    {
        id: '5',
        nombre: 'buso puma S',
        descripcion: "buso hombre",
        precio: 2500,
        stock: 15,
        imagen: 'https://i.im.ge/2022/07/28/F9LPVT.jpg',
        categoria:'para-hombre'
    },
    {
        id: '6',
        nombre: 'buso thrasher L',
        descripcion: "buso hombre",
        precio: 4000,
        stock: 17,
        imagen: 'https://i.im.ge/2022/07/28/F9Lylc.jpg' ,
        categoria:'para-hombre'
    },
    {
        id: '7',
        nombre: 'buso rstst M',
        descripcion: "buso hombre",
        precio: 3000,
        stock: 19,
        imagen: 'https://i.im.ge/2022/07/28/F9LEex.jpg',
        categoria:'para-hombre'
    },
    {
        id: '8',
        nombre: 'buso fsdsg XL',
        descripcion: "buso hombre",
        precio: 2600,
        stock: 9,
        imagen: 'https://i.im.ge/2022/07/28/F9LYCJ.jpg',
        categoria:'para-hombre'
    },
    {
        id: '9',
        nombre: 'buso asaas XXL',
        descripcion: "buso hombre",
        precio: 4200,
        stock: 22,
        imagen: 'https://i.im.ge/2022/07/28/F9L86z.jpg',
        categoria:'para-hombre'
    },
    {
        id: '10',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 9,
        imagen: 'https://i.im.ge/2022/08/04/F3TROW.R-2.jpg',
        categoria:'para-mujer'
    },
    {
        id: '11',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 21,
        imagen: 'https://i.im.ge/2022/08/04/F3TVoc.R-1.jpg',
        categoria:'para-mujer'
    },
    {
        id: '12',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 25,
        imagen: 'https://i.im.ge/2022/08/04/F3T41S.520272-16-mod01.jpg',
        categoria:'para-mujer'
    },
    {
        id: '13',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 13,
        imagen: 'https://i.im.ge/2022/08/04/F3ooGX.OIP-3.jpg',
        categoria:'para-mujer'
    },
    {
        id: '14',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 5,
        imagen: 'https://i.im.ge/2022/08/04/F3TGZ6.OIP-4.jpg',
        categoria:'para-mujer'
    },
    {
        id: '15',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 11,
        imagen: 'https://i.im.ge/2022/08/04/F3oMXF.RIMG-0032.jpg',
        categoria:'para-mujer'
    },
    {
        id: '16',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 17,
        imagen: 'https://i.im.ge/2022/08/04/F3oQhK.puma-puma-modern-sports-bluza-rozowy.jpg',
        categoria:'para-mujer'
    },
    {
        id: '17',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 20,
        imagen: 'https://i.im.ge/2022/08/04/F3oIAf.OIP-2.jpg',
        categoria:'para-mujer'
    },
    {
        id: '18',
        nombre: 'buso kakahd M',
        descripcion: "buso mujer",
        precio: 4600,
        stock: 14,
        imagen: 'https://i.im.ge/2022/08/04/F3osbp.Buzo-Polycotton-mujer-azul-2.webp',
        categoria:'para-mujer'
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