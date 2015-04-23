function computeUrl(mapName,x,y,z) {
  var url = "http://vec0"+Math.floor(Math.random()*3+1)+
    ".maps.yandex.net/tiles?l=skl"+
    "&x="+x+
    "&y="+y+
    "&z="+(z-1);
  return url;        
};
