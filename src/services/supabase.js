import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ogvpzcluvdtmiliwrqlo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ndnB6Y2x1dmR0bWlsaXdycWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NjA1NzMsImV4cCI6MjAwNzQzNjU3M30.pcMPryPE1r0NKrpoCnVnRTc5bwYA7hXGZuhJ3fcyiy0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
