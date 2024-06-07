import Header from "@/components/Header";

export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header siteName="CManager"/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </section>
  );
}
