let luminosità = 0
basic.forever(function () {
    luminosità = input.lightLevel()
    basic.showNumber(luminosità)
    led.plotBarGraph(
    luminosità,
    255
    )
    basic.pause(2000)
    if (luminosità > 150) {
        basic.showLeds(`
            # # # # .
            . # . # .
            . # # # .
            . # # # .
            . . # . #
            `)
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showString("luci off")
    }
})
