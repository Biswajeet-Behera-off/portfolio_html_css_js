const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
  // Skill bar animation
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  skillBars.forEach(skillBar => {
    const fillValue = skillBar.parentNode.querySelector('progress').value;
    skillBar.style.width = `${fillValue}%`;
  });
});