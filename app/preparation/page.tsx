import Link from "next/link";

const fittingGroups = [
  {
    date: "11月4日（水）",
    time: "19:00",
    staff: "係員は16:00集合",
    roles: ["大将", "当世具足", "若年寄", "大指物", "長刀隊"],
    extra: "淀君・侍女は18:00集合",
  },
  {
    date: "11月6日（金）",
    time: "19:00",
    staff: "係員は18:00集合",
    roles: ["鉄砲隊", "御所車引手", "法螺貝隊", "子供武者"],
    extra: "淀君・侍女は18:00集合",
  },
];

const rehearsal = [
  ["15:00", "淀君・侍女"],
  ["15:30", "大指物・若年寄・長刀隊"],
  ["16:30", "鉄砲隊・御所車引手・法螺貝"],
  ["17:00", "大将・当世具足・子供武者"],
];

const festivalDay = [
  ["9:00", "淀君・侍女・若年寄・長刀隊", "支度をしてから食事"],
  ["9:30", "鉄砲隊・御所車引手・大指物・若年寄・法螺貝", "支度をしてから食事"],
  ["10:00", "大将・当世具足・子供武者", "支度をする前に食事"],
];

export default function PreparationPage() {
  return (
    <main className="page-shell py-10 sm:py-14">
      <Link
        href="/"
        className="text-sm font-semibold text-[#7c2d2d] hover:underline"
      >
        ← 日程に戻る
      </Link>

      <header className="mt-6 max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.14em] text-[#7c2d2d]">
          PARTICIPANT GUIDE
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          出演者の準備情報
        </h1>
        <p className="mt-4 leading-8 text-stone-600">
          着付け講習会、リハーサル、本番当日の集合時刻を、配布資料の内容に沿って整理しています。
        </p>
      </header>

      <div className="mt-10 space-y-8">
        <section
          className="section-card overflow-hidden"
          aria-labelledby="fitting-title"
        >
          <div className="border-b border-stone-300 bg-[#efe8dc] px-5 py-5 sm:px-7">
            <h2 id="fitting-title" className="text-2xl font-bold">
              着付け講習会
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              会場：総社公民館
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            {fittingGroups.map((group, index) => (
              <article
                key={group.date}
                className={`p-5 sm:p-7 ${
                  index === 1
                    ? "border-t border-stone-300 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <p className="text-sm font-semibold text-[#7c2d2d]">
                  {group.date}
                </p>
                <p className="time-font mt-1 text-2xl font-bold">{group.time}</p>
                <p className="mt-1 text-sm text-stone-500">{group.staff}</p>
                <h3 className="mt-5 text-sm font-semibold text-stone-500">
                  対象
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.roles.map((role) => (
                    <li
                      key={role}
                      className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium"
                    >
                      {role}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl bg-[#f7f0e8] px-4 py-3 text-sm font-medium text-stone-700">
                  {group.extra}
                </p>
              </article>
            ))}
          </div>

          <div className="border-t border-stone-300 px-5 py-4 text-sm leading-7 text-stone-600 sm:px-7">
            指定日に参加できない場合は、事務局へ連絡のうえ、第1回または第2回のいずれかに必ず参加してください。
          </div>
        </section>

        <section
          className="section-card overflow-hidden"
          aria-labelledby="rehearsal-title"
        >
          <div className="border-b border-stone-300 bg-[#efe8dc] px-5 py-5 sm:px-7">
            <p className="text-sm font-semibold text-[#7c2d2d]">
              11月7日（土）
            </p>
            <h2 id="rehearsal-title" className="mt-1 text-2xl font-bold">
              リハーサル
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              屋外ステージで実施。係員集合 13:30、リハーサル
              18:00開始〜19:30終了。
            </p>
          </div>

          <div>
            {rehearsal.map(([time, roles]) => (
              <div
                key={time}
                className="schedule-row grid gap-2 px-5 py-4 sm:grid-cols-[6rem_1fr] sm:px-7"
              >
                <time className="time-font text-lg font-bold text-[#7c2d2d]">
                  {time}
                </time>
                <p className="font-semibold">{roles}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-300 px-5 py-5 text-sm leading-7 text-stone-600 sm:px-7">
            <p>係員・出演者の夕飯は持ち帰りです。</p>
            <p>
              リハーサルでは出陣係が席へ誘導します。各自、自分の席を確認してください。
            </p>
          </div>
        </section>

        <section
          className="section-card overflow-hidden"
          aria-labelledby="festival-title"
        >
          <div className="border-b border-stone-300 bg-[#efe8dc] px-5 py-5 sm:px-7">
            <p className="text-sm font-semibold text-[#7c2d2d]">
              11月8日（日）
            </p>
            <h2 id="festival-title" className="mt-1 text-2xl font-bold">
              本番日の出演者集合
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              係員集合 8:00
            </p>
          </div>

          <div>
            {festivalDay.map(([time, roles, note]) => (
              <div
                key={time}
                className="schedule-row grid gap-2 px-5 py-4 sm:grid-cols-[6rem_1fr] sm:px-7"
              >
                <time className="time-font text-lg font-bold text-[#7c2d2d]">
                  {time}
                </time>
                <div>
                  <p className="font-semibold">{roles}</p>
                  <p className="mt-1 text-sm text-stone-600">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="section-card p-5 sm:p-6">
            <h2 className="text-xl font-bold">衣装・隊形</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-stone-600">
              <li>行列係は、甲冑のほか小物（毛槍、旗など）も身につけます。</li>
              <li>衣装・行列係で入場隊形を作ります。</li>
              <li>リハーサル時に、自分の席を確認してください。</li>
            </ul>
          </article>

          <article className="section-card p-5 sm:p-6">
            <h2 className="text-xl font-bold">食事・駐車場</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-stone-600">
              <li>前日リハーサルと本番当日は、お弁当が用意されます。</li>
              <li>係員・出演者の駐車場は、総社小学校校庭です。</li>
            </ul>
          </article>
        </section>

        <section className="rounded-[1.25rem] border border-[#c9b08a] bg-[#fff8e8] p-5 sm:p-6">
          <h2 className="font-bold text-stone-900">資料記載について</h2>
          <p className="mt-2 text-sm leading-7 text-stone-600">
            本番日の9:00と9:30の集合欄には、どちらにも「若年寄」と記載されています。このページでは配布資料の記載をそのまま反映しています。
          </p>
        </section>
      </div>
    </main>
  );
}
