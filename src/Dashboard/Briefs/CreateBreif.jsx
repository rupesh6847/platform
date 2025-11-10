import React, { useState } from "react";
import Spreadsheet from "react-spreadsheet";
import axios from "axios";

export default function BriefCreator() {
  const [campaignInfo, setCampaignInfo] = useState({
    name: "LeadGen Campaign 2025",
    arrivedOn: "2025-11-07",
    due: "2025-11-14",
    status: "New",
    type: "LEADGEN",
    remark: "Test campaign for Q4 leads",
    briefHyperlink: "https://example.com/brief",
  });

  const [leadSheet, setLeadSheet] = useState([
    [
      { value: "ST" },
      { value: "ST+ PQ" },
      { value: "ST+ QQ" },
      { value: "BANT" },
      { value: "DT" },
      { value: "DT+ PQ" },
      { value: "DT+ QQ" },
    ],
    [
      { value: "100" },
      { value: "80" },
      { value: "60" },
      { value: "40" },
      { value: "120" },
      { value: "90" },
      { value: "50" },
    ],
  ]);

  const [quoteSheet, setQuoteSheet] = useState([
    [
      { value: "quotedOn" },
      { value: "volume" },
      { value: "remark" },
      { value: "ST" },
      { value: "DT" },
    ],
    [
      { value: "2025-11-06" },
      { value: "5000" },
      { value: "Initial quote" },
      { value: "2000" },
      { value: "3000" },
    ],
  ]);

  const [payload, setPayload] = useState({});
  const [loading, setLoading] = useState(false);

  // Utility Builders
  const buildLeadCountDetails = (sheet) => {
    if (sheet.length < 2) return {};
    const headers = sheet[0].map((c) => c.value);
    const values = sheet[1].map((c) => c.value);
    return headers.reduce((acc, key, i) => {
      acc[key] = Number(values[i]) || 0;
      return acc;
    }, {});
  };

  const buildQuotesFromSheet = (sheet) => {
    if (sheet.length <= 1) return [];
    const headers = sheet[0].map((c) => c.value);
    return sheet.slice(1).map((row) => {
      const quote = {};
      const leadCounts = {};
      headers.forEach((key, i) => {
        const val = row[i]?.value?.trim?.() || "";
        if (["quotedOn", "volume", "remark"].includes(key)) {
          if (key === "volume") quote[key] = Number(val) || 0;
          else if (key === "quotedOn") quote[key] = new Date(val).toISOString();
          else quote[key] = val;
        } else if (val !== "") {
          leadCounts[key] = Number(val) || 0;
        }
      });
      if (Object.keys(leadCounts).length) quote.leadCountDetails = leadCounts;
      return quote;
    });
  };

  // Actions
  const handleGenerateJSON = () => {
    const leadDetails = [
      {
        clientCode: "C1234",
        priority: "High",
        assignedTo: ["Sales Team A"],
        regions: ["North America"],
        audiences: ["B2B", "IT Managers"],
        leadType: "Qualified",
        qualifiers: { budget: "Confirmed" },
        profilers: "Email Outreach",
        deadline: campaignInfo.due,
        fileAttached: "brief_v1.pdf",
        leadCountDetails: buildLeadCountDetails(leadSheet),
      },
    ];

    const quotes = buildQuotesFromSheet(quoteSheet);

    const finalPayload = {
      ...campaignInfo,
      arrivedOn: new Date(campaignInfo.arrivedOn).toISOString(),
      due: new Date(campaignInfo.due).toISOString(),
      leadDetails,
      quotes,
    };

    setPayload(finalPayload);
  };

  const handleSubmit = async () => {
    if (!Object.keys(payload).length)
      return alert("⚠️ Please generate JSON first");
    setLoading(true);
    try {
      await axios.post("http://localhost:3000/briefs", payload);
      alert("✅ Brief created successfully!");
      setPayload({});
    } catch (err) {
      console.error(err);
      alert("❌ Error creating brief");
    } finally {
      setLoading(false);
    }
  };

  const addColumn = (sheetSetter, sheetData) => {
    const newHeader = prompt("Enter new column name:");
    if (!newHeader) return;
    const updated = [...sheetData];
    updated[0] = [...updated[0], { value: newHeader }];
    for (let i = 1; i < updated.length; i++) {
      updated[i] = [...updated[i], { value: "" }];
    }
    sheetSetter(updated);
  };

  return (
    <div className="w-full flex justify-center bg-gray-50 min-h-screen py-10">
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl  border border-gray-200 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            📋 Create Lead Brief
          </h1>
          <p className="text-gray-500">
            Easily configure and generate structured campaign briefs.
          </p>
        </div>

        {/* Campaign Info */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Object.keys(campaignInfo).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-600 capitalize mb-1">
                {key}
              </label>
              <input
                type={
                  key.toLowerCase().includes("on") || key === "due"
                    ? "date"
                    : "text"
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={
                  key.toLowerCase().includes("on") || key === "due"
                    ? campaignInfo[key].slice(0, 10)
                    : campaignInfo[key]
                }
                onChange={(e) =>
                  setCampaignInfo({ ...campaignInfo, [key]: e.target.value })
                }
              />
            </div>
          ))}
        </section>

        {/* Lead Sheet */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Lead Count Sheet
            </h2>
            <button
              onClick={() => addColumn(setLeadSheet, leadSheet)}
              className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700"
            >
              ➕ Add Column
            </button>
          </div>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <Spreadsheet data={leadSheet} onChange={setLeadSheet} />
          </div>
        </section>

        {/* Quotes Sheet */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Quotes Sheet (optional)
            </h2>
            <button
              onClick={() => addColumn(setQuoteSheet, quoteSheet)}
              className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700"
            >
              ➕ Add Column
            </button>
          </div>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <Spreadsheet data={quoteSheet} onChange={setQuoteSheet} />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Leave blank if no quotes are provided.
          </p>
        </section>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleGenerateJSON}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium  "
          >
            ⚙️ Generate JSON
          </button>
          <button
            disabled={loading}
            onClick={handleSubmit}
            className={`px-6 py-2.5 rounded-lg font-medium text-white   ${
              loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Submitting..." : "🚀 Submit to API"}
          </button>
        </div>

        {/* JSON Preview */}
        {Object.keys(payload).length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-h-96 overflow-y-auto">
            <h3 className="font-semibold text-gray-700 mb-2">
              Generated Payload:
            </h3>
            <pre className="text-xs text-gray-800 whitespace-pre-wrap">
              {JSON.stringify(payload, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
