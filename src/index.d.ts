interface IPost {
  id: number;
  title: string;
  body: IPostBody;
  userId: number;
  index: number;
  image?: string | undefined;
}

interface IPostBody {
  title: string;
  subtitle: string;
  body: string;
  image?: ImageBitmap;
}

interface NavigationBarProps {
  bg: string;
  expand: string;
  variante: "dark"|"light";
}