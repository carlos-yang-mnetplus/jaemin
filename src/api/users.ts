interface User {
  id: number;
  name: string;
  email: string;
}

export async function fetchUsers(): Promise<User[]> {
  // 3초 딜레이
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다');
  }
  return response.json();
} 