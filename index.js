class Vehiculo {
  todos = []

  constructor(array) {
    this.addAutosMotos(array)
  }

  addAutosMotos(array) {
    array.forEach(element => {
      if (element.cilindrada) {
        const moto = new Moto(element)
        this.todos.push(moto)
      } else if (element.puertas) {
        const auto = new Auto(element)
        this.todos.push(auto)
      } else {
        console.log("Error!");
      }
    })
  }

  listarTodos() {
    this.todos.forEach(element => {
      if (element instanceof Auto) {
        console.log(`Marca: ${element.marca} // Modelo: ${element.modelo} // Puertas: ${element.puertas}  // Precio: ${this.priceToString(element.precio)}`);
      } else if (element instanceof Moto) {
        console.log(`Marca: ${element.marca} // Modelo: ${element.modelo} // Cilindrada: ${element.cilindrada}  // Precio: ${this.priceToString(element.precio)}`);
      } else {
        console.log("Error!");
      }
    })
  }

  masCaro() {
    const precio = Math.max.apply(Math, this.todos.map(object => { return object.precio }))
    const vehiculo = this.todos.find(a => a.precio == precio);
    console.log(`Vehículo más caro: ${vehiculo.marca} ${vehiculo.modelo}`);
    return
  }

  masBarato() {
    const precio = Math.min.apply(Math, this.todos.map(object => { return object.precio }))
    const vehiculo = this.todos.find(a => a.precio == precio);
    console.log(`Vehículo más barato: ${vehiculo.marca} ${vehiculo.modelo}`);
    return
  }

  contieneLetra(letra) {
    const vehiculo = this.todos.find(element => element.modelo.includes(letra));
    if (vehiculo) {
      console.log(`Vehículo que contiene en el modelo la letra '${letra}': ${vehiculo.marca} ${vehiculo.modelo} ${this.priceToString(vehiculo.precio)}`);
    } else {
      console.log('Error!');
    }
  }

  precioMayorAMenor() {
    const caroABarato = this.todos.slice().sort((a, b) => {
      if (a.precio < b.precio) {
        return 1;
      } else if (a.precio > b.precio) {
        return -1;
      } else {
        return 0
      }
    })
    console.log('Vehículos ordenados por precio de mayor a menor:');

    caroABarato.forEach(element => {
      console.log(`${element.marca} ${element.modelo}`);
    })
  }

  saltoDeLinea() {
    console.log('=============================');
  }

  priceToString(priceNumber) {
    let price = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(priceNumber);
    price = price.replace(new RegExp('[,]', 'g'), '#');
    price = price.replace('.', ',');
    price = price.replace(new RegExp('[#]', 'g'), '.');
    price = `$${price}`;
    return price;
  }

  printAllData() {
    this.saltoDeLinea()
    this.listarTodos()
    this.saltoDeLinea()
    this.masCaro()
    this.masBarato()
    this.contieneLetra('Y')
    this.saltoDeLinea()
    this.precioMayorAMenor()
  }

}

class Moto {
  constructor(objeto) {
    this.marca = objeto.marca;
    this.modelo = objeto.modelo;
    this.cilindrada = objeto.cilindrada;
    this.precio = objeto.precio;
  }
}

class Auto {
  constructor(objeto) {
    this.marca = objeto.marca;
    this.modelo = objeto.modelo;
    this.puertas = objeto.puertas;
    this.precio = objeto.precio;
  }
}

const array = [
  {
    marca: "Peugeot",
    modelo: "206",
    puertas: 4,
    precio: 200000.00
  },
  {
    marca: "Honda",
    modelo: "Titan",
    cilindrada: "125c",
    precio: 60000.00
  },
  {
    marca: "Peugeot",
    modelo: "208",
    puertas: 5,
    precio: 250000.00
  },
  {
    marca: "Yamaha",
    modelo: "YBR",
    cilindrada: "160c",
    precio: 80500.50
  }
]

const vehiculos = new Vehiculo(array);


vehiculos.printAllData()
vehiculos.listarTodos()