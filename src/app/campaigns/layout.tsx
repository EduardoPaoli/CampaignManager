export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </section>
  );
}
