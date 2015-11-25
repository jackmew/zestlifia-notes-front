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
      return $http.get(apiUrl + '/notes/' + noteId).then(function(response) {
        return response.data;
      });
    },
    create: function(note) {
      
    },
    update: function(note) {
      return $http.put(apiUrl + '/notes/' + note.id, note);
    },
    move: function(note, fromIndex, toIndex) {
    	
    },
    remove: function(noteId) {
     
	  }
  };
});