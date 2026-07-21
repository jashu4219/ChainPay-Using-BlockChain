import {
  ArrowUpRight,
  DollarSign,
  FileText,
  CheckCircle2,
} from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="bg-slate-900 py-28">

      <div className="mx-auto max-w-[1400px] px-8">

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Dashboard
          </p>

          <h2 className="text-5xl font-bold text-white">
            Everything in one dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Monitor payments, invoices, blockchain verification and financial
            insights from a beautifully designed dashboard.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">

          <div className="grid gap-6 lg:grid-cols-4">

            <div className="rounded-2xl bg-slate-900 p-6">

              <DollarSign className="mb-3 text-cyan-400" />

              <p className="text-slate-400">
                Total Payments
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                $248K
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-900 p-6">

              <FileText className="mb-3 text-cyan-400" />

              <p className="text-slate-400">
                Invoices
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                428
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-900 p-6">

              <CheckCircle2 className="mb-3 text-cyan-400" />

              <p className="text-slate-400">
                Verified
              </p>

              <h3 className="mt-2 text-3xl font-bold text-green-400">
                98%
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-900 p-6">

              <ArrowUpRight className="mb-3 text-cyan-400" />

              <p className="text-slate-400">
                Growth
              </p>

              <h3 className="mt-2 text-3xl font-bold text-cyan-400">
                +18%
              </h3>

            </div>

          </div>

          <div className="mt-10 rounded-2xl bg-slate-900 p-8">

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-2xl font-semibold text-white">
                Recent Transactions
              </h3>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                Live
              </span>

            </div>

            <div className="space-y-4">

              {[
                ["INV-2041", "$24,800", "Verified"],
                ["INV-1890", "$12,450", "Pending"],
                ["INV-1821", "$8,900", "Verified"],
              ].map((item) => (

                <div
                  key={item[0]}
                  className="flex items-center justify-between rounded-xl bg-slate-800 p-5"
                >

                  <div>

                    <h4 className="font-semibold text-white">
                      {item[0]}
                    </h4>

                    <p className="text-slate-400">
                      Blockchain Invoice
                    </p>

                  </div>

                  <p className="font-semibold text-cyan-400">
                    {item[1]}
                  </p>

                  <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
                    {item[2]}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardPreview;