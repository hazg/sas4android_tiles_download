function computeUrl(mapName,x,y,z) {
  var url = 'http://maps.atlogis.com/cgi-bin/tilecache-2.11/tilecache.py/1.0.0/topomapper_gmerc/'+(z-1)+'/'+x+'/'+y+'.jpg';
  return url;        
};
