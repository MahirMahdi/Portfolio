import dynamic from "next/dynamic";

export default function getIcon(iconName: string): any {
  let icon;
  const moduleType: string = iconName.slice(0, 2);
  switch (moduleType) {
    case "Bs":
      icon = dynamic((): any =>
        import("react-icons/bs").then((mod) => mod[iconName])
      );
      break;
    case "Hi":
      icon = dynamic((): any =>
        import("react-icons/hi").then((mod) => mod[iconName])
      );
      break;
    case "Io":
      icon = dynamic((): any =>
        import("react-icons/io5").then((mod) => mod[iconName])
      );
      break;
    case "Si":
      icon = dynamic((): any =>
        import("react-icons/si").then((mod) => mod[iconName])
      );
      break;
  }
  return icon;
}
