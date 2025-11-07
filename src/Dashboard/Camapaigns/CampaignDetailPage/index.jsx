import { useEffect, useState } from 'react';
import {
  ChevronRight,
  CirclePause,
  Download,
  Star,
  Upload,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import AppTooltip from '../../../lib/Tooltip';
import { Slicestring } from '../../../lib/Slicestring';


function formatDate(dateString) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  // Add ordinal suffix (1st, 2nd, 3rd, etc.)
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${day}${suffix} ${month} ${year}`;
}

function formatDueDate(dateString) {
  const date = new Date(dateString);

  // Day name (e.g., Wednesday)
  const weekday = date.toLocaleDateString("en-GB", { weekday: "long" });

  // Day number + ordinal suffix (1st, 2nd, 3rd, 4th...)
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";

  // Month and Year
  const month = date.toLocaleDateString("en-GB", { month: "long" });
  const year = date.getFullYear();

  return `${weekday}, ${day}${suffix} ${month} ${year}`;
}



const CampaignDetailPage = () => {


  const { campaignId } = useParams()

  // console.log(campaignId,"campaignId")

  const [campaign, setCamapign] = useState([])
  const [volumes, setVolumes] = useState([]);
  const [filesInfo, setFilesInfo] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])





  const fetchData = async () => {
    const res = await fetch(`http://192.168.29.121:3000/campaigns/${campaignId}`);
    const response = await res.json();

    console.log(response.data, "campaign")
    setCamapign(response.data)
    setVolumes(response.data.volumes);
    setContent(response.data.content);
    setFilesInfo(response.data.filesInfo);
    setContent(response.data.content)
    setUpdates(response.data.updates)
  }















  const [files] = useState([
    'TAL_CENTRAL_WorkOS_PL_PTBA-1 P198',
    'TAL_NORTH_WorkOS_PL_PTBA-4 359',
  ]);
  const activities = [
    {
      date: 'SEPTEMBER 5, 2025 | 03:47 PM (IST)',
      message: 'Lead allofhdhfdfhdhcation or due dates have been updated',
    },
    {
      date: 'SEPTEMBER 6, 2025 | 03:47 PM (IST)',
      message: 'Lead allocjdfjdfdjation or due dates have been updated',
    },
    {
      date: 'SEPTEMBER 7, 2025 | 03:47 PM (IST)',
      message: 'Lead allocatijfgjgjdon or due dates have been updated',
    },
  ];

  const uploads = [
    {
      name: '1st Delivery - Slack Double touch - NAM/26563174060',
      time: 'SEPTEMBER 5. 20241 11:42 PM (IST)',
      submitted: 29,
      accepted: 13,
      errors: 5,
      rejections: 9,
    },
    {
      name: '2nd Delivery-Slack-Double touch-NAM/26563174060',
      time: 'SEPTEMBER 5, 2024 11:42 PM (ST)',
      submitted: 74,
      accepted: 35,
      errors: 0,
      rejections: 38,
    },
    {
      name: '3rd Delivery - Slack-Double touch-NAM/26563174060',
      time: 'SEPTEMBER 5. 2024 11:42 PM (IST)',
      submitted: 32,
      accepted: 8,
      errors: 2,
      rejections: 22,
    },
    {
      name: '4th Delivery-Slack-Double touch- NAM/26563174060',
      time: 'SEPTEMBER 5, 20241 11:42 PM (IST)',
      submitted: 35,
      accepted: 13,
      errors: 3,
      rejections: 9,
    },
    {
      name: '5th Delivery - Slack-Double touch-NAM/26563174060',
      time: 'SEPTEMBER 5. 2024 | 11:42 PM (IST)',
      submitted: 21,
      accepted: 10,
      errors: 0,
      rejections: 11,
    },
  ];











































  return (
    <div className=" dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 p-4 lg:p-0">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Link
            to="/campaigns"
            className="flex items-center text-sm text-gray-500 dark:text-gray-400"
          >
            Campaigns <ChevronRight size={20} strokeWidth={1} />
          </Link>

          <span className="font-medium text-gray-700 dark:text-gray-300">
            {campaign.name}
          </span>
        </div>
      </div>

      <div className="px-4 lg:px-0">
        <h2 className="text-xl font-normal mb-2 text-gray-900 dark:text-white">
          {campaign?.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Total Leads:
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {campaign?.leadgoal}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 lg:px-0">
        {/* Left Content */}
        <div className="lg:col-span-3 space-y-6 p-4 lg:p-6 min-h-screen rounded-2xl border border-gray-200 dark:border-gray-700  dark:bg-gray-800">
          {/* Program Info */}

          {/* Lead Totals */}
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
            Lead Totals
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm  dark:bg-gray-800 justify-center  ">
            {[
              { label: 'PENDING REVIEW', value: 0 },
              { label: 'ACCEPTED', value: campaign?.completed },
              { label: 'REJECTIONS', value: 99 },
            ].map((item) => (
              <div
                key={item.label}
                className="border-r border-gray-200 dark:border-gray-700 last:border-none py-3 px-4 lg:px-4 "
              >
                <p className="text-xs text-gray-500 dark:text-gray-400 ">
                  {item.label}
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Delivery Schedules */}
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
            Delivery Schedule
          </h4>
          <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 space-y-4">
            {volumes?.map((delivery, i) => (
              <div
                key={i}
                className="border-b border-gray-200 dark:border-gray-700 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4"
              >
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium text-gray-900 dark:text-white mb-2 lg:mb-0  ">
                    <AppTooltip message={delivery}>
                      <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                        {/* {task.program} */}
                        {Slicestring(delivery.name, 1, 25)}
                        {delivery.length > 25 && '...'}
                      </p>
                    </AppTooltip>
                  </p>
                  <div className="grid grid-cols-4 gap-2 lg:gap-4 text-sm text-center    mt-2">
                    <div className="border-x border-gray-200 dark:border-gray-700 px-2">
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        VALID
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {delivery.completed}
                      </p>
                    </div>
                    {/* <div className="border-r border-gray-200 dark:border-gray-700 px-2">
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        INVALID
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        0
                      </p>
                    </div> */}
                    <div className="border-r border-gray-200 dark:border-gray-700 px-2">
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        PENDING
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {delivery.pending}
                      </p>
                    </div>
                    <div className="border-r border-gray-200 dark:border-gray-700 px-2">
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        TOTAL
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {delivery.leadGoal}
                      </p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-xs bg-[#5B5B5B] text-white hover:bg-[#5B5B5B]/80 w-full lg:w-auto">
                  <Upload size={14} /> Upload File
                </button>
              </div>
            ))}
          </div>

          {/* Attached Files */}
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
            Files Attached (2)
          </h4>
          <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6">
            <ul className="space-y-3 text-sm">
              {filesInfo.map((f, i) => (
                <li
                  key={f.id || i}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="text-gray-900 dark:text-white break-all">{f.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-300">{f.date}</span>
                  </div>

                  <a
                    href={f.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-2 justify-end mt-2 sm:mt-0"
                  >
                    <Download size={16} /> Download
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Content Section */}
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
            Content ({content.reduce((sum, cat) => sum + cat.content.length, 0)})
          </h4>

          <div className="dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 space-y-4 text-sm">
            {content.map((category) => (
              <div key={category.categoryName}>
                {/* Category Name */}
                <p className="font-medium text-gray-900 dark:text-white">
                  {category.categoryName}:-
                </p>

                {/* Content List */}
                <ol className="list-disc ml-5 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                  {category.content.map((item) => (
                    <li key={item.id}>
                      {item.title}
                      <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                        ({item.type} | {item.optinType}  |   Approved: {item.approveDate ? formatDate(item.approveDate) : "N/A"})
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>


          {/* Additional Info */}
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
            Additional Information
          </h4>
          <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 text-sm space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-gray-900 dark:text-white">
                Audience:
              </span>
              IT, Operations, Sales, Service, Developer
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-gray-900 dark:text-white">
                Employee Size:
              </span>
              Qualification: TAL
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-gray-900 dark:text-white">
                Industry Qualifier:
              </span>
              TAL
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium text-gray-900 dark:text-white">
                Job Title Qualifier:
              </span>
              Director+
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-gray-900 dark:text-white">
                  1. What is your biggest pain point in team communication and
                  collaboration?
                </p>
                <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>- Ensuring efficient communication and collaboration</li>
                  <li>- Accelerating knowledge-sharing and problem-solving</li>
                  <li>- Connecting teams, customers, and partners</li>
                  <li>
                    - We don't have any communication and collaboration pain
                    points (DNQ)
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white">
                  2. Where does your organization currently stand when it comes
                  to improving communication workflows (e.g. with platforms like
                  Slack)?
                </p>
                <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>
                    -Just starting to explore tools to improve team
                    communication and productivity
                  </li>
                  <li>
                    -Passively evaluating ways to streamline collaboration and
                    reduce tool fatigue
                  </li>
                  <li>
                    -Actively working to solve internal communication or
                    workflow challenges
                  </li>
                  <li>
                    -Nearing a decision or implementation for a new
                    collaboration platform or upgrade
                  </li>
                  <li>
                    -No current needs-just keeping up with the latest tools,
                    features, and best practices (DNQ)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Upload Table */}
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
            Uploads
          </h4>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700  dark:bg-gray-800 text-sm p-4 lg:p-6">
            <div className="overflow-x-auto">
              <table className="w-full rounded-lg   dark:border-gray-700 text-left text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs">
                  <tr>
                    <th className="p-3 font-medium">UPLOADS</th>
                    <th className="p-3 font-medium"></th>
                    <th className="p-3 font-medium">SUBMITTED</th>
                    <th className="p-3 font-medium">ACCEPTED</th>
                    <th className="p-3 font-medium">ERRORS</th>
                    <th className="p-3 font-medium">REJECTIONS</th>
                    <th className="p-3 font-medium">VIEW</th>
                  </tr>
                </thead>
                <tbody>
                  {uploads.map((u, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="p-3">
                        <div className="flex flex-col">
                          <AppTooltip message={u.name}>
                            <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                              {/* {task.program} */}
                              {Slicestring(u.name, 1, 25)}
                              {u.name.length > 25 && '...'}
                            </p>
                          </AppTooltip>
                          <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                            {u.time}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-center text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#00D100"
                            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                          ></path>

                          <path
                            fill="#ffffff"
                            d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"
                          ></path>
                        </svg>
                      </td>
                      <td className="p-3 text-center text-gray-900 dark:text-white">
                        {u.submitted}
                      </td>
                      <td className="p-3 text-center text-gray-900 dark:text-white">
                        {u.accepted}
                      </td>
                      <td className="p-3 text-center text-gray-900 dark:text-white">
                        {u.errors}
                      </td>
                      <td className="p-3 text-center text-gray-900 dark:text-white">
                        {u.rejections}
                      </td>
                      <td className="p-3 text-center text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                        View
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 sticky">
          {/* Program Status */}
          <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Program Status
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1">
                <CirclePause size={16} strokeWidth={0.5} /> {campaign.status}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Lead Volumes
              </h3>
              {volumes.map((v) => (
                <p
                  key={v.name}
                  className="text-sm text-gray-600 dark:text-gray-400 mt-1 first:mt-0"
                >
                  {v.name}: {v.leadGoal}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Program Type
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Double Touch // example
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                First Upload
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Wednesday, 27th August 2025 // example
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Deadline
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {formatDueDate(campaign.duedate)}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Weekly Upload Day
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Tuesday & Thursday // example
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Pacing
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                23 leads per split, per upload //example
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                CPC 
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">7 // example</p>
            </div>
          </div>

          <div className=" dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 lg:p-6 text-sm">
            <h3 className="font-semibold text-gray-700 dark:text-white mb-4">
              Activity
            </h3>

            <div>
              {updates?.map((item, index) => (
                <div key={item.id || index} className="flex gap-x-3">
                  {/* Timeline Dot + Line */}
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-600">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8">
                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-gray-200 text-[13px] leading-snug">
                      {item.date}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailPage;
