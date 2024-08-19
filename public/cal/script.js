document.addEventListener("DOMContentLoaded", async function () {
    const eventosPorDia = await cargarEventos();

    const currentDate = new Date().toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" });
    const currentDateObject = new Date(currentDate);
    let currentYear = currentDateObject.getFullYear();
    let currentMonth = currentDateObject.getMonth();

    async function cargarEventos() {
        try {
            const response = await fetch('eventos.json');
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            const eventos = await response.json();
            return eventos.reduce((acc, evento) => {
                const { fecha, descripcion, url } = evento;
                if (!acc[fecha]) acc[fecha] = [];
                acc[fecha].push({ fecha, descripcion, url });
                return acc;
            }, {});
        } catch (error) {
            console.error('Error:', error);
            return {};
        }
    }

    function generateDays(year, month) {
        const daysElement = document.querySelector(".days");
        daysElement.innerHTML = "";
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("day", "empty");
            daysElement.appendChild(emptyDay);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement("div");
            day.classList.add("day");
            day.textContent = i;
            day.dataset.date = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

            const eventDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const eventsForDay = eventosPorDia[eventDateStr];
            if (eventsForDay && eventsForDay.length > 0) {
                day.classList.add("event");
                const eventDate = new Date(eventDateStr);
                if (eventDate < currentDateObject) {
                    day.classList.add("past-event");
                } else {
                    const dot = document.createElement("div");
                    dot.classList.add("dot");
                    day.appendChild(dot);
                }
            }

            if (currentDateObject.getFullYear() === year && currentDateObject.getMonth() === month && currentDateObject.getDate() === i) {
                day.classList.add("current-day");
            }

            daysElement.appendChild(day);
        }
    }

    function showEventsForDay(date) {
        const formattedDate = date.toISOString().split('T')[0];
        const eventsForDay = eventosPorDia[formattedDate];
        const eventListElement = document.querySelector(".event-container");
        const formattedDateStr = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

        let eventListHTML = `</br><h3> ${formattedDateStr}</h3></br>`;
        if (eventsForDay && eventsForDay.length > 0) {
            eventListHTML += eventsForDay.map(event => `
                </br>
                <div class="event">
                    <a href="${event.url}" target="_blank">${event.descripcion}</a>
                    <i class="fa-solid fa-circle-arrow-right"></i>
                </div>
                </br>
                </br>
                <hr>
            `).join("");
        } else {
            eventListHTML += "<p>No hay publicaciones en la fecha seleccionada.</p>";
        }
        eventListElement.innerHTML = eventListHTML;
    }

    function showCurrentMonth() {
        const monthElement = document.getElementById("month");
        const dateStrElement = document.getElementById("date-str");
        const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        monthElement.textContent = months[currentMonth];
        dateStrElement.textContent = `${months[currentMonth]} ${currentYear}`;
    }

    function init() {
        showCurrentMonth();
        generateDays(currentYear, currentMonth);
        showEventsForDay(currentDateObject);
    }

    init();

    document.querySelector(".next").addEventListener("click", function () {
        currentMonth += 1;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear += 1;
        }
        generateDays(currentYear, currentMonth);
        showCurrentMonth();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentMonth -= 1;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear -= 1;
        }
        generateDays(currentYear, currentMonth);
        showCurrentMonth();
    });

    document.querySelector(".days").addEventListener("click", function (event) {
        if (event.target.classList.contains("day") && !event.target.classList.contains("empty")) {
            const clickedDay = event.target;
            const clickedDate = new Date(clickedDay.dataset.date + 'T00:00:00'); // Ajuste aquí
            showEventsForDay(clickedDate);
        }
    });
});
