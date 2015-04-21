function computeUrl(mapName,x,y,z) 
{
    res = "";
       osX = Math.round(Math.pow(2,z-1)) / 2;
       osY = Math.round(Math.pow(2,z-1)) / 2;
       prX = osX; prY = osY;
    
   for (i = 2; i <= z; i++)
   {
      prX = prX / 2; 
      prY = prY / 2; 
      if (x < osX)
      {
       osX = osX - prX;   
        if (y < osY) 
        {
         osY = osY - prY;  
         res = res+'0';
        }
        else 
        {
         osY =osY+prY; 
         res =res+'2';    
        }
      }
      else
      {
       osX = osX+prX;    
       if (y < osY) 
       {
        osY = osY-prY;
        res = res+'1';   
       }
       else
       {
       osY =osY+prY;
       res =res+'3';    
       }
      }
   }
        var url = "http://ecn.t0.tiles.virtualearth.net/tiles/a"+res+".jpeg?g=0";
        return url;          
};
