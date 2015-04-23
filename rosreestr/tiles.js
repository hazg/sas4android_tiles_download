function computeUrl(mapName,x,y,z) {
  var url = 'http://c.maps.rosreestr.ru/arcgis/rest/services/BaseMaps/BaseMap/MapServer/tile/'+(z-1)+'/'+y+'/'+x;
  return url;        
};  
