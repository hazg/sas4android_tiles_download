function computeUrl(mapName,x,y,z) {
  var s = Math.floor(Math.random()*4);
  y = (1<<(z-1))-(Number(y)+1);
  var url = 'http://tms'+s+'.visicom.ua/2.0.0/planet3/base/'+(z-1)+'/'+x+'/'+ y +'.png';
  return url;        
};
