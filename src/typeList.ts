/** TypeScriptの基本の型 */

// bool
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "AA";

//Array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple
let tuple: [number, string] = [0, "AA"];

// any
let any1: any = false;

// void(何も返却しない)
const funcA = (): void => {
  const test = "test";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AA" };
