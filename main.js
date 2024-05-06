import inquirer from "inquirer";
let ask = await inquirer.prompt([
    {
        name: "passLength",
        type: "number",
        message: "Pass Length",
    },
]);
function generatePassword(pass) {
    let char = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let special = "!@#$%^&*()";
    if (ask.passLength < 3) {
        console.log("Your password should be atleast 3 characters long");
    }
    else {
        let i = 0;
        while (i < ask.passLength) {
            pass += char[Math.floor(Math.random() * char.length)];
            pass += number[Math.floor(Math.random() * number.length)];
            pass += special[Math.floor(Math.random() * special.length)];
            i += 3;
        }
        pass = pass.substr(0, ask.passLength);
        return pass;
    }
}
console.log(generatePassword(ask.passLength));
