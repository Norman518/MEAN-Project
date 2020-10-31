export interface Post {
  id: string;
  title: string;
  content: string;
  imagePath: string;
  creator: string;
}

export interface ServerPost {
  _id: string;
  title: string;
  content: string;
  imagePath: string;
  creator: string;
}
