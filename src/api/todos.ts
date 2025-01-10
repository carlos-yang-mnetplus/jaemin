export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchTodos(): Promise<Todo[]> {
  // 6초 딜레이
  await new Promise(resolve => setTimeout(resolve, 6000));
  
  // 일부러 에러를 발생시키는 API 호출
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_error=true');
  if (response.ok) {
    throw new Error('할 일 목록을 불러오는데 실패했습니다');
  }
  return response.json();
} 