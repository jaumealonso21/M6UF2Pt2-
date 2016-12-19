// --------------- Gràfic de barres --------------

function graficBarres(){

    var canvas = document.getElementById('canvas');
    canvas.hidden = true;
    var ctx;
    var boto = document.getElementById('boto');
    boto.onclick = function () { inici() ;};
    var dades = [23,15,56,21,55,74,24,75,13,98,65,40];
    var color = "cyan";
    var ptoIniciX = 25;
    var ptoIniciY = 280;
    var ptoFinalX = ptoIniciX + 5;
    
    function inici(){
        ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 300;
        canvas.hidden = false;
        marc();
    }
    
    function marc(){
        ctx.font = "20px Arial";
        ctx.fillText("Pluviometria", 220, 30);
        for(var x in dades) {
            barra(color, ptoIniciX, ptoIniciY, ptoFinalX, dades[x]);
            ptoIniciX += 50;
        }
    }
    
    function barra(color, posx1, posy1, posx2, posy2){
        ctx.fillStyle = color;
        ctx.fillRect (posx1, posy1, posx2, -posy2);
        //ctx.fillRect(10, 280, 30, -120);
    }
}
