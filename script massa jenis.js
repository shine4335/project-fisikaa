document.getElementById('archimedesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai input dari form
    const buoyantForce = parseFloat(document.getElementById('buoyantForce').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const gravity = parseFloat(document.getElementById('gravity').value);
    
    // Validasi input
    if (isNaN(buoyantForce) || isNaN(volume) || isNaN(gravity)) {
        document.getElementById('result').innerText = "Silakan masukkan nilai yang valid.";
        return;
    }
    
    // Hitung massa jenis cairan
    const density = buoyantForce / (volume * gravity);
    
    // Tampilkan hasil
    document.getElementById('result').innerText = `Massa Jenis Cairan: ${density.toFixed(2)} kg/m³`;
});
