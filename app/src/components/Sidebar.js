export default function Sidebar({ isOpen }) {
  return (
    <section className={`w-20 h-full p-4 ${isOpen && 'w-auto'}`}>
      <nav>
        {[...Array(8).keys()].map(key => (
          <li key={key} className='list-none'>
            <a href='key'>{key}</a>
          </li>
        ))}
      </nav>
    </section>
  );
}
