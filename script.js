document.getElementById('cortexForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form refresh

  // Get values from the form
  const age = parseFloat(document.getElementById('age').value);
  const gcs = parseInt(document.getElementById('gcs').value);
  const asa = document.getElementById('asa').value === 'yes' ? 1 : 0;
  const pupil = parseInt(document.getElementById('pupil').value);
  const etco2 = parseFloat(document.getElementById('etco2').value);

  const hb = parseFloat(document.getElementById('hb').value) || 0;
  const aptt = parseFloat(document.getElementById('aptt').value) || 0;
  const ph = parseFloat(document.getElementById('ph').value) || 0;
  const cistern = document.getElementById('cistern').value;
  const ivh = document.getElementById('ivh').value === 'present' ? 1 : 0;
  const midline = document.getElementById('midline').value === 'present' ? 1 : 0;

  // Placeholder logic for calculating probability (implement actual model here)
  let probability = 0;

  // Example: simple sum (in reality, you’d use regression coefficients or model equations)
  probability += (age / 100) + gcs * 0.2 + asa + pupil + etco2 * 0.1;
  probability += hb * 0.05 + aptt * 0.03 + ph * 0.1 + (cistern === 'absent' ? 1 : 0) + ivh + midline;

  // Format the result and display
  probability = (probability > 1 ? 1 : probability).toFixed(2); // Ensuring a valid probability range
  document.getElementById('result').innerHTML = `30-day Mortality Risk: ${(probability * 100).toFixed(2)}%`;
});
