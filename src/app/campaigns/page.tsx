import Table from "@/components/Table";
import Link from "next/link";

export default function Campaigns() {
  return (
    <div className="flex flex-col items-end">
      <Link
        href="/campaigns/new"
        className="mb-5 py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
      >
        Nova Campanha
      </Link>
      <Table />
    </div>
  );
}
