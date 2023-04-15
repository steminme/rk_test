const enum Buttons {
    //% block="1"
    button1,
    //% block="2"
    button2
}

//% color="#05d7f7"
//% groups="['Sensor','Output']"
namespace RekaCipta {
    //% block="Button | %buttonchoice | pressed"
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

    //% block="Buzzer tone | %tone"
    //% tone.defl=100
    //% group="Output"
    //% weight=7
    export function buzzertone(tone: number): void {
        let buzzerpin = AnalogPin.P16;
        pins.analogWritePin(buzzerpin, tone);
        pins.analogSetPeriod(buzzerpin,500);
    }

    //% block="Buzzer Off"
    //% group="Output"
    //% weight=6
    export function buzzeroff(): void {
        pins.analogWritePin(AnalogPin.P16,0);
    }
}