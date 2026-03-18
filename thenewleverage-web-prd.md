# The New Leverage — Website PRD & Claude Code Implementation Prompt

---

## MASTER PROMPT (paste this into Claude Code to start)

```
You are building the complete website for "The New Leverage" — a premium AI education brand 
targeting senior finance and professional services executives in Singapore. The site has two 
core functions: (1) a marketing landing page for "IdeaBuild", a one-day workshop teaching 
non-technical senior professionals to build AI-powered apps, and (2) a registration flow 
that collects participant data and routes to payment.

Build this as a production-ready Next.js 15 application. Follow every instruction in this 
PRD precisely. Do not add features not specified. Do not skip any section.

Read the full PRD below before writing a single line of code.
```

---

## 1. APP GOAL

A high-conversion marketing website for The New Leverage that:
- Communicates the IdeaBuild workshop value proposition to senior executives
- Captures qualified leads via a multi-step registration form
- Collects: name, email, company, job title, LinkedIn URL, app idea, and motivation
- Routes confirmed registrants to a payment page (Stripe integration, placeholder-ready)
- Reflects a premium, minimalist aesthetic appropriate for Goldman Sachs / McKinsey-level audience

---

## 2. PAGES & ROUTES

```
/                          → Landing page (marketing)
/register                  → Multi-step registration form
/register/confirm          → Confirmation page post-submission (pre-payment)
/register/payment          → Payment page (Stripe embed or redirect — placeholder for now)
/admin                     → Protected admin dashboard (view all registrations)
```

---

## 3. TECH STACK

```
Framework:        Next.js 15 (App Router)
Language:         TypeScript (strict)
Database:         Supabase (PostgreSQL)
Auth:             Supabase Auth (admin only — email/password)
Styling:          Tailwind CSS + shadcn/ui
Forms:            React Hook Form + Zod validation
Email:            Resend (confirmation email to registrant + notification to admin)
Payment:          Stripe (placeholder integration — checkout session only)
Fonts:            Cormorant Garamond (serif display) + DM Sans (body) via next/font/google
Deployment:       Vercel-ready (next.config.ts clean)
```

---

## 4. DESIGN SYSTEM

### Brand Identity
```
Primary font:     Cormorant Garamond — headings, display text, quotes
Body font:        DM Sans — body copy, UI, labels
Mono font:        DM Mono — eyebrows, labels, timestamps, code

Colour palette:
  --ink:          #0D0D0B   (primary text)
  --ink-mid:      #3A3A35   (secondary text)
  --ink-muted:    #7A7A72   (tertiary/labels)
  --gold:         #B8942A   (accent — sparingly)
  --gold-light:   #F5EDD6   (gold tint backgrounds)
  --gold-pale:    #FAF6EC   (very light gold section bg)
  --cream:        #FAFAF7   (page background)
  --white:        #FFFFFF   (card/surface background)
  --rule:         #E2E0D8   (borders, dividers)
  --ink-dark:     #0D0D0B   (dark section background)
```

### Design Principles
- Minimalist, editorial, luxury — think FT Weekend or a private bank's annual report
- Generous whitespace — padding sections 100px top/bottom desktop, 60px mobile
- No gradients, no shadows (except subtle card lift: 0 2px 24px rgba(0,0,0,0.05))
- Typography-led — headlines are the hero, not imagery
- Max content width: 1100px, centered, padding: clamp(1.5rem, 6vw, 5rem)
- All section headings: Cormorant Garamond, font-weight 300, with italic gold accent word
- Eyebrow labels: DM Mono, 10–11px, letter-spacing 0.18em, uppercase, gold color
- Buttons: border-radius 2px (nearly square), never pill-shaped
- Cards: border-radius 4px, 1px border using --rule color

---

## 5. PAGE 1: LANDING PAGE (/)

### 5.1 Navigation
- Fixed, 60px height
- Left: "THE NEW LEVERAGE" in DM Mono, small caps style
- Right: "Secure your seat →" CTA button — routes to /register
- Background: cream/92% opacity with backdrop-filter blur on scroll
- Transparent at top, gains border-bottom on scroll

### 5.2 Hero Section
- Two-column grid: left (content) | right (registration summary card)
- Left column:
  - Eyebrow: "IDEABUILD — SINGAPORE — MAY 2025"
  - H1 (Cormorant, ~5rem, weight 300): "You walk in with an *idea.*\nYou walk out with an *app.*"
  - Subheading (DM Sans, 17px, weight 300): "A one-day workshop for senior professionals who have a business idea — and no time to wait for someone else to build it."
  - Meta row: three items — DATE | LOCATION | PRICE — in mono label + value format
  - CTA: "Secure your seat" primary button → /register
  - Secondary link: "View the full programme ↓" → scrolls to syllabus section
- Right column (sticky):
  - White card with subtle shadow
  - Price: large Cormorant "S$2,000" 
  - Note: "Founding cohort — 12 seats maximum"
  - Animated dot: "Seats filling" in gold
  - Feature list (5 items with em-dash bullets):
    - One full day, Saturday
    - Maximum 12 participants
    - Working app built and deployed
    - The Operator Playbook (yours to keep)
    - 30-day follow-up office hours
  - CTA button: "Register now"
  - Guarantee note: "Full refund if the programme doesn't run"

### 5.3 Transformation Section
- Section label: "THE TRANSFORMATION"
- Two-column before/after cards with arrow between
  - Before card (white): "You arrive as..."
    - Dependent on engineering resources
    - Ideas stuck in a slide deck
    - Asking for budget approval to test a concept
    - Waiting months for a vendor quote
    - Consumer of technology
  - Arrow: large Cormorant "→" in muted color
  - After card (gold-pale bg): "You leave as..."
    - Able to build and deploy independently
    - Ideas shipped the same day
    - Testing concepts before spending a dollar
    - Moving faster than your organisation
    - Creator of technology
- Below: centred blockquote in Cormorant italic, ~2.2rem:
  "You walk in with an idea. You walk out with an app. You leave as someone who builds."

### 5.4 Who This Is For
- Two-column: left (heading) | right (2x2 card grid)
- Heading: "Built for professionals who *can't afford* to wait."
- Four cards:
  1. "The frustrated VP" — You have an internal tool idea that's been deprioritised for 18 months. Engineering won't touch it. You've stopped asking.
  2. "The accidental founder" — You're leaving institutional life with domain expertise and a clear idea. You need an MVP before you can hire anyone.
  3. "The innovation lead" — Your job is to evaluate AI tools but you rely on vendors to explain what's possible. You want fluency, not dependency.
  4. "The operator" — You want to automate repetitive work, build client-facing tools, or test ideas fast — without a single line of code.

### 5.5 Programme Syllabus
- Section heading: "One day. *Eight sessions.* One working app."
- Brief intro paragraph: "Designed for professionals who move fast and expect results. Every session builds directly toward the app you present at 4:30pm."
- Session timeline — vertical list, each row:
  - Time (DM Mono) | Session title (bold) + description | Badge (LEARN / BUILD / SPECIAL)
  
  Sessions:
  ```
  09:00  The New Leverage            [LEARN]
         Why AI has permanently shifted who can build what. The operator 
         mindset: from consumer of software to creator of it.

  09:45  Decompose Anything          [LEARN]
         How to break any idea into buildable components. You'll define 
         and pressure-test your app idea using a structured framework.

  10:45  Break                       [BREAK]

  11:00  Prompting as a             [LEARN]
         Professional Skill
         Precision prompting for business outcomes. How to brief AI the 
         way you'd brief a sharp analyst — and why that framing 
         unlocks everything.

  12:00  Working Lunch +            [BUILD]
         60-Second Pitches
         Every participant pitches their app idea. Peer feedback, 
         instructor validation, final refinement before building begins.

  13:00  Build Session 1            [BUILD]
         First working prototype. Instructor-guided. Every participant 
         ships something functional before 2:30pm.

  14:30  Break                       [BREAK]

  14:45  Debug, Design, Polish      [BUILD]
         How to diagnose what's broken without knowing code. The design 
         decisions that make your app look like you hired someone.

  16:00  The Ceiling                [SPECIAL]
         A live demonstration of what operator-level thinking looks like 
         at institutional scale. The ceiling is higher than you think.

  16:30  Ship and Present           [BUILD]
         Every participant presents their finished app. What it solves, 
         who it's for, what's next. This is the graduation moment.

  17:30  Close + The Operator Stack [LEARN]
         Everything you take home: tools, prompts, frameworks, playbook. 
         What to build next week.

  18:00  Optional drinks            [BREAK]
  ```

### 5.6 What You'll Build — Examples
- Heading: "Real tools. *Real problems.* Built in a day."
- 3-column card grid with example apps participants might build:
  1. "Client reporting dashboard" — Pull structured data into a clean client-facing view. Eliminate 4 hours of weekly manual work.
  2. "Meeting intelligence tool" — Paste a transcript, get action items, owner assignments, and a draft follow-up email. Done in 30 seconds.
  3. "Internal knowledge base" — Search your firm's documents, policies, and precedents using natural language. No more digging through shared drives.

### 5.7 About the Instructor
- Dark background section (--ink colour)
- Two-column: left (bio) | right (two stat cards)
- Left:
  - Label: "YOUR INSTRUCTOR"
  - Name heading: "Terence Fong"
  - Bio: "Terence is an Executive Director at Goldman Sachs Asset & Wealth Management and the founder of The New Leverage — a platform helping senior professionals harness AI without depending on engineers. He holds a Harvard ALM and dual US/Singapore bar qualifications, and previously led digital partnerships across APAC and EMEA at McKinsey & Company."
  - Credentials list (dot + text):
    - Executive Director, Goldman Sachs Asset & Wealth Management
    - Former Associate Partner, McKinsey & Company (APAC/EMEA)
    - Harvard University — ALM
    - US & Singapore bar qualified
    - Founder, Ghost Protocol — enterprise AI for private banking
- Right (two stacked cards, dark bordered):
  - Card 1: Large number "15+" / "Years in financial services and technology"
  - Card 2: Large number "3" / "Continents — Singapore, US, Europe — where he has built and advised"

### 5.8 What Participants Take Home
- Gold-pale background section
- Two-column: left (heading) | right (numbered list)
- Heading: "You leave with more than *an app.*"
- List:
  1. A working deployed app — built by you, solving a real problem you chose
  2. The Operator Playbook — tools, prompts, frameworks, and templates from the full day
  3. 30-day office hours — a follow-up session one month later to unblock whatever you've been building
  4. Alumni access — direct line to future cohort members, resources, and programme updates

### 5.9 Built for Professionals Who Can't Get It Wrong
- Split section: heading left, items right
- Heading: "AI built for *institutional contexts.*"
- Items (arrow + text):
  - You'll learn which AI tools log your inputs — and which don't
  - You'll understand the difference between consumer and enterprise API tiers
  - You'll know how to build without exposing client data or firm information
  - You'll understand data residency, storage, and what RLS means for your tools
  - You'll leave knowing what your IT and Legal teams will ask — and how to answer

### 5.10 Final CTA
- Centred, large Cormorant heading: "Your idea has been waiting *long enough.*"
- Sub: "12 seats. One Saturday. Everything changes."
- Primary CTA button: "Secure your seat →" → /register
- Seats note below button

### 5.11 Footer
- Minimal: "© 2025 The New Leverage" left | "Singapore" right
- Both in DM Mono, small, muted

---

## 6. PAGE 2: REGISTRATION FORM (/register)

### 6.1 Layout
- Two-column: left (form) | right (summary card — same as hero card, sticky)
- Progress indicator at top: Step 1 of 2 / Step 2 of 2
- Back button on Step 2

### 6.2 Step 1 — About You
Fields (all required unless marked optional):
```
Full name*              text input
Email address*          email input  
Company / Organisation* text input
Job title*              text input
LinkedIn URL            text input (optional)
```

### 6.3 Step 2 — Your Idea & Goals
Fields:
```
What app or tool do you want to build?*
  textarea — placeholder: "Describe the problem you're trying to solve and who it's for. 
  Don't worry if it's not fully formed — that's what the workshop is for."
  max 500 chars with live counter

What would it mean for you to have this built?*
  textarea — placeholder: "What would change in your work or business if this existed?"
  max 300 chars with live counter

How did you hear about IdeaBuild?
  select dropdown:
    LinkedIn
    Personal recommendation
    The New Leverage newsletter
    Other

Do you have any technical background?
  radio group:
    None at all
    I can use Excel / basic tools confidently
    I've tried coding before but don't consider myself technical
    I have some technical experience
```

### 6.4 Form Behaviour
- React Hook Form + Zod validation
- Inline error messages below each field on blur
- Submit button disabled until all required fields valid
- On Step 1 submit: validate, animate to Step 2 (slide transition)
- On Step 2 submit: POST to /api/register, show loading state
- On success: redirect to /register/confirm?email={email}

### 6.5 API Route: /api/register
```typescript
// POST /api/register
// 1. Validate payload with Zod
// 2. Insert to Supabase registrations table
// 3. Send confirmation email via Resend to registrant
// 4. Send notification email via Resend to admin (terence@thenewleverage.com)
// 5. Return { success: true, id: registration.id }
```

---

## 7. DATABASE SCHEMA

```sql
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
```

---

## 8. PAGE 3: CONFIRMATION (/register/confirm)

- Clean centred layout
- Cormorant heading: "You're in. *Almost.*"
- Body: "Your details have been received. A confirmation email is on its way to {email}. Complete your registration by securing your seat below."
- Primary CTA: "Complete payment — S$2,000 →" → /register/payment
- Secondary note: "Have questions? Email hello@thenewleverage.com"

---

## 9. PAGE 4: PAYMENT (/register/payment)

- Placeholder page for now
- Heading: "Complete your registration"
- Body: "Payment processing coming soon. We'll confirm your seat via email."
- Note in code: `// TODO: Replace with Stripe Checkout Session redirect`
- Clean layout matching site aesthetic

**Stripe implementation notes (for when ready):**
```typescript
// /api/create-checkout-session
// 1. Create Stripe checkout session
// 2. Price: 200000 (SGD cents = S$2,000)
// 3. Success URL: /register/success
// 4. Cancel URL: /register/payment
// 5. Metadata: { registration_id }
// On webhook success: update registrations.status = 'paid'
```

---

## 10. PAGE 5: ADMIN DASHBOARD (/admin)

### 10.1 Auth
- Supabase Auth, email/password
- Protected via Next.js middleware
- Login page at /admin/login
- Redirect to /admin on success

### 10.2 Dashboard UI
- Table of all registrations, sorted by created_at DESC
- Columns: Name | Company | Title | App Idea (truncated) | Status | Date | Actions
- Status badge with colour coding:
  - pending: amber
  - confirmed: blue  
  - paid: green
  - cancelled: red
- Row click → expands to show full registration details
- Status can be updated via dropdown in expanded row
- Export to CSV button (client-side, all visible rows)
- Summary cards at top: Total | Pending | Confirmed | Paid

---

## 11. EMAIL TEMPLATES

### 11.1 Registrant Confirmation Email
```
Subject: Your IdeaBuild registration — The New Leverage

Hi {first_name},

Your registration has been received. You're one step away from securing 
your seat.

Complete your registration: [Pay S$2,000 →]

What you've signed up for:
— IdeaBuild by The New Leverage
— One full day, Saturday [DATE]
— Singapore (location confirmed 2 weeks prior)
— Maximum 12 participants

Questions? Reply to this email.

Terence Fong
The New Leverage
```

### 11.2 Admin Notification Email
```
Subject: New IdeaBuild registration — {full_name}

New registration received:

Name:       {full_name}
Email:      {email}
Company:    {company}
Title:      {job_title}
LinkedIn:   {linkedin_url}

App idea:   {app_idea}

Motivation: {motivation}

Referral:   {referral_source}
Background: {tech_background}

View in admin: [Admin dashboard →]
```

---

## 12. FILE STRUCTURE

```
/app
  /page.tsx                          ← Landing page
  /layout.tsx                        ← Root layout with fonts
  /globals.css                       ← CSS variables + base styles
  /register
    /page.tsx                        ← Multi-step registration form
    /confirm
      /page.tsx                      ← Confirmation page
    /payment
      /page.tsx                      ← Payment placeholder
  /admin
    /page.tsx                        ← Admin dashboard (protected)
    /login
      /page.tsx                      ← Admin login
  /api
    /register
      /route.ts                      ← POST registration handler
    /create-checkout-session
      /route.ts                      ← Stripe session (placeholder)
    /webhooks
      /stripe
        /route.ts                    ← Stripe webhook handler (placeholder)

/components
  /ui                                ← shadcn/ui components
  /layout
    /nav.tsx                         ← Fixed navigation
    /footer.tsx                      ← Footer
  /landing
    /hero.tsx                        ← Hero section
    /transformation.tsx              ← Before/after section
    /who-its-for.tsx                 ← Target audience section
    /syllabus.tsx                    ← Programme timeline
    /build-examples.tsx              ← Example apps section
    /instructor.tsx                  ← About Terence section
    /takeaways.tsx                   ← What you take home
    /privacy-note.tsx                ← Institutional AI section
    /final-cta.tsx                   ← Bottom CTA
  /register
    /registration-form.tsx           ← Multi-step form (client component)
    /step-one.tsx                    ← Step 1 fields
    /step-two.tsx                    ← Step 2 fields
    /summary-card.tsx                ← Sticky price/details card
  /admin
    /registrations-table.tsx         ← Admin data table
    /status-badge.tsx                ← Coloured status indicator
    /summary-cards.tsx               ← Top stat cards

/lib
  /supabase
    /client.ts                       ← Browser client
    /server.ts                       ← Server client
    /middleware.ts                   ← Auth middleware helper
  /validations
    /registration.ts                 ← Zod schemas
  /email
    /templates.ts                    ← Email template functions
    /resend.ts                       ← Resend client setup
  /stripe
    /client.ts                       ← Stripe client (placeholder)
  /utils.ts                          ← cn() and helpers

/types
  /database.ts                       ← Supabase generated types
  /registration.ts                   ← Registration type definitions

/middleware.ts                       ← Route protection for /admin

/.env.local (never commit)
  NEXT_PUBLIC_SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY
  SUPABASE_SERVICE_ROLE_KEY
  RESEND_API_KEY
  ADMIN_EMAIL=terence@thenewleverage.com
  STRIPE_SECRET_KEY (placeholder)
  STRIPE_WEBHOOK_SECRET (placeholder)
  NEXT_PUBLIC_SITE_URL
```

---

## 13. .cursorrules

```markdown
# The New Leverage — Cursor Rules

## Project Overview
Marketing website and registration system for IdeaBuild, a premium one-day AI workshop 
for senior finance professionals in Singapore. Built with Next.js 15 App Router, Supabase, 
and Resend. Design aesthetic: minimalist, editorial, luxury — Cormorant Garamond + DM Sans.

## Tech Stack
- Framework: Next.js 15 App Router
- Language: TypeScript (strict mode)
- Database: Supabase (PostgreSQL)
- Auth: Supabase Auth (admin only)
- Styling: Tailwind CSS + shadcn/ui
- Forms: React Hook Form + Zod
- Email: Resend
- Payment: Stripe (placeholder)

## Design System
- Primary font: Cormorant Garamond (display/headings) — always weight 300 for large headings
- Body font: DM Sans
- Mono font: DM Mono (labels, eyebrows, timestamps)
- Gold accent: #B8942A — use sparingly, never on large areas
- Page bg: #FAFAF7 (cream)
- All section max-width: 1100px, centered
- No gradients. No pill buttons (border-radius: 2px on buttons). No drop shadows except subtle card lift.
- Eyebrow labels: DM Mono, 10-11px, 0.18em letter-spacing, uppercase, gold
- Section padding: 100px vertical desktop, 60px mobile

## Component Strategy
- Server Components by default
- 'use client' only for: forms, interactive states, scroll listeners
- Never fetch data in Client Components
- Use Server Actions for all mutations

## Anti-Patterns
- Never use purple gradients or generic AI aesthetics
- Never use Inter or Roboto (use DM Sans only)
- Never round buttons to pills
- Never skip Zod validation on API routes
- Never expose SUPABASE_SERVICE_ROLE_KEY to client
- Never use inline styles for colors — use Tailwind classes with CSS variables

## Forms
- React Hook Form for all forms
- Zod schemas in /lib/validations/
- Always show inline validation errors on blur
- Disable submit until form is valid

## Database
- All mutations via Server Actions or API routes
- Never expose service role key to browser
- Registration table uses public insert policy (no auth for form submission)
- Admin routes use service role key server-side only
```
