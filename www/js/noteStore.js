angular.module('zestlifiaNote.noteStore', [])
  .factory('NoteStore', function($http) {

  var apiUrl = "http://localhost:8200"

  return {

    list: function() {
      return $http.get(apiUrl + '/notes/').then(function(response) {
        return response.data;
      });
    },
    get: function(noteId) {
      
    },
    create: function(note) {
      
    },
    update: function(note) {
      
    },
    move: function(note, fromIndex, toIndex) {
    	
    },
    remove: function(noteId) {
     
	  }
  };
});