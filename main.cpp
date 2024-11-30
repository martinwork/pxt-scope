#include "pxt.h"

enum MyEnum
{
    One,
    Two
};


namespace main {
    
    //%
    void foo( MyEnum e) {
        uBit.display.print(ManagedString((int)e));
    }

}
