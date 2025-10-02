"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = [
    {
        name: "aman",
        age: 20,
    },
    {
        name: "raman",
        age: 21,
    },
    {
        name: "ayan",
        age: 16,
    },
];
function isLegal(users) {
    const ans = [];
    for (let i = 0; i < user.length; i++) {
        const u = users[i];
        if (u && u.age > 18) {
            ans.push(u);
        }
    }
    return ans;
}
console.log(isLegal(user));
//# sourceMappingURL=index.js.map