import AnimatedBackground from "@/components/AnimatedBackground";
import SettingsDrawer from "@/components/SettingsDrawer";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AnimatedBackground />
      <SettingsDrawer />
      <main>{children}</main>
      <Toaster />
    </>
  );
}
