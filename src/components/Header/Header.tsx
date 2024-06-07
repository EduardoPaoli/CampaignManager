"use client";

import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ siteName }: { siteName: string }) => {
  const pathname = usePathname();
  const showBackButton = pathname !== "/campaigns";

  return (
    <header className="flex justify-between bg-slate-100 py-5 px-8 min-h-16">
      <Link href="/campaigns">
        <h1 className="text-2xl">{siteName}</h1>
      </Link>
      {!showBackButton ? (
        <Link
          href="/campaigns/new"
          className="py-2 px-3 bg-indigo-500 text-white text-center text-sm font-semibold rounded-md shadow focus:outline-none w-40"
        >
          Nova Campanha
        </Link>
      ) : (
        <>
          <Link
            href="/campaigns"
            className="py-2 px-3 bg-indigo-500 text-white text-center text-sm font-semibold rounded-md shadow"
          >
            <RollbackOutlined />
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
