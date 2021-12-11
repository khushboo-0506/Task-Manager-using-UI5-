sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/BindingMode',
  'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast, JSONModel, BindingMode, ResourceModel) {
  'use strict';
  
  return Controller.extend("in.sijas.ui5.app.LandingPage",{
    onInit: function(){
      var i18n = new ResourceModel({
        bundleName : 'in.sijas.ui5.app.i18n.i18n'
      });
      this.getView().setModel(i18n,"i18n");
      var oBundle =  i18n.getResourceBundle(),
        mData = new JSONModel({
        message : oBundle.getText("msg")
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