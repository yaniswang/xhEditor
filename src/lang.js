/**
 * @license Copyright (c) 2009-2013, xhEditor.com. All rights reserved.
 * For licensing, see LGPL-LICENSE.txt or http://xheditor.com/license/lgpl.txt
 */
(function(XHEDITOR, undefined){
    
    XHEDITOR.mapLang = {};

    XHEDITOR.setLang = function(preStr, mapLang){
        if(mapLang === undefined){
            mapLang = preStr;
            preStr = '';
        }
        if(preStr !== ''){
            preStr += '.';
        }
        var allKey, value;
        for(var key in mapLang){
            value = mapLang[key];
            allKey = preStr + key;
            if(typeof(value) === 'string' || value instanceof Array){
                XHEDITOR.mapLang[allKey] = value;
            }
            else{
                XHEDITOR.setLang(allKey, value);
            }
        }
    }

    XHEDITOR.getLang = function(str){
        var langText = XHEDITOR.mapLang[str];
        if(langText === undefined){
            //复合多语言模式
            langText = str.replace(/{#([^{}]+)}/g, function(all, key){
                var langText = XHEDITOR.mapLang[key];
                return langText?langText:key;
            });
        }
        //替换多语言值
        if(typeof(langText) === 'string'){
            var getLangArguments = arguments;
            langText = langText.replace(/{\$(\d+)}/g, function(all, n){
                var langValue = getLangArguments[parseInt(n,10)+1];
                return langValue !== undefined?langValue:all;
            });
        }
        return langText;
    };

})(XHEDITOR);