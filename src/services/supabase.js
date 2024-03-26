import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bgppemwhzsxrbzudutjm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJncHBlbXdoenN4cmJ6dWR1dGptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NDMyNTksImV4cCI6MjAyNjIxOTI1OX0.83cT6vvMVS_HW1FAOd4vK-8psxts_HbtnWtjyrzdons";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
