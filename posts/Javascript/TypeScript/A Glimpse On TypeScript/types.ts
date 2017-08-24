// boolean
let isOpen: boolean = false;

// number
let ultimate_anwser: number = 42;
let hex: number = 0xff;
let oct: number = 0o77;
let bin: number = 0b11111111;

// string
let ts_name: string = 'TypeScript';
let full_name: string = `${ts_name} by Microsoft`;

// array
let robots: string[] = ['R2D2', 'C3PO', 'BB8'];
let world_cup_years: Array<number> = [2010, 2014, 2018, 2022];

// tuple
let pair: [string, number] = ['one', 1];

// enum
enum Color {Red, Green, Blue};
let color = Color.Red;

// any
let value: any = 'hello';
value = 12;
value = {};
// void
function notify(msg: string): void{
    alert(msg);
}
// null, undefined
let empty: null|undefined = null;
empty = undefined;
// never
function error(msg: string): never{
    // this function should never return any thing
    throw new Error(msg);
}