import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // durasi loading

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-300 text-sm tracking-widest">
          Loading Portfolio...
        </p>

      </div>
    </div>
  );
};

export default PreLoader;