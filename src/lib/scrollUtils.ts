'use client';

export const scrollToContact = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  
  console.log("scrollToContact function called");
  
  // Try to find the consultation section instead of contact
  const consultationSection = document.getElementById('consultation');
  console.log("Consultation section found:", !!consultationSection);
  
  if (consultationSection) {
    // Log position before scrolling
    console.log("Consultation section position:", consultationSection.getBoundingClientRect());
    
    // Attempt scrolling with smooth behavior
    consultationSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Alternative method - setTimeout to ensure it works
    setTimeout(() => {
      // Get the element's position relative to the viewport
      const rect = consultationSection.getBoundingClientRect();
      // Get the absolute position by adding the scroll position
      const absoluteTop = rect.top + window.scrollY;
      
      console.log("Scrolling to position:", absoluteTop);
      
      // Use window.scrollTo as a fallback
      window.scrollTo({
        top: absoluteTop,
        behavior: 'smooth'
      });
    }, 100);
  } else {
    console.error("Consultation section not found! Make sure the element with id='consultation' exists in the DOM");
  }
}; 