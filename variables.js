// Variables in Javascript

// Javascript-də 3 cür variable var:
// 1. let
// 2. const
// 3. var

// 1. let
// let dəyişən təyin etmək üçün istifadə olunur və sonradan bu dəyəri dəyişdirmək mümkündür.
let username = "Mahaddin";
console.log(username); // Burda cavab Mahaddin olaraq çıxacaq

username = "Revan"
console.log(username); // Burda cavab Revan olaraq çıxacaq

// Not: İstənilən adda olan yalnız bir variable yaratmaq olar yəni (let name = "Mahaddin") yazandan sonra (let name = "Revan") yazmaq olmaz bu zaman error alınacaq. Bunun doğru versiyası üçün (let name = "Mahaddin") yazdıqdan sonra (name = "Revan") yazmaq lazımdır. Bu sadəcə let üçün yox bütün variable-lar üçün keçərlidir.



// 2. const
// const sabit dəyişən yaratmaq üçün istifadə olunur və bir dəfə təyin edildikdən sonra dəyişdirilə bilməz.
const username_1 = "Mahaddin";
console.log(username_1); // Burda cavab Mahaddin olaraq çıxacaq

username_1 = "Revan" // ❌ Burda cavab error olacaq. Cunki username_1 dəyəri sabit dəyər olaraq təyin edildikdən sonra dəyişdirilə bilməz
console.log(username_1); // ❌ Bir üst sətirdə error alacaq deyə heç konsolda görünməyəcək.



// 3. var
// var köhnə üsuldur, amma çox azda olsa bəzi məqamlarda hələ də istifadə edilir.
var username_2 = "Mahaddin";
console.log(username_2); // Burda cavab Mahaddin olaraq çıxacaq

username_2 = "Revan"
console.log(username_2); // Burda cavab Revan olaraq çıxacaq


// let-də olduğu kimi var-da da bir dəyər təyin edildikdən sonra dəyişdirilə bilər. Lakin aralarındakı ən əsas fərq oların scoplardakı istifadəsidir. var-ın function scopu yoxdur lakin let-in var. Onun nümuməsi aşağıdakı kimidir.

function testVar() {
    if (true) {
        var message = "Hello, world!";  // 'var' blok daxilində elan edilir
    }
    console.log(message);  // ✅ Çıxış: Hello, world! (Blokdan kənarda da görünür)
}

testVar();
// console.log(message);  // ❌ Səhv: message yalnız `testVar` funksiyası daxilində mövcuddur


function testLet() {
    if (true) {
        let message = "Hello, world!";  // 'let' blok daxilində elan edilir
        console.log(message);  // ✅ Çıxış: Hello, world!
    }
    console.log(message);  // ❌ Səhv: message yalnız `if` blokunda mövcuddur
}

testLet();
