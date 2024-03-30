type Props = {
  params: {
    id: string;
  };
};
export default function ShowCategory({ params }: Props) {
  const { id } = params;

  return <div>Category : {id}</div>;
}
