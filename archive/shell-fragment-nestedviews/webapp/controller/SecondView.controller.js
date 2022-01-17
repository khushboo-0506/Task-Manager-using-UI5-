sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {

  return Controller.extend("in.sijas.ui5.app.controller.LandingPage", {
    onPress: function () {
      MessageToast.show("Test Message");
    },
    openDialog: function () {
      if (!this.oDialog) {
        this.oDialog = this.loadFragment({
          name: "in.sijas.ui5.app.Fragment.Dialog"
        });
      }
      this.oDialog.then(function (oDialog) {
        oDialog.open();
      });
    },
    closeDialog : function(){
      this.oDialog.then(function (oDialog) {
        oDialog.close();
      });
    }
  });
});