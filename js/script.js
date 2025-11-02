// // Main JavaScript for Manify Platform
// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize all functionality
//     initNavigation();
//     initAnimations();
//     initSmoothScrolling();
//     initTestimonialCarousel();
//     initFormValidation();
//     initScrollEffects();
// });

// // Navigation functionality
// function initNavigation() {
//     const navbar = document.querySelector('.navbar');
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const navLinks = document.querySelector('.nav-links');

//     // Sticky navigation on scroll
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 100) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });

//     // Mobile menu toggle
//     if (mobileMenuBtn && navLinks) {
//         mobileMenuBtn.addEventListener('click', function() {
//             navLinks.classList.toggle('active');
//             this.classList.toggle('active');
//             document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
//         });

//         // Close mobile menu when clicking on links
//         const navItems = navLinks.querySelectorAll('a');
//         navItems.forEach(item => {
//             item.addEventListener('click', function() {
//                 navLinks.classList.remove('active');
//                 mobileMenuBtn.classList.remove('active');
//                 document.body.style.overflow = '';
//             });
//         });

//         // Close mobile menu when clicking outside
//         document.addEventListener('click', function(e) {
//             if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
//                 navLinks.classList.remove('active');
//                 mobileMenuBtn.classList.remove('active');
//                 document.body.style.overflow = '';
//             }
//         });
//     }
// }

// // Animation on scroll
// function initAnimations() {
//     const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .team-card, .value-card, .mv-card');

//     // Set initial state
//     animatedElements.forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(30px)';
//         element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     });

//     // Intersection Observer for scroll animations
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';

//                 // Stagger animation for cards in grids
//                 if (entry.target.parentElement.classList.contains('features-grid') || 
//                     entry.target.parentElement.classList.contains('testimonials-grid') ||
//                     entry.target.parentElement.classList.contains('team-grid') ||
//                     entry.target.parentElement.classList.contains('values-grid')) {
//                     const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
//                     entry.target.style.transitionDelay = `${index * 0.1}s`;
//                 }
//             }
//         });
//     }, {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     });

//     animatedElements.forEach(element => {
//         observer.observe(element);
//     });

//     // Hero section animations
//     const heroTitle = document.querySelector('.hero-title');
//     const heroSubtitle = document.querySelector('.hero-subtitle');
//     const heroButtons = document.querySelector('.hero-buttons');
//     const heroImage = document.querySelector('.hero-image img');

//     if (heroTitle) {
//         setTimeout(() => {
//             heroTitle.style.opacity = '1';
//             heroTitle.style.transform = 'translateY(0)';
//         }, 200);
//     }

//     if (heroSubtitle) {
//         setTimeout(() => {
//             heroSubtitle.style.opacity = '1';
//             heroSubtitle.style.transform = 'translateY(0)';
//         }, 400);
//     }

//     if (heroButtons) {
//         setTimeout(() => {
//             heroButtons.style.opacity = '1';
//             heroButtons.style.transform = 'translateY(0)';
//         }, 600);
//     }

//     if (heroImage) {
//         setTimeout(() => {
//             heroImage.style.opacity = '1';
//             heroImage.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
//         }, 800);
//     }
// }

// // Smooth scrolling for anchor links
// function initSmoothScrolling() {
//     const scrollLinks = document.querySelectorAll('a[href^="#"]');

//     scrollLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');

//             if (targetId === '#') return;

//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 const navbarHeight = document.querySelector('.navbar').offsetHeight;
//                 const targetPosition = targetElement.offsetTop - navbarHeight - 20;

//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });

//                 // Close mobile menu if open
//                 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//                 const navLinks = document.querySelector('.nav-links');
//                 if (mobileMenuBtn && navLinks && navLinks.classList.contains('active')) {
//                     navLinks.classList.remove('active');
//                     mobileMenuBtn.classList.remove('active');
//                     document.body.style.overflow = '';
//                 }
//             }
//         });
//     });
// }

// // Testimonial carousel (simple implementation)
// function initTestimonialCarousel() {
//     const testimonialCards = document.querySelectorAll('.testimonial-card');
//     let currentTestimonial = 0;

//     if (testimonialCards.length > 1) {
//         // Auto-rotate testimonials
//         setInterval(() => {
//             testimonialCards[currentTestimonial].classList.remove('active');
//             currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
//             testimonialCards[currentTestimonial].classList.add('active');
//         }, 5000);

//         // Set first testimonial as active
//         testimonialCards[0].classList.add('active');
//     }
// }

// // Form validation
// function initFormValidation() {
//     const forms = document.querySelectorAll('form');

//     forms.forEach(form => {
//         form.addEventListener('submit', function(e) {
//             e.preventDefault();

//             const inputs = this.querySelectorAll('input[required], textarea[required]');
//             let isValid = true;

//             inputs.forEach(input => {
//                 if (!input.value.trim()) {
//                     isValid = false;
//                     showError(input, 'This field is required');
//                 } else {
//                     clearError(input);

//                     // Email validation
//                     if (input.type === 'email') {
//                         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                         if (!emailRegex.test(input.value)) {
//                             isValid = false;
//                             showError(input, 'Please enter a valid email address');
//                         }
//                     }

//                     // Phone validation
//                     if (input.type === 'tel') {
//                         const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
//                         if (!phoneRegex.test(input.value.replace(/[\s\-\(\)]/g, ''))) {
//                             isValid = false;
//                             showError(input, 'Please enter a valid phone number');
//                         }
//                     }
//                 }
//             });

//             if (isValid) {
//                 // Simulate form submission
//                 const submitBtn = this.querySelector('button[type="submit"]');
//                 const originalText = submitBtn.textContent;

//                 submitBtn.innerHTML = '<i class="bi bi-check-lg"></i> Sending...';
//                 submitBtn.disabled = true;

//                 setTimeout(() => {
//                     submitBtn.innerHTML = '<i class="bi bi-check-lg"></i> Message Sent!';
//                     submitBtn.style.background = 'var(--accent)';

//                     setTimeout(() => {
//                         submitBtn.innerHTML = originalText;
//                         submitBtn.disabled = false;
//                         submitBtn.style.background = '';
//                         this.reset();
//                     }, 2000);
//                 }, 1500);
//             }
//         });

//         // Real-time validation
//         const inputs = form.querySelectorAll('input, textarea');
//         inputs.forEach(input => {
//             input.addEventListener('blur', function() {
//                 if (this.value.trim() && this.hasAttribute('required')) {
//                     clearError(this);

//                     if (this.type === 'email') {
//                         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                         if (!emailRegex.test(this.value)) {
//                             showError(this, 'Please enter a valid email address');
//                         }
//                     }
//                 }
//             });
//         });
//     });

//     function showError(input, message) {
//         clearError(input);

//         const errorDiv = document.createElement('div');
//         errorDiv.className = 'error-message';
//         errorDiv.style.color = 'var(--secondary)';
//         errorDiv.style.fontSize = '0.875rem';
//         errorDiv.style.marginTop = '0.5rem';
//         errorDiv.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${message}`;

//         input.style.borderColor = 'var(--secondary)';
//         input.parentNode.appendChild(errorDiv);
//     }

//     function clearError(input) {
//         input.style.borderColor = '';
//         const errorDiv = input.parentNode.querySelector('.error-message');
//         if (errorDiv) {
//             errorDiv.remove();
//         }
//     }
// }

// // Scroll effects and parallax
// function initScrollEffects() {
//     // Parallax effect for hero section
//     window.addEventListener('scroll', function() {
//         const scrolled = window.pageYOffset;
//         const heroSection = document.querySelector('.hero-section');

//         if (heroSection) {
//             const heroContent = heroSection.querySelector('.hero-content');
//             if (heroContent) {
//                 heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
//             }
//         }
//     });

//     // Active navigation highlighting
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.nav-link');

//     function highlightNavLink() {
//         let current = '';
//         const scrollPos = window.scrollY + 100;

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.offsetHeight;
//             const sectionId = section.getAttribute('id');

//             if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
//                 current = sectionId;
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href') === `#${current}`) {
//                 link.classList.add('active');
//             }
//         });
//     }

//     window.addEventListener('scroll', highlightNavLink);

//     // Counter animation for stats
//     const counters = document.querySelectorAll('.counter');
//     if (counters.length > 0) {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     animateCounter(entry.target);
//                     observer.unobserve(entry.target);
//                 }
//             });
//         });

//         counters.forEach(counter => observer.observe(counter));

//         function animateCounter(counter) {
//             const target = parseInt(counter.getAttribute('data-target'));
//             const duration = 2000;
//             const step = target / (duration / 16);
//             let current = 0;

//             const timer = setInterval(() => {
//                 current += step;
//                 if (current >= target) {
//                     counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
//                     clearInterval(timer);
//                 } else {
//                     counter.textContent = Math.floor(current).toLocaleString() + (counter.getAttribute('data-suffix') || '');
//                 }
//             }, 16);
//         }
//     }
// }

// // Utility function for debouncing
// function debounce(func, wait, immediate) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             timeout = null;
//             if (!immediate) func(...args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func(...args);
//     };
// }

// // Export functions for global access
// window.MANIFY = {
//     initNavigation,
//     initAnimations,
//     initSmoothScrolling,
//     initTestimonialCarousel,
//     initFormValidation,
//     initScrollEffects
// };



















// Main JavaScript for Manify Platform
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all functionality
    initNavigation();
    initAnimations();
    initSmoothScrolling();
    initTestimonialCarousel();
    initFormValidation();
    initScrollEffects();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    // Sticky navigation on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            this.classList.toggle('active');

            // Toggle body scroll
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on links
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function () {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Animation on scroll
function initAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .team-card, .value-card, .mv-card');

    // Set initial state
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Stagger animation for cards in grids
                if (entry.target.parentElement.classList.contains('features-grid') ||
                    entry.target.parentElement.classList.contains('testimonials-grid') ||
                    entry.target.parentElement.classList.contains('team-grid') ||
                    entry.target.parentElement.classList.contains('values-grid')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Hero section animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.hero-image img');

    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        heroSubtitle.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';

        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 400);
    }

    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(30px)';
        heroButtons.style.transition = 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s';

        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 600);
    }

    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'perspective(1000px) rotateY(-15deg) rotateX(10deg) translateY(30px)';
        heroImage.style.transition = 'opacity 1s ease 0.6s, transform 1s ease 0.6s';

        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(0)';
        }, 800);
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                const navLinks = document.querySelector('.nav-links');
                if (mobileMenuBtn && navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

// Testimonial carousel (simple implementation)
function initTestimonialCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    if (testimonialCards.length > 1) {
        // Auto-rotate testimonials
        setInterval(() => {
            testimonialCards[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            testimonialCards[currentTestimonial].classList.add('active');
        }, 5000);

        // Set first testimonial as active
        testimonialCards[0].classList.add('active');
    }
}

// Form validation
function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    showError(input, 'This field is required');
                } else {
                    clearError(input);

                    // Email validation
                    if (input.type === 'email') {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(input.value)) {
                            isValid = false;
                            showError(input, 'Please enter a valid email address');
                        }
                    }

                    // Phone validation
                    if (input.type === 'tel') {
                        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                        if (!phoneRegex.test(input.value.replace(/[\s\-\(\)]/g, ''))) {
                            isValid = false;
                            showError(input, 'Please enter a valid phone number');
                        }
                    }
                }
            });

            if (isValid) {
                // Simulate form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.innerHTML = '<i class="bi bi-check-lg"></i> Sending...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="bi bi-check-lg"></i> Message Sent!';
                    submitBtn.style.background = 'var(--accent)';

                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        this.reset();
                    }, 2000);
                }, 1500);
            }
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                if (this.value.trim() && this.hasAttribute('required')) {
                    clearError(this);

                    if (this.type === 'email') {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(this.value)) {
                            showError(this, 'Please enter a valid email address');
                        }
                    }
                }
            });
        });
    });

    function showError(input, message) {
        clearError(input);

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'var(--secondary)';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.5rem';
        errorDiv.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${message}`;

        input.style.borderColor = 'var(--secondary)';
        input.parentNode.appendChild(errorDiv);
    }

    function clearError(input) {
        input.style.borderColor = '';
        const errorDiv = input.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
}

// Scroll effects and parallax
function initScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');

        if (heroSection) {
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        let current = '';
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Counter animation for stats
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));

        function animateCounter(counter) {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current).toLocaleString() + (counter.getAttribute('data-suffix') || '');
                }
            }, 16);
        }
    }
}

// Utility function for debouncing
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Export functions for global access
window.MANIFY = {
    initNavigation,
    initAnimations,
    initSmoothScrolling,
    initTestimonialCarousel,
    initFormValidation,
    initScrollEffects
};