function computeUrl(mapName,x,y,z) {
  var url = 'http://b.maps.rosreestr.ru/arcgis/rest/services/BaseMaps/Anno/MapServer/tile/'+(z-1)+'/'+y+'/'+x;
  return url;        
};
