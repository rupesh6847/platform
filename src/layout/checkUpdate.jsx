import { useState, useEffect } from "react";

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
    console.log(window.electronAPI, "window.electronAPI");

    if (!window.electronAPI) return;

    const handleUpdateAvailable = () => {
      setUpdateStatus("update-available");
    };

    const handleUpdateNotAvailable = () => {
      setUpdateStatus("update-not-available");
    };

    const handleUpdateDownloaded = () => {
      setUpdateStatus("update-downloaded");
    };

    const handleUpdateError = (_, error) => {
      setUpdateStatus(`error: ${error}`);
    };

    const handleDownloadProgress = (_, progressObj) => {
      setProgress(Math.round(progressObj.percent));
    };

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

    if (result.status === "dev") {
      setUpdateStatus("Running in development mode - updates disabled");
    } else if (result.status === "checked") {
      setUpdateStatus("Update check completed");
    } else {
      setUpdateStatus(`Check failed: ${result.error}`);
    }
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
        return "New update available! Click Download to get the latest version.";
      case "update-not-available":
        return "You have the latest version.";
      case "update-downloaded":
        return "Update downloaded! Click Install to restart and apply the update.";
      case "checking...":
        return "Checking for updates...";
      case "downloading...":
        return `Downloading update... ${progress}%`;
      default:
        return updateStatus;
    }
  };
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/3`}
    >
      <div className="text-center">
        <p className="dark:text-gray-400 text-gray-600 mb-4">Current Version: {appVersion}</p>
        <p
          className={`text-sm ${
            updateStatus.includes("error")
              ? "text-red-600"
              : updateStatus.includes("available")
              ? "text-green-600"
              : "text-gray-600"
          }`}
        >
          {getStatusMessage()}
        </p>

        {progress > 0 && updateStatus.includes("downloading") && (
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <button
        className="w-full flex items-center justify-center p-2 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
        onClick={checkUpdates}
        disabled={updateStatus === "checking..."}
      >
        Check for Updates
      </button>

      {updateStatus === "update-available" && (
        <button
          className="w-full flex items-center justify-center p-2 font-medium text-white rounded-lg bg-green-500 text-theme-sm hover:bg-green-600"
          onClick={downloadUpdate}
        >
          Download Update
        </button>
      )}

      {updateStatus === "update-downloaded" && (
        <button
          className="w-full flex items-center justify-center p-2 font-medium text-white rounded-lg bg-purple-500 text-theme-sm hover:bg-purple-600"
          onClick={installUpdate}
        >
          Install and Restart
        </button>
      )}
    </div>
  );
}
