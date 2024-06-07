export default function Contact() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div>
        <h1>Contact Us</h1>
        <p>
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[100px]"
            />
          </div>
        </form>
      </div>
      <footer>
        <button type="submit" className="w-full">
          Submit
        </button>
      </footer>
    </div>
  );
}
