input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . # # . .
        # . # # .
        . # . . .
        # . . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    create.change(LedSpriteProperty.Y, 1)
})
let create: game.LedSprite = null
create = game.createSprite(0, 2)
create.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
	
})
