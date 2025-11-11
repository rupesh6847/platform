import { motion, useAnimate, useDragControls, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

export function Drawer({ open, setOpen, children }) {
  const [scope, animate] = useAnimate();
  const [drawerRef, { width }] = useMeasure();

  const x = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, { opacity: [1, 0] });
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
          className="fixed inset-0 z-999999999 bg-black/60"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="absolute right-0 top-0 h-full w-full max-w-[90%] overflow-hidden bg-white dark:bg-neutral-900"
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
            <div className="absolute left-0 top-[50%] z-10 flex justify-center bg-neutral-900/10 p-3">
              <button
                onPointerDown={(e) => controls.start(e)}
                className="h-10 w-2 cursor-grab rounded-full bg-neutral-400 active:cursor-grabbing"
              ></button>
            </div>

            {/* Drawer Content */}
            <div className="relative z-0 h-full overflow-y-auto p-6 space-y-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
