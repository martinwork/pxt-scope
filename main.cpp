#include "pxt.h"

enum MyEnum
{
    One,
    Two
};

namespace custom {
    
    //%
    void foo( MyEnum e) {
        uBit.display.print(ManagedString((int)e));
    }
}
