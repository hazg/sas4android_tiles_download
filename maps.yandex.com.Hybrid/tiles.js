function computeUrl(mapName,x,y,z) {
  var url = "http://vec01.maps.yandex.net/tiles?l=skl&lang=en_US"+
    "&x="+x+
    "&y="+y+
    "&z="+(z-1);                
  return url;        
};
