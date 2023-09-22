import supabase from "./supabase";

export async function getPlants() {
  const { data, error } = await supabase.from("plants").select("*");

  if (error) {
    console.log(error);
    throw new Error("Plants could not be loaded");
  }

  return data;
}
