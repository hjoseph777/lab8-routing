import PostClient from './PostClient';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ];
}

export default function Post({ params }: { params: { id: string } }) {
  return <PostClient id={params.id} />;
}