import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const diagrams: Record<string, ComponentType> = {
  IFRS16: dynamic(() => import("./IFRS16Diagram")),
  IAS16: dynamic(() => import("./IAS16Diagram")),
  IAS2: dynamic(() => import("./IAS2Diagram")),
  IAS12: dynamic(() => import("./IAS12Diagram")),
  IAS19: dynamic(() => import("./IAS19Diagram")),
  IFRS9: dynamic(() => import("./IFRS9Diagram")),
  IFRS15: dynamic(() => import("./IFRS15Diagram")),
  IAS36: dynamic(() => import("./IAS36Diagram")),
  IAS37: dynamic(() => import("./IAS37Diagram")),
  IAS38: dynamic(() => import("./IAS38Diagram")),
};

export default function ConceptDiagram({ tag }: { tag: string }) {
  const Diagram = diagrams[tag];
  if (!Diagram) return null;
  return (
    <div className="mb-6 bg-surface border border-border rounded-lg p-4 overflow-x-auto">
      <Diagram />
    </div>
  );
}
