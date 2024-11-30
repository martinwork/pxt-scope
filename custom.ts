

//%
namespace custom {
    
    /**
     * button pushed.
     */
    //% blockId=mini_ir_received_left_event
    //% block="on |%btn| button pressed"
    //% shim=custom::onPressEvent
    export function onPressEvent(btn: RemoteButton, body: () => void): void {
        basic.pause(0);
    }

    /**
     * initialises local variablesssss
     */
    //% blockId=mini_ir_init
    //% block="connect ir receiver to %pin"
    //% shim=custom::init
    export function init(pin: Pins): void {
        basic.pause(0);
    }
}
