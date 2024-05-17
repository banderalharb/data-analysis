bluetooth.startUartService()
basic.showString("UART")
bluetooth.uartWriteValue("x", input.acceleration(Dimension.X))
serial.writeValue("x", 0)
bluetooth.uartWriteValue("y", input.acceleration(Dimension.Y))
bluetooth.startLEDService()
basic.showLeds(`
    # . . . #
    . . # . .
    . # . # .
    . # # # .
    # # . # #
    `)
game.removeLife(0)
