(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['commentTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"comment\">\r\n        <div class=\"details\">\r\n          <div class=\"username-field\">\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"username") || (depth0 != null ? lookupProperty(depth0,"username") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":27}}}) : helper)))
    + "</p>\r\n          </div>\r\n          <div class=\"comment-timestamp\">\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"timestamp") || (depth0 != null ? lookupProperty(depth0,"timestamp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":28}}}) : helper)))
    + "</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"comment-content\">\r\n          <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":24}}}) : helper)))
    + "</p>\r\n        </div>\r\n      </div>";
},"useData":true});
})();