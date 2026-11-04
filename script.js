const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('.contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const message = event.currentTarget.querySelector('.form-success');
  message.textContent = 'Thanks — your enquiry is ready to send. Please connect this form to the gym’s email service before publishing.';
});

const motionTargets = document.querySelectorAll('.program, .stats div, .gallery-item');
const motionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
}, { threshold: 0.13 });
motionTargets.forEach(item => motionObserver.observe(item));
