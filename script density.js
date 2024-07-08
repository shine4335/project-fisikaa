document.getElementById('archimedesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai input dari form
    const mass = parseFloat(document.getElementById('mass').value);
    const volume = parseFloat(document.getElementById('volume').value);
    
    // Validasi input
    if (isNaN(mass) || isNaN(volume)) {
        document.getElementById('result').innerText = "Silakan masukkan nilai yang valid.";
        return;
    }
    
    // Hitung massa jenis
    const density = mass / volume;
    
    // Tampilkan hasil
    document.getElementById('result').innerText = `Massa Jenis Objek: ${density.toFixed(2)} kg/m³`;
});
