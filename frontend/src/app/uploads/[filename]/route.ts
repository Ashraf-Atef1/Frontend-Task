import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ filename: string }> }
) {
	const file = await fetch(
		`${process.env.API_BASE_URL}/uploads/${(await params).filename}`
	);
	return new NextResponse(await file.blob());
}
