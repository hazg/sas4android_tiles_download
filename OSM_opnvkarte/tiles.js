function computeUrl(mapName,x,y,z) {
    var url = 'http://tile.memomaps.de/tilegen/'+(z-1)+'/'+x+'/'+y+'.png';
    return url;        
};
