function computeUrl(mapName,x,y,z) {
  var url = 'http://yota-tiles.qsupport.ru/yota_lte/'+(z-1)+'/'+x+'/'+y+'?1';
  return url;        
};
