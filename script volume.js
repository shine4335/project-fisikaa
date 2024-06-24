document.getElementById('archimedesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai input dari form
    const buoyantForce = parseFloat(document.getElementById('buoyantForce').value);
    const density = parseFloat(document.getElementById('density').value);
    const gravity = parseFloat(document.getElementById('gravity').value);
    
    // Validasi input
    if (isNaN(buoyantForce) || isNaN(density) || isNaN(gravity)) {
        document.getElementById('result').innerText = "Silakan masukkan nilai yang valid.";
        return;
    }
    
    // Hitung volume
    const volume = buoyantForce / (density * gravity);
    
    // Tampilkan hasil
    document.getElementById('result').innerText = `Volume Objek: ${volume.toFixed(2)} m³`;
});
