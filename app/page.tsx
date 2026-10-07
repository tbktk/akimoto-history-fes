import Link from "next/link";

const overview = [
  { date: "11月4日（水）", time: "19:00", label: "第1回 着付け講習会", place: "総社公民館" },
  { date: "11月6日（金）", time: "19:00", label: "第2回 着付け講習会", place: "総社公民館" },
  { date: "11月7日（土）", time: "18:00〜19:30", label: "リハーサル", place: "総社公民館 屋外ステージ" },
  { date: "11月8日（日）", time: "12:00〜", label: "本番・出陣式", place: "総社公民館周辺" },
];

const daySchedule = [
  ["8:00", "係員集合", "総社公民館集合"],
  ["9:00", "出演者集合", "淀君・侍女・若年寄・長刀隊"],
  ["9:30", "出演者集合", "鉄砲隊・御所車引手・大指物・若年寄・法螺貝"],
  ["10:00", "出演者集合", "大将・当世具足・子供武者"],
  ["10:30", "立石獅子舞集合", "総社歴史資料館"],
  ["11:40", "光厳寺出陣報告", "大将他"],
  ["11:40", "出演者入場・紹介", "出陣式会場"],
  ["12:00", "出陣式開始", ""],
  ["12:15", "式典開始", ""],
  ["12:30", "式典終了", ""],
  ["12:33", "三献の儀", ""],
  ["12:40", "舞の献上", "立石獅子舞"],
  ["12:50", "立石獅子舞出発・随時演舞", ""],
  ["12:50", "兜着用・出陣の勝鬨", ""],
  ["12:55", "出陣式終了・写真撮影", "写真撮影15分"],
  ["13:00", "路上パフォーマンス団体配置", ""],
  ["13:10", "消防音楽隊出発", ""],
  ["13:12", "鼓笛隊出発", "勝山小・総社小"],
  ["13:12", "行列隊形を整える", ""],
  ["13:30", "行列出発", ""],
  ["13:50", "旧本間酒造前通過", ""],
  ["14:00", "路上パフォーマンス実施", "行列通過後順次開始"],
  ["14:20", "元景寺到着", "休憩・飲み物提供"],
  ["14:35", "消防音楽隊出発", ""],
  ["14:35", "獅子舞開始", ""],
  ["14:55", "獅子舞を先頭に行列出発", ""],
  ["15:25", "会場到着", ""],
  ["15:30", "帰陣の報告・終了", ""],
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-stone-300/70 bg-[#231f1a] text-white">
        <div className="page-shell py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#d8b46b]">2026年11月8日（日）</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[0.04em] sm:text-5xl">
            総社秋元公歴史まつり
            <span className="mt-2 block text-xl font-medium text-stone-200 sm:text-2xl">
              武者行列 参加者向け案内
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
            着付け講習、リハーサル、本番当日の集合時刻と行列スケジュールを確認できます。
          </p>
          <Link
            href="/preparation/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#a67c35] px-6 font-semibold text-white transition hover:bg-[#8d692c]"
          >
            役柄別の準備情報を確認する
          </Link>
        </div>
      </section>

      <div className="page-shell space-y-10 py-10 sm:py-14">
        <section aria-labelledby="overview-title">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-[#7c2d2d]">SCHEDULE</p>
              <h2 id="overview-title" className="mt-2 text-2xl font-bold sm:text-3xl">
                今後の日程
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {overview.map((item) => (
              <article key={item.date} className="section-card p-5 sm:p-6">
                <p className="text-sm font-semibold text-[#7c2d2d]">{item.date}</p>
                <p className="mt-1 text-2xl font-bold tracking-tight">{item.time}</p>
                <h3 className="mt-4 text-lg font-semibold">{item.label}</h3>
                <p className="mt-1 text-sm text-stone-600">{item.place}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card overflow-hidden" aria-labelledby="day-title">
          <div className="border-b border-stone-300 bg-[#efe8dc] px-5 py-5 sm:px-7">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#7c2d2d]">NOVEMBER 8</p>
            <h2 id="day-title" className="mt-1 text-2xl font-bold">
              本番当日のタイムスケジュール
            </h2>
          </div>

          <div>
            {daySchedule.map(([time, item, note], index) => (
              <div
                key={`${time}-${item}-${index}`}
                className="schedule-row grid gap-2 px-5 py-4 sm:grid-cols-[6rem_1fr] sm:px-7"
              >
                <time className="text-lg font-bold tabular-nums text-[#7c2d2d]">{time}</time>
                <div>
                  <p className="font-semibold">{item}</p>
                  {note ? <p className="mt-1 text-sm leading-6 text-stone-600">{note}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="section-card p-5 sm:p-6">
            <h2 className="text-xl font-bold">交通規制</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7">
              <div>
                <dt className="font-semibold">伊香保線</dt>
                <dd className="text-stone-600">12:30〜15:30</dd>
              </div>
              <div>
                <dt className="font-semibold">鍛冶町の一部</dt>
                <dd className="text-stone-600">12:30〜13:50（行列通過まで）</dd>
              </div>
            </dl>
          </article>

          <article className="section-card p-5 sm:p-6">
            <h2 className="text-xl font-bold">駐車場</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              係員・出演者の駐車場は、総社小学校校庭です。
            </p>
          </article>
        </section>

        <section className="rounded-[1.25rem] bg-[#7c2d2d] p-6 text-white sm:p-8">
          <p className="text-sm font-semibold tracking-[0.14em] text-red-100">FOR PARTICIPANTS</p>
          <h2 className="mt-2 text-2xl font-bold">着付け・リハーサル・集合時間を確認</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-red-50">
            役柄ごとに、参加する着付け講習会、リハーサル、本番当日の集合時刻を整理しています。
          </p>
          <Link
            href="/preparation/"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-semibold text-[#7c2d2d]"
          >
            準備情報を見る
          </Link>
        </section>
      </div>
    </main>
  );
}
