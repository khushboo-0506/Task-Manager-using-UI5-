sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
  'use strict';
  return Controller.extend("app.First", {
    copyToSecondTextArea : function(oEvt){
        var sValue = oEvt.getParameter("value"),
            oSecondTextArea = this.byId("copy_text_area");
            oSecondTextArea.setValue(sValue);
    }
  });
});