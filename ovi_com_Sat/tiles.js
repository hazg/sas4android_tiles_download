function computeUrl(mapName,x,y,z) {
  var url = 'http://'+Math.floor(Math.random()*4+1)+'.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/satellite.day/'+(z-1)+'/'+x+'/'+y+'/256/png8?lg=RUS&token=fee2f2a877fd4a429f17207a57658582&appId=nokiaMaps';
  return url;        
};  
