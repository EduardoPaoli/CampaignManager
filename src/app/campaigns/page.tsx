import Button from "@/components/Button";
import Table from "@/components/Table";

export default function Campaigns() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-end">
        <Button
          label="Nova Campanha"
          className="mb-5 py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
        />
        <Table />
      </div>
    </main>
  );
}
