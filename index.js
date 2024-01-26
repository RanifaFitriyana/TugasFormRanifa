function submitForm() {
    // Mengambil nilai dari inputan
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    // Validasi sederhana
    if (nama === '' || email === '' || pesan === '') {
      alert('Mohon isi formulir dulu');
      return;
    }

    // Menampilkan pesan terima kasih dan menyembunyikan formulir
    document.getElementById('Formulir').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
  }