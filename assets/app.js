
function updateClock() {
  const now = new Date();
  const dateEl = document.getElementById('live-date');
  const timeEl = document.getElementById('live-time');
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString('el-GR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
  if (timeEl) {
    timeEl.textContent = now.toLocaleTimeString('el-GR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
updateClock();
setInterval(updateClock, 1000);
