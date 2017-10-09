function computeUrl(mapName,x,y,z) {
  var v = 722;
  var url = 'http://khm3.google.com/kh/v='+v+'&hl=ru&x='+x+'&y='+y+'&z='+(z-1)+'&s='+("Galileo".charAt(Math.floor(Math.random()*7)));
  return url;             
};
