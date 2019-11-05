"use strict";

class SymbolBalancer {

    constructor(text) {
        this.text = text;
         this.stack = new Stack();
    }

    isBalanced(del) {
        let par;
        for (let i = 0; i < del.length; i++) {
            if (del[i] == "{" || del[i] == "("  || del[i] == "[" || del[i] == "<") {
                this.stack.push(del[i]);
            }
            else if (del[i] == "}" || del[i] == ")" || del[i] == "]" || del[i] == ">") {
                par = this.stack.pop();

                if (!((par == "{" && del[i] == "}") || (par == "(" && del[i] == ")")
                 || (par == "[" && del[i] == "]") || (par == "<" && del[i] == ">"))) {
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

        

    }
}
