const enum Buttons {
    //% block="1"
    button1,
    //% block="2"
    button2
}

//% color="#05d7f7"
//% groups="['Sensor','Output']"
namespace RekaCipta {
    //% block="Button %buttonchoice pressed"
    //% group="Sensor"
    //% weight=4
    export function buttonsensor(buttonchoice: Buttons): boolean {
        let pin: DigitalPin;
        if (buttonchoice == Buttons.button1) {
            pin = DigitalPin.P5;
        }
        if (buttonchoice == Buttons.button2) {
            pin = DigitalPin.P11;
        }
        return pins.digitalReadPin(pin) == 0;
    }
    //% block="Sound Sensor detected sound"
    //% group="Sensor"
    //% weight=3
    export function soundsensor(): boolean {
        let soundsensorval: boolean
        if (input.pinIsPressed(TouchPin.P0)) {
            soundsensorval = true;
        }
        else {
            soundsensorval = false;
        }
        return soundsensorval;
    }
    //% block="Potentiometer value"
    //% group="Sensor"
    //% weight=2
    export function potentiometer(): number {
        let potentiometerval: number
        potentiometerval = (pins.analogReadPin(AnalogPin.P1));
        return potentiometerval;
    }
    //% block="Infrared Sensor detected object"
    //% group="Sensor"
    //% weight=1
    export function irsensor() {
        let irsensorval: boolean
        if (input.pinIsPressed(TouchPin.P2)) {
            irsensorval = true;
        }
        else {
            irsensorval = false;
        }
        return irsensorval;
    }

    //% block="Buzzer Off"
    //% group="Output"
    //% weight=4
    export function buzzeroff() {

    }
}