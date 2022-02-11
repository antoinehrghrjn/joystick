input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
    images.createImage(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `).showImage(0)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
    images.createImage(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `).showImage(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
    images.createImage(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `).showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    images.iconImage(IconNames.No).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    images.createImage(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `).showImage(0)
})
radio.setGroup(1)
