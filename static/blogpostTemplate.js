(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blogpostTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"blog-post-container\" data-time= \""
    + alias4(((helper = (helper = lookupProperty(helpers,"timestamp") || (depth0 != null ? lookupProperty(depth0,"timestamp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data,"loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":58}}}) : helper)))
    + "\">\r\n    <a href=\"http://localhost:3000/"
    + alias4(((helper = (helper = lookupProperty(helpers,"linktopost") || (depth0 != null ? lookupProperty(depth0,"linktopost") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linktopost","hash":{},"data":data,"loc":{"start":{"line":2,"column":35},"end":{"line":2,"column":49}}}) : helper)))
    + "\" class=\"blog_post_link\">\r\n      <div class=\"blog-post\">\r\n        <div class=\"blog-post-title\">\r\n          <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":14},"end":{"line":5,"column":23}}}) : helper)))
    + "</h2>\r\n        </div>\r\n        <div class=\"blog-post-image\">\r\n          <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photoURL") || (depth0 != null ? lookupProperty(depth0,"photoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":32}}}) : helper)))
    + "\"   alt=\"Blog_Post_Photo\">\r\n        </div>\r\n        <div class=\"blog-post-text\">\r\n          <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"shortContent") || (depth0 != null ? lookupProperty(depth0,"shortContent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortContent","hash":{},"data":data,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":29}}}) : helper)))
    + "</p>\r\n        </div>\r\n      </div>\r\n    </a>\r\n  </div>";
},"useData":true});
})();