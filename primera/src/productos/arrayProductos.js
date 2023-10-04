const productos = [
    {
        id: 1,
        stock: 101,
        precio: 4000,
        nombre: "Wayfarer",
        marca: "Ray-Ban",
        descripcion: "Los Wayfarer de Ray-Ban son uno de los modelos de lentes de sol más icónicos y reconocibles en todo el mundo. Se caracterizan por su forma cuadrada y montura de acetato.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      { 
        id: 2,
        stock: 210,
        precio: 4000,
        nombre: "Aviator",
        marca: "Ray-Ban",
        descripcion: "Los lentes Aviator de Ray-Ban fueron diseñados originalmente para los pilotos de la Fuerza Aérea de los Estados Unidos. Tienen un diseño clásico con lentes grandes y forma de gota.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      {
        id: 3,
        stock: 100,
        precio: 4000,
        nombre: "Clubmaster",
        marca: "Ray-Ban",
        descripcion: "Los lentes Clubmaster de Ray-Ban son conocidos por su montura de metal en la parte superior y el acetato en la parte inferior. Tienen un estilo retro y elegante.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      {
        id: 4,
        stock: 502,
        precio: 4000,
        nombre: "Oakley Frogskins",
        marca: "Oakley",
        descripcion: "Los lentes Frogskins de Oakley son populares por su estilo deportivo y su montura retro. Son muy apreciados por los entusiastas del deporte y la moda.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      {
        id: 5,
        stock: 110,
        precio: 4000,
        nombre: "Persol 649",
        marca: "Persol",
        descripcion: "Los lentes Persol 649 son conocidos por su diseño elegante y su emblemático puente en forma de llave. Han sido usados por numerosas celebridades a lo largo de los años.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      {
        id: 6,
        stock: 329,
        precio: 4000,
        nombre: "Ray-Ban Erika",
        marca: "Ray-Ban",
        descripcion: "Los lentes Ray-Ban Erika son famosos por su diseño moderno y femenino. Tienen una montura de nylon y lentes degradados.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      {
        id: 7,
        stock: 450,
        precio: 4000,
        nombre: "Gucci GG0106S",
        marca: "Gucci",
        descripcion: "Estos lentes de Gucci son conocidos por su diseño lujoso y detalles de la marca en las varillas. Son populares entre los amantes de la moda.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      {
        id: 8,
        stock: 320,
        precio: 1500,
        nombre: "Prada Cinema",
        marca: "Prada",
        descripcion: "Los lentes Prada Cinema son famosos por su estilo retro y glamour. Tienen una montura distintiva con forma de lágrima y detalles de metal.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      {
        id: 9,
        stock: 150,
        precio: 2000,
        nombre: "Dior So Real",
        marca: "Dior",
        descripcion: "Los lentes Dior So Real son conocidos por su diseño futurista y detalles metálicos. Han sido usados por numerosas celebridades.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      },
      {
        id: 10,
        stock: 250,
        precio: 3550,
        nombre: "Carrera Champion",
        marca: "Carrera",
        descripcion: "Los lentes Carrera Champion son famosos por su estilo deportivo y su montura de metal resistente. Han sido populares en la cultura urbana.",
        imagen: "https://opticasplaza.com.mx/wp-content/uploads/2023/04/POLAROIDOFT-PLD-2126_S_3U55Z_P02.jpg"
      }
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(productos)
        }, 500)
    })
}

export const getProductosById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(prod => prod.id === productoId))
    }, 600)
  })
}
export const getProductosByCategoria = (productoMarca) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter(prod => prod.marca === productoMarca))
    })
  })
}