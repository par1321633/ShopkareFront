// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','ngCordova'])

app.controller("MyCtrl",function($scope,$cordovaToast) {

  $scope.showToast=function(message,duration,location){
  $cordovaToast.show(message, duration, location).then(function(success){
    console.log("djyf");
  },function(error){
    console,log("vbj");
  });
  }
})
