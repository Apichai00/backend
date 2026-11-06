import { NextResponse } from "next/server";

// 1. ดึงข้อมูลสมาชิกทั้งหมด (GET)
export async function GET() {
  try {
    console.log({ success: true, message: "ดึงข้อมูลผู้ใช้สำเร็จ", status: 200 });
    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

// 2. เพิ่มข้อมูลสมาชิกใหม่ (POST)
export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password } = body;

    console.log("เพิ่มข้อมูลผู้ใช้สำเร็จ:", { firstName, lastName, email, password });
    
    return NextResponse.json(
      {
        success: true,
        message: "เพิ่มข้อมูลผู้ใช้สำเร็จ",
        data: { firstName, lastName, email },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}