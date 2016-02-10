// window.fakeStorage = {
//   _data: {},
//
//   setItem: function (id, val) {
//     return this._data[id] = String(val);
//   },
//
//   getItem: function (id) {
//     return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
//   },
//
//   removeItem: function (id) {
//     return delete this._data[id];
//   },
//
//   clear: function () {
//     return this._data = {};
//   }
// };
//
function RemoteStorageManager() {
  this.bestScoreKey     = "bestScore";
  this.gameStateKey     = "gameState";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

RemoteStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Best score getters/setters
RemoteStorageManager.prototype.getBestScore = function () {
  // return this.storage.getItem(this.bestScoreKey) || 0;
};

RemoteStorageManager.prototype.setBestScore = function(score){
  // this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
RemoteStorageManager.prototype.getGameState = function(){
  var url = "http://localhost:3000/gamesetups/1";
  return $.ajax(url, {
    type: "GET"
  });
  };

  // var stateJSON = this.storage.getItem(this.gameStateKey);
  // return stateJSON ? JSON.parse(stateJSON) : null;

RemoteStorageManager.prototype.setGameState = function (gameState) {
  var url = "http://localhost:3000/gamesetups/";
  $.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });
  $.ajax({
    method: "POST",
    url: url,
    data: gameState,
    datatype: "json"
    // async:true
  })
    .done(function(data){
      console.log("success");
    });
  // this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

RemoteStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
};
