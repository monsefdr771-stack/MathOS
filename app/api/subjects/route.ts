import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  getSubjects,
  createSubject,
} from "@/services/subjects.service";

export async function GET() {
  try {
    const subjects = await getSubjects();

    return NextResponse.json(subjects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch subjects" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const firstUser =
      await prisma.user.findFirst();

    if (!firstUser) {
      return NextResponse.json(
        {
          error:
            "No user found in database",
        },
        {
          status: 400,
        }
      );
    }

    const subject =
      await createSubject({
        ...body,

        userId: firstUser.id,
      });

    return NextResponse.json(
      subject
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to create subject",
      },
      {
        status: 500,
      }
    );
  }
} 