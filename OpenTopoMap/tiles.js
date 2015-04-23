function computeUrl(mapName,x,y,z) {
  var url = 'http://opentopomap.org/'+(z-1)+'/'+x+'/'+y+'.png';
  return url;        
};
