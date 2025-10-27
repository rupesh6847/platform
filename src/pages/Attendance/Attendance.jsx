import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import AttendanceLayout from "../../components/UserAttendance/AttendanceLayout";

export default function Attendance() {
  return (
    <div>
      <PageMeta
        title="Attendance"
        description="This is Dashboard page."
      />
      <PageBreadcrumb pageTitle="Attendance" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/3 xl:px-10 xl:py-12">
        <AttendanceLayout />
      </div>
    </div>
  );
}
