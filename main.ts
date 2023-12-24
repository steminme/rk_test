//% color="#3234a1" icon="\uf2db"
//% groups="['Sensor','Output','More']"
namespace RekaCipta {
    //% block="Button %ButtonChoice Pressed"
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

    //% block="Sound Sensor Detected Sound"
    //% group="Sensor"
    //% weight=3
    export function SoundSensor(): boolean {
        let SoundSensorPin = DigitalPin.P0;
        pins.setPull(SoundSensorPin, PinPullMode.PullUp);
        return pins.digitalReadPin(SoundSensorPin) == 0;
    }

    //% block="Potentiometer Value"
    //% group="Sensor"
    //% weight=2
    export function Potentiometer(): number {
        let PotentiometerPin = AnalogPin.P1;
        return pins.analogReadPin(PotentiometerPin);
    }

    //% block="Infrared Sensor Detected Object"
    //% group="Sensor"
    //% weight=1
    export function IrSensor(): boolean {
        let IrSensorPin = DigitalPin.P2;
        pins.setPull(IrSensorPin, PinPullMode.PullUp);
        return pins.digitalReadPin(IrSensorPin) == 0;
    }

    PCA9685.reset(PCA9685.chipAddress("0x40"));
    //% block="LED %LedColorChoice %LedStateChoice"
    //% group="Output"
    //% weight=8
    export function SingleColorLED(LedColorChoice: LedColor, LedStateChoice: LedState): void {
        PCA9685.setLedDutyCycle(LedColorChoice - 0, LedStateChoice, PCA9685.chipAddress("0x40"));
    }

    export enum LedColor {
        //% block="Green"
        Green = 11,
        //% block="Yellow"
        Yellow = 10,
        //% block="Red"
        Red = 9
    }

    export enum LedState {
        //% block="On"
        OnLED = 100,
        //% block="Off"
        OffLED = 0
    }

    //% block="Buzzer Tone %Tone"
    //% Tone.defl=200
    //% group="Output"
    //% weight=7
    export function BuzzerTone(Tone: number): void {
        let BuzzerPin = AnalogPin.P16;
        //pins.analogSetPitchPin(BuzzerPin);
        //pins.analogSetPitchVolume(255);
        //pins.analogPitch(Tone, 0);
        pins.analogWritePin(BuzzerPin, 500);
        pins.analogSetPeriod(BuzzerPin, Tone);
    }

    //% block="Buzzer Off"
    //% group="Output"
    //% weight=6
    export function BuzzerOff(): void {
        let BuzzerPin = AnalogPin.P16;
        //pins.analogSetPitchPin(BuzzerPin);
        //pins.analogPitch(0, 0);
        pins.analogWritePin(BuzzerPin, 0);
    }

    //% block="Buzzer Note %NoteChoice For %DurationChoice"
    //% group="Output"
    //% weight=5
    export function BuzzerNote(NoteChoice: Note, DurationChoice: Duration): void {
        let BuzzerPin = AnalogPin.P16;
        pins.analogSetPitchPin(BuzzerPin);
        pins.analogSetPitchVolume(255);
        switch (DurationChoice) {
            case Duration.One:
                pins.analogPitch(NoteChoice, 1 * 1000);
                basic.pause(1 * 1000 * 1.3);
                break;
            case Duration.Half:
                pins.analogPitch(NoteChoice, 0.5 * 1000);
                basic.pause(0.5 * 1000 * 1.3);
                break;
            case Duration.Quarter:
                pins.analogPitch(NoteChoice, 0.25 * 1000);
                basic.pause(0.25 * 1000 * 1.3);
                break;
            case Duration.Eighth:
                pins.analogPitch(NoteChoice, 0.125 * 1000);
                basic.pause(0.125 * 1000 * 1.3);
                break;
            case Duration.Sixteenth:
                pins.analogPitch(NoteChoice, 0.0625 * 1000);
                basic.pause(0.0625 * 1000 * 1.3);
                break;
            case Duration.Double:
                pins.analogPitch(NoteChoice, 2 * 1000);
                basic.pause(2 * 1000 * 1.3);
                break;
            case Duration.Quadraple:
                pins.analogPitch(NoteChoice, 4 * 1000);
                basic.pause(4 * 1000 * 1.3);
                break;
        }
    }
    export enum Note {
        B0 = 31,
        C1 = 33,
        CS1 = 35,
        D1 = 37,
        DS1 = 39,
        E1 = 41,
        F1 = 44,
        FS1 = 46,
        G1 = 49,
        GS1 = 52,
        A1 = 55,
        AS1 = 58,
        B1 = 62,
        C2 = 65,
        CS2 = 69,
        D2 = 73,
        DS2 = 78,
        E2 = 82,
        F2 = 87,
        FS2 = 83,
        G2 = 98,
        GS2 = 104,
        A2 = 110,
        AS2 = 117,
        B2 = 123,
        C3 = 131,
        CS3 = 139,
        D3 = 147,
        DS3 = 156,
        E3 = 165,
        F3 = 175,
        FS3 = 185,
        G3 = 196,
        GS3 = 208,
        A3 = 220,
        AS3 = 233,
        B3 = 247,
        C4 = 262,
        CS4 = 277,
        D4 = 294,
        DS4 = 311,
        E4 = 330,
        F4 = 349,
        FS4 = 370,
        G4 = 392,
        GS4 = 415,
        A4 = 440,
        AS4 = 466,
        B4 = 494,
        C5 = 523,
        CS5 = 554,
        D5 = 587,
        DS5 = 622,
        E5 = 659,
        F5 = 698,
        FS5 = 740,
        G5 = 784,
        GS5 = 831,
        A5 = 880,
        AS5 = 932,
        B5 = 988,
        C6 = 1047,
        CS6 = 1109,
        D6 = 1175,
        DS6 = 1245,
        E6 = 1319,
        F6 = 1397,
        FS6 = 1480,
        G6 = 1568,
        GS6 = 1661,
        A6 = 1760,
        AS6 = 1865,
        B6 = 1976,
        C7 = 2093,
        CS7 = 2217,
        D7 = 2349,
        DS7 = 2489,
        E7 = 2637,
        F7 = 2794,
        FS7 = 2960,
        G7 = 3136,
        GS7 = 3322,
        A7 = 3520,
        AS7 = 3729,
        B7 = 3951,
        C8 = 4186,
        CS8 = 4435,
        D8 = 4699,
        DS8 = 4978,
        REST = 0
    }
    export enum Duration {
        //% block="One(1)"
        One,
        //% block="Half(1/2)"
        Half,
        //% block="Quarter(1/4)"
        Quarter,
        //% block="Eighth(1/8)"
        Eighth,
        //% block="Sixteenth(1/16)"
        Sixteenth,
        //% block="Double(2)"
        Double,
        //% block="Quadraple(4)"
        Quadraple
    }

    let Strip = neopixel.create(DigitalPin.P8, 8, NeoPixelMode.RGB);
    //% block="NeoPixel LED %NeopixelLEDnum Red:%red Green:%green Blue:%blue" inlineInputMode=inline
    //% red.min=0 red.max=255 red.defl=255
    //% green.min=0 green.max=255 green.defl=255
    //% blue.min=0 blue.max=255 blue.defl=255
    //% group="Output"
    //% weight=4
    export function Neopixel(NeopixelLEDnum: NeopixelLED, red: number, green: number, blue: number): void {
        Strip.setPixelColor(NeopixelLEDnum, neopixel.rgb(red, green, blue));
        Strip.show();
    }
    //% block="NeoPixel LED %NeopixelLEDnum Off"
    //% group="Output"
    //% weight=3
    export function NeopixelOff(NeopixelLEDnum: NeopixelLED): void {
        Strip.setPixelColor(NeopixelLEDnum, neopixel.rgb(0, 0, 0));
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

    //% block="Servo %ServoChoice Move To %Angle"
    //% Angle.min=0 Angle.max=180 Angle.defl=90
    //% group="Output"
    //% weight=2
    export function Servo(ServoChoice: ServoNum, Angle: number): void {
        PCA9685.setServoPosition(ServoChoice, Angle, PCA9685.chipAddress("0x40"));
    }
    export enum ServoNum {
        //% block="1"
        Servo1 = 6,
        //% block="2"
        Servo2 = 7,
        //% block="3"
        Servo3 = 8
    }

    //% block="Motor %MotorChoice Direction %DirectionChoice Speed %Speed"
    //% Speed.min=0 Speed.max=255 Speed.defl=255
    //% group="Output"
    //% weight=1
    export function Motor(MotorChoice: MotorNum, DirectionChoice: Direction, Speed: number): void {
        if (MotorChoice == MotorNum.MotorA) {
            if (DirectionChoice == Direction.Forward) {
                PCA9685.setPinPulseRange(PCA9685.PinNum.Pin4, 4095, 4095, PCA9685.chipAddress("0x40"));
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, ((Speed / 255) * 100), PCA9685.chipAddress("0x40"));
            }
            else if (DirectionChoice == Direction.Backward) {
                PCA9685.setPinPulseRange(PCA9685.PinNum.Pin4, 0, 4095, PCA9685.chipAddress("0x40"));
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, (100 - ((Speed / 255) * 100)), PCA9685.chipAddress("0x40"));
            }
        }
        if (MotorChoice == MotorNum.MotorB) {
            if (DirectionChoice == Direction.Forward) {
                PCA9685.setPinPulseRange(PCA9685.PinNum.Pin1, 4095, 4095, PCA9685.chipAddress("0x40"));
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, ((Speed / 255) * 100), PCA9685.chipAddress("0x40"));
            }
            else if (DirectionChoice == Direction.Backward) {
                PCA9685.setPinPulseRange(PCA9685.PinNum.Pin1, 0, 4095, PCA9685.chipAddress("0x40"));
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, (100 - ((Speed / 255) * 100)), PCA9685.chipAddress("0x40"));
            }
        }
    }
    export enum MotorNum {
        //% block="A"
        MotorA,
        //% block="B"
        MotorB
    }
    export enum Direction {
        //% block="Forward"
        Forward,
        //% block="Backward"
        Backward
    }

    let lastTime: number;
    //% block="Timer Start"
    //% group="More"
    //% weight=2
    export function TimerStart(): void {
        lastTime = control.millis() / 1000;
    }

    //% block="Timer Time (seconds)"
    //% group="More"
    //% weight=1
    export function TimerTime(): number {
        let timerTime = control.millis() / 1000 - lastTime;
        return timerTime;
    }
}