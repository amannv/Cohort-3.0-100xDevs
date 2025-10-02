interface User {
    name: string;
    age: number;
}

const user: User[] = [
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
]

function isLegal(users: User[]) {
    const ans = [];
    for(let i=0; i<user.length; i++) {
        const u = users[i];
        if (u && u.age > 18) {
            ans.push(u)
        } 
        }
        return ans;
    }

console.log(isLegal(user));

