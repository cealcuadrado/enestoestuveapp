export interface Post {
  id: number;
  type: string;
  title: string;
  content: string;
  moreContent: string;
  imgSrc: string;
  youtubeVideoId?: string;
  notes: number;
  date: Date;
  tags: string[];
}
