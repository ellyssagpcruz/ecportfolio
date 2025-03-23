// Custom scrollbar implementation

export function initCustomScrollbar() {
  const scrollContainer = document.querySelector('.custom-scrollbar') as HTMLElement;
  if (!scrollContainer) return;

  // Function to update scrollbar thumb position
  const updateScrollThumb = () => {
    // Get scroll info
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight;
    const clientHeight = scrollContainer.clientHeight;
    
    // Skip if no scroll needed
    if (scrollHeight <= clientHeight) return;
    
    // Find the Contact section to determine where scrollbar should end
    const contactSection = document.querySelector('#contact') as HTMLElement;
    let contactBottom = scrollHeight;
    
    if (contactSection) {
      // Calculate the bottom position of the contact section relative to the document
      const contactRect = contactSection.getBoundingClientRect();
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
      contactBottom = contactRect.bottom + scrollOffset;
      
      // Add a small buffer (20px) to ensure we include the full contact section
      contactBottom += 20;
    }
    
    // Calculate the visible scrollbar height (from navbar to contact section end)
    const navbarHeight = 64; // Matches the CSS value
    const visibleScrollbarHeight = Math.min(contactBottom - navbarHeight, clientHeight - navbarHeight);
    
    // Update the CSS variable for the track height
    scrollContainer.style.setProperty('--scrollbar-height', `${visibleScrollbarHeight}px`);
    
    // Calculate thumb position and size
    const scrollRatio = clientHeight / scrollHeight;
    const thumbHeight = Math.max(15, Math.min(clientHeight * scrollRatio, 100)); // Min 15px, max 100px
    
    // Calculate position (accounting for navbar)
    const scrollableHeight = visibleScrollbarHeight - thumbHeight;
    const scrollProgress = scrollTop / (scrollHeight - clientHeight);
    const thumbPosition = navbarHeight + Math.min(scrollProgress * scrollableHeight, scrollableHeight);
    
    // Apply position via CSS variable
    scrollContainer.style.setProperty('--thumb-top', `${thumbPosition}px`);
    scrollContainer.style.setProperty('--thumb-height', `${thumbHeight}px`);
    
    // Add 'scrolling' class when scrolled
    if (scrollTop > 0) {
      scrollContainer.classList.add('is-scrolling');
    } else {
      scrollContainer.classList.remove('is-scrolling');
    }
  };

  // Listen for scroll events
  scrollContainer.addEventListener('scroll', updateScrollThumb);
  
  // Initial update
  updateScrollThumb();
  
  // Show scrollbar when hovering
  scrollContainer.addEventListener('mouseenter', () => {
    scrollContainer.classList.add('is-hovered');
  });
  
  scrollContainer.addEventListener('mouseleave', () => {
    scrollContainer.classList.remove('is-hovered');
  });
  
  // Handle window resize and DOM content loaded
  window.addEventListener('resize', updateScrollThumb);
  window.addEventListener('load', updateScrollThumb);
  
  // Run the update after a small delay to ensure all elements are properly sized
  setTimeout(updateScrollThumb, 100);
  setTimeout(updateScrollThumb, 500);
  setTimeout(updateScrollThumb, 1000);
  
  return () => {
    // Cleanup function
    scrollContainer.removeEventListener('scroll', updateScrollThumb);
    window.removeEventListener('resize', updateScrollThumb);
    window.removeEventListener('load', updateScrollThumb);
    scrollContainer.removeEventListener('mouseenter', () => {
      scrollContainer.classList.add('is-hovered');
    });
    scrollContainer.removeEventListener('mouseleave', () => {
      scrollContainer.classList.remove('is-hovered');
    });
  };
} 