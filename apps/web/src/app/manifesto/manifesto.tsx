import Link from "next/link";

import { Photo } from "./manifesto-photo";

export function Manifesto() {
  return (
    <div className="flex min-h-[80dvh] w-full max-w-3xl flex-col gap-2">
      <div className="max-w-[83ch]">
        <h2 className="pb-8">Manifesto</h2>

        <p>
          Folks is a place for <strong>product people</strong>{" "}
          <span className="opacity-80">
            (designers, engineers, founders, painters, carpenters, architects,
            lighting designers and anyone else who creates something)
          </span>{" "}
          to share their creations and thoughts with each other and feel
          comfortable doing so.
        </p>
        <p>
          The initial release of Folks was created in 2 days, after the news
          broke of read.cv & posts.cv shutting down.
        </p>
        <p>
          For me, posts.cv was the first platform that I actually finally felt
          comfortable to just post things, I really want everyone else to have
          that experience here.
        </p>
        <p className="pt-4">
          I plan to support this platform long-term by financing hosting,
          moderating and by managing the open-source repository. Since it is
          open-source, if for any reason I'm unable to support it anymore, it
          will be possible for someone else to take over the baton.
        </p>
        <p>
          In the future, Folks will be registered as a non-profit organization
          to ensure that the platform remains sustainable and is not driven by
          the pursuit of higher profit.
        </p>
        <p>
          ( P.S. I've been asked a couple of times of how can people support
          this platform financially, in the future I'll setup a merchendise
          store with some goodies, so you can get something nice in return for
          your support. )
        </p>
        <strong>Contributing Code</strong>
        <p className="pt-4">
          The code for this platform is open-source, if you-re interested in
          adding features or fixing bugs yourself, you can find it on{" "}
          <a
            href="https://github.com/folkscommunity/folks"
            target="_blank"
            rel="noreferrer"
            className="underline hover:opacity-50"
          >
            GitHub
          </a>
          . Otherwise feel free to use the form on the {""}
          <Link href="/support" className="underline hover:opacity-50">
            /support
          </Link>{" "}
          page.
        </p>
        <p className="pt-8">Let's build something together, that will last.</p>
        <pre className="font-ansi text-ansi leading-ansi pt-4">{`      ╭╮  ╭╮
      ┃┃  ┃┃
      ┃┣━━┫╰━┳━╮╭╮ ╭╮
╭━━╮╭╮┃┃╭╮┃╭╮┃╭╮┫┃ ┃┃
╰━━╯┃╰╯┃╰╯┃┃┃┃┃┃┃╰━╯┃
    ╰━━┻━━┻╯╰┻╯╰┻━╮╭╯
                ╭━╯┃
                ╰━━╯`}</pre>
        <p className="pt-8 opacity-20">Last updated: 2025-02-01</p>
      </div>
    </div>
  );
}
