document.addEventListener("DOMContentLoaded", function() {
    const createDonutChart = (id, label, value) => {
        const ctx = document.getElementById(id).getContext("2d");
        new Chart(ctx, {
            type: "doughnut",
            data: {
                datasets: [{
                    label: `${label} dalam persen`,
                    data: [value, 100 - value],
                    backgroundColor: ['#313569', '#e9ecef'], 
                    borderWidth: 1,
                }]
            },
            options: {
                cutoutPercentage: 70, 
                rotation: -Math.PI / 2,  
                responsive: true,
                maintainAspectRatio: true,  
                legend: {
                    display: false,  
                },
                tooltips: {
                    enabled: true, 
                },
            }
        });
    };

    createDonutChart("OracleChart", "Oracle", 70);
    createDonutChart("cssChart", "CSS", 25);
    createDonutChart("jsChart", "JavaScript", 25);
    createDonutChart("phpChart", "PHP", 55);
    createDonutChart("pythonChart", "Python", 75);
});


document.addEventListener("DOMContentLoaded", function() {
    let h3Elements = document.querySelectorAll('.intro h3');
    let currentIndex = 0;

    function showNextH3() {
        h3Elements.forEach(h3 => {
            h3.classList.remove('visible');
            h3.classList.add('hidden');
        });

        h3Elements[currentIndex].classList.remove('hidden');
        h3Elements[currentIndex].classList.add('visible');

        currentIndex = (currentIndex + 1) % h3Elements.length;
    }


    showNextH3();

  
    setInterval(showNextH3, 5000); 
});