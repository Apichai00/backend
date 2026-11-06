import { NextResponse } from "next/server";

// 1. ดึงข้อมูลสมาชิกรายคน (GET /api/users/[id])
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    return NextResponse.json(
      {
        success: true,
        message: `ดึงข้อมูลผู้ใช้คนที่ ${id} สำเร็จ`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

// 2. แก้ไขข้อมูลสมาชิกรายคน (PUT /api/users/[id])
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    return NextResponse.json(
      {
        success: true,
        message: `แก้ไขข้อมูลผู้ใช้คนที่ ${id} สำเร็จ`,
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

// 3. ลบข้อมูลสมาชิกรายคน (DELETE /api/users/[id])
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    return NextResponse.json(
      {
        success: true,
        message: `ลบข้อมูลผู้ใช้คนที่ ${id} สำเร็จ`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}

// 4. รองรับ POST แบบระบุ ID
export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    console.log(`เพิ่มข้อมูลของคนที่: ${id} สำเร็จ:`, body);
    return NextResponse.json(
      {
        success: true,
        message: `เพิ่มข้อมูลของคนที่: ${id} สำเร็จ`,
        data: body,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}