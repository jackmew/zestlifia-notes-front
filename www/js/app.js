(function() {

var app = angular.module('zestlifiaNote', ['ionic','zestlifiaNote.noteStore']);

app.controller('ListCtrl', function($scope, NoteStore) {
  
  // $scope.notes = NoteStore.list() ;
  NoteStore.list().then(function(notes) {
    $scope.notes = notes ;
  });

  $scope.reordering = false ;

  $scope.remove = function(noteId) {
    NoteStore.remove(noteId);
  };

  $scope.move = function(note, fromIndex, toIndex) {
    console.log("move - "+note.title+" from "+ fromIndex + " to "+toIndex);

    NoteStore.move(note, fromIndex, toIndex);
  };

  $scope.toggleReordering = function() {
    $scope.reordering = !$scope.reordering ;
  };
});

app.controller('EditCtrl', function($scope, $state, NoteStore) {

  NoteStore.get($state.params.noteId).then(function(note) {
    $scope.note = note ;
  });

  $scope.save = function() {
    NoteStore.update($scope.note);
    $state.go("list");
  }
});

app.controller('AddCtrl', function($scope, $state, NoteStore) {
  $scope.note = {
    id: new Date().getTime().toString(),
    title: '',
    description: ''
  };

  $scope.save = function() {
    NoteStore.create($scope.note);
    $state.go("list");
  };
}) ;

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });
  $stateProvider.state('edit', {
    url: '/edit/:noteId',
    templateUrl: 'templates/edit.html',
    controller: 'EditCtrl'
  });
 $stateProvider.state('add', {
    url: '/add',
    templateUrl: 'templates/edit.html',
     controller: 'AddCtrl'
  });
  $urlRouterProvider.otherwise('/list');
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}());