// Code goes here

angular.module('fasterAngular', []).
  controller('mycontroller', ['$scope', function($scope){
    $scope.framework = 'ReactJs';
    $scope.teste = "AngularJs";

  }])


  .directive('fastNg', function(){
    return{
      restrict:'E',
      scope:{
        framework:'='
      },
      link:function(scope, el, attrs){
        scope.$watch('framework', function(newValue, oldValue){
          React.renderComponent(
            MYCOMPONENT({framework:newValue}),
            el[0]
          );
        })
      }
    }

  })

  .directive('testeNg', function(){
    return{
      restrict:'E',
      scope:{
        teste:'='
      },
      template: function(scope, element, attrs) {
          var htmlText = '<div>Renderizando rapidamente AngularJs com {{teste}}</div>';
          return htmlText;
      }
    }
  })