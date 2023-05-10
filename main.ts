enum NeoPixelLED {
    //% block="1"
    L1,
    //% block="2"
    L2,
    //% block="3"
    L3,
    //% block="4"
    L4,
    //% block="5"
    L5,
    //% block="6"
    L6,
    //% block="7"
    L7,
    //% block="8"
    L8
}

enum ButtonPin {
    //% block="1"
    B1,
    //% block="2"
    B2
}

//% color="#E4D00A"
//% groups="['Sensor','Output']"
namespace RekaCipta {
    //% block="Button | %buttonchoice | pressed"
    //% group="Sensor"
    //% weight=4
    export function Button(ButtonChoice: ButtonPin): boolean {
        let ButtonState: DigitalPin;
        if (ButtonChoice == ButtonPin.B1) {
            ButtonState = DigitalPin.P5;
        }
        if (ButtonChoice == ButtonPin.B2) {
            ButtonState = DigitalPin.P11;
        }
        return pins.digitalReadPin(ButtonState) == 0;
    }

    //% block="Sound Sensor detected sound"
    //% group="Sensor"
    //% weight=3
    export function SoundSensor(): boolean {
        let SoundSensorPin = DigitalPin.P0;
        return pins.digitalReadPin(SoundSensorPin) == 0;
    }

    //% block="Potentiometer value"
    //% group="Sensor"
    //% weight=2
    export function Potentiometer(): number {
        let PotentiometerPin = AnalogPin.P1;
        return pins.analogReadPin(PotentiometerPin);
    }

    //% block="Infrared Sensor detected object"
    //% group="Sensor"
    //% weight=1
    export function IrSensor(): boolean {
        let IrSensorPin = DigitalPin.P2;
        return pins.digitalReadPin(IrSensorPin) == 0;
    }

    //% block="Buzzer tone | %Tone"
    //% Tone.defl=100
    //% group="Output"
    //% weight=7
    export function BuzzerTone(Tone: number): void {
        let BuzzerPin = AnalogPin.P16;
        pins.analogSetPitchPin(BuzzerPin);
        pins.analogPitch(Tone, 100);
        //pins.analogWritePin(BuzzerPin, Tone)
        //pins.analogSetPeriod(BuzzerPin, 500)
    }

    //% block="Buzzer Off"
    //% group="Output"
    //% weight=6
    export function BuzzerOff(): void {
        let BuzzerPin = AnalogPin.P16;
        pins.analogSetPitchPin(BuzzerPin);
        pins.analogPitch(0, 0);
    }

    //% block="NeoPixel LED%neopixelChoice Red:%red Green:%green Blue:%blue"
    //% red.defl=255
    //% green.defl=255
    //% blue.defl=255 
    //% weight=4
    export function Neopixel(neopixelChoice: NeoPixelLED, red: number, green: number, blue: number): void {

    }
}