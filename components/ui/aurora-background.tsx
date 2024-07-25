"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  backgroundColor?: string; // Nouvelle prop pour la couleur de fond
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  backgroundColor = "transparent", // Valeur par défaut
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center transition-bg",
          className
        )}
        style={{ backgroundColor }} // Appliquer la couleur de fond
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--customWhite)_0%,var(--customWhite)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--customWhite)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--customBlack)_0%,var(--customBlack)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--customBlack)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--customBlue)_10%,var(--customIndigo)_15%,var(--customBlue)_20%,var(--customViolet)_25%,var(--customBlue)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute inset-0 opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
