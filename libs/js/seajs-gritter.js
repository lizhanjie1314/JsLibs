define(function(require,a,b){var c=b.uri;c=c.substring(0,c.lastIndexOf("/js/"))+"/";var d=require("seajs-jquery"),e=require("seajs-utils"),f=function(a){e.use([["jquery-gritter-min",c+"css/jquery.gritter.css"]],a)};f(),a.show=function(a,b){f(function(){b!==!1&&(b=!0),d.gritter.add({title:"提示",text:a,class_name:"gritter-"+(b?"success":"error")})})},a.newInstance=function(){return a}});