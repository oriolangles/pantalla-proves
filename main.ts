input.onButtonPressed(Button.A, function () {
    pantalla = 1
})
input.onButtonPressed(Button.B, function () {
    pantalla = 2
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    pantalla = 3
})
let humid = 0
let temp = 0
let pantalla = 0
pins.digitalWritePin(DigitalPin.P16, 0)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
music.playMelody("E B C5 A B G A F ", 120)
basic.showString("PROVA PANTALLA!!!")
I2C_LCD1602.ShowString("Hola, com estàs?", 0, 0)
I2C_LCD1602.ShowString("Bon dia!!!!", 0, 1)
basic.pause(2000)
pantalla = 3
basic.forever(function () {
    basic.showIcon(IconNames.Chessboard)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P2,
    true,
    false,
    true
    )
    if (pantalla == 1) {
        music.playTone(262, music.beat(BeatFraction.Half))
        temp = dht11_dht22.readData(dataType.temperature)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Temperatura:", 0, 0)
        I2C_LCD1602.ShowString("" + temp + "°C", 0, 1)
    }
    if (pantalla == 2) {
        music.playTone(262, music.beat(BeatFraction.Half))
        humid = dht11_dht22.readData(dataType.humidity)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Humitat:", 0, 0)
        I2C_LCD1602.ShowString("" + humid + "%", 0, 1)
    }
    if (pantalla == 3) {
        music.playTone(262, music.beat(BeatFraction.Half))
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("A --> Temp", 0, 0)
        I2C_LCD1602.ShowString("B --> Humid", 0, 1)
    }
})
