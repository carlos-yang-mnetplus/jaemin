interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostRequest {
  id: number;
}

export async function fetchPosts({ id }: PostRequest): Promise<Post[]> {
  // 9초 딜레이
  await new Promise(resolve => setTimeout(resolve, 9000));
    
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('네트워크 응답이 올바르지 않습니다');
  }
  return response.json();
} 