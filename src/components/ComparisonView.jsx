import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

// Custom Modal Component
const CustomModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

// Rich Card View for Modal

const ComparisonCardView = ({ products, onRemove }) => {
  const allFeatureNames = [
    ...new Set(products.flatMap((p) => p.features.map((f) => f.name))),
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 relative"
        >
          <button
            onClick={() => onRemove(product.id)}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex flex-col items-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-28 h-28 object-contain"
            />
            <h3 className="font-semibold text-center mt-2">{product.name}</h3>
            <p className="text-blue-600 font-bold text-lg">
              ${product.price.toFixed(2)}
            </p>
            <span className="text-sm text-gray-500">{product.brand}</span>
          </div>
          <div className="text-sm divide-y">
            {allFeatureNames.map((featureName) => {
              const val =
                product.features.find((f) => f.name === featureName)?.value ||
                "—";
              return (
                <div key={featureName} className="flex justify-between py-2">
                  <span className="font-medium text-gray-700">
                    {featureName}
                  </span>
                  <span className="text-gray-900">{val}</span>
                </div>
              );
            })}
            {product.description && (
              <div className="py-2">
                <span className="font-medium text-gray-700">Description:</span>
                <p className="text-gray-800 mt-1">{product.description}</p>
              </div>
            )}
            <div className="flex justify-between py-2">
              <span className="font-medium text-gray-700">Stock:</span>
              <span className="text-green-600">{product.stock || "—"}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium text-gray-700">Warranty:</span>
              <span className="text-gray-800">{product.warranty || "—"}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium text-gray-700">Dimensions:</span>
              <span className="text-gray-800">{product.dimensions || "—"}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium text-gray-700">Shipping:</span>
              <span className="text-gray-800">{product.shipping || "—"}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Comparison Table Component
const ComparisonTable = ({ products, onRemove }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  if (products.length < 2) {
    return (
      <p className="text-center text-gray-500 p-8">
        Select at least 2 products to compare.
      </p>
    );
  }

  const allFeatureNames = [
    ...new Set(products.flatMap((p) => p.features.map((f) => f.name))),
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">🆚 Product Comparison</h2>
      <div className="overflow-auto">
        <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700 text-sm">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-left">Attribute</th>
              {products.map((p) => (
                <th key={p.id} className="p-3 text-left">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700">
            <tr>
              <td className="p-3 font-medium">Price</td>
              {products.map((p) => (
                <td key={p.id} className="p-3">
                  ${p.price}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 font-medium">Brand</td>
              {products.map((p) => (
                <td key={p.id} className="p-3">
                  {p.brand}
                </td>
              ))}
            </tr>
            {allFeatureNames.map((featureName) => (
              <tr key={featureName}>
                <td className="p-3 font-medium">{featureName}</td>
                {products.map((product) => {
                  const val =
                    product.features.find((f) => f.name === featureName)
                      ?.value || "—";
                  return (
                    <td key={product.id} className="p-3">
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  ================>    View Details Card     <============  */}

      <div className="mt-6 text-center">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-full transition"
        >
          View Detailed Cards
        </button>
      </div>

      {/* Custom Modal */}
      <CustomModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">🧾 Detailed Product Cards</h2>
        <ComparisonCardView products={products} onRemove={onRemove} />
      </CustomModal>
    </div>
  );
};

export default ComparisonTable;
