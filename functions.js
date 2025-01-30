// JavaScript-də funksiyalar üç əsas şəkildə istifadə olunur: regular functions, arrow functions, və anonymous function expressions. Hər biri fərqli yazılış tərzləri və istifadə məqsədləri ilə təkrarlanan əməliyyatları yerinə yetirir.


// Regular Function (Adlı Funksiya) -->  Klassik funksiya yazılışıdır, adı və parametrləri var. İlk öncə functiok keyword-ü daha sonra funksiyanın adı və parametrleri daxil edilir.
function add(a, b) {   // burdakı add funskiyanın adıdır, a və b parametrleridir
    return a + b;
}

console.log(add(2, 3)); // ✅ Çıxış: 5



// 2. Arrow Function (Ox Funksiyası) --> => operatoru ilə yazılır. Bu funksiya daha qısa və sadədir, xüsusilə callback funksiyalarında çox istifadə olunur.
const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // ✅ Çıxış: 6  Bu kodun normal halda yazılışı yuxarıdakı add funksiyasıdır arrow function ilə iş daha da qısalır



// 3. Anonymous Function Expression (Anonim Funksiya İfadəsi) --> Bu funksiyalar ad verilməyib və bir dəyişkəndə saxlanılır. Funksiya birbaşa istifadə olunur və ya bir dəyişkəndə qeyd edilir.

const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(5, 3)); // ✅ Çıxış: 2  Nümunədə göründüyü kimi bu kodda funksiyaya ad verilməyib sadəcə bir funksiya yaradılıb onu bir dəyərə(variable-a) təyin ediblər