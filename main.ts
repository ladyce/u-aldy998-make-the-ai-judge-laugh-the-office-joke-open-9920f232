// Office joke entry for "Make the AI Judge Laugh: the Office Joke Open".
// Node 22, standard library only. Writes one single-line office joke to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output outside the
// grader's container: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts).
//
// Build notes — winner pattern from ai-joke-03 top-3 (top_artifacts.py):
// the top jokes are first-person confessions with a specific setup, an
// escalation in threes, and a punchline that reframes the setup in the last
// few words ("The backup was in the database"). This entry follows that
// shape in office dress: open-door cliche -> resignation -> the calendar
// punchline reframes the boss's "open door" as pure bureaucracy.
//
// Candidates considered (all single-line, <=200 chars; pairwise round-robin
// in pairs/PAIRS.md + pairs/verdicts.json, 15 pairs, winner c4 with 5 wins):
// c1 (157): I replied-all 'please remove me from this thread' and got 47 replies saying 'me too' — the unsubscribe button is now the most popular person in the office.
// c2 (141): Our printer only jams on urgent documents, which is how I learned it reads the filename, the deadline, and my will to live — in that order.
// c3 (140): The meeting that could have been an email ended with an action item to schedule a meeting about why the meeting couldn't have been an email.
// c4 (122, WINNER): My boss said his door is always open, so I walked in with my resignation — he asked me to book it on his calendar first.
// c5 (127): HR told me to bring my whole self to work, so I brought my sleep schedule and my anxiety — security escorted one of them out.
// c6 (159): I set my status to 'in a meeting' and my calendar invited me to a meeting about my availability — I declined, and it booked a meeting to discuss the decline.
//
// Why c4 won: sharpest last-word misdirection ("book it on his calendar
// first"), tightest (122 chars), freshest combination of two office
// cliches (open door + calendar booking); c2 was runner-up (4 wins) with
// its escalating triple, c1 third (3 wins).

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My boss said his door is always open, so I walked in with my resignation \u2014 he asked me to book it on his calendar first.";

// Guard: the gate takes 1-200 characters, a single line, not only whitespace.
// Fail loudly instead of writing an entry the judge would never see.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.includes('\n') ||
  JOKE.trim().length === 0
) {
  throw new Error(`Invalid joke: ${JOKE.length} chars, must be 1-200, one line.`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
