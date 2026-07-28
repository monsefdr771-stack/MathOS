import { Client } from 'pg';

// الرابط المباشر الشغال تاعك
const connectionString = "postgresql://postgres.vrppdznsliilolqokejo:mathosmatho@aws-0-eu-west-1.pooler.supabase.com:5432/postgres";

const client = new Client({
  connectionString: connectionString,
});

async function main() {
  await client.connect();
  
  // استعلام لإدخال مستخدم في جدول User
  // (ملاحظة: إذا أعطاك خطأ في اسم الجدول، جرب تغيير "User" إلى "user" بحروف صغيرة)
  const query = `
    INSERT INTO "User" (id, name, email, password, xp, level, streak, "createdAt") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
    ON CONFLICT (email) DO NOTHING;
  `;
  
  // نولد id بسيط مثل 'user_monsef' لتفادي تعقيدات الـ cuid مؤقتاً في الـ seed
  await client.query(query, ['user_monsef', 'Monsef', 'monsef@test.com', '123456', 0, 1, 0]);
  
  console.log("🚀 تم إدخال المستخدم بنجاح مستقر وبدون مشاكل Prisma!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await client.end();
  });