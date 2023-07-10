function obtenerJugadaComputadora() {
    let jugada = ['piedra', 'papel', 'tijeras'];
    let numAleatorio = Math.floor(Math.random()*3);
    return jugada[numAleatorio];
  }


  const readline = require('readline-sync');

  function obtenerJugadaUsuario() {
    
    let jugada;
     jugada = readline.question('Ingresa tu jugada (piedra, papel o tijeras):');   
     if (jugada === "piedra" || jugada === "papel" || jugada === "tijeras") {
      return jugada;
    } else {
      console.log('Elección inválida.');
      return obtenerJugadaUsuario();
    }
  }


  function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
      return 'Empate';
    } else if (
      (jugadaComputadora === 'piedra' && jugadaUsuario === 'tijeras') ||
      (jugadaComputadora === 'papel' && jugadaUsuario === 'piedra') ||
      (jugadaComputadora === 'tijeras' && jugadaUsuario === 'papel')
    ) {
      return 'Gana la computadora';
    } else {
      return 'Gana el usuario';
    }
  }

 let jugadaComputadora = obtenerJugadaComputadora();
 let jugadaUsuario = obtenerJugadaUsuario();
 let final= determinarGanador(jugadaComputadora, jugadaUsuario);
  
  console.log('La computadora eligió:',jugadaComputadora,'. El usuario eligió:',jugadaUsuario,'. El resultado fue:',final,'.');  