let vowelElement = document.getElementById("vowels");
let text = vowelElement.innerText;
console.log(text);
let vowels = ['a', 'e', 'u', 'i', 'o', 'y', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю']
let vowelsCount = 0;
for (let index = 0; index < text.length; ++index) {
    for (let vow = 0; vow < vowels.length; ++vow) {
        if (text[index] === vowels[vow]) ++vowelsCount;
    }
}
let countNode = document.createTextNode(`В строке  ${vowelsCount} гласных`)
result.appendChild(countNode);

let showVowels = function() {
    let vowelsNode = document.querySelector("#vowels");
    let tmpNode; //= document.createElement("b");
    vowelsCount = 0;
    while (vowelsNode.childNodes.length > 0) {
        vowelsNode.removeChild(vowelsNode.childNodes[0]);
    }

    for (let index = 0; index < text.length; index++) {
        let checker = false;
        for (let vow = 0; vow < vowels.length; ++vow) {
            if (text[index] === vowels[vow]) {
                checker = true;
            }
        }
        if (checker == true) {
            let tmpNode = document.createElement('b')
            tmpNode.append(document.createTextNode(text[index]));
            vowelsNode.append(tmpNode);
            checker = false;
        } else
            vowelsNode.appendChild(document.createTextNode(text[index]));

    }
}