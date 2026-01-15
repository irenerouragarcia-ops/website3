document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tool Viewer Logic
    const toolFrame = document.getElementById('tool-frame');
    if (toolFrame) {
        const params = new URLSearchParams(window.location.search);
        const toolKey = params.get('tool');

        const tools = {
            'polyscope': 'https://visual-tools.github.io/Polyscope/',
            'overton': 'https://visual-tools.github.io/Overton-window-example/',
            'clusters': 'https://visual-tools.github.io/knowledge-word-clusters/',
            'concept': 'tools/concept-mapping/index.html',
            'structure': 'tools/system-architecture/index.html',
            'flow': 'tools/flow-dynamics/index.html'
        };

        if (toolKey && tools[toolKey]) {
            // Defer loading to allow UI to paint first
            setTimeout(() => {
                toolFrame.src = tools[toolKey];
            }, 100);
            document.title = `${toolKey.charAt(0).toUpperCase() + toolKey.slice(1)} | ontology.graphics`;
        } else {
            // Default or error state
            toolFrame.src = 'about:blank';
            document.body.innerHTML += '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">Tool not found.</div>';
        }
    }

    console.log('ontology.graphics initialized');
});
