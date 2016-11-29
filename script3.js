// Code goes here

 angular.module('fasterAngular', []).
  controller('mycontroller', ['$scope', function($scope){
      $scope.framework = 'ReactJs';
      $scope.data = [];
      // Fill the data map with random data
      $scope.refresh = function(){
          for(var i = 0; i < 1500; ++i) {
              $scope.data[i] = {};
              for(var j = 0; j < 5; ++j) {
                  $scope.data[i][j] = Math.random();
              }
          }
      }
      $scope.refresh()
  }])


  .directive('fastRepeatReact', function(){
      return{
          restrict: 'E',
          scope:{
              data: '='
          },
          link:function(scope, el, attrs){
              scope.$watchCollection('data', function(newValue, oldValue){
                  React.renderComponent(
                      MYLIST({data:newValue}),
                      el[0]
                  );
              })
          }
      }
  })


  .directive('fastRepeatAngular', function(){
      return{
          restrict: 'E',
          scope:{
              data: '='
          },
          template: function(scope, element, attrs) {
          var htmlText =
            '<table>' + 
              '<tr ng-repeat="line in data">' +
                '<td>{{line[0]}}</td>' +
                '<td>{{line[1]}}</td>' +
                '<td>{{line[2]}}</td>' +
                '<td>{{line[3]}}</td>' +
                '<td>{{line[4]}}</td>' +
              '</tr>' +
            '</table>';
          return htmlText;
          }
      }
  })


