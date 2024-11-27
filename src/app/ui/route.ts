import fs from 'fs';
import path from 'path';

export async function GET() {
  const pagesDirectory = path.join(process.cwd(), 'src', 'app', '(components)'); // app/ 디렉토리 경로
  const files = await fs.promises.readdir(pagesDirectory); // app/ 디렉토리 내 파일 및 폴더 목록

  const pageLinks = files.filter((file) => !file.endsWith('.tsx')); // 폴더만 필터링

  return new Response(JSON.stringify(pageLinks), {
    headers: { 'Content-Type': 'application/json' },
  });
}
