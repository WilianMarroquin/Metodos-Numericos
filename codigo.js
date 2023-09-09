var global;
var arriba = -300;
var alto = 250;
var Esp = 0;
var hei = 30;
var Rosi = 0;
function cargar_pagina() {
  location.reload();
}
function Intervalos_calculados() {
  var valor_funcion = document.getElementById('funcion').value;
  var concatenate = valor_funcion + "R";
  var chain = "R";
  var confirmation = true;
  var one = 0;
  var two = 1;
  var increment = 1;
  var rous = " ";
  var menos = 1;
  var unos = 1;
  var dos = 2;
  var rep = 1;
  //ESTE ALGORITMO ORDENA LAS CANTIDADES PARA SER RESUELTAS//
  while (confirmation == true) {
    var confirm = concatenate.slice(one, two);
    if (confirm.localeCompare(chain)) {
      if (Number.parseInt(confirm) || confirm == "0" || confirm == '.') {
        confirm = document.getElementById("position" + increment).textContent + confirm;
        document.getElementById("position" + increment).innerHTML = confirm;
        document.getElementById("stand" + increment).innerHTML = confirm;
      } else {
        if (confirm == "^") {
        } else {
          increment = increment + 1;
          document.getElementById("stand" + increment).innerHTML = rous;
          document.getElementById("stand" + increment).innerHTML = confirm;
          increment = increment + 1;
        }
      }
    } else {
      confirmation = false;
      document.getElementById("position1").innerHTML = "";
      document.getElementById("position2").innerHTML = "";
      document.getElementById("position3").innerHTML = "";
    }
    one = one + 1;
    two = two + 1;
  }
  //ESTE ALGORITMO RESUELVE LA FUNCION CON EL VALOR DE X//
  var equis = parseFloat(document.getElementById('negativo').value);
  var positivo = parseFloat(document.getElementById('positivo').value);
  var sucecion = 1;
  positivo = positivo + 1;
  var valor_actual;
  var valor_anterior;
  var equis_actual;
  var equis_anterior;
  var ones = 1;
  var contador = 1;
  while (equis < positivo) {
    var resultado;
    //se ontiene el valor de los numeros//
    var num1 = parseFloat(document.getElementById("stand1").textContent);
    var num2 = parseFloat(document.getElementById("stand5").textContent);
    var num3 = parseFloat(document.getElementById("stand9").textContent);

    //se obtiene el valor de las potencias//
    var potencia1 = parseInt(document.getElementById("stand3").textContent);
    var potencia2 = parseInt(document.getElementById("stand7").textContent);
    var potencia3 = parseInt(document.getElementById("stand11").textContent);
    //se obtiene el caracter de los signos//
    var signo1 = document.getElementById("stand4").textContent;
    var signo2 = document.getElementById("stand8").textContent;
    var signo3 = document.getElementById("stand12").textContent;
    var condi1 = "+", condi2 = "-";
    //RESUELVE EL PRIMER DIJITO//
    if (!signo1.localeCompare(condi1)) {
      var dijito1 = num1 * Math.pow(equis, potencia1);
      if (document.getElementById("stand6").textContent == "V") {
        dijito2 = num2;
      } else {
        var dijito2 = num2 * Math.pow(equis, potencia2);
      }
      var resultado = dijito1 + dijito2;
      //RESUELVE EL SEGUNDO DIJITO Y LO SUMA O RESTA SEGUN EL NUMERO//
    } else if (!signo1.localeCompare(condi2)) {
      var dijito1 = num1 * Math.pow(equis, potencia1);
      if (document.getElementById("stand6").textContent == "V") {
        dijito2 = num2;
      } else {
        var dijito2 = num2 * Math.pow(equis, potencia2);
      }
      var resultado = dijito1 - dijito2;
    }
    if (!signo2.localeCompare(condi1)) {
      if (document.getElementById("stand10").textContent == "V") {
        var dijito3 = num3;
      } else {
        var dijito3 = num3 * Math.pow(equis, potencia3);
      }
      resultado = resultado + dijito3;
    } else if (!signo2.localeCompare(condi2)) {
      if (document.getElementById("stand10").textContent == "V") {
        var dijito3 = num3;

      } else {
        var dijito3 = num3 * Math.pow(equis, potencia3);
      }
      resultado = resultado - num3;
    }
    if (global == 5) {
      document.getElementById('negativo' + contador).innerHTML = resultado;
    }
    console.log("el valor de x actual es" + equis + "y su resultado es " + resultado);

    var cont = resultado.toString();
    var cont1 = cont.slice(0, 7);

    valor_actual = cont1;
    var rosado = equis_actual - 1;

    if (sucecion > 1) {
      var Repo = document.getElementById('prueba' + rep);
      Repo.style.display = "block";
      if (valor_actual >= 0 & valor_anterior < 0) {
        document.getElementById('number' + ones).innerHTML = equis - 1;
        document.getElementById('valo' + ones).innerHTML = valor_anterior;
        ones = ones + 1;
        document.getElementById('number' + ones).innerHTML = equis;
        document.getElementById('valo' + ones).innerHTML = valor_actual
        ones = ones + 1;
        rep = rep + 1;
      }
      else if (valor_actual < 0 & valor_anterior > 0) {
        document.getElementById('number' + ones).innerHTML = equis
        document.getElementById('valo' + ones).innerHTML = valor_actual
        ones = ones + 1;
        document.getElementById('number' + ones).innerHTML = equis - 1;
        document.getElementById('valo' + ones).innerHTML = valor_anterior;
        ones = ones + 1;
        rep = rep + 1;
      } else if (valor_anterior == 0 & valor_actual < 0) {
        document.getElementById('number' + ones).innerHTML = equis - 1;
        document.getElementById('valo' + ones).innerHTML = valor_anterior;
        ones = ones + 1;
        document.getElementById('number' + ones).innerHTML = equis
        document.getElementById('valo' + ones).innerHTML = valor_actual
        ones = ones + 1;
        rep = rep + 1;
      }
      var Repo = document.getElementById('prueba' + rep);
      Repo.style.display = "none";
    }
    valor_actual = cont1;
    valor_anterior = cont1;
    sucecion = sucecion + 1;
    equis = equis + 1;
    equis_actual = equis;
    equis_anterior = equis;
    contador = contador + 1;
  }
}
function mostrar() {
  var x = document.getElementById("elemento");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}
function calculo_intervalos() {
  var pagina_intervalos = document.getElementById('calculados');
  pagina_intervalos.style.display = "block";
  var formulario = document.getElementById('formulario');
  formulario.style.display = "none";
  Intervalos_calculados();

}
function cuadroHeigth() {
  while (Esp < 14) {
    var rouse = 0;
    while (rouse < 16) {
      var iam = document.getElementById('Ident' + Esp + '_' + rouse);
      iam.style.display = "none";
      rouse = rouse + 1;
    }
    Esp = Esp + 1;
  }
}
function cuadro2Heigth() {
  while (Rosi < 14) {
    var rouse = 0;
    while (rouse < 7) {
      var iam = document.getElementById('Rosibel' + Rosi + '_' + rouse);
      iam.style.display = "none";
      rouse = rouse + 1;
    }
    Rosi = Rosi + 1;
  }
}
function cuadro3Heigth() {
  while (Rosi < 14) {
    var rouse = 0;
    while (rouse < 7) {
      var iam = document.getElementById('Jeny' + Rosi + '_' + rouse);
      iam.style.display = "none";
      rouse = rouse + 1;
    }
    Rosi = Rosi + 1;
  }
}
function cuadro4Heigth() {
  while (Rosi < 14) {
    var rouse = 0;
    while (rouse < 7) {
      var iam = document.getElementById('Paz' + Rosi + '_' + rouse);
      iam.style.display = "none";
      rouse = rouse + 1;
    }
    Rosi = Rosi + 1;
  }
}
function entrada_Biseccion() {
  global = 1;
  var main = document.getElementById('opciones');
  main.style.display = "none";
  var formulario = document.getElementById('formulario');
  formulario.style.display = "block";
  var logo = document.getElementById('logo');
  logo.style.display = "block";
  var movi = document.getElementById('movil');
  movi.style.display = "none"

  var x = document.getElementById('boton_1'); x.style.display = "block";
  var x1 = document.getElementById('boton_2'); x1.style.display = "none";
  var x2 = document.getElementById('boton_3'); x2.style.display = "none";
  var x3 = document.getElementById('boton_4'); x3.style.display = "none";
  var x4 = document.getElementById("boton_miller"); x4.style.display = "none";
  var x5 = document.getElementById('boton_inter_newton'); x5.style.display = "none"
  var x6 = document.getElementById('boton_inter_nose'); x6.style.display = "none";
}
function entrada_regla_falsa() {
  global = 2;
  var movi = document.getElementById('movil');
  movi.style.display = "none"
  var x = document.getElementById('boton_1'); x.style.display = "block";
  var x1 = document.getElementById('boton_2'); x1.style.display = "none";
  var x2 = document.getElementById('boton_3'); x2.style.display = "none";
  var x3 = document.getElementById('boton_4'); x3.style.display = "none";
  var x4 = document.getElementById("boton_miller"); x4.style.display = "none";
  var x5 = document.getElementById('boton_inter_newton'); x5.style.display = "none"
  var x6 = document.getElementById('boton_inter_nose'); x6.style.display = "none";
  var formulario = document.getElementById('formulario');
  formulario.style.display = "block";
  var main = document.getElementById('opciones');
  main.style.display = "none";
  var logo = document.getElementById('logo');
  logo.style.display = "block";
}
function Entrada_Newton() {
  global = 3;
  var formulario = document.getElementById('formulario');
  formulario.style.display = "block";
  var opciones = document.getElementById('opciones');
  opciones.style.display = "none";
  var logo = document.getElementById('logo');
  logo.style.display = "block";
  var movi = document.getElementById('movil');
  movi.style.display = "none"
  //SE ACOMODA LA TABLA Y LOS DATOS//
  var x = document.getElementById('posision6');
  x.style.display = "none";
  var x = document.getElementById('posision7');
  x.style.display = "none";
  var encabezado = document.getElementById('encabezado1');
  encabezado.style.display = "none";
  var encabezado1 = document.getElementById("encabezado2");
  encabezado1.style.display = "none";
  var newe = document.getElementById('newton');
  newe.style.display = "none";
  document.getElementById('e-1').innerHTML = "xi";
  document.getElementById('e-2').innerHTML = "F(xi)";
  document.getElementById('e-3').innerHTML = "F'(xi)";
  document.getElementById('e-4').innerHTML = "x1+1";
  document.getElementById('e-5').innerHTML = "T"
  document.getElementById('label1').innerHTML = "Valor Inicial Ej:(0.75)"
  document.getElementById('intervalo').value = "";
  document.getElementById('funcion').value = "";
  document.getElementById('Limite').value = "";
  var x = document.getElementById('boton_1'); x.style.display = "none";
  var x1 = document.getElementById('boton_2'); x1.style.display = "block";
  var x2 = document.getElementById('boton_3'); x2.style.display = "none";
  var x3 = document.getElementById('boton_4'); x3.style.display = "none";
  var x4 = document.getElementById("boton_miller"); x4.style.display = "none";
  var x5 = document.getElementById('boton_inter_newton'); x5.style.display = "none"
  var x6 = document.getElementById('boton_inter_nose'); x6.style.display = "none";
}
function Entrada_Secante() {
  global = 4;
  var main = document.getElementById('opciones');
  main.style.display = "none";
  var formulario = document.getElementById('formulario');
  formulario.style.display = "block";
  var logo = document.getElementById('logo');
  logo.style.display = "block";
  var movi = document.getElementById('movil');
  movi.style.display = "none";
  document.getElementById('label1').innerHTML = "Xo, Xi  Ej:(1,2)";
  var ne = document.getElementById('newton');
  ne.style.display = "none";
  var x = document.getElementById('posision7');
  x.style.display = "none";
  var z = document.getElementById('encabezado2');
  z.style.display = "none";
  document.getElementById('e-1').innerHTML = "xi-1";
  document.getElementById('e-2').innerHTML = "xi";
  document.getElementById('e-3').innerHTML = "F(x-1)";
  document.getElementById('e-4').innerHTML = "F(xi)";
  document.getElementById('e-5').innerHTML = "X1+1";
  document.getElementById('e-6').innerHTML = "T";
  var x = document.getElementById('boton_1'); x.style.display = "block";
  var x1 = document.getElementById('boton_2'); x1.style.display = "none";
  var x2 = document.getElementById('boton_3'); x2.style.display = "none";
  var x3 = document.getElementById('boton_4'); x3.style.display = "none";
  var x4 = document.getElementById("boton_miller"); x4.style.display = "none";
  var x5 = document.getElementById('boton_inter_newton'); x5.style.display = "none"
  var x6 = document.getElementById('boton_inter_nose'); x6.style.display = "none";
}
function Entrada_newmejorado() {
  var formulario = document.getElementById('formulario');
  formulario.style.display = "block";
  var opciones = document.getElementById('opciones');
  opciones.style.display = "none";
  var logo = document.getElementById('logo');
  logo.style.display = "block";
  var x6 = document.getElementById('boton_inter_nose'); x6.style.display = "none";
  global = 5;
  var resultados = document.getElementById('resultados'); 
  resultados.style.width="530px"; 
  var je = document.getElementById('posision7');
  je.style.display = "none";
  var ros = document.getElementById('encabezado2');
  ros.style.display = "none";
  var newton = document.getElementById('newton');
  newton.style.display = "none";
  var ocu = document.getElementById("ocultar_form");
  ocu.style.display = "none";
  var movi = document.getElementById('movil');
  movi.style.display = " none";
  document.getElementById('e-1').innerHTML = "xi";
  document.getElementById('e-2').innerHTML = "F(xi)";
  document.getElementById('e-3').innerHTML = "F'(xi)";
  document.getElementById('e-4').innerHTML = "F''(xi)";
  document.getElementById('e-5').innerHTML = "x1+1";
  document.getElementById('e-6').innerHTML = "T";
  var x = document.getElementById('boton_1'); x.style.display = "none";
  var x1 = document.getElementById('boton_2'); x1.style.display = "none";
  var x2 = document.getElementById('boton_3'); x2.style.display = "none";
  var x3 = document.getElementById('boton_4'); x3.style.display = "block";
  var x4 = document.getElementById("boton_miller"); x4.style.display = "none";
  var x5 = document.getElementById('boton_inter_newton'); x5.style.display = "none"
}
function Entrada_Miller() {
  var newton = document.getElementById('newton');
  newton.style.display = 'none';
  var formulario = document.getElementById('formulario');
  formulario.style.display = "block";
  var opciones = document.getElementById('opciones');
  opciones.style.display = "none";
  var logo = document.getElementById('logo');
  logo.style.display = "block"
  var movi = document.getElementById('movil');
  movi.style.display = "none"
  document.getElementById('label1').innerHTML = "X0 Xi X2 Ej:(4.5,5.5,5)"
  var x = document.getElementById('boton_1'); x.style.display = "none";
  var x1 = document.getElementById('boton_2'); x1.style.display = "none";
  var x2 = document.getElementById('boton_3'); x2.style.display = "none";
  var x3 = document.getElementById('boton_4'); x3.style.display = "none";
  var x4 = document.getElementById('boton_miller'); x4.style.display = "block";
  var x5 = document.getElementById('boton_inter_newton'); x5.style.display = "none"
  var x6 = document.getElementById('boton_inter_nose'); x6.style.display = "none";
  document.getElementById('e-1').innerHTML = "Xo";
  document.getElementById('e-2').innerHTML = "Xi";
  document.getElementById('e-3').innerHTML = "X2";
  document.getElementById('e-4').innerHTML = "F(Xo)";
  document.getElementById('e-5').innerHTML = "F(Xi)";
  document.getElementById('e-6').innerHTML = "F(X2)";
  document.getElementById('e-7').innerHTML = "ho";
  document.getElementById('e-8').innerHTML = "h1";
  document.getElementById('e-9').innerHTML = "So";
  document.getElementById('e-10').innerHTML = "S1";
  document.getElementById('e-11').innerHTML = "a";
  document.getElementById('e-12').innerHTML = "b";
  document.getElementById('e-13').innerHTML = "c";
  document.getElementById('e-14').innerHTML = "X3";
  document.getElementById('e-15').innerHTML = "E";
  var i = 1;
  var o = 8;
  while (i < 9) {
    var encabezado = document.getElementById('encabezadoMiller' + i);
    encabezado.style.display = "flex";
    var parteBaja = document.getElementById('posision' + o);
    parteBaja.style.display = "block";
    i = i + 1;
    o = o + 1;
  }
}
function Entrada_Interpolacion() {
  var presentacion = document.getElementById('opciones');
  presentacion.style.display = "none";
  var inter = document.getElementById("Entrada_Interpolacion");
  inter.style.display = "block";
  var logo = document.getElementById('logo');
  logo.style.display = "block";
}
function Entrada_Interpolacion_Newton() {
  global = 6;
  var inter = document.getElementById("Entrada_Interpolacion");
  inter.style.display = "none";
  var movi = document.getElementById('movil');
  movi.style.display = "none";
  var logo = document.getElementById('logo');
  logo.style.display = "block"
  var formulario = document.getElementById('formulario');
  formulario.style.display = "block";

  var x6 = document.getElementById('boton_inter_nose'); x6.style.display = "none";
  var x = document.getElementById('boton_1'); x.style.display = "none";
  var x1 = document.getElementById('boton_2'); x1.style.display = "none";
  var x2 = document.getElementById('boton_3'); x2.style.display = "none";
  var x3 = document.getElementById('boton_4'); x3.style.display = "none";
  var x4 = document.getElementById("boton_miller"); x4.style.display = "none";
  var x5 = document.getElementById('boton_inter_newton'); x5.style.display = "block";
  var inn = document.getElementById('newton'); inn.style.display = "none";
  document.getElementById('valor_funci').innerHTML = "Valores en X";
  document.getElementById('label1').innerHTML = "Valores en Y";
  document.getElementById('objetivo').innerHTML = "Objetivo En Y";
}
function Entrada_Lagranje() {
  global = 7;
  var inter = document.getElementById("Entrada_Interpolacion");
  inter.style.display = "none";
  var formulario = document.getElementById('formulario');
  formulario.style.display = "block"
  var movi = document.getElementById('movil');
  movi.style.display = "none";
  var logo = document.getElementById('logo');
  logo.style.display = "block"
  var x = document.getElementById('boton_1'); x.style.display = "none";
  var x1 = document.getElementById('boton_2'); x1.style.display = "none";
  var x2 = document.getElementById('boton_3'); x2.style.display = "none";
  var x3 = document.getElementById('boton_4'); x3.style.display = "none";
  var x4 = document.getElementById("boton_miller"); x4.style.display = "none";
  var x5 = document.getElementById('boton_inter_newton'); x5.style.display = "block";
  var inn = document.getElementById('newton'); inn.style.display = "none";
  document.getElementById('valor_funci').innerHTML = "Valores en X";
  document.getElementById('label1').innerHTML = "Valores en Y";
  document.getElementById('objetivo').innerHTML = "Objetivo En Y";
  var x6 = document.getElementById('boton_inter_nose'); x6.style.display = "none";
}
function resolver() {
  var resultados = document.getElementById('resultados');
  resultados.style.display = "block";
  var formulario = document.getElementById('formulario');
  formulario.style.display = "none";
  var botones = document.getElementById('botones');
  botones.style.display = "block";
  var valor_funcion = document.getElementById('funcion').value;
  var concatenate = valor_funcion + "R";
  var chain = "R";
  var confirmation = true;
  var one = 0;
  var two = 1;
  var increment = 1;
  var rous = " ";
  var menos = 1;
  var unos = 1;
  var dos = 2;
  //ESTE ALGORITMO ORDENA LAS CANTIDADES PARA SER RESUELTAS//
  while (confirmation == true) {
    var confirm = concatenate.slice(one, two);
    if (confirm.localeCompare(chain)) {
      if (Number.parseInt(confirm) || confirm == "0" || confirm == '.') {
        confirm = document.getElementById("position" + increment).textContent + confirm;
        document.getElementById("position" + increment).innerHTML = confirm;
        document.getElementById("stand" + increment).innerHTML = confirm;
      } else {
        if (confirm == "^") {
        } else {
          increment = increment + 1;
          document.getElementById("stand" + increment).innerHTML = rous;
          document.getElementById("stand" + increment).innerHTML = confirm;
          increment = increment + 1;
        }
      }
    } else {
      confirmation = false;
      document.getElementById("position1").innerHTML = "";
      document.getElementById("position2").innerHTML = "";
      document.getElementById("position3").innerHTML = "";
    }
    one = one + 1;
    two = two + 1;
  }
  var res = document.getElementById('intervalo').value;
  if (!res.slice(0, 1).localeCompare("-")) {
    var intervalo1 = res.slice(0, 2);
    document.getElementById("Intervalo1_" + 1).innerHTML = intervalo1;

    if (!res.slice(3, 4).localeCompare("-")) {
      var intervalo2 = res.slice(3, 5);
      document.getElementById("Intervalo1_" + 2).innerHTML = intervalo2;
    }
    else {
      var intervalo2 = res.slice(3, 4);
      document.getElementById("Intervalo1_" + 2).innerHTML = intervalo2;
    }
  } else {
    var intervalo1 = res.slice(0, 1);
    document.getElementById("Intervalo1_" + 1).innerHTML = intervalo1;
    var res = document.getElementById('intervalo').value;
    if (!res.slice(2, 3).localeCompare("-")) {
      var intervalo2 = res.slice(2, 4);
      document.getElementById("Intervalo1_" + 2).innerHTML = intervalo2;
    }
    else {
      var intervalo2 = res.slice(2, 3);
      document.getElementById("Intervalo1_" + 2).innerHTML = intervalo2;
    }
  }
  var confirm1 = parseFloat(document.getElementById('Limite').value);
  var tolerancia = 1;
  var confirm = parseFloat(document.getElementById('Limite').value);
  var prueba = 1;
  var unidad = 1;
  var Tolerancia_total = 1;
  var mostrar_tabla = 1;
  while (confirm < Tolerancia_total) {
    var i = 1;
    var aumento = 3;
    //ESTE ALGORITMO RESUELVE LA FUNCION CON EL VALOR DE X//
    while (i < 3) {
      var equis = document.getElementById('Intervalo' + unidad + '_' + i).textContent;
      var resultado;
      //se ontiene el valor de los numeros//
      var num1 = parseFloat(document.getElementById("stand1").textContent);
      var num2 = parseFloat(document.getElementById("stand5").textContent);
      var num3 = parseFloat(document.getElementById("stand9").textContent);
      var num4 = parseFloat(document.getElementById("stand13").textContent);
      var num5 = parseFloat(document.getElementById("stand17").textContent);
      var num6 = parseFloat(document.getElementById("stand21").textContent);
      //se obtiene el valor de las potencias//
      var potencia1 = parseInt(document.getElementById("stand3").textContent);
      var potencia2 = parseInt(document.getElementById("stand7").textContent);
      var potencia3 = parseInt(document.getElementById("stand11").textContent);
      var potencia4 = parseFloat(document.getElementById("stand15").textContent);
      var potencia5 = parseFloat(document.getElementById("stand19").textContent);
      var potencia6 = parseFloat(document.getElementById("stand23").textContent);
      //se obtiene el caracter de los signos//
      var signo1 = document.getElementById("stand4").textContent;
      var signo2 = document.getElementById("stand8").textContent;
      var signo3 = document.getElementById("stand12").textContent;
      var signo4 = document.getElementById('stand16').textContent;
      var signo5 = document.getElementById('stand20').textContent;
      var condi1 = "+", condi2 = "-";
      //RESUELVE EL PRIMER DIJITO//
      if (!signo1.localeCompare(condi1)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V") {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 + dijito2;
        //RESUELVE EL SEGUNDO DIJITO Y LO SUMA O RESTA SEGUN EL NUMERO//
      } else if (!signo1.localeCompare(condi2)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V") {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 - dijito2;
      }
      if (!signo2.localeCompare(condi1)) {
        if (document.getElementById("stand10").textContent == "V") {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado + dijito3;
      } else if (!signo2.localeCompare(condi2)) {
        if (document.getElementById("stand10").textContent == "V") {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado - num3;
      }
      if (!signo3.localeCompare(condi1)) {
        if (document.getElementById('stand14').textContent == "V") {
          var dijito4 = num4;
        } else {
          var dijito4 = num4 * Math.pow(equis, potencia4);
        }
        resultado = resultado + dijito4;
      } else if (!signo3.localeCompare(condi2)) {
        if (document.getElementById('stand14').textContent == "V") {
          var dijito4 = num4;
        } else {
          var dijito4 = num4 * Math.pow(equis, potencia4);
        }
        resultado = resultado - dijito4;
      }
      if (!signo4.localeCompare(condi1)) {
        if (document.getElementById('stand18').textContent == "V") {
          var dijito5 = num5;
        } else {
          var dijito5 = num5 * Math.pow(equis, potencia5);
        }
        resultado = resultado + dijito5;
      } else if (!signo4.localeCompare(condi2)) {
        if (document.getElementById('stand18').textContent == "V") {
          var dijito5 = num5;
        } else {
          var dijito5 = num5 * Math.pow(equis, potencia5);
        }
        resultado = resultado - dijito5;
      }

      if (!signo5.localeCompare(condi1)) {
        if (document.getElementById('stand22').textContent == "V") {
          var dijito6 = num6;
        } else {
          var dijito6 = num6 * Math.pow(equis, potencia6);
        }
        resultado = resultado + dijito6;
      } else if (!signo5.localeCompare(condi2)) {
        if (document.getElementById('stand22').textContent == "V") {
          var dijito6 = num6;
        } else {
          var dijito6 = num6 * Math.pow(equis, potencia6);
        }
        resultado = resultado - dijito6;
      }
      var cont = resultado.toString();
      var cont1 = cont.slice(0, 7);
      document.getElementById('Intervalo' + unidad + '_' + aumento).innerHTML = cont1;
      i = i + 1;
      aumento = aumento + 1;
      one = one + 2;
      two = two + 2;
    }
    var i = 1;
    var o = 5;
    var num1 = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 1).textContent);
    var num2 = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 2).textContent);
    var funcionA = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 3).textContent);
    var funcionB = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 4).textContent);
    var veriFormula = global;
    if (global == 1) {
      var resu = (num1 + num2) / 2;
    } else if (global == 2) {
      resu = (((num1) * (funcionB)) - ((num2) * (funcionA))) / ((funcionB) - (funcionA));
    } else if (global == 4) {
      resu = num2 - (funcionB * (num1 - num2) / (funcionA - funcionB))
    }
    var cont = resu.toString();
    var cont2 = cont.slice(0, 7);
    document.getElementById('Intervalo' + unidad + '_' + 5).innerHTML = cont2;
    var equis = document.getElementById('Intervalo' + unidad + '_' + 5).textContent;
    var condi1 = "+", condi2 = "-";
    var resultado;
    if (global == 1 || global == 2) {
      //se ontiene el valor de los numeros//
      var num1 = parseInt(document.getElementById("stand1").textContent);
      var num2 = parseInt(document.getElementById("stand5").textContent);
      var num3 = parseInt(document.getElementById("stand9").textContent);
      //se obtiene el valor de las potencias//
      var potencia1 = parseInt(document.getElementById("stand3").textContent);
      var potencia2 = parseInt(document.getElementById("stand7").textContent);
      var potencia3 = parseInt(document.getElementById("stand11").textContent);
      //se obtiene el caracter de los signos//
      var signo1 = document.getElementById("stand4").textContent;
      var signo2 = document.getElementById("stand8").textContent;
      var signo3 = document.getElementById("stand12").textContent;
      var condi1 = "+", condi2 = "-";
      //RESUELVE EL PRIMER DIJITO//
      if (!signo1.localeCompare(condi1)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);

        if (document.getElementById("stand6").textContent == "V") {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 + dijito2;
        //RESUELVE EL SEGUNDO DIJITO Y LO SUMA O RESTA SEGUN EL NUMERO//
      } else if (!signo1.localeCompare(condi2)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V") {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 - dijito2;
      }
      if (!signo2.localeCompare(condi1)) {
        if (document.getElementById("stand10").textContent == "V") {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado + dijito3;
      } else if (!signo2.localeCompare(condi2)) {
        if (document.getElementById("stand10").textContent == "V") {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado - num3;
      }
      var cont = resultado.toString();
      var cont1 = cont.slice(0, 6);
      document.getElementById('Intervalo' + unidad + '_' + 6).innerHTML = cont1;
    }
    var intervalo1 = document.getElementById('Intervalo' + unidad + '_' + 1);
    var invervalo2 = document.getElementById('Intervalo' + unidad + '_' + 2);
    var Fa;
    var Fb;
    var mas = 2
    //ACA SE CALCULA LA TOLERANCIA//
    if (unidad >= 2) {
      var xr1 = parseFloat(document.getElementById('Intervalo' + unos + '_' + 5).textContent);
      var xr2 = parseFloat(document.getElementById('Intervalo' + dos + '_' + 5).textContent);
      tolerancia = 0;
      tolerancia = xr2 - xr1;
      if (tolerancia < 0) {
        tolerancia = xr1 - xr2;
      }
      var cont = tolerancia.toString();
      var cont1 = cont.slice(0, 7);
      if (global == 1 || global == 2) {
        document.getElementById('Intervalo' + unidad + '_' + 7).innerHTML = cont1;
      }
      else if (global == 4) {
        document.getElementById('Intervalo' + unidad + '_' + 6).innerHTML = cont1;
      }
      unos = unos + 1;
      dos = dos + 1;
      Tolerancia_total = tolerancia;
    }
    unidad = unidad + 1;
    // Este algorito verifica en donde se podiciona la  recurrencia en la siguiente iteraccion//
    if (global == 1 || global == 2) {
      if (resultado > 0) {
        if (fa = document.getElementById('Intervalo' + menos + '_' + 3).textContent >= 0) {
          document.getElementById('Intervalo' + unidad + '_' + 1).innerHTML = cont2;
          document.getElementById('Intervalo' + unidad + '_' + 2).innerHTML = document.getElementById('Intervalo' + menos + '_' + 2).textContent;
          console.log("entra en el primer")
        } else {
          document.getElementById('Intervalo' + unidad + '_' + 2).innerHTML = cont2;
          document.getElementById('Intervalo' + unidad + '_' + 1).innerHTML = document.getElementById('Intervalo' + menos + '_' + 1).textContent;
          console.log(document.getElementById('Intervalo' + menos + '_' + 1).textContent);
        }
      } else if (resultado < 0) {
        if (fa = document.getElementById('Intervalo' + menos + '_' + 3).textContent <= 0) {
          document.getElementById('Intervalo' + unidad + '_' + 1).innerHTML = cont2;
          document.getElementById('Intervalo' + unidad + '_' + 2).innerHTML = document.getElementById('Intervalo' + menos + '_' + 2).textContent;
        } else {
          document.getElementById('Intervalo' + unidad + '_' + 2).innerHTML = cont2;
          document.getElementById('Intervalo' + unidad + '_' + 1).innerHTML = document.getElementById('Intervalo' + menos + '_' + 1).textContent;
          console.log(fa);
        }
      }
      var funcionA = document.getElementById('Intervalo' + menos + '_' + 3).textContent;
      var funcionB = document.getElementById('Intervalo' + menos + '_' + 4).textContent;
      if (funcionA >= 0 & funcionB >= 0 || funcionA < 0 & funcionB < 0) {
        alert("No se puede resolver, las funciones tienen signos iguales")
        Tolerancia_total = 0.0001;
      }
    } else if (global == 4) {
      document.getElementById('Intervalo' + unidad + '_' + 1).innerHTML = document.getElementById('Intervalo' + menos + '_' + 2).textContent;
      document.getElementById('Intervalo' + unidad + '_' + 2).innerHTML = cont2;
    }
    menos = menos + 1;
    mas = mas + 1;
    prueba = prueba + 1;
  }
  Esp = unidad;
  var roe = true;
  var este = 0;
  while (roe == true) {
    if (este == unidad) {
      cuadroHeigth()
      roe = false;
    }
    este = este + 1;
  }
  var rosibel = 1;
  while (rosibel < unidad) {
    hei = hei + 25;
    rosibel = rosibel + 1;
  }
  var limi = document.getElementById('resultados');
  limi.style.height = hei + "px";
  limi.style.marginTop = "100px"

}
function Resolver_newton() {
  var formulario = document.getElementById('formulario');
  formulario.style.display = "none";
  var tabla = document.getElementById('resultados');
  tabla.style.display = "block";
  var botones = document.getElementById('botones');
  botones.style.display = "block";
  var valor_funcion = document.getElementById('funcion').value;
  var concatenate = valor_funcion + "R";
  var chain = "R";
  var confirmation = true;
  var one = 0;
  var two = 1;
  var increment = 1;
  var rous = " ";
  var menos = 1;
  var unos = 1;
  var dos = 2;
  //ESTE ALGORITMO ORDENA LAS CANTIDADES PARA SER RESUELTAS//
  while (confirmation == true) {
    var confirm = concatenate.slice(one, two);
    if (confirm.localeCompare(chain)) {
      if (Number.parseInt(confirm) || confirm == "0") {
        confirm = document.getElementById("position" + increment).textContent + confirm;
        document.getElementById("position" + increment).innerHTML = confirm;
        document.getElementById("stand" + increment).innerHTML = confirm;
      } else {
        if (confirm == "^") {
        } else {
          increment = increment + 1;
          document.getElementById("stand" + increment).innerHTML = rous;
          document.getElementById("stand" + increment).innerHTML = confirm;
          increment = increment + 1;
        }
      }
    } else {
      confirmation = false;
      document.getElementById("position1").innerHTML = "";
      document.getElementById("position2").innerHTML = "";
      document.getElementById("position3").innerHTML = "";
    }
    one = one + 1;
    two = two + 1;
  }
  var tolerancia = 1;
  var confirm1 = parseFloat(document.getElementById('Limite').value);
  var equis = parseFloat(document.getElementById('intervalo').value)
  document.getElementById('Intervalo1_1').innerHTML = equis;
  var unidad = 1;
  var complemetnto = 0;
  var aumento = 1;
  var Tolerancia = 1;
  var mostrar_tabla = 1;
  while (confirm1 < Tolerancia) {
    var resultado;
    //se ontiene el valor de los numeros//
    var num1 = parseFloat(document.getElementById("stand1").textContent);
    var num2 = parseFloat(document.getElementById("stand5").textContent);
    var num3 = parseFloat(document.getElementById("stand9").textContent);
    //se obtiene el valor de las potencias//
    var potencia1 = parseInt(document.getElementById("stand3").textContent);
    var potencia2 = parseInt(document.getElementById("stand7").textContent);
    var potencia3 = parseInt(document.getElementById("stand11").textContent);
    //se obtiene el caracter de los signos//
    var signo1 = document.getElementById("stand4").textContent;
    var signo2 = document.getElementById("stand8").textContent;
    var signo3 = document.getElementById("stand12").textContent;
    var condi1 = "+", condi2 = "-";
    //RESUELVE EL PRIMER DIJITO//
    if (!signo1.localeCompare(condi1)) {
      var dijito1 = num1 * Math.pow(equis, potencia1);
      if (document.getElementById("stand6").textContent == "V") {
        dijito2 = num2;
      } else {
        var dijito2 = num2 * Math.pow(equis, potencia2);
      }
      var resultado = dijito1 + dijito2;
      //RESUELVE EL SEGUNDO DIJITO Y LO SUMA O RESTA SEGUN EL NUMERO//
    } else if (!signo1.localeCompare(condi2)) {
      var dijito1 = num1 * Math.pow(equis, potencia1);
      if (document.getElementById("stand6").textContent == "V") {
        dijito2 = num2;
      } else {
        var dijito2 = num2 * Math.pow(equis, potencia2);
      }
      var resultado = dijito1 - dijito2;
    }
    if (!signo2.localeCompare(condi1)) {
      if (document.getElementById("stand10").textContent == "V") {
        var dijito3 = num3;
      } else {
        var dijito3 = num3 * Math.pow(equis, potencia3);
      }
      resultado = resultado + dijito3;
    } else if (!signo2.localeCompare(condi2)) {
      if (document.getElementById("stand10").textContent == "V") {
        var dijito3 = num3;
      } else {
        var dijito3 = num3 * Math.pow(equis, potencia3);
      }
      resultado = resultado - num3;
    }
    //SE DERIVA LA FUNCION PARA SER RESUELTA//
    var cont = resultado.toString();
    var cont1 = cont.slice(0, 7);
    document.getElementById('Intervalo' + unidad + '_' + 2).innerHTML = cont1;
    aumento = aumento + 1;
    if (!signo1.localeCompare(condi1) || !signo1.localeCompare(condi2)) {
      var num1 = num1 * potencia1;
      var potencia1 = potencia1 - 1;
      if (potencia2 > 0) {
        var num2 = num2 * potencia2;
        var potencia2 = potencia2 - 1;
        console.log("el valor del num2 es = " + num2)
        console.log("el valor de la potencia es = " + potencia2)
      } else {
      }
    }
    if (!signo2.localeCompare(condi1) || !signo2.localeCompare(condi2)) {
      if (potencia3 == 1) {
        num3 = 0;
        potencia3 = 0;
      }
      else {
        var num3 = num1 * potencia3;
        var potencia3 = potencia3 - 1;
      }
    }
    //RESUELVE EL PRIMER DIJITO//
    if (!signo1.localeCompare(condi1)) {
      var dijito1 = num1 * Math.pow(equis, potencia1);
      if (document.getElementById("stand6").textContent == "V" || potencia2 == 0) {
        dijito2 = num2;
      } else {
        var dijito2 = num2 * Math.pow(equis, potencia2);
      }
      var resultado = dijito1 + dijito2;
      console.log(dijito1)
      console.log(dijito2)
      console.log(resultado)
      //RESUELVE EL SEGUNDO DIJITO Y LO SUMA O RESTA SEGUN EL NUMERO//
    } else if (!signo1.localeCompare(condi2)) {
      var dijito1 = num1 * Math.pow(equis, potencia1);
      if (document.getElementById("stand6").textContent == "V" || potencia2 == 0) {
        dijito2 = num2;
      } else {
        var dijito2 = num2 * Math.pow(equis, potencia2);
      }
      var resultado = dijito1 - dijito2;
      console.log(dijito1)
      console.log(dijito2)
      console.log(resultado)
    }
    if (!signo2.localeCompare(condi1)) {
      if (document.getElementById("stand10").textContent == "V" || potencia3 == 0) {
        var dijito3 = num3;
      } else {
        var dijito3 = num3 * Math.pow(equis, potencia3);
      }
      resultado = resultado + dijito3;
    } else if (!signo2.localeCompare(condi2)) {
      if (document.getElementById("stand10").textContent == "V" || potencia3 == 0) {
        var dijito3 = num3;
      } else {
        var dijito3 = num3 * Math.pow(equis, potencia3);
      }
      resultado = resultado - num3;
    }
    console.log('el ultimo resultadi' + resultado)
    var cont = resultado.toString();
    var cont1 = cont.slice(0, 7);
    document.getElementById('Intervalo' + unidad + '_' + 3).innerHTML = cont1;
    var funcionxi = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 2).textContent);
    var funcion_derivada = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 3).textContent);
    var inicial = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 1).textContent);
    var Recurrencia = inicial - (funcionxi / funcion_derivada);
    var cont = Recurrencia.toString();
    var cont1 = cont.slice(0, 7);
    document.getElementById('Intervalo' + unidad + '_' + 4).innerHTML = cont1;
    complemetnto = unidad - 1;
    if (unidad > 1) {
      var to1 = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 4).textContent);
      var to2 = parseFloat(document.getElementById('Intervalo' + complemetnto + '_' + 4).textContent)
      tolerancia = to1 - to2;
      if (tolerancia < 0) {
        tolerancia = to2 - to1;
        var cont = tolerancia.toString();
        var Recurre = cont.slice(0, 7);
        document.getElementById('Intervalo' + unidad + '_' + 5).innerHTML = Recurre;
      } else {
        tolerancia = to1 - to2;
        var cont = tolerancia.toString();
        var Recurre = cont.slice(0, 7);
        document.getElementById('Intervalo' + unidad + '_' + 5).innerHTML = Recurre;
      }
      Tolerancia = parseFloat(Recurre);
    }
    unidad = unidad + 1;
    document.getElementById('Intervalo' + unidad + '_' + 1).innerHTML = cont1;
    equis = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 1).textContent)

  }
  Esp = unidad;
  var roe = true;
  var este = 0;
  while (roe == true) {
    if (este == unidad) {
      cuadroHeigth()
      roe = false;
    }
    este = este + 1;
  }
  var rosibel = 1;
  while (rosibel < unidad) {
    hei = hei + 25;
    rosibel = rosibel + 1;
  }
  var limi = document.getElementById('resultados');
  limi.style.height = hei + "px";
  limi.style.marginTop = "150px"

}
function resolver_N_mejorado() {

  var grafica = document.getElementById('grafica');
  grafica.style.display = "block";
  var formulario = document.getElementById('formulario');
  formulario.style.display = "none"
  var botones = document.getElementById('botones');
  botones.style.display = "block";
  var vamos = document.getElementById("resultados");
  vamos.style.display = "block";
  vamos.style.height = "360px";
  vamos.style.width ="530px"
  var resultados = document.getElementById("resultadosTabla2");
  resultados.style.display = "block";
  var tabla3 = document.getElementById('resultadosTabla3');
  tabla3.style.display = "block"
  var tabla4 = document.getElementById('resultadosTabla4')
  tabla4.style.display = "block";
  document.getElementById('positivo').value = 10;
  document.getElementById('negativo').value = -10;
  Intervalos_calculados();
  var negativo1 = parseFloat(document.getElementById('negativo1').textContent);
  var negativo2 = parseFloat(document.getElementById('negativo2').textContent);
  var negativo3 = parseFloat(document.getElementById('negativo3').textContent);
  var negativo4 = parseFloat(document.getElementById('negativo4').textContent);
  var negativo5 = parseFloat(document.getElementById('negativo5').textContent);
  var negativo6 = parseFloat(document.getElementById('negativo6').textContent);
  var negativo7 = parseFloat(document.getElementById('negativo7').textContent);
  var negativo8 = parseFloat(document.getElementById('negativo8').textContent);
  var negativo9 = parseFloat(document.getElementById('negativo9').textContent);
  var negativo10 = parseFloat(document.getElementById('negativo10').textContent);
  var negativo11 = parseFloat(document.getElementById('negativo11').textContent);
  var negativo12 = parseFloat(document.getElementById('negativo12').textContent);
  var negativo13 = parseFloat(document.getElementById('negativo13').textContent);
  var negativo14 = parseFloat(document.getElementById('negativo14').textContent);
  var negativo15 = parseFloat(document.getElementById('negativo15').textContent);
  var negativo16 = parseFloat(document.getElementById('negativo16').textContent);
  var negativo17 = parseFloat(document.getElementById('negativo17').textContent);
  var negativo18 = parseFloat(document.getElementById('negativo18').textContent);
  var negativo19 = parseFloat(document.getElementById('negativo19').textContent);
  var negativo20 = parseFloat(document.getElementById('negativo20').textContent);
  var negativo21 = parseFloat(document.getElementById('negativo21').textContent);
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [{
        label: 'GRAFICA',
        data: [negativo1, negativo2, negativo3, negativo4, negativo5, negativo6, negativo7, negativo8, negativo9, negativo10, negativo11, negativo12, negativo13, negativo14, negativo15, negativo16, negativo17, negativo18, negativo19, negativo20, negativo21],
        borderWidth: 1,
        borderColor: "aqua"
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  var Limite = 1;


  while (Limite < 5) {
    if (Limite == 1) {
      var tabla = "";
    } else if (Limite == 2) {
      var tabla = "D";
    } else if (Limite == 3) {
      var tabla = "W";
    } else if (Limite == 4) {
      var tabla = "O";
    }
    var equis = parseFloat(document.getElementById('number' + Limite).textContent)
    document.getElementById('Intervalo1_1' + tabla).innerHTML = equis;
    var unidad = 1;
    var complemetnto = 0;
    var aumento = 1;
    var Tolerancia = 1;
    var mostrar_tabla = 1;
    var confirm = 0.001;
    var Tolerancia = 1;
    while (confirm < Tolerancia) {
      var resultado;
      //se ontiene el valor de los numeros//
      var num1 = parseFloat(document.getElementById("stand1").textContent);
      var num2 = parseFloat(document.getElementById("stand5").textContent);
      var num3 = parseFloat(document.getElementById("stand9").textContent);
      //se obtiene el valor de las potencias//
      var potencia1 = parseInt(document.getElementById("stand3").textContent);
      var potencia2 = parseInt(document.getElementById("stand7").textContent);
      var potencia3 = parseInt(document.getElementById("stand11").textContent);
      //se obtiene el caracter de los signos//
      var signo1 = document.getElementById("stand4").textContent;
      var signo2 = document.getElementById("stand8").textContent;
      var signo3 = document.getElementById("stand12").textContent;
      if (unidad > 1) {
        var equis = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 1 + tabla).textContent);
      }
      var condi1 = "+", condi2 = "-";
      //RESUELVE EL PRIMER DIJITO//
      if (!signo1.localeCompare(condi1)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V") {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 + dijito2;
        //RESUELVE EL SEGUNDO DIJITO Y LO SUMA O RESTA SEGUN EL NUMERO//
      } else if (!signo1.localeCompare(condi2)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V") {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 - dijito2;
      }
      if (!signo2.localeCompare(condi1)) {
        if (document.getElementById("stand10").textContent == "V") {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado + dijito3;
      } else if (!signo2.localeCompare(condi2)) {
        if (document.getElementById("stand10").textContent == "V") {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado - num3;
      }
      var cont = resultado.toString();
      var cont1 = cont.slice(0, 7);
      document.getElementById('Intervalo' + unidad + '_' + 2 + tabla).innerHTML = cont1;
      var cont = resultado.toString();
      var cont1 = cont.slice(0, 7);
      document.getElementById('Intervalo' + unidad + '_' + 2 + tabla).innerHTML = cont1;
      aumento = aumento + 1;
      //SE DERIVA LA FUNCION PARA SER RESUELTA//
      if (!signo1.localeCompare(condi1) || !signo1.localeCompare(condi2)) {
        var num1 = num1 * potencia1;
        var potencia1 = potencia1 - 1;
        if (potencia2 > 0) {
          var num2 = num2 * potencia2;
          var potencia2 = potencia2 - 1;
          console.log("el valor del num2 es = " + num2)
          console.log("el valor de la potencia es = " + potencia2)
        } else {
        }
      }
      if (!signo2.localeCompare(condi1) || !signo2.localeCompare(condi2)) {
        if (potencia3 == 1) {
          num3 = 0;
          potencia3 = 0;
        }
        else {
          var num3 = num1 * potencia3;
          var potencia3 = potencia3 - 1;
        }
      }
      //RESUELVE EL PRIMER DIJITO//
      if (!signo1.localeCompare(condi1)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V" || potencia2 == 0) {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 + dijito2;
        console.log(dijito1)
        console.log(dijito2)
        console.log(resultado)
        //RESUELVE EL SEGUNDO DIJITO Y LO SUMA O RESTA SEGUN EL NUMERO//
      } else if (!signo1.localeCompare(condi2)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V" || potencia2 == 0) {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 - dijito2;
      }
      if (!signo2.localeCompare(condi1)) {
        if (document.getElementById("stand10").textContent == "V" || potencia3 == 0) {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado + dijito3;
      } else if (!signo2.localeCompare(condi2)) {
        if (document.getElementById("stand10").textContent == "V" || potencia3 == 0) {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado - num3;
      }
      var cont = resultado.toString();
      var cont1 = cont.slice(0, 7);
      document.getElementById('Intervalo' + unidad + '_' + 3 + tabla).innerHTML = cont1;
      if (unidad == 1) {
        document.getElementById('Intervalo' + unidad + '_' + 4 + tabla).innerHTML = num1;
      } else if (unidad > 1) {
        var rosa = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 1 + tabla).textContent);
        num1 = num1 * rosa;
        var result = rosa.toString();
        var oracle = result.slice(0, 7);
        document.getElementById('Intervalo' + unidad + '_' + 4 + tabla).innerHTML = oracle;
      }
      var xi = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 1 + tabla).textContent);
      var Fxi = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 2 + tabla).textContent);
      var FDxi = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 3 + tabla).textContent);
      var FDPxi = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 4 + tabla).textContent);
      var recurrencia = xi - ((Fxi * FDxi) / ((Math.pow(FDxi, 2)) - Fxi * FDPxi))
      var cont = recurrencia.toString();
      var cont1 = cont.slice(0, 7);
      document.getElementById('Intervalo' + unidad + '_' + 5 + tabla).innerHTML = cont1;
      complemetnto = unidad - 1;
      if (unidad > 1) {
        var to1 = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 5 + tabla).textContent);
        var to2 = parseFloat(document.getElementById('Intervalo' + complemetnto + '_' + 5 + tabla).textContent)
        tolerancia = to1 - to2;
        if (tolerancia < 0) {
          tolerancia = to2 - to1;
          var cont = tolerancia.toString();
          var Recurre = cont.slice(0, 7);
          document.getElementById('Intervalo' + unidad + '_' + 6 + tabla).innerHTML = Recurre;
        } else {
          tolerancia = to1 - to2;
          var cont = tolerancia.toString();
          var Recurre = cont.slice(0, 7);
          document.getElementById('Intervalo' + unidad + '_' + 6 + tabla).innerHTML = Recurre;
        }
        Tolerancia = parseFloat(Recurre);
      }
      unidad = unidad + 1;
      document.getElementById('Intervalo' + unidad + '_' + 1 + tabla).innerHTML = cont1;
    }
    if (Limite == 1) {
      Esp = unidad;
      var roe = true;
      var este = 0;
      while (roe == true) {
        if (este == unidad) {
          cuadroHeigth()
          roe = false;
        }
        este = este + 1;
      }
      var rosibel = 1;
      while (rosibel < unidad) {
        hei = hei + 25;
        rosibel = rosibel + 1;
      }
      var limi = document.getElementById('resultados');
      limi.style.height = hei + "px";
    }
    if (Limite == 2) {
      hei = 30;
      Rosi = unidad;
      var roe = true;
      var este = 0;
      while (roe == true) {
        if (este == unidad) {
          cuadro2Heigth()
          roe = false;
        }
        este = este + 1;
      }
      var rosibel = 1;
      while (rosibel < unidad) {
        hei = hei + 25;
        rosibel = rosibel + 1;
      }
      var limi = document.getElementById('resultadosTabla2');
      limi.style.height = hei + "px";
    }
    if (Limite == 3) {
      hei = 30;
      Rosi = unidad;
      var roe = true;
      var este = 0;
      while (roe == true) {
        if (este == unidad) {
          cuadro3Heigth()
          roe = false;
        }
        este = este + 1;
      }
      var rosibel = 1;
      while (rosibel < unidad) {
        hei = hei + 25;
        rosibel = rosibel + 1;
      }
      var limi = document.getElementById('resultadosTabla3');
      limi.style.height = hei + "px";
    }
    if (Limite == 4) {
      hei = 30;
      Rosi = unidad;
      var roe = true;
      var este = 0;
      while (roe == true) {
        if (este == unidad) {
          cuadro4Heigth()
          roe = false;
        }
        este = este + 1;
      }
      var rosibel = 1;
      while (rosibel < unidad) {
        hei = hei + 25;
        rosibel = rosibel + 1;
      }
      var limi = document.getElementById('resultadosTabla4');
      limi.style.height = hei + "px";
    }

    Limite = Limite + 1;
  }
}
function Resolver_miller() {
  var formulario = document.getElementById('formulario');
  formulario.style.display = "none";
  var resu = document.getElementById('resultados');
  resu.style.display = "block";
  resu.style.width = "90%";
  var botones = document.getElementById('botones');
  botones.style.display = "block";
  var valor_funcion = document.getElementById('funcion').value;
  var concatenate = valor_funcion + "R";
  var chain = "R";
  var confirmation = true;
  var one = 0;
  var two = 1;
  var increment = 1;
  var rous = " ";
  var menos = 1;
  var unos = 1;
  var dos = 2;
  //ESTE ALGORITMO ORDENA LAS CANTIDADES PARA SER RESUELTAS//
  while (confirmation == true) {
    var confirm = concatenate.slice(one, two);
    if (confirm.localeCompare(chain)) {
      if (Number.parseInt(confirm) || confirm == "0" || confirm == '.') {
        confirm = document.getElementById("position" + increment).textContent + confirm;
        document.getElementById("position" + increment).innerHTML = confirm;
        document.getElementById("stand" + increment).innerHTML = confirm;
      } else {
        if (confirm == "^") {
        } else {
          increment = increment + 1;
          document.getElementById("stand" + increment).innerHTML = rous;
          document.getElementById("stand" + increment).innerHTML = confirm;
          increment = increment + 1;
        }
      }
    } else {
      confirmation = false;
      document.getElementById("position1").innerHTML = "";
      document.getElementById("position2").innerHTML = "";
      document.getElementById("position3").innerHTML = "";
    }
    one = one + 1;
    two = two + 1;
  }
  var valor_funcion = document.getElementById('intervalo').value;
  var concatenate = valor_funcion + "R";
  var chain = "R";
  var confirmation = true;
  var one = 0;
  var two = 1;
  var increment = 1;
  var rous = " ";
  var menos = 1;
  var unos = 1;
  var dos = 2;
  while (confirmation == true) {
    var confirm = concatenate.slice(one, two);
    if (confirm.localeCompare(chain)) {
      if (Number.parseInt(confirm) || confirm == "0" || confirm == '.' || confirm == "-") {
        confirm = document.getElementById("position" + increment).textContent + confirm;
        document.getElementById("position" + increment).innerHTML = confirm;
        document.getElementById("valorX" + increment).innerHTML = confirm;
      } else {
        if (confirm == "^") {
        } else {
          increment = increment + 1;
        }
      }
    } else {
      confirmation = false;
      document.getElementById("position1").innerHTML = "";
      document.getElementById("position2").innerHTML = "";
      document.getElementById("position3").innerHTML = "";
    }
    one = one + 1;
    two = two + 1;
  }
  var confirm = parseFloat(document.getElementById('Limite').value);
  var prueba = 1;
  var unidad = 1;
  var Tolerancia_total = 1;
  var rosa = 0;
  var mostrar_tabla;
  document.getElementById('Intervalo1_1').innerHTML = document.getElementById('valorX1').textContent;
  document.getElementById('Intervalo1_2').innerHTML = document.getElementById('valorX2').textContent;
  document.getElementById('Intervalo1_3').innerHTML = document.getElementById('valorX3').textContent;
  while (confirm < Tolerancia_total) {
    var i = 1;
    var aumento = 3;
    var valor_funciones = 3;
    //ESTE ALGORITMO RESUELVE LA FUNCION CON EL VALOR DE X//
    while (i < 4) {
      var equis = parseFloat(document.getElementById('Intervalo' + unidad + '_' + i).textContent)
      console.log(i + 'x ' + equis)
      var resultado;
      //se ontiene el valor de los numeros//
      var num1 = parseFloat(document.getElementById("stand1").textContent);
      var num2 = parseFloat(document.getElementById("stand5").textContent);
      var num3 = parseFloat(document.getElementById("stand9").textContent);
      var num4 = parseFloat(document.getElementById("stand13").textContent);
      var num5 = parseFloat(document.getElementById("stand17").textContent);
      var num6 = parseFloat(document.getElementById("stand21").textContent);
      //se obtiene el valor de las potencias//
      var potencia1 = parseInt(document.getElementById("stand3").textContent);
      var potencia2 = parseInt(document.getElementById("stand7").textContent);
      var potencia3 = parseInt(document.getElementById("stand11").textContent);
      var potencia4 = parseFloat(document.getElementById("stand15").textContent);
      var potencia5 = parseFloat(document.getElementById("stand19").textContent);
      var potencia6 = parseFloat(document.getElementById("stand23").textContent);
      //se obtiene el caracter de los signos//
      var signo1 = document.getElementById("stand4").textContent;
      var signo2 = document.getElementById("stand8").textContent;
      var signo3 = document.getElementById("stand12").textContent;
      var signo4 = document.getElementById('stand16').textContent;
      var signo5 = document.getElementById('stand20').textContent;
      var condi1 = "+", condi2 = "-";
      //RESUELVE EL PRIMER DIJITO//
      if (!signo1.localeCompare(condi1)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V") {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 + dijito2;
        //RESUELVE EL SEGUNDO DIJITO Y LO SUMA O RESTA SEGUN EL NUMERO//
      } else if (!signo1.localeCompare(condi2)) {
        var dijito1 = num1 * Math.pow(equis, potencia1);
        if (document.getElementById("stand6").textContent == "V") {
          dijito2 = num2;
        } else {
          var dijito2 = num2 * Math.pow(equis, potencia2);
        }
        var resultado = dijito1 - dijito2;
      }
      if (!signo2.localeCompare(condi1)) {
        if (document.getElementById("stand10").textContent == "V") {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado + dijito3;
      } else if (!signo2.localeCompare(condi2)) {
        if (document.getElementById("stand10").textContent == "V") {
          var dijito3 = num3;
        } else {
          var dijito3 = num3 * Math.pow(equis, potencia3);
        }
        resultado = resultado - num3;
      }
      if (!signo3.localeCompare(condi1)) {
        if (document.getElementById('stand14').textContent == "V") {
          var dijito4 = num4;
        } else {
          var dijito4 = num4 * Math.pow(equis, potencia4);
        }
        resultado = resultado + dijito4;
      } else if (!signo3.localeCompare(condi2)) {
        if (document.getElementById('stand14').textContent == "V") {
          var dijito4 = num4;
        } else {
          var dijito4 = num4 * Math.pow(equis, potencia4);
        }
        resultado = resultado - dijito4;
      }
      if (!signo4.localeCompare(condi1)) {
        if (document.getElementById('stand18').textContent == "V") {
          var dijito5 = num5;
        } else {
          var dijito5 = num5 * Math.pow(equis, potencia5);
        }
        resultado = resultado + dijito5;
      } else if (!signo4.localeCompare(condi2)) {
        if (document.getElementById('stand18').textContent == "V") {
          var dijito5 = num5;
        } else {
          var dijito5 = num5 * Math.pow(equis, potencia5);
        }
        resultado = resultado - dijito5;
      }
      if (!signo5.localeCompare(condi1)) {
        if (document.getElementById('stand22').textContent == "V") {
          var dijito6 = num6;
        } else {
          var dijito6 = num6 * Math.pow(equis, potencia6);
        }
        resultado = resultado + dijito6;
      } else if (!signo5.localeCompare(condi2)) {
        if (document.getElementById('stand22').textContent == "V") {
          var dijito6 = num6;
        } else {
          var dijito6 = num6 * Math.pow(equis, potencia6);
        }
        resultado = resultado - dijito6;
      }
      var cont = resultado.toString();
      var cont1 = cont.slice(0, 7);
      valor_funciones = valor_funciones + 1;
      document.getElementById('Intervalo' + unidad + '_' + valor_funciones).innerHTML = cont1;
      i = i + 1;
      aumento = aumento + 1;
      one = one + 2;
      two = two + 2;
    }
    var Xo = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 1).textContent);
    var xi = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 2).textContent);
    var x2 = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 3).textContent);
    var FXo = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 4).textContent)
    var FXi = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 5).textContent)
    var FX2 = parseFloat(document.getElementById('Intervalo' + unidad + '_' + 6).textContent)
    //EL VALOR DE Ho//
    var ho = xi - Xo;
    var ImpHo = ho.toString();
    ImpHo = ImpHo.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 7).innerHTML = ImpHo;
    //EL VALOR DE Hi//
    var hi = x2 - xi;
    var ImpHi = hi.toString();
    ImpHi = ImpHi.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 8).innerHTML = ImpHi;
    //EL VALOR DE So//
    var So = (FXi - FXo) / (xi - Xo);
    var ImpSo = So.toString();
    ImpSo = ImpSo.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 9).innerHTML = ImpSo;
    //EL VALOR DE SI//
    var Si = (FX2 - FXi) / (x2 - xi);
    var impSi = Si.toString();
    impSi = impSi.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 10).innerHTML = impSi;
    //EL VALOR DE a//
    var a = (Si - So) / (hi + ho);
    var Impa = a.toString();
    Impa = Impa.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 11).innerHTML = Impa;
    //EL VALOR DE b//
    var b = a * hi + Si;
    var Impb = b.toString();
    Impb = Impb.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 12).innerHTML = Impb;
    //EL VALOR DE c//
    var c = FX2;
    var Impc = c.toString();
    Impc = Impc.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 13).innerHTML = Impc;
    //El valor de X3
    let D = Math.sqrt(b * b - 4 * a * c);
    let E = b > 0 ? -1 * b - D : -1 * b + D;
    let h = 2 * c / E;
    var X3 = x2 + h;
    var candy = X3.toString();
    candy = candy.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 14).innerHTML = candy;

    var error = ((X3 - x2) / X3) * 100 / 100;
    if (error < 0) {
      error = error.toString();
      error = error.slice(1, 4);
      Tolerancia_total = parseFloat(error);
    } else {
      Tolerancia_total = error;
    }
    var Error = error.toString();
    var Error = Error.slice(0, 4);
    document.getElementById('Intervalo' + unidad + '_' + 15).innerHTML = Error;
    unidad = unidad + 1;
    prueba = prueba + 1;
    rosa = 1;
    document.getElementById('Intervalo' + unidad + '_' + 1).innerHTML = document.getElementById('Intervalo' + menos + '_' + 2).textContent;
    document.getElementById('Intervalo' + unidad + '_' + 2).innerHTML = document.getElementById('Intervalo' + menos + '_' + 3).textContent;
    document.getElementById('Intervalo' + unidad + '_' + 3).innerHTML = document.getElementById('Intervalo' + menos + '_' + 14).textContent;
    menos = menos + 1;

  }
  Esp = unidad;
  var roe = true;
  var este = 0;
  while (roe == true) {
    if (este == unidad) {
      cuadroHeigth()
      roe = false;
    }
    este = este + 1;
  }
  var rosibel = 1;
  while (rosibel < unidad) {
    hei = hei + 25;
    rosibel = rosibel + 1;
  }
  var limi = document.getElementById('resultados');
  limi.style.height = hei + "px";
  limi.style.marginTop = "150px"
}
function Resolver_inter_newton() {
  var formulario = document.getElementById("formulario");
  formulario.style.display = "none";
  var inter = document.getElementById("Interpolacion-new");
  inter.style.display = "block";
  var botones = document.getElementById('botones');
  botones.style.display = "block";
  var valor_funcion = document.getElementById('funcion').value;
  var concatenate = valor_funcion + "R";
  var chain = "R";
  var confirmation = true;
  var one = 0;
  var two = 1;
  var increment = 1;
  var rous = " ";
  var menos = 1;
  var unos = 1;
  var dos = 2;
  //ESTE ALGORITMO ORDENA LAS CANTIDADES PARA SER RESUELTAS//
  while (confirmation == true) {
    var confirm = concatenate.slice(one, two);
    if (confirm.localeCompare(chain)) {
      if (Number.parseInt(confirm) || confirm == "0" || confirm == '.' || confirm == "-") {
        confirm = document.getElementById("position" + increment).textContent + confirm;
        document.getElementById("position" + increment).innerHTML = confirm;
        document.getElementById("stand" + increment).innerHTML = confirm;
      } else {
        if (confirm == ",") {
          increment = increment + 1;
        } else {
          increment = increment + 1;
          document.getElementById("stand" + increment).innerHTML = rous;
          document.getElementById("stand" + increment).innerHTML = confirm;
          increment = increment + 1;
        }
      }
    } else {
      confirmation = false;
      document.getElementById("position1").innerHTML = "";
      document.getElementById("position2").innerHTML = "";
      document.getElementById("position3").innerHTML = "";
      document.getElementById("position4").innerHTML = "";
      document.getElementById("position5").innerHTML = "";
      document.getElementById("position6").innerHTML = "";
      document.getElementById("position7").innerHTML = "";
      document.getElementById("position8").innerHTML = "";
      document.getElementById("position9").innerHTML = "";
      document.getElementById("position10").innerHTML = "";
      document.getElementById("position11").innerHTML = "";
      document.getElementById("position12").innerHTML = "";
      document.getElementById("position13").innerHTML = "";
      document.getElementById("position14").innerHTML = "";
      document.getElementById("position15").innerHTML = "";
      document.getElementById("position16").innerHTML = "";
    }
    one = one + 1;
    two = two + 1;
  }
  increment = increment + 1;
  i = 1;
  while (i <= increment) {
    var or = document.getElementById('reseter' + i);
    or.style.display = "block"
    document.getElementById('Cantidad' + i).innerHTML = document.getElementById('stand' + i).textContent;
    i = i + 1;
  }

  var valor_funcion = document.getElementById('intervalo').value;
  var concatenate = valor_funcion + "R";
  var chain = "R";
  var confirmation = true;
  var one = 0;
  var two = 1;
  var increment = 1;
  var rous = " ";
  var menos = 1;
  var unos = 1;
  var dos = 2;
  //ESTE ALGORITMO ORDENA LAS CANTIDADES PARA SER RESUELTAS//
  while (confirmation == true) {
    var confirm = concatenate.slice(one, two);
    if (confirm.localeCompare(chain)) {
      if (Number.parseInt(confirm) || confirm == "0" || confirm == '.' || confirm == "-") {
        confirm = document.getElementById("position" + increment).textContent + confirm;
        document.getElementById("position" + increment).innerHTML = confirm;
        document.getElementById("rol" + increment).innerHTML = confirm;
      } else {
        if (confirm == ",") {
          increment = increment + 1;
        } else {
          increment = increment + 1;
          document.getElementById("rol" + increment).innerHTML = rous;
          document.getElementById("rol" + increment).innerHTML = confirm;
          increment = increment + 1;
        }
      }
    } else {
      confirmation = false;
      document.getElementById("position1").innerHTML = "";
      document.getElementById("position2").innerHTML = "";
      document.getElementById("position3").innerHTML = "";
    }
    one = one + 1;
    two = two + 1;
  }
  increment = increment + 1;
  document.getElementById('stand' + increment).innerHTML = "TERMINO";
  i = 1;
  while (i < increment) {
    var y = document.getElementById('reset' + i);
    y.style.display = "block"
    document.getElementById('CantidadYY' + i).innerHTML = document.getElementById('rol' + i).textContent;
    i = i + 1;
  }
  var y = document.getElementById('reset' + i);
  y.style.display = "block"

  var Valor_X = parseFloat(document.getElementById('Limite').value)
  var fors = true;

  var i = 1;
  while (fors == true) {
    var termino = parseFloat(document.getElementById('Cantidad' + i).textContent);
    var termino2 = parseFloat(document.getElementById('CantidadYY' + i).textContent);
    if (Valor_X >= termino) {
    } else {
      fors = false;
      console.log('el numero' + Valor_X + 'es menor que' + termino);
    }
    i = i + 1;
  }
  if(i<4){
    var candy  =i; 
  } else{
    var candy = i-2; 
  }
  var x2 = termino;
  var y2 = termino2;
  var x1 = parseFloat(document.getElementById('Cantidad' + candy).textContent);
  var y1 = parseFloat(document.getElementById('CantidadYY' + candy).textContent);
  if (global == 6) {
    var Y = ((Valor_X - x1) / (x2 - x1)) * (y2 - y1) + y1;
  } else if (global == 7) {
    var Y = ((Valor_X - x2) / (x1 - x2)) * y1 + ((Valor_X - x1) / (x2 - x1)) * y2;
  }
  var r = Y.toString();
  r = r.slice(0, 7);
  document.getElementById('RESU_INTER').innerHTML = r;
  var fors = true;
  var i = 1;
  var b = 1;
  var erro = 1;
  console.log(increment)
  while (i <= increment) {
    var numero = parseFloat(document.getElementById('stand' + i).textContent);
    if (Valor_X < numero) {
      document.getElementById('Cantidad' + i).innerHTML = Valor_X;
      document.getElementById('CantidadYY' + i).innerHTML = r;
      var pedro = document.getElementById('reset' + i);
      pedro.style.background = "white";
      pedro.style.color = "blue";
      pedro.style.border = "1px solid rgba(25, 132, 182, 0.916)";
      var juan = document.getElementById('reseter' + i);
      juan.style.background = "white";
      juan.style.color = "blue";
      juan.style.border = "1px solid rgba(25, 132, 182, 0.916)";
      Valor_X = 100000;
    } else {
      document.getElementById('Cantidad' + i).innerHTML = document.getElementById('stand' + erro).textContent;
      document.getElementById('CantidadYY' + i).innerHTML = document.getElementById('rol' + erro).textContent;
      erro = erro + 1;
    }
    i = i + 1;
  }
  var rosa = document.getElementById('for');
  rosa.style.marginTop = "90px";
}
function captura() {
  if (global == 1 || global == 2 || global == 3 || global == 4 || global == 6 || global == 8) {
    html2canvas(document.getElementById('resultados')).then(function (canvas) {
      document.body.appendChild(canvas)
      let enlace = document.createElement('a');
      // El título
      enlace.download = "Metodo Resuelto";
      // Convertir la imagen a Base64 y ponerlo en el enlace
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
      var dato = canvas.toDataURL("image/png");
      document.location.href = dato;
    })
  } else if (global == 5) {
    //Guarda la primer tabla//
    html2canvas(document.getElementById('resultados')).then(function (canvas) {
      document.body.appendChild(canvas)
      let enlace = document.createElement('a');
      // El título
      enlace.download = "Metodo Resuelto";
      // Convertir la imagen a Base64 y ponerlo en el enlace
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
      var dato = canvas.toDataURL("image/png");
      document.location.href = dato;
    })
    //Guarda la segunda tabla//
    html2canvas(document.getElementById('resultadosTabla2')).then(function (canvas) {
      document.body.appendChild(canvas)
      let enlace = document.createElement('a');
      // El título
      enlace.download = "Metodo Resuelto";
      // Convertir la imagen a Base64 y ponerlo en el enlace
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
      var dato = canvas.toDataURL("image/png");
      document.location.href = dato;
    })
     //Guarda la segunda tabla//
     html2canvas(document.getElementById('resultadosTabla3')).then(function (canvas) {
      document.body.appendChild(canvas)
      let enlace = document.createElement('a');
      // El título
      enlace.download = "Metodo Resuelto";
      // Convertir la imagen a Base64 y ponerlo en el enlace
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
      var dato = canvas.toDataURL("image/png");
      document.location.href = dato;
    })
      //Guarda la segunda tabla//
      html2canvas(document.getElementById('resultadosTabla4')).then(function (canvas) {
        document.body.appendChild(canvas)
        let enlace = document.createElement('a');
        // El título
        enlace.download = "Metodo Resuelto";
        // Convertir la imagen a Base64 y ponerlo en el enlace
        enlace.href = canvas.toDataURL();
        // Hacer click en él
        enlace.click();
        var dato = canvas.toDataURL("image/png");
        document.location.href = dato;
      })
         //Guarda la segunda tabla//
     html2canvas(document.getElementById('grafica')).then(function (canvas) {
      document.body.appendChild(canvas)
      let enlace = document.createElement('a');
      // El título
      enlace.download = "Metodo Resuelto";
      // Convertir la imagen a Base64 y ponerlo en el enlace
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
      var dato = canvas.toDataURL("image/png");
      document.location.href = dato;
    })
  }


}