var display = document.getElementById("display")
var ejecutor = {
            operacionerador: "",
            operacioneradorAnt: "",
            numInic: 0
        }
var calculadora = {
    init: function(){
        var auto = this
        var cero = document.getElementById("0")
        var uno = document.getElementById("1")
        var dos = document.getElementById("2")
        var tres = document.getElementById("3")
        var cuatro = document.getElementById("4")
        var cinco = document.getElementById("5")
        var seis = document.getElementById("6")
        var siete = document.getElementById("7")
        var ocho = document.getElementById("8")
        var nueve = document.getElementById("9")
        var punto = document.getElementById("punto")
        var on = document.getElementById("on")
        var sign = document.getElementById("sign")
        var raiz = document.getElementById("raiz")
        var div = document.getElementById("dividido")
        var por = document.getElementById("por")
        var menos = document.getElementById("menos")
        var mas = document.getElementById("mas")
        var igual = document.getElementById("igual")
        cero.addEventListener("click",function(){
            auto.numero("0")
        })
        cero.addEventListener("mousedown", function(){
            cero.setAttribute("style","transform:scale(0.90,0.90)")
        })
        cero.addEventListener("mouseout", function(){
            cero.setAttribute("style","transform:scale(1,1)")
        })
        uno.addEventListener("click",function(){
            auto.numero("1")
        })
        uno.addEventListener("mousedown",function(){
            uno.setAttribute("style","transform:scale(0.90,0.90)")
        })
        uno.addEventListener("mouseout",function(){
            uno.setAttribute("style","transform:scale(1,1)")
        })
        dos.addEventListener("click", function(){
            auto.numero("2")
        })
        dos.addEventListener("mousedown",function(){
            dos.setAttribute("style","transform:scale(0.90,0.90)")
        })
        dos.addEventListener("mouseout",function(){
            dos.setAttribute("style","transform:scale(1,1)")
        })
        tres.addEventListener("click", function(){
            auto.numero("3")
        })
        tres.addEventListener("mousedown",function(){
           tres.setAttribute("style","transform:scale(0.90,0.90)")
        })
        tres.addEventListener("mouseout",function(){
           tres.setAttribute("style","transform:scale(1,1)")
        })
        cuatro.addEventListener("click", function(){
             auto.numero("4")
        })
        cuatro.addEventListener("mousedown",function(){
            cuatro.setAttribute("style","transform:scale(0.90,0.90)")
        })
        cuatro.addEventListener("mouseout",function(){
            cuatro.setAttribute("style","transform:scale(1,1)")
        })
        cinco.addEventListener("click",function(){
            auto.numero("5")
        })
        cinco.addEventListener("mousedown",function(){
            cinco.setAttribute("style","transform:scale(0.90,0.90)")
        })
        cinco.addEventListener("mouseout",function(){
            cinco.setAttribute("style","transform:scale(1,1)")
        })
        seis.addEventListener("click",function(){
            auto.numero("6")
        })
        seis.addEventListener("mousedown",function(){
            seis.setAttribute("style","transform:scale(0.90,0.90)")
        })
        seis.addEventListener("mouseout",function(){
            seis.setAttribute("style","transform:scale(1,1)")
        })
        siete.addEventListener("click",function(){
            auto.numero("7")
        })
        siete.addEventListener("mousedown",function(){
            siete.setAttribute("style","transform:scale(0.90,0.90)")
        })
        siete.addEventListener("mouseout",function(){
            siete.setAttribute("style","transform:scale(1,1)")
        })
        ocho.addEventListener("click",function(){
            auto.numero("8")
        })
        ocho.addEventListener("mousedown",function(){
            ocho.setAttribute("style","transform:scale(0.90,0.90)")
        })
        ocho.addEventListener("mouseout",function(){
            ocho.setAttribute("style","transform:scale(1,1)")
        })
        nueve.addEventListener("click", function(){
            auto.numero("9")
        })
        nueve.addEventListener("mousedown",function(){
            nueve.setAttribute("style","transform:scale(0.90,0.90)")
        })
        nueve.addEventListener("mouseout",function(){
            nueve.setAttribute("style","transform:scale(1,1)")
        })
        punto.addEventListener("click", function(){
            auto.numero(".")
        })
        punto.addEventListener("mousedown", function(){
            punto.setAttribute("style","transform:scale(0.90,0.90)")
        })
        punto.addEventListener("mouseout", function(){
            punto.setAttribute("style","transform:scale(1,1)")
        })
        on.addEventListener("click", function(){
            display.innerHTML = "0"
            ejecutor.numInic = 0
            ejecutor.operacionerador = ""
            ejecutor.operacioneradorAnt = ""
        })
        on.addEventListener("mousedown", function(){
            on.setAttribute("style", "transform:scale(0.90,0.90)")
        })
        on.addEventListener("mouseout", function(){
            on.setAttribute("style", "transform:scale(1,1)")
        })
        sign.addEventListener("click", function(){
            auto.signo()
        })
        sign.addEventListener("mousedown", function(){
            sign.setAttribute("style", "transform:scale(0.90,0.90)")
        })
        sign.addEventListener("mouseout", function(){
            sign.setAttribute("style", "transform:scale(1,1)")
        })
        raiz.addEventListener("click", function(){
            display.innerHTML= Math.sqrt(parseFloat(display.innerHTML))
            acomodarDisplay()
        })
        function formatoNumero(numero){
            var redondeo = 0
        }
        raiz.addEventListener("mousedown",function(){
            raiz.setAttribute("style", "transform:scale(0.90,0.90)")
        })
        raiz.addEventListener("mouseout",function(){
            raiz.setAttribute("style", "transform:scale(1,1)")
        })
        mas.addEventListener("click",function(){
            auto.ejecutor("+")
        })
        mas.addEventListener("mousedown",function(){
            mas.setAttribute("style", "transform:scale(0.90,0.90)")
        })
        mas.addEventListener("mouseout",function(){
            mas.setAttribute("style", "transform:scale(1,1)")
        })
        menos.addEventListener("click",function(){
            auto.ejecutor("-")
        })
        menos.addEventListener("mousedown",function(){
            menos.setAttribute("style", "transform:scale(0.90,0.90)")
        })
        menos.addEventListener("mouseout",function(){
            menos.setAttribute("style", "transform:scale(1,1)")
        })
        div.addEventListener("click",function(){
            auto.ejecutor("/")
        })
        div.addEventListener("mousedown",function(){
            div.setAttribute("style", "transform:scale(0.90,0.90)")
        })
        div.addEventListener("mouseout",function(){
            div.setAttribute("style", "transform:scale(1,1)")
        })
        por.addEventListener("click",function(){
            auto.ejecutor("*")
        })
        por.addEventListener("mousedown",function(){
            por.setAttribute("style", "transform:scale(0.90,0.90)")
        })
        por.addEventListener("mouseout",function(){
            por.setAttribute("style", "transform:scale(1,1)")
        })
        igual.addEventListener("click", function(){
            auto.ejecutor("=")
        })
        igual.addEventListener("mousedown",function(){
            igual.setAttribute("style", "transform:scale(0.90,0.90)")
        })
        igual.addEventListener("mouseout",function(){
            igual.setAttribute("style", "transform:scale(1,1)")
        })
    },
    numero: function(n){
       var num = display.innerHTML
       var auto = this
       var limite = 8
       if(num.indexOf(".") != -1){
        if (n =="."){
            n = ""
        }
        limite = 9
       }
       if (num=="0" && n != "."){
           num = ""
       }
       if (ejecutor.operacionerador.length > 0){
           num = ""
           ejecutor.operacioneradorAnt = ejecutor.operacionerador
           ejecutor.numInic = parseFloat(display.innerHTML)
           ejecutor.operacionerador = ""
       }
       if (display.innerHTML.length < limite) {
           display.innerHTML = num + n
       }
    },
    signo: function()  {
        var cadena = display.innerHTML
        var i = cadena.indexOf("-")
        if (i == -1){
            display.innerHTML = "-" + cadena
        } else{
            cadena = cadena.substring(1,cadena.length)
            display.innerHTML = cadena
        }
    },
    ejecutor: function(operacion){
        switch(operacion){
            case "+":
                        ejecutor.operacionerador = operacion
                        switch(ejecutor.operacioneradorAnt) {
                            case "+":
                                        ejecutor.numInic = ejecutor.numInic + parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                             case "-":
                                        ejecutor.numInic = ejecutor.numInic - parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                            case "*":
                                        ejecutor.numInic = ejecutor.numInic * parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                            case "/":
                                        ejecutor.numInic = ejecutor.numInic / parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                        }
                        break
            case "-":
                       ejecutor.operacionerador = operacion
                        switch(ejecutor.operacioneradorAnt) {
                            case "+":
                                        ejecutor.numInic = ejecutor.numInic + parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                             case "-":
                                        ejecutor.numInic = ejecutor.numInic - parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                            case "*":
                                        ejecutor.numInic = ejecutor.numInic * parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                            case "/":
                                        ejecutor.numInic = ejecutor.numInic / parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                        }
                        break
            case "*":
                        ejecutor.operacionerador = operacion
                        switch(ejecutor.operacioneradorAnt) {
                            case "+":
                                        ejecutor.numInic = ejecutor.numInic + parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                             case "-":
                                        ejecutor.numInic = ejecutor.numInic - parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                            case "*":
                                        ejecutor.numInic = ejecutor.numInic * parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                            case "/":
                                        ejecutor.numInic = ejecutor.numInic / parseFloat(display.innerHTML)
                                        display.innerHTML = ejecutor.numInic
                                        ejecutor.operacioneradorAnt = ejecutor.operacionerador
                                        acomodarDisplay()
                                        break
                        }
                        break
            case "/":
                        ejecutor.operacionerador = operacion
                        if (ejecutor.operacioneradorAnt.length > 0){
                            ejecutor.numInic = ejecutor.numInic / parseFloat(display.innerHTML)
                            display.innerHTML = ejecutor.numInic
                            acomodarDisplay()
                        }
                        break
             case "=":
                        switch(ejecutor.operacioneradorAnt){
                            case "+" :
                                        ejecutor.numInic += parseFloat(display.innerHTML)
                                        break
                            case "-" :
                                        ejecutor.numInic -= parseFloat(display.innerHTML)
                                        break
                             case "/" :
                                        ejecutor.numInic /= parseFloat(display.innerHTML)
                                        break
                             case "*" :
                                        ejecutor.numInic *= parseFloat(display.innerHTML)
                                        break
                        }
                        display.innerHTML = ejecutor.numInic
                        acomodarDisplay()
                        ejecutor.operacioneradorAnt = ""
                        ejecutor.operacionerador = ""
                        break
        }
    }
}
function acomodarDisplay(){
    var cadena = display.innerHTML
    var numero = parseFloat(cadena)
    limite = 8
    if (cadena.indexOf(".") != -1){
        limite++
    }
    if (cadena.indexOf("-")!= -1){
        limite++
    }
    if (cadena.length > limite){
        if (numero - numero.toFixed(0) == 0){
            display.innerHTML = numero
        }
         else {
             display.innerHTML = parseFloat(cadena).toperacionrecision(8)
         }
    }
}
calculadora.init()