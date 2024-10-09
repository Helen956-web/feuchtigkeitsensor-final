input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    let Feuchtigkeit = 0
    if (Feuchtigkeit <= 8) {
        basic.setLedColor(0x00ff00)
    } else if (Feuchtigkeit > 400) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x0000ff)
    }
    basic.setLedColor(0xffff00)
    basic.showNumber(Feuchtigkeit)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.setLedColor(0xffff00)
