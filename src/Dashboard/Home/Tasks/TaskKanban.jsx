import { useState } from 'react';
import { motion } from 'framer-motion';

// 💡 Fixed: Renamed to match default cards
export const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex gap-3 min-h-screen text-neutral-100">
      <Column
        title="Tasks"
        column="task"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="text-blue-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-500"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('cardId', card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData('cardId');
    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || '-1';

    if (before !== cardId) {
      let copy = [...cards];
      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === '-1';

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === -1) return;
        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => (i.style.opacity = '0'));
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = '1';
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;
    return indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
  };

  const getIndicators = () =>
    Array.from(document.querySelectorAll(`[data-column="${column}"]`));

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="min-w-60 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-semibold ${headingColor}`}>{title}</h3>
        <span className="text-sm text-neutral-400">{filteredCards.length}</span>
      </div>

      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`min-h-[400px] rounded-md p-2 transition-colors ${
          active ? 'bg-neutral-800/60' : 'bg-neutral-800/20'
        }`}
      >
        {filteredCards.map((c) => (
          <Card key={c.id} {...c} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId={null} column={column} />
      </div>
    </div>
  );
};

const Card = ({ title, id, column, handleDragStart }) => (
  <>
    <DropIndicator beforeId={id} column={column} />
    <motion.div
      layout
      layoutId={id}
      draggable="true"
      onDragStart={(e) => handleDragStart(e, { title, id, column })}
      className="cursor-grab rounded-md border border-neutral-700 bg-neutral-900 p-3 mb-2 active:cursor-grabbing"
    >
      <div className="flex items-center gap-4">
        <p className="text-sm text-neutral-100">{title}</p>
        <span className="text-xs text-gray-400">02-09-2025</span>
      </div>
    </motion.div>
  </>
);

const DropIndicator = ({ beforeId, column }) => (
  <div
    data-before={beforeId || '-1'}
    data-column={column}
    className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0 transition-opacity"
  />
);

const DEFAULT_CARDS = [
  { title: 'Brief', id: '1', column: 'task' },
  { title: 'Campaign', id: '2', column: 'task' },
  { title: 'Brief', id: '3', column: 'task' },
  { title: 'Campaign', id: '4', column: 'task' },
  { title: 'Campaign', id: '5', column: 'todo' },
  { title: 'Brief', id: '6', column: 'todo' },
  { title: 'Brief', id: '7', column: 'todo' },
  { title: 'Brief', id: '8', column: 'doing' },
  { title: 'Assets', id: '9', column: 'doing' },
  { title: 'Brief', id: '10', column: 'done' },
];
