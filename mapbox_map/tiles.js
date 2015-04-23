// нет в большом SAS
function computeUrl(mapName,x,y,z) {
    var s = "abc".charAt(Math.floor(Math.random()*3));
    var url = 'https://'+s+'.tiles.mapbox.com/v3/examples.map-i87786ca/'+(z-1)+'/'+x+'/'+y+'.png';
    return url;        
};
