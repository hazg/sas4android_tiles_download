var addZero = function(i){
  var rs = i.toString();
  while(rs.length < 3){ rs = '0'+rs; }
  return rs;
};

function computeUrl(mapName,x,y,z) {
  x = parseInt(x);
  y = parseInt(y);
  z = parseInt(z);
  var sh_x = [0,0,0,0,0,0, 0,0,0,0,0,0, 0,0,0,0,0,0, 0,-90,0,0,0,0,0];
  var sh_y = [0,0,0,0,0,0, 0,0,0,1,1,3, 6,11,22,44,88,175, 350,946,0,0,0,0,0];
  var tx = x + sh_x[z];
  var dx = Math.floor(tx / 1000);
  var sx = addZero(tx-dx*1000);
  var ty = Math.round(Math.pow(2, (z-1))-y)-sh_y[z];
  var dy = Math.floor(ty / 1000);
  ty = ty-dy*1000-1;
  var sy = addZero(ty);
  var sz = (z-1).toString();
  var url = 'http://tiles.tmcrussia.com/beeline4g-sem/lv'+sz+'/00/000/'+addZero(dx)+'/'+sx+'/000/'+addZero(dy)+'/'+sy+'.png'+'?key=6f4c0ee05cb084784e90f6e311d87d75';

  return url;
};
