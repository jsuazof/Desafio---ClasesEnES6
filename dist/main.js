import { Cliente } from "./clientes.js";
import { Impuesto } from "./impuesto.js";
const impuestoUno = new Impuesto();
impuestoUno.montoBrutoAnual = 222222222;
impuestoUno.deducciones = 4000;
const cliente1 = new Cliente(ClientesUno, impuestoUno);
const resultadoClientes1 = cliente1.calcularImpuesto();
console.log(resultadoCliente1);