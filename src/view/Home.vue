<template>
<div class="container">

  <br>
  <div class="center-align">
    <img  src="../assets/gear.png">
  </div>
  <hr class="amber darken-2">
  <h5 class="center-align blue-text text-darken-4">Lenguajes, Compiladores e Interpretes</h5>

  <div class="row">
    <edu-card :card='cardlex'></edu-card>

    <edu-card :card='cardscanner'></edu-card>
      
    </div>  
</div>
</template>

<script>
  export default{
    data(){
      return {
    text:{
      lexicTittle: 'Analisis Lexico',
      lexicDescription: 'Descripcion 1',
      go: 'Ir',
      help: 'Ayuda',
      scannerTittle: 'Analisis sintactico',
      scannerDescription: 'Descripcion 2'

    },
    cardlex:{
      tittle : 'Analisis Lexico X',
      description : 'Descripcion 1',
      go: 'Ir',
      golink: '/lex',
      help: 'Ayuda',
      gohelp:'#'
    },
    cardscanner:{
      tittle : 'Analisis Sintactico X',
      description : 'Descripcion 2',
      go: 'Ir',
      golink: '/scanner',
      help: 'Ayuda',
      gohelp:'#'
    }
  }
    }
  }
</script>
