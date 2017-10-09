function computeUrl(mapName,x,y,z) {
  var url = 'http://91.237.82.95:808'+Math.floor(Math.random()*4+2)+'/genshtab250m/'+(z-1)+'/'+x+'/'+y+'.jpg';
  return url;        
};
