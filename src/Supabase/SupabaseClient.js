import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fbnplgwmddfsvqikyjkz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZibnBsZ3dtZGRmc3ZxaWt5amt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMjUxNzcsImV4cCI6MjA1NzgwMTE3N30.xRlYY-UJ5p7ivUgdK30MVPM7AqIcRatvQ989tOWpbSA';

export const upload = createClient(supabaseUrl, supabaseAnonKey);