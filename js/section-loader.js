// Section Loader - Dynamically loads HTML sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: 'header-container', file: 'sections/header.html' },
        { id: 'home-container', file: 'sections/home.html' },
        { id: 'about-container', file: 'sections/about.html' },
        { id: 'experience-container', file: 'sections/experience.html' },
        { id: 'skills-container', file: 'sections/skills.html' },
        { id: 'projects-container', file: 'sections/projects.html' },
        { id: 'certificates-container', file: 'sections/certificates.html' },
        { id: 'footer-container', file: 'sections/footer.html' }
    ];

    // Function to load a section
    async function loadSection(containerId, filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.status}`);
            }
            const html = await response.text();
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
            } else {
                console.warn(`Container with ID '${containerId}' not found`);
            }
        } catch (error) {
            console.error(`Error loading section ${filePath}:`, error);
            // Fallback: show error message in container
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div class="alert alert-warning">Section temporarily unavailable</div>`;
            }
        }
    }

    // Load all sections
    async function loadAllSections() {
        const loadPromises = sections.map(section => 
            loadSection(section.id, section.file)
        );
        
        try {
            await Promise.all(loadPromises);
            console.log('All sections loaded successfully');
            
            // Trigger a custom event when all sections are loaded
            const sectionsLoadedEvent = new CustomEvent('sectionsLoaded');
            document.dispatchEvent(sectionsLoadedEvent);
        } catch (error) {
            console.error('Error loading some sections:', error);
        }
    }

    // Start loading sections
    loadAllSections();
});

// Listen for sections loaded event to initialize other scripts
document.addEventListener('sectionsLoaded', function() {
    console.log('Sections loaded, initializing other features...');
    
    // Re-initialize any event listeners that depend on dynamically loaded content
    // This ensures scripts like navigation, theme toggle, etc. work correctly
    
    // Dispatch a custom event for other scripts to listen to
    const initializeEvent = new CustomEvent('reinitializeScripts');
    document.dispatchEvent(initializeEvent);
});