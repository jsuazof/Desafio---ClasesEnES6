import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuesto.js";

const impuestoA = new Impuesto();
impuestoA.montoBrutoAnual = 222222222;
impuestoA.deducciones = 4444;

const clienteA = new Cliente("Cliente-A", impuestoA);
const totalCliente = clienteA.calcularImpuesto();
console.log(totalCliente);
