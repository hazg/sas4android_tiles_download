function computeUrl(mapName,x,y,z) {
    var url = 'http://01.pvec.maps.yandex.net/?l=pmap&lang=ru-RU&x='+x+'&y='+y+'&z='+(z-1);
    return url;        
};
