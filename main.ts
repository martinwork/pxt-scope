
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace main {
    /**
     * TODO: describe your function here
      * @param e describe parameter here
     */
    //% block="foo %e"
    //% shim=main::foo
    export function foo(e: MyEnum): void {
        basic.pause(0)
    }
}
