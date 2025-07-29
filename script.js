document.getElementById("hitungBtn").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const hasilDiv = document.getElementById("hasil");

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    hasilDiv.textContent = "Masukkan angka yang valid untuk berat dan tinggi.";
    return;
  }

  const bmi = weight / (height * height);
  let kategori = "";
  let kelas = "";
  let pesan = "";

  if (bmi < 18.5) {
    kategori = "Kurus (Underweight) 😟";
    kelas = "underweight";
    pesan = "Kurus banget, makan yang banyak dan bergizi ya!";
  } else if (bmi < 25) {
    kategori = "Normal (Sehat) 😊";
    kelas = "normal";
    pesan = "Wih, berat badan ideal nih! Tetap jaga pola makan sehat ya!";
  } else if (bmi < 30) {
    kategori = "Overweight (Berat Badan Berlebih) 😬";
    kelas = "overweight";
    pesan =
      "Aduduh berat badan berlebih, coba perbaiki pola makan dan olahraga ya!";
  } else {
    kategori = "Obesitas (Obese) 😱";
    kelas = "obese";
    pesan =
      "Waduh kamu obesitas kak, konsultasi ke tenaga medis secepatnya ya.";
  }

  hasilDiv.className = `result ${kelas}`;
  hasilDiv.innerHTML = `
    <h2>Hasil: ${bmi.toFixed(2)}</h2>
    <p>Kategori: <strong>${kategori}</strong></p>
    <p>${pesan}</p>
  `;
});
