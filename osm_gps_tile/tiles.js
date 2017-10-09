function computeUrl(mapName,x,y,z) {
  var s = "abc".charAt(Math.floor(Math.random()*3));
  var url = 'http://'+s+'.gps-tile.openstreetmap.org/lines/'+(z-1)+'/'+x+'/'+y+'.png';
  return url;        
}; 
