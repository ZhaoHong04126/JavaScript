import { createClient } from '@supabase/supabase-js'

// 透過 Vite 的 import.meta.env 讀取環境變數
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 建立並匯出 supabase 客戶端
export const supabase = createClient(supabaseUrl, supabaseAnonKey)