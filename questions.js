window.STUDY_QUESTIONS = [
  {
    "id": "class-lab-week-1-quarto-lab-quiz-1",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "When you set `#| echo: false` on your `hello-csc3107` code cell and rendered the document, what was visible in the HTML output?",
    "options": [
      "The R code in the cell, but not the message it produced.",
      "The message `Hello, CSC3107`, but not the R code.",
      "Both the R code and the message.",
      "Nothing — the entire cell was hidden in the rendered document."
    ],
    "correct": 1,
    "explanation": "Correct answer: The message `Hello, CSC3107`, but not the R code. In Quarto, `echo` controls whether source code is printed in the rendered document; it does not stop the code from running.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Week 1 Quarto Lab: Quiz",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 1,
      "answerKeyAnswer": "b. The message Hello, CSC3107, but not the R code."
    },
    "needsReview": false,
    "number": 1
  },
  {
    "id": "class-lab-week-1-quarto-lab-quiz-2",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "When you set `#| eval: false` on your `hello-csc3107` code cell (and removed `#| echo: false`) and rendered the document, what was visible in the HTML output?",
    "options": [
      "The R code in the cell, but not the message.",
      "The message `Hello, CSC3107`, but not the R code.",
      "Both the R code and the message.",
      "Nothing — the entire cell was hidden in the rendered document."
    ],
    "correct": 0,
    "explanation": "Correct answer: The R code in the cell, but not the message. In Quarto, `eval` controls whether the code is executed. With evaluation disabled, generated output from that cell is not produced.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Week 1 Quarto Lab: Quiz",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 2,
      "answerKeyAnswer": "a. The R code in the cell, but not the message."
    },
    "needsReview": false,
    "number": 2
  },
  {
    "id": "class-lab-week-1-quarto-lab-quiz-3",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "What is the effect of setting `toc: true` under `format: html:` in the YAML header?",
    "options": [
      "It auto-numbers all section headings throughout the document.",
      "It generates a clickable list of the document’s headings (a table of contents) and inserts it into the rendered output.",
      "It collapses each section into a clickable summary and reveals the body only when the reader expands it.",
      "It pins the first heading of the document at the top of the page so that it remains visible while the reader scrolls."
    ],
    "correct": 1,
    "explanation": "Correct answer: It generates a clickable list of the document’s headings (a table of contents) and inserts it into the rendered output. `toc: true` asks Quarto to build a table of contents from document headings.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Week 1 Quarto Lab: Quiz",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 3,
      "answerKeyAnswer": "b. It generates a clickable list of the document’s headings (a table of contents) and inserts it into the rendered output."
    },
    "needsReview": false,
    "number": 3
  },
  {
    "id": "class-lab-week-1-quarto-lab-quiz-4",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "You add the following lines to your YAML header:\n\n```\nexecute:\n  echo: fenced\n```\n\nAfter rendering, your scatter-plot code cell (which has no `#| echo:` option of its own) displays:",
    "options": [
      "The source code only — no plot.",
      "The scatter plot only — no source code.",
      "Both the source code, with the surrounding triple-backtick fence and the cell-option lines visible, and the scatter plot.",
      "Nothing — the setting hides both the source and the plot."
    ],
    "correct": 2,
    "explanation": "Correct answer: Both the source code, with the surrounding triple-backtick fence and the cell-option lines visible, and the scatter plot. `echo: fenced` prints the source as a fenced code block, including the chunk option lines, while the cell can still run.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Week 1 Quarto Lab: Quiz"
    },
    "needsReview": false,
    "number": 4
  },
  {
    "id": "class-lab-week-1-quarto-lab-quiz-5",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "A classmate wants a setup code cell that loads `library(ggplot2)` so that subsequent cells can use it, but they do **not** want the source code or any package-loading messages to appear in the rendered HTML. Which single execution option achieves all three goals?",
    "options": [
      "`#| eval: false`",
      "`#| echo: false`",
      "`#| message: false`",
      "`#| include: false`"
    ],
    "correct": 3,
    "explanation": "Correct answer: `#| include: false`. `include: false` is the setup-cell option that runs code while excluding both source and output from the rendered document.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Week 1 Quarto Lab: Quiz",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 4,
      "answerKeyAnswer": "d. #| include: false"
    },
    "needsReview": false,
    "number": 5
  },
  {
    "id": "class-lab-week-1-quarto-lab-quiz-6",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Your QMD file embeds an image with `![A pencil sketch I made of my dog](images/sketch.png){#fig-sketch}`. Why must the file `images/sketch.png` be included in the submitted ZIP folder?",
    "options": [
      "The image file contains the cross-reference label `#fig-sketch`; without it, the `@fig-sketch` reference in your prose cannot be resolved.",
      "Without the image file in the ZIP, your QMD will not render on the grader’s computer because the relative path `images/sketch.png` will not resolve to any file on their system.",
      "xSITe automatically scans every submission for inappropriate image content and rejects ZIPs without images.",
      "Quarto requires every embedded image to be uploaded to a separate hosting URL before the document can be rendered."
    ],
    "correct": 1,
    "explanation": "Correct answer: Without the image file in the ZIP, your QMD will not render on the grader’s computer because the relative path `images/sketch.png` will not resolve to any file on their system. A relative image path is resolved on the machine that renders the QMD, so the referenced image file must travel with the submission.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Week 1 Quarto Lab: Quiz",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 5,
      "answerKeyAnswer": "b. Without the image ﬁle in the ZIP, your QMD will not render on the grader’s computer because the relative path images/sketch.png will not resolve to any ﬁle on their system."
    },
    "needsReview": false,
    "number": 6
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-2-1",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "You record the heights (in cm) of five Star Wars characters in a vector. What does the indexing operation below return?\n\n```\nheights <- c(172, 167, 96, 202, 150) # Luke, Leia, R2-D2, Chewbacca, Yoda\nheights[c(2, 4)]\n```",
    "options": [
      "`167 202`",
      "`172 96`",
      "`167 96 202`",
      "`96 150`"
    ],
    "correct": 0,
    "explanation": "Correct answer: `167 202`. Positive numeric indexing in R selects elements by position, so positions 2 and 4 are returned.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 2",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 6,
      "answerKeyAnswer": "A. 167 202"
    },
    "needsReview": false,
    "number": 7
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-2-2",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "You measure the midi-chlorian counts (in thousands) of five Jedi candidates. What does `min_rank(desc(power))` return?\n\n```\nlibrary(dplyr)\npower <- c(85, 100, 70, 100, 90)\nmin_rank(desc(power))\n```",
    "options": [
      "`1 5 2 5 3`",
      "`2 5 1 5 3`",
      "`4 2 5 2 3`",
      "`4 1 5 1 3`"
    ],
    "correct": 3,
    "explanation": "Correct answer: `4 1 5 1 3`. `desc()` reverses the ranking direction so the largest value receives rank 1; ties receive the minimum shared rank.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 2",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 7,
      "answerKeyAnswer": "D. 4 1 5 1 3"
    },
    "needsReview": false,
    "number": 8
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-2-3",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Anakin wants to read the documentation page for the `mean()` function (used to extract a statistic from the `starwars` data frame). Which command opens the help page **directly**?",
    "options": [
      "`mean?`",
      "`help.find(\"mean\")`",
      "`?mean`",
      "`??mean`"
    ],
    "correct": 2,
    "explanation": "Correct answer: `?mean`. Prefixing a function name with `?` opens that function's help page directly in R.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 2",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 8,
      "answerKeyAnswer": "C. ?mean"
    },
    "needsReview": false,
    "number": 9
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-2-4",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "You want to extract the `height` column from the `starwars` tibble as a plain numeric vector. What does the line below produce?\n\n```\nlibrary(dplyr)\nstarwars$height\n```",
    "options": [
      "A one-column tibble with the heights.",
      "An error — `height` is not defined as a variable.",
      "The full `starwars` tibble filtered to non-missing heights.",
      "A numeric vector containing every character’s height."
    ],
    "correct": 3,
    "explanation": "Correct answer: A numeric vector containing every character’s height. The `$` operator extracts one column from a data frame or tibble as a vector.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 2",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 9,
      "answerKeyAnswer": "D. A numeric vector containing every characterʼs height."
    },
    "needsReview": false,
    "number": 10
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-2-5",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Jedi ranks form an ordinal hierarchy: a Padawan reports to a Knight, who reports to a Master. You encode them as an ordered factor and ask R whether one rank outranks another:\n\n```\nranks <- factor(\n  c(\"Padawan\", \"Master\", \"Knight\"),\n  levels = c(\"Padawan\", \"Knight\", \"Master\"),\n  ordered = TRUE\n)\nranks[2] > ranks[1]\n```",
    "options": [
      "Error — factor levels cannot be compared.",
      "`NA`",
      "`TRUE`",
      "`FALSE`"
    ],
    "correct": 2,
    "explanation": "Correct answer: `TRUE`. An ordered factor uses the declared level order for comparisons, so later levels outrank earlier levels.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 2",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 10,
      "answerKeyAnswer": "C. TRUE"
    },
    "needsReview": false,
    "number": 11
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-2-6",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "You want to label characters by Force alignment, falling back to a default for anyone who is neither light nor dark. What does this code return?\n\n```\nlibrary(dplyr)\nside <- c(\"light\", \"dark\", \"neutral\", \"light\")\ncase_match(\n  side,\n  \"light\" ~ \"Jedi\",\n  \"dark\" ~ \"Sith\",\n  .default = \"Smuggler\"\n)\n```",
    "options": [
      "`\"Jedi\" \"Sith\" NA \"Jedi\"`",
      "`\"Jedi\" \"Sith\" \"neutral\" \"Jedi\"`",
      "Error — `\"neutral\"` does not match any case.",
      "`\"Jedi\" \"Sith\" \"Smuggler\" \"Jedi\"`"
    ],
    "correct": 3,
    "explanation": "Correct answer: `\"Jedi\" \"Sith\" \"Smuggler\" \"Jedi\"`. `case_match()` maps explicit values to outputs and uses `.default` when no listed value matches.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 2"
    },
    "needsReview": false,
    "number": 12
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-2-7",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "You are classifying Force-sensitive characters. The data has a missing value because a record is incomplete. What does this code return?\n\n```\nlibrary(dplyr)\nside <- c(\"light\", \"dark\", NA, \"light\", \"dark\")\nif_else(side == \"dark\", \"Sith\", \"Jedi\")\n```",
    "options": [
      "`\"Jedi\" \"Sith\" NA \"Jedi\" \"Sith\"`",
      "`\"Jedi\" \"Sith\" \"Sith\" \"Jedi\" \"Sith\"`",
      "`\"Jedi\" \"Sith\" \"Jedi\" \"Jedi\" \"Sith\"`",
      "Error: missing values are not allowed in the condition."
    ],
    "correct": 0,
    "explanation": "Correct answer: `\"Jedi\" \"Sith\" NA \"Jedi\" \"Sith\"`. `if_else()` propagates `NA` when the condition is missing unless a `missing` value is supplied.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 2"
    },
    "needsReview": false,
    "number": 13
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-3-1",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "You record base stats for several Pokémon in a tibble. Which columns are kept by the call below?\n\n```\nlibrary(dplyr)\npokemon <- tibble(\n  name = c(\"Pikachu\", \"Charizard\", \"Blastoise\"),\n  type = c(\"Electric\", \"Fire\", \"Water\"),\n  hp = c(35, 78, 79),\n  attack = c(55, 84, 83),\n  defense = c(40, 78, 100)\n)\nselect(pokemon, where(is.numeric))\n```",
    "options": [
      "A tibble with all five columns.",
      "A tibble with `hp`, `attack`, and `defense`.",
      "A tibble with `name` and `type` only.",
      "Error — `is.numeric` is not a valid tidyselect helper."
    ],
    "correct": 1,
    "explanation": "Correct answer: A tibble with `hp`, `attack`, and `defense`. `where(is.numeric)` is a tidyselect predicate that keeps columns whose type is numeric.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 3",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 11,
      "answerKeyAnswer": "B. A tibble with hp, attack, and defense."
    },
    "needsReview": false,
    "number": 14
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-3-2",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "You want to rescale every numeric stat by dividing it by 10. What does the code below produce?\n\n```\nlibrary(dplyr)\npokemon <- tibble(\n  name = c(\"Pikachu\", \"Charizard\"),\n  hp = c(35, 78),\n  attack = c(55, 84),\n  defense = c(40, 78)\n)\nmutate(pokemon, across(where(is.numeric), ~ . / 10))\n```",
    "options": [
      "The same tibble unchanged — `across()` requires the selection wrapped in `c()`.",
      "A tibble where `hp`, `attack`, and `defense` are each divided by 10, with `name` unchanged.",
      "Error — the tilde (`~`) is not valid syntax inside `mutate()`.",
      "A one-column tibble containing the division result for `hp` only.\n\n**Note:** Source option-label note: labels appear as `A, B, D, D` in the uploaded file."
    ],
    "correct": 1,
    "explanation": "Correct answer: A tibble where `hp`, `attack`, and `defense` are each divided by 10, with `name` unchanged. `where(is.numeric)` is a tidyselect predicate that keeps columns whose type is numeric.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 3"
    },
    "needsReview": false,
    "number": 15
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-3-3",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "You sort Pokémon by speed (descending), breaking ties by attack (also descending). What is the resulting order of the `name` column?\n\n```\nlibrary(dplyr)\npokemon <- tibble(\n  name = c(\"Pikachu\", \"Charizard\", \"Blastoise\", \"Mewtwo\"),\n  speed = c(90, 100, 78, 100),\n  attack = c(55, 84, 83, 110)\n)\narrange(pokemon, desc(speed), desc(attack))\n```",
    "options": [
      "Mewtwo, Charizard, Blastoise, Pikachu",
      "Blastoise, Pikachu, Charizard, Mewtwo",
      "Charizard, Mewtwo, Pikachu, Blastoise",
      "Mewtwo, Charizard, Pikachu, Blastoise"
    ],
    "correct": 3,
    "explanation": "Correct answer: Mewtwo, Charizard, Pikachu, Blastoise. `arrange()` sorts rows in the order of its expressions, using later expressions as tie-breakers.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 3",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 13,
      "answerKeyAnswer": "D. Mewtwo, Charizard, Pikachu, Blastoise"
    },
    "needsReview": false,
    "number": 16
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-3-4",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "You compute the mean HP for each Pokémon type. What does the call below return?\n\n```\nlibrary(dplyr)\npokemon <- tibble(\n  type = c(\"Electric\", \"Fire\", \"Water\", \"Fire\", \"Water\"),\n  hp = c(35, 78, 79, 75, 80)\n)\nsummarize(pokemon, mean_hp = mean(hp), .by = type)\n```",
    "options": [
      "A 5-row tibble where `mean_hp` is the same value on every row.",
      "A 1-row tibble with the overall mean HP across all Pokémon.",
      "A 3-row tibble — one row per type — with a `mean_hp` column.",
      "Error — `.by` must be passed as a quoted string."
    ],
    "correct": 2,
    "explanation": "Correct answer: A 3-row tibble — one row per type — with a `mean_hp` column. `summarize()` collapses rows into summaries; `.by` creates one summary per group for that call.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 3",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 14,
      "answerKeyAnswer": "C. A 3-row tibble — one row per type — with a mean_hp column."
    },
    "needsReview": false,
    "number": 17
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-3-5",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "You want to put each (Pokémon, stat) pair on its own row, with one column holding the stat name and another holding the value. What does the code below return?\n\n```\nlibrary(tidyr)\nlibrary(dplyr)\npokemon <- tibble(\n  name = c(\"Pikachu\", \"Charizard\"),\n  hp = c(35, 78),\n  attack = c(55, 84),\n  defense = c(40, 78)\n)\npivot_longer(pokemon, cols = -name, names_to = \"stat\", values_to = \"value\")\n```",
    "options": [
      "A 6-row tibble with columns `name`, `stat`, and `value`.",
      "A 3-row tibble with columns `name`, `hp`, `attack`, and `defense`.",
      "A 2-row tibble unchanged from the input.",
      "Error — `cols = -name` is invalid syntax for `pivot_longer()`."
    ],
    "correct": 0,
    "explanation": "Correct answer: A 6-row tibble with columns `name`, `stat`, and `value`. `pivot_longer()` gathers multiple columns into name/value rows, making the data longer.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 3",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 15,
      "answerKeyAnswer": "A. A 6-row tibble with columns name, stat, and value."
    },
    "needsReview": false,
    "number": 18
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-3-6",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "You want to attach gym-leader information to each Pokémon by matching on the `region` column. What does the call below produce?\n\n```\nlibrary(dplyr)\npokemon <- tibble(\n  name = c(\"Pikachu\", \"Charizard\", \"Blastoise\", \"Mewtwo\"),\n  region = c(\"Kanto\", \"Kanto\", \"Kanto\", \"Cinnabar\")\n)\ngyms <- tibble(\n  region = c(\"Kanto\", \"Johto\"),\n  leader = c(\"Brock\", \"Falkner\")\n)\nleft_join(pokemon, gyms, join_by(region))\n```",
    "options": [
      "A 5-row tibble — Johto/Falkner is appended with `name = NA`.",
      "A 3-row tibble — Mewtwo is dropped because Cinnabar does not appear in `gyms`.",
      "Error — `region` values do not all match between the tables.",
      "A 4-row tibble: Pikachu, Charizard, and Blastoise get `leader = \"Brock\"`; Mewtwo gets `leader = NA`."
    ],
    "correct": 3,
    "explanation": "Correct answer: A 4-row tibble: Pikachu, Charizard, and Blastoise get `leader = \"Brock\"`; Mewtwo gets `leader = NA`. `left_join()` preserves all rows from the left table and fills unmatched right-table columns with `NA`.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 3",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 16,
      "answerKeyAnswer": "D. A 4-row tibble: Pikachu, Charizard, and Blastoise get leader = \"Brock\"; Mewtwo gets leader = NA."
    },
    "needsReview": false,
    "number": 19
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-3-7",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "You convert a vector of trainer names to uppercase using the purrr `map()` function. What does the result look like?\n\n```\nlibrary(purrr)\nlibrary(stringr)\ntrainer_names <- c(\"ash\", \"misty\", \"brock\")\nmap(trainer_names, str_to_upper)\n```",
    "options": [
      "The original lowercase vector, unchanged.",
      "Error — `map()` requires a tibble as its first argument.",
      "A list of length 3 whose elements are `\"ASH\"`, `\"MISTY\"`, and `\"BROCK\"`.",
      "A character vector `c(\"ASH\", \"MISTY\", \"BROCK\")`."
    ],
    "correct": 2,
    "explanation": "Correct answer: A list of length 3 whose elements are `\"ASH\"`, `\"MISTY\"`, and `\"BROCK\"`. `map()` applies a function to each input element and returns a list unless a typed variant is used.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 3",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 17,
      "answerKeyAnswer": "C. A list of length 3 whose elements are \"ASH\", \"MISTY\", and \"BROCK\"."
    },
    "needsReview": false,
    "number": 20
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-4-1",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "You initialise a ggplot object and assign it to a variable, but you do not add any geom layer. What does the call below print?\n\n```\nlibrary(ggplot2)\ndfr <- tribble(\n  ~x , ~y ,\n   3 , -1 ,\n   0 , -2 ,\n   1 ,  2\n)\ngg <- ggplot(dfr, aes(x = x, y = y))\ngg\n```",
    "options": [
      "A scatter plot of the three points, because `aes()` implicitly adds `geom_point()`.",
      "Error — `ggplot()` requires at least one `geom_*()` layer to display anything.",
      "An empty plot with the x- and y-axes drawn but no points or lines.",
      "A printed tibble of the data frame `dfr`."
    ],
    "correct": 2,
    "explanation": "Correct answer: An empty plot with the x- and y-axes drawn but no points or lines. This option matches the behavior described in the prompt; the other choices describe different R, Quarto, or ggplot2 behavior.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 4",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 18,
      "answerKeyAnswer": "C. An empty plot with the x- and y-axes drawn but no points or lines."
    },
    "needsReview": false,
    "number": 21
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-4-2",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "You plot Hurricane Michelle’s trajectory using its longitude and latitude, recorded in observation order. Which statement correctly describes the difference between the two calls below?\n\n```\nlibrary(ggplot2)\nggplot(michelle, aes(long, lat)) + geom_point() + geom_path()\nggplot(michelle, aes(long, lat)) + geom_point() + geom_line()\n```",
    "options": [
      "They produce identical plots — `geom_path()` is just an alias for `geom_line()`.",
      "`geom_path()` requires a `group` aesthetic, while `geom_line()` does not.",
      "`geom_line()` connects observations in the order they appear in the data; `geom_path()` reorders them by the x variable.",
      "`geom_path()` connects observations in the order they appear in the data; `geom_line()` connects them after reordering by the x variable."
    ],
    "correct": 3,
    "explanation": "Correct answer: `geom_path()` connects observations in the order they appear in the data; `geom_line()` connects them after reordering by the x variable. `geom_path()` connects rows in data order, while `geom_line()` orders observations by the x variable within groups.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 4",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 19,
      "answerKeyAnswer": "D. geom_path() connects observations in the order they appear in the data; geom_line() connects them after reordering by the x variable."
    },
    "needsReview": false,
    "number": 22
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-4-3",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "The plot of wind versus pressure for Hurricane Michelle suffers from overplotting because several `(pressure, wind)` combinations are observed multiple times. Which of the two calls below addresses the overplotting by encoding the number of overlapping observations at each location through the size of the marks?\n\n```\n# Call A\nggplot(michelle, aes(pressure, wind)) +\n  geom_jitter(alpha = 0.5)\n\n# Call B\nggplot(michelle, aes(pressure, wind)) +\n  geom_count(alpha = 0.5) +\n  scale_size_area()\n```",
    "options": [
      "Call B. `geom_count()` sizes each mark by the count of overlapping observations; `scale_size_area()` makes the area (rather than the radius) proportional to the count.",
      "Both calls encode counts identically — `geom_jitter()` and `geom_count()` are interchangeable.",
      "Call A. `geom_jitter()` enlarges points where overlap occurs.",
      "Neither — both calls only add transparency and do not encode counts."
    ],
    "correct": 0,
    "explanation": "Correct answer: Call B. `geom_count()` sizes each mark by the count of overlapping observations; `scale_size_area()` makes the area (rather than the radius) proportional to the count. `scale_size_area()` makes point area proportional to the mapped value, which is the relevant perception for bubbles.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 4",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 20,
      "answerKeyAnswer": "A. Call B. geom_count() sizes each mark by the count of overlapping observations; scale_size_area() makes the area (rather than the radius) proportional to the count."
    },
    "needsReview": false,
    "number": 23
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-4-4",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "You overlay a smoothed curve on the wind-vs-pressure scatter plot. What do the two calls below produce?\n\n```\n# Call A\ngg_pressure_wind_count + geom_smooth(method = \"loess\")\n\n# Call B\ngg_pressure_wind_count + geom_smooth(method = \"lm\")\n```",
    "options": [
      "Call A fits a locally estimated scatter-plot smoothing (LOESS) curve; Call B fits a straight line from a linear model.",
      "Call B raises an error — `\"lm\"` is not a valid `method` for `geom_smooth()`.",
      "Both fit a straight line — `\"loess\"` and `\"lm\"` are equivalent aliases.",
      "Call A fits a linear model; Call B fits a LOESS curve.\n\n**Note:** Source option-label note: labels appear as `A, D, B, C` in the uploaded file."
    ],
    "correct": 0,
    "explanation": "Correct answer: Call A fits a locally estimated scatter-plot smoothing (LOESS) curve; Call B fits a straight line from a linear model. `geom_smooth(method = \"loess\")` fits a local smooth; `method = \"lm\"` fits a linear model.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 4"
    },
    "needsReview": false,
    "number": 24
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-4-5",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "You draw a histogram of `Sepal.Length` from the `iris` data. What is the visual effect of the two arguments `fill` and `color` in the call below?\n\n```\nlibrary(ggplot2)\nggplot(iris, aes(x = Sepal.Length)) +\n  geom_histogram(bins = 40, fill = \"yellow\", color = \"darkblue\")\n```",
    "options": [
      "The interior of each bar is yellow; the bar outlines are dark blue. The histogram uses 40 bins.",
      "The interior of each bar is dark blue; the bar outlines are yellow.",
      "Error — `geom_histogram()` does not accept the `fill` argument.",
      "`fill` and `color` are interchangeable in `geom_histogram()`; both set the bar interior.\n\n**Note:** Source option-label note: labels appear as `A, B, D, D` in the uploaded file."
    ],
    "correct": 0,
    "explanation": "Correct answer: The interior of each bar is yellow; the bar outlines are dark blue. The histogram uses 40 bins. `fill` controls bar interiors, `color` controls outlines, and `bins` controls the number of histogram bins.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 4"
    },
    "needsReview": false,
    "number": 25
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-4-6",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "You want to overlay a smoothed density estimate on a histogram so that both layers share the same vertical scale. What is the purpose of `aes(y = after_stat(density))` in the call below?\n\n```\nlibrary(ggplot2)\nggplot(iris, aes(Sepal.Length)) +\n  geom_histogram(\n    aes(y = after_stat(density)),\n    bins = 20,\n    fill = NA,\n    color = \"gray25\"\n  ) +\n  geom_density(color = \"darkblue\", linewidth = 1.5)\n```",
    "options": [
      "It rescales the histogram so that its bars are expressed as densities (area-under-curve equal to 1), matching the y-scale of `geom_density()`.",
      "It rotates the histogram so the bars are horizontal.",
      "It removes the histogram and shows the density curve only.",
      "Error — `after_stat()` is not valid inside `aes()`."
    ],
    "correct": 0,
    "explanation": "Correct answer: It rescales the histogram so that its bars are expressed as densities (area-under-curve equal to 1), matching the y-scale of `geom_density()`. `fill` controls bar interiors, `color` controls outlines, and `bins` controls the number of histogram bins.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 4",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 23,
      "answerKeyAnswer": "A. It rescales the histogram so that its bars are expressed as densities (area-under-curve equal to 1), matching the y-scale of geom_density()."
    },
    "needsReview": false,
    "number": 26
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-4-7",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "You want one separate histogram panel per iris species, stacked vertically. Which of the calls below achieves this?\n\n```\nlibrary(ggplot2)\n# Call A\nggplot(iris, aes(Sepal.Length, fill = Species)) +\n  geom_histogram(bins = 20, position = \"dodge\")\n\n# Call B\nggplot(iris, aes(Sepal.Length)) +\n  geom_histogram(bins = 20, fill = NA, color = \"black\") +\n  facet_wrap(vars(Species), ncol = 1)\n```",
    "options": [
      "Neither — faceting is only available via `geom_facet()`.",
      "Both calls produce the same result.",
      "Call B — `facet_wrap(vars(Species), ncol = 1)` splits the data into one panel per species, arranged in a single column.",
      "Call A — `position = \"dodge\"` creates one panel per species side by side."
    ],
    "correct": 2,
    "explanation": "Correct answer: Call B — `facet_wrap(vars(Species), ncol = 1)` splits the data into one panel per species, arranged in a single column. `arrange()` sorts rows in the order of its expressions, using later expressions as tie-breakers.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 4",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 24,
      "answerKeyAnswer": "C. Call B — facet_wrap(vars(Species), ncol = 1) splits the data into one panel per species, arranged in a single column."
    },
    "needsReview": false,
    "number": 27
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-6-1",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Your data already contains one row per category together with a `count` column. You want bar lengths to equal those counts. Which geom should you use, and why?",
    "options": [
      "`geom_bar()`, because it always reads bar length from a numeric column.",
      "`geom_col()`, because it uses the value of a variable as the bar length, whereas `geom_bar()` counts rows.",
      "Either one — they are interchangeable for pre-counted data.",
      "`geom_histogram()`, because counts require binning."
    ],
    "correct": 1,
    "explanation": "Correct answer: `geom_col()`, because it uses the value of a variable as the bar length, whereas `geom_bar()` counts rows. `geom_col()` uses an existing y value as bar height; `geom_bar()` counts rows by default.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 6",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 25,
      "answerKeyAnswer": "B. geom_col(), because it uses the value of a variable as the bar length, whereas geom_bar() counts rows."
    },
    "needsReview": false,
    "number": 28
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-6-2",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "You draw a heatmap of a regular grid of elevation values. What is the relationship between `geom_tile()` and `geom_raster()`?",
    "options": [
      "`geom_raster()` draws contour lines; `geom_tile()` draws filled cells.",
      "They map the third variable to `z` and `fill` respectively, and are not interchangeable.",
      "`geom_raster()` is a faster special case of `geom_tile()` for when all tiles are the same size.",
      "`geom_tile()` only works on matrices; `geom_raster()` only works on data frames."
    ],
    "correct": 2,
    "explanation": "Correct answer: `geom_raster()` is a faster special case of `geom_tile()` for when all tiles are the same size. `geom_raster()` is the regular-grid, equal-cell-size special case of `geom_tile()`.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 6",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 26,
      "answerKeyAnswer": "C. geom_raster() is a faster special case of geom_tile() for when all tiles are the same size."
    },
    "needsReview": false,
    "number": 29
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-6-3",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "You switch from a filled heatmap to a contour plot of the same elevation surface. Which aesthetic should the elevation be mapped to?\n\n```\nlibrary(ggplot2)\nggplot(volcano_dfr, aes(x, y, ____ = elevation)) +\n  geom_contour()\n```",
    "options": [
      "`fill`, because contours shade the regions between lines.",
      "`color`, because each line takes the colour of its level.",
      "`size`, because higher elevations need thicker lines.",
      "`z`, because contours operate on a height surface."
    ],
    "correct": 3,
    "explanation": "Correct answer: `z`, because contours operate on a height surface. `geom_contour()` needs the surface height mapped to `z` so it can draw level curves.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 6",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 27,
      "answerKeyAnswer": "D. z, because contours operate on a height surface."
    },
    "needsReview": false,
    "number": 30
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-6-4",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "You have a quantitative variable and want to encode it with colour. Under what condition is colour an appropriate choice?",
    "options": [
      "Always — colour works for any numeric variable.",
      "Only if the variable is intensive (it does not grow simply because the dataset is larger).",
      "Only if the variable is extensive (it scales with the number of data points).",
      "Never — colour is reserved for categorical variables."
    ],
    "correct": 1,
    "explanation": "Correct answer: Only if the variable is intensive (it does not grow simply because the dataset is larger). Colour is safer for intensive quantities because their meaning is not simply a total that grows with more area or more observations.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 6",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 28,
      "answerKeyAnswer": "B. Only if the variable is intensive (it does not grow simply because the dataset is larger)."
    },
    "needsReview": false,
    "number": 31
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-6-5",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "A classmate maps a country’s total population to `size` and the categorical `continent` to `linewidth`. What happens?",
    "options": [
      "Both mappings are fine; `ggplot2` treats them identically.",
      "`size` is appropriate for population (positive and extensive), but mapping a categorical variable to `linewidth` triggers a warning.",
      "Population should use `linewidth`, and `continent` should use `size`.",
      "Neither mapping is allowed; `size` and `linewidth` accept only constants."
    ],
    "correct": 1,
    "explanation": "Correct answer: `size` is appropriate for population (positive and extensive), but mapping a categorical variable to `linewidth` triggers a warning. Size-like aesthetics should match the data type: population is quantitative, while linewidth is not appropriate for unordered categories.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 6",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 29,
      "answerKeyAnswer": "B. size is appropriate for population (positive and extensive), but mapping a categorical variable to linewidth triggers a warning."
    },
    "needsReview": false,
    "number": 32
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-6-6",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Mapping the integer column `Species` to `shape` raises the error “a continuous variable cannot be mapped to the shape aesthetic.” What is the fix, and why?",
    "options": [
      "Convert `Species` to a factor, because shape and line type are discrete and suit categorical data.",
      "Map `Species` to `size` instead, since shape only accepts numbers.",
      "Add `scale_shape_continuous()`, because shape is a continuous scale.",
      "Nothing is needed — the error is harmless and the plot still renders."
    ],
    "correct": 0,
    "explanation": "Correct answer: Convert `Species` to a factor, because shape and line type are discrete and suit categorical data. Shape and linetype are discrete aesthetics, so numeric category codes should be converted to factors before mapping.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 6",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 30,
      "answerKeyAnswer": "A. Convert Species to a factor, because shape and line type are discrete and suit categorical data."
    },
    "needsReview": false,
    "number": 33
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-6-7",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Compare the two plots of the `iris` data below. How do their fitted curves differ?\n\n```\nlibrary(ggplot2)\n# Plot 1\nggplot(iris, aes(Petal.Length, Petal.Width)) +\n  geom_jitter(aes(color = Species)) +\n  geom_smooth()\n\n# Plot 2\nggplot(iris, aes(Petal.Length, Petal.Width, color = Species)) +\n  geom_jitter() +\n  geom_smooth()\n```",
    "options": [
      "Both draw three curves, one per species.",
      "Both draw a single overall curve.",
      "Plot 1 draws one overall curve; Plot 2 draws three curves, one per species.",
      "Plot 2 raises an error because `color` cannot appear in `ggplot()`."
    ],
    "correct": 2,
    "explanation": "Correct answer: Plot 1 draws one overall curve; Plot 2 draws three curves, one per species. Aesthetic mappings placed in the top-level `ggplot()` call are inherited by later layers, including `geom_smooth()`.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 6",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 31,
      "answerKeyAnswer": "C. Plot 1 draws one overall curve; Plot 2 draws three curves, one per species."
    },
    "needsReview": false,
    "number": 34
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-8-1",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "You build a plot whose `year` column is stored as an integer and whose `partyid` column is a factor. Which family of scale functions applies to each, and why?",
    "options": [
      "Both are continuous, because both can be ordered.",
      "`year` uses `scale_*_continuous()` (all numeric columns are continuous), while `partyid` uses `scale_*_discrete()` (factors are discrete).",
      "`year` uses `scale_*_discrete()` because integers take whole values; `partyid` uses `scale_*_continuous()`.",
      "Neither needs a scale function; scales apply only to colour."
    ],
    "correct": 1,
    "explanation": "Correct answer: `year` uses `scale_*_continuous()` (all numeric columns are continuous), while `partyid` uses `scale_*_discrete()` (factors are discrete). Numeric variables use continuous scales; factors and other categorical variables use discrete scales.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 8",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 32,
      "answerKeyAnswer": "B. year uses scale_*_continuous() (all numeric columns are continuous), while partyid uses scale_*_discrete() (factors are discrete)."
    },
    "needsReview": false,
    "number": 35
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-8-2",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "On a continuous axis, what is the difference between the `limits`, `breaks`, and `labels` arguments?\n\n```\nlibrary(ggplot2)\ngg_demographics +\n  scale_x_continuous(\n    limits = c(-5000, 65000),\n    breaks = seq(0, 60000, by = 20000),\n    labels = c(\"Nothing\", \"Poor\", \"Well-Off\", \"Crazy Rich\")\n  )\n```",
    "options": [
      "They are aliases for the same thing; only the last one set takes effect.",
      "`limits` sets the plotted range, `breaks` sets where the tick marks go, and `labels` sets the text printed at those breaks.",
      "`breaks` sets the range, `limits` sets the tick text, and `labels` removes the minor grid lines.",
      "`labels` sets the range; `limits` and `breaks` control colour."
    ],
    "correct": 1,
    "explanation": "Correct answer: `limits` sets the plotted range, `breaks` sets where the tick marks go, and `labels` sets the text printed at those breaks. `limits` controls the displayed scale range, `breaks` controls tick positions, and `labels` controls tick text.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 8",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 33,
      "answerKeyAnswer": "B. limits sets the plotted range, breaks sets where the tick marks go, and labels sets the text printed at those breaks."
    },
    "needsReview": false,
    "number": 36
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-8-3",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "You want large axis numbers abbreviated as “K”, “M”, and “B” (e.g. `50000` shown as `50K`). Which `scales` helper does this?",
    "options": [
      "`label_comma()`, because it inserts thousands separators.",
      "`label_currency()`, because it prefixes a currency sign.",
      "`label_number(scale_cut = cut_short_scale())`, because it abbreviates thousand/million/billion as K/M/B.",
      "`label_log()`, because it formats numbers in superscripts."
    ],
    "correct": 2,
    "explanation": "Correct answer: `label_number(scale_cut = cut_short_scale())`, because it abbreviates thousand/million/billion as K/M/B. `label_number(scale_cut = cut_short_scale())` formats large numbers with K, M, and B suffixes.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 8",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 34,
      "answerKeyAnswer": "C. label_number(scale_cut = cut_short_scale()), because it abbreviates thousand/million/billion as K/M/B."
    },
    "needsReview": false,
    "number": 37
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-8-4",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "You map a count to `size` with `geom_count()` and want a symbol’s **area** to be proportional to its value. Which scale should you add, and why does it matter?",
    "options": [
      "The default size scale already makes area proportional, so no change is needed.",
      "`scale_radius()`, because area is best controlled through the radius.",
      "`scale_size_area()`, because by default `ggplot2` does not scale area strictly in proportion to the value, and area-proportional sizing follows Tufte’s principle of graphical integrity.",
      "`scale_size_continuous(trans = \"log10\")`, because size should be log-scaled."
    ],
    "correct": 2,
    "explanation": "Correct answer: `scale_size_area()`, because by default `ggplot2` does not scale area strictly in proportion to the value, and area-proportional sizing follows Tufte’s principle of graphical integrity. `scale_size_area()` makes point area proportional to the mapped value, which is the relevant perception for bubbles.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 8",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 35,
      "answerKeyAnswer": "C. scale_size_area(), because by default ggplot2 does not scale area strictly in proportion to the value, and area-proportional sizing follows Tufteʼs principle of graphical integrity."
    },
    "needsReview": false,
    "number": 38
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-8-5",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "The word “Hours” appears in both your x-axis title and your plot title. You want to move the x-axis to the top of the panel and drop the redundant axis title. Which call does this?\n\n```\nlibrary(ggplot2)\ngg_tv +\n  guides(x = guide_axis(____, ____))\n```",
    "options": [
      "`guides(x = \"none\")`, which moves the axis to the top.",
      "`guides(x = guide_axis(title = NULL, position = \"top\"))`.",
      "`scale_x_continuous(position = \"top\")`, because position is a scale property.",
      "`labs(x = \"top\")`, because the axis title controls placement."
    ],
    "correct": 1,
    "explanation": "Correct answer: `guides(x = guide_axis(title = NULL, position = \"top\"))`. Axis placement is controlled by the scale; `labs()` changes text labels, not axis position.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 8",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 36,
      "answerKeyAnswer": "B. guides(x = guide_axis(title = NULL, position = \"top\"))."
    },
    "needsReview": false,
    "number": 39
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-8-6",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "For a `linewidth` legend, `ggplot2` places the smallest value at the top and the largest at the bottom, which feels backwards next to an upward y-axis. How do you put the largest value at the top?",
    "options": [
      "`guides(linewidth = guide_legend(order = 99))`.",
      "`guides(linewidth = \"none\")`.",
      "`guides(linewidth = guide_legend(reverse = TRUE))`.",
      "`scale_linewidth_reverse()`."
    ],
    "correct": 2,
    "explanation": "Correct answer: `guides(linewidth = guide_legend(reverse = TRUE))`. `guide_legend(reverse = TRUE)` reverses legend key order without changing the plotted data.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 8",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 37,
      "answerKeyAnswer": "C. guides(linewidth = guide_legend(reverse = TRUE))."
    },
    "needsReview": false,
    "number": 40
  },
  {
    "id": "class-lab-lab-readiness-quiz-week-8-7",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Your scatter plot uses `alpha = 0.5` and small jittered points to reduce overplotting, but this makes the legend keys faint and tiny. How do you make the legend symbols opaque and larger **without** changing the plotted points?\n\n```\nlibrary(ggplot2)\ngg_iris +\n  guides(\n    color = guide_legend(____ = list(alpha = 1, size = 3))\n  )\n```",
    "options": [
      "`override.aes`, which sets legend-key aesthetics independently of the data.",
      "`reverse`, which redraws the legend at full opacity.",
      "`order`, which controls symbol size in the key.",
      "You cannot — the legend always inherits the plot’s aesthetics."
    ],
    "correct": 0,
    "explanation": "Correct answer: `override.aes`, which sets legend-key aesthetics independently of the data. `override.aes` changes legend-key appearance independently from the plotted layer aesthetics.",
    "source": {
      "kind": "class-lab",
      "path": "class-quizzes\\merged_lab_answer_key.md",
      "section": "Lab-readiness Quiz — Week 8",
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 38,
      "answerKeyAnswer": "A. override.aes, which sets legend-key aesthetics independently of the data."
    },
    "needsReview": false,
    "number": 41
  },
  {
    "id": "class-tut-week-01-first-meeting-quiz-1",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "In this course, what is the main purpose of information visualization?",
    "options": [
      "To make graphics as decorative and impressive as possible.",
      "To represent data visually so that it becomes accessible, understandable, and useful.",
      "To replace statistical analysis with charts.",
      "To avoid writing code by using spreadsheets instead."
    ],
    "correct": 1,
    "explanation": "Correct answer: To represent data visually so that it becomes accessible, understandable, and useful. Information visualization is about making data easier to understand and use, not decorating charts or replacing analysis.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 01: First-Meeting Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 1,
      "answerKeyAnswer": "B. To represent data visually so that it becomes accessible, understandable, and useful."
    },
    "needsReview": false,
    "number": 42
  },
  {
    "id": "class-tut-week-01-first-meeting-quiz-2",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "A bar chart encodes values by the visible length of each bar. Suppose a chart compares numerical values, but its y-axis starts above zero instead of at zero, so the bottoms of the bars are cut off.\n\nWhich statement best explains why this can be misleading?",
    "options": [
      "Bar charts should never be used for time-series data.",
      "The colors of the bars become harder to compare.",
      "The visible bar lengths no longer remain proportional to the numerical values.",
      "The chart contains too few categories."
    ],
    "correct": 2,
    "explanation": "Correct answer: The visible bar lengths no longer remain proportional to the numerical values. Bars encode values by length, so cutting off the baseline breaks the proportional relationship between visible bar length and value.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 01: First-Meeting Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 2,
      "answerKeyAnswer": "C. The visible bar lengths no longer remain proportional to the numerical values."
    },
    "needsReview": false,
    "number": 43
  },
  {
    "id": "class-tut-week-01-first-meeting-quiz-3",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "A point-to-point chart mainly encodes values by point position rather than by filled bar length or filled area. Because of that, it can sometimes use a narrower y-axis range more safely than a bar chart.\n\nWhy?",
    "options": [
      "Points have no area, so their visual size is not used to encode the numerical values.",
      "Point-to-point charts are always more accurate than bar charts.",
      "The x-axis is usually hidden in point-to-point charts.",
      "Point-to-point charts should only be used for categorical data."
    ],
    "correct": 0,
    "explanation": "Correct answer: Points have no area, so their visual size is not used to encode the numerical values. Point charts mainly encode value by position, so their mark area is not the quantity being compared.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 01: First-Meeting Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 3,
      "answerKeyAnswer": "A. Points have no area, so their visual size is not used to encode the numerical values."
    },
    "needsReview": false,
    "number": 44
  },
  {
    "id": "class-tut-week-01-first-meeting-quiz-4",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "What is the purpose of **Air** in Positron?",
    "options": [
      "To install R packages from CRAN.",
      "To format R code automatically by adjusting whitespace, indentation, and line breaks.",
      "To render Quarto documents as HTML, PDF, or Word files.",
      "To connect Positron to GitHub Copilot."
    ],
    "correct": 1,
    "explanation": "Correct answer: To format R code automatically by adjusting whitespace, indentation, and line breaks. Air is the formatter used by Positron to standardize R code spacing and indentation.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 01: First-Meeting Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 4,
      "answerKeyAnswer": "B. To format R code automatically by adjusting whitespace, indentation, and line breaks."
    },
    "needsReview": false,
    "number": 45
  },
  {
    "id": "class-tut-week-02-tutorial-checkpoint-quiz-1",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "The tutorial showed two ways to add `gregorian_day` to `ledger_data`. The second version was:\n\n```r\nledger_data$gregorian_day <-\n  fct_recode(\n    factor(ledger_data$shire_day),\n    Monday = \"Sterday\",\n    Tuesday = \"Sunday\",\n    Wednesday = \"Monday\",\n    Thursday = \"Trewsday\",\n    Friday = \"Hevensday\",\n    Saturday = \"Mersday\",\n    Sunday = \"Highday\"\n  )\n```\n\nAfter this runs, what would `class(ledger_data$gregorian_day)` return?",
    "options": [
      "`character`",
      "`factor`",
      "`c(\"ordered\", \"factor\")`",
      "Error because `factor()` needs an explicit `levels =` argument"
    ],
    "correct": 1,
    "explanation": "Correct answer: `factor`. `factor()` creates a factor and `fct_recode()` changes its level labels; it does not make the result a character vector.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 02: Tutorial-Checkpoint Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 5,
      "answerKeyAnswer": "b. factor"
    },
    "needsReview": false,
    "number": 46
  },
  {
    "id": "class-tut-week-03-tutorial-checkpoint-quiz-1",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Consider the line:\n\n```r\nmutate(rank = dense_rank(desc(n_flights)))\n```\n\nWhy is `desc()` needed here?",
    "options": [
      "`dense_rank()` always requires its argument to be wrapped in `desc()`.",
      "Without `desc()`, the airport with the fewest flights would receive rank 1.",
      "`desc()` is what tells the later `arrange()` step to sort from largest to smallest.",
      "`desc()` removes ties so that no two airports share the same rank."
    ],
    "correct": 1,
    "explanation": "Correct answer: Without `desc()`, the airport with the fewest flights would receive rank 1. `arrange()` sorts rows in the order of its expressions, using later expressions as tie-breakers.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 03: Tutorial-Checkpoint Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 6,
      "answerKeyAnswer": "b. Without desc(), the airport with the fewest flights would receive rank 1."
    },
    "needsReview": false,
    "number": 47
  },
  {
    "id": "class-tut-week-04-tutorial-checkpoint-quiz-1",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "A student plots a histogram of `Sepal.Length` (`n = 150`) three times with `bins = 10`, `bins = 20`, and `bins = 40`. They notice that the 10-bin plot looks like a smooth single hump, while the 40-bin plot looks jagged with many tall and short bars alternating.\n\nWhich statement best describes what is happening?",
    "options": [
      "The 10-bin plot is more accurate because fewer bins always reduce noise; the 40-bin plot is wrong and should be discarded.",
      "With too few bins the distribution's structure is washed out, and with too many bins random sampling noise dominates; 20 bins is a reasonable compromise for 150 observations.",
      "The number of bins has no real effect on what the histogram conveys - all three plots are equally informative and the choice is purely cosmetic.",
      "The 40-bin plot is always preferable because more bins reveal more detail in the underlying probability density."
    ],
    "correct": 1,
    "explanation": "Correct answer: With too few bins the distribution's structure is washed out, and with too many bins random sampling noise dominates; 20 bins is a reasonable compromise for 150 observations. Histogram bin count changes the visible structure: too few bins smooth detail away, while too many bins emphasize sampling noise.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 04: Tutorial-Checkpoint Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 7,
      "answerKeyAnswer": "b. With too few bins the distribution's structure is washed out, and with too many bins random sampling noise dominates; 20 bins is a reasonable compromise for 150 observations."
    },
    "needsReview": false,
    "number": 48
  },
  {
    "id": "class-tut-week-06-tutorial-checkpoint-quiz-1",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "In the tutorial, we drew a bar chart of car class like this:\n\n```r\nggplot(mpg, aes(x = class)) + geom_bar()\n```\n\nNo `y` aesthetic was supplied, yet each bar has a height. Why?",
    "options": [
      "`ggplot2` silently picks the first numeric column as `y`.",
      "`geom_bar()` defaults to `y = 1`, so all bars are the same height.",
      "The height is arbitrary until you add `geom_col()`.",
      "`geom_bar()` counts the rows in each category and uses that count as the bar height."
    ],
    "correct": 3,
    "explanation": "Correct answer: `geom_bar()` counts the rows in each category and uses that count as the bar height. `geom_col()` uses an existing y value as bar height; `geom_bar()` counts rows by default.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 06: Tutorial-Checkpoint Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 8,
      "answerKeyAnswer": "f. geom_bar() counts the rows in each category and uses that count as the bar height."
    },
    "needsReview": false,
    "number": 49
  },
  {
    "id": "class-tut-week-08-tutorial-checkpoint-quiz-1",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "A lollipop encodes each value by the length of its stick, so equal lengths must mean equal counts.\n\nWhich x-axis scale keeps that encoding honest?",
    "options": [
      "`scale_x_log10()`",
      "`scale_x_sqrt()`",
      "`scale_x_continuous()`",
      "`scale_x_reverse()`"
    ],
    "correct": 2,
    "explanation": "Correct answer: `scale_x_continuous()`. A linear continuous scale preserves proportional lengths for length-based encodings.",
    "source": {
      "kind": "class-tut",
      "path": "class-quizzes\\merged_tut_answer_key.md",
      "section": "Week 08: Tutorial-Checkpoint Quiz",
      "answerKeyPath": "answer-keys\\iv_all_tutorial_answer_key.json",
      "answerKeyRow": 9,
      "answerKeyAnswer": "c. scale_x_continuous()"
    },
    "needsReview": false,
    "number": 50
  },
  {
    "id": "practice-quiz1-1",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "color vs. fill in ggplot2\n\nWhen you write aes(color = Species) rather than aes(fill = Species), what structural difference does that imply?",
    "promptHtml": "<h2><code>color</code>&#160;vs.&#160;<code>fill</code>&#160;in ggplot2</h2>\n<p>When you write&#160;<code>aes(color = Species)</code>&#160;rather than&#160;<code>aes(fill = Species)</code>, what structural difference does that imply?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 1
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "color maps only to line geoms, fill only to area geoms",
      "color sets the outline color of geoms, whereas fill sets their interior color",
      "color creates a legend, but fill does not",
      "color is continuous by default, whereas fill is discrete by default"
    ],
    "correct": 1,
    "explanation": "Correct answer: color sets the outline/stroke of geoms, whereas fill sets their interior area. ggplot2 documents colour as strokes/lines and fill as inside areas.",
    "number": 51
  },
  {
    "id": "practice-quiz1-2",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Matching Plot to Code Chunk\n\nWhich of the plots below is generated by the following code chunk?\n\nggplot(pelts, aes(hare, lynx)) +\n geom_line() +\n geom_point(aes(colour = year)) +\n scale_colour_distiller(palette = \"YlOrRd\")",
    "promptHtml": "<h2>Matching Plot to Code Chunk</h2>\n<p>Which of the plots below is generated by the following code chunk?</p>\n<div>\n<div>\n<pre><code><span>ggplot(pelts, aes(hare, lynx)) +</span>\n<span>  geom_line() +</span>\n<span>  geom_point(aes(colour = year)) +</span>\n<span>  scale_colour_distiller(palette = &quot;YlOrRd&quot;)</span></code></pre>\n<p><img src=\"artifacts/Screenshot%202025-06-29%20at%2017.26.22.png\" alt=\"Point-and-line plots\" title=\"Point-and-line plots\" style=\"max-width: 100%;\"/></p>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 2
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 2,
    "explanation": "Correct answer: the plot with a black connecting line and points coloured by year. The code maps hare to x and lynx to y. geom_line() draws the connecting line with the default black colour, while geom_point(aes(colour = year)) colours only the points with the YlOrRd gradient.",
    "number": 52
  },
  {
    "id": "practice-quiz1-3",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "The plot below compares the percentage of front-page “newshole” devoted to selected topics in The Wall Street Journal before and after the newspaper was acquired by Rupert Murdoch’s News Corp. Suppose the Pew Research Center asked you to improve this visualisation. Identify at least three weaknesses of the current design and recommend specific changes that would make the comparison clearer and less misleading.",
    "promptHtml": "<p>The plot below compares the percentage of front-page “newshole” devoted to selected topics in <em>The Wall Street Journal</em> before and after the newspaper was acquired by Rupert Murdoch’s News Corp. Suppose the Pew Research Center asked you to improve this visualisation. Identify at least three weaknesses of the current design and recommend specific changes that would make the comparison clearer and less misleading.</p>\n<p><img src=\"artifacts/murdoch%20copy.png\" alt=\"3D grouped bar chart comparing the percentage of Wall Street Journal front-page news by topic before and after Murdoch’s takeover.\" title=\"3D grouped bar chart comparing the percentage of Wall Street Journal front-page news by topic before and after Murdoch’s takeover.\" style=\"max-width: 100%;\"/></p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 3
    },
    "needsReview": false,
    "type": "open",
    "idealAnswer": "The chart has several design problems that could mislead readers. First, the bar chart uses a 3D effect, which makes the bars harder to compare accurately. The perspective and shadows distort the visual length of the bars, so the chart should be changed to a flat 2D grouped bar chart or a dot/range plot. Second, the vertical axis appears visually compressed and should clearly start at zero if bars are used. Bars encode value by length, so truncating or visually compressing the axis can exaggerate differences between categories. Third, the colours and legend require the reader to keep looking back and forth between the bars and the key. Direct labels or clearer grouped labels for before and after would make the comparison easier. Fourth, the topics could be reordered by the size of change instead of being left in an arbitrary order. This would make the main message clearer. A safer redesign would be a 2D dumbbell plot showing before and after percentages for each topic, with direct labels and a clearly labelled zero-based or percentage axis.",
    "keyPoints": [
      "Identifies the 3D grouped-bar distortion.",
      "Explains why a bar chart needs a clear zero-based percentage axis.",
      "Recommends a flat 2D grouped, dot/range, or dumbbell redesign with clearer labels."
    ],
    "explanation": "The local image shows a 3D grouped bar chart with a legend and angled topic labels. The model answer is strong because it names concrete design flaws and gives a safer redesign.",
    "number": 53
  },
  {
    "id": "practice-quiz1-4",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Map Projections\n\nWhich of the following four world maps is based on an equirectangular projection?",
    "promptHtml": "<h2>Map Projections</h2>\n<p>Which of the following four world maps is based on an equirectangular projection?</p>\n<p><img src=\"artifacts/Screenshot%202025-06-29%20at%2017.34.09%201.png\" alt=\"World maps\" title=\"World maps\" style=\"max-width: 100%;\"/></p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 4
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 1,
    "explanation": "Correct answer: the rectangular world map with straight vertical meridians and straight horizontal parallels. The equirectangular projection is represented by a rectangular latitude-longitude grid; that visual structure matches the supplied image.",
    "number": 54
  },
  {
    "id": "practice-quiz1-5",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Merging Data Frames\n\nThe figure below represents a merge of the data frames shareholders and traded_companies. Which tidyverse function do you need to use to perform this merge?",
    "promptHtml": "<h2>Merging Data Frames</h2>\n<div>\n<div>\n<p>The figure below represents a merge of the data frames <code>shareholders</code>&#160;and&#160;<code>traded_companies</code>. Which tidyverse function do you need to use to perform this merge?</p>\n<p><img src=\"artifacts/left_join.png\" alt=\"Join\" title=\"Join\" style=\"max-width: 100%;\"/></p>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 5
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "inner_join()",
      "left_join()",
      "right_join()",
      "full_join()"
    ],
    "correct": 1,
    "explanation": "Correct answer: left_join(). The scraped prompt's image asset is named left_join.png, and a left join is the tidyverse join that preserves all rows from the left table while adding matching columns from the right table.",
    "number": 55
  },
  {
    "id": "practice-quiz1-6",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Diverging Colour Palettes\n\nWhen should cartographers use diverging palettes for representing data in their maps?",
    "promptHtml": "<h2>Diverging Colour Palettes</h2>\n<p>When should cartographers use diverging palettes for representing data in their maps?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 6
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "When the data shows a smooth progression of colours and maintains perceptual uniformity.",
      "When the data needs to be grouped into a small number of colour groups for clarity.",
      "When the data includes both positive and negative values that require visual contrast.",
      "When the data consists of distinct and discrete categories that need to be visually distinguished."
    ],
    "correct": 2,
    "explanation": "Correct answer: diverging palettes are for values that move away from a meaningful midpoint, such as negative versus positive values. Sequential palettes show one ordered ramp, and qualitative palettes separate categories.",
    "number": 56
  },
  {
    "id": "practice-quiz1-7",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "geom_text() vs. geom_label()\n\nWhat is the primary difference between geom_text() and geom_label()?",
    "promptHtml": "<h2><code>geom_text()</code>&#160;vs.&#160;<code>geom_label()</code></h2>\n<p>What is the primary difference between&#160;<code>geom_text()</code>&#160;and&#160;<code>geom_label()</code>?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 7
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "geom_text() adds a background rectangle; geom_label() only places text",
      "geom_label() adds a background rectangle; geom_text() only places text",
      "geom_text() automatically expands the plot limits; geom_label() does not",
      "geom_label() can only be used inside faceted plots"
    ],
    "correct": 1,
    "explanation": "Correct answer: geom_label() draws a rectangle behind the text; geom_text() adds text only.",
    "number": 57
  },
  {
    "id": "practice-quiz1-8",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Visualizing Categorical Data (1 of 2)\n\nThe mosaic plot below visualizes data from the General Social Survey, with the x-axis representing three categories of happiness: “Not too happy,” “Pretty happy,” and “Very happy.” The width of each vertical stripe is proportional to the number of respondents in each respective category. These stripes are further segmented into rectangles differentiated by fill colors, each denoting the health status of respondents: “Poor,” “Fair,” “Good,” and “Excellent.”\n\nWhat is an advantage of a mosaic plot compared to a stacked bar plot?",
    "promptHtml": "<h2>Visualizing Categorical Data (1 of 2)</h2>\n<p>The mosaic plot below visualizes data from the General Social Survey, with the x-axis representing three categories of happiness: “Not too happy,” “Pretty happy,” and “Very happy.” The width of each vertical stripe is proportional to the number of respondents in each respective category. These stripes are further segmented into rectangles differentiated by fill colors, each denoting the health status of respondents: “Poor,” “Fair,” “Good,” and “Excellent.”</p>\n<p>What is an advantage of a mosaic plot compared to a stacked bar plot?</p>\n<p><img src=\"artifacts/Screenshot%202025-06-29%20at%2017.42.34.png\" alt=\"Mosaic plot\" title=\"Mosaic plot\" style=\"max-width: 100%;\"/></p>\n<p></p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 8
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "Mosaic plots allow for a clearer visualization of the proportions of respondents by health categories for each happiness level.",
      "Mosaic plots are better suited for displaying data with continuous numerical variables compared to stacked bar plots.",
      "Mosaic plots provide a more visually appealing and colorful representation of data compared to stacked bar plots.",
      "Mosaic plots offer a smoother and more continuous representation of the data distribution within each category."
    ],
    "correct": 0,
    "explanation": "Correct answer: a mosaic plot makes the conditional proportions visible because both stripe width and segment area encode the category counts/proportions.",
    "number": 58
  },
  {
    "id": "practice-quiz1-9",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Area Principle\n\nWhich of the following best describes the area principle in data visualization?",
    "promptHtml": "<h2>Area Principle</h2>\n<p>Which of the following best describes the area principle in data visualization?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 9
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "Bars in a bar chart should be the same width regardless of the data values.",
      "The area of each graphical element should be directly proportional to the quantity it represents.",
      "Charts should always start their axes at zero to avoid misleading shapes.",
      "Point-to-point (line) charts must always use the full vertical range of the data."
    ],
    "correct": 1,
    "explanation": "Correct answer: the area principle says a graphical element's visible area should be proportional to the quantity it represents.",
    "number": 59
  },
  {
    "id": "practice-quiz1-10",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Scales in the Grammar of Graphics\n\nIn the grammar of graphics, which feature of the plot below is not considered a result of a “scale”?",
    "promptHtml": "<h2>Scales in the Grammar of Graphics</h2>\n<div>\n<div>\n<p>In the grammar of graphics, which feature of the plot below is&#160;<strong>not</strong>&#160;considered a result of a “scale”?</p>\n<p><img src=\"artifacts/mammals1.png\" alt=\"ggplot2 example\" title=\"ggplot2 example\" style=\"max-width: 100%;\"/></p>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 10
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "The assignment of x-coordinates to represent body mass",
      "Different colors representing data for primate and non-primate species",
      "Different shapes representing data for primate and non-primate species",
      "Font size of the title"
    ],
    "correct": 3,
    "explanation": "Correct answer: font size of the title. Position, colour, and shape mappings are data scales; title font size is a theme/text styling setting.",
    "number": 60
  },
  {
    "id": "practice-quiz1-11",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Geom for Geographic Regions\n\nYou have an sf object countries whose geometries are polygons and you want to map each country’s fill color by its region attribute in ggplot2. Which geom is most appropriate?",
    "promptHtml": "<h2>Geom for Geographic Regions</h2>\n<p>You have an&#160;<code>sf</code>&#160;object countries whose geometries are polygons and you want to map each country’s fill color by its region attribute in ggplot2. Which geom is most appropriate?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 11
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "geom_polygon()",
      "geom_area()",
      "geom_sf()",
      "geom_contour_filled()"
    ],
    "correct": 2,
    "explanation": "Correct answer: geom_sf(). ggplot2's sf support uses geom_sf() to draw simple-feature points, lines, or polygons.",
    "number": 61
  },
  {
    "id": "practice-quiz1-12",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Tidyverse\n\nYou want to change the names of two columns of an existing data frame without dropping or adding any other columns. Which tidyverse function should you use?",
    "promptHtml": "<h2>Tidyverse</h2>\n<p>You want to change the names of two columns of an existing data frame without dropping or adding any other columns. Which tidyverse function should you use?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 12
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "select()",
      "rename()",
      "mutate()",
      "recode_names()"
    ],
    "correct": 1,
    "explanation": "Correct answer: rename(). dplyr's rename() changes column names without changing rows or column order.",
    "number": 62
  },
  {
    "id": "practice-quiz1-13",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "directlabels Package\n\nWhich add-on feature does the directlabels package provide for ggplot2 plots?",
    "promptHtml": "<h2>directlabels Package</h2>\n<p>Which add-on feature does the directlabels package provide for ggplot2 plots?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 13
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "A technique for customizing the axis labels and tick marks using the labs() function.",
      "A method for specifying an aesthetic mapping without having to use the aes() function.",
      "A function used for transforming the data before plotting to ensure better visualization.",
      "A geom enabling the automatic placement of data labels directly near the corresponding data points in a plot."
    ],
    "correct": 3,
    "explanation": "Correct answer: directlabels provides automatic direct label placement for multicolour lattice or ggplot2 plots.",
    "number": 63
  },
  {
    "id": "practice-quiz1-14",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Factors\n\nWhat is the output when running the following code?\n\nfactor(c(\"Pomposo\", \"Colossale\", \"Pomposo\", \"Regolare\"))\n\nThe answer options differ only in the second line of output.",
    "promptHtml": "<h2>Factors</h2>\n<p>What is the output when running the following code?</p>\n<div>\n<div>\n<pre><code><span>factor(c(&quot;Pomposo&quot;, &quot;Colossale&quot;, &quot;Pomposo&quot;, &quot;Regolare&quot;))</span></code></pre>\n</div>\n</div>\n<p>The answer options differ only in the second line of output.</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 14
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "[1] Pomposo Colossale Pomposo Regolare\nLevels: Colossale Pomposo Regolare",
      "[1] Pomposo Colossale Pomposo Regolare\nLevels: Colossale < Pomposo < Regolare",
      "[1] Pomposo Colossale Pomposo Regolare\nLevels: Pomposo Colossale Regolare",
      "[1] Pomposo Colossale Pomposo Regolare\nLevels: Pomposo < Colossale < Regolare"
    ],
    "correct": 0,
    "explanation": "Correct answer: the unordered factor prints levels in sorted level order, so the levels are Colossale Pomposo Regolare, without the '<' markers used for ordered factors.",
    "number": 64
  },
  {
    "id": "practice-quiz1-15",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "ggplot2 Themes\n\nWhich built-in ggplot2 theme produces a completely empty plot with no background panels, grid lines, or axes?",
    "promptHtml": "<h2>ggplot2 Themes</h2>\n<p>Which built-in ggplot2 theme produces a completely empty plot with no background panels, grid lines, or axes?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz1.html",
      "question": 15
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "theme_plain()",
      "theme_minimal()",
      "theme_void()",
      "theme_blank()"
    ],
    "correct": 2,
    "explanation": "Correct answer: theme_void(). ggplot2 lists theme_void() among complete themes and it is the built-in blank/empty plotting theme.",
    "number": 65
  },
  {
    "id": "practice-quiz2-1-1",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Mean Household Size from Census Counts\n\nYou begin by checking how your colleagues assembled the data behind their plot. From the census counts of resident households, they computed each planning area’s mean household size. The tibble hh shows the counts for two planning areas, with the household size given by the number in the column header:\n\nhh\n\n# A tibble: 2 × 9\n planning_area `1` `2` `3` `4` `5` `6` `7` `8`\n\n1 Ang Mo Kio 12603 15564 12172 10414 5116 2834 980 537\n2 Bukit Timah 2464 3889 4412 5121 4515 2179 1295 737\n\nComplete your colleagues’ pipeline so that mean_hh_size is each area’s mean household size, weighted by the number of households in each size band. The expected output is below. Match each blank to a tidyverse verb:\n\nhh |>\n ___BLANK_TOP___(\n -planning_area,\n names_to = \"size\",\n values_to = \"n_hh\",\n names_transform = as.numeric\n ) |>\n ___BLANK_MID___(persons = size * n_hh) |>\n ___BLANK_BOT___(\n mean_hh_size = sum(persons) / sum(n_hh),\n .by = planning_area\n )\n\n# A tibble: 2 × 2\n planning_area mean_hh_size\n\n1 Ang Mo Kio 2.92\n2 Bukit Timah 3.84\n\nNote: Not every verb is used, and the blanks may be listed in any order on your screen.",
    "promptHtml": "<h1>Mean Household Size from Census Counts</h1>\n<p>You begin by checking how your colleagues assembled the data behind their plot. From the census counts of resident households, they computed each planning area’s mean household size. The tibble <code>hh</code>&#160;shows the counts for two planning areas, with the household size given by the number in the column header:</p>\n<div>\n<div>\n<div>\n<pre><code><span>hh</span></code></pre>\n</div>\n</div>\n<div>\n<pre><code># A tibble: 2 &#215; 9\n  planning_area   `1`   `2`   `3`   `4`   `5`   `6`   `7`   `8`\n  &lt;chr&gt;         &lt;dbl&gt; &lt;dbl&gt; &lt;dbl&gt; &lt;dbl&gt; &lt;dbl&gt; &lt;dbl&gt; &lt;dbl&gt; &lt;dbl&gt;\n1 Ang Mo Kio    12603 15564 12172 10414  5116  2834   980   537\n2 Bukit Timah    2464  3889  4412  5121  4515  2179  1295   737</code></pre>\n</div>\n</div>\n<p>Complete your colleagues’ pipeline so that&#160;<code>mean_hh_size</code>&#160;is each area’s mean household size, weighted by the number of households in each size band. The expected output is below. Match each blank to a tidyverse verb:</p>\n<div>\n<div>\n<div>\n<pre><code><span>hh |&gt;</span>\n<span>  ___BLANK_TOP___(</span>\n<span>    -planning_area,</span>\n<span>    names_to = &quot;size&quot;,</span>\n<span>    values_to = &quot;n_hh&quot;,</span>\n<span>    names_transform = as.numeric</span>\n<span>  ) |&gt;</span>\n<span>  ___BLANK_MID___(persons = size * n_hh) |&gt;</span>\n<span>  ___BLANK_BOT___(</span>\n<span>    mean_hh_size = sum(persons) / sum(n_hh),</span>\n<span>    .by = planning_area</span>\n<span>  )</span></code></pre>\n</div>\n</div>\n</div>\n<div>\n<div>\n<pre><code># A tibble: 2 &#215; 2\n  planning_area mean_hh_size\n  &lt;chr&gt;                &lt;dbl&gt;\n1 Ang Mo Kio            2.92\n2 Bukit Timah           3.84</code></pre>\n</div>\n</div>\n<p><strong>Note:</strong>&#160;Not every verb is used, and the blanks may be listed in any order on your screen.</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-1.html",
      "question": 1
    },
    "needsReview": false,
    "type": "matching",
    "stems": [
      "___BLANK_TOP___(-planning_area, names_to = \"size\", ...)",
      "___BLANK_BOT___(mean_hh_size = ..., .by = planning_area)",
      "___BLANK_MID___(persons = size * n_hh)"
    ],
    "choices": [
      "count",
      "filter",
      "group_by",
      "mutate",
      "pivot_longer",
      "pivot_wider",
      "select",
      "summarize"
    ],
    "correct": [
      4,
      7,
      3
    ],
    "explanation": "The pipeline should pivot the household-size columns longer, mutate persons = size * n_hh, then summarize by planning_area.",
    "number": 66
  },
  {
    "id": "practice-quiz2-10-10",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "A Fixed Aspect Ratio for the Axes?\n\nA reviewer looks over the labeled plot and suggests adding coord_fixed() “to keep the axes honest”:\n\nIs the suggestion appropriate for this plot?",
    "promptHtml": "<h1>A Fixed Aspect Ratio for the Axes?</h1>\n<p>A reviewer looks over the labeled plot and suggests adding&#160;<code>coord_fixed()</code>&#160;“to keep the axes honest”:</p>\n<p><img src=\"artifacts/reviewed-plot.png\" alt=\" The labeled plot with axis ranges spelled out (36–48 years; 2.2–3.9 persons).\" title=\" The labeled plot with axis ranges spelled out (36–48 years; 2.2–3.9 persons).\" style=\"max-width: 100%;\"/></p>\n<p>Is the suggestion appropriate for this plot?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-10.html",
      "question": 10
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "Yes — it is needed because the plot includes a fitted trend line.",
      "Yes — with coord_fixed(), one unit on either axis occupies the same screen distance, which makes the comparison between the two variables fair.",
      "No — the axes measure different quantities (years and persons per household), so forcing equal screen distances to represent equal amounts is meaningless.",
      "No — coord_fixed() only affects plots built from geom_tile() or a map layer."
    ],
    "correct": 2,
    "explanation": "Correct answer: no. coord_fixed() makes one x-axis unit occupy the same screen distance as one y-axis unit, but these axes use different units: years and persons per household.",
    "number": 67
  },
  {
    "id": "practice-quiz2-11-11",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Preparing the Plot for Publication\n\nWith the labels in place, the plot now shows all the intended data:\n\nHowever, you still do not find it publication-ready. Name at least three features of this plot that should be improved before publication, and give for each feature a brief argument why the change helps the reader.",
    "promptHtml": "<h1>Preparing the Plot for Publication</h1>\n<p>With the labels in place, the plot now shows all the intended data:</p>\n<div>\n<div>\n<div>\n<figure><img src=\"artifacts/pre-polish-plot.png\" alt=\"Deliberately structural — &quot;the labeled bubble plot as produced with ggplot2&#39;s default display settings, before any polishing.&quot;\" title=\"Deliberately structural — &quot;the labeled bubble plot as produced with ggplot2&#39;s default display settings, before any polishing.&quot;\" style=\"max-width: 100%;\"/></figure>\n<p>However, you still do not find it publication-ready. Name at least three features of this plot that should be improved before publication, and give for each feature a brief argument why the change helps the reader.</p>\n</div>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-11.html",
      "question": 11
    },
    "needsReview": false,
    "type": "open",
    "idealAnswer": "The plot is not yet publication-ready because several parts still make the reader work too hard. First, the title, axis labels, and legend labels should be rewritten in plain language. For example, median_age, mean_hh_size, and pop should become Median age, Mean household size, and Population. This helps the reader understand the variables without needing to decode column names. Second, the point labels should be made more readable. Some labels are close to points or other labels, so using better label placement such as geom_text_repel() and adding extra plot margins would reduce overlap and prevent labels from being clipped. Third, the population legend should use readable values such as 10K, 50K, 100K, and 200K instead of scientific notation. This makes the size encoding easier to interpret. Fourth, the plot should include a clear title, subtitle, and data source. This gives context about what the chart shows, which year it refers to, and where the data came from. Fifth, the colour legend should remain categorical because region is a category, not a numeric scale. A clear categorical palette helps readers compare regions without implying a numeric order.",
    "keyPoints": [
      "Rewrites technical labels in plain language.",
      "Improves label placement and margins.",
      "Makes legends and source/title context publication-ready."
    ],
    "explanation": "The local image still uses column-style labels and scientific notation in the population legend. The model answer is strong because each proposed change reduces decoding work for the reader.",
    "number": 68
  },
  {
    "id": "practice-quiz2-12-12",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "What the Trend Line Shows — and What It Does Not\n\nYour colleagues implemented the suggested refinements — descriptive labels, a title, a source caption, readable legend labels, a lighter theme — added some polish of their own, and consider the plot ready for the report:\n\nIn three or four sentences, state what the fitted line and its confidence band suggest about the relationship between median age and mean household size across these planning areas, and give one reason to be cautious about reading that band as evidence of a causal, individual-level effect.",
    "promptHtml": "<h1>What the Trend Line Shows — and What It Does Not</h1>\n<p>Your colleagues implemented the suggested refinements — descriptive labels, a title, a source caption, readable legend labels, a lighter theme — added some polish of their own, and consider the plot ready for the report:</p>\n<p><img src=\"artifacts/final-plot.png\" alt=\"The polished plot described fully (title, axes, encodings, band, caption) but without the trend&#39;s direction.\" title=\"The polished plot described fully (title, axes, encodings, band, caption) but without the trend&#39;s direction.\" style=\"max-width: 100%;\"/></p>\n<p>In three or four sentences, state what the fitted line and its confidence band suggest about the relationship between median age and mean household size across these planning areas, and give one reason to be cautious about reading that band as evidence of a causal, individual-level effect.</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-12.html",
      "question": 12
    },
    "needsReview": false,
    "type": "open",
    "idealAnswer": "The fitted trend line shows a negative association: planning areas with a higher median age tend to have a lower mean household size. The grey confidence band shows uncertainty around the estimated average trend, and it becomes wider where there are fewer observations. This does not prove that older residents cause household sizes to become smaller. The plot is also based on planning-area averages, so it should not be used to make claims about individual households or individual residents.",
    "keyPoints": [
      "States the negative association.",
      "Explains the confidence band as uncertainty around the fitted trend.",
      "Avoids causal and individual-level overclaims."
    ],
    "explanation": "The local final plot shows a downward fitted line and a grey confidence band. The model answer is strong because it describes the trend while avoiding causal and ecological-fallacy overclaims.",
    "number": 69
  },
  {
    "id": "practice-quiz2-2-2",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Row Counts of Joined Tables\n\nYour colleagues computed the mean household size and the median age of each planning area from two separate census tables. The tibbles sizes and ages hold excerpts of the respective results:\n\nsizes\n\n# A tibble: 3 × 2\n planning_area mean_hh_size\n\n1 Ang Mo Kio 2.92\n2 Bedok 3.13\n3 Others 2.98\n\nages\n\n# A tibble: 4 × 2\n planning_area median_age\n\n1 Ang Mo Kio 46.6\n2 Bedok 45.0\n3 Changi 37.3\n4 Newton 42.9\n\nHow many rows do the following calls return?\n\ninner_join(sizes, ages, join_by(planning_area))\nleft_join(sizes, ages, join_by(planning_area))\nleft_join(ages, sizes, join_by(planning_area))\n\nNote: Not every count is used, and the calls may be listed in any order on your screen.",
    "promptHtml": "<h1>Row Counts of Joined Tables</h1>\n<p>Your colleagues computed the mean household size and the median age of each planning area from two separate census tables. The tibbles <code>sizes</code>&#160;and&#160;<code>ages</code>&#160;hold excerpts of the respective results:</p>\n<div>\n<div>\n<div>\n<pre><code><span>sizes</span></code></pre>\n</div>\n</div>\n<div>\n<pre><code># A tibble: 3 &#215; 2\n  planning_area mean_hh_size\n  &lt;chr&gt;                &lt;dbl&gt;\n1 Ang Mo Kio            2.92\n2 Bedok                 3.13\n3 Others                2.98</code></pre>\n</div>\n</div>\n<div>\n<div>\n<div>\n<pre><code><span>ages</span></code></pre>\n</div>\n</div>\n<div>\n<pre><code># A tibble: 4 &#215; 2\n  planning_area median_age\n  &lt;chr&gt;              &lt;dbl&gt;\n1 Ang Mo Kio          46.6\n2 Bedok               45.0\n3 Changi              37.3\n4 Newton              42.9</code></pre>\n</div>\n</div>\n<p>How many rows do the following calls return?</p>\n<div>\n<div>\n<pre><code><span>inner_join(sizes, ages, join_by(planning_area))</span>\n<span>left_join(sizes, ages, join_by(planning_area))</span>\n<span>left_join(ages, sizes, join_by(planning_area))</span></code></pre>\n</div>\n</div>\n<p><strong>Note:</strong>&#160;Not every count is used, and the calls may be listed in any order on your screen.</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-2.html",
      "question": 2
    },
    "needsReview": false,
    "type": "matching",
    "stems": [
      "inner_join(sizes, ages, join_by(planning_area))",
      "left_join(ages, sizes, join_by(planning_area))",
      "left_join(sizes, ages, join_by(planning_area))"
    ],
    "choices": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": [
      1,
      3,
      2
    ],
    "explanation": "Only Ang Mo Kio and Bedok appear in both tables, so the inner join has 2 rows. A left join keeps all rows from its left table: ages has 4 rows, while sizes has 3 rows.",
    "number": 70
  },
  {
    "id": "practice-quiz2-3-3",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Default Size Scale in the Draft Plot\n\nWith inner joins like the one you just examined, your colleagues combined the two census tables with each area’s resident population and with the regions and two-letter area codes of Singapore’s Master Plan 2019. The result is the tibble planning_areas, which holds each area’s name, median age, mean household size, resident population (pop), two-letter code, and region:\n\nplanning_areas\n\n# A tibble: 30 × 6\n name median_age mean_hh_size pop code region\n\n 1 Ang Mo Kio 46.6 2.92 162280 AM North-East\n 2 Bedok 45.0 3.13 276990 BD East\n 3 Bishan 44.5 3.27 87320 BS Central\n 4 Bukit Batok 40.5 3.14 158030 BK West\n 5 Bukit Merah 45.8 2.73 151250 BM Central\n 6 Bukit Panjang 40.0 3.41 138270 BP West\n 7 Bukit Timah 42.6 3.84 77860 BT Central\n 8 Choa Chu Kang 38.4 3.53 192070 CK West\n 9 Clementi 44.3 3.01 91990 CL West\n10 Downtown Core 42.4 2.20 3190 DT Central\n# ℹ 20 more rows\n\nYour colleagues drafted the following plot:\n\nggplot(\n planning_areas,\n aes(median_age, mean_hh_size, size = pop, color = region)\n) +\n geom_point(alpha = 0.6) +\n scale_size_continuous(breaks = c(10000, 20000, 50000, 100000, 200000))\n\nCritique the use of scale_size_continuous() in this plot. Structure your answer in three labeled parts:\n\nName the principle that scale_size_continuous() violates in this plot.\n\nDescribe the visual consequence of the violation when a reader compares two areas with different populations.\n\nName the ggplot2 function that should replace scale_size_continuous().",
    "promptHtml": "<h1><strong>Default Size Scale in the Draft Plot</strong></h1>\n<p>With inner joins like the one you just examined, your colleagues combined the two census tables with each area’s resident population and with the regions and two-letter area codes of Singapore’s Master Plan 2019. The result is the tibble <code>planning_areas</code>, which holds each area’s name, median age, mean household size, resident population (<code>pop</code>), two-letter code, and region:</p>\n<div>\n<div>\n<div>\n<pre><code><span>planning_areas</span></code></pre>\n</div>\n</div>\n<div>\n<pre><code># A tibble: 30 &#215; 6\n   name          median_age mean_hh_size    pop code  region    \n   &lt;chr&gt;              &lt;dbl&gt;        &lt;dbl&gt;  &lt;dbl&gt; &lt;chr&gt; &lt;chr&gt;     \n 1 Ang Mo Kio          46.6         2.92 162280 AM    North-East\n 2 Bedok               45.0         3.13 276990 BD    East      \n 3 Bishan              44.5         3.27  87320 BS    Central   \n 4 Bukit Batok         40.5         3.14 158030 BK    West      \n 5 Bukit Merah         45.8         2.73 151250 BM    Central   \n 6 Bukit Panjang       40.0         3.41 138270 BP    West      \n 7 Bukit Timah         42.6         3.84  77860 BT    Central   \n 8 Choa Chu Kang       38.4         3.53 192070 CK    West      \n 9 Clementi            44.3         3.01  91990 CL    West      \n10 Downtown Core       42.4         2.20   3190 DT    Central   \n# ℹ 20 more rows</code></pre>\n</div>\n</div>\n<p>Your colleagues drafted the following plot:</p>\n<div>\n<div>\n<div>\n<pre><code><span>ggplot(</span>\n<span>  planning_areas,</span>\n<span>  aes(median_age, mean_hh_size, size = pop, color = region)</span>\n<span>) +</span>\n<span>  geom_point(alpha = 0.6) +</span>\n<span>  scale_size_continuous(breaks = c(10000, 20000, 50000, 100000, 200000))</span></code></pre>\n</div>\n</div>\n<div>\n<div>\n<figure><img src=\"artifacts/draft-plot.png\" alt=\"Bubble plot of 30 Singapore planning areas — median age (years) versus mean household size (persons), bubbles sized by population, regions in ggplot2&#39;s default hues, legends listing \" title=\"Bubble plot of 30 Singapore planning areas — median age (years) versus mean household size (persons), bubbles sized by population, regions in ggplot2&#39;s default hues, legends listing \" style=\"max-width: 100%;\"/></figure>\n<p>Critique the use of&#160;<code>scale_size_continuous()</code>&#160;in this plot. Structure your answer in three labeled parts:</p>\n<ol type=\"a\">\n<li>Name the principle that&#160;<code>scale_size_continuous()</code>&#160;violates in this plot.</li>\n<li>Describe the visual consequence of the violation when a reader compares two areas with different populations.</li>\n<li>Name the ggplot2 function that should replace&#160;<code>scale_size_continuous()</code>.</li>\n</ol>\n</div>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-3.html",
      "question": 3
    },
    "needsReview": false,
    "type": "open",
    "idealAnswer": "The problem is the area principle. In a bubble plot, readers compare bubble area, but scale_size_continuous() scales radius/diameter in a way that makes area grow nonlinearly relative to population. This makes large-population areas look too visually dominant. Replace it with scale_size_area() so bubble area is proportional to population.",
    "keyPoints": [
      "Names the area principle.",
      "Explains the misleading bubble-area consequence.",
      "Names scale_size_area()."
    ],
    "explanation": "The prompt asks for exactly these three labeled parts.",
    "number": 71
  },
  {
    "id": "practice-quiz2-4-4",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Palette Family for the Region Colors\n\nFollowing your advice, your colleagues swapped scale_size_continuous() for scale_size_area() so that bubble area is now proportional to population. The five regions, however, still use ggplot2’s default hues:\n\nggplot(\n planning_areas,\n aes(median_age, mean_hh_size, size = pop, color = region)\n) +\n geom_point(alpha = 0.6) +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000))\n\nAs the next step, your colleagues want to choose a ColorBrewer palette for region. They consider three candidate palettes, each with five steps, which look as follows:\n\nWhich candidate is the right choice?",
    "promptHtml": "<h1>Palette Family for the Region Colors</h1>\n<p>Following your advice, your colleagues swapped&#160;<code>scale_size_continuous()</code>&#160;for&#160;<code>scale_size_area()</code>&#160;so that bubble area is now proportional to population. The five regions, however, still use ggplot2’s default hues:</p>\n<div>\n<div>\n<div>\n<pre><code><span>ggplot(</span>\n<span>  planning_areas,</span>\n<span>  aes(median_age, mean_hh_size, size = pop, color = region)</span>\n<span>) +</span>\n<span>  geom_point(alpha = 0.6) +</span>\n<span>  scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000))</span></code></pre>\n</div>\n</div>\n<div>\n<div>\n<figure><img src=\"artifacts/repaired-plot.png\" alt=\"Same plot with bubble areas now proportional to population; default hues remain.\" title=\"Same plot with bubble areas now proportional to population; default hues remain.\" style=\"max-width: 100%;\"/></figure>\n<p>As the next step, your colleagues want to choose a ColorBrewer palette for&#160;<code>region</code>. They consider three candidate palettes, each with five steps, which look as follows:</p>\n<div>\n<div>\n<div>\n<figure><img src=\"artifacts/brewer-preview.png\" alt=\"Three rows of five swatches — RdBu dark red through near-white to dark blue; Blues light to dark blue; Set1 five distinct hues (red, blue, green, purple, orange).\" title=\"Three rows of five swatches — RdBu dark red through near-white to dark blue; Blues light to dark blue; Set1 five distinct hues (red, blue, green, purple, orange).\" style=\"max-width: 100%;\"/></figure>\n<p>Which candidate is the right choice?</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-4.html",
      "question": 4
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "RdBu, a diverging palette comprising two hue ramps that meet at a neutral midpoint",
      "Blues, a sequential palette consisting of light-to-dark steps",
      "Any of the three families; which one to use is a purely aesthetic choice",
      "Set1, a qualitative palette of visually distinct hues"
    ],
    "correct": 3,
    "explanation": "Region is categorical, so the qualitative Set1 palette is the appropriate candidate among the listed ColorBrewer families.",
    "number": 72
  },
  {
    "id": "practice-quiz2-5-5",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "A Logarithmic Transform of the Bubble Sizes?\n\nYour colleagues adopted the Set1 palette:\n\nggplot(\n planning_areas,\n aes(median_age, mean_hh_size, size = pop, color = region)\n) +\n geom_point(alpha = 0.6) +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +\n scale_color_brewer(palette = \"Set1\")\n\nA reviewer notes that the most populous areas dominate the plot and suggests a logarithmic transform of the bubble sizes so that smaller areas become easier to see. Select every correct statement.",
    "promptHtml": "<h1>A Logarithmic Transform of the Bubble Sizes?</h1>\n<p>Your colleagues adopted the&#160;<code>Set1</code>&#160;palette:</p>\n<div>\n<div>\n<div>\n<pre><code><span>ggplot(</span>\n<span>  planning_areas,</span>\n<span>  aes(median_age, mean_hh_size, size = pop, color = region)</span>\n<span>) +</span>\n<span>  geom_point(alpha = 0.6) +</span>\n<span>  scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +</span>\n<span>  scale_color_brewer(palette = &quot;Set1&quot;)</span></code><br/><br/><br/><img src=\"artifacts/set1-plot.png\" alt=\"Regions now in Set1 colors, named per region; most populous areas are large bubbles, least populous small dots.\" title=\"Regions now in Set1 colors, named per region; most populous areas are large bubbles, least populous small dots.\" style=\"max-width: 100%;\"/></pre>\n<p>A reviewer notes that the most populous areas dominate the plot and suggests a logarithmic transform of the bubble sizes so that smaller areas become easier to see. Select every correct statement.</p>\n</div>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-5.html",
      "question": 5
    },
    "needsReview": false,
    "type": "multi",
    "options": [
      "Population is right-skewed, so a logarithmic transform of the bubble sizes is appropriate, just as it would be for a position axis.",
      "A logarithmic transform would make bubble area proportional to population.",
      "A logarithmic transform would break the proportionality between bubble area and population, so bubble sizes would mislead readers.",
      "After a logarithmic transform, the bubble sizes would still order the areas from least to most populous."
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Correct answers: a logarithmic transform would break the proportionality between bubble area and population, so bubble sizes would mislead readers; after a logarithmic transform, the bubble sizes would still order the areas from least to most populous. The ordering stays monotonic, but the visual area would no longer be proportional to population.",
    "number": 73
  },
  {
    "id": "practice-quiz2-6-6",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "One Trend Line Instead of Five\n\nPersuaded that a logarithmic transform would distort the bubble areas, your colleagues kept the proportional sizes. To support the claim that planning areas with older residents tend to have smaller households, they next added geom_smooth(method = \"lm\") to their plot:\n\nggplot(\n planning_areas,\n aes(median_age, mean_hh_size, size = pop, color = region)\n) +\n geom_point(alpha = 0.6) +\n geom_smooth(method = \"lm\") +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +\n scale_color_brewer(palette = \"Set1\")\n\nThe result is not what they intended: The plot shows one trend line per region, and the pop legend no longer shows sized points. Instead, they want a single trend line fitted to all 30 planning areas, with an intact legend:\n\nWhich of the following versions of the code produces the intended plot?",
    "promptHtml": "<h1>One Trend Line Instead of Five</h1>\n<p>Persuaded that a logarithmic transform would distort the bubble areas, your colleagues kept the proportional sizes. To support the claim that planning areas with older residents tend to have smaller households, they next added&#160;<code>geom_smooth(method = &quot;lm&quot;)</code>&#160;to their plot:</p>\n<div>\n<div>\n<div>\n<pre><code><span>ggplot(</span>\n<span>  planning_areas,</span>\n<span>  aes(median_age, mean_hh_size, size = pop, color = region)</span>\n<span>) +</span>\n<span>  geom_point(alpha = 0.6) +</span>\n<span>  geom_smooth(method = &quot;lm&quot;) +</span>\n<span>  scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +</span>\n<span>  scale_color_brewer(palette = &quot;Set1&quot;)<br/><br/></span></code></pre>\n<p><img src=\"artifacts/smooth-per-region.png\" alt=\"Five straight trend lines, one per region color, with heavily overlapping gray bands; population legend keys show line segments instead of sized circles.\" title=\"Five straight trend lines, one per region color, with heavily overlapping gray bands; population legend keys show line segments instead of sized circles.\" style=\"max-width: 100%;\"/></p>\n<p>The result is not what they intended: The plot shows one trend line per region, and the&#160;<code>pop</code>&#160;legend no longer shows sized points. Instead, they want a single trend line fitted to all 30 planning areas, with an intact legend:</p>\n<p><img src=\"artifacts/single-smooth.png\" alt=\" A single downward-sloping trend line with one gray band; legends intact.\" title=\" A single downward-sloping trend line with one gray band; legends intact.\" style=\"max-width: 100%;\"/></p>\n<p>Which of the following versions of the code produces the intended plot?</p>\n</div>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-6.html",
      "question": 6
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "ggplot(\n planning_areas,\n aes(median_age, mean_hh_size)\n) +\n geom_point(aes(size = pop, color = region), alpha = 0.6) +\n geom_smooth(method = \"lm\") +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +\n scale_color_brewer(palette = \"Set1\")",
      "ggplot(\n planning_areas,\n aes(median_age, mean_hh_size, size = pop, color = region)\n) +\n geom_point(alpha = 0.6) +\n geom_smooth(method = \"lm\") +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000))",
      "ggplot(\n aes(median_age, mean_hh_size, size = pop, color = region)\n) +\n geom_point(data = planning_areas, alpha = 0.6) +\n geom_smooth(method = \"lm\") +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +\n scale_color_brewer(palette = \"Set1\")",
      "ggplot(\n planning_areas,\n aes(median_age, mean_hh_size, size = pop)\n) +\n geom_point(aes(color = region), alpha = 0.6) +\n geom_smooth(method = \"lm\") +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +\n scale_color_brewer(palette = \"Set1\")"
    ],
    "correct": 0,
    "explanation": "Correct answer: put only x and y in the top-level ggplot() mapping, map size and colour inside geom_point(), then add geom_smooth(method = \"lm\"). This gives geom_smooth() one global x-y mapping instead of inheriting colour groups.",
    "number": 74
  },
  {
    "id": "practice-quiz2-7-7",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Equal Say for Unequal Areas?\n\nYour colleagues moved the aesthetic mappings into geom_point(), as you recommended:\n\ngg_planning_areas\n ggplot(planning_areas, aes(median_age, mean_hh_size)) +\n geom_point(aes(size = pop, color = region), alpha = 0.6) +\n geom_smooth(method = \"lm\") +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +\n scale_color_brewer(palette = \"Set1\")\ngg_planning_areas\n\nNext, you inspect the trend line. The bubbles emphasize how much the areas differ in population, yet the line currently gives every area equal influence on the fit: Downtown Core (population 3,190) counts as much as Bedok (population 276,990). Your colleagues want the more populous areas to pull the trend line more strongly, so that the line describes the relationship for the average resident rather than the average area. Which change achieves it?",
    "promptHtml": "<h1>Equal Say for Unequal Areas?</h1>\n<p>Your colleagues moved the aesthetic mappings into&#160;<code>geom_point()</code>, as you recommended:</p>\n<div>\n<div>\n<div>\n<pre><code><span>gg_planning_areas &lt;-</span>\n<span>  ggplot(planning_areas, aes(median_age, mean_hh_size)) +</span>\n<span>  geom_point(aes(size = pop, color = region), alpha = 0.6) +</span>\n<span>  geom_smooth(method = &quot;lm&quot;) +</span>\n<span>  scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +</span>\n<span>  scale_color_brewer(palette = &quot;Set1&quot;)</span>\n<span>gg_planning_areas</span></code><br/><br/><img src=\"artifacts/unweighted-fit.png\" alt=\"A single downward-sloping trend line with one gray band; legends intact.\" title=\"A single downward-sloping trend line with one gray band; legends intact.\" style=\"max-width: 100%;\"/><br/><br/></pre>\n<p>Next, you inspect the trend line. The bubbles emphasize how much the areas differ in population, yet the line currently gives every area equal influence on the fit: Downtown Core (population 3,190) counts as much as Bedok (population 276,990). Your colleagues want the more populous areas to pull the trend line more strongly, so that the line describes the relationship for the average resident rather than the average area. Which change achieves it?</p>\n</div>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-7.html",
      "question": 7
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "Map population to the smooth's size aesthetic: geom_smooth(aes(size = pop), method = \"lm\").",
      "Increase max_size in scale_size_area() so that populous areas appear larger.",
      "Fit the line to mean_hh_size * pop instead of mean_hh_size.",
      "Map population to the smooth's weight aesthetic: geom_smooth(aes(weight = pop), method = \"lm\")."
    ],
    "correct": 3,
    "explanation": "Correct answer: map population to the smooth layer's weight aesthetic. A weighted lm gives larger-population areas more influence on the fitted line without changing the plotted point sizes.",
    "number": 75
  },
  {
    "id": "practice-quiz2-8-8",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Opaque Keys in the Color Legend\n\nFollowing your advice, your colleagues weighted the fit by population:\n\ngg_weighted\n ggplot(planning_areas, aes(median_age, mean_hh_size)) +\n geom_point(aes(size = pop, color = region), alpha = 0.6) +\n geom_smooth(aes(weight = pop), method = \"lm\") +\n scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +\n scale_color_brewer(palette = \"Set1\")\ngg_weighted\n\nThe keys of the region legend inherit the points’ semi-transparency and look washed out. To display the keys at a larger size and with full opacity, your colleagues add the following layer:\n\ngg_weighted +\n guides(color = guide_legend(override.aes = list(size = 5, alpha = 1)))\n\nThe points in the panel remain semi-transparent, so the legend keys now deliberately differ from the points they describe. Explain why full opacity is nevertheless the right choice for the legend keys, while semi-transparency is the right choice for the symbols in the plot.",
    "promptHtml": "<h1>Opaque Keys in the Color Legend</h1>\n<p>Following your advice, your colleagues weighted the fit by population:</p>\n<div>\n<div>\n<div>\n<pre><code><span>gg_weighted &lt;-</span>\n<span>  ggplot(planning_areas, aes(median_age, mean_hh_size)) +</span>\n<span>  geom_point(aes(size = pop, color = region), alpha = 0.6) +</span>\n<span>  geom_smooth(aes(weight = pop), method = &quot;lm&quot;) +</span>\n<span>  scale_size_area(breaks = c(10000, 20000, 50000, 100000, 200000)) +</span>\n<span>  scale_color_brewer(palette = &quot;Set1&quot;)</span>\n<span>gg_weighted</span></code><br/><br/><img src=\"artifacts/weighted-fit.png\" alt=\" Trend line fitted with population weights; region legend keys washed out from inherited semi-transparency.\" title=\" Trend line fitted with population weights; region legend keys washed out from inherited semi-transparency.\" style=\"max-width: 100%;\"/><br/><br/></pre>\n<p>The keys of the&#160;<code>region</code>&#160;legend inherit the points’ semi-transparency and look washed out. To display the keys at a larger size and with full opacity, your colleagues add the following layer:</p>\n<div>\n<div>\n<div>\n<pre><code><span>gg_weighted +</span>\n<span>  guides(color = guide_legend(override.aes = list(size = 5, alpha = 1)))</span></code></pre>\n</div>\n</div>\n</div>\n<pre><br/><img src=\"artifacts/after-override.png\" alt=\"Same plot with larger, fully opaque region keys; panel points still semi-transparent.\" title=\"Same plot with larger, fully opaque region keys; panel points still semi-transparent.\" style=\"max-width: 100%;\"/></pre>\n<p>The points in the panel remain semi-transparent, so the legend keys now deliberately differ from the points they describe. Explain why full opacity is nevertheless the right choice for the legend keys, while semi-transparency is the right choice for the symbols in the plot.</p>\n</div>\n</div>\n</div>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-8.html",
      "question": 8
    },
    "needsReview": false,
    "type": "open",
    "idealAnswer": "The problem is that the colour legend inherits the transparency setting from the plotted points. Since alpha = 0.6 makes points semi-transparent in the plot, the region legend keys also become semi-transparent and harder to read. The fix is guides(color = guide_legend(override.aes = list(size = 5, alpha = 1))). This changes only how the legend keys are drawn. It makes the colour legend points larger and fully opaque, so readers can clearly see the region colours. It does not change the actual plotted data points. The plotted points can remain semi-transparent because transparency helps show overlap in the data. The legend, however, should be visually clear because its job is to explain the colour encoding.",
    "keyPoints": [
      "Explains that the legend inherits point alpha.",
      "Names guide_legend(override.aes = list(size = 5, alpha = 1)).",
      "Separates readable legend keys from semi-transparent plotted points."
    ],
    "explanation": "The local before/after images show the region legend changing from small semi-transparent keys to larger opaque keys while the plotted points remain semi-transparent.",
    "number": 76
  },
  {
    "id": "practice-quiz2-9-9",
    "week": "practice",
    "topic": "Practice quiz narrative",
    "prompt": "Placing Labels without Overlaps\n\nSo that readers can identify individual areas, your colleagues want to label each bubble with its two-letter planning-area code. Each label should sit close to its bubble, and the labels should stay clear of one another and of the bubbles’ center points, as in this version of the plot:\n\nWhich layer, added to the plot, produces such labels?",
    "promptHtml": "<h1>Placing Labels without Overlaps</h1>\n<p>So that readers can identify individual areas, your colleagues want to label each bubble with its two-letter planning-area code. Each label should sit close to its bubble, and the labels should stay clear of one another and of the bubbles’ center points, as in this version of the plot:</p>\n<p><img src=\"artifacts/labeled-plot.png\" alt=\"Each bubble labeled with a two-letter code, labels clear of one another and of bubble centers.\" title=\"Each bubble labeled with a two-letter code, labels clear of one another and of bubble centers.\" style=\"max-width: 100%;\"/></p>\n<p>Which layer, added to the plot, produces such labels?</p>",
    "source": {
      "kind": "practice-export",
      "path": "practice-quiz\\quiz2-9.html",
      "question": 9
    },
    "needsReview": false,
    "type": "single",
    "options": [
      "geom_text(aes(label = code), position = position_jitter(seed = 1))",
      "geom_label(aes(label = code))",
      "ggrepel::geom_text_repel(aes(label = code))",
      "geom_jitter(aes(label = code))"
    ],
    "correct": 2,
    "explanation": "Correct answer: ggrepel::geom_text_repel(aes(label = code)). ggrepel places labels by repelling them from each other and from data points, reducing overlaps.",
    "number": 77
  },
  {
    "id": "csv-lab-key-39-you-map-the-number-of-atms-per-100-000-adults-per-country-wi",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "You map the number of ATMs per 100,000 adults per country with aes(fill = atm_2021). Why must a choropleth's fill variable be intensive, and which scale suits this right-skewed, non-negative variable?\n\nR\nlibrary(ggplot2)\ngg_atm_2021 +\n scale_fill_fermenter(\n breaks = scales::breaks_log(n = 6),\n palette = \"Greens\",\n direction = 1,\n na.value = \"gray80\"\n )",
    "options": [
      "It must be intensive so that large countries always appear darker; use a diverging palette centered at zero.",
      "It need not be intensive; any count works. Use scale_fill_brewer().",
      "An intensive variable does not depend on a region's spatial extent, so color reflects the value rather than the region's size; a non-negative, right-skewed variable suits a sequential palette on a log scale, e.g. scale_fill_fermenter(palette = \"Greens\", breaks = scales::breaks_log()).",
      "Intensiveness is about colour-blindness; use scale_fill_viridis_c() with a linear scale."
    ],
    "correct": 2,
    "explanation": "Correct answer: An intensive variable does not depend on a region's spatial extent, so color reflects the value rather than the region's size; a non-negative, right-skewed variable suits a sequential palette on a log scale, e.g. scale_fill_fermenter(palette = \"Greens\", breaks = scales::breaks_log()).",
    "source": {
      "kind": "csv-answer-key",
      "path": "answer-keys\\iv_all_lab_answer_key.json",
      "row": 39,
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 39,
      "answerKeyAnswer": "An intensive variable does not depend on a region's spatial extent, so color reflects the value rather than the region's size; a non-negative, right-skewed variable suits a sequential palette on a log scale, e.g. scale_fill_fermenter(palette = \"Greens\", breaks = scales::breaks_log())."
    },
    "needsReview": false,
    "number": 78
  },
  {
    "id": "csv-lab-key-40-ou-want-to-draw-the-world-map-and-fill-each-country-accordin",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "ou want to draw the World map and fill each country according to its continent column. Which call does this?\n\nR\nlibrary(ggplot2)\nlibrary(tmap)\nggplot(World, aes(____)) + ____",
    "options": [
      "ggplot(World) + geom_point(), because countries are points.",
      "ggplot(World) + geom_tile(aes(fill = continent)).",
      "ggplot(World, aes(color = continent)) + geom_polygon(), because polygons are drawn with geom_polygon().",
      "ggplot(World, aes(fill = continent)) + geom_sf()."
    ],
    "correct": 3,
    "explanation": "Correct answer: ggplot(World, aes(fill = continent)) + geom_sf().",
    "source": {
      "kind": "csv-answer-key",
      "path": "answer-keys\\iv_all_lab_answer_key.json",
      "row": 40,
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 40,
      "answerKeyAnswer": "ggplot(World, aes(fill = continent)) + geom_sf()."
    },
    "needsReview": false,
    "number": 79
  },
  {
    "id": "csv-lab-key-41-a-geojson-of-singapore-subzones-fails-all-st-is-valid-subzon",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "A GeoJSON of Singapore subzones fails all(st_is_valid(subzones)), and mapview::npts() reports far more than 10,000 boundary points. Which two functions address these two problems, respectively?",
    "options": [
      "geom_sf() for both, since it cleans geometries as it draws.",
      "st_crs() to repair validity, and coord_sf() to reduce points.",
      "st_drop_geometry() to repair validity, and st_coordinates() to reduce points.",
      "st_make_valid() to repair validity, and rmapshaper::ms_simplify() to reduce points."
    ],
    "correct": 3,
    "explanation": "Correct answer: st_make_valid() to repair validity, and rmapshaper::ms_simplify() to reduce points.",
    "source": {
      "kind": "csv-answer-key",
      "path": "answer-keys\\iv_all_lab_answer_key.json",
      "row": 41,
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 41,
      "answerKeyAnswer": "st_make_valid() to repair validity, and rmapshaper::ms_simplify() to reduce points."
    },
    "needsReview": false,
    "number": 80
  },
  {
    "id": "csv-lab-key-42-you-call-class-world-on-the-world-dataset-and-also-class",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "You call class(World) on the World dataset and also class() on the result of st_drop_geometry(World). What characterises an sf object, and what does dropping the geometry do?",
    "options": [
      "An sf object belongs to both the sf and data.frame classes and is characterised by a special (Note: The text is cut off in the image UI, but this is the factually correct choice).",
      "An sf object cannot be used with tidyverse verbs such as select().",
      "An sf object is identical to a data.frame; st_drop_geometry() has no effect.",
      "An sf object is a plain matrix of coordinates; st_drop_geometry() converts it to a data frame."
    ],
    "correct": 0,
    "explanation": "Correct answer: An sf object belongs to both the sf and data.frame classes and is characterised by a special (geometry list-column, which converts it back to a standard data.frame when dropped).",
    "source": {
      "kind": "csv-answer-key",
      "path": "answer-keys\\iv_all_lab_answer_key.json",
      "row": 42,
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 42,
      "answerKeyAnswer": "An sf object belongs to both the sf and data.frame classes and is characterised by a special (geometry list-column, which converts it back to a standard data.frame when dropped)."
    },
    "needsReview": false,
    "number": 81
  },
  {
    "id": "csv-lab-key-43-calling-world-filter-name-malaysia-st-geometry-t",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "Calling World |> filter(name == \"Malaysia\") |> st_geometry_type() returns MULTIPOLYGON. Why is this the appropriate type, rather than POLYGON?",
    "options": [
      "Because MULTIPOLYGON is always used for any country, regardless of shape.",
      "Because a MULTIPOLYGON is one-dimensional and therefore lighter to store.",
      "Because Malaysia consists of several separate landmasses, and a MULTIPOLYGON is a set of polygons treated as a single unit.",
      "Because Malaysia is a single closed loop with no holes."
    ],
    "correct": 2,
    "explanation": "Correct answer: Because Malaysia consists of several separate landmasses, and a MULTIPOLYGON is a set of polygons treated as a single unit. (Specifically, Peninsular Malaysia and East Malaysia).",
    "source": {
      "kind": "csv-answer-key",
      "path": "answer-keys\\iv_all_lab_answer_key.json",
      "row": 43,
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 43,
      "answerKeyAnswer": "Because Malaysia consists of several separate landmasses, and a MULTIPOLYGON is a set of polygons treated as a single unit. (Specifically, Peninsular Malaysia and East Malaysia)."
    },
    "needsReview": false,
    "number": 82
  },
  {
    "id": "csv-lab-key-44-st-crs-world-reports-wgs-84-epsg-4326-an-equirectangular",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "st_crs(World) reports WGS 84 (EPSG:4326), an equirectangular projection in which Greenland looks almost as large as Australia. Why is this a problem for a map, and how do you fix it in ggplot2?\n\nR\nlibrary(ggplot2)\ngg_world + coord_sf(crs = \"____\")",
    "options": [
      "Equirectangular projection distorts area (so area on the page cannot be read as a value); apply an equal-area projection such as Equal Earth via coord_sf(crs = \"ESRI:54035\").",
      "The fix is scale_x_continuous(), because projection is a scale property.",
      "It is not a problem; area on an equirectangular map is already proportional to true surface area.",
      "The only fix is to remove Greenland from the data."
    ],
    "correct": 0,
    "explanation": "Correct answer: Equirectangular projection distorts area (so area on the page cannot be read as a value); apply an equal-area projection such as Equal Earth via coord_sf(crs = \"ESRI:54035\").",
    "source": {
      "kind": "csv-answer-key",
      "path": "answer-keys\\iv_all_lab_answer_key.json",
      "row": 44,
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 44,
      "answerKeyAnswer": "Equirectangular projection distorts area (so area on the page cannot be read as a value); apply an equal-area projection such as Equal Earth via coord_sf(crs = \"ESRI:54035\")."
    },
    "needsReview": false,
    "number": 83
  },
  {
    "id": "csv-lab-key-45-you-import-a-geojson-file-of-singapore-s-planning-areas-by",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "You import a GeoJSON file of Singapore's planning areas. By default read_sf() reads them as multipolygons, but calling it with type = 5 yields line strings. Why is the line-string version unsuitable for a planning-area map?\n\nR\nlibrary(sf)\nsgp_pa <- read_sf(\"singapore_by_planning_area_since_1999.geojson\")\nsgp_pa_5 <- read_sf(\"singapore_by_planning_area_since_1999.geojson\", type = 5)",
    "options": [
      "A line string is one-dimensional and has no area, so it cannot represent a two-dimensional planning area (it draws only the outlines, not filled regions).",
      "type = 5 always corrupts the coordinates.",
      "Line strings render more slowly than polygons.",
      "read_sf() cannot read GeoJSON files, only shapefiles."
    ],
    "correct": 0,
    "explanation": "Correct answer: A line string is one-dimensional and has no area, so it cannot represent a two-dimensional planning area (it draws only the outlines, not filled regions).",
    "source": {
      "kind": "csv-answer-key",
      "path": "answer-keys\\iv_all_lab_answer_key.json",
      "row": 45,
      "answerKeyPath": "answer-keys\\iv_all_lab_answer_key.json",
      "answerKeyRow": 45,
      "answerKeyAnswer": "A line string is one-dimensional and has no area, so it cannot represent a two-dimensional planning area (it draws only the outlines, not filled regions)."
    },
    "needsReview": false,
    "number": 84
  },
  {
    "id": "drill-week-01-1",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Which Quarto cell option hides source code while still running the code?",
    "options": [
      "echo: false",
      "eval: false",
      "message: false",
      "warning: false"
    ],
    "correct": 0,
    "explanation": "echo: false suppresses displayed source while evaluation still happens.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 85
  },
  {
    "id": "drill-week-01-1-why-not",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Original question: Which Quarto cell option hides source code while still running the code?\n\nCorrect answer: echo: false\n\nWhy is this other option not the best answer: eval: false?",
    "options": [
      "It describes a different concept; the tested idea is that echo: false suppresses displayed source while evaluation still happens.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: echo: false suppresses displayed source while evaluation still happens.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 86
  },
  {
    "id": "drill-week-01-2",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Which Quarto cell option stops code execution but can still show the source code?",
    "options": [
      "eval: false",
      "include: false",
      "echo: fenced",
      "toc: true"
    ],
    "correct": 0,
    "explanation": "eval: false prevents execution; it does not by itself hide the code.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 87
  },
  {
    "id": "drill-week-01-2-why-not",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Original question: Which Quarto cell option stops code execution but can still show the source code?\n\nCorrect answer: eval: false\n\nWhy is this other option not the best answer: include: false?",
    "options": [
      "It describes a different concept; the tested idea is that eval: false prevents execution; it does not by itself hide the code.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: eval: false prevents execution; it does not by itself hide the code.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 88
  },
  {
    "id": "drill-week-01-3",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Which Quarto option is most appropriate for a setup chunk that should run but show neither code nor output?",
    "options": [
      "include: false",
      "eval: false",
      "toc: true",
      "fig-cap"
    ],
    "correct": 0,
    "explanation": "include: false runs the code but excludes code and output from the rendered document.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 89
  },
  {
    "id": "drill-week-01-3-why-not",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Original question: Which Quarto option is most appropriate for a setup chunk that should run but show neither code nor output?\n\nCorrect answer: include: false\n\nWhy is this other option not the best answer: eval: false?",
    "options": [
      "It describes a different concept; the tested idea is that include: false runs the code but excludes code and output from the rendered document.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: include: false runs the code but excludes code and output from the rendered document.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 90
  },
  {
    "id": "drill-week-01-4",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Why should an image referenced with a relative path be submitted with the QMD file?",
    "options": [
      "The grader needs the file at that relative path",
      "Quarto embeds every local image into YAML",
      "R stores images in the working memory",
      "The image contains the figure label"
    ],
    "correct": 0,
    "explanation": "Relative paths only resolve if the referenced file is present in the submitted folder.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 91
  },
  {
    "id": "drill-week-01-4-why-not",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Original question: Why should an image referenced with a relative path be submitted with the QMD file?\n\nCorrect answer: The grader needs the file at that relative path\n\nWhy is this other option not the best answer: Quarto embeds every local image into YAML?",
    "options": [
      "It describes a different concept; the tested idea is that Relative paths only resolve if the referenced file is present in the submitted folder.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Relative paths only resolve if the referenced file is present in the submitted folder.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 92
  },
  {
    "id": "drill-week-01-5",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "What is the main risk of a bar chart with a non-zero baseline?",
    "options": [
      "Visible bar lengths stop being proportional to values",
      "The chart cannot use labels",
      "The x-axis becomes categorical",
      "The chart becomes a histogram"
    ],
    "correct": 0,
    "explanation": "Bar charts encode by length, so truncating the baseline distorts the visual ratio.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 93
  },
  {
    "id": "drill-week-01-5-why-not",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Original question: What is the main risk of a bar chart with a non-zero baseline?\n\nCorrect answer: Visible bar lengths stop being proportional to values\n\nWhy is this other option not the best answer: The chart cannot use labels?",
    "options": [
      "It describes a different concept; the tested idea is that Bar charts encode by length, so truncating the baseline distorts the visual ratio.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Bar charts encode by length, so truncating the baseline distorts the visual ratio.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 94
  },
  {
    "id": "drill-week-01-6",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Why can a point chart sometimes use a narrow y-axis more safely than a bar chart?",
    "options": [
      "Point area is not the value encoding",
      "Points always imply zero baselines",
      "Point charts cannot compare values",
      "Points remove all scale effects"
    ],
    "correct": 0,
    "explanation": "Points use position rather than bar length or area as the main encoding.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 95
  },
  {
    "id": "drill-week-01-6-why-not",
    "type": "single",
    "week": "week-01",
    "topic": "Quarto and visual communication",
    "prompt": "Original question: Why can a point chart sometimes use a narrow y-axis more safely than a bar chart?\n\nCorrect answer: Point area is not the value encoding\n\nWhy is this other option not the best answer: Points always imply zero baselines?",
    "options": [
      "It describes a different concept; the tested idea is that Points use position rather than bar length or area as the main encoding.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Points use position rather than bar length or area as the main encoding.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 96
  },
  {
    "id": "drill-week-02-7",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "In R, what does x[c(2, 4)] do?",
    "options": [
      "Returns the second and fourth elements",
      "Drops the second and fourth elements",
      "Returns elements greater than 2 and 4",
      "Renames elements 2 and 4"
    ],
    "correct": 0,
    "explanation": "Numeric indexing with positive integers selects those positions.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 97
  },
  {
    "id": "drill-week-02-7-why-not",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Original question: In R, what does x[c(2, 4)] do?\n\nCorrect answer: Returns the second and fourth elements\n\nWhy is this other option not the best answer: Drops the second and fourth elements?",
    "options": [
      "It describes a different concept; the tested idea is that Numeric indexing with positive integers selects those positions.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Numeric indexing with positive integers selects those positions.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 98
  },
  {
    "id": "drill-week-02-8",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Which rank receives 1 when using min_rank(desc(value))?",
    "options": [
      "The largest value",
      "The smallest value",
      "The first row",
      "The last non-missing row"
    ],
    "correct": 0,
    "explanation": "desc() reverses the ordering before ranking.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 99
  },
  {
    "id": "drill-week-02-8-why-not",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Original question: Which rank receives 1 when using min_rank(desc(value))?\n\nCorrect answer: The largest value\n\nWhy is this other option not the best answer: The smallest value?",
    "options": [
      "It describes a different concept; the tested idea is that desc() reverses the ordering before ranking.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: desc() reverses the ordering before ranking.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 100
  },
  {
    "id": "drill-week-02-9",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "What does factor() primarily create?",
    "options": [
      "A categorical vector with levels",
      "A numeric vector with decimals",
      "A list-column",
      "A plot scale"
    ],
    "correct": 0,
    "explanation": "Factors store categorical values using a fixed set of levels.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 101
  },
  {
    "id": "drill-week-02-9-why-not",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Original question: What does factor() primarily create?\n\nCorrect answer: A categorical vector with levels\n\nWhy is this other option not the best answer: A numeric vector with decimals?",
    "options": [
      "It describes a different concept; the tested idea is that Factors store categorical values using a fixed set of levels.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Factors store categorical values using a fixed set of levels.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 102
  },
  {
    "id": "drill-week-02-10",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Why use fct_recode() in a tutorial data-cleaning step?",
    "options": [
      "To rename factor levels",
      "To remove all missing values",
      "To convert dates to POSIXct",
      "To count grouped rows"
    ],
    "correct": 0,
    "explanation": "fct_recode() maps old factor labels to new labels.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 103
  },
  {
    "id": "drill-week-02-10-why-not",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Original question: Why use fct_recode() in a tutorial data-cleaning step?\n\nCorrect answer: To rename factor levels\n\nWhy is this other option not the best answer: To remove all missing values?",
    "options": [
      "It describes a different concept; the tested idea is that fct_recode() maps old factor labels to new labels.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: fct_recode() maps old factor labels to new labels.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 104
  },
  {
    "id": "drill-week-02-11",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "What does is.na(x) return?",
    "options": [
      "A logical vector marking missing values",
      "A count of missing values",
      "The non-missing values",
      "A sorted vector"
    ],
    "correct": 0,
    "explanation": "is.na() tests each element and returns TRUE where the value is missing.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 105
  },
  {
    "id": "drill-week-02-11-why-not",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Original question: What does is.na(x) return?\n\nCorrect answer: A logical vector marking missing values\n\nWhy is this other option not the best answer: A count of missing values?",
    "options": [
      "It describes a different concept; the tested idea is that is.na() tests each element and returns TRUE where the value is missing.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: is.na() tests each element and returns TRUE where the value is missing.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 106
  },
  {
    "id": "drill-week-02-12",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Which operator combines logical tests elementwise in R?",
    "options": [
      "&",
      "&&",
      "%>%",
      "$"
    ],
    "correct": 0,
    "explanation": "& is vectorised over elements; && only checks the first element of each side.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 107
  },
  {
    "id": "drill-week-02-12-why-not",
    "type": "single",
    "week": "week-02",
    "topic": "R vectors, factors, and subsetting",
    "prompt": "Original question: Which operator combines logical tests elementwise in R?\n\nCorrect answer: &\n\nWhy is this other option not the best answer: &&?",
    "options": [
      "It describes a different concept; the tested idea is that & is vectorised over elements; && only checks the first element of each side.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: & is vectorised over elements; && only checks the first element of each side.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 108
  },
  {
    "id": "drill-week-03-13",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "What does select(where(is.numeric)) do in dplyr?",
    "options": [
      "Keeps columns satisfying a predicate",
      "Keeps rows satisfying a predicate",
      "Counts numeric columns",
      "Pivots columns longer"
    ],
    "correct": 0,
    "explanation": "where() applies a predicate to columns inside select().",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 109
  },
  {
    "id": "drill-week-03-13-why-not",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Original question: What does select(where(is.numeric)) do in dplyr?\n\nCorrect answer: Keeps columns satisfying a predicate\n\nWhy is this other option not the best answer: Keeps rows satisfying a predicate?",
    "options": [
      "It describes a different concept; the tested idea is that where() applies a predicate to columns inside select().",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: where() applies a predicate to columns inside select().",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 110
  },
  {
    "id": "drill-week-03-14",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "What does mutate(across(...)) target?",
    "options": [
      "Multiple columns in one mutate step",
      "Multiple rows in arrange order",
      "Multiple files in a folder",
      "Multiple plots in a facet"
    ],
    "correct": 0,
    "explanation": "across() lets mutate or summarise apply a function over selected columns.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 111
  },
  {
    "id": "drill-week-03-14-why-not",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Original question: What does mutate(across(...)) target?\n\nCorrect answer: Multiple columns in one mutate step\n\nWhy is this other option not the best answer: Multiple rows in arrange order?",
    "options": [
      "It describes a different concept; the tested idea is that across() lets mutate or summarise apply a function over selected columns.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: across() lets mutate or summarise apply a function over selected columns.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 112
  },
  {
    "id": "drill-week-03-15",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Why use arrange(desc(x), y)?",
    "options": [
      "Sort by x descending, then y ascending for ties",
      "Filter x and y simultaneously",
      "Summarise by x then y",
      "Create a descending factor"
    ],
    "correct": 0,
    "explanation": "arrange() uses later columns as tie-breakers.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 113
  },
  {
    "id": "drill-week-03-15-why-not",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Original question: Why use arrange(desc(x), y)?\n\nCorrect answer: Sort by x descending, then y ascending for ties\n\nWhy is this other option not the best answer: Filter x and y simultaneously?",
    "options": [
      "It describes a different concept; the tested idea is that arrange() uses later columns as tie-breakers.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: arrange() uses later columns as tie-breakers.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 114
  },
  {
    "id": "drill-week-03-16",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "What does summarize(mean_x = mean(x), .by = group) return?",
    "options": [
      "One summary row per group",
      "One row per original observation",
      "A wider table with one column per group",
      "A plot layer"
    ],
    "correct": 0,
    "explanation": ".by groups for that summarise call.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 115
  },
  {
    "id": "drill-week-03-16-why-not",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Original question: What does summarize(mean_x = mean(x), .by = group) return?\n\nCorrect answer: One summary row per group\n\nWhy is this other option not the best answer: One row per original observation?",
    "options": [
      "It describes a different concept; the tested idea is that .by groups for that summarise call.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: .by groups for that summarise call.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 116
  },
  {
    "id": "drill-week-03-17",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Which tidyr verb usually turns many measure columns into key-value rows?",
    "options": [
      "pivot_longer()",
      "pivot_wider()",
      "left_join()",
      "arrange()"
    ],
    "correct": 0,
    "explanation": "pivot_longer() makes a data set longer by gathering columns into rows.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 117
  },
  {
    "id": "drill-week-03-17-why-not",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Original question: Which tidyr verb usually turns many measure columns into key-value rows?\n\nCorrect answer: pivot_longer()\n\nWhy is this other option not the best answer: pivot_wider()?",
    "options": [
      "It describes a different concept; the tested idea is that pivot_longer() makes a data set longer by gathering columns into rows.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: pivot_longer() makes a data set longer by gathering columns into rows.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 118
  },
  {
    "id": "drill-week-03-18",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "What does an inner_join keep?",
    "options": [
      "Rows with matching keys in both tables",
      "All rows from the left table",
      "All rows from both tables",
      "Only duplicated columns"
    ],
    "correct": 0,
    "explanation": "inner_join() drops unmatched rows from either input.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 119
  },
  {
    "id": "drill-week-03-18-why-not",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Original question: What does an inner_join keep?\n\nCorrect answer: Rows with matching keys in both tables\n\nWhy is this other option not the best answer: All rows from the left table?",
    "options": [
      "It describes a different concept; the tested idea is that inner_join() drops unmatched rows from either input.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: inner_join() drops unmatched rows from either input.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 120
  },
  {
    "id": "drill-week-03-19",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "What does left_join(x, y, by = key) preserve?",
    "options": [
      "All rows from x",
      "All rows from y only",
      "Only rows common to both",
      "Only key columns"
    ],
    "correct": 0,
    "explanation": "A left join keeps the left table's rows and adds matching right-side columns.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 121
  },
  {
    "id": "drill-week-03-19-why-not",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Original question: What does left_join(x, y, by = key) preserve?\n\nCorrect answer: All rows from x\n\nWhy is this other option not the best answer: All rows from y only?",
    "options": [
      "It describes a different concept; the tested idea is that A left join keeps the left table's rows and adds matching right-side columns.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: A left join keeps the left table's rows and adds matching right-side columns.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 122
  },
  {
    "id": "drill-week-03-20",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "What is map() commonly used for in tidyverse workflows?",
    "options": [
      "Applying a function to each element of a list/vector",
      "Changing axis limits",
      "Joining spatial layers",
      "Making a colour palette"
    ],
    "correct": 0,
    "explanation": "purrr::map() iterates a function over elements and returns a list by default.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 123
  },
  {
    "id": "drill-week-03-20-why-not",
    "type": "single",
    "week": "week-03",
    "topic": "Data wrangling with dplyr and tidyr",
    "prompt": "Original question: What is map() commonly used for in tidyverse workflows?\n\nCorrect answer: Applying a function to each element of a list/vector\n\nWhy is this other option not the best answer: Changing axis limits?",
    "options": [
      "It describes a different concept; the tested idea is that purrr::map() iterates a function over elements and returns a list by default.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: purrr::map() iterates a function over elements and returns a list by default.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 124
  },
  {
    "id": "drill-week-04-21",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "What object does ggplot(data, aes(...)) create before geoms are added?",
    "options": [
      "A plot object with data and mappings",
      "A rendered PNG file",
      "A grouped tibble",
      "A colour scale"
    ],
    "correct": 0,
    "explanation": "ggplot() initializes the plot; geoms add visible layers.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 125
  },
  {
    "id": "drill-week-04-21-why-not",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Original question: What object does ggplot(data, aes(...)) create before geoms are added?\n\nCorrect answer: A plot object with data and mappings\n\nWhy is this other option not the best answer: A rendered PNG file?",
    "options": [
      "It describes a different concept; the tested idea is that ggplot() initializes the plot; geoms add visible layers.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: ggplot() initializes the plot; geoms add visible layers.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 126
  },
  {
    "id": "drill-week-04-22",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "How does geom_line() differ from geom_path()?",
    "options": [
      "geom_line() orders by x; geom_path() follows row order",
      "geom_path() only draws points",
      "geom_line() ignores groups",
      "They are identical in every case"
    ],
    "correct": 0,
    "explanation": "geom_path() connects observations in data order; geom_line() orders by x within groups.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 127
  },
  {
    "id": "drill-week-04-22-why-not",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Original question: How does geom_line() differ from geom_path()?\n\nCorrect answer: geom_line() orders by x; geom_path() follows row order\n\nWhy is this other option not the best answer: geom_path() only draws points?",
    "options": [
      "It describes a different concept; the tested idea is that geom_path() connects observations in data order; geom_line() orders by x within groups.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: geom_path() connects observations in data order; geom_line() orders by x within groups.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 128
  },
  {
    "id": "drill-week-04-23",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Which geom can encode overlapping repeated points by count?",
    "options": [
      "geom_count()",
      "geom_histogram()",
      "geom_abline()",
      "geom_rug()"
    ],
    "correct": 0,
    "explanation": "geom_count() maps duplicate point counts to size.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 129
  },
  {
    "id": "drill-week-04-23-why-not",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Original question: Which geom can encode overlapping repeated points by count?\n\nCorrect answer: geom_count()\n\nWhy is this other option not the best answer: geom_histogram()?",
    "options": [
      "It describes a different concept; the tested idea is that geom_count() maps duplicate point counts to size.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: geom_count() maps duplicate point counts to size.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 130
  },
  {
    "id": "drill-week-04-24",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "What does geom_smooth() add by default to many scatterplots?",
    "options": [
      "A fitted trend line with uncertainty band",
      "A histogram of x values",
      "A new facet",
      "A colour legend only"
    ],
    "correct": 0,
    "explanation": "geom_smooth() estimates and displays a smoothed relationship.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 131
  },
  {
    "id": "drill-week-04-24-why-not",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Original question: What does geom_smooth() add by default to many scatterplots?\n\nCorrect answer: A fitted trend line with uncertainty band\n\nWhy is this other option not the best answer: A histogram of x values?",
    "options": [
      "It describes a different concept; the tested idea is that geom_smooth() estimates and displays a smoothed relationship.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: geom_smooth() estimates and displays a smoothed relationship.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 132
  },
  {
    "id": "drill-week-04-25",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "What does bins control in geom_histogram()?",
    "options": [
      "Number of bins across the x range",
      "Number of facet panels",
      "Number of colour levels",
      "Number of rows retained"
    ],
    "correct": 0,
    "explanation": "bins sets how many intervals the continuous variable is cut into.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 133
  },
  {
    "id": "drill-week-04-25-why-not",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Original question: What does bins control in geom_histogram()?\n\nCorrect answer: Number of bins across the x range\n\nWhy is this other option not the best answer: Number of facet panels?",
    "options": [
      "It describes a different concept; the tested idea is that bins sets how many intervals the continuous variable is cut into.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: bins sets how many intervals the continuous variable is cut into.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 134
  },
  {
    "id": "drill-week-04-26",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Why use after_stat(density) for a histogram combined with density?",
    "options": [
      "To put histogram bars on a density scale",
      "To convert x to a factor",
      "To hide the density curve",
      "To make all bars equal width"
    ],
    "correct": 0,
    "explanation": "A density curve uses area 1; after_stat(density) makes histogram heights comparable.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 135
  },
  {
    "id": "drill-week-04-26-why-not",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Original question: Why use after_stat(density) for a histogram combined with density?\n\nCorrect answer: To put histogram bars on a density scale\n\nWhy is this other option not the best answer: To convert x to a factor?",
    "options": [
      "It describes a different concept; the tested idea is that A density curve uses area 1; after_stat(density) makes histogram heights comparable.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: A density curve uses area 1; after_stat(density) makes histogram heights comparable.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 136
  },
  {
    "id": "drill-week-04-27",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "What does facet_wrap(~ group) do?",
    "options": [
      "Creates small multiples by group",
      "Combines all groups into one row",
      "Changes group labels into colours",
      "Sorts rows by group"
    ],
    "correct": 0,
    "explanation": "Faceting repeats the same plot structure for each group level.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 137
  },
  {
    "id": "drill-week-04-27-why-not",
    "type": "single",
    "week": "week-04",
    "topic": "ggplot layers and distributions",
    "prompt": "Original question: What does facet_wrap(~ group) do?\n\nCorrect answer: Creates small multiples by group\n\nWhy is this other option not the best answer: Combines all groups into one row?",
    "options": [
      "It describes a different concept; the tested idea is that Faceting repeats the same plot structure for each group level.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Faceting repeats the same plot structure for each group level.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 138
  },
  {
    "id": "drill-week-06-28",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "When should geom_col() be preferred over geom_bar()?",
    "options": [
      "When y values are already computed",
      "When y should count rows",
      "When plotting rasters",
      "When drawing contours"
    ],
    "correct": 0,
    "explanation": "geom_col() uses the supplied y values; geom_bar() counts by default.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 139
  },
  {
    "id": "drill-week-06-28-why-not",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Original question: When should geom_col() be preferred over geom_bar()?\n\nCorrect answer: When y values are already computed\n\nWhy is this other option not the best answer: When y should count rows?",
    "options": [
      "It describes a different concept; the tested idea is that geom_col() uses the supplied y values; geom_bar() counts by default.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: geom_col() uses the supplied y values; geom_bar() counts by default.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 140
  },
  {
    "id": "drill-week-06-29",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "What does geom_bar() do without a y aesthetic?",
    "options": [
      "Counts rows in each x category",
      "Uses y = 1 for every bar",
      "Drops non-numeric rows",
      "Plots raw y values"
    ],
    "correct": 0,
    "explanation": "The default stat for geom_bar() is count.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 141
  },
  {
    "id": "drill-week-06-29-why-not",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Original question: What does geom_bar() do without a y aesthetic?\n\nCorrect answer: Counts rows in each x category\n\nWhy is this other option not the best answer: Uses y = 1 for every bar?",
    "options": [
      "It describes a different concept; the tested idea is that The default stat for geom_bar() is count.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: The default stat for geom_bar() is count.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 142
  },
  {
    "id": "drill-week-06-30",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "When is geom_raster() usually faster than geom_tile()?",
    "options": [
      "For regular grids with equal tile sizes",
      "For unordered categories",
      "For line charts",
      "For missing coordinate systems"
    ],
    "correct": 0,
    "explanation": "geom_raster() is optimized for regular raster grids.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 143
  },
  {
    "id": "drill-week-06-30-why-not",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Original question: When is geom_raster() usually faster than geom_tile()?\n\nCorrect answer: For regular grids with equal tile sizes\n\nWhy is this other option not the best answer: For unordered categories?",
    "options": [
      "It describes a different concept; the tested idea is that geom_raster() is optimized for regular raster grids.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: geom_raster() is optimized for regular raster grids.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 144
  },
  {
    "id": "drill-week-06-31",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "In contour plots, what aesthetic supplies the third variable?",
    "options": [
      "z",
      "shape",
      "alpha",
      "linetype"
    ],
    "correct": 0,
    "explanation": "Contours trace levels of z over x-y space.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 145
  },
  {
    "id": "drill-week-06-31-why-not",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Original question: In contour plots, what aesthetic supplies the third variable?\n\nCorrect answer: z\n\nWhy is this other option not the best answer: shape?",
    "options": [
      "It describes a different concept; the tested idea is that Contours trace levels of z over x-y space.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Contours trace levels of z over x-y space.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 146
  },
  {
    "id": "drill-week-06-32",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Which aesthetic is generally best for unordered categories?",
    "options": [
      "Shape or qualitative colour",
      "Log scale",
      "Continuous size area",
      "Date breaks"
    ],
    "correct": 0,
    "explanation": "Categorical variables need discrete encodings.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 147
  },
  {
    "id": "drill-week-06-32-why-not",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Original question: Which aesthetic is generally best for unordered categories?\n\nCorrect answer: Shape or qualitative colour\n\nWhy is this other option not the best answer: Log scale?",
    "options": [
      "It describes a different concept; the tested idea is that Categorical variables need discrete encodings.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Categorical variables need discrete encodings.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 148
  },
  {
    "id": "drill-week-06-33",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Why should line width be handled carefully for extensive quantities?",
    "options": [
      "Visual area/length can imply magnitude",
      "Line width always means category",
      "Line width removes legends",
      "Line width changes row counts"
    ],
    "correct": 0,
    "explanation": "Size-like aesthetics carry magnitude impressions and can mislead when scaled poorly.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 149
  },
  {
    "id": "drill-week-06-33-why-not",
    "type": "single",
    "week": "week-06",
    "topic": "Aesthetics, bars, rasters, and contours",
    "prompt": "Original question: Why should line width be handled carefully for extensive quantities?\n\nCorrect answer: Visual area/length can imply magnitude\n\nWhy is this other option not the best answer: Line width always means category?",
    "options": [
      "It describes a different concept; the tested idea is that Size-like aesthetics carry magnitude impressions and can mislead when scaled poorly.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Size-like aesthetics carry magnitude impressions and can mislead when scaled poorly.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 150
  },
  {
    "id": "drill-week-08-34",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "What is the difference between limits and breaks on a scale?",
    "options": [
      "Limits set data range shown; breaks set tick positions",
      "Breaks filter rows; limits rename labels",
      "Limits set colours; breaks set shapes",
      "They are synonyms"
    ],
    "correct": 0,
    "explanation": "Scale limits define the displayed domain while breaks define guide marks.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 151
  },
  {
    "id": "drill-week-08-34-why-not",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Original question: What is the difference between limits and breaks on a scale?\n\nCorrect answer: Limits set data range shown; breaks set tick positions\n\nWhy is this other option not the best answer: Breaks filter rows; limits rename labels?",
    "options": [
      "It describes a different concept; the tested idea is that Scale limits define the displayed domain while breaks define guide marks.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Scale limits define the displayed domain while breaks define guide marks.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 152
  },
  {
    "id": "drill-week-08-35",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Which scale preserves proportional area for bubble sizes?",
    "options": [
      "scale_size_area()",
      "scale_size_continuous()",
      "scale_x_log10()",
      "scale_colour_brewer()"
    ],
    "correct": 0,
    "explanation": "scale_size_area() maps zero to zero and scales point area appropriately.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 153
  },
  {
    "id": "drill-week-08-35-why-not",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Original question: Which scale preserves proportional area for bubble sizes?\n\nCorrect answer: scale_size_area()\n\nWhy is this other option not the best answer: scale_size_continuous()?",
    "options": [
      "It describes a different concept; the tested idea is that scale_size_area() maps zero to zero and scales point area appropriately.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: scale_size_area() maps zero to zero and scales point area appropriately.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 154
  },
  {
    "id": "drill-week-08-36",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Which guide call reverses a linewidth legend?",
    "options": [
      "guides(linewidth = guide_legend(reverse = TRUE))",
      "scale_linewidth(reverse = TRUE)",
      "theme(legend.reverse = TRUE)",
      "coord_flip(reverse = TRUE)"
    ],
    "correct": 0,
    "explanation": "guide_legend(reverse = TRUE) controls legend key ordering.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 155
  },
  {
    "id": "drill-week-08-36-why-not",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Original question: Which guide call reverses a linewidth legend?\n\nCorrect answer: guides(linewidth = guide_legend(reverse = TRUE))\n\nWhy is this other option not the best answer: scale_linewidth(reverse = TRUE)?",
    "options": [
      "It describes a different concept; the tested idea is that guide_legend(reverse = TRUE) controls legend key ordering.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: guide_legend(reverse = TRUE) controls legend key ordering.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 156
  },
  {
    "id": "drill-week-08-37",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Why override legend aesthetics?",
    "options": [
      "To make legend keys readable without changing the plotted data",
      "To change raw data values",
      "To remove all scales",
      "To change grouping variables"
    ],
    "correct": 0,
    "explanation": "override.aes affects legend display, not the data layer.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 157
  },
  {
    "id": "drill-week-08-37-why-not",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Original question: Why override legend aesthetics?\n\nCorrect answer: To make legend keys readable without changing the plotted data\n\nWhy is this other option not the best answer: To change raw data values?",
    "options": [
      "It describes a different concept; the tested idea is that override.aes affects legend display, not the data layer.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: override.aes affects legend display, not the data layer.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 158
  },
  {
    "id": "drill-week-08-38",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Which ColorBrewer family is appropriate for nominal categories?",
    "options": [
      "Qualitative",
      "Sequential",
      "Diverging",
      "Binned continuous only"
    ],
    "correct": 0,
    "explanation": "Nominal categories need distinct hues rather than ordered ramps.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 159
  },
  {
    "id": "drill-week-08-38-why-not",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Original question: Which ColorBrewer family is appropriate for nominal categories?\n\nCorrect answer: Qualitative\n\nWhy is this other option not the best answer: Sequential?",
    "options": [
      "It describes a different concept; the tested idea is that Nominal categories need distinct hues rather than ordered ramps.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Nominal categories need distinct hues rather than ordered ramps.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 160
  },
  {
    "id": "drill-week-08-39",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Which palette family is suited to ordered low-to-high values?",
    "options": [
      "Sequential",
      "Qualitative",
      "Random",
      "Paired-only"
    ],
    "correct": 0,
    "explanation": "Sequential palettes communicate magnitude progression.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 161
  },
  {
    "id": "drill-week-08-39-why-not",
    "type": "single",
    "week": "week-08",
    "topic": "Scales and guides",
    "prompt": "Original question: Which palette family is suited to ordered low-to-high values?\n\nCorrect answer: Sequential\n\nWhy is this other option not the best answer: Qualitative?",
    "options": [
      "It describes a different concept; the tested idea is that Sequential palettes communicate magnitude progression.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Sequential palettes communicate magnitude progression.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 162
  },
  {
    "id": "drill-week-09-40",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "What does coord_flip() mainly do?",
    "options": [
      "Swaps x and y display axes",
      "Changes the data values",
      "Creates facets",
      "Removes legends"
    ],
    "correct": 0,
    "explanation": "Coordinate systems affect how layers are drawn after data/stat transformations.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 163
  },
  {
    "id": "drill-week-09-40-why-not",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "Original question: What does coord_flip() mainly do?\n\nCorrect answer: Swaps x and y display axes\n\nWhy is this other option not the best answer: Changes the data values?",
    "options": [
      "It describes a different concept; the tested idea is that Coordinate systems affect how layers are drawn after data/stat transformations.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Coordinate systems affect how layers are drawn after data/stat transformations.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 164
  },
  {
    "id": "drill-week-09-41",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "What does coord_cartesian(xlim = ...) do compared with scale_x_continuous(limits = ...)?",
    "options": [
      "Zooms display without dropping data before stats",
      "Drops data before every statistic",
      "Creates a new x variable",
      "Changes x to a factor"
    ],
    "correct": 0,
    "explanation": "coord_cartesian() is a visual zoom; scale limits can remove data before stats are computed.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 165
  },
  {
    "id": "drill-week-09-41-why-not",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "Original question: What does coord_cartesian(xlim = ...) do compared with scale_x_continuous(limits = ...)?\n\nCorrect answer: Zooms display without dropping data before stats\n\nWhy is this other option not the best answer: Drops data before every statistic?",
    "options": [
      "It describes a different concept; the tested idea is that coord_cartesian() is a visual zoom; scale limits can remove data before stats are computed.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: coord_cartesian() is a visual zoom; scale limits can remove data before stats are computed.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 166
  },
  {
    "id": "drill-week-09-42",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "What is facet_grid(rows ~ cols) useful for?",
    "options": [
      "Crossing two faceting variables into a grid",
      "Changing point shapes",
      "Joining tables",
      "Setting map projection"
    ],
    "correct": 0,
    "explanation": "facet_grid() lays out panels by row and column variables.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 167
  },
  {
    "id": "drill-week-09-42-why-not",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "Original question: What is facet_grid(rows ~ cols) useful for?\n\nCorrect answer: Crossing two faceting variables into a grid\n\nWhy is this other option not the best answer: Changing point shapes?",
    "options": [
      "It describes a different concept; the tested idea is that facet_grid() lays out panels by row and column variables.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: facet_grid() lays out panels by row and column variables.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 168
  },
  {
    "id": "drill-week-09-43",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "What does theme_minimal() change?",
    "options": [
      "Non-data styling elements",
      "The underlying data",
      "The coordinate projection",
      "The join key"
    ],
    "correct": 0,
    "explanation": "Themes control appearance such as backgrounds, grids, and text.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 169
  },
  {
    "id": "drill-week-09-43-why-not",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "Original question: What does theme_minimal() change?\n\nCorrect answer: Non-data styling elements\n\nWhy is this other option not the best answer: The underlying data?",
    "options": [
      "It describes a different concept; the tested idea is that Themes control appearance such as backgrounds, grids, and text.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Themes control appearance such as backgrounds, grids, and text.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 170
  },
  {
    "id": "drill-week-09-44",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "Where should axis title and legend position usually be adjusted?",
    "options": [
      "theme()",
      "mutate()",
      "left_join()",
      "geom_point()"
    ],
    "correct": 0,
    "explanation": "theme() controls non-data components including text and legend placement.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 171
  },
  {
    "id": "drill-week-09-44-why-not",
    "type": "single",
    "week": "week-09",
    "topic": "Coordinates, facets, and themes",
    "prompt": "Original question: Where should axis title and legend position usually be adjusted?\n\nCorrect answer: theme()\n\nWhy is this other option not the best answer: mutate()?",
    "options": [
      "It describes a different concept; the tested idea is that theme() controls non-data components including text and legend placement.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: theme() controls non-data components including text and legend placement.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 172
  },
  {
    "id": "drill-week-10-45",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "What kind of object is commonly used for vector geospatial data in R?",
    "options": [
      "sf object",
      "factor object",
      "lm object",
      "quarto object"
    ],
    "correct": 0,
    "explanation": "The sf package stores simple-feature geometries with attribute columns.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 173
  },
  {
    "id": "drill-week-10-45-why-not",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "Original question: What kind of object is commonly used for vector geospatial data in R?\n\nCorrect answer: sf object\n\nWhy is this other option not the best answer: factor object?",
    "options": [
      "It describes a different concept; the tested idea is that The sf package stores simple-feature geometries with attribute columns.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: The sf package stores simple-feature geometries with attribute columns.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 174
  },
  {
    "id": "drill-week-10-46",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "Which geom is commonly used to draw sf geometries in ggplot2?",
    "options": [
      "geom_sf()",
      "geom_bar()",
      "geom_raster()",
      "geom_smooth()"
    ],
    "correct": 0,
    "explanation": "geom_sf() understands simple-feature geometry columns.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 175
  },
  {
    "id": "drill-week-10-46-why-not",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "Original question: Which geom is commonly used to draw sf geometries in ggplot2?\n\nCorrect answer: geom_sf()\n\nWhy is this other option not the best answer: geom_bar()?",
    "options": [
      "It describes a different concept; the tested idea is that geom_sf() understands simple-feature geometry columns.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: geom_sf() understands simple-feature geometry columns.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 176
  },
  {
    "id": "drill-week-10-47",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "Why does coordinate reference system matter for maps?",
    "options": [
      "It controls how geographic coordinates are projected to the plane",
      "It decides which rows are missing",
      "It chooses the colour palette",
      "It converts factors to dates"
    ],
    "correct": 0,
    "explanation": "CRS/projection affects shapes, distances, and areas on a flat display.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 177
  },
  {
    "id": "drill-week-10-47-why-not",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "Original question: Why does coordinate reference system matter for maps?\n\nCorrect answer: It controls how geographic coordinates are projected to the plane\n\nWhy is this other option not the best answer: It decides which rows are missing?",
    "options": [
      "It describes a different concept; the tested idea is that CRS/projection affects shapes, distances, and areas on a flat display.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: CRS/projection affects shapes, distances, and areas on a flat display.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 178
  },
  {
    "id": "drill-week-10-48",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "What does st_join() usually combine?",
    "options": [
      "Attributes based on spatial relationships",
      "Rows based only on string equality",
      "Legends based on palette names",
      "Code chunks based on labels"
    ],
    "correct": 0,
    "explanation": "Spatial joins use geometry relationships such as intersects or within.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 179
  },
  {
    "id": "drill-week-10-48-why-not",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "Original question: What does st_join() usually combine?\n\nCorrect answer: Attributes based on spatial relationships\n\nWhy is this other option not the best answer: Rows based only on string equality?",
    "options": [
      "It describes a different concept; the tested idea is that Spatial joins use geometry relationships such as intersects or within.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Spatial joins use geometry relationships such as intersects or within.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 180
  },
  {
    "id": "drill-week-10-49",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "What is a choropleth map usually encoding?",
    "options": [
      "A value by fill colour across areas",
      "A time series by line width",
      "A table join by point shape",
      "A histogram by bins"
    ],
    "correct": 0,
    "explanation": "Choropleths colour polygons by a variable.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 181
  },
  {
    "id": "drill-week-10-49-why-not",
    "type": "single",
    "week": "week-10",
    "topic": "Geospatial vectors",
    "prompt": "Original question: What is a choropleth map usually encoding?\n\nCorrect answer: A value by fill colour across areas\n\nWhy is this other option not the best answer: A time series by line width?",
    "options": [
      "It describes a different concept; the tested idea is that Choropleths colour polygons by a variable.",
      "It is correct and should replace the marked answer.",
      "It is only wrong because of spelling or formatting.",
      "There is not enough context to evaluate the option."
    ],
    "correct": 0,
    "explanation": "The original question is testing this idea: Choropleths colour polygons by a variable.",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 182
  },
  {
    "type": "multi",
    "week": "week-01",
    "prompt": "Select every Quarto cell option that controls whether code, output, or execution appears in the rendered document.",
    "options": [
      "echo",
      "eval",
      "include",
      "toc"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "`echo`, `eval`, and `include` are cell-level execution/display controls. `toc` is a document option for the table of contents.",
    "id": "supplemental-wk01-multi-quarto-output",
    "topic": "Quarto and visual communication",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 183
  },
  {
    "type": "order",
    "week": "week-01",
    "prompt": "Put the usual Quarto workflow in order.",
    "items": [
      "Write or edit the `.qmd` source.",
      "Render the document.",
      "Inspect the generated output.",
      "Fix source or path issues and render again."
    ],
    "explanation": "A Quarto document is authored as source, rendered, inspected, and then iterated when code, paths, or layout need repair.",
    "id": "supplemental-wk01-order-render-workflow",
    "topic": "Quarto and visual communication",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 184
  },
  {
    "type": "single",
    "week": "week-01",
    "prompt": "A setup chunk must run, but neither its source code nor its output should appear in the rendered HTML. Which option is the best fit?",
    "options": [
      "include: false",
      "eval: false",
      "echo: true",
      "warning: true"
    ],
    "correct": 0,
    "explanation": "`include: false` still evaluates the chunk but excludes both source and output from the rendered document.",
    "id": "supplemental-wk01-inverse-include-eval",
    "topic": "Quarto and visual communication",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 185
  },
  {
    "type": "single",
    "week": "week-01",
    "prompt": "A Quarto chunk must still run, but its source code should be hidden in the rendered document. What is wrong with choosing `eval: false` for this task?",
    "options": [
      "It stops the code from executing.",
      "It forces all output to display.",
      "It only works for Python chunks.",
      "It changes the document title."
    ],
    "correct": 0,
    "explanation": "`eval: false` prevents execution. Hiding source while still running the chunk is controlled by `echo: false`.",
    "id": "supplemental-wk01-trick-echo-eval",
    "topic": "Quarto and visual communication",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 186
  },
  {
    "type": "multi",
    "week": "week-01",
    "prompt": "A bar chart uses bar length to encode values. Select every statement that keeps the comparison honest.",
    "options": [
      "Use a zero baseline for bars when comparing magnitudes.",
      "Avoid 3D effects that distort bar length.",
      "Use a truncated axis to make small differences look larger.",
      "Prefer direct labels when a legend makes comparison harder."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "Bars rely on visible length, so a zero baseline and non-distorted 2D marks support honest comparison. Direct labels can reduce lookup cost.",
    "id": "supplemental-wk01-multi-honest-bars",
    "topic": "Quarto and visual communication",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 187
  },
  {
    "type": "single",
    "week": "week-01",
    "prompt": "A point chart compares values by vertical position. Why can a narrowed y-axis sometimes be less misleading here than in a bar chart?",
    "options": [
      "The point's filled area is not the value being compared.",
      "The point chart has no scale.",
      "The x-axis always starts at zero.",
      "The points automatically show percentages."
    ],
    "correct": 0,
    "explanation": "A point chart primarily uses position, not bar length or filled area, so the zero-baseline rule is less direct than it is for bars.",
    "id": "supplemental-wk01-single-point-axis",
    "topic": "Quarto and visual communication",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 188
  },
  {
    "type": "order",
    "week": "week-01",
    "prompt": "Put the critique workflow for a misleading chart in order.",
    "items": [
      "Identify what visual property encodes the data.",
      "Check whether that property stays proportional to the values.",
      "Explain how the current design distorts interpretation.",
      "Recommend a redesign that preserves the intended comparison."
    ],
    "explanation": "Good critique starts from the encoding, tests whether it is truthful, states the consequence, and then proposes a repair.",
    "id": "supplemental-wk01-order-chart-repair",
    "topic": "Quarto and visual communication",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 189
  },
  {
    "type": "single",
    "week": "week-01",
    "prompt": "A QMD includes `![Plot](figures/chart.png)`. What must be true when submitting or moving the project?",
    "options": [
      "The `figures/chart.png` file must still exist at that relative path.",
      "Quarto will rewrite the path to any folder automatically.",
      "The image path is ignored after the first render.",
      "Only the HTML file is needed to rerender the QMD."
    ],
    "correct": 0,
    "explanation": "Relative paths are resolved from the rendering context, so the referenced file must travel with the source at the expected location.",
    "id": "supplemental-wk01-single-relative-path",
    "topic": "Quarto and visual communication",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk1_why_data_vis.html",
        "lab/week_01_quarto_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 190
  },
  {
    "type": "multi",
    "week": "week-02",
    "prompt": "Select every expression that can be used to subset a vector `x` with a logical condition.",
    "options": [
      "x[x > 10]",
      "x[!is.na(x)]",
      "x[x %in% c(1, 2)]",
      "x[mean(x)]"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The first three produce logical vectors. `mean(x)` is a numeric value, not an elementwise logical condition.",
    "id": "supplemental-wk02-multi-logical-index",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 191
  },
  {
    "type": "order",
    "week": "week-02",
    "prompt": "Put this factor-cleaning workflow in order.",
    "items": [
      "Inspect the raw category values.",
      "Convert the variable to a factor if categorical behavior is needed.",
      "Recode unclear or wrong level labels.",
      "Use the cleaned factor in summaries or plots."
    ],
    "explanation": "You need to inspect values before choosing factor behavior, then recode levels before using them downstream.",
    "id": "supplemental-wk02-order-factor-clean",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 192
  },
  {
    "type": "single",
    "week": "week-02",
    "prompt": "What does `x[-c(2, 4)]` do in R?",
    "options": [
      "Drops the second and fourth elements.",
      "Returns only the second and fourth elements.",
      "Returns elements whose values are negative.",
      "Sorts positions 2 and 4 to the end."
    ],
    "correct": 0,
    "explanation": "Negative integer indexing excludes positions from a vector.",
    "id": "supplemental-wk02-single-negative-index",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 193
  },
  {
    "type": "single",
    "week": "week-02",
    "prompt": "Given a tibble `starwars`, what does `starwars$height` return?",
    "options": [
      "The `height` column as a vector.",
      "A tibble containing every column except height.",
      "The number of rows with height values.",
      "The help page for the height variable."
    ],
    "correct": 0,
    "explanation": "The `$` operator extracts a named column from a data frame or tibble.",
    "id": "supplemental-wk02-single-dollar",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 194
  },
  {
    "type": "multi",
    "week": "week-02",
    "prompt": "Select every true statement about ordered factors.",
    "options": [
      "They store categories with a declared order.",
      "Comparisons can use the level order.",
      "They are the same as character vectors.",
      "They print with level-order information."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "Ordered factors are categorical values with a meaningful level order; they are not plain character vectors.",
    "id": "supplemental-wk02-multi-factor-ordered",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 195
  },
  {
    "type": "single",
    "week": "week-02",
    "prompt": "In `if_else(condition, yes, no)`, what happens when `condition` is `NA` and no `missing` value is supplied?",
    "options": [
      "The result is `NA` for that element.",
      "The `yes` value is always used.",
      "The `no` value is always used.",
      "The whole vector is dropped."
    ],
    "correct": 0,
    "explanation": "`if_else()` propagates missing conditions unless you explicitly provide a `missing` value.",
    "id": "supplemental-wk02-single-ifelse-na",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 196
  },
  {
    "type": "order",
    "week": "week-02",
    "prompt": "Put the `case_match()` reasoning steps in order.",
    "items": [
      "Compare each input value against listed cases.",
      "Return the replacement for a matched case.",
      "Use `.default` for values that do not match listed cases.",
      "Keep the output as a vector aligned to the input length."
    ],
    "explanation": "`case_match()` maps values case by case, falls back to `.default`, and returns an aligned vector.",
    "id": "supplemental-wk02-order-case-match",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 197
  },
  {
    "type": "single",
    "week": "week-02",
    "prompt": "Why wrap a variable in `desc()` before ranking when rank 1 should mean largest value?",
    "options": [
      "It reverses the ordering before the rank is computed.",
      "It removes all tied values.",
      "It converts the vector to a factor.",
      "It sorts the data frame permanently."
    ],
    "correct": 0,
    "explanation": "`desc()` reverses the ordering so the largest value receives the smallest rank number.",
    "id": "supplemental-wk02-single-rank-desc",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 198
  },
  {
    "type": "multi",
    "week": "week-02",
    "prompt": "Select every expression that directly helps identify missing values in R.",
    "options": [
      "is.na(x)",
      "!is.na(x)",
      "sum(is.na(x))",
      "x == NA"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "`is.na()` tests missingness, `!is.na()` tests non-missingness, and summing the logical result counts missing values. Equality with `NA` does not test missingness correctly.",
    "id": "supplemental-wk02-multi-missing-tests",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 199
  },
  {
    "type": "single",
    "week": "week-02",
    "prompt": "What is the main purpose of `fct_recode()`?",
    "options": [
      "Rename existing factor levels.",
      "Count rows by factor level.",
      "Turn every factor into a date.",
      "Remove unused columns."
    ],
    "correct": 0,
    "explanation": "`fct_recode()` changes factor level labels while keeping the variable categorical.",
    "id": "supplemental-wk02-single-factor-recode",
    "topic": "R vectors, factors, and subsetting",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk2_bilbos_ledgers.html",
        "lab/Week_02_Lab_R_logical_subsetting.html"
      ]
    },
    "needsReview": false,
    "number": 200
  },
  {
    "type": "multi",
    "week": "week-03",
    "prompt": "Select every true statement about joins.",
    "options": [
      "`inner_join()` keeps keys present in both tables.",
      "`left_join(x, y)` keeps all rows from `x`.",
      "`full_join()` keeps only rows present in both tables.",
      "Unmatched right-side columns can become `NA` after a left join."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "Inner joins keep matches only; left joins preserve the left table and fill unmatched right-side values with `NA`.",
    "id": "supplemental-wk03-multi-join-semantics",
    "topic": "Data wrangling with dplyr and tidyr",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 201
  },
  {
    "type": "order",
    "week": "week-03",
    "prompt": "Put a common grouped summary pipeline in order.",
    "items": [
      "Start with the source table.",
      "Filter to the rows relevant to the question.",
      "Group or use `.by` for the comparison variable.",
      "Summarise the measure of interest.",
      "Arrange the summary for reading."
    ],
    "explanation": "Filtering before grouping limits the data; grouping defines comparison units; summarising collapses rows; arranging improves inspection.",
    "id": "supplemental-wk03-order-wrangle-pipeline",
    "topic": "Data wrangling with dplyr and tidyr",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 202
  },
  {
    "type": "single",
    "week": "week-03",
    "prompt": "A table has one column per year, but you need one row per year for plotting. Which tidyr verb is usually appropriate?",
    "options": [
      "pivot_longer()",
      "pivot_wider()",
      "left_join()",
      "slice_head()"
    ],
    "correct": 0,
    "explanation": "`pivot_longer()` gathers multiple columns into key-value rows.",
    "id": "supplemental-wk03-single-pivot-longer",
    "topic": "Data wrangling with dplyr and tidyr",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 203
  },
  {
    "type": "multi",
    "week": "week-03",
    "prompt": "Select every true statement about `across(where(is.numeric), fn)` inside `mutate()` or `summarise()`.",
    "options": [
      "It selects numeric columns.",
      "It can apply the same function to multiple columns.",
      "It filters rows by numeric values.",
      "It is useful when several columns need the same transformation."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "`across()` applies a function over selected columns; `where(is.numeric)` selects columns by type.",
    "id": "supplemental-wk03-multi-across",
    "topic": "Data wrangling with dplyr and tidyr",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 204
  },
  {
    "type": "order",
    "week": "week-03",
    "prompt": "Put the idea of `pivot_longer()` in order.",
    "items": [
      "Choose the columns currently spread across multiple variables.",
      "Move those column names into a names column.",
      "Move the cell values into a values column.",
      "Use the longer table for grouped summaries or plotting."
    ],
    "explanation": "`pivot_longer()` converts column names and cell values into rows so downstream verbs can work at the right grain.",
    "id": "supplemental-wk03-order-pivot-longer",
    "topic": "Data wrangling with dplyr and tidyr",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 205
  },
  {
    "type": "single",
    "week": "week-03",
    "prompt": "What does `arrange(desc(n_flights), carrier)` do?",
    "options": [
      "Sorts by `n_flights` descending, then by `carrier` for ties.",
      "Filters to the largest carrier only.",
      "Groups by carrier before sorting.",
      "Removes tied values."
    ],
    "correct": 0,
    "explanation": "`arrange()` sorts by the first expression and uses later expressions as tie-breakers.",
    "id": "supplemental-wk03-single-arrange-ties",
    "topic": "Data wrangling with dplyr and tidyr",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk3_tutorial-nyflights.html",
        "lab/week_03.html"
      ]
    },
    "needsReview": false,
    "number": 206
  },
  {
    "type": "multi",
    "week": "week-04",
    "prompt": "Select every component that normally contributes to a visible ggplot layer.",
    "options": [
      "data",
      "aesthetic mapping",
      "geom",
      "file extension"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Visible layers combine data, mappings, and geoms; file extension is not a layer component.",
    "id": "supplemental-wk04-multi-layer-components",
    "topic": "ggplot layers and distributions",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 207
  },
  {
    "type": "order",
    "week": "week-04",
    "prompt": "Put these ggplot construction steps in order.",
    "items": [
      "Create the base plot with data and mappings.",
      "Add one or more geom layers.",
      "Add scales or coordinate adjustments if needed.",
      "Add labels and theme refinements."
    ],
    "explanation": "A plot starts from data/mappings, adds marks, then adjusts scales/coordinates and presentation.",
    "id": "supplemental-wk04-order-ggplot-build",
    "topic": "ggplot layers and distributions",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 208
  },
  {
    "type": "single",
    "week": "week-04",
    "prompt": "When is `geom_path()` more appropriate than `geom_line()`?",
    "options": [
      "When rows should be connected in their existing data order.",
      "When the x variable should be sorted automatically.",
      "When drawing histogram bars.",
      "When labels must repel from points."
    ],
    "correct": 0,
    "explanation": "`geom_path()` follows row order, while `geom_line()` orders by x within groups.",
    "id": "supplemental-wk04-single-line-path",
    "topic": "ggplot layers and distributions",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 209
  },
  {
    "type": "multi",
    "week": "week-04",
    "prompt": "Select every true statement about comparing a histogram with a density curve.",
    "options": [
      "Using `after_stat(density)` puts histogram height on a density scale.",
      "Bin width can change the visible shape of the histogram.",
      "A density curve has total area scaled to 1.",
      "The number of bins has no effect on interpretation."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Density-scaled histograms can be compared with density curves, and bin choices affect visible structure.",
    "id": "supplemental-wk04-multi-hist-density",
    "topic": "ggplot layers and distributions",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 210
  },
  {
    "type": "single",
    "week": "week-04",
    "prompt": "A scatterplot has many duplicate x-y pairs. Which geom can show the number of overlapping observations by point size?",
    "options": [
      "geom_count()",
      "geom_abline()",
      "geom_rug()",
      "geom_blank()"
    ],
    "correct": 0,
    "explanation": "`geom_count()` counts duplicate x-y combinations and maps the count to point size.",
    "id": "supplemental-wk04-single-geom-count",
    "topic": "ggplot layers and distributions",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 211
  },
  {
    "type": "order",
    "week": "week-04",
    "prompt": "Put a sensible histogram-checking process in order.",
    "items": [
      "Choose an initial bin count or bin width.",
      "Inspect the distribution shape.",
      "Try a smaller or larger bin setting.",
      "Decide whether the visible pattern is stable enough to describe."
    ],
    "explanation": "Histogram interpretation should check whether a pattern persists across reasonable bin choices.",
    "id": "supplemental-wk04-order-distribution-check",
    "topic": "ggplot layers and distributions",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 212
  },
  {
    "type": "multi",
    "week": "week-04",
    "prompt": "Select every true statement about `geom_smooth()`.",
    "options": [
      "It can add a fitted trend line.",
      "It may show an uncertainty band.",
      "`method = \"lm\"` fits a linear model.",
      "It always computes a histogram."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "`geom_smooth()` fits and displays a smooth or model; it is not a histogram statistic.",
    "id": "supplemental-wk04-multi-smooth",
    "topic": "ggplot layers and distributions",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 213
  },
  {
    "type": "single",
    "week": "week-04",
    "prompt": "What is `facet_wrap(~ species)` mainly used for?",
    "options": [
      "Creating a small-multiple panel for each species.",
      "Changing all points to the same colour.",
      "Joining two tables by species.",
      "Sorting rows by species."
    ],
    "correct": 0,
    "explanation": "`facet_wrap()` splits a plot into panels by levels of a faceting variable.",
    "id": "supplemental-wk04-single-facet-wrap",
    "topic": "ggplot layers and distributions",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk4-tutorial-iris.html",
        "lab/week_04.html"
      ]
    },
    "needsReview": false,
    "number": 214
  },
  {
    "type": "multi",
    "week": "week-06",
    "prompt": "Select every true statement about `geom_bar()` and `geom_col()`.",
    "options": [
      "`geom_bar()` counts rows by default.",
      "`geom_col()` uses supplied y values.",
      "`geom_bar()` always requires a y aesthetic.",
      "`geom_col()` is appropriate for precomputed bar heights."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "`geom_bar()` defaults to count; `geom_col()` uses existing y values.",
    "id": "supplemental-wk06-multi-bar-geoms",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 215
  },
  {
    "type": "order",
    "week": "week-06",
    "prompt": "Put the required contour-plot data roles in order of reasoning.",
    "items": [
      "Identify the x coordinate.",
      "Identify the y coordinate.",
      "Identify the z value measured over x-y space.",
      "Draw contour lines or filled bands for levels of z."
    ],
    "explanation": "Contours represent levels of a third variable `z` over an x-y plane.",
    "id": "supplemental-wk06-order-contour-data",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 216
  },
  {
    "type": "single",
    "week": "week-06",
    "prompt": "When is `geom_raster()` the natural choice over `geom_tile()`?",
    "options": [
      "For a regular grid where all cells have equal size.",
      "For irregular polygons with different shapes.",
      "For a line chart with ordered x values.",
      "For text labels only."
    ],
    "correct": 0,
    "explanation": "`geom_raster()` is optimized for regular grids of equal-size cells.",
    "id": "supplemental-wk06-single-raster",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 217
  },
  {
    "type": "multi",
    "week": "week-06",
    "prompt": "Select every aesthetic that can reasonably distinguish unordered categories.",
    "options": [
      "shape",
      "qualitative colour",
      "linetype for a small number of groups",
      "continuous size for exact magnitude"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Shape, qualitative colour, and sometimes linetype can encode categories. Continuous size implies magnitude.",
    "id": "supplemental-wk06-multi-category-aesthetic",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 218
  },
  {
    "type": "single",
    "week": "week-06",
    "prompt": "A plot needs to encode an intensive quantity such as a rate. What makes colour often safer than area for this task?",
    "options": [
      "A rate is not a total that should grow with mark area.",
      "Colour always shows exact numeric values.",
      "Area can only encode categories.",
      "Rates cannot be plotted."
    ],
    "correct": 0,
    "explanation": "Area strongly implies amount or total; intensive quantities need encodings that do not imply accumulating magnitude by mark area.",
    "id": "supplemental-wk06-single-intensive",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 219
  },
  {
    "type": "order",
    "week": "week-06",
    "prompt": "Put the decision process for bar geoms in order.",
    "items": [
      "Ask whether the y values are already computed.",
      "Use `geom_col()` when y values are precomputed.",
      "Use `geom_bar()` when each bar should count rows.",
      "Check that the visual baseline supports length comparison."
    ],
    "explanation": "The choice between bar geoms depends on whether heights are counted by the stat or supplied in the data.",
    "id": "supplemental-wk06-order-bar-choice",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 220
  },
  {
    "type": "multi",
    "week": "week-06",
    "prompt": "Select every requirement for a meaningful contour plot.",
    "options": [
      "An x position",
      "A y position",
      "A z value over the x-y surface",
      "A categorical legend with no numeric surface"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Contour plots trace levels of a numeric z surface across x and y.",
    "id": "supplemental-wk06-multi-contour",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 221
  },
  {
    "type": "single",
    "week": "week-06",
    "prompt": "In many ggplot geoms, what is the difference between `colour` and `fill`?",
    "options": [
      "`colour` controls outlines/strokes; `fill` controls interiors.",
      "`fill` controls all text and `colour` controls only axes.",
      "`colour` counts rows and `fill` filters rows.",
      "`fill` is only for dates."
    ],
    "correct": 0,
    "explanation": "`colour` commonly controls strokes or outlines, while `fill` controls filled interiors.",
    "id": "supplemental-wk06-single-fill-color",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 222
  },
  {
    "type": "multi",
    "week": "week-06",
    "prompt": "Select every risk when using line width to encode data.",
    "options": [
      "Thicker marks can imply more total amount.",
      "Very small differences can be hard to compare precisely.",
      "Width may overpower more important encodings.",
      "Line width automatically fixes all scale problems."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Width is a magnitude cue and can dominate a plot; it does not automatically make a scale truthful.",
    "id": "supplemental-wk06-multi-linewidth-risk",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 223
  },
  {
    "type": "single",
    "week": "week-06",
    "prompt": "Which aesthetic supplies the height/surface value in `geom_contour()`?",
    "options": [
      "z",
      "shape",
      "alpha",
      "group"
    ],
    "correct": 0,
    "explanation": "The `z` aesthetic supplies the numeric surface whose levels become contour lines.",
    "id": "supplemental-wk06-single-geom-contour-z",
    "topic": "Aesthetics, bars, rasters, and contours",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk6-tutorial-mpg.html",
        "lab/week_06.html"
      ]
    },
    "needsReview": false,
    "number": 224
  },
  {
    "type": "multi",
    "week": "week-08",
    "prompt": "Select every thing a ggplot scale can control.",
    "options": [
      "Mapping from data values to aesthetic values",
      "Axis or legend breaks",
      "Axis or legend labels",
      "The raw values stored in the original data frame"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Scales map data to aesthetics and control guides; they do not mutate the original data frame.",
    "id": "supplemental-wk08-multi-scale-parts",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 225
  },
  {
    "type": "order",
    "week": "week-08",
    "prompt": "Put the scale-to-guide process in order.",
    "items": [
      "Data values are mapped through a scale.",
      "Breaks select representative values to show.",
      "Labels format those values for readers.",
      "The axis or legend displays the guide."
    ],
    "explanation": "Scales map values first; breaks and labels then determine what the reader sees in guides.",
    "id": "supplemental-wk08-order-scale-guide",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 226
  },
  {
    "type": "single",
    "week": "week-08",
    "prompt": "In a bubble plot where population is encoded by circle size, why prefer `scale_size_area()`?",
    "options": [
      "It makes circle area proportional to the data value.",
      "It makes radius proportional to the data value.",
      "It removes the population legend.",
      "It converts population to categories."
    ],
    "correct": 0,
    "explanation": "For circles, readers perceive area, so area should be proportional to the encoded quantity.",
    "id": "supplemental-wk08-single-size-area",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 227
  },
  {
    "type": "multi",
    "week": "week-08",
    "prompt": "Select every correct ColorBrewer family use.",
    "options": [
      "Qualitative palettes for nominal categories.",
      "Sequential palettes for ordered low-to-high values.",
      "Diverging palettes for values around a meaningful midpoint.",
      "Sequential palettes for unrelated regions with no order."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Qualitative, sequential, and diverging palettes serve nominal, ordered, and midpoint-centered data respectively.",
    "id": "supplemental-wk08-multi-brewer",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 228
  },
  {
    "type": "single",
    "week": "week-08",
    "prompt": "What does `guide_legend(override.aes = list(alpha = 1))` change?",
    "options": [
      "The appearance of legend keys.",
      "The raw data values.",
      "The fitted model.",
      "The coordinate system."
    ],
    "correct": 0,
    "explanation": "`override.aes` changes how legend keys are drawn, not the plotted data.",
    "id": "supplemental-wk08-single-override",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 229
  },
  {
    "type": "order",
    "week": "week-08",
    "prompt": "Put the legend-repair reasoning in order.",
    "items": [
      "Notice that the legend key is hard to read.",
      "Identify which layer aesthetic the legend inherited.",
      "Use guide override settings for the legend key.",
      "Confirm that the plotted data marks did not change."
    ],
    "explanation": "Legend overrides should improve readability without changing the data layer.",
    "id": "supplemental-wk08-order-legend-repair",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 230
  },
  {
    "type": "multi",
    "week": "week-08",
    "prompt": "Select every correct statement about scale arguments.",
    "options": [
      "`limits` controls the scale domain shown.",
      "`breaks` controls tick or key positions.",
      "`labels` controls displayed text.",
      "`labels` filters rows before plotting."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "`limits`, `breaks`, and `labels` control the scale domain, guide positions, and displayed text respectively.",
    "id": "supplemental-wk08-multi-limits-breaks-labels",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 231
  },
  {
    "type": "single",
    "week": "week-08",
    "prompt": "Why use a short-number label style such as K/M/B in a population legend?",
    "options": [
      "To make large numbers easier to read without changing their values.",
      "To convert population into a factor.",
      "To remove the size scale.",
      "To hide the legend."
    ],
    "correct": 0,
    "explanation": "Formatting labels changes presentation only; values remain the same.",
    "id": "supplemental-wk08-single-cut-short",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 232
  },
  {
    "type": "multi",
    "week": "week-08",
    "prompt": "Select every guide-related action that changes display without changing plotted data values.",
    "options": [
      "Reverse legend key order.",
      "Override legend key alpha.",
      "Format labels as 10K or 100K.",
      "Filter the data frame before plotting."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Guide order, overrides, and labels are display changes. Filtering changes the data being plotted.",
    "id": "supplemental-wk08-multi-guide-order",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 233
  },
  {
    "type": "single",
    "week": "week-08",
    "prompt": "Which part of ggplot is normally used to move an axis to the top?",
    "options": [
      "A scale setting such as axis position.",
      "A row filter.",
      "A join key.",
      "A data mutation."
    ],
    "correct": 0,
    "explanation": "Axis placement is a scale/guide display setting, not a data transformation.",
    "id": "supplemental-wk08-single-position-top",
    "topic": "Scales and guides",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk8_scales_and_guides_tutorial.html",
        "lab/week_08.html"
      ]
    },
    "needsReview": false,
    "number": 234
  },
  {
    "type": "multi",
    "week": "week-09",
    "prompt": "Select every true statement about coordinate systems in ggplot.",
    "options": [
      "They affect how data layers are drawn on the display.",
      "`coord_flip()` swaps displayed axes.",
      "`coord_cartesian()` can zoom without dropping data before stats.",
      "Coordinate systems mutate the original data frame."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Coordinates affect display after data/stat work; they do not mutate the data frame.",
    "id": "supplemental-wk09-multi-coordinate",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 235
  },
  {
    "type": "order",
    "week": "week-09",
    "prompt": "Put the reasoning for choosing `coord_cartesian()` in order.",
    "items": [
      "You want to inspect a smaller display range.",
      "You want statistics to use the full data.",
      "Use `coord_cartesian()` for visual zooming.",
      "Check whether the displayed pattern changes only because of the zoom."
    ],
    "explanation": "`coord_cartesian()` is a display zoom and does not drop data before statistics are computed.",
    "id": "supplemental-wk09-order-zoom-choice",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 236
  },
  {
    "type": "single",
    "week": "week-09",
    "prompt": "What is a key risk of using `scale_x_continuous(limits = ...)` before a smoother or summary stat?",
    "options": [
      "Rows outside the limits may be removed before the statistic is computed.",
      "The coordinate system becomes 3D.",
      "The plot automatically facets.",
      "Labels become impossible."
    ],
    "correct": 0,
    "explanation": "Scale limits can remove data before statistical transformations, affecting fitted lines and summaries.",
    "id": "supplemental-wk09-single-scale-limits",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 237
  },
  {
    "type": "multi",
    "week": "week-09",
    "prompt": "Select every true statement about facets.",
    "options": [
      "They create small multiples.",
      "They repeat the same plot structure across groups.",
      "`facet_grid(rows ~ cols)` can cross two variables.",
      "They join two data frames."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Facets split data into panels; they do not perform table joins.",
    "id": "supplemental-wk09-multi-facets",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 238
  },
  {
    "type": "single",
    "week": "week-09",
    "prompt": "What does a ggplot theme primarily control?",
    "options": [
      "Non-data visual elements such as text, backgrounds, grids, and legend position.",
      "The values inside the original data frame.",
      "The join type used by dplyr.",
      "The coordinate reference system of an sf object."
    ],
    "correct": 0,
    "explanation": "Themes control presentation components, not data values.",
    "id": "supplemental-wk09-single-theme",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 239
  },
  {
    "type": "order",
    "week": "week-09",
    "prompt": "Put a plot-polishing workflow in order.",
    "items": [
      "Check that the data encoding is correct.",
      "Set readable labels and titles.",
      "Adjust theme elements such as grid, text, and legend placement.",
      "Check the final chart at the intended output size."
    ],
    "explanation": "Polishing should not happen before the core encoding is correct; final output size can expose readability problems.",
    "id": "supplemental-wk09-order-polish",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 240
  },
  {
    "type": "multi",
    "week": "week-09",
    "prompt": "Select every item normally controlled by `theme()`.",
    "options": [
      "Legend position",
      "Axis title text appearance",
      "Panel grid visibility",
      "Which rows pass a filter"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "`theme()` controls non-data display; row filtering is done before plotting.",
    "id": "supplemental-wk09-multi-theme-not-data",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 241
  },
  {
    "type": "single",
    "week": "week-09",
    "prompt": "When is `coord_fixed()` most meaningful?",
    "options": [
      "When equal units on x and y should have equal physical lengths on screen.",
      "Whenever a plot has a title.",
      "Only when a plot has no axes.",
      "Whenever the legend is on the right."
    ],
    "correct": 0,
    "explanation": "`coord_fixed()` fixes the aspect ratio so one x unit and one y unit use a specified screen ratio.",
    "id": "supplemental-wk09-single-coord-fixed",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 242
  },
  {
    "type": "multi",
    "week": "week-09",
    "prompt": "Select every reason to use `coord_flip()`.",
    "options": [
      "Long category labels read better on the y-axis.",
      "Horizontal bars may be easier to compare.",
      "It changes the raw values in the data frame.",
      "It swaps the displayed x and y axes."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "`coord_flip()` changes the display orientation, which can help labels and horizontal comparisons.",
    "id": "supplemental-wk09-multi-coord-flip",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 243
  },
  {
    "type": "order",
    "week": "week-09",
    "prompt": "Put the faceting decision process in order.",
    "items": [
      "Identify the grouping variable or variables.",
      "Choose `facet_wrap()` for one wrapping variable or `facet_grid()` for a row-column layout.",
      "Check that each panel has enough data.",
      "Compare patterns across panels."
    ],
    "explanation": "Faceting is useful only when the grouping variables and panel data support comparison.",
    "id": "supplemental-wk09-order-facet-grid",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 244
  },
  {
    "type": "single",
    "week": "week-09",
    "prompt": "Which theme is appropriate when you want to remove axes, grids, and background for a map-like display?",
    "options": [
      "theme_void()",
      "theme_minimal()",
      "theme_bw()",
      "theme_linedraw()"
    ],
    "correct": 0,
    "explanation": "`theme_void()` removes most non-data plot elements and is often useful for maps or diagrams.",
    "id": "supplemental-wk09-single-theme-void",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 245
  },
  {
    "type": "multi",
    "week": "week-09",
    "prompt": "Select every statement that distinguishes coordinates from scale limits.",
    "options": [
      "Coordinate zooming can preserve data for stats.",
      "Scale limits can remove data before stats.",
      "Both always mutate the original data frame.",
      "The difference matters for smoothers and summaries."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "Coordinate zoom and scale limits can produce different statistical results because scale limits may drop data before stats.",
    "id": "supplemental-wk09-multi-coordinate-vs-scale",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 246
  },
  {
    "type": "single",
    "week": "week-09",
    "prompt": "Which function is normally used to change the wording of axis titles and captions?",
    "options": [
      "labs()",
      "theme()",
      "filter()",
      "coord_flip()"
    ],
    "correct": 0,
    "explanation": "`labs()` changes label text; `theme()` changes label appearance and placement.",
    "id": "supplemental-wk09-single-labs-vs-theme",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 247
  },
  {
    "type": "order",
    "week": "week-09",
    "prompt": "Put label refinement in order.",
    "items": [
      "Replace variable names with reader-facing labels.",
      "Add units where needed.",
      "Add a title or caption for context.",
      "Use theme settings to make text readable."
    ],
    "explanation": "Good labels first say the right thing, then get styled for readability.",
    "id": "supplemental-wk09-order-label-polish",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 248
  },
  {
    "type": "multi",
    "week": "week-09",
    "prompt": "Select every issue that can appear only after checking a chart at final output size.",
    "options": [
      "Labels become clipped.",
      "Legend text is too small.",
      "Panel spacing is too tight.",
      "The underlying CSV file disappears from memory."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Final size affects readability, clipping, and spacing; it does not erase source data.",
    "id": "supplemental-wk09-multi-output-size",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 249
  },
  {
    "type": "single",
    "week": "week-09",
    "prompt": "What is a tradeoff of free scales in facets?",
    "options": [
      "Within-panel patterns may be easier to see, but cross-panel magnitude comparisons become harder.",
      "All panels become identical.",
      "The raw data is sorted alphabetically.",
      "Facets stop showing groups."
    ],
    "correct": 0,
    "explanation": "Free scales can reveal local patterns but reduce direct comparison of absolute values across panels.",
    "id": "supplemental-wk09-single-facet-scales",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 250
  },
  {
    "type": "multi",
    "week": "week-09",
    "prompt": "Select every non-data element that can improve interpretation when used carefully.",
    "options": [
      "Title",
      "Subtitle",
      "Caption/source note",
      "Randomly changing the plotted values"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Titles, subtitles, and captions add context; changing values would corrupt the data.",
    "id": "supplemental-wk09-multi-annotation-theme",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 251
  },
  {
    "type": "order",
    "week": "week-09",
    "prompt": "Put the simplified ggplot rendering sequence in order.",
    "items": [
      "Data and aesthetics are set.",
      "Stats and geoms compute layer data.",
      "Scales map data values to aesthetic values.",
      "Coordinates draw the mapped data in the panel.",
      "Themes style the non-data components."
    ],
    "explanation": "Coordinates happen after scales/stat computations in the conceptual rendering pipeline.",
    "id": "supplemental-wk09-order-coordinate-render",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 252
  },
  {
    "type": "single",
    "week": "week-09",
    "prompt": "Where is legend placement usually controlled?",
    "options": [
      "theme(legend.position = ...)",
      "left_join()",
      "mutate()",
      "geom_histogram()"
    ],
    "correct": 0,
    "explanation": "Legend position is a theme setting.",
    "id": "supplemental-wk09-single-legend-position",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 253
  },
  {
    "type": "multi",
    "week": "week-09",
    "prompt": "Select every reasonable repair when labels are clipped near a plot edge.",
    "options": [
      "Increase plot margins.",
      "Adjust label placement.",
      "Use a repelling label geom where appropriate.",
      "Delete the data points with clipped labels by default."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Margins and better placement solve clipping without discarding observations.",
    "id": "supplemental-wk09-multi-clipping",
    "topic": "Coordinates, facets, and themes",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/week_09_coord_facets_and_themes_tutorial.html"
      ]
    },
    "needsReview": false,
    "number": 254
  },
  {
    "type": "multi",
    "week": "week-10",
    "prompt": "Select every true statement about `sf` vector data.",
    "options": [
      "It stores geometry together with attribute columns.",
      "It can represent points, lines, and polygons.",
      "It is drawn in ggplot with `geom_sf()`.",
      "It is only for raster grids."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "`sf` stores simple-feature geometries and attributes and works with `geom_sf()`.",
    "id": "supplemental-wk10-multi-sf",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 255
  },
  {
    "type": "order",
    "week": "week-10",
    "prompt": "Put a basic geospatial workflow in order.",
    "items": [
      "Read or create the spatial layer.",
      "Check its coordinate reference system.",
      "Transform CRS if layers need to align.",
      "Join or summarise attributes if needed.",
      "Map the geometry with an appropriate fill or boundary."
    ],
    "explanation": "Spatial work depends on valid geometry and CRS before joining, summarising, or mapping.",
    "id": "supplemental-wk10-order-spatial-workflow",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 256
  },
  {
    "type": "single",
    "week": "week-10",
    "prompt": "Why does CRS matter when combining spatial layers?",
    "options": [
      "Layers must use compatible coordinate systems to align correctly.",
      "CRS chooses the colour palette.",
      "CRS removes all missing values.",
      "CRS converts factors to ordered factors."
    ],
    "correct": 0,
    "explanation": "Coordinate reference systems define how coordinates map to locations; incompatible CRS can misalign layers.",
    "id": "supplemental-wk10-single-crs",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 257
  },
  {
    "type": "multi",
    "week": "week-10",
    "prompt": "Select every good practice for a choropleth map.",
    "options": [
      "Use polygon fill to encode an area-level value.",
      "Use a colour scale suited to the variable type.",
      "Include enough context for the geography.",
      "Use area size to encode every rate by default."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Choropleths fill areas by values; palette choice and context matter. Rates should not be encoded by polygon area.",
    "id": "supplemental-wk10-multi-choropleth",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 258
  },
  {
    "type": "single",
    "week": "week-10",
    "prompt": "What does a spatial join such as `st_join()` use that a normal key join does not?",
    "options": [
      "Spatial relationships between geometries.",
      "Only alphabetical order.",
      "Only row number.",
      "Only legend labels."
    ],
    "correct": 0,
    "explanation": "`st_join()` joins using geometry relationships such as intersects or within.",
    "id": "supplemental-wk10-single-st-join",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 259
  },
  {
    "type": "order",
    "week": "week-10",
    "prompt": "Put map-checking steps in order.",
    "items": [
      "Confirm the geometry appears in the expected location.",
      "Check whether the CRS/projection is appropriate.",
      "Check that the mapped attribute matches the question.",
      "Check the legend and labels for interpretability."
    ],
    "explanation": "A map must first be spatially correct, then semantically and visually interpretable.",
    "id": "supplemental-wk10-order-map-check",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 260
  },
  {
    "type": "multi",
    "week": "week-10",
    "prompt": "Select every true statement about map projections.",
    "options": [
      "They transform curved-earth coordinates to a flat display.",
      "They can distort area, shape, distance, or direction.",
      "The best projection depends on the map purpose.",
      "They are the same as colour palettes."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Projection choice affects spatial distortion and should match the analytical purpose.",
    "id": "supplemental-wk10-multi-projection",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 261
  },
  {
    "type": "single",
    "week": "week-10",
    "prompt": "An `sf` object stores a geometry column along with attributes. What makes `geom_sf()` convenient for plotting it?",
    "options": [
      "It understands the geometry column and draws the appropriate spatial features.",
      "It always counts rows into bars.",
      "It removes the need for a CRS.",
      "It converts polygons into histograms."
    ],
    "correct": 0,
    "explanation": "`geom_sf()` handles sf geometry columns directly.",
    "id": "supplemental-wk10-single-geom-sf",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 262
  },
  {
    "type": "multi",
    "week": "week-10",
    "prompt": "Select every correct mapping choice for polygon maps.",
    "options": [
      "Use `fill` for an area-level choropleth value.",
      "Use boundary colour to show outlines.",
      "Use `shape` to draw polygon interiors.",
      "Use labels or captions to clarify geography where needed."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "Polygon interiors are controlled by fill; outlines by colour. Shape is a point aesthetic, not polygon fill.",
    "id": "supplemental-wk10-multi-boundary-fill",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 263
  },
  {
    "type": "order",
    "week": "week-10",
    "prompt": "Put the spatial-join checking process in order.",
    "items": [
      "Check both layers have valid geometry.",
      "Check or transform CRS so the layers align.",
      "Run the spatial join.",
      "Inspect unmatched or duplicated joined features."
    ],
    "explanation": "Geometry and CRS must be checked before relying on the join result.",
    "id": "supplemental-wk10-order-spatial-join-check",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 264
  },
  {
    "type": "single",
    "week": "week-10",
    "prompt": "For comparing areas with different population sizes, why might a rate be safer than a raw count on a choropleth?",
    "options": [
      "A rate can account for different denominators across areas.",
      "Raw counts are never useful.",
      "Rates remove the need for a legend.",
      "Rates always prove causality."
    ],
    "correct": 0,
    "explanation": "Rates can make areas with different denominators more comparable; raw counts may mostly reflect population size.",
    "id": "supplemental-wk10-single-rate-vs-count",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 265
  },
  {
    "type": "multi",
    "week": "week-10",
    "prompt": "Select every feature that helps a reader interpret a map.",
    "options": [
      "Clear legend title",
      "Appropriate projection or CRS",
      "Readable labels or context",
      "A misleading colour scale chosen only for decoration"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Maps need spatial and visual context; decorative colour choices can mislead.",
    "id": "supplemental-wk10-multi-map-legend",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 266
  },
  {
    "type": "single",
    "week": "week-10",
    "prompt": "What visual feature identifies an equirectangular-style world map in the practice question?",
    "options": [
      "Straight vertical meridians and straight horizontal parallels in a rectangular grid.",
      "A circular globe outline only.",
      "Curved meridians meeting at the poles.",
      "No latitude or longitude grid."
    ],
    "correct": 0,
    "explanation": "An equirectangular map has a rectangular latitude-longitude grid with straight meridians and parallels.",
    "id": "supplemental-wk10-single-equirectangular",
    "topic": "Geospatial vectors",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "tut/wk10_geospatial_vectors_tutorial.html",
        "lab/week_10.html"
      ]
    },
    "needsReview": false,
    "number": 267
  },
  {
    "type": "multi",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "In the planning-area bubble plot, select every reason `scale_size_area()` is preferred for population.",
    "options": [
      "Readers compare bubble area.",
      "Zero population should map to zero area.",
      "It preserves proportional area better than a log-size transform.",
      "It makes every small area equally visible."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "`scale_size_area()` supports proportional area encoding; it does not guarantee equal visibility for all areas.",
    "id": "supplemental-practice2-extra-01",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 268
  },
  {
    "type": "order",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Put the plot repair sequence for the planning-area chart in order.",
    "items": [
      "Fix proportional bubble sizing.",
      "Choose a qualitative palette for region.",
      "Keep point aesthetics out of the smoother when fitting one overall line.",
      "Polish labels, legends, title, and source."
    ],
    "explanation": "The narrative first repairs size, then colour, then smoothing inheritance, then publication polish.",
    "id": "supplemental-practice2-extra-02",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 269
  },
  {
    "type": "single",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "The plot maps `color = region` globally and then adds `geom_smooth(method = \"lm\")`. Why does that create multiple smooth lines?",
    "options": [
      "The smoother inherits the colour grouping.",
      "The smoother cannot fit linear models.",
      "The size scale disables smoothing.",
      "The x-axis is a factor."
    ],
    "correct": 0,
    "explanation": "Aesthetic mappings in the top-level `ggplot()` call are inherited by later layers, so the smoother is grouped by region.",
    "id": "supplemental-practice2-extra-03",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 270
  },
  {
    "type": "multi",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Select every change that helps produce one overall trend line while keeping region colours for points.",
    "options": [
      "Put `color = region` inside `geom_point()`.",
      "Keep only x and y in the global `ggplot()` mapping.",
      "Add `geom_smooth(method = \"lm\")` without inheriting region colour.",
      "Map region globally and hope the smoother ignores it."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Layer-specific point mappings keep colour on points while allowing the smoother to use one global x-y relationship.",
    "id": "supplemental-practice2-extra-04",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 271
  },
  {
    "type": "single",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "The trend line should give more influence to higher-population planning areas. What is the difference between `geom_smooth(aes(weight = pop), method = \"lm\")` and mapping `size = pop` in the smooth?",
    "options": [
      "`weight` changes each area's influence on the fitted model.",
      "`size` changes the model formula.",
      "`size` weights the regression automatically.",
      "`weight` changes only the legend title."
    ],
    "correct": 0,
    "explanation": "The `weight` aesthetic supplies model weights; point size is a display encoding.",
    "id": "supplemental-practice2-extra-05",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 272
  },
  {
    "type": "multi",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Select every reason not to read the fitted line as individual-level causation.",
    "options": [
      "The data are planning-area summaries.",
      "The plot is observational.",
      "Other variables may explain the association.",
      "A confidence band proves a causal effect."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Area-level observational summaries can show association, not individual-level causation.",
    "id": "supplemental-practice2-extra-06",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 273
  },
  {
    "type": "single",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "The `region` variable is nominal, with categories such as Central, East, North, North-East, and West. What makes Set1 a better candidate than Blues here?",
    "options": [
      "Region is nominal, so distinct qualitative hues are appropriate.",
      "Region is a low-to-high numeric variable.",
      "Blues always means central region.",
      "Set1 removes the need for labels."
    ],
    "correct": 0,
    "explanation": "Nominal categories need distinct hues rather than an ordered light-to-dark ramp.",
    "id": "supplemental-practice2-extra-07",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 274
  },
  {
    "type": "order",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Put the legend override reasoning in order.",
    "items": [
      "Point alpha makes panel points semi-transparent.",
      "The colour legend inherits semi-transparent keys.",
      "Use `override.aes` to make legend keys larger and opaque.",
      "Leave panel points semi-transparent to show overlap."
    ],
    "explanation": "The legend should be readable while the panel can still use transparency for overplotting.",
    "id": "supplemental-practice2-extra-08",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 275
  },
  {
    "type": "multi",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Select every publication-polish issue visible in the pre-polish planning-area plot.",
    "options": [
      "Technical variable names are used as labels.",
      "Population legend values use scientific notation.",
      "Some labels are close to points or edges.",
      "The plot has no data values."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The pre-polish plot needs reader-facing labels, readable legend values, and better label placement.",
    "id": "supplemental-practice2-extra-09",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 276
  },
  {
    "type": "single",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Which layer is best suited to label bubbles while reducing overlaps?",
    "options": [
      "ggrepel::geom_text_repel(aes(label = code))",
      "geom_jitter(aes(label = code))",
      "geom_histogram(aes(label = code))",
      "scale_color_brewer(aes(label = code))"
    ],
    "correct": 0,
    "explanation": "`geom_text_repel()` is designed to place text labels while reducing overlaps.",
    "id": "supplemental-practice2-extra-10",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 277
  },
  {
    "type": "multi",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Select every true statement about a logarithmic transform of bubble sizes in this narrative.",
    "options": [
      "It would preserve ordering from least to most populous.",
      "It would break proportional area encoding.",
      "It would make smaller areas easier to see at a cost.",
      "It would make area exactly proportional to population."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "A monotonic log transform preserves order but changes proportional differences and breaks area proportionality.",
    "id": "supplemental-practice2-extra-11",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 278
  },
  {
    "type": "single",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "A reviewer suggests `coord_fixed()` for a plot of median age in years versus mean household size in persons. What is the problem with applying that suggestion automatically?",
    "options": [
      "The axes use different units, so equal screen distances are not inherently meaningful.",
      "It only works for histograms.",
      "It removes the fitted line.",
      "It changes the data source."
    ],
    "correct": 0,
    "explanation": "A fixed aspect ratio is meaningful when unit equality across axes has a clear interpretation; years and persons are different units.",
    "id": "supplemental-practice2-extra-12",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 279
  },
  {
    "type": "order",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Put the reasoning for the final trend interpretation in order.",
    "items": [
      "Observe the direction of the fitted line.",
      "Describe the association at planning-area level.",
      "Use the confidence band as uncertainty around the fitted trend.",
      "Avoid causal or individual-level claims."
    ],
    "explanation": "Trend interpretation should move from visual evidence to careful scope limits.",
    "id": "supplemental-practice2-extra-13",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 280
  },
  {
    "type": "multi",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Select every useful improvement for the WSJ before/after coverage chart.",
    "options": [
      "Remove the 3D effect.",
      "Use a flat grouped bar, dot, or dumbbell plot.",
      "Use clearer direct labels for before/after.",
      "Keep the 3D perspective because it improves measurement accuracy."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "A flat display with clearer labels improves comparison; 3D perspective distorts bar reading.",
    "id": "supplemental-practice2-extra-14",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 281
  },
  {
    "type": "single",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "In the plot-code matching question, why is the correct plot's connecting line black?",
    "options": [
      "`geom_line()` has no colour mapping in the code.",
      "`scale_colour_distiller()` always colours lines only.",
      "`geom_point()` removes all lines.",
      "`year` is mapped to x."
    ],
    "correct": 0,
    "explanation": "Only the point layer maps colour to year; the line layer uses its default colour.",
    "id": "supplemental-practice2-extra-15",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 282
  },
  {
    "type": "single",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "What visual clue identifies the equirectangular map among the projection choices?",
    "options": [
      "Straight meridians and parallels forming a rectangular grid.",
      "All meridians are curved into an oval.",
      "The map has no grid lines.",
      "Australia is removed."
    ],
    "correct": 0,
    "explanation": "The equirectangular projection displays latitude and longitude as straight grid lines in a rectangle.",
    "id": "supplemental-practice2-extra-16",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 283
  },
  {
    "type": "multi",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Select every reason a direct label can be better than a separate legend.",
    "options": [
      "It reduces lookup between mark and legend.",
      "It can place information near the relevant data.",
      "It always removes overlap automatically.",
      "It can make comparisons faster when space allows."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "Direct labels reduce lookup cost, but they still need careful placement to avoid overlap.",
    "id": "supplemental-practice2-extra-17",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 284
  },
  {
    "type": "order",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Put a safe redesign process for the WSJ chart in order.",
    "items": [
      "Remove 3D perspective.",
      "Choose a 2D comparison form such as a dumbbell plot.",
      "Order topics by size of change if that is the message.",
      "Add direct labels and a clear percentage axis."
    ],
    "explanation": "The redesign first removes distortion, then chooses a comparison form, then clarifies ordering and labels.",
    "id": "supplemental-practice2-extra-18",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 285
  },
  {
    "type": "single",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Why should a population legend show values such as 10K, 50K, 100K, and 200K instead of `1e+05` style labels?",
    "options": [
      "Short readable labels reduce decoding effort without changing the data.",
      "Scientific notation changes the plotted values.",
      "Population cannot be shown in legends.",
      "Short labels remove the size encoding."
    ],
    "correct": 0,
    "explanation": "Readable labels improve interpretation while preserving the underlying values.",
    "id": "supplemental-practice2-extra-19",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 286
  },
  {
    "type": "multi",
    "week": "practice-2",
    "topic": "Practice 2 extension",
    "prompt": "Select every statement that correctly separates data marks from legend keys.",
    "options": [
      "Panel points can use transparency to show overlap.",
      "Legend keys can be more opaque for readability.",
      "Changing legend key alpha with `override.aes` changes raw data values.",
      "Legend keys explain encodings rather than show every plotted overlap."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "Legend keys should communicate encodings clearly; panel marks can still use alpha to show overlap.",
    "id": "supplemental-practice2-extra-20",
    "source": {
      "kind": "source-derived-drill",
      "paths": [
        "practice-quiz/quiz2-1.html",
        "practice-quiz/quiz2-2.html",
        "practice-quiz/quiz2-3.html",
        "practice-quiz/quiz2-4.html",
        "practice-quiz/quiz2-5.html",
        "practice-quiz/quiz2-6.html",
        "practice-quiz/quiz2-7.html",
        "practice-quiz/quiz2-8.html",
        "practice-quiz/quiz2-9.html",
        "practice-quiz/quiz2-10.html",
        "practice-quiz/quiz2-11.html",
        "practice-quiz/quiz2-12.html"
      ]
    },
    "needsReview": false,
    "number": 287
  }
];
