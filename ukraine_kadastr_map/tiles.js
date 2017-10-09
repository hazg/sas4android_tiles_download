// нет в большом SAS
function computeUrl(mapName,x,y,z) {
    var limit = 14; // максимально допустимый зум
    if (z > limit) return 'http://localhost'; // если лимит превышен - посылаем в лес
    y = (1<<(z-1))-(Number(y)+1); 
    var url = 'http://212.26.144.110/tile2/map_100000/'+(z-1)+'/'+x+'/'+y+'.jpg'; // формирование ссылки
    return url;        
};
