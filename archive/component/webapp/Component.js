sap.ui.define([
  'sap/ui/core/UIComponent',
  'sap/ui/model/resource/ResourceModel',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/BindingMode'
], function (UIComponent, ResourceModel,JSONModel,BindingMode) {
  'use strict';

  return UIComponent.extend("in.sijas.ui5.app.Component", {
    metadata: {
      "interfaces": ["sap.ui.core.IAsyncContentCreation"],
      "rootView": {
        "viewName": "in.sijas.ui5.app.view.LandingPage",
        "type": "XML",
        "id": "app"
      }
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      var i18n = new ResourceModel({
        bundleName: 'in.sijas.ui5.app.i18n.i18n'
      });
      this.setModel(i18n, "i18n");
      var oBundle = i18n.getResourceBundle(),
        mData = new JSONModel({
          message: oBundle.getText("msg")
        });
      mData.setDefaultBindingMode(BindingMode.OneWay);
      this.setModel(mData);
    }
  });
});