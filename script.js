/**
 * Personal Portfolio - Lahari Kandukuri
 * Vanilla JavaScript for navigation, form validation, and interactive features.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------------------
  // 1. DYNAMIC FOOTER YEAR
  // ----------------------------------------------------
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ----------------------------------------------------
  // 2. MOBILE NAVIGATION DRAWER & SCROLL SHADOW
  // ----------------------------------------------------
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ----------------------------------------------------
  // 3. ACTIVE NAV LINK HIGHLIGHTING (SCROLL SPY)
  // ----------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // offset for fixed header
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // ----------------------------------------------------
  // 4. SMART RESUME DOWNLOAD HANDLER
  // Gracefully handles missing resume.pdf without a 404 page
  // ----------------------------------------------------
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  const resumeStatusAlert = document.getElementById('resumeStatusAlert');

  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
      const resumeUrl = 'assets/resume.pdf';

      // Check if file is available using fetch HEAD request
      fetch(resumeUrl, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            // File does not exist (404)
            e.preventDefault();
            showResumeNotice();
          }
          // If response.ok, browser proceeds with normal download
        })
        .catch(() => {
          // In local file:// protocol or offline environment
          // If file isn't present, test by opening an image or handling gracefully
          // We show a polite notice if user is testing without the file added
          const imgTest = new Image();
          imgTest.src = resumeUrl;
          imgTest.onerror = () => {
            if (resumeStatusAlert) {
              resumeStatusAlert.classList.remove('hidden');
              resumeStatusAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          };
        });
    });
  }

  function showResumeNotice() {
    if (resumeStatusAlert) {
      resumeStatusAlert.classList.remove('hidden');
      resumeStatusAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      alert('The resume PDF will be available soon! In the meantime, please contact me via email.');
    }
  }

  // ----------------------------------------------------
  // 5. PROFILE PHOTO AUTO-DETECTOR
  // Checks if user placed "profile.jpg" or "profile.png" in assets/
  // ----------------------------------------------------
  const profileImg = document.getElementById('profileImg');
  if (profileImg) {
    const candidateExtensions = ['assets/profile.jpg', 'assets/profile.png', 'assets/profile.jpeg'];
    
    function tryNextImage(index) {
      if (index >= candidateExtensions.length) return; // Keep SVG placeholder
      const testImage = new Image();
      testImage.src = candidateExtensions[index];
      testImage.onload = () => {
        profileImg.src = candidateExtensions[index];
      };
      testImage.onerror = () => {
        tryNextImage(index + 1);
      };
    }

    tryNextImage(0);
  }

  // ----------------------------------------------------
  // 6. CONTACT FORM VALIDATION & STATIC SITE FEEDBACK
  // Honest feedback: Explains this is a static portfolio
  // ----------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const subjectInput = document.getElementById('subject');
  const formNotice = document.getElementById('formNotice');

  // Error element references
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  // Input listener to clear errors when typing
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      nameInput.classList.remove('is-invalid');
      nameError.textContent = '';
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('is-invalid');
      emailError.textContent = '';
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      messageInput.classList.remove('is-invalid');
      messageError.textContent = '';
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let isValid = true;

      // Validate Name
      const nameVal = nameInput.value.trim();
      if (!nameVal) {
        nameInput.classList.add('is-invalid');
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      } else if (nameVal.length < 2) {
        nameInput.classList.add('is-invalid');
        nameError.textContent = 'Name must be at least 2 characters.';
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
        nameError.textContent = '';
      }

      // Validate Email
      const emailVal = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!emailPattern.test(emailVal)) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = 'Please enter a valid email address (e.g., name@example.com).';
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
        emailError.textContent = '';
      }

      // Validate Message
      const messageVal = messageInput.value.trim();
      if (!messageVal) {
        messageInput.classList.add('is-invalid');
        messageError.textContent = 'Please enter a message.';
        isValid = false;
      } else if (messageVal.length < 10) {
        messageInput.classList.add('is-invalid');
        messageError.textContent = 'Message should be at least 10 characters long.';
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
        messageError.textContent = '';
      }

      // If form is valid
      if (isValid) {
        // Honest student portfolio feedback:
        // Since there is no live backend server configured, do not fake sending.
        const subjectVal = subjectInput && subjectInput.value.trim() 
          ? encodeURIComponent(subjectInput.value.trim()) 
          : encodeURIComponent('Portfolio Inquiry from ' + nameVal);
        
        const mailtoBody = encodeURIComponent(`Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`);
        const mailtoLink = `mailto:kandiukurilahari6301@gmail.com?subject=${subjectVal}&body=${mailtoBody}`;

        formNotice.className = 'form-notice info';
        formNotice.innerHTML = `
          <strong>Thank you, ${nameVal}!</strong><br>
          This portfolio is currently running client-side without a backend mail server.<br>
          <a href="${mailtoLink}" style="display:inline-block; margin-top:8px; font-weight:600; text-decoration:underline;">
            👉 Click here to send this message directly via your email client
          </a>
        `;

        // Reset form inputs after submission
        contactForm.reset();
      }
    });
  }
});
