"use strict";

class SymbolBalancer {

    constructor(text) {
        this.text = text;
         this.stack = new Stack();
    }

    isBalanced(del) {
        let par;
        for (let i = 0; i < del.length; i++) {
            if (del[i] == "{" || del[i] == "("  || del[i] == "[") {
                this.stack.storage.push(del[i]);
            }
            else if (del[i] == "}" || del[i] == ")" || del[i] == "]") {
                par = this.stack.storage.pop();

                if (!((par == "{" && del[i] == "}") || (par == "(" && del[i] == ")")
                 || (par == "[" && del[i] == "]"))) {
                    return false;
                }
            }
        }

        if (this.stack.size() === 0) {
            return true;
        }
        else {
            return false;
        }

        // TODO impelement code here

    }
}
// let text = `
// function sum(array) {
//     let sum = 0;
//     for (const num of array) {
//         sum += num;
//     }
//     return sum;
// }
// function min(array) {
//     if (array.length > 1) {
//         let other = min(array.splice(1));
//         if (other < array[0]) {
//             return other;
//         }   
//     } 
//     return array[0];
// }
// `;
// console.log(stack.isBalanced(text));