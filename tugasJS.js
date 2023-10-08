// if
let angka = parseInt(prompt("Mari bermain. Masukkan angka boom:"));
let menang = false;
// angka 7 adalah angka boom, jika bukan angka boom, maka You Win! Tapi jika boom, You Lose!
if (angka !== 7) {
  menang = true;
  console.log("Kamu menang! Angka " + angka + " bukan angka BOOM");
}
if (!menang) {
  console.log("BOOM! Kamu kalah.");
}

//if else
let hari = prompt("Masukkan nilai berapa hari telur dierami:");
hari = parseInt(hari);
let kondisi;
//Jika total hari telur dierami adalah bilangan kelipatan 2, maka telur pecah.
// Jika totalnya adalah bilangan kelipatan 3, maka telur yang menetas berisi ayam kembar.
//Jika total tidak habis dibagi 2 dan tidak habis dibagi 3, maka telur tidak menetas
if (hari % 2 === 0) {
  kondisi = "Telur menetas";
  console.log(kondisi + " pada hari ke " + hari);
} else if (hari % 3 === 0) {
  kondisi =
    "Telur menetaskan ayam kembar karena dierami tiga kali sehari selama ";
  console.log(kondisi + hari + " hari");
} else {
  kondisi = "Telur tidak menetas";
  console.log(kondisi + " pada hari ke " + hari);
}

// nested if
let wishlist = prompt(
  "Masukkan 1 wishlist hadiah yang ingin kamu dapat di hari natal:"
);
let kado;
// kado akan dikirim jika panjang karakter wishlist kamu lebih dari 10, dan jika genap maka akan dikirim besok, namun jika ganjil maka akan dikirim sesuai panjang karakter wishlist kamu
// jika panjang karakter tidak lebih dari 10, kado tidak akan dikirim
if (wishlist.length >= 10) {
  console.log("Kado kamu akan dikirim.");
  if (wishlist.length % 2 == 0) {
    console.log("Dan tiba besok hari");
  } else {
    console.log("Pada hari ke " + wishlist.length);
  }
} else {
  console.log("Maaf, kado yang kamu inginkan belum bisa kami penuhi");
}

//switch case
let warna = prompt(
  "Let's Play! Guess the color. Merah campur biru jadi warna apa?"
);
//menebak warna campuran dari warna merah dan biru
switch (warna) {
  case "ungu":
    console.log("Benar");
    break;
  case "coklat":
    console.log(
      "Salah. Coklat adalah hasil campuran warna dari merah dan hijau."
    );
    break;
  case "oren":
    console.log(
      "Salah. Oren adalah hasil campuran warna dari merah dan kuning."
    );
    break;
  default:
    console.log("Pelajari pencampuran warna");
}

//for statement
let hitung = prompt("Masukkan angka:");
let sum = 0;
//menghitung jumlah semua bilangan ganjil dari angka yang diinput
for (let i = 1; i <= hitung; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(
  "Jumlah semua bilangan ganjil dari angka " + hitung + " adalah " + sum
);

//while
let size = parseInt(prompt("Masukkan ukuran sepatu Anda: "));
while (size >= 42) {
  size -= 2;
  break;
}
console.log("Ukuran sepatu yang harus Anda ambil adalah " + size);

//do while
let hewan = parseInt(prompt("Masukkan jumlah hewan kesayangan Anda: "));
do {
  hewan++;
} while (hewan % 5 == 0);
console.log("Jumlah hewan kesayangan Anda menjadi: " + hewan);

//function
//Mencari panjang potongan pizza yang hilang
function pizza(panjang, sum = 0, avg) {
  for (i = 1; i <= 3; i++) {
    let panjang = parseInt(
      prompt("Masukkan panjang potongan pizza (3 kali): ")
    );
    sum += panjang;
    avg = sum / 3;
  }
  console.log("Panjang potongan pizza yang dimakan adalah " + avg + " cm");
}
pizza();
