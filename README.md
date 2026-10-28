# CE Academy

An offline study PWA for a four-year Computer Engineering programme: 40 courses, each with lecture notes, a study plan, assignments with worked solutions, a class test and a final exam, plus a practice quiz of 40 explained multiple-choice questions per course (1,600 in total), a dashboard, a roadmap and weak-topic tracking.

## Maintaining
- Course text lives in `contents/src/<course>/*.md` (notes, plan, assign, test, exam). Run `node build.js` to bundle it into `contents/<course>.docs.js` and refresh the offline cache list in `sw.js`.
- Multiple-choice questions are parsed from each course's `test.md` and `exam.md`. A few reasons were cut short by the parser, so corrected explanations are kept in `contents/mcq-fixes.json` (keyed by question text) and applied by `build.js` every time.
- `contents/<course>.js` holds the interactive lessons and topic quizzes for the first seven courses.
