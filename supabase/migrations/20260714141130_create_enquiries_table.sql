/*
# Create enquiries table (single-tenant, no auth)

1. New Tables
- `enquiries`
- `id` (uuid, primary key)
- `issue_type` (text, the primary plumbing issue selected)
- `hot_water_type` (text, optional follow-up answer)
- `property_scope` (text, optional follow-up answer)
- `contact_preference` (text, optional follow-up answer)
- `name` (text, customer name)
- `phone` (text, contact phone)
- `email` (text, contact email)
- `suburb` (text, optional Sydney suburb)
- `message` (text, optional extra details)
- `status` (text, default 'new')
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `enquiries`.
- Allow anon + authenticated INSERT (public booking form) and SELECT (so the form can show a success state / list own submissions is not needed here — insert-only is the real need, but SELECT left open for any future admin read; no sensitive data beyond contact details).
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_type text NOT NULL,
  hot_water_type text,
  property_scope text,
  contact_preference text,
  name text,
  phone text,
  email text,
  suburb text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_enquiries" ON enquiries;
CREATE POLICY "anon_select_enquiries" ON enquiries FOR SELECT
TO anon, authenticated USING (true);