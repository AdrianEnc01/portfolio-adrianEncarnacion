/* ============================================
   MAIN JAVASCRIPT - PORTFOLIO FUNCTIONALITY
   ============================================ */

// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
});

// ============================================
// ANIMATED PARTICLE BACKGROUND
// ============================================
class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.connectionDistance = 150;
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((particle, i) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
            this.ctx.fill();
            
            // Draw connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[j].x - particle.x;
                const dy = this.particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    const opacity = (1 - distance / this.connectionDistance) * 0.3;
                    this.ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system
new ParticleSystem('particles-canvas');

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// LOAD EXPERIENCE TIMELINE
// ============================================
async function loadExperience() {
    try {
        const response = await fetch('data/experience.json');
        const data = await response.json();
        const timeline = document.getElementById('timeline');
        
        if (!timeline) return;
        
        // Get current language
        const currentLang = localStorage.getItem('language') || 'en';
        const experiences = data[currentLang] || data.en;
        
        timeline.innerHTML = experiences.map((exp, index) => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3>${exp.role}</h3>
                    <h4>${exp.company}</h4>
                    <p>${exp.description}</p>
                    <div class="timeline-tech">
                        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="timeline-date">
                    <span>${exp.period}</span>
                </div>
                <div class="timeline-dot"></div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading experience:', error);
    }
}

// Load experience on page load
loadExperience();

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        const successMessage = document.getElementById('formSuccess');
        const errorMessage = document.getElementById('formError');
        
        // Hide previous messages
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i><span>Sending...</span>';
        
        try {
            // Here you would typically send the data to a backend service
            // For now, we'll simulate a successful submission
            console.log('Form submitted:', formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            successMessage.classList.remove('hidden');
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
            
            // In production, integrate with:
            // - EmailJS (https://www.emailjs.com/)
            // - Formspree (https://formspree.io/)
            // - Your own backend API
            
            /* Example EmailJS integration:
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
                .then(function(response) {
                    successMessage.classList.remove('hidden');
                    contactForm.reset();
                }, function(error) {
                    errorMessage.classList.remove('hidden');
                });
            */
            
        } catch (error) {
            console.error('Error submitting form:', error);
            errorMessage.classList.remove('hidden');
        } finally {
            // Restore button state
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
}

// ============================================
// GITHUB PROJECTS LOADER
// ============================================
async function loadGitHubProjects() {
    const username = document.getElementById('githubUsername').value.trim();
    const projectsGrid = document.getElementById('projectsGrid');
    const loadingSpinner = document.getElementById('projectsLoading');
    const errorMessage = document.getElementById('projectsError');
    
    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }
    
    // Show loading, hide others
    projectsGrid.innerHTML = '';
    loadingSpinner.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    
    try {
        // Fetch user's repositories from GitHub API
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        
        const repos = await response.json();
        
        // Hide loading
        loadingSpinner.classList.add('hidden');
        
        if (repos.length === 0) {
            projectsGrid.innerHTML = `
                <div class="col-span-full text-center py-12 text-gray-400">
                    <i class="fas fa-folder-open text-5xl mb-4"></i>
                    <p>No public repositories found for this user.</p>
                </div>
            `;
            return;
        }
        
        // Display repositories
        repos.forEach(repo => {
            const card = createProjectCard(repo);
            projectsGrid.innerHTML += card;
        });
        
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        loadingSpinner.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
}

function createProjectCard(repo) {
    const description = repo.description || 'No description available';
    const language = repo.language || 'Unknown';
    const stars = repo.stargazers_count;
    const forks = repo.forks_count;
    const updatedDate = new Date(repo.updated_at).toLocaleDateString();
    
    return `
        <div class="bg-bg-card border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/30 hover:-translate-y-2 group">
            <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                        <i class="fas fa-folder text-electric-blue mr-2"></i>
                        ${repo.name}
                    </h3>
                    <p class="text-gray-400 text-sm line-clamp-2 mb-4">
                        ${description}
                    </p>
                </div>
            </div>
            
            <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                ${language !== 'Unknown' ? `
                    <span class="flex items-center gap-1">
                        <span class="w-3 h-3 rounded-full bg-electric-blue"></span>
                        ${language}
                    </span>
                ` : ''}
                <span class="flex items-center gap-1">
                    <i class="fas fa-star text-cyber-green"></i>
                    ${stars}
                </span>
                <span class="flex items-center gap-1">
                    <i class="fas fa-code-branch text-electric-blue"></i>
                    ${forks}
                </span>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-electric-blue/10">
                <span class="text-xs text-gray-500">
                    <i class="far fa-clock mr-1"></i>
                    Updated ${updatedDate}
                </span>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer"
                   class="text-electric-blue hover:text-cyber-green transition-colors flex items-center gap-2 font-semibold">
                    View <i class="fas fa-external-link-alt text-sm"></i>
                </a>
            </div>
        </div>
    `;
}

// Load projects on page load with default username
window.addEventListener('DOMContentLoaded', function() {
    // You can set a default username here
    const defaultUsername = document.getElementById('githubUsername').value;
    if (defaultUsername) {
        loadGitHubProjects();
    }
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ============================================
// TECH CARD HOVER EFFECTS
// ============================================
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// UTILITY: RELOAD EXPERIENCE ON LANGUAGE CHANGE
// ============================================
window.addEventListener('languageChanged', function() {
    loadExperience();
});
