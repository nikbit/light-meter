basic.forever(function () {
    basic.showNumber(input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    basic.pause(2000)
})
