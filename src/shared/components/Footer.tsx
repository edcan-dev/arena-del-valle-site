export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-800">
      <p>&copy; {new Date().getFullYear()} <strong>Arena del Valle – Lucha Libre</strong></p>
      <p className="text-sky-400 mt-1 font-semibold">Penta El Zero Miedo</p>
    </footer>
  );
};
