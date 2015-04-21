function computeUrl(mapName,x,y,z) {
    var v=167;
    var url = 'http://mt0.google.com/vt/lyrs=h@145&hl=ru&x='
    +x+'&y='+y+'&zoom='+(18-z)
    +'&s='+("Galileo".charAt(Math.floor(Math.random()*7)));
    return url;        
};
