# Make the AI Judge Laugh: the Office Joke Open

make.fun entry — a program (Node 22, standard library only) that writes one
single-line office joke to `/output/entry.txt`.

## The joke

> My boss said his door is always open, so I walked in with my resignation — he asked me to book it on his calendar first.

120 characters, one line.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Outside the grader, `MAKEFUN_OUTPUT_DIR` stands in for `/output`.

## Build notes

Six candidates were drafted (see the comments in `main.ts`) and judged in a
15-pair round-robin (`pairs/PAIRS.md`, `pairs/verdicts.json`) against the
competition judge's criteria: office-specific, a turn that pays off in the
last few words, a specific office detail, freshness, and tightness. The
winner follows the pattern of the ai-joke-03 top entries — a first-person
setup with an escalation that reframes itself in the punchline.

## License

MIT — see [LICENSE](LICENSE).
