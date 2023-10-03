import supabase from "../utils/supabase";

const useUserAddress = async () => {
  let address = {};
  // let response = await fetch("/api/address/get")
  const { data: response } = await supabase.from("Addresses").select();
  if (response) {
    // let data = await response.json();
    // if (data)
    address = response;
  }

  return address;
};

export default useUserAddress;
