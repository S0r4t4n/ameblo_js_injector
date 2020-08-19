function generatePlguins(injectSrc) {
    var scripts = String(injectSrc)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\x22/g, '&quot;')
        .replace(/\x27/g, '&#39;');
    return '<input autofocus onfocus="' +
        'window.__isJSHook !== true && ' +
            '(' + scripts + ')(), ' +
        'window.__isJSHook = true">';
}

copy(generatePlguins(function() {
    //put javascript and paste output to free-plugin.
    //example 
    //input : alert("Hello World.")
    //output: 
    //<input autofocus onfocus="window.__isJSHook !== true && (function() {
    //alert(&quot;Hello World.&quot;)
    //})(), window.__isJSHook = true">
    //})
);