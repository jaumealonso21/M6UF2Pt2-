// --------------- Gràfic de barres --------------

function graficBarres(){

    var canvas= document.getElementById('canvas');
    canvas.hidden = true;
    var ctx;
    var boto=document.getElementById('boto');
    boto.onclick = function () { inici() ;};
    //var any = [];
    
    function inici(){
        ctx = canvas.getContext('2d');
        canvas.width = "400px";
        canvas.height = "400px";
        canvas.hidden = false;
        marc();
    }
    
    function marc(){
        
    }
    
    function barra(inf){
        
    }
}
