import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            roll_number,
            email,
            phone,
            year,
            knowledge_level,
            languages,
            github,
            linkedin,
            resume_link,
            interests,
            motivation,
        } = body;

        // Basic validation
        if (
            !name ||
            !roll_number ||
            !email ||
            !phone ||
            !year ||
            !knowledge_level ||
            !languages ||
            !github ||
            !linkedin ||
            !interests ||
            !motivation
        ) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const result = await pool.query(
            `
            INSERT INTO ai_club_registrations (
                full_name,
                roll_number,
                email,
                phone,
                year_of_study,
                knowledge_level,
                programming_languages,
                github,
                linkedin,
                resume_link,
                interests,
                motivation
            )
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
            RETURNING id
            `,
            [
                name,
                roll_number,
                email,
                phone,
                year,
                knowledge_level,
                languages,
                github,
                linkedin,
                resume_link || null,
                interests,
                motivation,
            ]
        );

        return NextResponse.json({
            success: true,
            id: result.rows[0].id,
        });
    } catch (error) {
        console.error("AI CLUB REG ERROR:", error);

        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
