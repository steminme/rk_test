//% color="#E4D00A"
//% groups="['Sensor','Output']"
namespace RekaCipta {
    //% block="Button %ButtonChoice pressed"
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
    export enum ButtonPin {
        //% block="1"
        B1,
        //% block="2"
        B2
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
        pins.analogPitch(Tone, 0);
        pins.analogWritePin(BuzzerPin, Tone);
        pins.analogSetPeriod(BuzzerPin, 500);
    }

    //% block="Buzzer Off"
    //% group="Output"
    //% weight=6
    export function BuzzerOff(): void {
        let BuzzerPin = AnalogPin.P16;
        pins.analogSetPitchPin(BuzzerPin);
        pins.analogPitch(0, 0);
        pins.analogWritePin(BuzzerPin, 0);
    }
    let Strip = neopixel.create(DigitalPin.P8, 8, NeoPixelMode.RGB);
    //% block="NeoPixel LED%NeopixelLEDnum Red:%red Green:%green Blue:%blue" inlineInputMode=inline
    //% red.min=0 red.max=255 red.defl=255
    //% green.min=0 green.max=255 green.defl=255
    //% blue.min=0 blue.max=255 blue.defl=255 
    //% weight=4
    export function Neopixel(NeopixelLEDnum: NeopixelLED, red: number, green: number, blue: number): void {
        Strip.setPixelColor(NeopixelLEDnum, neopixel.rgb(red, green, blue));
        Strip.show();
    }
    export enum NeopixelLED {
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
    //% block="NeoPixel LED%NeopixelLEDnum Off"
    //% weight=3
    export function NeopixelOff(NeopixelLEDnum: NeopixelLED): void {
        Strip.setPixelColor(NeopixelLEDnum, neopixel.rgb(0, 0, 0));
        Strip.show();
    }
}