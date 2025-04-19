import { NextResponse } from "next/server";



export async function GET(request: Request) {
  const number = process.env.NEXT_PUBLIC_WSP_NUM || "944543773";
  const baseNumber = number.startsWith("51") ? number : `51${number}`;
    
  const { searchParams } = new URL(request.url);
  const product = searchParams.get("product") || "este producto";

  const message = encodeURIComponent(
    `🌹🌿☘ *¡Hola Valle del Mantaro!* Quiero información sobre ${product}`
  );

  const whatsappURL = `https://api.whatsapp.com/send?phone=${baseNumber}&text=${message}`;

  return NextResponse.redirect(whatsappURL);  
}
