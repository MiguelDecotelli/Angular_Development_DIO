type hero = {
    name: string;
    secretIdentity: string;
};

function printObject(person: hero) {
    console.log(`Hello &{person}`);
}

printObject({
    name: "Matt Murdock",
    secretIdentity: "Daredevil",
})