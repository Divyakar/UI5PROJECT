sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ], function(Controller,MessageToast) {
    "use strict";
  
    return Controller.extend("sap.ui.demo.walkthrough.controller.App",
     {
      onHtmlPress: function() {
        alert("Hello! Button clicked in HTML View");
      }, onJsPress: function() {
        alert("Hello! Button clicked in js View");
      }, onJsonPress: function(Event) {
        alert("Hello! Button clicked in json View");
      },
      onShowHello : function () {
        MessageToast.show("Hello World");
     }
      
    }); 
  });