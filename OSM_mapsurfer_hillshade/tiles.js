function computeUrl(mapName,x,y,z) {
  var url = 'http://129.206.74.245:8004/tms_hs.ashx?x='+x+'&y='+y+'&z='+(z-1);
  return url;        
};
