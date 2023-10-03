import supabase from "../utils/supabase";

export default async function Products() {
  const { data } = await supabase.from("Products").select();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
