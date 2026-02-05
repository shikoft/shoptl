import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

type CommentRecord = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
  expiresAt: number;
};

const redis = Redis.fromEnv();
const COMMENTS_ZSET = "comments:zset";
const COMMENT_KEY_PREFIX = "comment:";
const TTL_SECONDS = 60 * 60 * 24;

const nowMs = () => Date.now();

async function cleanupExpired(now: number) {
  await redis.zremrangebyscore(COMMENTS_ZSET, 0, now);
}

export async function GET() {
  try {
    const now = nowMs();
    await cleanupExpired(now);

    const ids = await redis.zrange(COMMENTS_ZSET, now, "+inf", {
      byScore: true,
      rev: true,
      offset: 0,
      count: 50,
    });

    if (!ids.length) {
      return NextResponse.json({ comments: [] });
    }

    const comments: CommentRecord[] = [];
    for (const id of ids) {
      const data = await redis.get<CommentRecord>(`${COMMENT_KEY_PREFIX}${id}`);
      if (data) comments.push(data);
    }

    return NextResponse.json({ comments });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load comments" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const now = nowMs();
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${now}-${Math.random().toString(36).slice(2, 8)}`;

    const comment: CommentRecord = {
      id,
      name: name.slice(0, 60),
      message: message.slice(0, 500),
      createdAt: now,
      expiresAt: now + TTL_SECONDS * 1000,
    };

    await redis.set(`${COMMENT_KEY_PREFIX}${id}`, comment, { ex: TTL_SECONDS });
    await redis.zadd(COMMENTS_ZSET, {
      score: comment.expiresAt,
      member: id,
    });

    return NextResponse.json({ comment });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save comment" },
      { status: 500 }
    );
  }
}
