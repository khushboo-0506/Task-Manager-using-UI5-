sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast'
], function(Controller, MessageToast) {
  'use strict';
  
  return Controller.extend("in.sijas.ui5.app.controller.LandingPage",{
    onInit: function(){
      
    },
    onPress : function(){
      var message = this.getView().getModel().getProperty("/message");
      MessageToast.show(message);
    }
  });
});