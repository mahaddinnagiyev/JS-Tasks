// Arithmetic Operators

// 1. + --> Toplama (+) operatoru bir dəyər əlavə etmək(toplamaq) üçün istifadə olunur.
let sum = 10 + 5;
console.log(sum); // Burda cavab 15 olaraq çıxacaq


// 2. - --> Çıxma (-) operatoru bir dəyər çıxarmaq(çıxmaq) üçün istifadə olunur.
let difference = 10 - 5;
console.log(difference); // Burda cavab 5 olaraq çıxacaq


// 3. * --> Vurma (*) operatoru bir dəyər vurmaq(vurmaq) üçün istifadə olunur.
let product = 10 * 5;
console.log(product); // Burda cavab 50 olaraq çıxacaq


// 4. / --> Bölmə (/) operatoru bir dəyər bölmək(bölmək) üçün istifadə olunur.
let quotient = 10 / 5;
console.log(quotient); // Burda cavab 2 olaraq çıxacaq


// 5. % --> Mod (%) operatoru bir dəyər modunu tapmaq(modunu tapmaq) üçün istifadə olunur. Qalıq tapmaqda deyə bilərik
let remainder = 10 % 5;
console.log(remainder); // Burda cavab 0 olaraq çıxacaq


// 6. ** --> Qüvvət (**) operatoru bir dəyərin qüvvətini tapmaq üçün istifadə olunur.
let exponent = 2 ** 3;
console.log(exponent); // Burda cavab 8 olaraq çıxacaq


// 7. ++ --> Dəyəri bir vahid artırmaq üçün istifadə olunur. Ancaq istifadə metodikası dəyərdən əvvəl və ya sonra gəlməsindən asılı olaraq dəyişir.
let counter = 0;
let counterincrement = counter++;
console.log(counter); // Burda cavab 1 olaraq çıxacaq
console.log(counterincrement); // Burda cavab 0 olaraq çıxacaq


let counter_1 = 0;
let counterincrement_1 = ++counter_1;
console.log(counter_1); // Burda cavab 1 olaraq çıxacaq
console.log(counterincrement_1); // Burda cavab 1 olaraq çıxacaq

// Əgər ++ operatoru variable-dan sonra gəlirsə (birinci nümunədəki kimi) ilk öncə onun əvvəlki dəyərini istifadə edir daha sonra isə həmin dəyəri 1 vahid artırır.
// Əgər ++ operatoru variable-dan əvvəl gəlirsə (ikinci nümunədəki kimi) ilk öncə onun dəyərini 1 vahid artırır daha sonra onu istifadə edir.


// 8. -- --> Eynilə ++ operatoru kimi işləyir. Sadəcə ++ operatorundan fərqli olaraq dəyəri bir vahid artırmaq üçün yox bir vahid azaltmaq üçün istifadə olunur.
let counter_2 = 2;
let counterdecrement = counter--;
console.log(counter_2); // Burda cavab 2 olaraq çıxacaq
console.log(counterdecrement); // Burda cavab 1 olaraq çıxacaq


let counter_3 = 2;
let counterdecrement_1 = --counter_1;
console.log(counter_3); // Burda cavab 1 olaraq çıxacaq
console.log(counterdecrement_1); // Burda cavab 1 olaraq çıxacaq





// Assignment Oprators

// 1. = --> Bərabər operatoru bir dəyər təyin etmək üçün istifadə olunur
let x = 5; // x dəyərini 5 olaraq təyin ettik


// 2. += --> Bir dəyərə bir dəyər əlavə etmək üçün istifadə olunur
let y = 5; 
y += 2; // Bu method ilə (y = y + 2) olaraq yazılmal olan funksiyanı qısaltdıq
console.log(y); // Burda cavab 7 olaraq çıxacaq


// 3. -= --> Eynilə += operatoru kimidi. Fərq ondadır ki -= operatoru dəyər əlavə etmək üçün yox çıxarmaq üçün istifadə olunur.
let z = 5; 
z -= 2; // Bu method ilə (z = z - 2) olaraq yazılmal olan funksiyanı qısaltdıq
console.log(z); // Burda cavab 3 olaraq çıxacaq


// 4. *= --> Eynilə += operatoru kimidi. Fərq ondadır ki *= operatoru dəyərin mislini tapmaq üçün istifadə olunur.
let d = 5; 
d *= 2; // Bu method ilə (d = d * 2) olaraq yazılmal olan funksiyanı qısaltdıq
console.log(d); // Burda cavab 10 olaraq çıxacaq


// 5. /= --> Eynilə *= operatoru kimidi. Fərq ondadır ki /= operatoru dəyərin qismətini tapmaq üçün istifadə olunur.
let e = 5; 
e /= 2; // Bu method ilə (e = e / 2) olaraq yazılmal olan funksiyanı qısaltdıq
console.log(e); // Burda cavab 2.5 olaraq çıxacaq


// 6. %= --> Eynilə /= operatoru kimidi. Fərq ondadır ki %= operatoru dəyər modunu tapmaq üçün istifadə olunur.
let f = 5; 
f %= 2; // Bu method ilə (f = f % 2) olaraq yazılmal olan funksiyanı qısaltdıq
console.log(f); // Burda cavab 1 olaraq çıxacaq


// 7. **= --> Eynilə *= operatoru kimidi. Fərq ondadır ki **= operatoru dəyərin qüvvətini tapmaq üçün istifadə olunur.
let g = 5; 
g **= 2; // Bu method ilə (g = g ** 2) olaraq yazılmal olan funksiyanı qısaltdıq
console.log(g); // Burda cavab 25 olaraq çıxacaq




// Comparison Operators

// 1. == --> Dəyərlərin bərabərliyini yoxlamaq üçün istifadə olunur.
let variable_a = 5;
let variable_b = 5;
let variable_c = 6;
console.log(variable_a == variable_b); // Burda cavab true olaraq çıxacaq
console.log(variable_a == variable_c); // Burda cavab false olaraq çıxacaq


// 2. === --> Dəyərlərin bərabərliyini və data type-lərin bərabərliyini yoxlamaq üçün istifadə olunur.
let variable_d = 5;
let variable_e = "5";
let variable_f = 6;
console.log(variable_d === variable_e); // Burda cavab false olaraq çıxacaq
console.log(variable_d === variable_f); // Burda cavab false olaraq çıxacaq


// 3. != --> Dəyərlərin bərabər olmamasını yoxlamaq üçün istifadə olunur.
let variable_g = 5;
let variable_h = 5;
let variable_i = 6;
console.log(variable_g != variable_h); // Burda cavab false olaraq çıxacaq
console.log(variable_g != variable_i); // Burda cavab true olaraq çıxacaq


// 4. !== --> Dəyərlərin bərabər olmamasını və data type-lərin bərabər olmamasını yoxlamaq üçün istifadə olunur.
let variable_j = 5;
let variable_k = "5";
let variable_l = 6;
console.log(variable_j !== variable_k); // Burda cavab false olaraq çıxacaq
console.log(variable_j !== variable_l); // Burda cavab true olaraq çıxacaq


// 5. > --> normal müqayisə operatorudur
let variable_m = 5;
let variable_n = 6;
console.log(variable_m > variable_n); // Burda cavab false olaraq çıxacaq


// 6. < --> normal Müqayisə operatorudur
let variable_o = 5;
let variable_p = 6;
console.log(variable_o < variable_p); // Burda cavab true olaraq çıxacaq


// 7. >= --> normal Müqayisə operatorudur
let variable_q = 5;
let variable_r = 6;
console.log(variable_q >= variable_r); // Burda cavab false olaraq çıxacaq


// 8. <= --> normal Müqayisə operatorudur
let variable_s = 5;
let variable_t = 6;
console.log(variable_s <= variable_t); // Burda cavab true olaraq çıxacaq




//  Logical Operatorlar

// 1. && --> and operatorudur, hər iki tərəfdə true olanda true qaytarır digər halların hamısında false qaytarır
let variable_u = 5;
let variable_v = 6;
console.log((variable_u > 0) && (variable_v > 0)); // Burda cavab true olaraq çıxacaq
console.log((variable_u > 0) && (variable_v < 0)); // Burda cavab false olaraq çıxacaq


// || --> or operatorudur, hər iki tərəfdə false olanda false qaytarır digər halların hamısında true qaytarır
let variable_w = 5;
let variable_x = 6;
console.log((variable_w > 0) || (variable_x > 0)); // Burda cavab true olaraq çıxacaq
console.log((variable_w < 0) || (variable_x < 0)); // Burda cavab false olaraq çıxacaq


// ! --> not operatorudur, true olarsa false qaytarır, false olarsa true qaytarır
let variable_y = 5;
let variable_z = 6;
console.log(!(variable_y > 0)); // Burda cavab false olaraq çıxacaq
console.log(!(variable_y < 0)); // Burda cavab true olaraq çıxacaq




// Ternary Operator

// 1. ? --> Ternary operatorudur. If-else in bir sətirdə yazıla bilən versiyasıdır.
let age = 18;
let message = (age >= 18) ? "Yetkin yaşdasınız" : "Yetkin deyilsiniz"; // Cavab "Yetkin yaşdasınız" olacaq
console.log(message);

// Burda (age >= 18) şərtdir. "?" işarəsindən sonra true olan halda qayıdacaq cavab yazılır, ":" ishtərəsindən sonra false olan halda qayıdacaq cavab yazılır. İndi if-else ilə arasındakı fərqi görmək üçün aşağıdakı nümunəyə baxaq
let age_1 = 18;

let message_1;
if (age_1 >= 18) {
    message_1 = "Yetkinyasınız";
} else {
    message_1 = "Yetkin deyilsiniz";
}
console.log(message_1); // Cavab "Yetkin yaşdasınız" olacaq