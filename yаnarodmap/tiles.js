function computeUrl(mapName,x,y,z) { 
  var url = 'http://wvec.maps.yandex.net/?x='+x+'&y='+y+'&z='+(z-1); 
  return url;         
};
