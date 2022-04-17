sap.ui.define([
  './BaseController.controller'
], function (Controller) {
  'use strict';

  return Controller.extend("in.sijas.ui5.app.controller.Create", {
    onInit : function(){
        this.bindView();
    },
    bindView : function(sEmployeeId){
      var oModel= this.getModel();
      oModel.metadataLoaded().then(function(){
        var oContext = oModel.createEntry("Employee");
        this.getView().setBindingContext(oContext);
      }.bind(this));
    },
    onSave : function(){
      var oModel= this.getModel();
      if(oModel.hasPendingChanges()){
        oModel.submitChanges();
        window.history.go(-1);
      }
    }
  });
});