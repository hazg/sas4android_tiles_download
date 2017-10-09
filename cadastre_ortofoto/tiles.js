function computeUrl(mapName,x,y,z) {
  var limit = 17; // максимально допустимый зум
  if (z > limit) return 'http://localhost'; // если лимит превышен - посылаем в лес
  y = (1<<(z-1))-(Number(y)+1); 
  var url = 'http://212.26.144.110/tile2/orto_10000/'+(z-1)+'/'+x+'/'+y+'.jpg'; // формирование ссылки
  return url;        
};
