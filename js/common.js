window.requestAnimFrame = (function(){
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(){
            return window.setTimeout(callback, 1000 / 60);
        }
})();