function computeUrl(mapName,x,y,z) {
  var url = 'http://www.openportguide.org/tiles/actual/wind_vector/'
  +'15' // прогноз на текущий день: УТРО - 5, ДЕНЬ - 7, ВЕЧЕР - 9
  // прогноз на ЗАВТРА: НОЧЬ -11, ДЕНЬ- 15 
  // прогноз на ПОСЛЕЗАВТРА: НОЧЬ - 19, ДЕНЬ - 23
  // прогноз на ПОСЛЕПОСЛЕЗАВТРА: НОЧЬ - 27
  +'/'+(z-1)
  +'/'+x+'/'+y+ '.png';
  return url;        
}; 
