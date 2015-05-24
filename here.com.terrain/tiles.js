function computeUrl(mapName,x,y,z) { 
  var url = 'http://'+Math.floor(Math.random()*3+1)+'.maps.nlp.nokia.com/maptile/2.1/maptile/newest/terrain.day/'+(z-1)+'/'+x+'/'+y+'/256/png8?lg=RUS'+'&app_id=SqE1xcSngCd3m4a1zEGb&token=r0sR1DzqDkS6sDnh902FWQ&xnlp=CL_JSMv2.5.0.3,SID_34725629-4FBE-4EA5-A2AB-52EA24DEA26F'; 
  return url;         
}; 
