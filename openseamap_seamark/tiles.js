function computeUrl(mapName,x,y,z) {
    var url = 'http://tiles.openseamap.org/seamark/'+(z-1)+'/'+x+'/'+y+'.png';
    return url;        
};
