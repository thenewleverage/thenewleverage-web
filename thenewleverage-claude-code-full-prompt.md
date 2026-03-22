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

---

## 14. ATOMIC IMPLEMENTATION PROMPTS

Execute these prompts in Claude Code **in order**. Each prompt is self-contained.

---

### PROMPT 1 — Project Scaffolding

```
Create a new Next.js 15 project with the following setup:

1. Run: npx create-next-app@latest thenewleverage --typescript --tailwind --app --no-src-dir --import-alias "@/*"

2. Install dependencies:
   npm install @supabase/supabase-js @supabase/ssr react-hook-form @hookform/resolvers zod 
   resend @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react

3. Install shadcn/ui:
   npx shadcn@latest init
   npx shadcn@latest add button input label textarea select radio-group badge card separator

4. Configure next/font in app/layout.tsx:
   Import Cormorant_Garamond (weights: 300, 400, 600, italic variants) and DM_Sans (weights: 300, 400, 500) and DM_Mono (weight: 400) from next/font/google.
   Apply as CSS variables: --font-serif, --font-sans, --font-mono

5. Create app/globals.css with these CSS variables:
   --ink: #0D0D0B
   --ink-mid: #3A3A35
   --ink-muted: #7A7A72
   --gold: #B8942A
   --gold-light: #F5EDD6
   --gold-pale: #FAF6EC
   --cream: #FAFAF7
   --white: #FFFFFF
   --rule: #E2E0D8

6. Set body background to var(--cream) and default font to var(--font-sans)

7. Create .env.local with placeholder values:
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   RESEND_API_KEY=your_resend_key
   ADMIN_EMAIL=terence@thenewleverage.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

8. Create .cursorrules file with the content from the PRD Section 13.

Verify: npm run dev starts without errors.
```

---

### PROMPT 2 — Supabase Setup + Database

```
Set up Supabase client and database schema.

1. Create /lib/supabase/client.ts — browser client using createBrowserClient from @supabase/ssr
2. Create /lib/supabase/server.ts — server client using createServerClient from @supabase/ssr with cookies()
3. Create /middleware.ts — protect /admin routes, redirect unauthenticated users to /admin/login

4. Create /types/database.ts with these TypeScript types:
   - Registration type matching all columns in the registrations table
   - RegistrationStatus: 'pending' | 'confirmed' | 'paid' | 'cancelled'
   - RegistrationInsert: Omit<Registration, 'id' | 'created_at' | 'status'>

5. Run this SQL in Supabase (output as a file /supabase/schema.sql):
   [paste full SQL from PRD Section 7]

6. Create /lib/validations/registration.ts with two Zod schemas:
   - stepOneSchema: full_name, email, company, job_title, linkedin_url (optional)
   - stepTwoSchema: app_idea (max 500), motivation (max 300), referral_source (optional), tech_background (optional)
   - registrationSchema: stepOneSchema.merge(stepTwoSchema)
   - Export inferred TypeScript types for each schema

Verify: TypeScript compiles with no errors (tsc --noEmit)
```

---

### PROMPT 3 — Navigation Component

```
Build the fixed navigation component at /components/layout/nav.tsx.

Exact requirements:
- 'use client' directive (needs scroll listener)
- Fixed position, full width, z-index 100, height 60px
- Background: rgba(250,250,247,0.92) with backdrop-filter blur(8px)
- Border-bottom: 0.5px solid var(--rule) — always visible, not scroll-triggered
- Max-width container: 1100px centered with clamp(1.5rem, 6vw, 5rem) horizontal padding
- Left: "THE NEW LEVERAGE" in DM Mono, 12px, letter-spacing 0.12em — plain text, no link
  Add a dot separator then "IDEABUILD" in gold (#B8942A)
- Right: "Secure your seat →" — Link to /register
  Styling: DM Sans 13px weight 500, background #F5EDD6, border 1px solid #B8942A, 
  padding 8px 20px, border-radius 2px
  Hover: background #EDD88A

Import and render in app/layout.tsx above {children}.
```

---

### PROMPT 4 — Hero Section

```
Build the hero section at /components/landing/hero.tsx.

This is a Server Component. Two-column grid layout.

LEFT COLUMN:
- Eyebrow div: DM Mono 11px, letter-spacing 0.18em, uppercase, color #B8942A
  Content: small horizontal line (24px wide, 1px tall, gold) + "IDEABUILD — SINGAPORE — MAY 2025"
- H1: Cormorant Garamond, font-size clamp(3rem, 5.5vw, 5.2rem), weight 300, line-height 1.08
  Text: "You walk in with an idea." on first line
  "You walk out with an app." on second line
  The words "idea." and "app." should be wrapped in <em> tags styled as: font-style italic, color #B8942A
- Subheading paragraph: DM Sans 17px weight 300, color #3A3A35, line-height 1.7, max-width 520px
  "A one-day workshop for senior professionals who have a business idea — and no time to wait for someone else to build it."
- Meta row: flex, gap 2rem
  Three items, each with:
    Label: DM Mono 10px, letter-spacing 0.14em, uppercase, color #7A7A72
    Value: DM Sans 14px weight 500, color #0D0D0B
  Items: DATE / "Saturday, May 2025" | LOCATION / "Singapore" | INVESTMENT / "S$2,000"
- CTA: Link to /register, styled as primary button (bg #0D0D0B, white text, padding 16px 36px, border-radius 2px)
  Text: "Secure your seat"
- Secondary link: plain text link, color #7A7A72, font-size 13px
  "View the full programme ↓" — smooth scroll to #syllabus section

RIGHT COLUMN:
- Sticky card (top: 80px): white bg, border 1px solid #E2E0D8, border-radius 4px, padding 2rem
  Box-shadow: 0 2px 24px rgba(0,0,0,0.05)
  
  Card header (bottom border #E2E0D8):
  - Price: Cormorant 3rem weight 300 — "S$2,000"
  - Note: DM Mono 11px color #7A7A72 — "Founding cohort · 12 seats maximum"
  - Seats row: animated pulsing dot (gold, 6px, CSS animation) + "Seats filling now" in gold 13px weight 500

  Feature list (5 items):
  Each item: em-dash (gold) + 13px text, color #3A3A35
  - One full Saturday
  - Maximum 12 participants  
  - Working app built and deployed
  - The Operator Playbook included
  - 30-day follow-up office hours

  CTA button: full width, bg #0D0D0B, white text, "Register now →"
  
  Guarantee: 11px centered, color #7A7A72 — "Full refund if the programme doesn't run"

Grid: grid-template-columns: 1fr 380px, gap 80px
Mobile (below 900px): single column, card moves below content, not sticky

Import in app/page.tsx.
```

---

### PROMPT 5 — Transformation + Who Sections

```
Build two sections: transformation and who-its-for.

FILE 1: /components/landing/transformation.tsx (Server Component)

- Section label: DM Mono 10px uppercase letter-spacing 0.2em color #7A7A72 — "THE TRANSFORMATION"
- Three-column grid: before card | arrow | after card

BEFORE CARD (white bg, border #E2E0D8):
  - Tag: "You arrive as..." DM Mono 10px uppercase color #7A7A72
  - List of 5 items, each with "×" prefix in muted color:
    Dependent on engineering resources
    Ideas stuck in a slide deck
    Waiting months for a vendor quote
    Asking for budget to test a concept
    Consumer of technology

ARROW: Cormorant Garamond "→" font-size 3rem color #E2E0D8

AFTER CARD (background #FAF6EC, border #E8D499):
  - Tag: "You leave as..." DM Mono 10px uppercase color #B8942A
  - List of 5 items, each with "✓" prefix in gold:
    Able to build and deploy independently
    Ideas shipped the same day  
    Moving faster than your organisation
    Testing concepts before spending a dollar
    Creator of technology

Below grid: centred blockquote
  Cormorant italic ~2.2rem weight 300:
  "You walk in with an idea. You walk out with an app. You leave as someone who builds."
  Below: DM Mono 11px uppercase color #7A7A72 — "UNLOCK YOUR NEW LEVERAGE"

---

FILE 2: /components/landing/who-its-for.tsx (Server Component)

Two-column: left heading (340px) | right 2x2 card grid

LEFT:
  Section label DM Mono
  H2 Cormorant 3rem weight 300: "Built for professionals who *can't afford* to wait."
  (*italic* word in gold)

RIGHT: 2x2 grid, gap 1.5rem, each card has:
  - border 1px solid #E2E0D8, border-radius 4px, padding 1.5rem, bg white
  - Title: 14px weight 500
  - Description: 13px color #3A3A35 line-height 1.6

Four cards:
  "The frustrated VP" — You have an internal tool idea that's been deprioritised for 18 months. Engineering won't touch it. You've stopped asking.
  "The accidental founder" — You're leaving institutional life with domain expertise and a clear idea. You need an MVP before you can hire anyone.
  "The innovation lead" — Your job is to evaluate AI but you rely on vendors to explain what's possible. You want fluency, not dependency.
  "The senior partner" — You want to automate repetitive work, build client tools, or test ideas fast — without writing a single line of code.

Import both in app/page.tsx.
```

---

### PROMPT 6 — Syllabus Section

```
Build /components/landing/syllabus.tsx (Server Component). Add id="syllabus" to the section.

Section heading: "One day. *Eight sessions.* One working app."
(*italic* in gold, Cormorant)

Brief intro: "Designed for professionals who move fast and expect results. Every session 
builds directly toward the app you present at 4:30pm."

Then a session timeline — vertical list of rows separated by 1px #E2E0D8 lines.
Outer container: border 1px solid #E2E0D8, border-radius 4px, overflow hidden.

Each session row has:
  - Hover: background changes to #FAFAF7
  - Three columns: time (80px, DM Mono 11px muted) | content (flex-1) | badge (auto)
  - Content: title (15px weight 500) + description (13px color #3A3A35 line-height 1.5)
  - Badge variants:
    LEARN: bg #EEF2F8, color #3A5A8A, border #C5D3E8
    BUILD: bg #F5EDD6, color #B8942A, border #DFC97A
    BREAK: bg #FAFAF7, color #7A7A72, border #E2E0D8
    SPECIAL: bg #0D0D0B, color #F5EDD6, border #0D0D0B
  
  All badges: DM Mono 10px letter-spacing 0.08em uppercase, padding 4px 10px, border-radius 2px

Sessions data (hardcoded array):
[Include all 11 sessions from PRD Section 5.5 with correct times, titles, descriptions, badge types]

Import in app/page.tsx.
```

---

### PROMPT 7 — Instructor + Remaining Landing Sections

```
Build these remaining landing page sections:

FILE 1: /components/landing/instructor.tsx
Dark section (background #0D0D0B). Two columns.

LEFT:
  Label: DM Mono 10px gold uppercase — "YOUR INSTRUCTOR"
  Name: Cormorant 3rem weight 300 white — "Terence Fong"
  em subtitle: italic gold — "Executive Director & AI Educator"
  Bio: 15px, rgba(255,255,255,0.65), line-height 1.7
  [bio text from PRD Section 5.7]
  Credentials: each is 4px gold dot + 13px text rgba(255,255,255,0.5)
  [5 credentials from PRD Section 5.7]

RIGHT: Two stacked stat cards
  Each: border 1px solid rgba(255,255,255,0.1), border-radius 4px, padding 1.5rem, bg rgba(255,255,255,0.03)
  Number: Cormorant 3.5rem weight 300 color #B8942A
  Label: 13px rgba(255,255,255,0.45)
  Card 1: "15+" / "Years across financial services and technology"
  Card 2: "3" / "Continents — Singapore, US, Europe"

---

FILE 2: /components/landing/takeaways.tsx
Background #FAF6EC, border-top and border-bottom 1px solid #E8D499
Two columns: heading left | numbered list right
H2: Cormorant — "You leave with more than *an app.*"
4 items, each: gold mono number (01, 02, 03, 04) + strong title + description
[Items from PRD Section 5.8]

---

FILE 3: /components/landing/privacy-note.tsx
Two columns (280px left | flex-1 right)
H3 Cormorant: "Built for *institutional* contexts."
Right: list of 5 items, each with "→" prefix in gold
[Items from PRD Section 5.9]

---

FILE 4: /components/landing/final-cta.tsx
Centred, padding 120px vertical
H2 Cormorant ~4rem: "Your idea has been waiting *long enough.*"
P: "12 seats. One Saturday. Everything changes."
Primary button → /register: "Secure your seat →"
Note: DM Mono 11px muted — "Founding cohort pricing · S$2,000 per seat"

---

FILE 5: /components/landing/build-examples.tsx  
3-column card grid
H2: "Real tools. *Real problems.* Built in a day."
[3 cards from PRD Section 5.6]

Import all in app/page.tsx in correct order:
Nav → Hero → Transformation → WhoItsFor → Syllabus → BuildExamples → Instructor → Takeaways → PrivacyNote → FinalCTA → Footer
```

---

### PROMPT 8 — Registration Form

```
Build the multi-step registration form at /app/register/page.tsx.

This is a Client Component. Use React Hook Form + Zod schemas from /lib/validations/registration.ts.

Layout: same two-column structure as hero (form left, summary card right — import and reuse 
/components/register/summary-card.tsx which is a simplified version of the hero card).

STEP INDICATOR:
  Two steps shown at top: "01 About you" and "02 Your idea"
  Current step highlighted with gold underline, completed step with checkmark
  Animated transition between steps

STEP 1 FIELDS (stepOneSchema):
  Full name* — text input
  Email address* — email input
  Company / Organisation* — text input  
  Job title* — text input
  LinkedIn URL — text input, optional, placeholder "https://linkedin.com/in/yourprofile"

STEP 2 FIELDS (stepTwoSchema):
  "What app or tool do you want to build?*"
    textarea, max 500 chars
    Live character counter: "243 / 500" bottom right, turns gold when near limit
    Placeholder: "Describe the problem you're trying to solve and who it's for. Don't worry if it's not fully formed — that's what the workshop is for."

  "What would it mean for you to have this built?*"  
    textarea, max 300 chars, live counter
    Placeholder: "What would change in your work or business if this existed?"

  "How did you hear about IdeaBuild?"
    Select: LinkedIn / Personal recommendation / The New Leverage newsletter / Other

  "Do you have any technical background?"
    Radio group, vertical stack:
    None at all / Basic tools (Excel, Notion) / Tried coding but not technical / Some technical experience

FORM BEHAVIOUR:
  - useForm with zodResolver
  - All fields from both steps in one form instance (prevents data loss on back)
  - Step 1 "Continue →" button: validates step 1 fields only before advancing
  - Step 2 shows "← Back" link (left) and "Submit registration →" button (right)
  - On submit: POST to /api/register with full payload
  - Loading state on submit button: spinner + "Submitting..."
  - On success: router.push('/register/confirm?email=' + encodeURIComponent(email))
  - On error: toast notification "Something went wrong. Please try again."
  - Slide animation between steps using CSS transitions

INPUT STYLING:
  bg #FAFAF7, border 1px solid #E2E0D8, border-radius 2px, padding 10px 14px
  Focus: border-color #B8942A, bg white
  Error: border-color #DC2626, error message in 12px red below field
  Label: DM Mono 10px uppercase letter-spacing 0.12em color #7A7A72
  Required asterisk in gold

Build /components/register/summary-card.tsx:
  Reuse hero card design (sticky, white, price, features, guarantee note)
  On mobile: hide this card, show compact price strip at top instead
```

---

### PROMPT 9 — API Route + Emails

```
Build the registration API route and email system.

FILE 1: /app/api/register/route.ts

POST handler:
1. Parse and validate request body against registrationSchema (from /lib/validations/registration.ts)
   Return 400 with field errors if invalid

2. Insert to Supabase registrations table using service role client
   Return 409 if email already exists (unique constraint)

3. Send confirmation email to registrant using Resend
4. Send notification email to process.env.ADMIN_EMAIL using Resend
5. Return 200 with { success: true, id: registration.id }

Error handling:
- Catch all errors, return 500 with { error: 'Registration failed. Please try again.' }
- Log full errors server-side but never expose to client

---

FILE 2: /lib/email/templates.ts

Two functions:

confirmationEmailHtml(data: { firstName: string, email: string }): string
  Returns HTML email matching template in PRD Section 11.1
  Clean, minimal design matching site aesthetic
  Uses inline styles only (email client compatibility)
  Button: dark bg, white text, "Complete payment →" links to NEXT_PUBLIC_SITE_URL/register/payment

adminNotificationHtml(data: Registration): string
  Returns HTML email matching template in PRD Section 11.2
  Plain structured layout, all fields displayed
  "View admin dashboard" link to NEXT_PUBLIC_SITE_URL/admin

---

FILE 3: /lib/email/resend.ts
  Initialize Resend client with RESEND_API_KEY
  Export sendEmail helper: { to, subject, html } → calls resend.emails.send
  From address: "The New Leverage <hello@thenewleverage.com>"
```

---

### PROMPT 10 — Confirmation + Payment Pages

```
Build two simple pages.

FILE 1: /app/register/confirm/page.tsx (Server Component)

Read email from searchParams.
Centred layout, max-width 600px, padding 120px 2rem.

Display:
  Eyebrow: DM Mono gold — "REGISTRATION RECEIVED"
  H1 Cormorant: "You're in. *Almost.*"
  Body: "Your details have been received. A confirmation email is on its way to {email}. 
  Secure your seat below to complete your registration."
  
  Primary CTA → /register/payment: "Complete payment — S$2,000 →" (full primary button styling)
  
  Secondary: 13px muted — "Questions? Email hello@thenewleverage.com"

---

FILE 2: /app/register/payment/page.tsx (Server Component)

Centred layout, max-width 600px, padding 120px 2rem.

Display:
  Eyebrow: DM Mono gold — "COMPLETE REGISTRATION"
  H1 Cormorant: "Secure your seat."
  Body: "Payment processing is being finalised. We'll confirm your seat within 24 hours 
  and send payment instructions directly to your email."
  
  Box (gold-pale bg, gold border, padding 1.5rem, border-radius 4px):
    "S$2,000 · IdeaBuild · The New Leverage"
    "Founding cohort · May 2025 · Singapore"
  
  Note: 13px muted — "Your registration data has been saved. If you have questions, 
  email hello@thenewleverage.com"
  
  Add code comment: // TODO: Replace with Stripe Checkout Session redirect
  // See PRD Section 9 for Stripe implementation details
```

---

### PROMPT 11 — Admin Dashboard

```
Build the admin dashboard at /app/admin/page.tsx and login at /app/admin/login/page.tsx.

FILE 1: /app/admin/login/page.tsx ('use client')
  Centred card, max-width 400px
  Header: "THE NEW LEVERAGE" mono + "Admin" 
  Email + password inputs (same styling as registration form)
  Sign in button
  On submit: supabase.auth.signInWithPassword({ email, password })
  On success: router.push('/admin')
  On error: show error message below form

FILE 2: /middleware.ts
  Protect /admin/* routes (except /admin/login)
  If no session: redirect to /admin/login
  Use @supabase/ssr createServerClient with cookies

FILE 3: /app/admin/page.tsx (Server Component)
  Fetch all registrations from Supabase ordered by created_at DESC
  Use service role client

  Layout:
    Top bar: "THE NEW LEVERAGE — Admin" left | Sign out button right
    
    Summary cards row (4 cards):
      Total registrations | Pending | Confirmed | Paid
      Each: secondary bg, mono label above, large number below
    
    Table of registrations:
      Columns: Name | Company | Title | App Idea | Status | Date | 
      App Idea: truncate to 60 chars with ellipsis, full text in title attribute
      Status: badge component (colour coded per PRD Section 10.2)
      Date: formatted as "15 Jan 2025"
      
    Export CSV button (top right of table):
      Client-side CSV generation of all table data
      Filename: ideabuild-registrations-{date}.csv

FILE 4: /components/admin/status-badge.tsx
  Props: status: RegistrationStatus
  Styling:
    pending:   bg amber-50,  text amber-700,  border amber-200
    confirmed: bg blue-50,   text blue-700,   border blue-200
    paid:      bg green-50,  text green-700,  border green-200
    cancelled: bg red-50,    text red-700,    border red-200
  DM Mono 10px uppercase letter-spacing

Note: Row expansion and status update can be added in a future iteration.
Keep this implementation clean and functional. No unnecessary complexity.
```

---

### PROMPT 12 — Polish, Responsiveness + Final QA

```
Final polish pass across the entire site.

1. MOBILE RESPONSIVENESS
   All sections: single column below 768px
   Hero: card moves below content, not sticky on mobile
   Navigation: hide "Secure your seat" text on very small screens, keep button
   Syllabus: time column shrinks to 60px, badge moves below description on mobile
   Admin: table becomes horizontally scrollable with wrapper div
   Registration form: full width, summary card hidden on mobile (show compact top strip instead)
   All padding: use clamp() values as specified — never hard-coded px on sections

2. ANIMATIONS
   Nav: smooth border-bottom appearance on scroll (use IntersectionObserver on hero section)
   Seats dot: CSS pulse animation (keyframes in globals.css)
   Form step transition: slide-left / slide-right CSS animation, 250ms ease
   CTA buttons: translateY(-1px) on hover, 150ms transition
   Session rows: background transition 150ms on hover
   Page load: subtle fade-in on hero content (opacity 0 → 1, 400ms, slight translateY)

3. SEO + META
   app/layout.tsx metadata:
     title: "IdeaBuild — The New Leverage"
     description: "A one-day workshop for senior professionals who have a business idea and no time to wait for someone else to build it. Singapore, May 2025."
     og:title, og:description, og:type: website
   
4. ACCESSIBILITY
   All interactive elements have focus-visible styles (gold outline)
   Form labels correctly associated with inputs (htmlFor)
   Semantic HTML throughout (nav, main, section, article, footer)
   Alt text on any images
   Skip to main content link in layout

5. PERFORMANCE
   Verify no unused imports
   All images use next/image if any are added
   Verify fonts load with font-display: swap

6. FINAL CHECK
   Run: tsc --noEmit (zero TypeScript errors)
   Run: npm run build (zero build errors)
   Test registration form end-to-end in development
   Test admin login flow
   Verify all internal links work
   Verify mobile layout at 375px width
```

---

## 15. ENVIRONMENT SETUP CHECKLIST

Before running Prompt 1, have these ready:

```
□ Supabase project created at supabase.com
  → Copy: Project URL, anon key, service role key

□ Resend account at resend.com
  → Verify domain thenewleverage.com (or use resend sandbox for dev)
  → Copy: API key

□ Stripe account (optional for now — use placeholder keys)
  → Copy: Secret key, webhook secret

□ Node.js 18+ installed
□ Git repo initialised
□ Vercel account ready for deployment
```

---

## 16. DEPLOYMENT (run after all prompts complete)

```
1. Push to GitHub
2. Connect repo to Vercel
3. Add all environment variables in Vercel dashboard
4. Set NEXT_PUBLIC_SITE_URL to production URL
5. Run Supabase schema.sql against production database
6. Verify Resend domain is verified for production sending
7. Deploy
```

---

*End of PRD — The New Leverage v1.0*
*Generated for Claude Code implementation*
