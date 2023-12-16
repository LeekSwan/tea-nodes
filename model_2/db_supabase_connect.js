import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uxdewfguxmwbfkgnegst.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZGV3Zmd1eG13YmZrZ25lZ3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyODcwMjAsImV4cCI6MjAxMzg2MzAyMH0.skrAOMNaugPzuwFjSaagfwGSFOR1b6flX1m7UQIBr7k

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase