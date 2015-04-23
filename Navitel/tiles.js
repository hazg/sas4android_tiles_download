function computeUrl(mapName,x,y,z) {
  var y = (1<<(z-1))-(Number(y)+1)+'';

  var z = z-1+'';
  var s = '0' + Math.floor(Math.random()*3+1);
  while (x.length < 8) {x='0'+x};
  while (y.length < 8) {y='0'+y};
  while (z.length < 2) {z='0'+z};
  var url = 'http://maps.navitel.su/2.0/navitms.fcgi?t='+x+','+y+','+z;
    
  return url;        
};
