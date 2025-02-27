export default function Heading({ heading }: { heading: string }) {
  return (
    <h2 className='text-4xl sm:text-5xl mb-12 sm:mb-24 text-left'>{heading}</h2>
  );
}
