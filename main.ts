const enum NeoPixels {
    //% block="1"
    neopixelled0,
    //% block="2"
    neopixelled1,
    //% block="3"
    neopixelled2,
    //% block="4"
    neopixelled3,
    //% block="5"
    neopixelled4,
    //% block="6"
    neopixelled5,
    //% block="7"
    neopixelled6,
    //% block="8"
    neopixelled7
}

const enum Buttons {
    //% block="1"
    button1,
    //% block="2"
    button2
}

//% color="#E4D00A"
//% groups="['Sensor','Output']"
namespace RekaCipta {
    //% block="Button|%buttonchoice|pressed"
    //% group="Sensor"
    //% weight=4
    export function button(buttonchoice: Buttons): boolean {
        let buttonpin: DigitalPin;
        if (buttonchoice == Buttons.button1) {
            buttonpin = DigitalPin.P5;
        }
        if (buttonchoice == Buttons.button2) {
            buttonpin = DigitalPin.P11;
        }
        return pins.digitalReadPin(buttonpin) == 0;
    }

    //% block="Sound Sensor detected sound"
    //% group="Sensor"
    //% weight=3
    export function soundsensor(): boolean {
        let soundpin = DigitalPin.P0;
        return pins.digitalReadPin(soundpin) == 0;
    }

    //% block="Potentiometer value"
    //% group="Sensor"
    //% weight=2
    export function potentiometer(): number {
        let potentiometerpin = AnalogPin.P1;
        return pins.analogReadPin(potentiometerpin);
    }

    //% block="Infrared Sensor detected object"
    //% group="Sensor"
    //% weight=1
    export function irsensor(): boolean {
        let irpin = DigitalPin.P2;
        return pins.digitalReadPin(irpin) == 0;
    }

    //% block="Buzzer tone|%tone"
    //% tone.defl=100
    //% group="Output"
    //% weight=7
    export function buzzertone(tone: number): void {
        let buzzerpin = AnalogPin.P16;
        pins.analogWritePin(buzzerpin, tone);
        pins.analogSetPeriod(buzzerpin, 500);
    }

    //% block="Buzzer Off"
    //% group="Output"
    //% weight=6
    export function buzzeroff(): void {
        pins.analogWritePin(AnalogPin.P16, 0);
    }

    //% block="NeoPixel LED:%neopixelChoice|Red:%red|Green:%green|Blue:%blue"
    //% red.defl=255
    //% green.defl=255
    //% blue.defl=255
    //% group="Output"
    //% weight=4
    export function neopixel(neopixelChoice: NeoPixels, red: number, green: number, blue: number): void {

    }
}