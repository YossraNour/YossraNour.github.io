//new
        //! annyang
//! version : 0.2.0
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
(function(){"use strict";var a,b,c=this,d="en-US",e={start:[],error:[],end:[],result:[],resultMatch:[],resultNoMatch:[]},f=!1,g="font-weight: bold; color: #00f;";if(!("webkitSpeechRecognition"in c))return c.annyang=null,null;var h=/\s*\((.*?)\)\s*/g,i=/(\(\?:[^)]+\))\?/g,j=/(\(\?)?:\w+/g,k=/\*\w+/g,l=/[\-{}\[\]+?.,\\\^$|#]/g,m=function(a){return a=a.replace(l,"\\$&").replace(h,"(?:$1)?").replace(j,function(a,b){return b?a:"([^\\s]+)"}).replace(k,"(.*?)").replace(i,"\\s*$1?\\s*"),new RegExp("^"+a+"$","i")},n=function(a){for(var b=0,c=a.length;c>b;b++)a[b].apply(this)};c.annyang={init:function(h){b&&b.abort&&b.abort(),b=new webkitSpeechRecognition,b.maxAlternatives=5,b.continuous=!0,b.lang=d,b.onstart=function(){n(e.start)},b.onerror=function(){n(e.error)},b.onend=function(){n(e.end)},b.onresult=function(b){n(e.result);for(var d,h=b.results[b.resultIndex],i=0;i<h.length;i++){d=h[i].transcript.trim(),f&&c.console.log("Speech recognized: %c"+d,g);for(var j=0,k=a.length;k>j;j++){var l=a[j].command.exec(d);if(l){var m=l.slice(1);return f&&(c.console.log("command matched: %c"+a[j].originalPhrase,g),m.length&&c.console.log("with parameters",m)),a[j].callback.apply(this,m),n(e.resultMatch),!0}}}return n(e.resultNoMatch),!1},a=[],this.addCommands(h)},start:function(){b.start()},abort:function(){b.abort()},debug:function(a){f=arguments.length>0?!!a:!0},setLanguage:function(a){d=a,b&&b.abort&&(b.lang=a)},addCommands:function(b){var d,e;for(var h in b)if(b.hasOwnProperty(h)){if(d=c[b[h]]||b[h],"function"!=typeof d)continue;e=m(h),a.push({command:e,callback:d,originalPhrase:h})}f&&c.console.log("Commands successfully loaded: %c"+a.length,g)},addCallback:function(a,b){if(void 0!==e[a]){var d=c[b]||b;"function"==typeof d&&e[a].push(d)}}}}).call(this);
