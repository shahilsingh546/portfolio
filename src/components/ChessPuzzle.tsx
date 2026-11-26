"use client";

import { useState } from "react";
import { Crown, RotateCcw, ChevronRight, CheckCircle2, HelpCircle } from "lucide-react";

type PieceSymbol = "♔" | "♕" | "♖" | "♗" | "♘" | "♚" | "♜" | "♟";

interface SquarePiece {
  symbol: PieceSymbol;
  color: "w" | "b";
}

interface ChessPuzzleData {
  id: number;
  title: string;
  motif: string;
  notation: string;
  from: string;
  to: string;
  hint: string;
  pieces: Record<string, SquarePiece>;
}

const PUZZLES: ChessPuzzleData[] = [
  {
    id: 1,
    title: "Back-Rank Mate",
    motif: "White to move · Mate in 1",
    notation: "1. Re8#",
    from: "e1",
    to: "e8",
    hint: "The black king is trapped behind its own pawns. Slide the Rook to the 8th rank.",
    pieces: {
      g1: { symbol: "♔", color: "w" },
      e1: { symbol: "♖", color: "w" },
      g8: { symbol: "♚", color: "b" },
      f7: { symbol: "♟", color: "b" },
      g7: { symbol: "♟", color: "b" },
      h7: { symbol: "♟", color: "b" },
    },
  },
  {
    id: 2,
    title: "Queen & Bishop Battery",
    motif: "White to move · Mate in 1",
    notation: "1. Qh7#",
    from: "h5",
    to: "h7",
    hint: "Your Bishop on d3 guards h7. Bring the Queen in for the finishing blow.",
    pieces: {
      g1: { symbol: "♔", color: "w" },
      h5: { symbol: "♕", color: "w" },
      d3: { symbol: "♗", color: "w" },
      g8: { symbol: "♚", color: "b" },
      f8: { symbol: "♜", color: "b" },
      f7: { symbol: "♟", color: "b" },
      g7: { symbol: "♟", color: "b" },
    },
  },
  {
    id: 3,
    title: "Smothered Knight Mate",
    motif: "White to move · Mate in 1",
    notation: "1. Nf7#",
    from: "e5",
    to: "f7",
    hint: "The black king is boxed in by its rook and pawns. Jump the Knight to f7.",
    pieces: {
      g1: { symbol: "♔", color: "w" },
      e5: { symbol: "♘", color: "w" },
      h8: { symbol: "♚", color: "b" },
      g8: { symbol: "♜", color: "b" },
      g7: { symbol: "♟", color: "b" },
      h7: { symbol: "♟", color: "b" },
    },
  },
];

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = ["8", "7", "6", "5", "4", "3", "2", "1"];

export function ChessPuzzle() {
  const [puzzleIdx, setPuzzleIdx] = useState(0);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);
  const [wrongAttempt, setWrongAttempt] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const puzzle = PUZZLES[puzzleIdx];

  const currentPieces: Record<string, SquarePiece> = solved
    ? (() => {
        const next = { ...puzzle.pieces };
        const moving = next[puzzle.from];
        delete next[puzzle.from];
        next[puzzle.to] = moving;
        return next;
      })()
    : puzzle.pieces;

  const resetPuzzle = (nextIdx = puzzleIdx) => {
    setPuzzleIdx(nextIdx);
    setSelectedSquare(null);
    setSolved(false);
    setWrongAttempt(false);
    setShowHint(false);
  };

  const handleSquareClick = (sq: string) => {
    if (solved) return;
    setWrongAttempt(false);

    const piece = currentPieces[sq];

    if (!selectedSquare) {
      if (piece && piece.color === "w") {
        setSelectedSquare(sq);
      }
      return;
    }

    if (selectedSquare === sq) {
      setSelectedSquare(null);
      return;
    }

    if (piece && piece.color === "w") {
      setSelectedSquare(sq);
      return;
    }

    if (selectedSquare === puzzle.from && sq === puzzle.to) {
      setSolved(true);
      setSelectedSquare(null);
    } else {
      setWrongAttempt(true);
      setSelectedSquare(null);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-accent-2" />
            <span className="font-mono text-xs uppercase tracking-wider text-accent-2">
              Chess Corner
            </span>
          </div>
          <h3 className="mt-1 text-base font-semibold text-foreground">{puzzle.title}</h3>
          <p className="text-xs text-muted">{puzzle.motif}</p>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setShowHint((h) => !h)}
            title="Show hint"
            className="p-1.5 rounded-lg border border-border bg-surface-elevated text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <HelpCircle className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => resetPuzzle(puzzleIdx)}
            title="Reset puzzle"
            className="p-1.5 rounded-lg border border-border bg-surface-elevated text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* 8x8 Mini Board */}
      <div className="mx-auto w-full max-w-[248px] aspect-square rounded-xl overflow-hidden border border-border shadow-inner grid grid-cols-8 grid-rows-8 select-none">
        {RANKS.map((rank, rIdx) =>
          FILES.map((file, fIdx) => {
            const sq = `${file}${rank}`;
            const isLight = (rIdx + fIdx) % 2 === 0;
            const piece = currentPieces[sq];
            const isSelected = selectedSquare === sq;
            const isSolvedTarget = solved && sq === puzzle.to;

            return (
              <button
                key={sq}
                type="button"
                onClick={() => handleSquareClick(sq)}
                aria-label={`Square ${sq}`}
                className={`relative flex items-center justify-center text-lg sm:text-xl leading-none transition-colors cursor-pointer ${
                  isSolvedTarget
                    ? "bg-accent/75"
                    : isSelected
                    ? "bg-accent-2/70"
                    : isLight
                    ? "bg-zinc-200 hover:bg-zinc-100"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
              >
                {piece && (
                  <span
                    className={
                      piece.color === "w"
                        ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
                        : "text-zinc-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.35)]"
                    }
                  >
                    {piece.symbol}
                  </span>
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Status / Feedback */}
      <div className="mt-3 min-h-[44px] flex flex-col justify-end">
        {solved ? (
          <div className="flex items-center justify-between gap-2 rounded-xl border border-accent/40 bg-accent/15 px-3 py-2">
            <div className="flex items-center gap-2 text-xs font-medium text-accent">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Checkmate! {puzzle.notation}</span>
            </div>
            <button
              type="button"
              onClick={() => resetPuzzle((puzzleIdx + 1) % PUZZLES.length)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-accent cursor-pointer"
            >
              Next <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : wrongAttempt ? (
          <p className="text-xs text-accent-2 text-center font-medium">
            Not quite—look for a forcing checkmate in 1 move!
          </p>
        ) : showHint ? (
          <p className="text-xs text-accent-2 leading-snug">{puzzle.hint}</p>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
            <span>Click a white piece, then its target</span>
            <button
              type="button"
              onClick={() => resetPuzzle((puzzleIdx + 1) % PUZZLES.length)}
              className="text-foreground/80 hover:text-accent cursor-pointer"
            >
              Puzzle {puzzleIdx + 1}/{PUZZLES.length} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
