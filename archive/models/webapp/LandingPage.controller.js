sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/BindingMode'
], function(Controller, MessageToast, JSONModel, BindingMode) {
  'use strict';
  
  return Controller.extend("in.sijas.ui5.app.LandingPage",{
    onInit: function(){
      var mData = new JSONModel({
        message : "This is a message shown in UI5 demo"
      });
      mData.setDefaultBindingMode(BindingMode.OneWay);
      this.getView().setModel(mData);
    },
    onPress : function(){
      var message = this.getView().getModel().getProperty("/message");
      MessageToast.show(message);
    }
  });
});