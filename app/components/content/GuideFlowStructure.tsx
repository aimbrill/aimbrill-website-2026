import type { ReactNode } from "react";

export type GuideFlowRow = {
  time: string;
  children: ReactNode;
};

type GuideFlowStructureProps = {
  title: string;
  badge: string;
  rows: GuideFlowRow[];
};

export function GuideFlowStructure({ title, badge, rows }: GuideFlowStructureProps) {
  return (
    <div className="flow-block flow-block--structure">
      <div className="flow-block-head">
        <span className="flow-block-title">{title}</span>
        <span className="flow-count flow-count--warm">{badge}</span>
      </div>
      <div className="flow-rows">
        {rows.map((row, index) => (
          <div key={`${row.time}-${index}`} className="flow-row">
            <span className="flow-time">{row.time}</span>
            <div className="flow-text">{row.children}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
