function computeUrl(mapName,x,y,z) {
  var url = 'http://mt0.google.com/vt/lyrs=m@169000000&hl=ru&x='
  +x+'&y='+y+'&zoom='+(18-z)
  +'&s='+("Galileo".charAt(Math.floor(Math.random()*7)));
  return url;        
}; 
