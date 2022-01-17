sap.ui.define([
  'sap/ui/core/UIComponent',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/BindingMode'
], function (UIComponent,JSONModel,BindingMode) {
  'use strict';

  return UIComponent.extend("in.sijas.ui5.app.Component", {
    metadata: {
      "interfaces": ["sap.ui.core.IAsyncContentCreation"],
      "manifest" : "json"
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      var i18n = this.getModel("i18n"), 
        oBundle = i18n.getResourceBundle(),
        mData = new JSONModel({
          message: oBundle.getText("msg")
        });
      mData.setDefaultBindingMode(BindingMode.OneWay);
      this.setModel(mData);
    }
  });
});