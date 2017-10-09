function computeUrl(mapName,x,y,z) {
  var url = 'http://a.tile.opencyclemap.org/cycle/'+(z-1)+'/'+x+'/'+y+'.png';
  return url;        
};
