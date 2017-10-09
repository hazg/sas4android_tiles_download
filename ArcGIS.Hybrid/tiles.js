function computeUrl(mapName,x,y,z) {
  var url = "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/"+
    (z-1)+
    "/"+y+
    "/"+x;
  return url;        
};
