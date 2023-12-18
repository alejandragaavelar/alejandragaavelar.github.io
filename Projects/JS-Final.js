function main() {
    
    var _wheel = document.querySelector("#wheel");
    var _arrow = document.querySelector("#arrow");
    
   
    var _deg = 7.8;
    var _position = _deg%360;
    
    
     function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    
    
    _arrow.addEventListener("click", spin);
    function spin(evt){
        
        _arrow.removeEventListener("click", spin);
        
        
        _arrow.classList.add("arrowanimation");
        
        
        _deg = _deg + 180 + (15 * random(0,24));
        
        
        _wheel.style.transform = "rotate(" + _deg + "deg)";
        
        
        var _position = _deg%360;
        console.log(_position + " position");
        
        
        
        setTimeout(function() {
            
            _arrow.addEventListener("click", spin);
            
            _arrow.classList.remove("arrowanimation");
            
            _scoreDisp.innerHTML = "Score = $" + _score;
            _jackpotDisp.innerHTML = "Jackpot = $" + _jackpot;
        }, 5000);
    }
}


window.onload = function() {
    main();
}