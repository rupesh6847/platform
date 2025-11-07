import { useState } from 'react';
import CampaignTabs from './CampaignTabs';
import PageBreadcrumb from '../../../components/common/PageBreadCrumb';
import PageMeta from '../../../components/common/PageMeta';
import CampaignFilter from './CampaignFilter';
import { Plus } from 'lucide-react';
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from 'framer-motion';
import useMeasure from 'react-use-measure';
import CampaignBuilder from './CampaignBuilder/CampaignBuilder';

export default function CampaignLayout() {
  const [selectedTab, setSelectedTab] = useState('Overdue');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCreateCampaignClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <PageMeta title="Programs" description="This is Programs page." />
      <PageBreadcrumb pageTitle="Programs" />

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/5 lg:p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Program Queue
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Here you can explore the status of your programs with Revknew
              Media
            </p>
          </div>

          <div>
            <button
              onClick={handleCreateCampaignClick}
              className="flex items-center gap-2 rounded-lg border p-3 text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <Plus size={14} /> Create Program
            </button>
          </div>
        </div>

        <CampaignTabs selected={selectedTab} onSelect={setSelectedTab} />
        <CampaignFilter />
      </div>

      {/* Drawer */}
      <CampaignDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
    </>
  );
}

function CampaignDrawer({ open, setOpen }) {
  const [scope, animate] = useAnimate();
  const [drawerRef, { width }] = useMeasure();

  const x = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    if (scope.current) await animate(scope.current, { opacity: [1, 0] });
    const xStart = typeof x.get() === 'number' ? x.get() : 0;
    await animate('#drawer', { x: [xStart, width] });
    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-100 bg-black/60"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-full max-w-6xl overflow-hidden bg-white dark:bg-neutral-900"
            style={{ x }}
            drag="x"
            dragControls={controls}
            onDragEnd={() => {
              if (x.get() >= 100) handleClose();
            }}
            dragListener={false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0.5, right: 0 }}
          >
            {/* Drag Handle */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex justify-center bg-neutral-900/10 p-3 rounded-r-xl">
              <button
                onPointerDown={(e) => controls.start(e)}
                className="h-10 w-2 cursor-grab rounded-full bg-neutral-400 active:cursor-grabbing"
              ></button>
            </div>

            {/* Drawer Content */}
            <div className="relative z-0 h-full overflow-y-auto p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Campaign Builder
                </h2>
                <button
                  onClick={handleClose}
                  className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              <CampaignBuilder />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
