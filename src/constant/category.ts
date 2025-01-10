export interface Category {
  id: number;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: '전자기기',
    description: '스마트폰, 노트북 등 전자제품 카테고리'
  },
  {
    id: 2, 
    name: '의류',
    description: '옷, 신발, 액세서리 등 패션 아이템'
  },
  {
    id: 3,
    name: '식품',
    description: '신선식품, 가공식품, 음료 등 식품류'
  },
  {
    id: 4,
    name: '도서',
    description: '책, 잡지 등 출판물'
  },
  {
    id: 5,
    name: '가구',
    description: '침대, 소파, 책상 등 가구류'
  }
];
