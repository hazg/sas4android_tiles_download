// 10-верстка Кубани (1918 г. Стрельбицкого)

function computeUrl(mapName,x,y,z) {
  x = parseInt(x);
  y = parseInt(y);
  z = parseInt(z);
  var url = 'http://91.237.82.95:'+(8084+Math.floor(Math.random()*8))+'/1918_kuban_10v/'+(z-1)+'/'+x+'/'+y+'.jpg';
  return url;        
};
