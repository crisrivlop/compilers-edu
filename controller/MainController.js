'use strict';

(function() {
  'use strict';
  var app = new Vue({
    el: '#app',
    components: 'App',
    data : {
      message : 'hello world!',
      bind: "hello",
      text : {
        help: "ayuda",
        go : "ir",
        lexicTittle: "Analisis lexico",
        lexicDescription: "blabla blabla",
        scannerTittle: "Analisis Sintactico",
        scannerDescription: "lorem ipsum"        
      }
    }

  });
}());
