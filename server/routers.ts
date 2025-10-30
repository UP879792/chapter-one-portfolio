import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createContactSubmission } from "./db";
import { z } from "zod";
import { getDb } from "./db";
import { bookingDemos } from "../drizzle/schema";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          company: z.string().optional(),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        await createContactSubmission({
          name: input.name,
          email: input.email,
          company: input.company || null,
          message: input.message,
        });
        return { success: true };
      }),
  }),

  booking: router({
    create: publicProcedure
      .input(
        z.object({
          service: z.string().min(1),
          date: z.string(),
          timeSlot: z.string().min(1),
          name: z.string().min(1),
          email: z.string().email(),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          throw new Error("Database not available");
        }
        await db.insert(bookingDemos).values({
          service: input.service,
          date: new Date(input.date),
          timeSlot: input.timeSlot,
          name: input.name,
          email: input.email,
        });
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
