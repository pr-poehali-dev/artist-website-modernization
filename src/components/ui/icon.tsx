import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { lazy, Suspense } from "react";

const fallback = (
  <div style={{ background: "#ddd", width: 24, height: 24 }}></div>
);

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
  fallback?: keyof typeof dynamicIconImports;
}

const Icon = ({ name, fallback: fallbackName, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);
  const FallbackIcon = fallbackName
    ? lazy(dynamicIconImports[fallbackName])
    : null;

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
