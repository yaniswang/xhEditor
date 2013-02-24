/**
 * @license Copyright (c) 2009-2013, xhEditor.com. All rights reserved.
 * For licensing, see LGPL-LICENSE.txt or http://xheditor.com/license/lgpl.txt
 */
(function(){
    var editorRoot;
    $('script[src*=xheditor]').each(function(){
        var s=this.src;
        if(s.match(/xheditor[^\/]*\.js/i)){editorRoot=s.replace(/[\?#].*$/, '').replace(/(^|[\/\\])[^\/]*$/, '$1');return false;}
    });
    var scripts = ['core.js', 'lang.js', 'main.js'];
    for(var i=0;i<scripts.length;i++){
        document.write( '<script type="text/javascript" src="'+editorRoot+'src/' + scripts[i] + '"></script>' );
    }
})();