function computeUrl(mapName,x,y,z) {
    var s = "abc".charAt(Math.floor(Math.random()*3));
    var url = 'http://'+s+'.tile.openstreetmap.org/'+(z-1)+'/'+x+'/'+y+'.png';
    return url;        
};
