angular.module('zestlifiaNote.noteStore', [])
  .factory('NoteStore', function() {

  var notes = angular.fromJson(window.localStorage['notes'] || '[]');

  return {

    list: function() {
      return notes ;
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