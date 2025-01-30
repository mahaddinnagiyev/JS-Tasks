// Object --> Object bir neçə dəyəri birlikdə saxlamaq üçün istifadə olunur. Burda hər bir data key-value prinsipi ilə saxlanılır. Yəni hər bir datanın özünə uyğun bir "key"-i olur


// 1. Obyekt yaratmaq
let person = {
    name: "Mahaddin",
    age: 18,
    city: "Sumqayıt"
};

console.log(person.name);  // ✅ Çıxış: Mahaddin
console.log(person["age"]);  // ✅ Çıxış: 25   Burada "person.age" yazılışıda "person["age"]" yazılışıda düzdür. Aralarında heç bir fərq yoxdur istənilən dəyər istifadə edilə bilər



// 2. Obyektə Yeni Açar-Dəyər Əlavə Etmək
let person_1 = {
    name: "Mahaddin",
    age: 18,
    city: "Sumqayıt"
};

person_1.country = "Azerbaijan";  // ✅ Yeni açar-dəyər əlavə etdik
console.log(person_1);



// 3. Obyektdən Açar-Dəyəri Silmək
let person_2 = {
    name: "Mahaddin",
    age: 18,
    city: "Sumqayıt"
};

delete person_2.city;  // ✅ city acar-dəyəri silindi
console.log(person_2);



// 4. Obyektdən Açar-Dəyəri Dəyişdirmək
let person_3 = {
    name: "Mahaddin",
    age: 18,
    city: "Sumqayıt"
};

person_3.city = "Baku";  // ✅ city acar-dəyəri dəyişdirildi
console.log(person_3);



// 5. Obyektin Üzərində Dövr (for...in) İşlətmək
let person_4 = {
    name: "Mahaddin",
    age: 18,
    city: "Sumqayıt"
};

for (let key in person_4) {
    console.log(key);  // ✅ Çıxış: name, age, city
    console.log(person_4[key]);  // ✅ Çıxış: Mahaddin, 18, Sumqayıt
}


// 6. Obyektə Metod (Function) Əlavə Etmək
let user = {
    username: "mahaddin",
    greet: function() {
        return `Hello, ${this.username}!`;
    }
};

console.log(user.greet());  // ✅ Çıxış: Hello, mahaddin!


// 7. Obyektin Açarlari və Dəyərlərini Object.keys(), Object.values(), Object.entries() ilə Almaq
let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023
};

console.log(Object.keys(car));   // ✅ ["brand", "model", "year"]
console.log(Object.values(car)); // ✅ ["Tesla", "Model S", 2023]
console.log(Object.entries(car));// ✅ [["brand", "Tesla"], ["model", "Model S"], ["year", 2023]]


// 8. İç-içə (Nested) Obyektlər
let company = {
    name: "Tech Solutions",
    location: {
        city: "Baku",
        country: "Azerbaijan"
    }
};

console.log(company.location.city);  // ✅ Çıxış: Baku


// 9. Object.assign(target, ...sources) --> Bir neçə obyekt dəyəri birlikdə saxlamaq üçün istifadə olunur
let user1 = { name: "Ali" };
let user2 = { age: 30, city: "Ganja" };

let mergedUser = Object.assign({}, user1, user2);
console.log(mergedUser);        // ✅ Çıxış: { name: "Ali", age: 30, city: "Ganja" }


// 10. Object.freeze(obj) --> Obyekti dondurur, ona yeni xüsusiyyət əlavə etmək, dəyişdirmək və ya silmək mümkün olmur.
let car_1 = { brand: "BMW", model: "X5" };
Object.freeze(car_1);

car_1.model = "X6";  // ❌ Dəyişmir
car_1.year = 2024;   // ❌ Əlavə edilmir
console.log(car_1);  // ✅ Çıxış: { brand: "BMW", model: "X5" }


// 11. Object.seal(obj) --> Obyekti "möhürləyir": Mövcud xüsusiyyətləri dəyişmək mümkündür, amma yenisini əlavə və ya silmək olmaz.
let book = { title: "JS Guide", pages: 500 };
Object.seal(book);

book.pages = 550;       // ✅ Dəyişmək olar
book.author = "John";   // ❌ Əlavə edilmir
delete book.title;      // ❌ Silinmir
console.log(book);      // ✅ Çıxış: { title: "JS Guide", pages: 550 }


// 12. Object.hasOwnProperty(prop) --> Obyektin müəyyən açara malik olub-olmadığını yoxlayır.
let user_2 = {
    name: "Mahaddin",
    age: 18
}

console.log(user_2.hasOwnProperty("age")); // ✅ true --> Çünki age key-i var
console.log(user_2.hasOwnProperty("salary")); // ❌ false --> Çünki salary key-i yoxdur


// 13. Object.getOwnPropertyNames(obj) --> Obyektin açara malik xüsusiyyətləri yoxlayır.
let user_3 = {
    name: "Mahaddin",
    age: 18
}

console.log(Object.getOwnPropertyNames(user_3)); // ✅ ["name", "age"]


// 14. Object.getOwnPropertyDescriptors(obj) --> Obyektin açara malik xüsusiyyətlərinin təsvirini yoxlayır.
let user_4 = {
    name: "Mahaddin",
    age: 18
}

console.log(Object.getOwnPropertyDescriptors(user_4)); // ✅ { name: { value: "Mahaddin", writable: true, enumerable: true, configurable: true }, age: { value: 18, writable: true, enumerable: true, configurable: true } }


// 15. Object.create(proto, propertiesObject) --> Başqa obyektə əsaslanan yeni obyekt yaratmaq üçün istifadə olunur
let person_1 = { greet: function() { return "Hello"; } };
let student = Object.create(person_1);

console.log(student.greet()); // ✅ Çıxış: "Hello"


// 16. Object.fromEntries(array) --> Array-i obyektə çevirir (entries metodunun əksi).
let entries = [["name", "Mahaddin"], ["age", 25], ["city", "Baku"]];
let newObj = Object.fromEntries(entries);

console.log(newObj);    // ✅ Çıxış: { name: "Mahaddin", age: 25, city: "Baku" }
