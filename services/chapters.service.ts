import { prisma } from "@/lib/prisma";

export async function getChapters(subjectId: string) {
  return prisma.chapter.findMany({
    where: {
      subjectId,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createChapter(data: {
  title: string;
  description?: string;
  subjectId: string;
}) {
  return prisma.chapter.create({
    data: {
      title: data.title,
      description: data.description,

      subject: {
        connect: {
          id: data.subjectId,
        },
      },
    },
  });
}