Cheat list:

- Tweak Gravity Cheat: 
Runner.instance_.tRex.config.GRAVITY = 0.1

- Modify your running speed - 
Runner.instance_.setSpeed(1000)

- Set score.. Replace "12345" with whatever score you'd like! - 
Runner.instance_.distanceRan = 12345 / Runner.instance_.distanceMeter.config.COEFFICIENT

- Modify dinosaur's velocity, make him jump as high as you want! - Runner.instance_.tRex.setJumpVelocity(10)

- Invincibility - Make your dinosaur immune to any damage! - 
Runner.instance_.gameOver = function(){};

- Cheat allowing you to freeze the game, while still earning points -
Runner.instance_.playingIntro = true;
