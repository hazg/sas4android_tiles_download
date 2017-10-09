function computeUrl(mapName,x,y,z) {
  if (z >= 17) return 'http://localhost';
  var url = "http://maps.marshruty.ru/ml.ashx?al=1&i=1"+
    "&x="+x+
    "&y="+y+
    "&z="+(z-1);
  return url;        
};
