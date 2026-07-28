import Link from "next/link";
import SubjectCard from "./SubjectCard";

export default function ComponentName({
  subject,
}: {
  subject: {
    id: string;
  };
}) {
  return (
    <Link href={`/subjects/${subject.id}`}>
      <SubjectCard />
    </Link>
  );
}