function computeUrl(mapName,x,y,z) {
    var url = 'https://services.digitalglobe.com/earthservice/wmtsaccess?CONNECTID=b1f329a9-663b-4f97-a188-b30209a20288&Service=WMTS&REQUEST=GetTile&Version=1.0.0&Layer=DigitalGlobe:ImageryTileService&TileMatrixSet=EPSG:3857&TileMatrix='+'EPSG:3857:'+(z-1)+'&Format=image/jpeg&TileRow='+y+'&TileCol='+x+'&.jpg';
    return url;        
};
