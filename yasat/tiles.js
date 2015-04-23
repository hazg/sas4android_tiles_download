function computeUrl(mapName,x,y,z) {
  var url = "http://sat0"+Math.floor(Math.random()*3+1)
    ".maps.yandex.net/tiles?l=sat"+
    "&x="+x+
    "&y="+y+
    "&z="+(z-1);

  return url;
};
