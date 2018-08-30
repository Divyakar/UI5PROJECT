sap.ui.jsview("sap.ui.demo.walkthrough.view.App", { 
    getControllerName: function() {
       return "sap.ui.demo.walkthrough.controller.App";     
    },
    createContent: function(oController) {
       var oButton = new sap.m.Button({text:"Say Hello with JavaScript View"});
       oButton.attachPress(oController.onJsPress);
       return oButton;
    }
 
 });