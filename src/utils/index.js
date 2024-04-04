import axios from "axios";

export const daysOfMonth = async (
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1
) => {
  const days = [];
  const lastDayOfMonth = new Date(year, month, 0).getDate();

  const { data } = await axios.get(
    `https://brasilapi.com.br/api/feriados/v1/${year}`
  );
  const holidays = data;

  for (let day = 1; day <= lastDayOfMonth; day++) {
    const date = new Date(year, month - 1, day);
    const formattedDate = new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
    }).format(date);

    const dayOfWeek = new Intl.DateTimeFormat("pt-BR", {
      weekday: "short",
    }).format(date);

    let holidayInfo = null;
    for (const holiday of holidays) {
      if (
        holiday.date ===
        `${year}-${month.toString().padStart(2, "0")}-${day
          .toString()
          .padStart(2, "0")}`
      ) {
        holidayInfo = holiday.name;
        break;
      }
    }
    days.push({
      date: formattedDate,
      dayOfWeek: dayOfWeek,
      holiday: holidayInfo,
      month: month
    });
  }
  
  return days;
};
