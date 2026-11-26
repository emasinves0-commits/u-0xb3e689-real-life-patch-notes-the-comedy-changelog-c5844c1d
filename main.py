#!/usr/bin/env python3
"""Real-Life Patch Notes: The Comedy Changelog — writes the entry line to /output/entry.txt.

Deterministic: the entry is a fixed string; the program only validates it
(1-160 characters, not whitespace-only, UTF-8, single line) and writes it
with no trailing newline.
"""
import os

ENTRY = "v8.2.1: fixed a bug where the nose itch would teleport 2cm to the left immediately upon receiving a scratch command from the hand."

def main():
    text = ENTRY
    assert 1 <= len(text) <= 160, f"entry length {len(text)} out of range"
    assert text.strip(), "entry is whitespace only"
    assert "\n" not in text, "entry must be a single line"
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "entry.txt"), "w", encoding="utf-8", newline="") as f:
        f.write(text)

if __name__ == "__main__":
    main()
