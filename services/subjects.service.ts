import { prisma } from "@/lib/prisma";

export async function getSubjects() {
  return prisma.subject.findMany({
    include: {
      chapters: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createSubject(data: {
  name: string;
  description?: string;
  icon: string;
  color: string;
  userId: string;
}) {
  return prisma.subject.create({
    data: {
      name: data.name,
      description: data.description,
      icon: data.icon,
      color: data.color,

      user: {
        connect: {
          id: data.userId,
        },
      },
    },
  });
}