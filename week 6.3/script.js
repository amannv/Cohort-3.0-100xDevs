const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovekiara";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const token = jwt.sign({
        username
    }, JWT_SECRET);
    return token;

}

const token = signJwt("raman123@gmail.com", "123123");
console.log(token);


function decodeJwt(token) {
    const decodedData = jwt.decode(token);
    if (decodedData) {
        return true;
    } else {
        return false;
    }
}

const ans = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbWFuMTIzQGdtYWlsLmNvbSIsImlhdCI6MTc1MzAwMjAxMH0.QMah2GDThDzuIIv_pfC0t3vBzYqDDK51lbEfv4_vlbM");
console.log(ans);


function verifyJwt(token) {
    try {
        jwt.verify(token, JWT_SECRET);
        return true;
    } catch (e) {
        return false;
    }
}

const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbWFuMTIzQGdtYWlsLmNvbSIsImlhdCI6MTc1MzAwMjAxMH0.QMah2GDThDzuIIv_pfC0t3vBzYqDDK51lbEfv4_vlbM")
console.log(ans);