'use client';

import { useEffect } from 'react';

export function ScrollDebugger() {
  useEffect(() => {
    // Check if the consultation section exists in the DOM on page load
    const checkConsultationSection = () => {
      console.log("Checking for consultation section in DOM...");
      const consultationSection = document.getElementById('consultation');
      console.log("Consultation section found on page load:", !!consultationSection);
      
      if (consultationSection) {
        console.log("Consultation section position:", consultationSection.getBoundingClientRect());
        console.log("Window height:", window.innerHeight);
        console.log("Document height:", document.body.scrollHeight);
      }
    };

    // Run immediately
    checkConsultationSection();
    
    // Also run after a short delay to ensure everything is loaded
    setTimeout(checkConsultationSection, 1000);
    
    // Add click event listener to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (text === 'Оставить заявку') {
        console.log("Found a relevant button:", text);
      }
    });
    
  }, []);

  return null; // This component doesn't render anything
} 