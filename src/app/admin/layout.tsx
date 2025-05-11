import type React from "react";
import Link from "next/link";
import { Users, FileText } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="w-full border-r bg-muted/40 md:w-64">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin" className="flex items-center font-semibold">
            <span>Painel Administrativo</span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin/usuarios"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <Users className="h-4 w-4" />
                <span>Usuários</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/anuncios"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <FileText className="h-4 w-4" />
                <span>Anúncios</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
