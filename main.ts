
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
      * @param e describe parameter here
     */
    //% block="foo %e"
    //% shim=custom::foo
    export function foo(e: MyEnum): void {
        basic.pause(0)
    }
}
