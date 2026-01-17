import React from 'react';
import * as SimpleIcons from 'simple-icons';

interface TechIconProps {
  iconName: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ iconName, className = '' }) => {
  // Convert name to simple-icons format (e.g., "Python" -> "siPython")
  const iconKey = `si${iconName.replace(/[^a-zA-Z0-9]/g, '')}` as keyof typeof SimpleIcons;
  const icon = SimpleIcons[iconKey];

  if (!icon) {
    return null;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
};

export default TechIcon;
