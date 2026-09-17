import Image from "next/image";
import heroImage from "../../public/images/cherish/01_hero_therapist_master.jpg";
import treatmentImage from "../../public/images/cherish/02_back_treatment_master.jpg";
import chieImage from "../../public/images/cherish/03_chie_consultation.jpg";
import afterImage from "../../public/images/cherish/05_case_01_after.jpg";
import beforeImage from "../../public/images/cherish/05_case_01_before.jpg";
import voiceImage from "../../public/images/cherish/06_voice_01_handwritten.jpg";
import reservationImage from "../../public/images/cherish/09_reservation_treatment_detail.jpg";
import { MobileNavigation } from "@/components/MobileNavigation";
import { StickyCta } from "@/components/StickyCta";
import {
  approachPoints,
  concerns,
  faqs,
  featuredMenu,
  flowSteps,
  menuCategories,
  navigation,
  reasons,
  relatedMenus,
  shopInfo,
  siteLinks,
} from "@/data/site-content";
import styles from "./page.module.css";

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

type SectionHeadingProps = {
  overline: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

function SectionHeading({
  overline,
  title,
  intro,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={styles.sectionHeading}
      data-align={align}
      data-inverse={inverse}
    >
      <p className={styles.overline}>{overline}</p>
      <h2>{title}</h2>
      {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
    </div>
  );
}

type CtaGroupProps = {
  location: "hero" | "menu" | "final";
  inverse?: boolean;
};

function CtaGroup({ location, inverse = false }: CtaGroupProps) {
  return (
    <div className={styles.ctaGroup} data-inverse={inverse}>
      <a
        className={styles.primaryCta}
        href={siteLinks.line}
        data-cta={`cta_${location}_line`}
      >
        LINEで相談・予約する
        <span aria-hidden="true">→</span>
      </a>
      <a
        className={styles.secondaryCta}
        href={siteLinks.hotpepper}
        {...externalLinkProps}
        data-cta={`cta_${location}_hotpepper`}
      >
        Hot Pepperで空き状況を見る
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#hero" aria-label="ページ上部へ戻る">
            <span>Private salon</span>
            <strong>cherish</strong>
          </a>

          <nav className={styles.desktopNav} aria-label="メインナビゲーション">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <a className={styles.headerCta} href={siteLinks.line}>
              LINEで相談・予約
            </a>
          </nav>

          <MobileNavigation />
        </div>
      </header>

      <main>
        <section className={styles.hero} id="hero" aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.heroOverline}>YOKOHAMA / PRIVATE SALON</p>
              <h1 id="hero-title">
                肩甲骨から、
                <br />
                後ろ姿をもっと好きに。
              </h1>
              <p className={styles.heroLead}>
                40代からの肩甲骨はがし・背中美容
              </p>
              <p className={styles.heroBody}>
                看護師資格を持つ美容家が、肩・背中まわりのお悩みに
                1対1で向き合う、横浜のプライベートサロンです。
              </p>
            </div>

            <figure className={styles.heroVisual}>
              <Image
                src={heroImage}
                alt="施術前にタオルを整えるセラピストの提案用イメージ"
                fill
                priority
                sizes="(max-width: 767px) calc(100vw - 40px), 54vw"
                className={styles.coverImage}
              />
              <figcaption className={styles.proposalBadge}>
                提案用イメージ
                <span>写真差し替え予定</span>
              </figcaption>
            </figure>

            <div className={styles.heroActions}>
              <CtaGroup location="hero" />
              <p className={styles.ctaNote}>
                メニューが決まっていなくてもご相談いただけます
              </p>
            </div>
          </div>
          <div className={styles.heroScroll} aria-hidden="true">
            <span>SCROLL</span>
            <i />
          </div>
        </section>

        <section className={styles.concerns} aria-labelledby="concerns-title">
          <div className={styles.container}>
            <div className={styles.concernsGrid}>
              <div className={styles.concernsTitle}>
                <p className={styles.overline}>YOUR CONCERNS</p>
                <h2 id="concerns-title">
                  こんな後ろ姿の変化、
                  <br />
                  気になっていませんか？
                </h2>
                <p>
                  一人では見えにくい後ろ姿だからこそ、今の状態を確認しながら、
                  自分に合うケアを考えてみませんか。
                </p>
              </div>
              <ol className={styles.concernList}>
                {concerns.map((concern, index) => (
                  <li key={concern}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{concern}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className={styles.approach}
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className={styles.container}>
            <div className={styles.approachGrid}>
              <figure className={styles.approachImage}>
                <Image
                  src={treatmentImage}
                  alt="施術着の上から肩と背中に手を添える施術イメージ"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 58vw"
                  className={styles.coverImage}
                />
                <figcaption>提案用の施術イメージ</figcaption>
              </figure>

              <div className={styles.approachCopy}>
                <SectionHeading
                  overline="BACK CARE"
                  title={
                    <span id="approach-title">
                      肩甲骨まわりから、
                      <br />
                      後ろ姿と向き合う。
                    </span>
                  }
                  intro="cherishでは、肩や背中の見え方だけでなく、その日の状態や気になる部分を伺いながら施術を進めます。"
                />
                <div className={styles.approachPoints}>
                  {approachPoints.map((point, index) => (
                    <article key={point.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{point.title}</h3>
                        <p>{point.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.reasons}
          id="reasons"
          aria-labelledby="reasons-title"
        >
          <div className={styles.container}>
            <div className={styles.reasonsGrid}>
              <figure className={styles.reasonsImage}>
                <Image
                  src={chieImage}
                  alt="カウンセリングシートへ記入する奈良千恵さん"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
                  className={styles.coverImage}
                />
              </figure>

              <div className={styles.reasonsCopy}>
                <SectionHeading
                  overline="WHY CHERISH"
                  inverse
                  title={
                    <span id="reasons-title">
                      身体と美容のことを、
                      <br />
                      安心して相談できる場所。
                    </span>
                  }
                />
                <ol className={styles.reasonList}>
                  {reasons.map((reason, index) => (
                    <li key={reason.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{reason.title}</h3>
                        <p>{reason.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.signature}
          id="menu"
          aria-labelledby="signature-title"
        >
          <div className={styles.container}>
            <div className={styles.signatureGrid}>
              <figure className={styles.signatureImage}>
                <Image
                  src={treatmentImage}
                  alt="施術着の上から肩と背中をケアする様子"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
                  className={styles.coverImage}
                />
              </figure>

              <div className={styles.signatureCopy}>
                <p className={styles.overline}>SIGNATURE TREATMENT</p>
                <h2 id="signature-title">{featuredMenu.name}</h2>
                <div className={styles.priceBlock}>
                  <span>{featuredMenu.duration}</span>
                  <strong>{featuredMenu.price}</strong>
                  <small>（{featuredMenu.tax}）</small>
                </div>
                <p className={styles.signatureDescription}>
                  {featuredMenu.description}
                </p>
                <CtaGroup location="menu" />
                <p className={styles.confirmationNote}>
                  メニュー名・時間・価格・提供内容は公開前に最終確認します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.menuListSection}
          id="menu-list"
          aria-labelledby="related-menu-title"
        >
          <div className={styles.container}>
            <SectionHeading
              overline="MORE TREATMENTS"
              title={
                <span id="related-menu-title">
                  その日の希望に合わせて、
                  <br />
                  ほかのケアも選べます。
                </span>
              }
              intro="肩甲骨はがしを中心に、温かさを感じながら受けられるメニューや、全身をケアするメニューもご用意しています。"
            />

            <div className={styles.relatedMenus}>
              {relatedMenus.map((menu, index) => (
                <article className={styles.relatedMenu} key={menu.name}>
                  <span className={styles.menuNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{menu.name}</h3>
                    {"subtitle" in menu ? <p>{menu.subtitle}</p> : null}
                    <ul className={styles.menuPrices}>
                      {menu.prices.map((price) => (
                        <li key={price}>{price}</li>
                      ))}
                    </ul>
                    <p className={styles.menuDescription}>{menu.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.otherCare}>
              <div className={styles.otherCareHeading}>
                <p className={styles.overline}>OTHER CARE</p>
                <h2>
                  お悩みに合わせたメニューも
                  <br />
                  ご用意しています。
                </h2>
                <p>
                  各メニューの詳しい内容・時間・価格は、Hot Pepperでご確認ください。
                </p>
              </div>
              <div className={styles.categoryGrid}>
                {menuCategories.map((category) => (
                  <article key={category.category}>
                    <h3>{category.category}</h3>
                    <ul>
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <a
              className={styles.textLink}
              href={siteLinks.lineReservation}
              {...externalLinkProps}
              data-cta="cta_other_menu_line"
            >
              Hot Pepperでメニューと空き状況を見る
              <span aria-hidden="true">→</span>
            </a>
            <p className={styles.confirmationNote}>
              メニュー名・時間・価格・提供状況は公開前にご確認ください。
            </p>
          </div>
        </section>

        <section className={styles.caseSection} id="case" aria-labelledby="case-title">
          <div className={styles.container}>
            <SectionHeading
              overline="CASE"
              title={
                <span id="case-title">
                  後ろ姿と向き合った、
                  <br />
                  お客様の事例
                </span>
              }
              intro="誇張せず、同じ大きさの写真で施術前後の見え方をご紹介します。"
            />

            <article className={styles.caseStudy}>
              <div className={styles.comparison}>
                <figure>
                  <div className={styles.comparisonImage}>
                    <Image
                      src={beforeImage}
                      alt="30代・施術1回の背面写真 Before"
                      fill
                      sizes="(max-width: 767px) 45vw, 30vw"
                      className={styles.coverImage}
                    />
                  </div>
                  <figcaption>Before</figcaption>
                </figure>
                <figure>
                  <div className={styles.comparisonImage}>
                    <Image
                      src={afterImage}
                      alt="30代・施術1回の背面写真 After"
                      fill
                      sizes="(max-width: 767px) 45vw, 30vw"
                      className={styles.coverImage}
                    />
                  </div>
                  <figcaption>After</figcaption>
                </figure>
              </div>

              <div className={styles.caseCopy}>
                <p className={styles.caseMeta}>30代・施術1回</p>
                <h3>肩甲骨まわりと後ろ姿が気になっていたお客様</h3>
                <p>
                  右肩まわりの張りと、肩甲骨の左右差が気になっていたお客様の背面写真です。
                </p>
                <p className={styles.disclaimer}>
                  施術による感じ方や見え方には個人差があります。
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.voice} aria-labelledby="voice-title">
          <div className={styles.container}>
            <div className={styles.voiceGrid}>
              <div className={styles.voiceCopy}>
                <p className={styles.overline}>VOICE</p>
                <h2 id="voice-title">
                  お客様からいただいた、
                  <br />
                  うれしいご感想
                </h2>
                <blockquote>
                  「背中がスッキリなってきました!!
                  <br />
                  夏までにビキニになりたいー！」
                </blockquote>
                <p className={styles.voiceMeta}>
                  30代・4回目のお客様のご感想（原文）
                </p>
                <p className={styles.disclaimer}>
                  こちらはお客様個人の感想です。施術による感じ方には個人差があります。
                </p>
              </div>

              <figure className={styles.voiceImage}>
                <Image
                  src={voiceImage}
                  alt="30代・4回目のお客様による手書きの感想"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 38vw"
                  className={styles.coverImage}
                />
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.profile} id="profile" aria-labelledby="profile-title">
          <div className={styles.container}>
            <div className={styles.profileGrid}>
              <div className={styles.profileCopy}>
                <p className={styles.overline}>ABOUT CHIE</p>
                <h2 id="profile-title">
                  一人ひとりのお悩みに、
                  <br />
                  私が向き合います。
                </h2>
                <p className={styles.profileName}>奈良 千恵</p>
                <p className={styles.profileRole}>
                  看護師 × エステティシャン
                  <br />
                  肩甲骨はがし・背中美容専門家
                </p>
                <div className={styles.profileMessage}>
                  <p>
                    身体のことも美容のことも、気になることを安心して話せる場所でありたいと考えています。
                  </p>
                  <p>
                    カウンセリングから施術まで1対1で担当し、その日の状態やご希望を伺いながら、無理のないメニューをご案内します。
                  </p>
                  <p>
                    「どのメニューを選べばよいか分からない」という段階でも、どうぞ気軽にご相談ください。
                  </p>
                </div>
              </div>

              <figure className={styles.profileImage}>
                <Image
                  src={chieImage}
                  alt="カウンセリングシートへ記入する奈良千恵さん"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 50vw"
                  className={styles.coverImage}
                />
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.flow} aria-labelledby="flow-title">
          <div className={styles.container}>
            <SectionHeading
              overline="FLOW"
              title={<span id="flow-title">ご予約から施術までの流れ</span>}
            />
            <ol className={styles.flowList}>
              {flowSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <div className={styles.container}>
            <div className={styles.faqGrid}>
              <SectionHeading
                overline="FAQ"
                title={<span id="faq-title">よくあるご質問</span>}
              />
              <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary>
                      <span>Q</span>
                      {faq.question}
                    </summary>
                    <div className={styles.faqAnswer}>
                      <span>A</span>
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.access} id="access" aria-labelledby="access-title">
          <div className={styles.container}>
            <div className={styles.accessGrid}>
              <div className={styles.accessStatement}>
                <p className={styles.overline}>ACCESS</p>
                <h2 id="access-title">Private salon cherish</h2>
                <p>
                  横浜・日ノ出町、桜木町から徒歩圏。
                  <br />
                  完全予約制のプライベートサロンです。
                </p>
                <div className={styles.accessDecoration} aria-hidden="true">
                  <span>YOKOHAMA</span>
                </div>
              </div>
              <div className={styles.shopPanel}>
                <dl>
                  {shopInfo.map(([term, description], index) => (
                    <div key={`${term}-${index}`}>
                      <dt>{term}</dt>
                      <dd>{description}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  className={styles.textLink}
                  href={siteLinks.googleMaps}
                  {...externalLinkProps}
                >
                  Google Mapsで場所を確認する
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.reservation}
          id="reservation"
          aria-labelledby="reservation-title"
        >
          <div className={styles.reservationMedia}>
            <Image
              src={reservationImage}
              alt="施術ベッドのタオルを整える手元の提案用イメージ"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className={styles.coverImage}
            />
            <span className={styles.imageNote}>提案用イメージ</span>
          </div>
          <div className={styles.reservationPanel}>
            <div>
              <p className={styles.overline}>RESERVATION</p>
              <h2 id="reservation-title">
                メニューが決まっていなくても、
                <br />
                まずはご相談ください。
              </h2>
              <p className={styles.reservationBody}>
                肩まわりや後ろ姿のお悩みを伺いながら、ご希望に合うメニューをご案内します。
              </p>
              <CtaGroup location="final" inverse />
              <ul className={styles.reservationFacts}>
                <li>完全予約制</li>
                <li>日ノ出町駅から徒歩圏</li>
                <li>桜木町駅から徒歩圏</li>
              </ul>
              <p className={styles.sampleNoteInverse}>
                LINEの正式URLは最終確認後に有効化します。空き状況はHot Pepperからご確認ください。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <a className={styles.footerBrand} href="#hero">
              <span>Private salon</span>
              <strong>cherish</strong>
            </a>
            <div>
              <p>神奈川県横浜市中区宮川町3-93-5 アルバ503</p>
              <small>完全予約制・不定休</small>
            </div>
            <nav aria-label="フッターナビゲーション">
              <a href={siteLinks.instagram} {...externalLinkProps}>Instagram</a>
              <a href={siteLinks.line}>LINE</a>
              <a href={siteLinks.hotpepper} {...externalLinkProps}>Hot Pepper</a>
            </nav>
          </div>
          <p className={styles.copyright}>© Private salon cherish</p>
        </div>
      </footer>

      <StickyCta />
    </>
  );
}
