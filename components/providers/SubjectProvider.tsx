"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Subject = {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
};


type SubjectContextType = {
  subjects: Subject[];
  addSubject: (subject: Subject) => void;
  removeSubject: (id: string) => void;
};

const SubjectContext = createContext<
  SubjectContextType | undefined
>(undefined);

export function SubjectProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [subjects, setSubjects] = useState<Subject[]>([]);useEffect(() => {
  const savedSubjects = localStorage.getItem("subjects");

  if (savedSubjects) {
    setSubjects(JSON.parse(savedSubjects));
  }
}, []);


  useEffect(() => {
  localStorage.setItem(
    "subjects",
    JSON.stringify(subjects)
  );
}, [subjects]);

function removeSubject(id: string) {
  setSubjects((prev) =>
    prev.filter((subject) => subject.id !== id)
  );
}
  function addSubject(subject: Subject) {
    setSubjects((prev) => [...prev, subject]);
  }

  return (
    <SubjectContext.Provider
      value={{
  subjects,
  addSubject,
  removeSubject,
}}
    >
      {children}
    </SubjectContext.Provider>
  );
}

export function useSubjects() {
  const context = useContext(SubjectContext);

  if (!context) {
    throw new Error(
      "useSubjects must be used inside SubjectProvider"
    );
  }

  return context;
}