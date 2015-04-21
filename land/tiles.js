function computeUrl(mapName,x,y,z) {
if (z< 17) {
     var url = 'http://mt1.google.com/vt/lyrs=t@130,r@206000000&hl=ru&x='
     +x+'&y='+y+'&z='+(18-z)
     +'&s='+("Galileo".charAt(Math.floor(Math.random()*7)));
     return url; 
   };  
};
