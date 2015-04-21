function computeUrl(mapName,x,y,z) {
    var url = 'http://i'+(x % 4+y % 4*4)+'.wikimapia.org/?x='+x+'&y='+y+'&zoom='+(z-1)+'&r=764397&type=hybrid&lng=1';
    return url;        
};
