import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://vyncqrobntpkqyjzpgno.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bmNxcm9ibnRwa3F5anpwZ25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODA4NjQsImV4cCI6MjA2ODc1Njg2NH0.2Rhi6c_NLZsLsV0R9PnNoH6IiZrkiNg9KTN6V4WGHes')

async function uploadFile(file) {
  const { data, error } = await supabase.storage
    .from('your-bucket-name')
    .upload('public/' + file.name, file)

  if (error) {
    console.error('Upload error:', error)
    return
  }
  console.log('File uploaded:', data)
}
