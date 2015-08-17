function computeUrl(mapName,x,y,z) {
  var url = "http://jgo.maps.yandex.net/tiles?l=trf%2Ctrfe&x="+x
    +"&y="+y
    +"&z="+(z-1)
    +"&tm=0";
    return url;        
};  
