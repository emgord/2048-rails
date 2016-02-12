// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
 var game = new GameManager(4, KeyboardInputManager, HTMLActuator, RemoteStorageManager);

 var gId = window.location.search.slice(5);

 // if (gId.length > 0) {
 //   var url = "http Ajax call" + gId;
 //   $.get(url).done
 //   game.setGameState(data);
 // }
});
