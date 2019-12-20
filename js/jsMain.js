    var datos_matriz;
   

    //Declaración del array de 10 posiciones
    var fila,column;


    //arrayDatosEcuaciones=[3,2,0,1,0,0,60,
                        //   -1,1,4,0,1,0,10,
                        //   2,-2,5,0,0,1,50,
                        //   -2,-3,-3,0,0,0,0
                      
                        // ];

       arrayDatosEcuaciones=[2,1,1,0,0,18,
                             2,3,0,1,0,42,
                             3,1,0,0,1,24,
                             -3,-2,0,0,0,0

       ];

      //     arrayDatosEcuaciones=[1,0,0,2,-1,10,
      //                           0,1,0,-1,-5,20,
      //                           0,0,1,6,-12,18,
      //                           0,0,0,-2,3,60
                             
      //  ];


    var a = new Array(); // crea una matriz de longitud 4


    console.log(arrayDatosEcuaciones.length);


    $("#idFormulario").on('submit',function(e){
      e.preventDefault();//no saltar la pagina
      datos_matriz=$(this).serializeArray();//recolecto los datos de los imput fila y columas
      //console.log(datos_matriz);
      fila=parseInt(datos_matriz[0].value, 10);
      column=parseInt(datos_matriz[1].value,10);

      //==================================A. Crear la matriz inicial=====================//
      //==================================A. Crear la matriz inicial=====================//
      //==================================A. Crear la matriz inicial=====================//
      var MatrizEcuaciones;
      contador=0;

     

        for (var i = 0; i < fila; i++) {
          a[i] = new Array(fila); // define cada elemento como una matriz de longitud 4
          for (var j = 0; j < column; j++) {

                a[i][j] =arrayDatosEcuaciones[contador];

                contador++;
          }

        }
        MatrizEcuaciones= math.matrix(a);
        console.log("\n 1.) ============================LA MATRIZ INICIAL ES : \n"+MatrizEcuaciones);

        var banderaEjercicio=false;
        var contadorEjercicio=0;
        var varibaleDesicionNegativa=true;
        var min,indiceColumna,baoleanNumNegativo,varDesicion,ColumnaPibote,
            arrayCalculoRazon,variableFila,nuevaFilaPibote,stringOperacion,
            numeros=[];

        
        while(  varibaleDesicionNegativa==true){

            console.log("\n 2.) ========================BUSCAR EN LA F.O LA VARIABLE DE DESICION");
                varDesicion=variableDecision(MatrizEcuaciones.valueOf()[(fila-1)]);
                //obtengo los datos del array respuesta
                min=varDesicion.NumeroMenor;
                indiceColumna=varDesicion.Indice;
                baoleanNumNegativo=varDesicion.EstadoNumero;

                //si la variable de descion es negativa sigue ejecutandfo el programa//
                varibaleDesicionNegativa=baoleanNumNegativo;

               

            
                console.log("2.1 VaribaleDesicionNegativa",varibaleDesicionNegativa);
                console.log('2.2 De la F.O selecionamos el numero menor [ '+min+" ] esta en posicion : ["+indiceColumna +" ] . Es Negativo el numero ? : "+baoleanNumNegativo);
    
          console.log("\n 3.) ================ENCONTRAMOS LA COLUMNA PIBOTE");
                console.log("3. 1 La columna pibote es : "+columbaPivote(MatrizEcuaciones,indiceColumna) );
                ColumnaPibote=columbaPivote(MatrizEcuaciones,indiceColumna);
                //console.log(ColumnaPibote);
    
          console.log("\n 4.) ================Econtramos la Razon de la ColumnaPibote");

                arrayCalculoRazon=calculoRazon(MatrizEcuaciones,ColumnaPibote);
                //console.log(arrayCalculoRazon);
                console.log("4.1 Razon= ValorSolucion/columnaPibote",arrayCalculoRazon.arrayRazonDividir);
                console.log("4.2 Valor Minimo de la razon (No se toma valor negativo) : ",arrayCalculoRazon.valorMinimoRazon);
                console.log("4.2 La ubicacion de este valor en la matriz corresponde a la fila: ",arrayCalculoRazon.indicePosicionFila);
                console.log("4.3 La Razon Obtendida es Positiva? : ",arrayCalculoRazon.booleanRazonPositivo);
                console.log("4.4 Por lo tanto la Variable de Holgura esta ubicada en la Posision de la matriz :["+
                                                        arrayCalculoRazon.indicePosicionFila+"]"+
                                                  "["+indiceColumna+"] =  Su valor es : "+MatrizEcuaciones.valueOf()[arrayCalculoRazon.indicePosicionFila][indiceColumna]);
            
  
          console.log("\n 5.) ====================HACEMOS QUE LA VARIABLE DE HOLGURA SE HAGA UNO con su repectiva ubicacion de su Fila en la Matriz ");
                variableFila=MatrizEcuaciones.valueOf()[arrayCalculoRazon.indicePosicionFila][indiceColumna];//(fila de la razon,columnaVaribaleHolgura)
                nuevaFilaPibote=calculoNuevaFilaPovote(arrayCalculoRazon.indicePosicionFila,MatrizEcuaciones.size()[0],
                                                                                            MatrizEcuaciones.size()[1],
                                                                                            MatrizEcuaciones,
                                                                                            variableFila      );//envion el indice de la posicion, el tamaño de las fila, tamño de la columna matriz
                console.log("5.1) Vieja FilaPibote :",nuevaFilaPibote.arrayAntigiaFilaPibote);
                console.log("5.2 Procedimiento de como se hizo 1 la fila pibote :" ,nuevaFilaPibote.arrayProcedimientoFilPibote);
                console.log("5.3 Encontramos la nueva FilaPibote = FilaPibote/variableHolgura",nuevaFilaPibote.arrayNuevaFilaPibote);
                //console.log(nuevaFilaPibote);
    

          console.log("\n 6.) ====================Ahora la Matriz se actualiza con Nueva Fila Pibote ");
                      MatrizEcuaciones.valueOf()[arrayCalculoRazon.indicePosicionFila]=nuevaFilaPibote.arrayNuevaFilaPibote;//actualizo la mtatriz
                      console.log("6.1 La matriz Incial Fue : \n"+MatrizEcuaciones);
                      console.log("6.1 La matriz Actualizada con la Fila Pibote es: \n"+MatrizEcuaciones);
    
    
          console.log("\n 7.) =========================APlicamos Gaus Para que la variable Basica sea unica en la matriz y las demas sean ceros[top][button]\nReglonFila[top] 0 [botton] *ReglonFilPobote)*ReglonFila = -2 R2* R1");
  
                      arrayAntigiaFila=new Array();
                      arrayNuevaFila=new Array();
                      stringOperacion;
                      numeros = [];
                        for (var i = 0; i < MatrizEcuaciones.size()[0]; i++) {// solo las igualdades de la ecuacion
                          for (var j = 0; j < MatrizEcuaciones.size()[1]; j++) {// solo las igualdades de la ecuacion
                
                              if(arrayCalculoRazon.indicePosicionFila!=i){// para q no la tope a la fila pibote y haga la operaciones a las filas viejas
                
                                if(MatrizEcuaciones.valueOf()[i][indiceColumna]>=0){//cambiar de signo para q se simplifique
                                  stringOperacion=" - "+MatrizEcuaciones.valueOf()[i][indiceColumna]+" * ("+MatrizEcuaciones.valueOf()[arrayCalculoRazon.indicePosicionFila][j]+ ") + "+MatrizEcuaciones.valueOf()[i][j];//la fila priemra es la fila pibote,
                                }else{
                                  stringOperacion="(-1 ) * ("+MatrizEcuaciones.valueOf()[i][indiceColumna]+") * ("+MatrizEcuaciones.valueOf()[arrayCalculoRazon.indicePosicionFila][j]+ ") + "+MatrizEcuaciones.valueOf()[i][j];//la fila priemra es la fila pibote,
                                }
                                console.log(stringOperacion+" = "+(math.simplify(stringOperacion).toString())   );
                                
                                numeros.push(math.simplify(stringOperacion).toString() );
                                //console.log(numeros);
                                //console.log("===============");
                                
                                //console.log(arrayNuevaFilaPibote);
                                //break;//obtengo la columna pibote
                              }else{
                                console.log("FilaUbicacionVariableOlgura["+i+ "]");
                              }
                            }// end For
                            //console.log("\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ACTUALIZAR MATRIZ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                            if(arrayCalculoRazon.indicePosicionFila!=i){
                              MatrizEcuaciones.valueOf()[i]=[];
                                MatrizEcuaciones.valueOf()[i]=numeros;
                                
                                console.log(numeros);
                                console.log(MatrizEcuaciones.valueOf()[i]);
                                //console.log("################### Actualizamos la Matriz ################## \n"+MatrizEcuaciones);
                            }
                
                            numeros=[];//vacio el array
                
                            console.log("///");
                            //break;
                          }
                          //MatrizEcuaciones.valueOf()[i][j]=math.simplify(stringOperacion).toString();
              console.log("7. 1) La matriz actualizada con los nuevos elementos es :  \n",MatrizEcuaciones);


          contadorEjercicio++;
          console.log("NUEMRO DE ITERACION :" ,contadorEjercicio);

          console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");
          console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°");;

          if(varibaleDesicionNegativa==false){
            alert("El algoritmo Finalizo por que la Variable de Desicion es Positiva en la interaccion numero : "+contadorEjercicio);

            var arraySolucion=[];

            for (var i = 0; i < fila; i++) {
              for (var j = 0; j < column; j++) {
                console.log("X"+i+" = ",MatrizEcuaciones.valueOf()[i][column-1]);
                //arraySolucion.push(MatrizEcuaciones.valueOf()[i][column]);
    
                   
              }
    
            }
            //console.log("El resultado es : "+ arraySolucion);

            break;
          }
        }
       




    });
          

    //1.
    function variableDecision(arrayF_O,arrayDatosEcuaciones){//columna pibote
      var  indiceColumna=0;
        let min = arrayF_O[0]; //nos quedamos con el primer número del array, OK
        var baoleanNumNegativo;//
        for(let i=0; i < arrayF_O.length; i++) { //recorremos el array, OK
          
          if (min > arrayF_O[i]) {// de la funcion objetivo buscamos el menor
            min=arrayF_O[i]; // nuevo mínimo encontrado, nos quedamos con él
            indiceColumna=i;
            
          }
        }
        //Verificar si es positivo o negativo el numero
        if(min>=0){
          baoleanNumNegativo=false;
        }else{
          baoleanNumNegativo=true;
        }
        
        var respuestaVariableDecision = { 'NumeroMenor':min, 'Indice':indiceColumna, 'EstadoNumero':baoleanNumNegativo}
        return respuestaVariableDecision;
    }

    //2. Columna pivote

    function columbaPivote(MatrizEcuaciones,indiceColumna){//columna pibote
      var arraycolumnPibote=new Array();
      //console.log(MatrizEcuaciones.valueOf()[1][1]);
        for (var i = 0; i < fila; i++) {//omito para q recoorar todo
          for (var j = indiceColumna; j < column; j++) {// empieza donde la variable de desicion
            //console.log(MatrizEcuaciones.valueOf()[i][j]);
            arraycolumnPibote.push(MatrizEcuaciones.valueOf()[i][indiceColumna]);
                break;//obtengo la columna pibote
          }
        }
        //MatrizEcuaciones= math.matrix(a);
        return math.matrix(arraycolumnPibote);

    }

    //3. encontramos la razon

    function calculoRazon(MatrizEcuaciones,arrayColumnaPiote){
      var contador=0;
      var arrayRazon=new Array();
      var booleanRazonPositivo=false;
      //console.log(arrayRazon.valueOf);

        for (var i = 0; i < fila-1; i++) {// solo las igualdades de la ecuacion
          for (var j = (column-1); j < column; j++) {// solo las igualdades de la ecuacion
                // recorreos la ultima fila de las igualdades para encontrar la razon//
                //dividir fila de la igualda con fila de pibote
              //console.log(MatrizEcuaciones.valueOf()[i][j]+"/"+arrayColumnaPiote.valueOf()[contador]+" = "+MatrizEcuaciones.valueOf()[i][j]/arrayColumnaPiote.valueOf()[contador]);
              arrayRazon.push(MatrizEcuaciones.valueOf()[i][j]/arrayColumnaPiote.valueOf()[contador]);

                break;//obtengo la columna pibote
          }
          
          contador++;
        }

        var indiceFila=0;
        let minRazon = arrayRazon[0]; //nos quedamos con el primer número del array, OK
        for(let i=0; i < arrayRazon.length; i++) { //recorremos el array, OK
          
          if (minRazon > arrayRazon[i] && arrayRazon[i]>=0) {// solo las razoness positivas
              minRazon=arrayRazon[i]; // nuevo mínimo encontrado, nos quedamos con él
              indiceFila=i;
              
              
            }
          }
          // console.log("La razon es :",minRazon);
          // console.log("IndiceColumna de la razon : ",indiceColumna);
          if(minRazon>=0){//pregunto si la razon es positiva o negatativa
            booleanRazonPositivo=true;
          }
        
        var respuestaCaculoRazon = { 'arrayRazonDividir':arrayRazon, 'booleanRazonPositivo':booleanRazonPositivo,'valorMinimoRazon':minRazon,'indicePosicionFila':indiceFila}
        return respuestaCaculoRazon;
    }


    function calculoNuevaFilaPovote(indicePosicionFila,Filatamaño,ColumnaTaño,MatrizEcuaciones,variableFila){
      
      arrayAntigiaFilaPibote=new Array();
      arrayNuevaFilaPibote=new Array();
      arrayProcedimientoFilaPibote=new Array();
      var stringOperacion;
      //console.log(math.simplify('3 + 2 / 4').toString())      // Node "2 * x"
   

        for (var i = indicePosicionFila; i < Filatamaño; i++) {// solo las igualdades de la ecuacion
          for (var j = 0; j < ColumnaTaño; j++) {// solo las igualdades de la ecuacion

              stringOperacion="1/"+variableFila+ " * "+MatrizEcuaciones.valueOf()[i][j];
              //console.log(stringOperacion);
                arrayProcedimientoFilaPibote.push("1/"+variableFila+ " * "+MatrizEcuaciones.valueOf()[i][j]+" = "+(math.simplify(stringOperacion).toString())   );
                arrayAntigiaFilaPibote.push(MatrizEcuaciones.valueOf()[i][j]);
                arrayNuevaFilaPibote.push(math.simplify(stringOperacion).toString());
              //break;//obtengo la columna pibote
          }

          break;
        }

      arrayRespuestacalculoNuevaFilaPovote={'arrayAntigiaFilaPibote':arrayAntigiaFilaPibote,"arrayNuevaFilaPibote":arrayNuevaFilaPibote,'arrayProcedimientoFilPibote':arrayProcedimientoFilaPibote};

      return arrayRespuestacalculoNuevaFilaPovote;


    }

    function calculoHacerCeros(MatrizEcuaciones,ReglonNuevoFilaPibote,FilaUbicacionVariableOlgura,Fila,Columna){

      //objetivo eliminar el top y button que estan obre la varibale de olgura
      //(RegloFila[top] 0 [botton] *ReglonFilPobote)*ReglonFila = -2 R2* R1
      arrayAntigiaFila=new Array();
      arrayNuevaFila=new Array();
      var stringOperacion;
   

        for (var i = 0; i < Fila; i++) {// solo las igualdades de la ecuacion
          for (var j = 0; j < Columna; j++) {// solo las igualdades de la ecuacion

              //if(FilaUbicacionVariableOlgura!=i){// para q no la tope a la fila pibote y haga la operaciones a las filas viejas

                
                stringOperacion="1/"+ " * "+MatrizEcuaciones.valueOf()[i][j];
                //console.log(stringOperacion);
                //console.log("1/"+variableFila+ " * "+MatrizEcuaciones.valueOf()[i][j]+" = "+(math.simplify(stringOperacion).toString())   );
                arrayAntigiaFilaPibote.push(MatrizEcuaciones.valueOf()[i][j]);
                arrayNuevaFilaPibote.push(math.simplify(stringOperacion).toString());
                //break;//obtengo la columna pibote
              // }else{
              //   console.log("FilaUbicacionVariableOlgura["+i+ "]");

              // }
          }

          break;
        }

      arraycalculoHacerCeros={'arrayAntigiaFilaPibote':arrayAntigiaFilaPibote,"arrayNuevaFilaPibote":arrayNuevaFilaPibote};

      //return arraycalculoHacerCeros;

    }

