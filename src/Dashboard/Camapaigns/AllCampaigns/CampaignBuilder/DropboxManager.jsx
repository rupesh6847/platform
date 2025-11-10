// import { useState, useEffect, useCallback, useMemo } from 'react';
// import { Dropbox } from 'dropbox';
// import { toast } from 'react-hot-toast';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from '@/SmallComponents/Table';
// import ImageWithFallback from '@/SmallComponents/ImageWithFallback';

// // Simplified token refresh function
// const refreshAccessToken = async () => {
//   const params = new URLSearchParams({
//     grant_type: 'refresh_token',
//     refresh_token:
//       'Ff0cBVnofU4AAAAAAAAAAUdSbY-ni54OXM66OQFPtLTK5jTvh4IhZ_MzY76WpMOI',
//     client_id: '7vv35hpzk53zf9e',
//     client_secret: 'b37u7y698fad99s',
//   });

//   const response = await fetch('https://api.dropbox.com/oauth2/token', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: params,
//   });

//   if (!response.ok) throw new Error('Failed to refresh token');
//   return (await response.json()).access_token;
// };

// // Centralized Dropbox client management
// const useDropboxClient = () => {
//   const [dbx, setDbx] = useState(null);

//   useEffect(() => {
//     const initClient = async () => {
//       try {
//         const token = await refreshAccessToken();
//         setDbx(new Dropbox({ accessToken: token }));
//       } catch (error) {
//         toast.error('Failed to initialize Dropbox');
//       }
//     };
//     initClient();
//   }, []);

//   return dbx;
// };

// // Optimized upload hook
// const useDropboxUpload = () => {
//   const dbx = useDropboxClient();
//   const [cache, setCache] = useState(new Map());

//   return useCallback(
//     async (type, file) => {
//       try {
//         const path = `/resources/${type}/${file.name}`;
//         const cached = cache.get(path);
//         if (cached) return cached;

//         const upload = await dbx.filesUpload({
//           path,
//           contents: await file.arrayBuffer(),
//           mode: { '.tag': 'overwrite' },
//         });

//         let url;
//         try {
//           const res = await dbx.sharingCreateSharedLinkWithSettings({
//             path: upload.result.path_lower,
//           });
//           url = res.result.url.replace('dl=0', 'raw=1');
//         } catch (e) {
//           if (e.status === 409) {
//             const links = await dbx.sharingListSharedLinks({
//               path: upload.result.path_lower,
//             });
//             url = links.result.links[0].url.replace('dl=0', 'raw=1');
//           }
//         }

//         setCache((prev) => new Map(prev).set(path, url));
//         return url;
//       } catch (error) {
//         if (error.status === 401) {
//           const newToken = await refreshAccessToken();
//           dbx.setAccessToken(newToken);
//           return useDropboxUpload()(type, file);
//         }
//         throw error;
//       }
//     },
//     [dbx, cache]
//   );
// };

// // Updated MediaGrid component
// const MediaGrid = ({ files }) => (
//   <>
//     <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
//       <div className="max-w-full overflow-x-auto">
//         <Table>
//           <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
//             <TableRow>
//               {/** header cells **/}
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Preview
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Action
//               </TableCell>
//             </TableRow>
//           </TableHeader>

//           <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
//             {files.map(({ name, url, isPdf }, index) => (
//               <TableRow key={index}>
//                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                   {isPdf ? (
//                     <span className="text-blue-600 font-medium">{name}</span>
//                   ) : (
//                     <ImageWithFallback
//                       src={url}
//                       alt={name}
//                       height={100}
//                       width={200}
//                       className="object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                   )}
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                   <button
//                     onClick={() => navigator.clipboard.writeText(url)}
//                     className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
//                   >
//                     Copy
//                   </button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   </>
// );

// // Optimized upload component
// const UploadCard = ({ title, onUpload }) => {
//   const [file, setFile] = useState(null);
//   const [link, setLink] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async () => {
//     if (!file) return;
//     setLoading(true);
//     try {
//       const url = await onUpload(file);
//       setLink(url);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4  rounded-xl shadow-sm border  border-gray-800">
//       <h6 className="font-medium mb-3">{title}</h6>
//       <div className="flex gap-2">
//         <label className="flex-1 border rounded-lg p-2 truncate">
//           {file?.name || 'Select file'}
//           <input
//             type="file"
//             className="hidden"
//             onChange={(e) => setFile(e.target.files?.[0])}
//           />
//         </label>
//         <button
//           onClick={handleUpload}
//           disabled={!file || loading}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
//         >
//           {loading ? 'Uploading...' : 'Upload'}
//         </button>
//       </div>
//       {link && (
//         <div className="mt-3 text-sm flex items-center gap-2">
//           <span className="text-blue-600 truncate">{link}</span>
//           <button
//             onClick={() => navigator.clipboard.writeText(link)}
//             className="shrink-0 px-2 py-1 text-xs hover:bg-white/10 rounded"
//           >
//             Copy
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main component
// const DropboxManager = () => {
//   const [activeTab, setActiveTab] = useState('Banner');
//   const upload = useDropboxUpload();
//   const dbx = useDropboxClient();
//   const [files, setFiles] = useState([]);

//   const categories = useMemo(
//     () => [
//       { label: 'Banner', path: '/resources/Banner' },
//       { label: 'CompanyLogo', path: '/resources/CompanyLogo' },
//       { label: 'Whitepaper', path: '/resources/Whitepaper' },
//     ],
//     []
//   );

//   useEffect(() => {
//     if (!dbx) return;

//     const fetchFilesWithLinks = async () => {
//       try {
//         const res = await dbx.filesListFolder({
//           path: categories.find((t) => t.label === activeTab).path,
//         });

//         const filesWithUrls = await Promise.all(
//           res.result.entries.map(async (file) => {
//             try {
//               // Try to get existing shared links
//               const sharedLinks = await dbx.sharingListSharedLinks({
//                 path: file.path_display,
//                 direct_only: true,
//               });

//               if (sharedLinks.result.links.length > 0) {
//                 return {
//                   ...file,
//                   url: sharedLinks.result.links[0].url.replace('dl=0', 'raw=1'),
//                 };
//               }

//               // Create new shared link if none exists
//               const newLink = await dbx.sharingCreateSharedLinkWithSettings({
//                 path: file.path_display,
//               });

//               return {
//                 ...file,
//                 url: newLink.result.url.replace('dl=0', 'raw=1'),
//               };
//             } catch (error) {
//               console.error('Error getting shared link:', error);
//               return null;
//             }
//           })
//         );

//         setFiles(filesWithUrls.filter(Boolean));
//       } catch (error) {
//         toast.error('Failed to load files');
//       }
//     };

//     fetchFilesWithLinks();
//   }, [dbx, activeTab, categories]);

//   return (
//     <div className="max-w-6xl mx-auto p-4 space-y-8">
//       {/* Upload section remains same */}

//       <div className="space-y-4">
//         <h1 className="text-2xl font-thin">Upload Section</h1>
//         <div className="grid md:grid-cols-3 gap-4">
//           {categories.map(({ label }) => (
//             <UploadCard
//               key={label}
//               title={label}
//               onUpload={(file) => upload(label, file)}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="space-y-4">
//         <h1 className="text-2xl font-thin">Media Gallery</h1>
//         <div className="flex gap-2">
//           {categories.map(({ label }) => (
//             <button
//               key={label}
//               onClick={() => setActiveTab(label)}
//               className={`px-4 py-2 rounded-lg ${
//                 activeTab === label
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-100 text-black'
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//         <MediaGrid
//           files={files
//             .sort(
//               (a, b) =>
//                 new Date(b.client_modified) - new Date(a.client_modified)
//             )
//             .map((f) => ({
//               name: f.name,
//               url: f.url,
//               isPdf: f.name.toLowerCase().endsWith('.pdf'),
//             }))}
//         />
//       </div>
//     </div>
//   );
// };

// export default DropboxManager;
