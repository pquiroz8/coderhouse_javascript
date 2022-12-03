function test_dm() {
    let edad;
    let antecedentes;
    let hta;
    let actFisica;
    let anioNac;
    let genero;
    let diabGest;
    let peso;
    let altura;
    let imc;
    let anioActual;
    let sumatPuntos = 0 ;
    
    anioActual = new Date().getFullYear();

    anioNac = parseInt(prompt("Ingrese su año de nacimiento"));
           
    while (isNaN(anioNac) || (anioNac >= anioActual)){ //Validación año de nacimiento
        alert("Por favor, ingrese un valor numérico menor que el año actual");
        anioNac = parseInt(prompt("Ingrese su año de nacimiento"));
    }
    
    edad = calcEdad(anioNac,anioActual);
    console.log("Año actual: " + anioActual);
    console.log("Año Nacimiento: " + anioNac);
    console.log("Edad: " + edad);

    
    do{ //Validación para el género.
        genero = prompt("Ingrese su género biológico: (M/F)").toUpperCase();
        console.log("Género: " + genero);
    } while ((genero != "M") && (genero != "F"));
    
    if (genero == "F") {
        do{ //Validación para diabetes gestacional.
            diabGest = prompt("Ha sido diagnosticada con diabetes gestacional: (SI/NO)").toUpperCase();
            console.log("Diabetes Gestacional: " + diabGest);
        } while ((diabGest != "SI") && (diabGest != "NO"));
    }

    peso = parseFloat(prompt("Ingrese su peso (en kg)"));

    while ((isNaN(peso)) || (peso <= 0 )){ //Validación para el peso
        alert("Por favor, ingrese un valor numérico mayor que 0");
        peso = parseFloat(prompt("Ingrese su peso (en kg)"));
    }
    console.log("Peso: " + peso);

    altura = parseFloat(prompt("Ingrese su altura (en metros)"));

    while ((isNaN(altura)) || (altura <= 0 )){ //Validación para el altura
        alert("Por favor, ingrese un valor numérico mayor que 0");
        altura = parseFloat(prompt("Ingrese su altura (en cm)"));
    }
    console.log("Altura: " + altura);


    imc = calcIMC(peso, altura).toFixed(2);
    console.log("IMC: " + imc);

    do{ //Validación para antecedentes familiares.
        antecedentes = prompt("¿Tiene antecedentes de Diabetes Tipo II en su familia directa? (SI/NO)").toUpperCase();
        console.log("Antecedentes familiares: " + antecedentes);
    } while ((antecedentes != "SI")&&(antecedentes != "NO"));

    do{ //Validación para hipertensión.
        hta = prompt("¿Le han diagnosticado alguna vez presión arterial alta? (SI/NO)").toUpperCase();
        console.log("Hipertensión arterial: " + hta);
    } while ((hta != "SI")&&(hta != "NO"));

    do{ //Validación para actividad física.
        actFisica = prompt("¿Hace al menos 30 min de actividad física diariamente? (SI/NO)").toUpperCase();
        console.log("Actividad física: " + actFisica);
    } while ((actFisica != "SI")&&(actFisica != "NO"));

    sumatPuntos = calcRiesgo(edad, genero, antecedentes, hta, actFisica, imc);

    switch (sumatPuntos){
        case  0:
        case  1:
        case  2:
        case  3:
            alert("El puntaje de su prueba es: " + sumatPuntos + "\n" + "La probabilidad de sufrir Diabetes Mellitus Tipo II es: Baja");
            break;
        case  4:
        case  5:
        case  6:
        case  7:
            alert("El puntaje de su prueba es: " + sumatPuntos + "\n" + "La probabilidad de sufrir Diabetes Mellitus Tipo II es: Moderada");
            break;
        case 8:
        case 9:
        case 10:
            alert("El puntaje de su prueba es: " + sumatPuntos + "\n" + "La probabilidad de sufrir Diabetes Mellitus Tipo II es: Alta");
            break;   
    }

    

    //FUNCIONES

    function calcEdad(anioNac, anioActual){ //Función para calcular la edad.
        return (anioActual - anioNac);
    } 

    function calcIMC(peso, altura){
        return (peso/(altura*altura));
    }
    

    function calcRiesgo(edad, genero, antecedentes, hta, actFisica, imc) {
        let puntos = 0;
    
        do{

            if (edad < 40){ //Sumar puntos según edad.
              puntos = puntos + 0;
             } else if ((edad >= 40) && (edad <= 49)){
            puntos = puntos + 1;
             } else if ((edad >= 50) && (edad <= 59)) {
             puntos = puntos + 2;
             } else {
            puntos = puntos + 3;
         } 
    
         console.log("Sumatoria de Puntos edad: " + puntos);
        
            switch (genero) { //Sumar puntos según género
                case "M":    
                    puntos = puntos + 1;
                    break;
                case "F":
                    if (diabGest == "SI"){
                        puntos = puntos + 1;
                    } else {puntos = puntos + 0;}
                    break;
            }
            console.log("Sumatoria de Puntos genero: " + puntos);

            switch (antecedentes) { //Sumar puntos según antecedentes
                case "SI":    
                    puntos = puntos + 1;
                    break;
                case "NO":
                    puntos = puntos + 0;
                    break;
            }

            console.log("Sumatoria de Puntos antecedentes: " + puntos);

            switch (hta) { //Sumar puntos según HTA
                case "SI":    
                    puntos = puntos + 1;
                    break;
                case "NO":
                    puntos = puntos + 0;
                    break;
            }
            console.log("Sumatoria de Puntos HTA: " + puntos);

            switch (actFisica) { //Sumar puntos según actividad física
                case "SI":    
                    puntos = puntos + 0;
                    break;
                case "NO":
                    puntos = puntos + 1;
                    break;
            }
            console.log("Sumatoria de Puntos Actividad: " + puntos);

            if (imc < 25){ //Sumar puntos según IMC.
                    puntos = puntos + 0;
                } else if ((imc >= 25) && (imc <= 29)){
                    puntos = puntos + 1;
                } else if ((imc >= 30) && (imc <= 39)) {
                     puntos = puntos + 2;
                } else {
                    puntos = puntos + 3;
            } 
            console.log("Sumatoria de Puntos imc: " + puntos);
            return puntos;
        }  while (puntos < 0);
    }
}
