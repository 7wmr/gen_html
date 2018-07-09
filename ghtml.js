var ghtml = function(e) {
    attr = '';
    if (typeof e.attr) {
        a = [];
        for (var p in e.attr) {
            a.push(p + '="' + e.attr[p] +'"');
        };
        attr = a.length > 0 ? (' ' + a.join(' ')) : '';
    };
    if (e.append instanceof Array) {
        e.append = e.append.join('\n');
    }
    else {
        e.append = !!e.append ? e.append : '';
    };
    return '<' + e.tag +
           attr + '>' +
           e.append + '</' +
           e.tag + '>';
};