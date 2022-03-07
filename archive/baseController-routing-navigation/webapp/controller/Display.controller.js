sap.ui.define([
  './BaseController.controller'
], function (Controller) {
  'use strict';

  return Controller.extend("in.sijas.ui5.app.controller.Display", {
    onInit: function () {
      this.getRouter().getRoute("display").attachPatternMatched(this._objectRouteMatched.bind(this));
    },
    _objectRouteMatched: function (oEvt) {
      var oParams = oEvt.getParameter("arguments"),
          sEmployeeId = oParams.employeeid;
          this.bindView(sEmployeeId);
    },
    bindView : function(sEmployeeId){
      var oModel= this.getModel();
      oModel.metadataLoaded().then(function(){
        var sContextPath = "/"+oModel.createKey("Employees",{
          EmployeeID : sEmployeeId
        });
        this.getView().bindElement(sContextPath);
      }.bind(this));
    }
  });
});