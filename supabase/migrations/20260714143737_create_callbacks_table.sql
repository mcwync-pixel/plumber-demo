/*
# Create callbacks table (single-tenant, no auth)

1. New Tables
- `callbacks`
- `id` (uuid, primary key)
- `name` (text, customer name)
- `phone` (text, contact phone)
- `issue` (text, what they need done)
- `preferred_time` (text, optional preferred callback time)
- `status` (text, default 'new')
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `callbacks`.
- Allow anon + authenticated INSERT (public callback form) and SELECT.
*/

CREATE TABLE IF NOT EXISTS callbacks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  phone text,
  issue text,
  preferred_time text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE callbacks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_callbacks" ON callbacks;
CREATE POLICY "anon_insert_callbacks" ON callbacks FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_callbacks" ON callbacks;
CREATE POLICY "anon_select_callbacks" ON callbacks FOR SELECT
TO anon, authenticated USING (true);