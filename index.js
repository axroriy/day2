let pul = prompt("Pulingizni kiriting");
let dollor = 9433.34;
let yevro = 10354.03;
pul *= 1;
dollor *= 1;
yevro *= 1;

confirm(`Sizning xarajlaringiz:
 -Borish kelish samolyot bileti - $500
- Mehmonxona to’lovi to’liq safar davomiyligi uchun - $250
- Muzey va ko’ngilochar joylar uchun - 120 yevro

Umumiy xarajatlarni xisoblash`);
let chiqim = ( 750* dollor + 120* yevro );
confirm("Umumiy xarajatingiz" + " " + chiqim + " sum");

if(pul - chiqim > 0){
    alert("Oq yo'l");
}else {
    alert(" Uzr! pulingiz yetmadi keyingi safar borarsiz")
}


