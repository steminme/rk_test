enum NeoPixelLed {
    //% block="1"
    L1 = 0,
    //% block="2"
    L2 = 1,
    //% block="3"
    L3 = 2,
    //% block="4"
    L4 = 3,
    //% block="5"
    L5 = 4,
    //% block="6"
    L6 = 5,
    //% block="7"
    L7 = 6,
    //% block="8"
    L8 = 7
}

enum Buttonpin {
    //% block="1"
    B1,
    //% block="2"
    B2
}

//% color="#E4D00A"
//% groups="['Sensor','Output']"
namespace RekaCipta {
    //% block="Button|%buttonchoice|pressed"
    //% group="Sensor"
    //% weight=4
    export function ButtonPressed(buttonchoice: Buttonpin): boolean {
        let buttonpin: DigitalPin;
        if (buttonchoice == Buttonpin.B1) {
            buttonpin = DigitalPin.P5;
        }
        if (buttonchoice == Buttonpin.B2) {
            buttonpin = DigitalPin.P11;
        }
        return pins.digitalReadPin(buttonpin) == 0;
    }

    //% block="Sound Sensor detected sound"
    //% group="Sensor"
    //% weight=3
    export function SoundSensorDetectedSound(): boolean {
        let soundpin = DigitalPin.P0;
        return pins.digitalReadPin(soundpin) == 0;
    }

    //% block="Potentiometer value"
    //% group="Sensor"
    //% weight=2
    export function PotentiometerValue(): number {
        let potentiometerpin = AnalogPin.P1;
        return pins.analogReadPin(potentiometerpin);
    }

    //% block="Infrared Sensor detected object"
    //% group="Sensor"
    //% weight=1
    export function IRensorDetectedObject(): boolean {
        let irpin = DigitalPin.P2;
        return pins.digitalReadPin(irpin) == 0;
    }

    //% block="Buzzer tone|%tone"
    //% tone.defl=100
    //% group="Output"
    //% weight=7
    export function BuzzerTone(tone: number): void {
        let buzzerpin = AnalogPin.P16;
        pins.analogWritePin(buzzerpin, tone);
        pins.analogSetPeriod(buzzerpin, 500);
    }

    //% block="Buzzer Off"
    //% group="Output"
    //% weight=6
    export function BuzzerOff(): void {
        pins.analogWritePin(AnalogPin.P16, 0);
    }

    //% block="NeoPixel LED:%neopixelChoice|Red:%red|Green:%green|Blue:%blue"
    //% blockGap=10
    //% weight=4
    //% red.defl=255
    //% green.defl=255
    //% blue.defl=255
    //% group="Output"
    export function NeoPixel(neopixelChoice: NeoPixelLed, red: number, green: number, blue: number): void {
        let NeoPixelpin = neopixel.create(DigitalPin.P8, 8, NeoPixelMode.RGB);
        NeoPixelpin.range(neopixelChoice, 1).showColor(neopixel.rgb(red, green, blue))
        //NeoPixelpin.range(neopixelChoice, 1).show()
    }
}