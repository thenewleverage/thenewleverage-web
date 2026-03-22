export type RegistrationStatus = "pending" | "confirmed" | "paid" | "cancelled";

export interface Registration {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  company: string;
  job_title: string;
  linkedin_url: string | null;
  app_idea: string;
  motivation: string;
  referral_source: string | null;
  tech_background: string | null;
  status: RegistrationStatus;
  payment_intent: string | null;
  notes: string | null;
}

export type RegistrationInsert = Omit<Registration, "id" | "created_at" | "status"> & {
  id?: string;
  created_at?: string;
  status?: RegistrationStatus;
};

export interface Database {
  public: {
    Tables: {
      registrations: {
        Row: Registration;
        Insert: RegistrationInsert;
        Update: Partial<Registration>;
        Relationships: [];
      };
    };
    Views: Record<never, never>;
    Functions: Record<never, never>;
    Enums: Record<never, never>;
    CompositeTypes: Record<never, never>;
  };
}
