webpackJsonp([117],{236:function(e,n){e.exports=function(e){var n="[a-z'][a-zA-Z0-9_']*",i="("+n+":"+n+"|"+n+")",a={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},r=e.COMMENT("%","$"),c={className:"number",begin:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",relevance:0},s={begin:"fun\\s+"+n+"/\\d+"},o={begin:i+"\\(",end:"\\)",returnBegin:!0,relevance:0,contains:[{begin:i,relevance:0},{begin:"\\(",end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},t={begin:"{",end:"}",relevance:0},d={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},l={begin:"[A-Z][a-zA-Z0-9_]*",relevance:0},b={begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0},{begin:"{",end:"}",relevance:0}]},g={beginKeywords:"fun receive if try case",end:"end",keywords:a};g.contains=[r,s,e.inherit(e.APOS_STRING_MODE,{className:""}),g,o,e.QUOTE_STRING_MODE,c,t,d,l,b];var E=[r,s,g,o,e.QUOTE_STRING_MODE,c,t,d,l,b];o.contains[1].contains=E,t.contains=E,b.contains[1].contains=E;var u={className:"params",begin:"\\(",end:"\\)",contains:E};return{aliases:["erl"],keywords:a,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[u,e.inherit(e.TITLE_MODE,{begin:n})],starts:{end:";|\\.",keywords:a,contains:E}},r,{begin:"^-",end:"\\.",relevance:0,excludeEnd:!0,returnBegin:!0,lexemes:"-"+e.IDENT_RE,keywords:"-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",contains:[u]},c,e.QUOTE_STRING_MODE,b,d,l,t,{begin:/\.$/}]}}}});
//# sourceMappingURL=117.117.js.map