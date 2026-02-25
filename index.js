const projects = [
    {
        title: "Congressional Draft System",
        desc: "Web platform for managing legislative drafts, tracking submissions, and generating reports for congressional workflow.",
        images: ["cong1.JPG", "cong2.JPG", "cong3.JPG"],
        tech: "PHP, MySQL, Bootstrap, AJAX, jQuery",
        github: "https://github.com/marvinboloabio/Congressional-Draft.git",
        mainImg: "cong1.JPG"
    },
    {
        title: "Inventory Management System with POS",
        desc: "Inventory tracking and POS interface.",
        images: ["inv1.JPG", "inv2.JPG", "inv3.JPG"],
        tech: "PHP, MySQL, Bootstrap, JavaScript, Jquery, Ajax, Json",
        github: "https://github.com/marvinboloabio/inventory-system.git",
        mainImg: "inv1.JPG"
    },
    {
        title: "Clinic Management System",
        desc: "Patient and appointment management platform for clinics.",
        images: ["clinic1.JPG", "clinic2.JPG", "clinic3.JPG"],
        tech: "PHP, MySQL, AJAX, Bootstrap",
        github: "https://github.com/marvinboloabio/Clinic_System.git",
        mainImg: "clinic1.JPG"
    },
    {
        title: "MMC Engineering Company Website",
        desc: "Corporate website for MMC Engineering. Features project showcases, services overview, team management, and contact page with Google Maps integration.",
        images: ["eng2.JPG", "eng3.JPG", "eng4.JPG"],
        tech: "HTML, CSS, Bootstrap, PHP, JavaScript",
        github: "https://github.com/marvinboloabio/Engineer_Website.git",
        mainImg: "eng1.JPG"
    },
    {
        title: "ISP Billing Management System",
        desc: "Billing platform for ISPs. Features customer account management, invoice generation, secure payment tracking, and reporting tools.",
        images: ["isp2.JPG", "isp3.JPG", "isp4.JPG"],
        tech: "PHP, MySQL, AJAX, Bootstrap, Jquery",
        github: "https://github.com/marvinboloabio/ISP-BILLING-SYSTEM.git",
        mainImg: "isp1.JPG"
    },
    {
        title: "Church Event Online Booking System",
        desc: "Web app for booking and managing church events with authentication, scheduling, email confirmation, and admin panel.",
        images: ["lourdes1.JPG", "lourdes2.JPG", "lourdes3.JPG"],
        tech: "PHP, MySQL, Bootstrap, JavaScript, Jquery, Ajax, Json",
        github: "https://github.com/marvinboloabio/Our-Lady-Lourdes-Church-Event-Booking-Management-System.git",
        mainImg: "lourdes1.JPG"
    },
    {
        title: "Personal Portfolio Website",
        desc: "Professional portfolio website showcasing projects and skills.",
        images: ["port1.JPG", "port2.JPG", "port3.JPG"],
        tech: "HTML, CSS, JavaScript, Bootstrap",
        github: "https://marvinboloabio.github.io/Virtual-Assistant-Portfolio/",
        mainImg: "port1.JPG"
    }
];

const container = document.getElementById("portfolioContainer");

projects.forEach(project => {
    container.innerHTML += `
    <div class="card project-card" style="width:300px; padding:15px;"
         data-title="${project.title}" data-desc="${project.desc}" data-images="${project.images.join(',')}">
      <img src="${project.mainImg}" alt="${project.title} Screenshot">
      <h3>${project.title}</h3>
      <p><strong>Tech:</strong> ${project.tech}</p>
      <div class="portfolio-buttons d-flex justify-content-center gap-4 mt-2">
        <button class="btn btn-outline-light btn-sm previewBtn">
          <i class="fas fa-eye"></i> Preview
        </button>
        <a href="${project.github}" target="_blank" class="btn btn-light btn-sm">
          <i class="fas fa-external-link-alt"></i> Visit Github
        </a>
      </div>
    </div>
  `;
});

$(".previewBtn").click(function () {

    let card = $(this).closest(".project-card");

    let title = card.data("title");
    let desc = card.data("desc");
    let images = card.data("images").split(",");

    $("#modalTitle").text(title);
    $("#modalDesc").text(desc);

    let carouselHTML = "";

    images.forEach((img, i) => {
        carouselHTML += `
            <div class="carousel-item ${i == 0 ? "active" : ""}">
                <img src="${img}" class="d-block w-100">
            </div>
        `;
    });

    $("#carouselInner").html(carouselHTML);

    $("#projectModal").modal("show");
});

window.addEventListener("scroll", function () {
    document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});