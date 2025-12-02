"use client";

export default function Pagination({ before, after, onPrev, onNext }: any) {
  return (
    <div className="flex items-center justify-center mt-6 card p-4">
      <div className="flex gap-3">
        <button
          disabled={!before}
          className="btn-outline"
          onClick={onPrev}
        >
          Previous
        </button>

        <button
          disabled={!after}
          className="btn-outline"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
