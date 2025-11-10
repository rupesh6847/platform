// import { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import Select from 'react-select';

// const dayOptions = [
//   { value: 'Monday', label: 'Monday' },
//   { value: 'Tuesday', label: 'Tuesday' },
//   { value: 'Wednesday', label: 'Wednesday' },
//   { value: 'Thursday', label: 'Thursday' },
//   { value: 'Friday', label: 'Friday' },
//   { value: 'Saturday', label: 'Saturday' },
//   { value: 'Sunday', label: 'Sunday' },
//   { value: 'FrontLoad', label: 'FrontLoad' },
// ];

// const clients = [
//   { value: 'PH', label: 'PH' },
//   { value: 'LPM', label: 'LPM' },
// ];

// const CampaignBuilder = () => {
//   const [campaign, setCampaign] = useState({
//     id: Date.now(),
//     CampaignName: '',
//     Code: '',
//     LeadGoal: '',
//     Volumes: [{ key: '', value: '' }],
//     Deadline: '',
//     FirstUploadDate: '',
//     WeeklyUploadDay: [],
//     clients: [],
//     ContactsPerCompany: '',
//     Pacing: 'Even',
//     ClientSelect: 1,
//     Content: [{ category: '', titles: [''] }],
//     AdditionalInformation: '',
//     Files: [{ name: '', link: '', date: '' }],
//     DescriptionOfFilesAttached: '',
//   });

//   const handleChange = (field, value) => {
//     setCampaign((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleVolumeChange = (index, field, value) => {
//     const newVolumes = [...campaign.Volumes];
//     newVolumes[index][field] = value;
//     setCampaign({ ...campaign, Volumes: newVolumes });
//   };

//   const handleContentChange = (index, field, value) => {
//     const newContent = [...campaign.Content];
//     newContent[index][field] = value;
//     setCampaign({ ...campaign, Content: newContent });
//   };

//   const handleTitleChange = (contentIndex, titleIndex, value) => {
//     const newContent = [...campaign.Content];
//     newContent[contentIndex].titles[titleIndex] = value;
//     setCampaign({ ...campaign, Content: newContent });
//   };

//   const addField = (key) => {
//     if (key === 'Volumes')
//       setCampaign({
//         ...campaign,
//         Volumes: [...campaign.Volumes, { key: '', value: '' }],
//       });
//     if (key === 'Content')
//       setCampaign({
//         ...campaign,
//         Content: [...campaign.Content, { category: '', titles: [''] }],
//       });
//     if (key === 'Files')
//       setCampaign({
//         ...campaign,
//         Files: [...campaign.Files, { name: '', link: '', date: '' }],
//       });
//   };

//   const removeField = (key, index) => {
//     setCampaign({
//       ...campaign,
//       [key]: campaign[key].filter((_, i) => i !== index),
//     });
//   };

//   const addTitle = (contentIndex) => {
//     const newContent = [...campaign.Content];
//     newContent[contentIndex].titles.push('');
//     setCampaign({ ...campaign, Content: newContent });
//   };

//   const removeTitle = (contentIndex, titleIndex) => {
//     const newContent = [...campaign.Content];
//     newContent[contentIndex].titles.splice(titleIndex, 1);
//     setCampaign({ ...campaign, Content: newContent });
//   };

//   // ✅ File Drop Handler added
//   const handleFileDrop = (files) => {
//     const uploadedFiles = files.map((file) => ({
//       name: file.name,
//       link: URL.createObjectURL(file),
//       date: new Date().toISOString(),
//     }));
//     setCampaign((prev) => ({
//       ...prev,
//       Files: [...prev.Files, ...uploadedFiles],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Campaign created successfully!');
//     console.log('Final Campaign Data:', campaign);
//   };

//   console.log(campaign, 'campaign');

//   return (
//     <div className="mt-6 border rounded-2xl bg-white p-6">
//       <h2 className="text-xl font-semibold mb-6">Campaign Builder</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Basic Info */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Campaign Name"
//             className="border p-2 rounded"
//             value={campaign.CampaignName}
//             onChange={(e) => handleChange('CampaignName', e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Code"
//             className="border p-2 rounded"
//             value={campaign.Code}
//             onChange={(e) => handleChange('Code', e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Lead Goal"
//             className="border p-2 rounded"
//             value={campaign.LeadGoal}
//             onChange={(e) => handleChange('LeadGoal', e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Contacts per Company"
//             className="border p-2 rounded"
//             value={campaign.ContactsPerCompany}
//             onChange={(e) => handleChange('ContactsPerCompany', e.target.value)}
//           />

//           {/* Weekly Upload Days */}
//           <div>
//             <label className="text-sm font-medium">Client</label>
//             <Select
//               isMulti
//               name="weeklyDays"
//               options={clients}
//               className="basic-multi-select mt-1"
//               classNamePrefix="select"
//               placeholder="Select one or more clients..."
//               value={clients.filter((d) => campaign.clients?.includes(d.value))}
//               onChange={(selected) =>
//                 handleChange(
//                   'clients',
//                   selected ? selected.map((s) => s.value) : []
//                 )
//               }
//             />
//           </div>
//         </div>

//         {/* Dates */}
//         <div className="grid grid-cols-2 gap-4">
//           <label className="text-sm">
//             Deadline:
//             <input
//               type="date"
//               className="border p-2 rounded w-full"
//               value={campaign.Deadline}
//               onChange={(e) => handleChange('Deadline', e.target.value)}
//             />
//           </label>
//           <label className="text-sm">
//             First Upload Date:
//             <input
//               type="date"
//               className="border p-2 rounded w-full"
//               value={campaign.FirstUploadDate}
//               onChange={(e) => handleChange('FirstUploadDate', e.target.value)}
//             />
//           </label>
//         </div>

//         {/* Weekly Upload Days */}
//         <div>
//           <label className="text-sm font-medium">Weekly Upload Days</label>
//           <Select
//             isMulti
//             name="weeklyDays"
//             options={dayOptions}
//             className="basic-multi-select mt-1"
//             classNamePrefix="select"
//             placeholder="Select one or more days..."
//             value={dayOptions.filter((d) =>
//               campaign.WeeklyUploadDay?.includes(d.value)
//             )}
//             onChange={(selected) =>
//               handleChange(
//                 'WeeklyUploadDay',
//                 selected ? selected.map((s) => s.value) : []
//               )
//             }
//           />
//         </div>

//         {/* Volumes */}
//         <div>
//           <div className="flex justify-between items-center">
//             <h3 className="font-medium">Volumes</h3>
//             <button
//               type="button"
//               onClick={() => addField('Volumes')}
//               className="text-blue-500 text-sm"
//             >
//               + Add
//             </button>
//           </div>
//           {campaign.Volumes.map((v, i) => (
//             <div key={i} className="flex gap-2 mt-2">
//               <input
//                 placeholder="Key (e.g. Japan-AI)"
//                 value={v.key}
//                 className="border p-2 rounded w-1/2"
//                 onChange={(e) => handleVolumeChange(i, 'key', e.target.value)}
//               />
//               <input
//                 placeholder="Value"
//                 value={v.value}
//                 className="border p-2 rounded w-1/2"
//                 onChange={(e) => handleVolumeChange(i, 'value', e.target.value)}
//               />
//               {i > 0 && (
//                 <button
//                   type="button"
//                   onClick={() => removeField('Volumes', i)}
//                   className="text-red-500"
//                 >
//                   ✕
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Content */}
//         <div>
//           <div className="flex justify-between items-center">
//             <h3 className="font-medium">Content</h3>
//             <button
//               type="button"
//               onClick={() => addField('Content')}
//               className="text-blue-500 text-sm"
//             >
//               + Add
//             </button>
//           </div>
//           {campaign.Content.map((c, i) => (
//             <div key={i} className="border p-3 rounded mt-2 space-y-2">
//               <input
//                 placeholder="Category (e.g. AI)"
//                 value={c.category}
//                 className="border p-2 rounded w-full"
//                 onChange={(e) =>
//                   handleContentChange(i, 'category', e.target.value)
//                 }
//               />
//               {c.titles.map((t, ti) => (
//                 <div key={ti} className="flex gap-2">
//                   <input
//                     placeholder="Title"
//                     value={t}
//                     className="border p-2 rounded w-full"
//                     onChange={(e) => handleTitleChange(i, ti, e.target.value)}
//                   />
//                   {/* <textarea
//                     placeholder="Title"
//                     value={t}
//                     className="border p-2 rounded w-full"
//                     onChange={(e) => handleTitleChange(i, ti, e.target.value)}
//                   /> */}

//                   {ti > 0 && (
//                     <button
//                       type="button"
//                       onClick={() => removeTitle(i, ti)}
//                       className="text-red-500"
//                     >
//                       ✕
//                     </button>
//                   )}
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => addTitle(i)}
//                 className="text-blue-500 text-sm"
//               >
//                 + Add Title
//               </button>
//               {i > 0 && (
//                 <button
//                   type="button"
//                   onClick={() => removeField('Content', i)}
//                   className="text-red-500 text-sm ml-2"
//                 >
//                   Remove Category
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Files */}
//         <div>
//           <div className="flex justify-between items-center">
//             <h3 className="font-medium">Files</h3>
//           </div>
//           <div className="grid grid-cols-1 gap-2 mt-2">
//             <div
//               className="mt-3 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
//               onDragOver={(e) => e.preventDefault()}
//               onDrop={(e) => {
//                 e.preventDefault();
//                 const droppedFiles = Array.from(e.dataTransfer.files);
//                 handleFileDrop(droppedFiles);
//               }}
//             >
//               <p className="text-gray-600">
//                 Drag & drop files here or{' '}
//                 <label className="text-blue-600 cursor-pointer underline">
//                   browse
//                   <input
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={(e) => handleFileDrop(Array.from(e.target.files))}
//                   />
//                 </label>
//               </p>
//             </div>

//             {/* File list preview */}
//             {campaign.Files?.length > 0 &&
//               campaign.Files.map((file, i) => (
//                 <div
//                   key={i}
//                   className="flex justify-between p-2 border rounded"
//                 >
//                   <span>{file.name}</span>
//                   <a
//                     href={file.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 text-sm"
//                   >
//                     View
//                   </a>
//                 </div>
//               ))}
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div>
//           <h3 className="font-medium mb-2">Additional Information</h3>
//           <ReactQuill
//             theme="snow"
//             value={campaign.AdditionalInformation}
//             onChange={(value) => handleChange('AdditionalInformation', value)}
//             className="bg-white rounded"
//             placeholder="Type or paste formatted content..."
//           />
//         </div>

//         <div>
//           <h3 className="font-medium">Description of Files Attached</h3>
//           <ReactQuill
//             theme="snow"
//             value={campaign.DescriptionOfFilesAttached}
//             onChange={(value) =>
//               handleChange('DescriptionOfFilesAttached', value)
//             }
//             className="bg-white rounded"
//             placeholder="Type or paste formatted content..."
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//         >
//           Create Campaign
//         </button>
//       </form>

//       {/* JSON Preview */}
//       <div className="mt-8">
//         <h3 className="font-medium mb-2">Live JSON Preview</h3>
//         <textarea
//           className="w-full border p-3 rounded font-mono text-sm h-80"
//           value={JSON.stringify(campaign, null, 2)}
//           onChange={(e) => {
//             try {
//               const parsed = JSON.parse(e.target.value);
//               setCampaign(parsed);
//             } catch {
//               // ignore invalid JSON
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default CampaignBuilder;
import { useState, useCallback, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import { toast } from 'react-hot-toast';

const dayOptions = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sunday', label: 'Sunday' },
  { value: 'FrontLoad', label: 'FrontLoad' },
];

const clients = [
  { value: 'PH', label: 'PH' },
  { value: 'LPM', label: 'LPM' },
];

// Dropbox upload hook
const useDropboxUpload = () => {
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const refreshAccessToken = async () => {
    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token:
        'Ff0cBVnofU4AAAAAAAAAAUdSbY-ni54OXM66OQFPtLTK5jTvh4IhZ_MzY76WpMOI',
      client_id: '7vv35hpzk53zf9e',
      client_secret: 'b37u7y698fad99s',
    });

    const response = await fetch('https://api.dropbox.com/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    if (!response.ok) throw new Error('Failed to refresh token');
    return (await response.json()).access_token;
  };

  const uploadFileToDropbox = useCallback(
    async (file, folderPath, onProgress) => {
      try {
        const token = await refreshAccessToken();

        // Convert file to array buffer
        const arrayBuffer = await file.arrayBuffer();

        const path = `${folderPath}/${file.name}`;

        const response = await fetch(
          'https://content.dropboxapi.com/2/files/upload',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/octet-stream',
              'Dropbox-API-Arg': JSON.stringify({
                path: path,
                mode: 'add',
                autorename: true,
                mute: false,
              }),
            },
            body: arrayBuffer,
          }
        );

        if (!response.ok) throw new Error('Upload failed');

        const result = await response.json();

        // Create shared link
        const shareResponse = await fetch(
          'https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              path: result.path_lower,
              settings: {
                requested_visibility: 'public',
              },
            }),
          }
        );

        let shareLink;
        if (shareResponse.ok) {
          const shareResult = await shareResponse.json();
          shareLink = shareResult.url.replace('dl=0', 'raw=1');
        } else {
          // Try to get existing link
          const listResponse = await fetch(
            'https://api.dropboxapi.com/2/sharing/list_shared_links',
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                path: result.path_lower,
                direct_only: true,
              }),
            }
          );

          if (listResponse.ok) {
            const listResult = await listResponse.json();
            shareLink = listResult.links[0]?.url.replace('dl=0', 'raw=1');
          }
        }

        return {
          name: file.name,
          link:
            shareLink ||
            `https://www.dropbox.com/scl/fi/${result.id}?rlkey=download&raw=1`,
          date: new Date().toISOString(),
          size: file.size,
          type: file.type,
        };
      } catch (error) {
        console.error('Upload error:', error);
        throw error;
      }
    },
    []
  );

  const createFolder = useCallback(async (folderPath) => {
    try {
      const token = await refreshAccessToken();

      const response = await fetch(
        'https://api.dropboxapi.com/2/files/create_folder_v2',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            path: folderPath,
            autorename: false,
          }),
        }
      );

      // If folder already exists (409), that's fine
      if (!response.ok && response.status !== 409) {
        throw new Error('Failed to create folder');
      }

      return true;
    } catch (error) {
      console.error('Folder creation error:', error);
      throw error;
    }
  }, []);

  const uploadFiles = useCallback(
    async (files, folderName) => {
      if (!files || files.length === 0) return [];

      setIsUploading(true);
      setUploadProgress({});

      const folderPath = `/${folderName}`;

      try {
        // Create folder first
        await createFolder(folderPath);

        const uploadPromises = files.map(async (file, index) => {
          try {
            const result = await uploadFileToDropbox(
              file,
              folderPath,
              (progress) => {
                setUploadProgress((prev) => ({
                  ...prev,
                  [file.name]: progress,
                }));
              }
            );

            setUploadProgress((prev) => ({
              ...prev,
              [file.name]: 100,
            }));

            return result;
          } catch (error) {
            console.error(`Failed to upload ${file.name}:`, error);
            throw error;
          }
        });

        const results = await Promise.all(uploadPromises);
        setIsUploading(false);
        return results;
      } catch (error) {
        setIsUploading(false);
        throw error;
      }
    },
    [createFolder, uploadFileToDropbox]
  );

  return {
    uploadFiles,
    uploadProgress,
    isUploading,
  };
};

const CampaignBuilder = () => {
  const [campaign, setCampaign] = useState({
    id: Date.now(),
    CampaignName: '',
    Code: '',
    LeadGoal: '',
    Volumes: [{ key: '', value: '' }],
    Deadline: '',
    FirstUploadDate: '',
    WeeklyUploadDay: [],
    clients: [],
    ContactsPerCompany: '',
    Pacing: 'Even',
    ClientSelect: 1,
    Content: [{ category: '', titles: [''] }],
    AdditionalInformation: '',
    Files: [],
    DescriptionOfFilesAttached: '',
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const { uploadFiles, uploadProgress, isUploading } = useDropboxUpload();

  // Load from localStorage on component mount
  useState(() => {
    const savedCampaign = localStorage.getItem('campaignBuilder');
    const savedFiles = localStorage.getItem('campaignFiles');

    if (savedCampaign) {
      setCampaign(JSON.parse(savedCampaign));
    }
    if (savedFiles) {
      setSelectedFiles(JSON.parse(savedFiles));
    }
  }, []);

  // Save to localStorage whenever campaign or files change
  useState(() => {
    localStorage.setItem('campaignBuilder', JSON.stringify(campaign));
    localStorage.setItem('campaignFiles', JSON.stringify(selectedFiles));
  }, [campaign, selectedFiles]);

  const handleChange = (field, value) => {
    setCampaign((prev) => ({ ...prev, [field]: value }));
  };

  const handleVolumeChange = (index, field, value) => {
    const newVolumes = [...campaign.Volumes];
    newVolumes[index][field] = value;
    setCampaign({ ...campaign, Volumes: newVolumes });
  };

  const handleContentChange = (index, field, value) => {
    const newContent = [...campaign.Content];
    newContent[index][field] = value;
    setCampaign({ ...campaign, Content: newContent });
  };

  const handleTitleChange = (contentIndex, titleIndex, value) => {
    const newContent = [...campaign.Content];
    newContent[contentIndex].titles[titleIndex] = value;
    setCampaign({ ...campaign, Content: newContent });
  };

  const addField = (key) => {
    if (key === 'Volumes')
      setCampaign({
        ...campaign,
        Volumes: [...campaign.Volumes, { key: '', value: '' }],
      });
    if (key === 'Content')
      setCampaign({
        ...campaign,
        Content: [...campaign.Content, { category: '', titles: [''] }],
      });
  };

  const removeField = (key, index) => {
    setCampaign({
      ...campaign,
      [key]: campaign[key].filter((_, i) => i !== index),
    });
  };

  const addTitle = (contentIndex) => {
    const newContent = [...campaign.Content];
    newContent[contentIndex].titles.push('');
    setCampaign({ ...campaign, Content: newContent });
  };

  const removeTitle = (contentIndex, titleIndex) => {
    const newContent = [...campaign.Content];
    newContent[contentIndex].titles.splice(titleIndex, 1);
    setCampaign({ ...campaign, Content: newContent });
  };

  // Handle file selection
  const handleFileSelect = (files) => {
    const newFiles = Array.from(files).map((file) => ({
      file,
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
    }));

    setSelectedFiles((prev) => [...prev, ...newFiles]);
  };

  // Remove file from selection
  const removeSelectedFile = (fileId) => {
    setSelectedFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  // Handle file drop
  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileSelect(files);
  };

  // Handle file input change
  const handleFileInputChange = (e) => {
    const files = e.target.files;
    handleFileSelect(files);
    // Reset input
    e.target.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!campaign.CampaignName || !campaign.Code) {
      toast.error('Please enter Campaign Name and Code before submitting');
      return;
    }

    if (selectedFiles.length === 0) {
      toast.error('Please select at least one file to upload');
      return;
    }

    setIsSubmitting(true);

    try {
      const folderName = `${campaign.CampaignName}_${campaign.Code}`.replace(
        /[^a-zA-Z0-9_-]/g,
        '_'
      );

      toast.loading('Uploading files to Dropbox...', { id: 'upload' });

      const uploadedFiles = await uploadFiles(
        selectedFiles.map((f) => f.file),
        folderName
      );

      // Update campaign with uploaded files
      setCampaign((prev) => ({
        ...prev,
        Files: [...prev.Files, ...uploadedFiles],
      }));

      // Clear selected files after successful upload
      setSelectedFiles([]);
      localStorage.removeItem('campaignFiles');

      toast.success('Campaign created and files uploaded successfully!', {
        id: 'upload',
      });
      console.log('Final Campaign Data:', {
        ...campaign,
        Files: uploadedFiles,
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to upload files. Please try again.', {
        id: 'upload',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileType) => {
    if (fileType.includes('image')) return '🖼️';
    if (fileType.includes('pdf')) return '📄';
    if (fileType.includes('word') || fileType.includes('document')) return '📝';
    if (fileType.includes('excel') || fileType.includes('spreadsheet'))
      return '📊';
    if (fileType.includes('zip') || fileType.includes('compressed'))
      return '📦';
    return '📎';
  };

  return (
    <div className="mt-6 border rounded-2xl bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Campaign Builder</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Campaign Name *"
              className="border p-2 rounded w-full"
              value={campaign.CampaignName}
              onChange={(e) => handleChange('CampaignName', e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Code *"
              className="border p-2 rounded w-full"
              value={campaign.Code}
              onChange={(e) => handleChange('Code', e.target.value)}
              required
            />
          </div>
          <input
            type="number"
            placeholder="Lead Goal"
            className="border p-2 rounded"
            value={campaign.LeadGoal}
            onChange={(e) => handleChange('LeadGoal', e.target.value)}
          />
          <input
            type="number"
            placeholder="Contacts per Company"
            className="border p-2 rounded"
            value={campaign.ContactsPerCompany}
            onChange={(e) => handleChange('ContactsPerCompany', e.target.value)}
          />

          {/* Client Selection */}
          <div>
            <label className="text-sm font-medium">Client</label>
            <Select
              isMulti
              name="weeklyDays"
              options={clients}
              className="basic-multi-select mt-1"
              classNamePrefix="select"
              placeholder="Select one or more clients..."
              value={clients.filter((d) => campaign.clients?.includes(d.value))}
              onChange={(selected) =>
                handleChange(
                  'clients',
                  selected ? selected.map((s) => s.value) : []
                )
              }
            />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <label className="text-sm">
            Deadline:
            <input
              type="date"
              className="border p-2 rounded w-full"
              value={campaign.Deadline}
              onChange={(e) => handleChange('Deadline', e.target.value)}
            />
          </label>
          <label className="text-sm">
            First Upload Date:
            <input
              type="date"
              className="border p-2 rounded w-full"
              value={campaign.FirstUploadDate}
              onChange={(e) => handleChange('FirstUploadDate', e.target.value)}
            />
          </label>
        </div>

        {/* Weekly Upload Days */}
        <div>
          <label className="text-sm font-medium">Weekly Upload Days</label>
          <Select
            isMulti
            name="weeklyDays"
            options={dayOptions}
            className="basic-multi-select mt-1"
            classNamePrefix="select"
            placeholder="Select one or more days..."
            value={dayOptions.filter((d) =>
              campaign.WeeklyUploadDay?.includes(d.value)
            )}
            onChange={(selected) =>
              handleChange(
                'WeeklyUploadDay',
                selected ? selected.map((s) => s.value) : []
              )
            }
          />
        </div>

        {/* Volumes */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Volumes</h3>
            <button
              type="button"
              onClick={() => addField('Volumes')}
              className="text-blue-500 text-sm"
            >
              + Add
            </button>
          </div>
          {campaign.Volumes.map((v, i) => (
            <div key={i} className="flex gap-2 mt-2">
              <input
                placeholder="Key (e.g. Japan-AI)"
                value={v.key}
                className="border p-2 rounded w-1/2"
                onChange={(e) => handleVolumeChange(i, 'key', e.target.value)}
              />
              <input
                placeholder="Value"
                value={v.value}
                className="border p-2 rounded w-1/2"
                onChange={(e) => handleVolumeChange(i, 'value', e.target.value)}
              />
              {i > 0 && (
                <button
                  type="button"
                  onClick={() => removeField('Volumes', i)}
                  className="text-red-500"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Content</h3>
            <button
              type="button"
              onClick={() => addField('Content')}
              className="text-blue-500 text-sm"
            >
              + Add
            </button>
          </div>
          {campaign.Content.map((c, i) => (
            <div key={i} className="border p-3 rounded mt-2 space-y-2">
              <input
                placeholder="Category (e.g. AI)"
                value={c.category}
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleContentChange(i, 'category', e.target.value)
                }
              />
              {c.titles.map((t, ti) => (
                <div key={ti} className="flex gap-2">
                  <input
                    placeholder="Title"
                    value={t}
                    className="border p-2 rounded w-full"
                    onChange={(e) => handleTitleChange(i, ti, e.target.value)}
                  />
                  {ti > 0 && (
                    <button
                      type="button"
                      onClick={() => removeTitle(i, ti)}
                      className="text-red-500"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addTitle(i)}
                className="text-blue-500 text-sm"
              >
                + Add Title
              </button>
              {i > 0 && (
                <button
                  type="button"
                  onClick={() => removeField('Content', i)}
                  className="text-red-500 text-sm ml-2"
                >
                  Remove Category
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Files Upload Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Files</h3>
            <span className="text-sm text-gray-500">
              {selectedFiles.length} file(s) selected
            </span>
          </div>

          {/* File Drop Zone */}
          <div
            className="mt-3 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <p className="text-gray-600">
              Drag & drop files here or{' '}
              <span className="text-blue-600 underline">browse</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Supports multiple files selection
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleFileInputChange}
            />
          </div>

          {/* Selected Files List */}
          {selectedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <h4 className="font-medium text-sm">Selected Files:</h4>
              {selectedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-3 border rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <span className="text-lg">{getFileIcon(file.type)}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeSelectedFile(file.id)}
                    className="text-red-500 hover:text-red-700 ml-2 p-1"
                    disabled={isUploading || isSubmitting}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Upload Progress */}
          {(isUploading || isSubmitting) && (
            <div className="mt-4 space-y-2">
              <h4 className="font-medium text-sm">Upload Progress:</h4>
              {selectedFiles.map((file) => (
                <div key={file.id} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="truncate">{file.name}</span>
                    <span>{uploadProgress[file.name] || 0}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress[file.name] || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Already Uploaded Files */}
          {campaign.Files.length > 0 && (
            <div className="mt-4 space-y-2">
              <h4 className="font-medium text-sm">Uploaded Files:</h4>
              {campaign.Files.map((file, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 border rounded"
                >
                  <div className="flex items-center space-x-2">
                    <span>{getFileIcon(file.type)}</span>
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <a
                    href={file.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="font-medium mb-2">Additional Information</h3>
          <ReactQuill
            theme="snow"
            value={campaign.AdditionalInformation}
            onChange={(value) => handleChange('AdditionalInformation', value)}
            className="bg-white rounded"
            placeholder="Type or paste formatted content..."
          />
        </div>

        <div>
          <h3 className="font-medium">Description of Files Attached</h3>
          <ReactQuill
            theme="snow"
            value={campaign.DescriptionOfFilesAttached}
            onChange={(value) =>
              handleChange('DescriptionOfFilesAttached', value)
            }
            className="bg-white rounded"
            placeholder="Type or paste formatted content..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isUploading || selectedFiles.length === 0}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting || isUploading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Uploading...
            </span>
          ) : (
            'Create Campaign & Upload Files'
          )}
        </button>
      </form>

      {/* JSON Preview */}
      <div className="mt-8">
        <h3 className="font-medium mb-2">Live JSON Preview</h3>
        <textarea
          className="w-full border p-3 rounded font-mono text-sm h-80"
          value={JSON.stringify(campaign, null, 2)}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value);
              setCampaign(parsed);
            } catch {
              // ignore invalid JSON
            }
          }}
        />
      </div>
    </div>
  );
};

export default CampaignBuilder;
