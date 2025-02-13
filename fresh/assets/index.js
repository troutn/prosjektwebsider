// Copy Code Plugin Scripts 

document.addEventListener('DOMContentLoaded', function() {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll('.wp-block-code');
    
    codeBlocks.forEach(block => {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button dashicons dashicons-clipboard';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Create tooltip
        const tooltip = document.createElement('span');
        tooltip.className = 'copy-tooltip';
        tooltip.textContent = 'Copied!';
        
        // Add button and tooltip to code block
        block.style.position = 'relative';
        block.appendChild(copyButton);
        block.appendChild(tooltip);
        
        // Add click handler
        copyButton.addEventListener('click', async function() {
            // Get the code content
            const code = block.querySelector('code').innerText;
            
            try {
                await navigator.clipboard.writeText(code);
                
                // Visual feedback
                copyButton.classList.add('clicked', 'copied');
                copyButton.classList.remove('dashicons-clipboard');
                copyButton.classList.add('dashicons-yes');
                
                // Show tooltip
                tooltip.classList.add('show');
                
                // Reset button and hide tooltip after 2 seconds
                setTimeout(() => {
                    copyButton.classList.remove('clicked', 'copied');
                    copyButton.classList.remove('dashicons-yes');
                    copyButton.classList.add('dashicons-clipboard');
                    tooltip.classList.remove('show');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
        });
    });
}); 