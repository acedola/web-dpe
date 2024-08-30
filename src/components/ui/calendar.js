import { useState, useEffect } from 'react';
import styles from '../../app/styles/Calendar.module.css';

export default function Calendar() {
  const [eventosPorDia, setEventosPorDia] = useState({});
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDateObject, setCurrentDateObject] = useState(new Date());
  const [eventosDelDia, setEventosDelDia] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventsForSelectedDay, setEventsForSelectedDay] = useState([]);

  useEffect(() => {
    async function cargarEventos() {
      try {
        const response = await fetch('/eventos.json');
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        const eventos = await response.json();
        const eventosAgrupados = eventos.reduce((acc, evento) => {
          const { fecha, descripcion, url } = evento;
          if (!acc[fecha]) acc[fecha] = [];
          acc[fecha].push({ fecha, descripcion, url });
          return acc;
        }, {});
        setEventosPorDia(eventosAgrupados);

        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0];
        setSelectedDate(today);
        setEventsForSelectedDay(eventosAgrupados[formattedToday] || []);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    cargarEventos();
  }, []);

  function generateDays(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className={`${styles.day} ${styles.empty}`}></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const eventDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const eventsForDay = eventosPorDia[eventDateStr];
      const isCurrentDay = currentDateObject.getFullYear() === year && currentDateObject.getMonth() === month && currentDateObject.getDate() === i;

      const dayClassNames = [styles.day];
      if (eventsForDay && eventsForDay.length > 0) {
        dayClassNames.push(styles.event);
        const eventDate = new Date(eventDateStr);
        if (eventDate < currentDateObject) {
          dayClassNames.push(styles.pastEvent);
        }
      }
      if (isCurrentDay) {
        dayClassNames.push(styles.currentDay);
      }

      days.push(
        <div key={`day-${i}`} className={dayClassNames.join(' ')} data-date={eventDateStr} onClick={() => handleDayClick(eventDateStr)}>
          {i}
        </div>
      );
    }

    return days;
  }

  function handleDayClick(eventDateStr) {
    const selectedDate = new Date(eventDateStr + 'T00:00:00'); // Agrega hora para evitar diferencias de zona horaria
    setSelectedDate(selectedDate);
    setEventsForSelectedDay(eventosPorDia[eventDateStr] || []);
  }
  

  function showCurrentMonth() {
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return `${months[currentMonth]} ${currentYear}`;
  }

  function handlePrevMonth() {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 0) {
        setCurrentYear(prevYear => prevYear - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  }

  function handleNextMonth() {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 11) {
        setCurrentYear(prevYear => prevYear + 1);
        return 0;
      }
      return prevMonth + 1;
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.calendar}>
          <div className={styles.month}>
            <i className={`${styles.prev} fas fa-angle-left`} onClick={handlePrevMonth}></i>
            <div className={styles.date}>
              <h1 id="month">{showCurrentMonth()}</h1>
            </div>
            <i className={`${styles.next} fas fa-angle-right`} onClick={handleNextMonth}></i>
          </div>
          <div className={styles.weekdays}>
            <div>Dom</div>
            <div>Lun</div>
            <div>Mar</div>
            <div>Miér</div>
            <div>Juev</div>
            <div>Vier</div>
            <div>Sáb</div>
          </div>
          <div className={styles.days}>
            {generateDays(currentYear, currentMonth)}
          </div>
        </div>
      </div>
      <div className={styles.eventContainer}>
        {selectedDate && (
          <>
            <h3>{selectedDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</h3>
            <br></br>
            {eventsForSelectedDay.length > 0 ? (
              eventsForSelectedDay.map((event, index) => (
                <div key={index} className={styles.event}>
                  <a href={event.url} target="_blank">{event.descripcion}</a>
                  <br></br>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  <hr />
                </div>
              ))
            ) : (
              <p>No hay publicaciones en la fecha seleccionada.</p>
            )}
            <hr />
          </>
        )}
      </div>
    </div>
  );
}
