sap.ui.define(
  ["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(Controller,MessageToast){

      return Controller.extend("app.Second",{
          onInit : function(){
            // alert("On Init is being invoked");
          },
          onBeforeRendering : function(){
            // alert("On Before Rendering is being invoked");
          },
          onAfterRendering : function(){
            // alert("On After Rendering is being invoked");
          },
          onExit :  function(){
            // alert("On Exit is being invoked");
          },
          onPressed : function(){
            this.showToast();
          },
          showToast : function(){
            MessageToast.show("Message Shown");
          }
      });
  });