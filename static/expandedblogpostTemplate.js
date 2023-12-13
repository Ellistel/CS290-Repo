(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['expandedblogpostTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"main-blog-post-container\">\r\n      <div class=\"main-blog-post\">\r\n        <div class=\"main-blog-post-title\">\r\n          <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":23}}}) : helper)))
    + "</h2>\r\n        </div>\r\n\r\n        <div class=\"main-post-image\">\r\n          <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photoURL") || (depth0 != null ? lookupProperty(depth0,"photoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":32}}}) : helper)))
    + "\" alt=\"Blog_Post_Photo\">\r\n        </div>\r\n        \r\n        <div class=\"main-post-contents\">\r\n          <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":12,"column":13},"end":{"line":12,"column":24}}}) : helper)))
    + "</p>\r\n        </div>\r\n      </div>\r\n    </div>";
},"useData":true});
})();