document.addEventListener("DOMContentLoaded",function(){
    const menuBtn = document.getElementById("menu-btn");
    const menuModal = document.getElementById("menu-modal")
     // Open Login Modal
     menuBtn.addEventListener("click", function() {
        menuModal.style.display = "flex";
    });
});

 // Get references to sections
 const sectionA = document.getElementById("section1");
 const sectionB = document.getElementById("section2");
 const sectionC = document.getElementById("section3");
 const sectionD = document.getElementById("section4");
 const sectionE = document.getElementById("section5");
 const sectionF = document.getElementById("section6");

 const sectionH = document.getElementById("bookingFormHotel");
 const sectionT = document.getElementById("bookingFormTour");

 const sampleImage = document.getElementById("sampleimage");

 // Get references to buttons and links
 const loadSection1 = document.getElementById("Load-section-car");
 const loadSection2 = document.getElementById("Load-section-bus");
 const loadSection3 = document.getElementById("Load-section-train");
 const loadSection4 = document.getElementById("Load-section-flight");
 const loadSection5 = document.getElementById("Load-section-hotel");
 const loadSection6 = document.getElementById("Load-section-tour");

 const loadSection7 = document.getElementById("bookingForm1H");
 const loadSection8 = document.getElementById("bookingForm2H");
 const loadSection9 = document.getElementById("bookingForm3H");
 const loadSection10 = document.getElementById("bookingForm1T");
 const loadSection11 = document.getElementById("bookingForm2T");
 const loadSection12 = document.getElementById("bookingForm3T");

 // Function to hide all sections
 function hideAllSections() {
     sectionA.style.display = "none";
     sectionB.style.display = "none";
     sectionC.style.display = "none";
     sectionD.style.display = "none";
     sectionE.style.display = "none";
     sectionF.style.display = "none";

     sectionH.style.display = "none";
     sectionT.style.display = "none";
 }

 // Button event listeners
//  loadSection1.addEventListener("click", function () {
//      hideAllSections();
//      sectionA.style.display = "flex";
//  });

//  loadSection2.addEventListener("click", function () {
//      hideAllSections();
//      sectionB.style.display = "flex";
//  });

 // Anchor event listeners (prevent default and show specific section)

// Anchor event listeners (prevent default and show specific section)
loadSection1.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionA.style.display = "flex";
    sampleImage.style.display = "none";
});
// Anchor event listeners (prevent default and show specific section)
loadSection2.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionB.style.display = "flex";
    sampleImage.style.display = "none";
});
// Anchor event listeners (prevent default and show specific section)
loadSection3.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionC.style.display = "flex";
    sampleImage.style.display = "none";
});
// Anchor event listeners (prevent default and show specific section)
loadSection4.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionD.style.display = "flex";
    sampleImage.style.display = "none";
});


 loadSection5.addEventListener("click", function (event) {
     event.preventDefault(); // Prevent the default anchor behavior
     hideAllSections();
     sectionE.style.display = "flex";
     sampleImage.style.display = "none";
 });

 loadSection6.addEventListener("click", function (event) {
     event.preventDefault(); // Prevent the default anchor behavior
     hideAllSections();
     sectionF.style.display = "flex";
     sampleImage.style.display = "none";
 });
 loadSection7.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionH.style.display = "flex";
    sampleImage.style.display = "none";
});
loadSection8.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionH.style.display = "flex";
    sampleImage.style.display = "none";
});
loadSection9.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionH.style.display = "flex";
    sampleImage.style.display = "none";
});
loadSection10.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionT.style.display = "flex";
    sampleImage.style.display = "none";
});
loadSection11.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionT.style.display = "flex";
    sampleImage.style.display = "none";
});
loadSection12.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    hideAllSections();
    sectionT.style.display = "flex";
    sampleImage.style.display = "none";
});
