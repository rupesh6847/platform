import { useState, useEffect } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function CheckUpdate() {
  const [updateStatus, setUpdateStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const [appVersion, setAppVersion] = useState("");

  useEffect(() => {
    const getVersion = async () => {
      if (window.electronAPI?.getAppVersion) {
        try {
          const version = await window.electronAPI.getAppVersion();
          setAppVersion(version);
        } catch (error) {
          console.error("Failed to get app version:", error);
        }
      }
    };
    getVersion();
  }, []);

  useEffect(() => {
    if (!window.electronAPI) return;

    const handleUpdateAvailable = () => setUpdateStatus("update-available");
    const handleUpdateNotAvailable = () =>
      setUpdateStatus("update-not-available");
    const handleUpdateDownloaded = () => setUpdateStatus("update-downloaded");
    const handleUpdateError = (_, error) => setUpdateStatus(`error: ${error}`);
    const handleDownloadProgress = (_, progressObj) =>
      setProgress(Math.round(progressObj.percent));

    window.electronAPI.onUpdateAvailable(handleUpdateAvailable);
    window.electronAPI.onUpdateNotAvailable(handleUpdateNotAvailable);
    window.electronAPI.onUpdateDownloaded(handleUpdateDownloaded);
    window.electronAPI.onUpdateError(handleUpdateError);
    window.electronAPI.onDownloadProgress(handleDownloadProgress);

    return () => {
      window.electronAPI.removeAllListeners("update-available");
      window.electronAPI.removeAllListeners("update-not-available");
      window.electronAPI.removeAllListeners("update-downloaded");
      window.electronAPI.removeAllListeners("update-error");
      window.electronAPI.removeAllListeners("download-progress");
    };
  }, []);

  const checkUpdates = async () => {
    if (!window.electronAPI) {
      setUpdateStatus("Electron API not available");
      return;
    }

    setUpdateStatus("checking...");
    const result = await window.electronAPI.checkForUpdates();

    if (result.status === "dev")
      setUpdateStatus("Running in development mode - updates disabled");
    else if (result.status === "checked")
      setUpdateStatus("Update check completed");
    else setUpdateStatus(`Check failed: ${result.error}`);
  };

  const downloadUpdate = async () => {
    setUpdateStatus("downloading...");
    setProgress(0);
    await window.electronAPI.downloadUpdate();
  };

  const installUpdate = () => {
    window.electronAPI.quitAndInstall();
  };

  const getStatusMessage = () => {
    switch (updateStatus) {
      case "update-available":
        return "A new update is available! Click below to download it.";
      case "update-not-available":
        return "You’re already on the latest version.";
      case "update-downloaded":
        return "Update downloaded! Click Install to restart and apply.";
      case "checking...":
        return "Checking for updates...";
      case "downloading...":
        return `Downloading update... ${progress}%`;
      default:
        return updateStatus;
    }
  };

  return (
    <>
      <PageMeta title="Check Update" description="This is Update page." />
      <PageBreadcrumb pageTitle="Check Update" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 lg:p-6">
        <div className="mx-auto my-8 w-full max-w-sm       bg-white px-6 py-6 text-center  dark:border-gray-700 dark:bg-gray-900 transition-all duration-300">
          {/* Version */}
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Current Version:
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {appVersion}
            </span>
          </p>

          {/* Status Message */}
          <p
            className={`mb-4 text-sm font-medium transition-all duration-300 ${
              updateStatus.includes("error")
                ? "text-red-500"
                : updateStatus.includes("available")
                ? "text-green-500"
                : updateStatus.includes("downloading")
                ? "text-blue-500"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {getStatusMessage()}
          </p>

          {/* Progress Bar */}
          {updateStatus === "downloading..." && (
            <div className="mb-4 w-full rounded-full bg-gray-200 dark:bg-gray-700 h-2 overflow-hidden">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={checkUpdates}
              disabled={updateStatus === "checking..."}
              className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                updateStatus === "checking..."
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {updateStatus === "checking..."
                ? "Checking..."
                : "Check for Updates"}
            </button>

            {updateStatus === "update-available" && (
              <button
                onClick={downloadUpdate}
                className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-all"
              >
                Download Update
              </button>
            )}

            {updateStatus === "update-downloaded" && (
              <button
                onClick={installUpdate}
                className="w-full rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 transition-all"
              >
                Install & Restart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
