// нет в большом SAS
function computeUrl(mapName,x,y,z) {
    var v = '25.12.14'
    var url = 'http://tiles.mq.ua/'+(z-1)+'/'+x+'/'+y+'.png?v='+v;
    return url;        
};
