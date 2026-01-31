export default function BackgroundStars() {
  return (
    <div className="stars-bg">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="shooting-star" />
      ))}
    </div>
  );
}
