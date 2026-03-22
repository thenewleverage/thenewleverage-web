-- Run in Supabase SQL Editor

CREATE TABLE registrations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at      timestamptz DEFAULT now(),

  -- Personal info
  full_name       text NOT NULL,
  email           text NOT NULL UNIQUE,
  company         text NOT NULL,
  job_title       text NOT NULL,
  linkedin_url    text,

  -- Workshop info
  app_idea        text NOT NULL,
  motivation      text NOT NULL,
  referral_source text,
  tech_background text,

  -- Status
  status          text NOT NULL DEFAULT 'pending',
  -- values: 'pending' | 'confirmed' | 'paid' | 'cancelled'

  payment_intent  text,
  notes           text
);

-- RLS: Only service role can read/write (no public access)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Admin can read all
CREATE POLICY "Admin read all"
  ON registrations FOR SELECT
  USING (auth.role() = 'service_role');

-- Public insert allowed (registration form)
CREATE POLICY "Public can insert"
  ON registrations FOR INSERT
  WITH CHECK (true);

-- Index for admin queries
CREATE INDEX idx_registrations_created_at ON registrations(created_at DESC);
CREATE INDEX idx_registrations_status ON registrations(status);
CREATE INDEX idx_registrations_email ON registrations(email);
