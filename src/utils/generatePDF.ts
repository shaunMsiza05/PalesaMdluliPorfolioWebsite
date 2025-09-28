import jsPDF from 'jspdf';

export const generatePalesaCVPDF = () => {
  const doc = new jsPDF();
  
  // Colors
  const primaryColor = '#1e3a8a'; // Navy blue
  const accentColor = '#d97706'; // Gold
  const textColor = '#374151'; // Gray
  
  let yPosition = 20;
  
  // Header with name and title
  doc.setFontSize(24);
  doc.setTextColor(primaryColor);
  doc.text('PALESA MDLULI', 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(accentColor);
  doc.text('Media Professional & Radio Presenter', 20, yPosition);
  
  // Contact Information
  yPosition += 15;
  doc.setFontSize(10);
  doc.setTextColor(textColor);
  doc.text('Email: palesanarcissus@gmail.com', 20, yPosition);
  doc.text('Phone: 061 469 7344', 20, yPosition + 5);
  doc.text('Location: Evaton West', 20, yPosition + 10);
  
  // Professional Summary
  yPosition += 25;
  doc.setFontSize(16);
  doc.setTextColor(primaryColor);
  doc.text('PROFESSIONAL SUMMARY', 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(10);
  doc.setTextColor(textColor);
  const summaryText = [
    'Highly motivated and competitive individual with proven excellence in radio broadcasting',
    'and media consulting. Strong background in customer service with exceptional',
    'communication and presentation skills. Proven track record of exceeding personal',
    'goals and delivering exceptional results through continuous improvement.'
  ];
  
  summaryText.forEach(line => {
    doc.text(line, 20, yPosition);
    yPosition += 5;
  });
  
  // Work Experience
  yPosition += 10;
  doc.setFontSize(16);
  doc.setTextColor(primaryColor);
  doc.text('WORK EXPERIENCE', 20, yPosition);
  
  const experiences = [
    {
      title: 'Presenter',
      company: 'Timeline Radio (Johannesburg)',
      period: 'Nov 2020 - Dec 2022',
      achievements: [
        'Introduced streamlined system for music libraries and media files',
        'Educated listeners about breaking news and led regular station announcements',
        'Gathered audience feedback to consistently improve presentation quality',
        'Provided commentary on music, local politics and sporting events'
      ]
    },
    {
      title: 'Provident Fund Specialist',
      company: 'Ditlamelo Benefits Consulting (Johannesburg)',
      period: 'Jun 2020 - Oct 2022',
      achievements: [
        'Exceeded customer satisfaction by finding creative solutions to problems',
        'Recognized by management for providing exceptional customer service',
        'Planned and completed group projects, working smoothly with others',
        'Promoted high customer satisfaction with knowledgeable service'
      ]
    },
    {
      title: 'Radio Presenter',
      company: 'Inakekelo FM Radio (Siyabuswa)',
      period: 'May 2019 - Apr 2020',
      achievements: [
        'Planned shows by selecting music and topics and writing content',
        'Read news flashes to inform audiences of important events',
        'Interviewed show guests about topics of current interest',
        'Built relationships with sponsors to promote endorsements'
      ]
    }
  ];
  
  experiences.forEach(exp => {
    yPosition += 8;
    doc.setFontSize(12);
    doc.setTextColor(primaryColor);
    doc.text(exp.title, 20, yPosition);
    
    yPosition += 5;
    doc.setFontSize(10);
    doc.setTextColor(textColor);
    doc.text(`${exp.company} | ${exp.period}`, 20, yPosition);
    
    yPosition += 5;
    exp.achievements.forEach(achievement => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(`• ${achievement}`, 25, yPosition);
      yPosition += 4;
    });
    yPosition += 5;
  });
  
  // Skills
  if (yPosition > 220) {
    doc.addPage();
    yPosition = 20;
  }
  
  yPosition += 10;
  doc.setFontSize(16);
  doc.setTextColor(primaryColor);
  doc.text('KEY SKILLS', 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(10);
  doc.setTextColor(textColor);
  
  const skills = [
    'Radio Broadcasting & Content Creation',
    'Customer Service & Client Relations',
    'Written and Verbal Communication',
    'Public Speaking & Presentation',
    'Problem-solving & Critical Thinking',
    'Microsoft Office Suite',
    'Social Media Management',
    'Team Leadership & Collaboration',
    'Time Management & Multitasking',
    'Attention to Detail'
  ];
  
  const skillsPerColumn = Math.ceil(skills.length / 2);
  skills.forEach((skill, index) => {
    const column = Math.floor(index / skillsPerColumn);
    const row = index % skillsPerColumn;
    const xPos = 20 + (column * 90);
    const yPos = yPosition + (row * 5);
    doc.text(`• ${skill}`, xPos, yPos);
  });
  
  yPosition += skillsPerColumn * 5 + 10;
  
  // Education
  if (yPosition > 240) {
    doc.addPage();
    yPosition = 20;
  }
  
  doc.setFontSize(16);
  doc.setTextColor(primaryColor);
  doc.text('EDUCATION & TRAINING', 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(12);
  doc.setTextColor(primaryColor);
  doc.text('Comprehensive Commercial Counseling', 20, yPosition);
  
  yPosition += 5;
  doc.setFontSize(10);
  doc.setTextColor(textColor);
  doc.text('Red Cross Facility and Training (Evaton) | Completed 2017', 20, yPosition);
  
  yPosition += 5;
  doc.text('HIV/AIDS/TB/STIs, Grief/Relationship Counseling, Communication & Conflict Management', 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(12);
  doc.setTextColor(primaryColor);
  doc.text('National Senior Certificate', 20, yPosition);
  
  yPosition += 5;
  doc.setFontSize(10);
  doc.setTextColor(textColor);
  doc.text('Poelano Secondary School (Evaton) | Completed 2017', 20, yPosition);
  
  // Footer
  yPosition += 20;
  if (yPosition > 270) {
    doc.addPage();
    yPosition = 20;
  }
  
  doc.setFontSize(8);
  doc.setTextColor(textColor);
  doc.text('References available upon request', 20, yPosition);
  
  // Save the PDF
  doc.save('Palesa_Mdluli_Professional_CV.pdf');
};