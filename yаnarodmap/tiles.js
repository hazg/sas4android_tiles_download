function computeUrl(mapName,x,y,z) {
        var url = "http://wvec.maps.yandex.net/?x="
                +"&x="+x
                +"&y="+y
                +"&z="+(z-1)
                +"&g="+("Gagarin".charAt(Math.floor(Math.random()*7)));
        return url;        
};
