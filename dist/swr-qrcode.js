define(["jquery","underscore","qvangular","./qrcode-properties","./qrcode-initialproperties","./lib/js/extensionUtils","text!./lib/css/style.css","./lib/external/qrcodejs/qrcode.min"],function($,_,qvangular,props,initProps,extensionUtils,cssContent){"use strict";return extensionUtils.addStyleToHeader(cssContent),qvangular.directive("swrQrCode",function(){return{restrict:"E",replace:!0,scope:!1,link:function($scope,$element){function makeCode(){var objectId="qrcode_"+$scope.layout.qInfo.qId;$(objectId).length>0&&$element.empty(),$element.empty();var $qrCodeContainer=$(document.createElement("div"));$qrCodeContainer.attr("id",objectId),$qrCodeContainer.addClass("swr_Qr_Code"),$qrCodeContainer.css("text-align",$scope.layout.props.align),$element.append($qrCodeContainer);{var options=getOptions();new QRCode(objectId,options)}}function getOptions(){var h=0!==$element.prop("offsetHeight")?$element.prop("offsetHeight"):$($element.offsetParent()).prop("offsetHeight"),w=0!==$element.prop("offsetWidth")?$element.prop("offsetWidth"):$($element.offsetParent()).prop("offsetWidth"),height=h>w?w:h,options={text:$scope.layout.props.text,width:height,height:height,colorLight:$scope.layout.props.colorLight,colorDark:$scope.layout.props.colorDark};return options}$scope.$watchCollection("layout.props",function(newVal,oldVal){newVal!==oldVal&&makeCode()}),$scope.$watch(function(){return[$element[0].offsetWidth,$element[0].offsetHeight].join("x")},function(){makeCode()}),makeCode()}}}),{definition:props,initialProperties:initProps,snapshot:{canTakeSnapshot:!0},template:'<swr-qr-code qv-extension class="swr_Qr_Code"/>'}});