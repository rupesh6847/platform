import { FolderPlus, SquarePen, Trash } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormatDate } from '../../../../lib/FormatDate';

export const Content = ({ data, campaignId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    type: '',
    approveDate: '',
    optinType: '',
    category: '',
  });

  const handleAddContent = async (data) => {
    const newContent = { ...data };

    try {
      const response = await fetch(`http://localhost:3000/campaigns/${campaignId}/content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContent),
      });

      if (!response.ok) throw new Error('Failed to upload content');
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditContent = async (data) => {
    console.log(data, 'data');

    try {
      await fetch(`http://localhost:3000/campaigns/${campaignId}/content?contentId=${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteContent = async (content) => {
    try {
      const response = await fetch(
        `http://localhost:3000/campaigns/${campaignId}/content?contentId=${content.id}&category=${content.categoryName}`,

        {
          method: 'DELETE',
        }
      );
      if (!response.ok) throw new Error('Failed to delete content');
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  };

  const openAddModal = (category = '') => {
    setFormData({
      title: '',
      type: '',
      approveDate: '',
      optinType: '',
      category,
    });
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  // const openEditModal = (content, categoryName) => {
  //   setFormData({ ...content, categoryName });
  //   setIsEditMode(true);
  //   setIsModalOpen(true);
  // };

  const openEditModal = (content, categoryName) => {
    setFormData({
      id: content.id,
      title: content.title || '',
      type: content.type || '',
      optinType: content.optinType || '',
      approveDate: content.approveDate ? content.approveDate.split('T')[0] : '',
      // category: categoryName || '', // ✅ use category instead of categoryName
    });
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const openDeleteModal = (content, categoryName) => {
    setDeleteTarget({ ...content, categoryName });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.type) {
      alert('Please provide both Title and Type.');
      return;
    }

    if (isEditMode) {
      await handleEditContent(formData);
    } else {
      await handleAddContent(formData);
    }
    setIsModalOpen(false);
  };

  const confirmDelete = async () => {
    if (deleteTarget) {
      await handleDeleteContent(deleteTarget);
      setDeleteTarget(null);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Content</h4>
        <button onClick={() => openAddModal('')} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <FolderPlus size={18} />
        </button>
      </div>

      <div className="dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 space-y-4 text-sm">
        {data?.map((category) => (
          <div key={category.categoryName}>
            <p className="font-medium text-gray-900 dark:text-white mb-2">{category.categoryName}:</p>
            <ol className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
              {category.content.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <span>{item.title}</span>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                      ({item.type} | {item.optinType} | Approved: {FormatDate(item.approveDate)})
                    </span>
                  </div>
                  <div className="flex gap-2 ml-3">
                    <button
                      onClick={() => openEditModal(item, category.categoryName)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <SquarePen size={16} />
                    </button>
                    <button
                      onClick={() => openDeleteModal(item, category.categoryName)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-md"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <h3 className="text-lg font-semibold mb-4">{isEditMode ? 'Edit Content' : 'Add New Content'}</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm mb-1">Category</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Title</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Type</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Opt-in Type</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    value={formData.optinType}
                    onChange={(e) => setFormData({ ...formData, optinType: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Approval Date</label>
                  <input
                    type="date"
                    className="w-full border rounded-lg p-2"
                    value={formData.approveDate}
                    onChange={(e) => setFormData({ ...formData, approveDate: e.target.value })}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                    {isEditMode ? 'Save Changes' : 'Add Content'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {deleteTarget && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-sm text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            >
              <h3 className="text-lg font-semibold mb-3">Confirm Delete</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Are you sure you want to delete{' '}
                <span className="font-semibold text-red-500">"{deleteTarget?.title}"</span> from{' '}
                {deleteTarget?.categoryName}?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setDeleteTarget(null)}
                  className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
                >
                  Cancel
                </button>
                <button onClick={confirmDelete} className="px-4 py-2 rounded bg-red-600 text-white">
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
