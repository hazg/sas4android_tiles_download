// Кавказский край 5v 1941-1948 (ENG)

function computeUrl(mapName,x,y,z) {
  x = parseInt(x);
  y = parseInt(y);
  z = parseInt(z);
  var url = 'http://91.237.82.95:'+(8084+Math.floor(Math.random()*8))+'/eng_5v_kavkaz/'+(z-1)+'/'+x+'/'+y+'.jpg';
  return url;        
};
