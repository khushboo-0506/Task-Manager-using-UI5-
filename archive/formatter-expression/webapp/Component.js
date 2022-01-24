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
          data : [{
            fname:"Mohammed",
            lname : "Sijas",
            age : 30,
            score : 100
          },{
            fname:"Anha",
            lname : "Sijas",
            age : 1,
            score : 61
          },{
            fname:"John",
            lname : "Doe",
            age : 25,
            score : 50
          }]
        });
      mData.setDefaultBindingMode(BindingMode.OneWay);
      this.setModel(mData);
    }
  });
});