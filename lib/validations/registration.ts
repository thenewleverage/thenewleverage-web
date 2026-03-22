import { z } from "zod";

export const stepOneSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  company: z.string().min(1, "Company or organisation is required"),
  job_title: z.string().min(1, "Job title is required"),
  linkedin_url: z
    .string()
    .url("Enter a valid URL (e.g. https://linkedin.com/in/yourname)")
    .optional()
    .or(z.literal("")),
});

export const stepTwoSchema = z.object({
  app_idea: z
    .string()
    .min(1, "Please describe the app or tool you want to build")
    .max(500, "Maximum 500 characters"),
  motivation: z
    .string()
    .min(1, "Please share what this would mean for you")
    .max(300, "Maximum 300 characters"),
  referral_source: z
    .enum(["LinkedIn", "Personal recommendation", "The New Leverage newsletter", "Other"])
    .optional(),
  tech_background: z
    .enum([
      "None at all",
      "I can use Excel / basic tools confidently",
      "I've tried coding before but don't consider myself technical",
      "I have some technical experience",
    ])
    .optional(),
});

export const registrationSchema = stepOneSchema.merge(stepTwoSchema);

export type StepOneValues = z.infer<typeof stepOneSchema>;
export type StepTwoValues = z.infer<typeof stepTwoSchema>;
export type RegistrationValues = z.infer<typeof registrationSchema>;
