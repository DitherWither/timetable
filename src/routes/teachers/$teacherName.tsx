import { useState } from "react";
import teachers from "../../teachers";

import { createFileRoute, notFound, useParams } from "@tanstack/react-router";
import { TimeTable } from "../../components/timeTable";

export const Route = createFileRoute("/teachers/$teacherName")({
  component: TeacherComponent,
});

function TeacherComponent() {
  const { teacherName } = Route.useParams();

  const teacher = teachers[teacherName.toLowerCase()];

  if (!teacher) {
    // TODO: Find out what is wrong with this
    throw notFound();
  }

  return (
    <div className="px-2 py-8">
      <h1 className="text-4xl text-center pb-8">{teacher?.displayName}</h1>
      <TimeTable timeTable={teacher.classes} />
    </div>
  );
}
