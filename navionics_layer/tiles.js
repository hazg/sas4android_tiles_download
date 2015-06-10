function computeUrl(mapName,x,y,z) {
    var s = "abc".charAt(Math.floor(Math.random()*3));
    var url = 'http://d2hcl9zx8watk4.cloudfront.net/tile/'+(z-1)+'/'+x+'/'+y+'.png?'
    +'LAYERS=config_1_1_0_0' // Конфигурация параметра config_A_B_C_D:
    // A - Единица глубины: 1 - метры, 2 - футы
    // B - Безопасная глубина: 0 - 20 метров, 1 - 10 метров, 2 - 5 метров, 3 - 2 метра, 4 - нет
    // C - SonarCharts: 0 - выкл, 1 - вкл
    // D - Ski Map: 0 - Нет, 1 - Да
    +'&TRANSPARENT=TRUE' // Прозрачность: TRUE или FALSE
    +'&navtoken=TmF2aW9uaWNzX2ludGVybmFscHVycG9zZV8wMDAwMSt3ZWJhcGl2Mi5uYXZpb25pY3MuY29t';
    return url;        
};
