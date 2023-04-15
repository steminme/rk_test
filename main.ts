const enum ButtonChoice {
    //% block="1"
    button1 = 5,
    //% block="2"
    button2 = 11
}

//% color="#05d7f7"
//% groups="['Sensor','Output']"
namespace RekaCipta {
    //% block="Button %buttonchoice pressed"
    //% group="Sensor"
    //% weight=4
    export function isButtonPressed(buttonChoice: ButtonChoice): boolean {
        let button: Button;
        if (buttonChoice == ButtonChoice.button1) {
            button = Button.A;
        } else {
            button = Button.B;
        }
        return input.buttonIsPressed(button);
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