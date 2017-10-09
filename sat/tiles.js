function computeUrl(mapName,x,y,z) {
  var v = 271;
  var url = 'http://khms3.google.com/kh/v='+v+'&hl=ru&x='+x+'&y='+y+'&z='+(z-1)+'&s=';
  return url;             
};
