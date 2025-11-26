export function SealLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body - curved shape */}
      <path
        d="M8 12C8 9 9.5 7 12 7C14.5 7 16.5 8.5 17.5 10.5C18.5 12.5 18.5 14.5 17 16C15.5 17.5 13 18 11 17.5C9 17 8 15 8 12Z"
        fill="currentColor"
      />
      {/* Head */}
      <ellipse cx="6.5" cy="10.5" rx="2.8" ry="3.2" fill="currentColor" />
      {/* Snout */}
      <path
        d="M4 10.5C3.5 10.5 3 10.8 3 11.2C3 11.6 3.5 11.8 4 11.8C4.3 11.8 4.5 11.6 4.5 11.2C4.5 10.8 4.3 10.5 4 10.5Z"
        fill="currentColor"
      />
      {/* Eye */}
      <circle cx="6.5" cy="9.5" r="0.8" fill="white" />
      {/* Back flipper */}
      <path
        d="M15.5 14.5C16.5 15 17.5 15.5 18.5 16.5C19 17 19.5 17.5 19.5 18C19.5 18.5 19 18.5 18.5 18C17.5 17 16.5 16 15.5 15.5L15.5 14.5Z"
        fill="currentColor"
      />
      {/* Front flipper */}
      <path
        d="M9 14C8.5 14.5 8 15.5 7.5 16.5C7 17.5 7 18 6.5 18.5C6 19 5.5 18.5 6 17.5C6.5 16.5 7.5 15 8.5 14.5L9 14Z"
        fill="currentColor"
      />
      {/* Tail */}
      <path
        d="M17 15C17.5 15.5 18.5 16.5 19.5 17.5C20 18 20.5 18.5 21 18.5C21.5 18.5 21.5 18 21 17.5C20.5 17 19.5 16 18.5 15.5C18 15 17.5 14.8 17 15Z"
        fill="currentColor"
      />
    </svg>
  );
}