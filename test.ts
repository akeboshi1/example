import { Localtime } from "example_utils/time";
import { TestMath } from "example_utils/math";
import "game-core/structure";
import "game-core/utils";
import "game-core/baseRender";
import "game-core/renderPeer";
import { Render } from "game-core/renderPeer";
import { PhysicalPeer } from "game-core/physicalWorker";


console.log(">>>", new Localtime())
const math = new TestMath();
math.test("./abb.js");
console.log("math", math.multi(100, 100));
export class Test extends Render {
    static init(){
    console.log("init test");
}
}

export class Physcial extends PhysicalPeer {
    static init() {
        console.log("init physical");
    }
}





