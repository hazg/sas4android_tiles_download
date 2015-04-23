function computeUrl(mapName,x,y,z) {
  var url = "https://01.rdr.um.maps.yandex.net/?l=mpskl"+
    "&x="+x+
    "&y="+y+
    "&z="+(z-1)+
    "&g="+("Gagarin".charAt(Math.floor(Math.random()*7)));
  return url;        
};
