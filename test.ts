import { Main, Localtime } from "example_utils/main";
import { TestMath } from "example_utils/module";


export class test {
    constructor() {
        console.log("===>start");
        const t = new Main();
        t.show();
        const time = new Localtime();
        const a = new TestMath();

        console.log("===>", a.multi(100, 10));
    }
}


