import { useEffect, useState } from "react";

export function TimeTable({
  timeTable,
}: {
  timeTable: { name: string; venue: string }[][][];
}) {
  const date = new Date();
  const day = date.getDay();
  const [selectedDay, setSelectedDay] = useState(day - 1);

  useEffect(() => {
    if (selectedDay == 7) {
      setSelectedDay(0);
    }
  }, [selectedDay]);

  const todaysTimeTable = timeTable[selectedDay];

  return (
    <div className="p-4">
      <div className="grid grid-cols-6">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day, i) => {
          if (i == selectedDay) {
            return (
              <span className="p-4 bg-blue-900 font-bold text-center">
                {day}
              </span>
            );
          } else
            return (
              <button
                onClick={() => setSelectedDay(i)}
                className="bg-blue-700 hover:bg-blue-800"
              >
                {day}
              </button>
            );
        })}
      </div>
      {todaysTimeTable.map((e, i) =>
        e.length == 0 ? null : (
          <div className="bg-blue-900 m-4 p-4">
            <h2 className="text-xl">Slot {i + 1}</h2>
            <div className="flex">
              {e.map((subject) => (
                <div>
                  <h3 className="text-2xl">{subject.name}</h3>
                  <p>
                    <strong>Venue: </strong>
                    {subject.venue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
