// Preload
Scene.prototype.preload = function() {
  // Load images
  // Backgrounds
  this.load.image("background0", "assets/imgs/background0.png");
  this.load.image("background1", "assets/imgs/background1.png");
  this.load.image("background2", "assets/imgs/background2.png");
  this.load.image("background3", "assets/imgs/background3.png");

  // Grass block
  this.load.image("grassBlock", "assets/imgs/grassBlock.png");

  // Stone block
  this.load.image("stoneBlock", "assets/imgs/stoneBlock.png");

  // Speed block
  this.load.image("speedBlock", "assets/imgs/speedBlock.png");

  // Mushroom
  this.load.image("mushroom", "assets/imgs/mushroom.png");

  // Coin stat
  this.load.image("coinStat", "assets/imgs/coinStat.png");

  // Carrot
  this.load.image("carrot", "assets/imgs/carrot.png");

  // Sword
  this.load.image("sword", "assets/imgs/sword.png");

  // InactiveBox
  this.load.image("inactiveBox", "assets/imgs/inactiveBox.png");

  // ActiveBox
  this.load.image("activeBox", "assets/imgs/activeBox.png");

  // CarrotPowerup
  this.load.image("carrotPowerup", "assets/imgs/carrotPowerup.png");

  // MuhshroomPowerup
  this.load.image("mushroomPowerup", "assets/imgs/mushroomPowerup.png");

  // DoubleJumpPowerup
  this.load.image("doubleJumpPowerup", "assets/imgs/doubleJumpPowerup.png");

  // House
  this.load.image("house", "assets/imgs/house.png");

  // Laser
  this.load.image("laser", "assets/imgs/laser.png");
  this.load.image("laserShooter", "assets/imgs/laserShooter.png");

  // Door
  this.load.image("door", "assets/imgs/door.png");

  // Boss hit
  this.load.image("bossHit", "assets/imgs/bossHit.png");

  // Boss smoke
  this.load.image("smoke", "assets/imgs/smoke.png");

  // Cloud
  this.load.image("cloud", "assets/imgs/cloud.png");

  // Fire
  this.load.image("fire", "assets/imgs/fire.png");

  // Sign
  this.load.image("sign", "assets/imgs/sign.png");

  // Sound UI
  this.load.image("soundOn", "assets/imgs/soundOn.png");
  this.load.image("soundOff", "assets/imgs/soundOff.png");

  // Clouds
  this.load.image("cloud0", "assets/imgs/cloud0.png");
  this.load.image("cloud1", "assets/imgs/cloud1.png");
  this.load.image("cloud2", "assets/imgs/cloud2.png");

  // Spritesheets
  // Player frames
  this.load.image("player", "assets/imgs/player.png");
  this.load.image("playerWalk0", "assets/imgs/playerWalk0.png");
  this.load.image("playerWalk1", "assets/imgs/playerWalk1.png");
  this.load.image("playerWalk2", "assets/imgs/playerWalk2.png");

  // Coin frames
  this.load.image("coin0", "assets/imgs/coin0.png");
  this.load.image("coin1", "assets/imgs/coin1.png");
  this.load.image("coin2", "assets/imgs/coin2.png");
  this.load.image("coin3", "assets/imgs/coin3.png");

  // Spike frames
  this.load.image("spike0", "assets/imgs/spikeBall0.png");
  this.load.image("spike1", "assets/imgs/spikeBall1.png");

  // Spring frames
  this.load.image("spring0", "assets/imgs/spring0.png");
  this.load.image("spring1", "assets/imgs/spring1.png");

  // Spider frames
  this.load.image("spider0", "assets/imgs/spider0.png");
  this.load.image("spider1", "assets/imgs/spider1.png");

  // Flag frames
  this.load.image("flagDown", "assets/imgs/flagDown.png");
  this.load.image("flagMove0", "assets/imgs/flagMove0.png");
  this.load.image("flagMove1", "assets/imgs/flagMove1.png");

  // Snail frames
  this.load.image("snail0", "assets/imgs/snail0.png");
  this.load.image("snail1", "assets/imgs/snail1.png");
  this.load.image("snailShell", "assets/imgs/snailShell.png");

  // SFX
  // Backgrounds
  this.load.audio("background", "assets/sfx/background.mp3");
  this.load.audio("boss", "assets/sfx/boss.mp3");

  // Jump
  this.load.audio("jump", "assets/sfx/jump.mp3");

  // Mushroom jump
  this.load.audio("mushroom", "assets/sfx/mushroom.mp3");

  // Coin
  this.load.audio("coin", "assets/sfx/coin.wav");

  // Carrot
  this.load.audio("carrot", "assets/sfx/carrot.mp3");

  // Sword
  this.load.audio("sword", "assets/sfx/sword.mp3");

  // Explosion
  this.load.audio("explosion", "assets/sfx/explosion.wav");

  // Box
  this.load.audio("box", "assets/sfx/box.mp3");

  // Powerups
  this.load.audio("powerup", "assets/sfx/powerup.wav");
  this.load.audio("powerup2", "assets/sfx/powerup2.wav");

  // Die
  this.load.audio("die", "assets/sfx/die.mp3");

  // Checkpoint
  this.load.audio("checkpoint", "assets/sfx/checkpoint.wav");

  // Shield
  this.load.audio("shield", "assets/sfx/shield.mp3");

  // SpeedBlock
  this.load.audio("speedBlock", "assets/sfx/speedBlock.mp3");

  // Respawn
  this.load.audio("respawn", "assets/sfx/respawn.mp3");

  // Door
  this.load.audio("door", "assets/sfx/door.wav");

  // Boss explosion
  this.load.audio("bossExplode", "assets/sfx/bossExplode.ogg");

  // Win
  this.load.audio("win", "assets/sfx/win.mp3");

  // Flame
  this.load.audio("flames", "assets/sfx/flame.ogg");
}