/* declaracion devariables*/
/* 1varible;
#variable
Variable12131;
resultado_suma;
resultadosuma;
resultado suma; no se permite espacios */
/* se tienen los datos de un empleado donde se solicita el salario,
y se obtiene adicional como ingreso un 8% mas del salario con denominacion comision,
adicional recibe de auxilio de transaporte el 10% mas del salario, y de comisiones
el 12% de los ingresos.
adicional el empleado tiene unas deduciones mensuale que se muestran a continuacion:
alimentacion se gasta el 12% de los ingresos
servicios publicos el 11% del salrio
estudios se gasta el 20% de los ingresos,
recreacion el 11% de los ingresos
bancos el 30% de los ingresos..
calcular en este el total de ingresos, el total de egresos, el valor disponible pago*/
/* me muestran las deudas*/

var salario = 3500000;
var comision = salario*(0.08);
var auxilio = salario*(0.1);
var ingresos = salario + comision + auxilio;
var comisiones = ingresos*(0.12);
var alimentacion = ingresos*(0.12);
var servicios = salario*(0.11);
var estudios = ingresos*(0.2);
var recreacion = (0.11)*ingresos;
var bancos = ingresos*(0.3);

var egresos = alimentacion+servicios+estudios+recreacion+bancos;
var disponible = ingresos-egresos;
console.log("el salario es " + salario);
