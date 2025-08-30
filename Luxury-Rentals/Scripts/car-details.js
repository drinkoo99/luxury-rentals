// car-details.js

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('car');
}

function setHeroImage(car) {
  const hero = document.getElementById('car-hero');
  if (car.image) {
    hero.style.backgroundImage = `url('${car.image}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
  }
}

(function init() {
  const slug = getSlug();
  const car = CARS.find(c => c.slug === slug);

  if (!car) {
    document.getElementById('car-name').textContent = 'Car not found';
    document.getElementById('car-description').textContent =
      'We couldn’t find this vehicle. Please go back and choose again.';
    return;
  }

  document.title = `${car.name} – LuxuryRentals`;
  document.getElementById('car-name').textContent = car.name;
  document.getElementById('car-quote').textContent = `“${car.quote}”`;
  document.getElementById('car-brand').textContent = car.brand || '—';
  document.getElementById('car-year').textContent = car.year || '—';
  document.getElementById('car-transmission').textContent = car.transmission || '—';
  document.getElementById('car-fuel').textContent = car.fuel || '—';
  document.getElementById('car-seats').textContent = car.seats ? `${car.seats} seats` : '—';
  document.getElementById('car-description').textContent = car.description;

  // NEW — show added specs if present
  const engineEl = document.getElementById('car-engine');
  const drivetrainEl = document.getElementById('car-drivetrain');
  const interiorEl = document.getElementById('car-interior');

  if (engineEl) engineEl.textContent = car.engine || '—';
  if (drivetrainEl) drivetrainEl.textContent = car.drivetrain || '—';
  if (interiorEl) interiorEl.textContent = car.interior || '—';

  if (car.perf) {
    document.getElementById('car-accel').textContent = car.perf.zeroTo100 ? `0–100 km/h: ${car.perf.zeroTo100}` : '—';
    document.getElementById('car-power').textContent = car.perf.powerKW ? `Power: ${car.perf.powerKW} kW` : '—';
    document.getElementById('car-top').textContent = car.perf.topSpeed ? `Top speed: ${car.perf.topSpeed}` : '—';
  } else {
    document.getElementById('perf-wrap').style.display = 'none';
  }

  setHeroImage(car);
})();
