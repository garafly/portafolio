import Image from "next/image";
import type { CardIcon } from "@/types/content-config";

type ConfigIconProps = {
  icon?: CardIcon;
  className?: string;
  emojiClassName?: string;
  imageClassName?: string;
  fallbackSize?: number;
};

export default function ConfigIcon({
  icon,
  className,
  emojiClassName,
  imageClassName,
  fallbackSize = 10,
}: ConfigIconProps) {
  if (!icon) return null;

  if (icon.type === "emoji") {
    return (
      <span className={emojiClassName ?? className}>
        {icon.value}
      </span>
    );
  }

  return (
    <Image
      src={icon.src}
      alt={icon.alt}
      width={icon.width ?? fallbackSize}
      height={icon.height ?? fallbackSize}
      className={imageClassName ?? className ?? "h-auto w-auto object-contain"}
    />
  );
}