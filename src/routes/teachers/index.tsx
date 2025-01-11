import { createFileRoute, Link } from "@tanstack/react-router";
import teachers from "../../teachers";

export const Route = createFileRoute("/teachers/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ul className="list-inside list-disc">
      {Object.entries(teachers).map(([key, value]) => (
        <li key={key}>
          <Link href={`/teachers/${key}`} className="underline">
            {value.displayName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
