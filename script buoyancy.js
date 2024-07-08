document.getElementById('buoyantForceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai input dari form
    const volume = parseFloat(document.getElementById('volume').value);
    const density = parseFloat(document.getElementById('density').value);
    const gravity = parseFloat(document.getElementById('gravity').value);
    
    // Validasi input
    if (isNaN(volume) || isNaN(density) || isNaN(gravity)) {
        document.getElementById('result').innerText = "Silakan masukkan nilai yang valid.";
        return;
    }
    
    // Hitung gaya apung
    const buoyantForce = density * gravity * volume;
    
    // Tampilkan hasil
    document.getElementById('result').innerText = `Gaya Apung: ${buoyantForce.toFixed(2)} N`;
});
