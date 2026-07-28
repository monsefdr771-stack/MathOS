import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const WEBHOOK_SECRET =
    process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Missing webhook secret"
    );
  }

  const headerPayload =
    await headers();

  const svix_id =
    headerPayload.get(
      "svix-id"
    );

  const svix_timestamp =
    headerPayload.get(
      "svix-timestamp"
    );

  const svix_signature =
    headerPayload.get(
      "svix-signature"
    );

  if (
    !svix_id ||
    !svix_timestamp ||
    !svix_signature
  ) {
    return new Response(
      "Missing headers",
      {
        status: 400,
      }
    );
  }

  const payload =
    await req.text();

  const wh = new Webhook(
    WEBHOOK_SECRET
  );

  let evt: WebhookEvent;

  try {
    evt = wh.verify(
      payload,
      {
        "svix-id":
          svix_id,
        "svix-timestamp":
          svix_timestamp,
        "svix-signature":
          svix_signature,
      }
    ) as WebhookEvent;
  } catch (err) {
    return new Response(
      "Invalid webhook",
      {
        status: 400,
      }
    );
  }

  if (
    evt.type ===
    "user.created"
  ) {
    console.log(
      "Webhook received ✅"
    );

    const {
      id,
      email_addresses,
      first_name,
      image_url,
    } = evt.data;

    const email =
      email_addresses?.[0]
        ?.email_address;

    if (!email) {
      console.log(
        "No email found ❌"
      );

      return new Response(
        "No email found",
        {
          status: 400,
        }
      );
    }

    console.log({
      id,
      email,
    });

    await prisma.user.create(
      {
        data: {
          clerkId: id,
          email,
          name:
            first_name ??
            "User",
          avatar:
            image_url,
          password: "",
        },
      }
    );

    console.log(
      "User saved ✅"
    );
  }

  return new Response(
    "Webhook received",
    {
      status: 200,
    }
  );
}