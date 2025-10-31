import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select'; // ✅ fixed import

const dayOptions = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sunday', label: 'Sunday' },
];

const clients = [
  { value: 'PH', label: 'PH' },
  { value: 'LPM', label: 'LPM' },
];

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
    Files: [{ name: '', link: '', date: '' }],
    DescriptionOfFilesAttached: '',
  });

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
    if (key === 'Files')
      setCampaign({
        ...campaign,
        Files: [...campaign.Files, { name: '', link: '', date: '' }],
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

  // ✅ File Drop Handler added
  const handleFileDrop = (files) => {
    const uploadedFiles = files.map((file) => ({
      name: file.name,
      link: URL.createObjectURL(file),
      date: new Date().toISOString(),
    }));
    setCampaign((prev) => ({
      ...prev,
      Files: [...prev.Files, ...uploadedFiles],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Campaign created successfully!');
    console.log('Final Campaign Data:', campaign);
  };

  console.log(campaign, 'campaign');

  return (
    <div className="mt-6 border rounded-2xl bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Campaign Builder</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Campaign Name"
            className="border p-2 rounded"
            value={campaign.CampaignName}
            onChange={(e) => handleChange('CampaignName', e.target.value)}
          />
          <input
            type="text"
            placeholder="Code"
            className="border p-2 rounded"
            value={campaign.Code}
            onChange={(e) => handleChange('Code', e.target.value)}
          />
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

          {/* Weekly Upload Days */}
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
                  {/* <textarea
                    placeholder="Title"
                    value={t}
                    className="border p-2 rounded w-full"
                    onChange={(e) => handleTitleChange(i, ti, e.target.value)}
                  /> */}

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

        {/* Files */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Files</h3>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <div
              className="mt-3 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const droppedFiles = Array.from(e.dataTransfer.files);
                handleFileDrop(droppedFiles);
              }}
            >
              <p className="text-gray-600">
                Drag & drop files here or
                <label className="text-blue-600 cursor-pointer underline">
                  browse
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFileDrop(Array.from(e.target.files))}
                  />
                </label>
              </p>
            </div>

            {/* File list preview */}
            {campaign.Files?.length > 0 &&
              campaign.Files.map((file, i) => (
                <div
                  key={i}
                  className="flex justify-between p-2 border rounded"
                >
                  <span>{file.name}</span>
                  <a
                    href={file.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm"
                  >
                    View
                  </a>
                </div>
              ))}
          </div>
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

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Campaign
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
