// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Replace with your actual Supabase project URL and anon key
const supabaseUrl = 'https://vyncqrobntpkqyjzpgno.supabase.co'  // Your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bmNxcm9ibnRwa3F5anpwZ25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODA4NjQsImV4cCI6MjA2ODc1Njg2NH0.2Rhi6c_NLZsLsV0R9PnNoH6IiZrkiNg9KTN6V4WGHes'  // Your Supabase anon key

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
