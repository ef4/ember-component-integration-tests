define("component-integration-tests/app",["exports","ember","ember/resolver","ember/load-initializers","component-integration-tests/config/environment"],function(e,t,n,r,a){"use strict";var o;t["default"].MODEL_FACTORY_INJECTIONS=!0,o=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),r["default"](o,a["default"].modulePrefix),e["default"]=o}),define("component-integration-tests/components/alert-banner",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({classNames:["alert-banner"],alert:null,text:t["default"].computed.alias("alert.text"),closeAction:null,actions:{closeAction:function(){this.sendAction("closeAction",this.get("alert"))}}})}),define("component-integration-tests/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("component-integration-tests/controllers/index",["exports","ember","component-integration-tests/models/alert"],function(e,t,n){"use strict";e["default"]=t["default"].Controller.extend({alerts:[],alertText:"Alert banner text",createDisabled:t["default"].computed.empty("alertText"),dismissible:!0,closeAction:t["default"].computed("dismissible",function(){return this.get("dismissible")?"removeAlert":void 0}),fancy:!1,actions:{createAlert:function(){var e=n["default"].create({text:this.get("alertText"),fancy:this.get("fancy"),closeAction:this.get("closeAction")});this.get("alerts").pushObject(e)},removeAlert:function(e){this.get("alerts").removeObject(e)}}})}),define("component-integration-tests/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("component-integration-tests/initializers/app-version",["exports","component-integration-tests/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,a=!1;e["default"]={name:"App Version",initialize:function(e,o){if(!a){var i=r(o.toString());n["default"].libraries.register(i,t["default"].APP.version),a=!0}}}}),define("component-integration-tests/initializers/export-application-global",["exports","ember","component-integration-tests/config/environment"],function(e,t,n){"use strict";function r(e,r){var a=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[a]&&(window[a]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("component-integration-tests/models/alert",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Object.extend({text:null})}),define("component-integration-tests/router",["exports","ember","component-integration-tests/config/environment"],function(e,t,n){"use strict";var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("component-integration-tests/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({setupController:function(e){this._super.apply(this,arguments),e.set("alerts",[])}})}),define("component-integration-tests/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"component-integration-tests/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"id","wrapper");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("h1"),a=e.createTextNode("Ember Component Integration Tests");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("footer"),a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("p"),o=e.createTextNode("For more information, see the ");e.appendChild(a,o);var o=e.createElement("a");e.setAttribute(o,"href","https://github.com/alisdair/ember-component-integration-tests");var i=e.createTextNode("GitHub repository for this app");e.appendChild(o,i),e.appendChild(a,o);var o=e.createTextNode(", and particularly ");e.appendChild(a,o);var o=e.createElement("a");e.setAttribute(o,"href","https://github.com/alisdair/ember-component-integration-tests/blob/master/tests/integration/components/alert-banner-test.js");var i=e.createTextNode("the integration test for the alert-banner component");e.appendChild(o,i),e.appendChild(a,o);var o=e.createTextNode(".");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[0]),3,3),r},statements:[["content","outlet"]],locals:[],templates:[]}}())}),define("component-integration-tests/templates/components/alert-banner",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"component-integration-tests/templates/components/alert-banner.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("button");e.setAttribute(n,"aria-label","Close"),e.setAttribute(n,"class","close");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"aria-hidden","true");var a=e.createTextNode("×");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[1]),a=new Array(1);return a[0]=e.createElementMorph(r),a},statements:[["element","action",["closeAction"],[]]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:6,column:0},end:{line:8,column:0}},moduleName:"component-integration-tests/templates/components/alert-banner.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","yield",[["get","text"]],[]]],locals:[],templates:[]}}(),n=function(){return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:8,column:0},end:{line:10,column:0}},moduleName:"component-integration-tests/templates/components/alert-banner.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["content","text"]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"component-integration-tests/templates/components/alert-banner.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(t,1,1,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","if",[["get","closeAction"]],[],0,null],["block","if",[["get","hasBlock"]],[],1,2]],locals:[],templates:[e,t,n]}}())}),define("component-integration-tests/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:4,column:6},end:{line:8,column:6}},moduleName:"component-integration-tests/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("h3");e.setAttribute(n,"class","text-danger");var r=e.createTextNode("Something Went Wrong");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n        ");e.appendChild(t,n);var n=e.createElement("p"),r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[3]),0,0),r},statements:[["content","text"]],locals:["text"],templates:[]}}();return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:3,column:4},end:{line:9,column:4}},moduleName:"component-integration-tests/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","alert-banner",[],["alert",["subexpr","@mut",[["get","alert"]],[]],"closeAction",["subexpr","@mut",[["get","alert.closeAction"]],[]]],0,null]],locals:[],templates:[e]}}(),t=function(){return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:9,column:4},end:{line:11,column:4}},moduleName:"component-integration-tests/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","alert-banner",[],["alert",["subexpr","@mut",[["get","alert"]],[]],"closeAction",["subexpr","@mut",[["get","alert.closeAction"]],[]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:2,column:2},end:{line:12,column:2}},moduleName:"component-integration-tests/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","if",[["get","alert.fancy"]],[],0,1]],locals:["alert"],templates:[e,t]}}();return{meta:{revision:"Ember@1.13.0",loc:{source:null,start:{line:1,column:0},end:{line:33,column:0}},moduleName:"component-integration-tests/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","alert-banner-container");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),r=e.createTextNode("Alert Banner");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("form"),r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","form-group");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","form-group");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("label"),o=e.createComment("");e.appendChild(a,o);var o=e.createTextNode(" Dismissible");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("label"),o=e.createComment("");e.appendChild(a,o);var o=e.createTextNode(" Fancy");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","form-group");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("button"),o=e.createTextNode("\n      Create alert\n    ");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[4]),a=e.childAt(r,[3]),o=e.childAt(r,[5,1]),i=new Array(6);return i[0]=e.createMorphAt(e.childAt(t,[0]),1,1),i[1]=e.createMorphAt(e.childAt(r,[1]),1,1),i[2]=e.createMorphAt(e.childAt(a,[1]),0,0),i[3]=e.createMorphAt(e.childAt(a,[3]),0,0),i[4]=e.createAttrMorph(o,"disabled"),i[5]=e.createElementMorph(o),i},statements:[["block","each",[["get","alerts"]],[],0,null],["inline","input",[],["placeholder","Alert text","value",["subexpr","@mut",[["get","alertText"]],[]]]],["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","dismissible"]],[]]]],["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","fancy"]],[]]]],["attribute","disabled",["get","createDisabled"]],["element","action",["createAlert"],[]]],locals:[],templates:[e]}}())}),define("component-integration-tests/config/environment",["ember"],function(e){var t="component-integration-tests";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(o){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("component-integration-tests/tests/test-helper"):require("component-integration-tests/app")["default"].create({name:"component-integration-tests",version:"0.0.0.85504d1a"});