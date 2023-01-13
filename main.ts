input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Sword)
basic.forever(function () {
    for (let index = 0; index < 500; index++) {
        music.playMelody("E E E E E E E E ", 125)
    }
})
