document.addEventListener('DOMContentLoaded', function() {
    // Class code copy functionality
    const classCodeElement = document.querySelector('.class-code');
    if (classCodeElement) {
        classCodeElement.addEventListener('click', function() {
            // Create a temporary element to copy text
            const tempElement = document.createElement('textarea');
            tempElement.value = 'vhldow7';
            document.body.appendChild(tempElement);
            tempElement.select();
            document.execCommand('copy');
            document.body.removeChild(tempElement);
            
            alert('Class code copied to clipboard!');
        });
    }
    
    // Add link button functionality
    const addLinkBtn = document.querySelector('.link-btn');
    if (addLinkBtn) {
        addLinkBtn.addEventListener('click', function() {
            alert('Add link functionality would go here');
        });
    }
    
    // Generate link button functionality
    const generateLinkBtn = document.querySelector('.generate-link-btn');
    if (generateLinkBtn) {
        generateLinkBtn.addEventListener('click', function() {
            alert('Generate link functionality would go here');
        });
    }
    
    // Comment functionality
    const commentInputs = document.querySelectorAll('.comment-input');
    const sendButtons = document.querySelectorAll('.send-btn');
    
    // Function to toggle send button active state
    function toggleSendButton(input, button) {
        if (input.value.trim().length > 0) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    }

    commentInputs.forEach((input, index) => {
        const sendButton = sendButtons[index];
        
        // Add input event listener to toggle send button
        input.addEventListener('input', () => {
            toggleSendButton(input, sendButton);
        });
        
        // Add click event listener to send button
        sendButton.addEventListener('click', () => {
            const comment = input.value.trim();
            if (comment) {
                // Here you would typically send the comment to a server
                console.log('Sending comment:', comment);
                // Clear input after sending
                input.value = '';
                toggleSendButton(input, sendButton);
                alert('Comment sent!');
            }
        });
    }); 
});