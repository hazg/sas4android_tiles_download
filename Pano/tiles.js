function computeUrl(mapName,x,y,z) { 
  var url = 'http://mt.google.com/mapslt?lyrs=lmc:com.panoramio.p.all&x='+x+'&y='+y+'&z='+(z-1)+'&w=256&h=256&source=maps_api&hl=ru'; 
  return url;         
};
