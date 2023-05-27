import { FC, useState } from "react";
const value: string = 'then';
console.log('Hello World!');

const [name, setName] = useState<string>("");

interface CoolProps{
    string: string;
    string2: string;
    getName?: (string1: string, string2: string) => string;
}

let age: number = 20;
if(age < 50)
age += 10;