define('Starfield.Background', ['Graphics'], function(Graphics) {

    var BACKGROUND_SPEED = 0.1;

    function Background(game) {
        initialise.call(this, game);
    }

    function initialise(game) {
        this.game = game;
        this.background = game.add.tileSprite(0, 0, 1024, 1024, 'starfield');
        this.background.fixedToCamera = true;

        Graphics.getInstance().getGroup('starfield').add(this.background);
    }

    Background.prototype = {

        update: function() {
            this.background.tilePosition.x = -this.game.camera.x * BACKGROUND_SPEED;
            this.background.tilePosition.y = -this.game.camera.y * BACKGROUND_SPEED;
        }

    };

    return Background;
});
