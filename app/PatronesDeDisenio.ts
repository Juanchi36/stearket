//FACTORY

class Vehiculo {
	acelerar () {}
}
class Moto extends Vehiculo {}

class Auto extends Vehiculo {}

class Bicicleta extends Vehiculo {}

class VehiculoFactory {
	crear (tipo) {
		switch (tipo) {
			case 'auto':
				return new Auto();
			case 'moto':
				return new Moto();
			case 'bicicleta':
				return new Bicicleta();
		}
	}
}

class Ninio {}
class Adolescente {}
class Adulto {}

class HumanoFactory {
	crear (edad) {
		if (edad < 13) {
			return new Ninio();
		} else if (edad < 22) {
			return new Adolescente();
		} else {
			return new Adulto();
		}
	}
}

// let hf = new HumanoFactory();
// let nuevaPersona = hf.crear(17);
// console.log(nuevaPersona);

//FACADES

class Recitales {
	lista () {}
}
class Integrantes {
	lista () {}
}
class Fotos {
	galeria () {}
}
class Instrumentos {
	tipos () {}
}
class Videos {
	galeria () {
		console.log('esto es la galeria');
	}
}

class BandaFacade {
	// instrumentos;
	// fotos;
	// integrantes;
	// recitales;

	constructor (videos) {
		this.videos = new Videos();
		this.instrumentos = new Instrumentos();
		this.fotos = new Fotos();
		this.integrantes = new Integrantes();
		this.recitales = new Recitales();
	}

	galeriaVideos () {
		return this.videos.galeria;
	}
}

const banda = new BandaFacade();
console.log(banda.galeriaVideos());

class Productos {
	listaProductos () {}
}
class Compras {
	listaCompras () {}
}
class Empleados {
	listaEmpleados () {}
}
class SuperMercadoFacades {
	private productos;
	private compras;
	private empleados;

	constructor () {
		this.productos = new Productos();
		this.compras = new Compras();
		this.empleados = new Empleados();
	}
}

// BUILDER

class Empleado {
	private nombre;
	private apellido;
	private dni;
	private edad;
	private nacionalidad;
	private antiguedad;

	constructor (nombre, apellido, edad, dni, nacionalidad, antiguedad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.dni = dni;
		this.nacionalidad = nacionalidad;
		this.antiguedad = antiguedad;
	}
}
const empleado = new Empleado('Juan', 'Perez', 20, 3232323223, 'argentino', 5);
class EmpleadoBuilder {
	nombre = '';
	apellido = '';
	conNombre (nombre) {
		this.nombre = nombre;
	}
	conApellido (apellido) {
		this.apellido = apellido;
	}

	construir () {
		return new Empleado(this.nombre, this.apellido);
	}
}

const empleado2 = new EmpleadoBuilder()
	.conNombre('juan')
	.conApellido('perez')
	.construir();

// ADAPTER

class Time {
	hour () {}
	minut () {}
	second () {}
}

class TimeNew {
	getHour () {}
	getSecond () {}
	getMinute () {}
}

class TimeAdapter {
	time;
	constructor () {
		this.time = new TimeNew();
	}
	hour () {
		return this.getHour();
	}
	minut () {
		return this.getMinute();
	}
	second () {
		return this.getSecond();
	}
}
