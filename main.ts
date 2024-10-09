input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    let Feuchtigkeit = 0
    if (Feuchtigkeit <= 8) {
        basic.showNumber(Feuchtigkeit, 150)
        basic.setLedColor(0x00ff00)
    } else if (Feuchtigkeit > 400) {
        basic.showNumber(Feuchtigkeit, 150)
        basic.setLedColor(0xff0000)
    } else {
        basic.showNumber(Feuchtigkeit, 150)
        basic.setLedColor(0x0000ff)
    }
})
