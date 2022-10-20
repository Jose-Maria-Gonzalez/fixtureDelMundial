var read = require("prompt-sync")();

//MAIN----------------------------------------------------------------------------------------------------------------------------------------------------------
function main() {
  let seleciones = [];

  console.clear();

  for (i = 1; i <= 32; i++) {
    console.info("Ingreso de los paises participantes:\n")
    var nombreSelecion = read("Ingrese el nombre de la selecion: ");
    var nacionaidadSelecion = read("Ingrese la nacionalidad de la selecion: ");
    var continenteSelecion = read("Ingrese el continente de la selecion: ");
    var participacionesSelecion = parseInt(
      read("Ingrese cuantas veces a participado en el Mundial la selecion: ")
    );

    var nuevaSelec = nuevaSelecion(
      i,
      nombreSelecion,
      nacionaidadSelecion,
      continenteSelecion,
      participacionesSelecion
    );
    seleciones.push(nuevaSelec);
    console.clear();
  }

  let jugadores = [];
  
  let salirJugadores = true;
  let validadorJugador = false;
  while (salirJugadores === true || validadorJugador === false) {
    console.info("Ingreso de los jugadores participantes:\n")
    console.info("Elija la selecion a la cual pertenece este jugador: ");
    mostrarSeleciones(seleciones);
    var selecion = validacionSelecion(seleciones);
    h();
    var nacionalidad = read("Ingrese la nacionalidad del jugador: ");
    var nombre = read("Ingrese el nombre del jugador: ");
    var edad = parseInt(read("Ingrese la edad del jugador: "));
    var altura = parseInt(read("Ingrese la altura del jugador: "));
    mostrarPosiciones();
    var posicion = verificarPosicion();

    var nuevoJug = crearUsuario(
      selecion,
      nacionalidad,
      nombre,
      edad,
      altura,
      posicion
    );
    jugadores.push(nuevoJug);
    console.clear();
    validadorJugador = validarJugadores(seleciones, jugadores);

    let salirr;
    let salirWhile = true;
    while (salirWhile === true) {
      let salir = read(
        "¿Quiere usted seguir agregando jugadores? Responda con S o N: "
      );
      while (salir != "s" && salir != "S" && salir != "n" && salir != "N") {
        salir = read("Le agradecere si responde con S o N: ");
      }
      salirr = salir;
      salirWhile = false;
    }
    if (salirr == "n" || salirr == "N") {
      salirJugadores = false;
    }
  }
  
  let numGrupos = funcionNumerosAleatorios();

  let A = armadoDeGrupos(numGrupos, seleciones);
  let B = armadoDeGrupos(numGrupos, seleciones);
  let C = armadoDeGrupos(numGrupos, seleciones);
  let D = armadoDeGrupos(numGrupos, seleciones);
  let E = armadoDeGrupos(numGrupos, seleciones);
  let F = armadoDeGrupos(numGrupos, seleciones);
  let G = armadoDeGrupos(numGrupos, seleciones);
  let H = armadoDeGrupos(numGrupos, seleciones);

  console.log("Mundial 2022");

  let letrasGrupos = [A, B, C, D, E, F, G, H]
  let letrasNormales = ["A", "B", "C", "D", "E", "F", "G", "H"]

  for(i = 0; i < letrasGrupos.length; i++){

    mostrarGrupos(letrasGrupos[i], letrasNormales[i]);

  }

  for(i = 0; i < letrasGrupos.length; i++){

    enfrentamientosPorGrupos1(letrasGrupos[i], letrasNormales[i]);

  }

  for(i = 0; i < letrasGrupos.length; i++){

    enfrentamientosPorGrupos2(letrasGrupos[i], letrasNormales[i]);

  }

  for(i = 0; i < letrasGrupos.length; i++){

    enfrentamientosPorGrupos3(letrasGrupos[i], letrasNormales[i]);

  }

  h();

  read("--Presione enter para continuar--");
  console.clear();

  var mayorGolesRealizados = { nombre: "nada", golesMetidos: 0 };

  var mayorGolesRecibidos = { nombre: "nada", golesEnContra: 0 };

  var mejorSaldoDeGoles = { nombre: "nada", golesAFavor: 0 };

  console.log("Fase de grupos");

  h();

  ///PRIMERA FECHA GRUPOS
  aJugar(A, jugadores, 2, 3, "Primera fecha de fase de grupos");
  aJugar(B, jugadores, 2, 3, "Primera fecha de fase de grupos");
  aJugar(A, jugadores, 0, 1, "Primera fecha de fase de grupos");
  aJugar(B, jugadores, 0, 1, "Primera fecha de fase de grupos");

  aJugar(C, jugadores, 2, 3, "Primera fecha de fase de grupos");
  aJugar(D, jugadores, 2, 3, "Primera fecha de fase de grupos");
  aJugar(C, jugadores, 0, 1, "Primera fecha de fase de grupos");
  aJugar(D, jugadores, 0, 1, "Primera fecha de fase de grupos");

  aJugar(E, jugadores, 2, 3, "Primera fecha de fase de grupos");
  aJugar(F, jugadores, 2, 3, "Primera fecha de fase de grupos");
  aJugar(E, jugadores, 0, 1, "Primera fecha de fase de grupos");
  aJugar(F, jugadores, 0, 1, "Primera fecha de fase de grupos");

  aJugar(G, jugadores, 2, 3, "Primera fecha de fase de grupos");
  aJugar(H, jugadores, 2, 3, "Primera fecha de fase de grupos");
  aJugar(H, jugadores, 0, 1, "Primera fecha de fase de grupos");
  aJugar(G, jugadores, 1, 0, "Primera fecha de fase de grupos");
  ///PRIMERA FECHA

  mayorGolesRealizados = reporteMasGolesRealizados(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mayorGolesRealizados
  );

  mayorGolesRecibidos = reporteMasGolesRecibidos(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mayorGolesRecibidos
  );

  mejorSaldoDeGoles = reporteMejorSaldoDeGoles(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mejorSaldoDeGoles
  );

  let goleador = reporteGoleador(jugadores);

  //SEGUNDA FECHA GRUPOS
  aJugar(A, jugadores, 0, 2, "Segunda fecha de fase de grupos");
  aJugar(B, jugadores, 1, 3, "Segunda fecha de fase de grupos");
  aJugar(A, jugadores, 1, 3, "Segunda fecha de fase de grupos");
  aJugar(B, jugadores, 0, 2, "Segunda fecha de fase de grupos");

  aJugar(D, jugadores, 1, 3, "Segunda fecha de fase de grupos");
  aJugar(C, jugadores, 1, 3, "Segunda fecha de fase de grupos");
  aJugar(D, jugadores, 0, 2, "Segunda fecha de fase de grupos");
  aJugar(C, jugadores, 0, 2, "Segunda fecha de fase de grupos");

  aJugar(E, jugadores, 1, 3, "Segunda fecha de fase de grupos");
  aJugar(F, jugadores, 0, 2, "Segunda fecha de fase de grupos");
  aJugar(F, jugadores, 1, 3, "Segunda fecha de fase de grupos");
  aJugar(E, jugadores, 0, 2, "Segunda fecha de fase de grupos");

  aJugar(G, jugadores, 1, 3, "Segunda fecha de fase de grupos");
  aJugar(H, jugadores, 1, 3, "Segunda fecha de fase de grupos");
  aJugar(G, jugadores, 0, 2, "Segunda fecha de fase de grupos");
  aJugar(H, jugadores, 0, 2, "Segunda fecha de fase de grupos");
  //SEGUNDA FECHA GRUPOS

  mayorGolesRealizados = reporteMasGolesRealizados(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mayorGolesRealizados
  );

  mayorGolesRecibidos = reporteMasGolesRecibidos(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mayorGolesRecibidos
  );

  mejorSaldoDeGoles = reporteMejorSaldoDeGoles(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mejorSaldoDeGoles
  );

  goleador = reporteGoleador(jugadores);

  //TERCERA FECHA GRUPOS
  aJugar(A, jugadores, 0, 3, "Tercera fecha de fase de grupos");
  aJugar(A, jugadores, 1, 2, "Tercera fecha de fase de grupos");
  aJugar(B, jugadores, 0, 3, "Tercera fecha de fase de grupos");
  aJugar(B, jugadores, 1, 2, "Tercera fecha de fase de grupos");

  aJugar(D, jugadores, 0, 3, "Tercera fecha de fase de grupos");
  aJugar(D, jugadores, 1, 2, "Tercera fecha de fase de grupos");
  aJugar(C, jugadores, 0, 3, "Tercera fecha de fase de grupos");
  aJugar(C, jugadores, 1, 2, "Tercera fecha de fase de grupos");

  aJugar(F, jugadores, 0, 3, "Tercera fecha de fase de grupos");
  aJugar(F, jugadores, 1, 2, "Tercera fecha de fase de grupos");
  aJugar(E, jugadores, 0, 3, "Tercera fecha de fase de grupos");
  aJugar(E, jugadores, 1, 2, "Tercera fecha de fase de grupos");

  aJugar(H, jugadores, 0, 3, "Tercera fecha de fase de grupos");
  aJugar(H, jugadores, 1, 2, "Tercera fecha de fase de grupos");
  aJugar(G, jugadores, 0, 3, "Tercera fecha de fase de grupos");
  aJugar(G, jugadores, 1, 2, "Tercera fecha de fase de grupos");
  //TERCERA FECHA

  mayorGolesRealizados = reporteMasGolesRealizados(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mayorGolesRealizados
  );

  mayorGolesRecibidos = reporteMasGolesRecibidos(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mayorGolesRecibidos
  );

  mejorSaldoDeGoles = reporteMejorSaldoDeGoles(
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    mejorSaldoDeGoles
  );

  goleador = reporteGoleador(jugadores);

  A = faseDeOctasvos(A);
  B = faseDeOctasvos(B);
  C = faseDeOctasvos(C);
  D = faseDeOctasvos(D);
  E = faseDeOctasvos(E);
  F = faseDeOctasvos(F);
  G = faseDeOctasvos(G);
  H = faseDeOctasvos(H);

  h();

  let G49 = partidosDeEliminatoriasHastaSemi(
    A[0],
    B[1],
    jugadores,
    "Fase de octvos de final"
  );
  let G50 = partidosDeEliminatoriasHastaSemi(
    C[0],
    D[1],
    jugadores,
    "Fase de octvos de final"
  );
  let G51 = partidosDeEliminatoriasHastaSemi(
    D[0],
    C[1],
    jugadores,
    "Fase de octvos de final"
  );
  let G52 = partidosDeEliminatoriasHastaSemi(
    B[0],
    A[1],
    jugadores,
    "Fase de octvos de final"
  );
  let G53 = partidosDeEliminatoriasHastaSemi(
    E[0],
    F[1],
    jugadores,
    "Fase de octvos de final"
  );
  let G54 = partidosDeEliminatoriasHastaSemi(
    G[0],
    H[1],
    jugadores,
    "Fase de octvos de final"
  );
  let G55 = partidosDeEliminatoriasHastaSemi(
    F[0],
    E[1],
    jugadores,
    "Fase de octvos de final"
  );
  let G56 = partidosDeEliminatoriasHastaSemi(
    H[0],
    G[1],
    jugadores,
    "Fase de octvos de final"
  );

  mayorGolesRealizados = reporteMasGolesRealizados(
    G49,
    G50,
    G51,
    G52,
    G53,
    G54,
    G55,
    G56,
    mayorGolesRealizados
  );

  mayorGolesRecibidos = reporteMasGolesRecibidos(
    G49,
    G50,
    G51,
    G52,
    G53,
    G54,
    G55,
    G56,
    mayorGolesRecibidos
  );

  mejorSaldoDeGoles = reporteMejorSaldoDeGoles(
    G49,
    G50,
    G51,
    G52,
    G53,
    G54,
    G55,
    G56,
    mejorSaldoDeGoles
  );

  goleador = reporteGoleador(jugadores);

  h();

  let G58 = partidosDeEliminatoriasHastaSemi(
    G53[0],
    G54[0],
    jugadores,
    "Fase de cuartos de final"
  );
  let G57 = partidosDeEliminatoriasHastaSemi(
    G49[0],
    G50[0],
    jugadores,
    "Fase de cuartos de final"
  );
  let G60 = partidosDeEliminatoriasHastaSemi(
    G55[0],
    G56[0],
    jugadores,
    "Fase de cuartos de final"
  );
  let G59 = partidosDeEliminatoriasHastaSemi(
    G51[0],
    G52[0],
    jugadores,
    "Fase de cuartos de final"
  );

  mayorGolesRealizados = reporteMasGolesRealizadosCuartos(
    G58,
    G57,
    G60,
    G59,
    mayorGolesRealizados
  );

  mayorGolesRecibidos = reporteMasGolesRecibidosCuartos(
    G58,
    G57,
    G60,
    G59,
    mayorGolesRecibidos
  );

  mejorSaldoDeGoles = reporteMejorSaldoDeGolesCuartos(
    G58,
    G57,
    G60,
    G59,
    mejorSaldoDeGoles
  );

  goleador = reporteGoleador(jugadores);

  h();

  let G61 = partidosDeEliminatoriasHastaSemi(
    G57[0],
    G58[0],
    jugadores,
    "Fase de semi final"
  );
  let G62 = partidosDeEliminatoriasHastaSemi(
    G59[0],
    G60[0],
    jugadores,
    "Fase de semi final"
  );

  mayorGolesRealizados = reporteMasGolesRealizadosSemifinal(
    G61,
    G62,
    mayorGolesRealizados
  );

  mayorGolesRecibidos = reporteMasGolesRecibidosSemifinal(
    G61,
    G62,
    mayorGolesRecibidos
  );

  mejorSaldoDeGoles = reporteMejorSaldoDeGolesSemifinal(
    G61,
    G62,
    mejorSaldoDeGoles
  );

  goleador = reporteGoleador(jugadores);

  h();

  let malos = partidosDeEliminatoriasHastaSemi(
    G61[1],
    G62[1],
    jugadores,
    "Partido por el Tercer y Cuarto puesto"
  );
  let final = partidosDeEliminatoriasHastaSemi(
    G61[0],
    G62[0],
    jugadores,
    "Final"
  );

  mayorGolesRealizados = reporteMasGolesRealizadosSemifinal(
    malos,
    final,
    mayorGolesRealizados
  );

  mayorGolesRecibidos = reporteMasGolesRecibidosSemifinal(
    malos,
    final,
    mayorGolesRecibidos
  );

  mejorSaldoDeGoles = reporteMejorSaldoDeGolesSemifinal(
    malos,
    final,
    mejorSaldoDeGoles
  );

  goleador = reporteGoleador(jugadores);

  console.clear();

  console.log("Mundial 2022");
  h();
  console.log("Cuarto puesto del campeonato: " + malos[1]["nombre"]);
  h();
  console.log("Tercer puesto del campeonato: " + malos[0]["nombre"]);
  h();
  console.log("Segundo puesto del campeonato: " + final[1]["nombre"]);
  h();
  console.log("Primer puesto del campeonato: " + final[0]["nombre"]);
  h();
  console.log(
    "La selección con más goles realizados es: " +
      mayorGolesRealizados["nombre"]
  );
  h();
  console.log(
    "La selección con más goles recibidos es: " + mayorGolesRecibidos["nombre"]
  );
  h();
  console.log(
    "La selección con mejor saldo de goles es: " + mejorSaldoDeGoles["nombre"]
  );
  h();
  console.log("El goleador del campeonato es " + goleador);
  h();
}
//MAIN----------------------------------------------------------------------------------------------------------------------------------------------------------

main();

function h() {
  console.log("");
}

function nuevaSelecion(id, nombre, nacionalidad, continente, participaciones) {
  var nuevoPais = {};
  nuevoPais["id"] = id;
  nuevoPais["nombre"] = nombre;
  nuevoPais["nacionalidad"] = nacionalidad;
  nuevoPais["continente"] = continente;
  nuevoPais["participaciones"] = participaciones;
  nuevoPais["puntos"] = 0;
  nuevoPais["golesMetidos"] = 0;
  nuevoPais["golesEnContra"] = 0;
  nuevoPais["golesAFavor"] = 0;
  nuevoPais["faltas"] = 0;

  return nuevoPais;
}

function crearUsuario(selecion, nacionalidad, nombre, edad, altura, posicion) {
  var nuevoJugador = {};
  nuevoJugador["selecion"] = selecion;
  nuevoJugador["nacionalidad"] = nacionalidad;
  nuevoJugador["nombre"] = nombre;
  nuevoJugador["edad"] = edad;
  nuevoJugador["altura"] = altura;
  nuevoJugador["posicion"] = posicion;
  nuevoJugador["golesJugador"] = 0;

  return nuevoJugador;
}

function mostrarSeleciones(listaPaises) {
  listaPaises.forEach((pais) => {
    console.info(pais["id"] + " - " + pais["nombre"]);
  });
}

function verificarPosicion() {
  let posicionAVerificar = read("Ingrese la posicion del jugador: ");
  while (
    posicionAVerificar != "Portero" &&
    posicionAVerificar != "portero" &&
    posicionAVerificar != "Defensa central" &&
    posicionAVerificar != "defensa central" &&
    posicionAVerificar != "Lateral" &&
    posicionAVerificar != "lateral" &&
    posicionAVerificar != "Carrilero" &&
    posicionAVerificar != "carrilero" &&
    posicionAVerificar != "Líbero" &&
    posicionAVerificar != "líbero" &&
    posicionAVerificar != "Libre" &&
    posicionAVerificar != "libre" &&
    posicionAVerificar != "Pivote" &&
    posicionAVerificar != "pivote" &&
    posicionAVerificar != "Interior" &&
    posicionAVerificar != "interior" &&
    posicionAVerificar != "Media punta" &&
    posicionAVerificar != "media punta" &&
    posicionAVerificar != "Volante" &&
    posicionAVerificar != "volante" &&
    posicionAVerificar != "Extremo" &&
    posicionAVerificar != "extremo" &&
    posicionAVerificar != "Segundo delantero" &&
    posicionAVerificar != "segundo delantero" &&
    posicionAVerificar != "Delantero centro" &&
    posicionAVerificar != "delantero centro"
  ) {
    posicionAVerificar = read("Ingrese una posicion validad para el jugador: ");
  }
  return posicionAVerificar;
}

function mostrarPosiciones() {
  console.log("--Posiciones validas para los jugadores--");
  console.log("Portero");
  console.log("Defensa central");
  console.log("Lateral");
  console.log("Carrilero");
  console.log("Líbero o libre");
  console.log("Pivote");
  console.log("Interior");
  console.log("Media punta");
  console.log("Volante");
  console.log("Extremo");
  console.log("Segundo delantero");
  console.log("Delantero centro");
}

function validacionSelecion(listaSeleciones) {
  let selec = parseInt(read(""));
  while (selec < 1 || selec > listaSeleciones.length || isNaN(selec) === true) {
    console.log("Elija uno de los paises anteriormente ingresados");
    selec = parseInt(read(""));
  }
  return selec;
}

//GENERACIÓN DE LA FASE DE GRUPOS-----------------------------------------------------------------------------
function funcionNumerosAleatorios() {
  let listaNumeroAleatorio = [];
  for (let i = 0; i < 32; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 32 + 1);

    for (ii = 0; ii < listaNumeroAleatorio.length; ii++) {
      while (numeroAleatorio === listaNumeroAleatorio[ii]) {
        numeroAleatorio = Math.floor(Math.random() * 32 + 1);
        ii = 0;
      }
    }
    listaNumeroAleatorio.push(numeroAleatorio);
  }
  return listaNumeroAleatorio;
}

function armadoDeGrupos(numAleatorio, listaSeleciones) {
  let grupo = [];
  for (j = 0; j < 4; j++) {
    for (let i = 0; i < listaSeleciones.length; i++) {
      if (listaSeleciones[i]["id"] === numAleatorio[0]) {
        grupo.push(listaSeleciones[i]);
        numAleatorio.splice(0, 1);
        break;
      }
    }
  }
  return grupo;
}

function mostrarGrupos(grupos, nombreGrupo) {
  console.log("Grupo " + nombreGrupo);
  for (let i = 0; i < grupos.length; i++) {
    console.log(grupos[i]["nombre"]);
  }
  h();
}
//GENERACIÓN DE LA FASE DE GRUPOS-----------------------------------------------------------------------------

//MOSTRAR ENFRETAMIENTOS-----------------------------------------------------------------------------
function enfrentamientosPorGrupos1(grupo, nombreGrupo) {
  h();
  console.log("Primera fecha: " + "Grupo " + nombreGrupo);
  console.log(grupo[2]["nombre"] + " VS " + grupo[3]["nombre"]);
  console.log(grupo[0]["nombre"] + " VS " + grupo[1]["nombre"]);
}

function enfrentamientosPorGrupos2(grupo, nombreGrupo) {
  h();
  console.log("Segunda fecha: " + "Grupo " + nombreGrupo);
  console.log(grupo[1]["nombre"] + " VS " + grupo[3]["nombre"]);
  console.log(grupo[0]["nombre"] + " VS " + grupo[2]["nombre"]);
}

function enfrentamientosPorGrupos3(grupo, nombreGrupo) {
  h();
  console.log("Tercera fecha: " + "Grupo " + nombreGrupo);
  console.log(grupo[0]["nombre"] + " VS " + grupo[3]["nombre"]);
  console.log(grupo[1]["nombre"] + " VS " + grupo[2]["nombre"]);
}

//MOSTRAR ENFRETAMIENTOS-----------------------------------------------------------------------------

//AL MENOS UN JUGADOR--------------------------------------------------------------------------------
function validarJugadores(equipos, jugadores) {
  let validar = false;
  for (let i = 0; i < equipos.length; i++) {
    for (let ii = 0; ii < jugadores.length; ii++) {
      if (equipos[i]["id"] === jugadores[ii]["selecion"]) {
        validar = true;
        break;
      }
    }
    if (validar === false) {
      return validar;
    }
  }
  return validar;
}
//AL MENOS UN JUGADOR-------------------------------------------------------------------------------

//REALIZACION DE LOS ENFRENTAMIENTOS DE FASE DE GRUPOS--------------------------------------------------------------------------------------------------------------------------------------------------------
function aJugar(grupo, jugadores, indiceSeleccion1, indiceSeleccion2, fase) {
  console.clear();
  console.log(fase);

  h();

  let golesSeleccion1 = parseInt(
    read(
      "Ingrese los goles realizados por la selcción de " +
        grupo[indiceSeleccion1]["nombre"] +
        ": "
    )
  );

  golesSeleccion1 = validarDatos(golesSeleccion1);

  let golesSeleccion2 = parseInt(
    read(
      "Ingrese los goles realizados por la selcción de " +
        grupo[indiceSeleccion2]["nombre"] +
        ": "
    )
  );

  golesSeleccion2 = validarDatos(golesSeleccion2);

  //DATOS: GOLES Y PUNTOS-----------------------------------------------------------------------------
  if (golesSeleccion1 > golesSeleccion2) {
    //PUNTOS EQUIPO 1
    grupo[indiceSeleccion1]["puntos"] = grupo[indiceSeleccion1]["puntos"] + 3;
    //PUNTOS EQUIPO 1
    //GOLES EQUIPO 1
    grupo[indiceSeleccion1]["golesMetidos"] =
      grupo[indiceSeleccion1]["golesMetidos"] + golesSeleccion1;
    grupo[indiceSeleccion1]["golesEnContra"] =
      grupo[indiceSeleccion1]["golesEnContra"] + golesSeleccion2;
    grupo[indiceSeleccion1]["golesAFavor"] =
      grupo[indiceSeleccion1]["golesAFavor"] +
      (golesSeleccion1 - golesSeleccion2);
    //GOLES EQUIPO 1
    //GOLES EQUIPO 2
    grupo[indiceSeleccion2]["golesMetidos"] =
      grupo[indiceSeleccion2]["golesMetidos"] + golesSeleccion2;
    grupo[indiceSeleccion2]["golesEnContra"] =
      grupo[indiceSeleccion2]["golesEnContra"] + golesSeleccion1;
    grupo[indiceSeleccion2]["golesAFavor"] =
      grupo[indiceSeleccion2]["golesAFavor"] +
      (golesSeleccion2 - golesSeleccion1);
    //GOLES EQUIPO 2
  } else if (golesSeleccion1 < golesSeleccion2) {
    //PUNTOS EQUIPO 2
    grupo[indiceSeleccion2]["puntos"] = grupo[indiceSeleccion2]["puntos"] + 3;
    //PUNTOS EQUIPO 2
    //GOLES EQUIPO 2
    grupo[indiceSeleccion2]["golesMetidos"] =
      grupo[indiceSeleccion2]["golesMetidos"] + golesSeleccion2;
    grupo[indiceSeleccion2]["golesEnContra"] =
      grupo[indiceSeleccion2]["golesEnContra"] + golesSeleccion1;
    grupo[indiceSeleccion2]["golesAFavor"] =
      grupo[indiceSeleccion2]["golesAFavor"] +
      (golesSeleccion2 - golesSeleccion1);
    //GOLES EQUIPO 2
    //GOLES EQUIPO 1
    grupo[indiceSeleccion1]["golesMetidos"] =
      grupo[indiceSeleccion1]["golesMetidos"] + golesSeleccion1;
    grupo[indiceSeleccion1]["golesEnContra"] =
      grupo[indiceSeleccion1]["golesEnContra"] + golesSeleccion2;
    grupo[indiceSeleccion1]["golesAFavor"] =
      grupo[indiceSeleccion1]["golesAFavor"] +
      (golesSeleccion1 - golesSeleccion2);
    //GOLES EQUIPO 1
  } else {
    //PUNTOS EQUIPOS 1 Y 2
    grupo[indiceSeleccion1]["puntos"] = grupo[indiceSeleccion1]["puntos"] + 1;
    grupo[indiceSeleccion2]["puntos"] = grupo[indiceSeleccion2]["puntos"] + 1;
    //PUNTOS EQUIPOS 1 Y 2
    //GOLES EQUIPO 1
    grupo[indiceSeleccion1]["golesMetidos"] =
      grupo[indiceSeleccion1]["golesMetidos"] + golesSeleccion1;
    grupo[indiceSeleccion1]["golesEnContra"] =
      grupo[indiceSeleccion1]["golesEnContra"] + golesSeleccion2;
    grupo[indiceSeleccion1]["golesAFavor"] =
      grupo[indiceSeleccion1]["golesAFavor"] +
      (golesSeleccion1 - golesSeleccion2);
    //GOLES EQUIPO 1
    //GOLES EQUIPO 2
    grupo[indiceSeleccion2]["golesMetidos"] =
      grupo[indiceSeleccion2]["golesMetidos"] + golesSeleccion2;
    grupo[indiceSeleccion2]["golesEnContra"] =
      grupo[indiceSeleccion2]["golesEnContra"] + golesSeleccion1;
    grupo[indiceSeleccion2]["golesAFavor"] =
      grupo[indiceSeleccion2]["golesAFavor"] +
      (golesSeleccion2 - golesSeleccion1);
    //GOLES EQUIPO 2
  }
  //DATOS: GOLES Y PUNTOS-------------------------------------------------------------------------

  //DATOS: GOLES POR JUGADOR----------------------------------------------------------------------
  if (golesSeleccion1 > 0 || golesSeleccion2 > 0) {
    console.log(
      "Ingrese el nombre de los jugadores que han realizado los goles"
    );
  }

  if (golesSeleccion1 > 0) {
    h();
    let listaJugadoresAux = [];
    console.log(
      "Los jugadores que pertenecen a la seleccion " +
        grupo[indiceSeleccion1]["nombre"] +
        " son: "
    );
    for (let i = 0; i < jugadores.length; i++) {
      if (grupo[indiceSeleccion1]["id"] === jugadores[i]["selecion"]) {
        console.log(jugadores[i]["nombre"]);
        listaJugadoresAux.push(jugadores[i]["nombre"]);
      }
    }
    h();
    for (let i = 0; i < golesSeleccion1; i++) {
      let jugadorGol = read("Jugador: ");
      let aux = false;
      while (aux === false) {
        for (let ii = 0; ii < listaJugadoresAux.length; ii++) {
          if (jugadorGol === listaJugadoresAux[ii]) {
            aux = true;
            break;
          }
        }
        if (aux === false) {
          h();
          jugadorGol = read(
            "Elija un jugador que pertenezca a esta seleccion: "
          );
        }
      }

      for (let ii = 0; ii < jugadores.length; ii++) {
        if (jugadorGol === jugadores[ii]["nombre"]) {
          jugadores[ii]["golesJugador"] = jugadores[ii]["golesJugador"] + 1;
        }
      }
    }
  }

  if (golesSeleccion2 > 0) {
    h();
    let listaJugadoresAux = [];
    console.log(
      "Los jugadores que pertenecen a la seleccion " +
        grupo[indiceSeleccion2]["nombre"] +
        " son: "
    );
    for (let i = 0; i < jugadores.length; i++) {
      if (grupo[indiceSeleccion2]["id"] === jugadores[i]["selecion"]) {
        console.log(jugadores[i]["nombre"]);
        listaJugadoresAux.push(jugadores[i]["nombre"]);
      }
    }
    h();
    for (let i = 0; i < golesSeleccion2; i++) {
      let jugadorGol = read("Jugador: ");
      let aux = false;
      while (aux === false) {
        for (let ii = 0; ii < listaJugadoresAux.length; ii++) {
          if (jugadorGol === listaJugadoresAux[ii]) {
            aux = true;
            break;
          }
        }
        if (aux === false) {
          jugadorGol = read(
            "Elija un jugador que pertenezca a esta seleccion: "
          );
        }
      }

      for (let ii = 0; ii < jugadores.length; ii++) {
        if (jugadorGol === jugadores[ii]["nombre"]) {
          jugadores[ii]["golesJugador"] = jugadores[ii]["golesJugador"] + 1;
        }
      }
    }
  }
  //DATOS: GOLES POR JUGADOR----------------------------------------------------------------------

  //DATOS: FALTAS POR EQUIPO--------------------------------------------------------------------------------------
  h();
  let faltasSeleccion1 = parseInt(
    read(
      "Ingrese cuantas faltas realizo la selección de " +
        grupo[indiceSeleccion1]["nombre"] +
        ": "
    )
  );

  faltasSeleccion1 = validarDatos(faltasSeleccion1);

  let faltasSeleccion2 = parseInt(
    read(
      "Ingrese cuantas faltas realizo la selección de " +
        grupo[indiceSeleccion2]["nombre"] +
        ": "
    )
  );

  faltasSeleccion2 = validarDatos(faltasSeleccion2);

  if (faltasSeleccion1 > 0) {
    grupo[indiceSeleccion1]["faltas"] =
      grupo[indiceSeleccion1]["faltas"] + faltasSeleccion1;
  }

  if (faltasSeleccion2 > 0) {
    grupo[indiceSeleccion2]["faltas"] =
      grupo[indiceSeleccion2]["faltas"] + faltasSeleccion2;
  }
  //DATOS: FALTAS POR EQUIPO--------------------------------------------------------------------------------------
}

//VALIDACION DE DATOS---------------------------------------------------------------------------------------------
function validarDatos(dato) {
  h();
  let datoVerificado;
  while (isNaN(dato) === true || dato < 0 || dato === undefined) {
    h();
    dato = parseInt(
      read(
        "Ingrese un dato valido para este campo (un número igual o mayor a 0): "
      )
    );
    h();
  }
  datoVerificado = dato;
  return datoVerificado;
}
//VALIDACION DE DATOS----------------------------------------------------------------------------------------------
//REALIZACION DE LOS ENFRENTAMIENTOS DE FASE DE GRUPOS-------------------------------------------------------------------------------------------------------------------------------------------------

//REPORTES------------------------------------------------------------------------------------------------------------------
//FASE DE GRUPOS--
function reporteMasGolesRealizados(A, B, C, D, E, F, G, H, reporteAnterior) {
  let equipos = A.concat(B, C, D, E, F, G, H);
  let mayor = reporteAnterior["golesMetidos"];
  let equipoMayorGolesRealizados = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesMetidos"] > mayor) {
      mayor = equipos[i]["golesMetidos"];
      equipoMayorGolesRealizados = {
        nombre: equipos[i]["nombre"],
        golesMetidos: equipos[i]["golesMetidos"],
      };
    }
  }
  return equipoMayorGolesRealizados;
}

function reporteMasGolesRecibidos(A, B, C, D, E, F, G, H, reporteAnterior) {
  let equipos = A.concat(B, C, D, E, F, G, H);
  let mayor = reporteAnterior["golesEnContra"];
  let equipoMayorGolesRecibidos = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesEnContra"] > mayor) {
      mayor = equipos[i]["golesEnContra"];
      equipoMayorGolesRecibidos = {
        nombre: equipos[i]["nombre"],
        golesEnContra: equipos[i]["golesEnContra"],
      };
    }
  }
  return equipoMayorGolesRecibidos;
}

function reporteMejorSaldoDeGoles(A, B, C, D, E, F, G, H, reporteAnterior) {
  let equipos = A.concat(B, C, D, E, F, G, H);
  let mayor = reporteAnterior["golesAFavor"];
  let equipoMejorSaldoDeGoles = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesAFavor"] > mayor) {
      mayor = equipos[i]["golesAFavor"];
      equipoMejorSaldoDeGoles = {
        nombre: equipos[i]["nombre"],
        golesAFavor: equipos[i]["golesAFavor"],
      };
    }
  }
  return equipoMejorSaldoDeGoles;
}

function reporteGoleador(jugador) {
  let mayor = 0;
  let nombreDelGoleador;
  for (let i = 0; i < jugador.length; i++) {
    if (jugador[i]["golesJugador"] > mayor) {
      mayor = jugador[i]["golesJugador"];
      nombreDelGoleador = jugador[i]["nombre"];
    }
  }
  return nombreDelGoleador;
}
//FASE DE GRUPOS---

//CUARTOS---
function reporteMasGolesRealizadosCuartos(A, B, C, D, reporteAnterior) {
  let equipos = A.concat(B, C, D);
  let mayor = reporteAnterior["golesMetidos"];
  let equipoMayorGolesRealizados = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesMetidos"] > mayor) {
      mayor = equipos[i]["golesMetidos"];
      equipoMayorGolesRealizados = {
        nombre: equipos[i]["nombre"],
        golesMetidos: equipos[i]["golesMetidos"],
      };
    }
  }
  return equipoMayorGolesRealizados;
}

function reporteMasGolesRecibidosCuartos(A, B, C, D, reporteAnterior) {
  let equipos = A.concat(B, C, D);
  let mayor = reporteAnterior["golesEnContra"];
  let equipoMayorGolesRecibidos = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesEnContra"] > mayor) {
      mayor = equipos[i]["golesEnContra"];
      equipoMayorGolesRecibidos = {
        nombre: equipos[i]["nombre"],
        golesEnContra: equipos[i]["golesEnContra"],
      };
    }
  }
  return equipoMayorGolesRecibidos;
}

function reporteMejorSaldoDeGolesCuartos(A, B, C, D, reporteAnterior) {
  let equipos = A.concat(B, C, D);
  let mayor = reporteAnterior["golesEnContra"];
  let equipoMejorSaldoDeGoles = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesAFavor"] > mayor) {
      mayor = equipos[i]["golesAFavor"];
      equipoMejorSaldoDeGoles = {
        nombre: equipos[i]["nombre"],
        golesAFavor: equipos[i]["golesAFavor"],
      };
    }
  }
  return equipoMejorSaldoDeGoles;
}
//CUARTOS---

//SEMIFINAL---
function reporteMasGolesRealizadosSemifinal(A, B, reporteAnterior) {
  let equipos = A.concat(B);
  let mayor = reporteAnterior["golesMetidos"];
  let equipoMayorGolesRealizados = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesMetidos"] > mayor) {
      mayor = equipos[i]["golesMetidos"];
      equipoMayorGolesRealizados = {
        nombre: equipos[i]["nombre"],
        golesMetidos: equipos[i]["golesMetidos"],
      };
    }
  }
  return equipoMayorGolesRealizados;
}

function reporteMasGolesRecibidosSemifinal(A, B, reporteAnterior) {
  let equipos = A.concat(B);
  let mayor = reporteAnterior["golesEnContra"];
  let equipoMayorGolesRecibidos = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesEnContra"] > mayor) {
      mayor = equipos[i]["golesEnContra"];
      equipoMayorGolesRecibidos = {
        nombre: equipos[i]["nombre"],
        golesEnContra: equipos[i]["golesEnContra"],
      };
    }
  }
  return equipoMayorGolesRecibidos;
}

function reporteMejorSaldoDeGolesSemifinal(A, B, reporteAnterior) {
  let equipos = A.concat(B);
  let mayor = reporteAnterior["golesEnContra"];
  let equipoMejorSaldoDeGoles = reporteAnterior;
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i]["golesAFavor"] > mayor) {
      mayor = equipos[i]["golesAFavor"];
      equipoMejorSaldoDeGoles = {
        nombre: equipos[i]["nombre"],
        golesAFavor: equipos[i]["golesAFavor"],
      };
    }
  }
  return equipoMejorSaldoDeGoles;
}
//SEMIFINAL---
//REPORTES------------------------------------------------------------------------------------------------------------------

//PASAJE A OCTAVOS DE FINAL-----------------------------------------------------------------------------------------
function faseDeOctasvos(grupo) {
  let grupoDeOctavos = [];
  let puntosIguales = [];
  let golesAFavorIguales = [];
  let faltasIguales = [];
  for (let v = 0; v < 2; v++) {
    let mayorPuntos = 0;
    let mayorGolesAFavor = 0;
    let menosFaltas = 100000;

    for (let i = 0; i < grupo.length; i++) {
      if (grupo[i]["puntos"] > mayorPuntos) {
        mayorPuntos = grupo[i]["puntos"];
      }
    }

    for (let i = 0; i < grupo.length; i++) {
      if (grupo[i]["puntos"] === mayorPuntos) {
        puntosIguales.push(grupo[i]);
      }
    }

    if (puntosIguales.length === 1) {
      grupoDeOctavos.push(puntosIguales[0]);
      for (let i = 0; i < grupo.length; i++) {
        if (puntosIguales[0]["id"] === grupo[i]["id"]) {
          grupo.splice(i, 1);
        }
      }
      puntosIguales.splice(0, 1);
    } else {
      for (let i = 0; i < puntosIguales.length; i++) {
        if (puntosIguales[i]["golesAFavor"] > mayorGolesAFavor) {
          mayorGolesAFavor = puntosIguales[i]["golesAFavor"];
        }
      }

      for (let i = 0; i < puntosIguales.length; i++) {
        if (puntosIguales[i]["golesAFavor"] === mayorGolesAFavor) {
          golesAFavorIguales.push(puntosIguales[i]);
          puntosIguales.splice(i, 1);
          i--;
        }
      }
      if (golesAFavorIguales.length === 1) {
        grupoDeOctavos.push(golesAFavorIguales[0]);
        for (let i = 0; i < grupo.length; i++) {
          if (golesAFavorIguales[0]["id"] === grupo[i]["id"]) {
            grupo.splice(i, 1);
          }
        }
        golesAFavorIguales.splice(0, 1);
      } else {
        for (let i = 0; i < golesAFavorIguales.length; i++) {
          if (golesAFavorIguales[i]["faltas"] < menosFaltas) {
            menosFaltas = golesAFavorIguales[i]["faltas"];
          }
        }

        for (let i = 0; i < golesAFavorIguales.length; i++) {
          if (golesAFavorIguales[i]["faltas"] === menosFaltas) {
            faltasIguales.push(golesAFavorIguales[i]);
            golesAFavorIguales.splice(i, 1);
            i--;
          }
        }

        if (faltasIguales.length === 1) {
          grupoDeOctavos.push(faltasIguales[0]);
        } else {
          grupoDeOctavos.push(faltasIguales[1]);
        }
      }
    }
    faltasIguales.splice(0, 1);
  }

  return grupoDeOctavos;
}
//PASAJE A OCTAVOS DE FINAL-----------------------------------------------------------------------------------------

//GESTION PARTIDOS DE ELIMINATORIAS--------------------------------------------------------------------------------

function partidosDeEliminatoriasHastaSemi(
  seleccion1,
  seleccion2,
  jugadores,
  fase
) {
  console.clear();
  console.log(fase);

  h();

  let ganador = [];
  let golesSeleccion2 = -1;
  let golesSeleccion1 = parseInt(
    read(
      "Ingrese los goles realizados por la selcción de " +
        seleccion1["nombre"] +
        ": "
    )
  );

  golesSeleccion1 = validacionDeGolesDePartidosDeEliminatorias(
    golesSeleccion1,
    golesSeleccion2
  );

  golesSeleccion2 = parseInt(
    read(
      "Ingrese los goles realizados por la selcción de " +
        seleccion2["nombre"] +
        ": "
    )
  );

  golesSeleccion2 = validacionDeGolesDePartidosDeEliminatorias(
    golesSeleccion2,
    golesSeleccion1
  );

  //DATOS: GOLES Y PUNTOS-----------------------------------------------------------------------------
  if (golesSeleccion1 > golesSeleccion2) {
    //GOLES EQUIPO 1
    seleccion1["golesMetidos"] = seleccion1["golesMetidos"] + golesSeleccion1;
    seleccion1["golesEnContra"] = seleccion1["golesEnContra"] + golesSeleccion2;
    seleccion1["golesAFavor"] =
      seleccion1["golesAFavor"] + (golesSeleccion1 - golesSeleccion2);
    //GOLES EQUIPO 1
    //GOLES EQUIPO 2
    seleccion2["golesMetidos"] = seleccion2["golesMetidos"] + golesSeleccion2;
    seleccion2["golesEnContra"] = seleccion2["golesEnContra"] + golesSeleccion1;
    seleccion2["golesAFavor"] =
      seleccion2["golesAFavor"] + (golesSeleccion2 - golesSeleccion1);
    //GOLES EQUIPO 2
    ganador.push(seleccion1);
    ganador.push(seleccion2);
  } else if (golesSeleccion1 < golesSeleccion2) {
    //GOLES EQUIPO 2
    seleccion2["golesMetidos"] = seleccion2["golesMetidos"] + golesSeleccion2;
    seleccion2["golesEnContra"] = seleccion2["golesEnContra"] + golesSeleccion1;
    seleccion2["golesAFavor"] =
      seleccion2["golesAFavor"] + (golesSeleccion2 - golesSeleccion1);
    //GOLES EQUIPO 2
    //GOLES EQUIPO 1
    seleccion1["golesMetidos"] = seleccion1["golesMetidos"] + golesSeleccion1;
    seleccion1["golesEnContra"] = seleccion1["golesEnContra"] + golesSeleccion2;
    seleccion1["golesAFavor"] =
      seleccion1["golesAFavor"] + (golesSeleccion1 - golesSeleccion2);
    //GOLES EQUIPO 1
    ganador.push(seleccion2);
    ganador.push(seleccion1);
  }
  //DATOS: GOLES Y PUNTOS-------------------------------------------------------------------------

  //DATOS: GOLES POR JUGADOR----------------------------------------------------------------------
  if (golesSeleccion1 > 0 || golesSeleccion2 > 0) {
    console.log(
      "Ingrese el nombre de los jugadores que han realizado los goles"
    );
  }

  if (golesSeleccion1 > 0) {
    h();
    let listaJugadoresAux = [];
    console.log(
      "Los jugadores que pertenecen a la seleccion " +
        seleccion1["nombre"] +
        " son: "
    );
    for (let i = 0; i < jugadores.length; i++) {
      if (seleccion1["id"] === jugadores[i]["selecion"]) {
        console.log(jugadores[i]["nombre"]);
        listaJugadoresAux.push(jugadores[i]["nombre"]);
      }
    }

    for (let i = 0; i < golesSeleccion1; i++) {
      h();
      let jugadorGol = read("Jugador: ");
      let aux = false;
      while (aux === false) {
        for (let ii = 0; ii < listaJugadoresAux.length; ii++) {
          if (jugadorGol === listaJugadoresAux[ii]) {
            aux = true;
            break;
          }
        }
        if (aux === false) {
          h();
          jugadorGol = read(
            "Elija un jugador que pertenezca a esta seleccion: "
          );
        }
      }

      for (let ii = 0; ii < jugadores.length; ii++) {
        if (jugadorGol === jugadores[ii]["nombre"]) {
          jugadores[ii]["golesJugador"] = jugadores[ii]["golesJugador"] + 1;
        }
      }
    }
  }

  if (golesSeleccion2 > 0) {
    h();
    let listaJugadoresAux = [];
    console.log(
      "Los jugadores que pertenecen a la seleccion " +
        seleccion2["nombre"] +
        " son: "
    );
    for (let i = 0; i < jugadores.length; i++) {
      if (seleccion2["id"] === jugadores[i]["selecion"]) {
        console.log(jugadores[i]["nombre"]);
        listaJugadoresAux.push(jugadores[i]["nombre"]);
      }
    }
    h();
    for (let i = 0; i < golesSeleccion2; i++) {
      let jugadorGol = read("Jugador: ");
      let aux = false;
      while (aux === false) {
        for (let ii = 0; ii < listaJugadoresAux.length; ii++) {
          if (jugadorGol === listaJugadoresAux[ii]) {
            aux = true;
            break;
          }
        }
        if (aux === false) {
          jugadorGol = read(
            "Elija un jugador que pertenezca a esta seleccion: "
          );
        }
      }

      for (let ii = 0; ii < jugadores.length; ii++) {
        if (jugadorGol === jugadores[ii]["nombre"]) {
          jugadores[ii]["golesJugador"] = jugadores[ii]["golesJugador"] + 1;
        }
      }
    }
  }
  //DATOS: GOLES POR JUGADOR----------------------------------------------------------------------

  //DATOS: FALTAS POR EQUIPO--------------------------------------------------------------------------------------
  h();
  let faltasSeleccion1 = parseInt(
    read(
      "Ingrese cuantas faltas realizo la selección de " +
        seleccion1["nombre"] +
        ": "
    )
  );

  faltasSeleccion1 = validarDatos(faltasSeleccion1);
  let faltasSeleccion2 = parseInt(
    read(
      "Ingrese cuantas faltas realizo la selección de " +
        seleccion2["nombre"] +
        ": "
    )
  );

  faltasSeleccion2 = validarDatos(faltasSeleccion2);

  if (faltasSeleccion1 > 0) {
    seleccion1["faltas"] = seleccion1["faltas"] + faltasSeleccion1;
  }

  if (faltasSeleccion2 > 0) {
    seleccion2["faltas"] = seleccion2["faltas"] + faltasSeleccion2;
  }
  //DATOS: FALTAS POR EQUIPO--------------------------------------------------------------------------------------

  return ganador;
}
//VALIDAR PARTIDOS DE ELIMINATORIAS--------------------------------------------------------------------------------------------------------
function validacionDeGolesDePartidosDeEliminatorias(dato1, dato2) {
  h();
  let datoVerificado;
  while (
    isNaN(dato1) === true ||
    dato1 < 0 ||
    dato1 === undefined ||
    dato1 === dato2
  ) {
    dato1 = parseInt(
      read(
        "Ingrese un dato valido para este campo (un número igual o mayor a 0, y recuerde que en eliminatorias no hay empates): "
      )
    );
  }
  datoVerificado = dato1;

  return datoVerificado;
}
//VALIDAR PARTIDOS DE ELIMINATORIAS--------------------------------------------------------------------------------------------------------
//GESTION PARTIDOS DE ELIMINATORIAS--------------------------------------------------------------------------------