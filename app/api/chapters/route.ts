import { NextRequest, NextResponse } from "next/server";

import {
  getChapters,
  createChapter,
} from "@/services/chapters.service";

export async function GET(
  request: NextRequest
) {
  try {
    const subjectId =
      request.nextUrl.searchParams.get(
        "subjectId"
      );

    if (!subjectId) {
      return NextResponse.json(
        {
          error: "Missing subjectId",
        },
        {
          status: 400,
        }
      );
    }

    const chapters =
      await getChapters(
        subjectId
      );

    return NextResponse.json(
      chapters
    );
  } catch {
    return NextResponse.json(
      {
        error:
          "Failed to fetch chapters",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

    const chapter =
      await createChapter(
        body
      );

    return NextResponse.json(
      chapter
    );
  } catch {
    return NextResponse.json(
      {
        error:
          "Failed to create chapter",
      },
      {
        status: 500,
      }
    );
  }
}