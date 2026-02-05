export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-4">Страница не найдена</p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
} 