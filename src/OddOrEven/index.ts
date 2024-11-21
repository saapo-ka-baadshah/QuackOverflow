import IOddOrEven from "./interfaces/IOddOrEven";

export default class OddOrEven implements IOddOrEven {

    isOdd(num: number): boolean {
        return !this.isEven(num);   
    }
    
    isEven(num: number): boolean {
        // Convert the number to a string
        const numStr = num.toString();
        
        // Convert the number to an array of number
        const numArray = numStr.split('');

        // Convert the number array to a Unicode array
        const unicodeArray = numArray.map(char => char.charCodeAt(0));

        // Check if the unicode at N-1th index is an even number
        return this.isUnicodeEven(this.getLastElementOfArray(unicodeArray));
    }

    private isUnicodeEven(num: number): boolean {
        // Convert the number to a boinary string 
        const numStr = num.toString(2); 

        // return if the boinary ends witg a zero
        return numStr.endsWith('0');  
    }

    private getLastElementOfArray(array: any[]) : any {
        for (let index = 0; index < array.length; index++) {
            if(index === array.length -1) return array[index];
        }
    }
}