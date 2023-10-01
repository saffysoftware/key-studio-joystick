let B = 0
let Y = 0
let X = 0
led.enable(false)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P1)
    Y = pins.analogReadPin(AnalogPin.P0)
    B = pins.digitalReadPin(DigitalPin.P2)
    serial.writeValue("x", X)
    serial.writeValue("Y", Y)
    serial.writeValue("B", B)
    basic.pause(100)
})
