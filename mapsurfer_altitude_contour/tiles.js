function computeUrl(mapName,x,y,z) { 
  var url = 'http://129.206.74.245:8006/tms_il.ashx?x='+x+'&y='+y+'&z='+(z-1); 
  return url;         
};
