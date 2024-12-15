import StarRate from '.';

export default function StarRatePage() {
  return (
    <div>
      <h3>default</h3>
      <StarRate rate={1} />
      <StarRate rate={3.3} />
      <StarRate rate={3.7} />
      <StarRate rate={5} />
      <h3>with text</h3>
      <StarRate showRate rate={3.3} />
      <StarRate showRate rate={3.7} />
    </div>
  );
}
