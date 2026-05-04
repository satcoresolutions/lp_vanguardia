import React from "react";

interface SectionLabelProps {
  label: string;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-4 mb-6 ${className}`}>
      <span className="caption">{label}</span>
      <div className="h-px flex-1 bg-soft-grey" />
    </div>
  );
};

export default SectionLabel;
