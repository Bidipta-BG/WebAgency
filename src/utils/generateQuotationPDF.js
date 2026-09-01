import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const generateQuotationPDF = async ({
  readableAnswers,
  contactInfo,
  recommendation,
  managementType,
  selectedIndustry
}) => {
  // Utility to remove emojis and special characters that jsPDF Helvetica can't render
  const sanitize = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/[^\x20-\x7E]/g, ' ').replace(/\s+/g, ' ').trim();
  };

  const getCurrencyInfo = () => {
    let isUSD = false;
    if (contactInfo?.mobile) {
      try {
        const phoneStr = contactInfo.mobile.startsWith('+') ? contactInfo.mobile : '+' + contactInfo.mobile;
        const parsed = parsePhoneNumberFromString(phoneStr);
        if (parsed && parsed.country && parsed.country !== 'IN') {
          isUSD = true;
        }
      } catch (e) {}
    }
    return isUSD;
  };

  const isUSD = getCurrencyInfo();
  const exchangeRate = 83;

  // Helper to load and compress image for PDF to keep file size small
  const loadLogo = () => new Promise((resolve) => {
    const img = new Image();
    img.src = '/assets/images/axomITLab.jpg';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 400; // Resize large images
      const scale = Math.min(1, MAX_WIDTH / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Export as a compressed JPEG to save massive amounts of space
      const compressedUrl = canvas.toDataURL('image/jpeg', 0.6);
      resolve({ url: compressedUrl, width: canvas.width, height: canvas.height });
    };
    img.onerror = () => resolve(null);
  });

  const doc = new jsPDF();
  
  // Tiled Background Watermark Function
  const drawWatermarks = () => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(240, 240, 245); // Faint background color
    
    const w = doc.internal.pageSize.getWidth();
    const h = doc.internal.pageSize.getHeight();
    
    // Draw dense tiled pattern diagonally
    for (let y = -h; y < h * 2; y += 80) {
      for (let x = -w; x < w * 2; x += 110) {
        doc.text("XOMDIGITAL", x, y, { angle: 45 });
      }
    }
    
    // Reset font for normal text
    doc.setTextColor(33, 33, 33);
  };

  // Override addPage to automatically draw the background on all new pages
  const originalAddPage = doc.addPage.bind(doc);
  doc.addPage = function() {
    originalAddPage();
    drawWatermarks();
    return doc;
  };

  // Draw background watermark on Page 1
  drawWatermarks();
  
  // Basic Settings
  const pageWidth = doc.internal.pageSize.getWidth();
  const marginLeft = 15;
  let currentY = 20;

  // Header - Company Details
  const logo = await loadLogo();
  if (logo) {
    const maxH = 18; // Increased logo height
    const imgRatio = logo.width / logo.height;
    doc.addImage(logo.url, 'JPEG', marginLeft, currentY - 12, maxH * imgRatio, maxH, undefined, 'FAST');
    currentY += 12;
  } else {
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(33, 33, 33);
    doc.text("XOM Digital", marginLeft, currentY);
    currentY += 2;
  }
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text("Email Us: support@axomitlab.com", marginLeft, currentY + 6);
  doc.text("Call Us: +91 96069 14772", marginLeft, currentY + 11);
  
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN');
  const timeStr = now.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });
  doc.text(`Date: ${dateStr}, ${timeStr}`, marginLeft, currentY + 16);

  // Client Details (Right Aligned)
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(33, 33, 33);
  const clientText = "PREPARED FOR:";
  doc.text(clientText, pageWidth - 15 - doc.getTextWidth(clientText), currentY);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  
  const businessRow = [contactInfo.businessName, contactInfo.city].filter(Boolean).join(", ");
  const contactRow = [contactInfo.email, contactInfo.mobile].filter(Boolean).join(", ");

  const clientDetails = [
    contactInfo.ownerName || "Valued Client",
    businessRow,
    contactRow
  ].filter(Boolean); // removes empty rows

  let clientY = currentY + 6;
  clientDetails.forEach(detail => {
    doc.text(detail, pageWidth - 15 - doc.getTextWidth(detail), clientY);
    clientY += 5;
  });

  // Dynamically adjust spacing based on how many details were printed
  currentY = Math.max(currentY + 35, clientY + 15);

  // Title
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(79, 70, 229); // Indigo 600
  doc.text("PROJECT ESTIMATE & QUOTATION", pageWidth / 2, currentY, { align: "center" });
  
  currentY += 15;

  // Section 1: Requirements (Q&A)
  doc.setFontSize(12);
  doc.setTextColor(33, 33, 33);
  doc.text("1. Your Requirements", marginLeft, currentY);
  
  const qaData = readableAnswers.map(item => [sanitize(item.question), sanitize(item.answer)]);
  
  doc.autoTable({
    startY: currentY + 5,
    head: [['Question', 'Your Answer']],
    body: qaData,
    theme: 'grid',
    headStyles: { fillColor: [243, 244, 246], textColor: [55, 65, 81] },
    styles: { fontSize: 9, cellPadding: 4 },
    columnStyles: { 0: { cellWidth: 80 } }
  });

  currentY = doc.lastAutoTable.finalY + 15;

  // Section 2: Proposed Solution
  if (currentY > 250) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(33, 33, 33);
  doc.text("2. Proposed Solution", marginLeft, currentY);
  
  currentY += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const pkgName = recommendation.isCustom ? "Custom Build" : recommendation.packageName;
  doc.text(`Package Selected: ${sanitize(pkgName).toUpperCase()}`, marginLeft, currentY);
  
  const featuresData = recommendation.features.map(f => [sanitize(f)]);
  doc.autoTable({
    startY: currentY + 5,
    head: [['Included Features & Deliverables']],
    body: featuresData,
    theme: 'plain',
    headStyles: { fillColor: [238, 242, 255], textColor: [67, 56, 202] },
    styles: { fontSize: 9, cellPadding: 3 }
  });

  currentY = doc.lastAutoTable.finalY + 15;

  // Section 3: Investment Summary
  if (currentY > 220) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(33, 33, 33);
  doc.text("3. Investment Summary", marginLeft, currentY);

  const formatPrice = (price) => {
    if (isUSD) {
      return '$' + Math.round(price / exchangeRate).toLocaleString('en-US');
    }
    return 'Rs. ' + price.toLocaleString('en-IN');
  };
  const calcGst = (price) => Math.round(price * 1.18);

  const getPriceString = (priceObj, suffix = '') => {
    if (priceObj?.na) return 'N/A';
    if (priceObj?.fixed) {
      return `${formatPrice(priceObj.fixed)} ${suffix} (Fixed)`;
    }
    return `${formatPrice(calcGst(priceObj.min))} - ${formatPrice(calcGst(priceObj.max))} ${suffix}\n(Base: ${formatPrice(priceObj.min)} - ${formatPrice(priceObj.max)})`;
  };

  const pricingBody = [];
  if (recommendation.isCustom) {
    pricingBody.push(["Custom Quote Required", "TBD based on discussion"]);
  } else {
    pricingBody.push([
      "One-time Setup Fee", 
      getPriceString(recommendation.pricing.setupFee)
    ]);
    
    if (managementType === 'handover') {
      pricingBody.push([
        "Source Code Handover Fee (One-time)", 
        getPriceString(recommendation.pricing.handover)
      ]);
    } else {
      pricingBody.push([
        "Monthly Management Fee", 
        getPriceString(recommendation.pricing.monthly, '/ mo')
      ]);
      pricingBody.push([
        recommendation.pricing.annual?.fixed ? "Annual Management Fee" : "Annual Management Fee (Optional)", 
        getPriceString(recommendation.pricing.annual, recommendation.pricing.annual?.fixed ? '/ yr' : '/ yr (2 months free)')
      ]);
    }
  }

  doc.autoTable({
    startY: currentY + 5,
    head: [['Description', isUSD ? 'Estimated Cost (Incl. applicable taxes)' : 'Estimated Cost (Incl. 18% GST)']],
    body: pricingBody,
    theme: 'grid',
    headStyles: { fillColor: [31, 41, 55], textColor: [255, 255, 255] },
    styles: { fontSize: 10, cellPadding: 5, fontStyle: 'bold' }
  });

  currentY = doc.lastAutoTable.finalY + 20;

  // Terms and Notes
  if (currentY > 200) {
    doc.addPage();
    currentY = 20;
  }

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(220, 38, 38); // Red
  doc.text("Important Notes & Terms:", marginLeft, currentY);
  
  const detailedNotes = [
    ["1. VALIDITY OF QUOTATION:", "This quotation is valid for 10 days from the date of issue. Upon expiry, a new estimate may be required."],
    ["2. REQUIREMENT CHANGES:", "The pricing outlined above is strictly based on the requirements provided in the questionnaire. Any changes, additions, or modifications to the scope of work during detailed discussions will result in a revised quotation."],
    ["3. TAXES & GST:", isUSD ? "All prices mentioned above include applicable taxes. International transactions may be subject to additional bank fees." : "All prices mentioned above are exclusive of 18% GST. The final invoice will include the addition of 18% GST as per government regulations."],
    ["4. REFUND POLICY:", "• Setup Fee: A full refund of the setup fee is provided if the project is cancelled before any work begins.\n• Partial Refund: If cancellation is requested within the first half of the agreed delivery window, a partial refund (setup fee minus work completed) will be issued.\n• No Refund: No refunds will be provided after the first half of the delivery window.\n• Management Fees: Monthly or annual management and hosting fees are strictly non-refundable."]
  ];

  if (managementType !== 'handover') {
    detailedNotes.push(["5. CONTRACT & RENEWAL:", "The managed service plan requires a minimum 1-year contract. Renewal after the first year is completely optional. You may choose to discontinue or switch plans at the time of renewal."]);
  }

  doc.autoTable({
    startY: currentY + 5,
    body: detailedNotes,
    theme: 'plain',
    styles: { fontSize: 9, cellPadding: 3, textColor: [80, 80, 80] },
    columnStyles: { 
      0: { cellWidth: 55, fontStyle: 'bold', textColor: [33, 33, 33] },
      1: { cellWidth: 'auto' }
    }
  });



  // Save the PDF
  const safeName = (contactInfo.businessName || contactInfo.ownerName || "Client").replace(/[^a-z0-9]/gi, '_');
  doc.save(`XOMDigital_Quotation_${safeName}.pdf`);
};
