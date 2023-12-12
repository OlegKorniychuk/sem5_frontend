// Image component as a function
export function Image({ hasNewImage }) {
  return (
    <div id="images">
      <a href="https://www.prague.eu">
        <img src='/prague.jpg' alt='prague.jpg'/>
      </a>
    </div>
  );
}

export default Image;