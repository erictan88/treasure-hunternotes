controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLight0)) {
        Hero.y += -24
    }
})
function SetupFish3 () {
    Fishes3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . b . . 
        . . . b c c c c b . . . b c . . 
        . . b c e c c c c b . b c c . . 
        . b c c c c c c c c b c c e . . 
        . . b c c c c c c b . b c c . . 
        . . . b c c c c b . . . b c . . 
        . . . . b b b b . . . . . b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Fishes3.vx = randint(30, 60)
    Fishes3.setBounceOnWall(true)
    tiles.placeOnTile(Fishes3, tiles.getTileLocation(6, 6))
}
function SetupFish () {
    Fishes = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . b . . 
        . . . b c c c c b . . . b c . . 
        . . b c e c c c c b . b c c . . 
        . b c c c c c c c c b c c e . . 
        . . b c c c c c c b . b c c . . 
        . . . b c c c c b . . . b c . . 
        . . . . b b b b . . . . . b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Fishes.vx = randint(-50, -20)
    Fishes.setBounceOnWall(true)
    tiles.placeOnTile(Fishes, tiles.getTileLocation(5, 5))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        Hero.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . f f f f f f e f . . . . . . 
            . f f e f e f e e e f . . . . . 
            . f e e f 2 f 4 4 e f 4 e f . . 
            f e e e f 2 f 4 d e e d d e f . 
            f e e f e 2 f e 4 4 e d d e f f 
            f e e f e f f b 1 d 4 e e f f f 
            f e f e 2 f e f f d 4 2 2 4 f f 
            f f 2 e 2 f e 4 d d 4 2 2 5 f . 
            f 2 2 e 2 f e 4 d d e 2 2 5 f . 
            . f 2 e 2 e f e e f f f f f . . 
            . . f f e 2 f e f . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
function heroStart () {
    info.startCountdown(10)
}
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    Treasure.destroy()
    heroStart()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        Hero.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f e f f f f f f . . 
            . . . . . f e e e f e f e f f . 
            . . f e 4 f e 4 4 f 2 f e e f . 
            . f e d d e e d 4 f 2 f e e e f 
            f f e d d e 4 4 e f 2 e f e e f 
            f f f e e 4 d 1 b 3 f e f e e f 
            f f 4 2 2 4 d f f e f 2 e f e f 
            . f 5 2 2 4 d d 4 e f 2 e 2 f f 
            . f 5 2 2 e d d 4 e f 2 e 2 2 f 
            . . f f f f f e e f e 2 e 2 f . 
            . . . . . . . f e f 2 e f f . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Treasure.follow(Hero)
})
function SetupFish2 () {
    Fishes2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . b . . 
        . . . b c c c c b . . . b c . . 
        . . b c e c c c c b . b c c . . 
        . b c c c c c c c c b c c e . . 
        . . b c c c c c c b . b c c . . 
        . . . b c c c c b . . . b c . . 
        . . . . b b b b . . . . . b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Fishes2.vx = randint(-50, -20)
    Fishes2.setBounceOnWall(true)
    tiles.placeOnTile(Fishes2, tiles.getTileLocation(7, 7))
}
function SetupFish4 () {
    Fishes4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . b . . 
        . . . b c c c c b . . . b c . . 
        . . b c e c c c c b . b c c . . 
        . b c c c c c c c c b c c e . . 
        . . b c c c c c c b . b c c . . 
        . . . b c c c c b . . . b c . . 
        . . . . b b b b . . . . . b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Fishes4.vx = randint(20, 50)
    Fishes4.setBounceOnWall(true)
    tiles.placeOnTile(Fishes4, tiles.getTileLocation(4, 4))
}
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.placeOnRandomTile(Treasure, assets.tile`myTile`)
    info.changeScoreBy(1)
    Treasure.follow(Hero, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Treasure.destroy()
    heroStart()
})
let Fishes4: Sprite = null
let Fishes2: Sprite = null
let Fishes: Sprite = null
let Fishes3: Sprite = null
let Treasure: Sprite = null
let Hero: Sprite = null
tiles.setTilemap(tilemap`level1`)
Hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Hero, tiles.getTileLocation(2, 2))
scene.cameraFollowSprite(Hero)
Hero.setFlag(SpriteFlag.ShowPhysics, true)
SetupFish()
SetupFish2()
SetupFish3()
SetupFish4()
Treasure = sprites.create(img`
    ................
    ....5555555.....
    ...555555555....
    ..55555555555...
    .5544455555555..
    .5544555555555..
    .5545555555555..
    .5555555555555..
    .5555555555555..
    .5555555555555..
    .5555555555455..
    ..55555555445...
    ...555555555....
    ....5555555.....
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    `, SpriteKind.Projectile)
tiles.placeOnRandomTile(Treasure, assets.tile`myTile`)
info.setLife(3)
heroStart()
game.onUpdate(function () {
    if (Fishes.vx < 0) {
        Fishes.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b . . . . . b . . 
            . . . b c c c c b . . . b c . . 
            . . b c e c c c c b . b c c . . 
            . b c c c c c c c c b c c e . . 
            . . b c c c c c c b . b c c . . 
            . . . b c c c c b . . . b c . . 
            . . . . b b b b . . . . . b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Fishes.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b . . . . . b b b b . . . . 
            . . c b . . . b c c c c b . . . 
            . . c c b . b c c c c e c b . . 
            . . e c c b c c c c c c c c b . 
            . . c c b . b c c c c c c b . . 
            . . c b . . . b c c c c b . . . 
            . . b . . . . . b b b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Fishes2.vx < 0) {
        Fishes2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b . . . . . b . . 
            . . . b c c c c b . . . b c . . 
            . . b c e c c c c b . b c c . . 
            . b c c c c c c c c b c c e . . 
            . . b c c c c c c b . b c c . . 
            . . . b c c c c b . . . b c . . 
            . . . . b b b b . . . . . b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Fishes2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b . . . . . b b b b . . . . 
            . . c b . . . b c c c c b . . . 
            . . c c b . b c c c c e c b . . 
            . . e c c b c c c c c c c c b . 
            . . c c b . b c c c c c c b . . 
            . . c b . . . b c c c c b . . . 
            . . b . . . . . b b b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Fishes3.vx < 0) {
        Fishes3.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b . . . . . b . . 
            . . . b c c c c b . . . b c . . 
            . . b c e c c c c b . b c c . . 
            . b c c c c c c c c b c c e . . 
            . . b c c c c c c b . b c c . . 
            . . . b c c c c b . . . b c . . 
            . . . . b b b b . . . . . b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Fishes3.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b . . . . . b b b b . . . . 
            . . c b . . . b c c c c b . . . 
            . . c c b . b c c c c e c b . . 
            . . e c c b c c c c c c c c b . 
            . . c c b . b c c c c c c b . . 
            . . c b . . . b c c c c b . . . 
            . . b . . . . . b b b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Fishes4.vx < 0) {
        Fishes4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b b b b . . . . . b . . 
            . . . b c c c c b . . . b c . . 
            . . b c e c c c c b . b c c . . 
            . b c c c c c c c c b c c e . . 
            . . b c c c c c c b . b c c . . 
            . . . b c c c c b . . . b c . . 
            . . . . b b b b . . . . . b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Fishes4.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b . . . . . b b b b . . . . 
            . . c b . . . b c c c c b . . . 
            . . c c b . b c c c c e c b . . 
            . . e c c b c c c c c c c c b . 
            . . c c b . b c c c c c c b . . 
            . . c b . . . b c c c c b . . . 
            . . b . . . . . b b b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
game.onUpdate(function () {
    if (Hero.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        Hero.ay = 20
        controller.moveSprite(Hero, 100, 100)
    } else {
        Hero.ay = 200
        controller.moveSprite(Hero, 100, 0)
    }
    if (Hero.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) && Hero.tileKindAt(TileDirection.Top, assets.tile`transparency16`)) {
        Hero.vy = 20
    }
    if (Hero.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLight0)) {
        Hero.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
