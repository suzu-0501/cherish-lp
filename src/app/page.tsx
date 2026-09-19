import Image from "next/image";
import concernsImage from "../../public/images/cherish/02_concerns_back_view.png";
import treatmentImage from "../../public/images/cherish/02_back_treatment_master.jpg";
import chieImage from "../../public/images/cherish/03_chie_consultation_v2.png";
import afterImage from "../../public/images/cherish/05_case_01_after.jpg";
import beforeImage from "../../public/images/cherish/05_case_01_before.jpg";
import voiceImage from "../../public/images/cherish/06_voice_01_handwritten.jpg";
import reservationImage from "../../public/images/cherish/09_reservation_treatment_detail.jpg";
import salonInteriorImage from "../../public/images/cherish/10_salon_interior_real.png";
import footerLogo from "../../public/images/cherish/cherish_footer_logo.png";
import headerLogo from "../../public/images/cherish/cherish_header_logo.png";
import { MobileNavigation } from "@/components/MobileNavigation";
import { MotionObserver } from "@/components/MotionObserver";
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
      data-reveal="up"
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
        {...externalLinkProps}
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
      <MotionObserver />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerBrandGroup}>
            <a className={styles.brand} href="#hero" aria-label="ページ上部へ戻る">
              <Image
                src={headerLogo}
                alt="Private salon cherish"
                className={styles.headerLogo}
                loading="eager"
                sizes="(max-width: 767px) 150px, 190px"
              />
            </a>
            <p>横浜・日ノ出町　肩甲骨はがし・背中美容</p>
          </div>

          <nav className={styles.desktopNav} aria-label="メインナビゲーション">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <a
              className={styles.headerCta}
              href={siteLinks.line}
              {...externalLinkProps}
            >
              LINEで相談・予約
            </a>
          </nav>

          <MobileNavigation />
        </div>
      </header>

      <main>
        <section className={styles.hero} id="hero" aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy} data-reveal="up">
              <p className={styles.heroOverline}>YOKOHAMA / PRIVATE SALON</p>
              <h1 id="hero-title">
                <span className={styles.heroTitleDesktop}>
                  肩甲骨から、後ろ姿を
                  <br />
                  もっと好きに。
                </span>
                <span className={styles.heroTitleMobile}>
                  肩甲骨から、後ろ姿を
                  <br />
                  もっと好きに。
                </span>
              </h1>
              <p className={styles.heroLead}>
                40代からの肩甲骨はがし・背中美容
              </p>
              <p className={styles.heroBody}>
                看護師資格を持つ美容家が、肩・背中まわりのお悩みに
                1対1で向き合う、横浜のプライベートサロンです。
              </p>
            </div>

            <figure className={styles.heroVisual} data-reveal="scale">
              <Image
                src={salonInteriorImage}
                alt="自然光が入るPrivate salon cherishの施術室"
                fill
                loading="eager"
                sizes="(max-width: 767px) calc(100vw - 40px), 54vw"
                className={styles.coverImage}
              />
            </figure>

            <div className={styles.heroActions} data-reveal="up" data-reveal-delay="2">
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
            <div className={styles.concernsHeader}>
              <div className={styles.concernsTitle} data-reveal="left">
                <p className={styles.overline}>YOUR CONCERNS</p>
                <h2 id="concerns-title">
                  <span className={styles.concernsTitleDesktop}>
                    こんな後ろ姿の変化、
                    <br />
                    気になっていませんか？
                  </span>
                  <span className={styles.concernsTitleMobile}>
                    こんな後ろ姿の
                    <br />
                    変化、気になって
                    <br />
                    いませんか？
                  </span>
                </h2>
              </div>
              <p className={styles.concernsIntro} data-reveal="right">
                一人では見えにくい後ろ姿だからこそ、今の状態を確認しながら、
                自分に合うケアを考えてみませんか。
              </p>
            </div>

            <div className={styles.concernsBody}>
              <figure className={styles.concernsImage} data-reveal="left">
                <Image
                  src={concernsImage}
                  alt="肩から背中のラインを見せる女性の後ろ姿の提案用イメージ"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
                  className={styles.coverImage}
                />
                <figcaption>提案用イメージ</figcaption>
              </figure>

              <ol className={styles.concernList} data-reveal="right" data-reveal-delay="1">
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
              <figure className={styles.approachImage} data-reveal="left">
                <Image
                  src={treatmentImage}
                  alt="施術着の上から肩と背中に手を添える施術イメージ"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 58vw"
                  className={styles.coverImage}
                />
                <figcaption>提案用の施術イメージ</figcaption>
              </figure>

              <div className={styles.approachCopy} data-reveal="right" data-reveal-delay="1">
                <SectionHeading
                  overline="BACK CARE"
                  title={
                    <span id="approach-title">
                      <span className={styles.approachTitleDesktop}>
                        肩甲骨まわりから、
                        <br />
                        後ろ姿と向き合う。
                      </span>
                      <span className={styles.approachTitleMobile}>
                        肩甲骨まわり
                        <br />
                        から、後ろ姿と
                        <br />
                        向き合う。
                      </span>
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
              <figure className={styles.reasonsImage} data-reveal="scale">
                <Image
                  src={chieImage}
                  alt="カウンセリングシートを持ってお客様へ話しかける奈良千恵さん"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
                  className={styles.coverImage}
                />
              </figure>

              <div className={styles.reasonsCopy} data-reveal="up" data-reveal-delay="1">
                <SectionHeading
                  overline="WHY CHERISH"
                  inverse
                  title={
                    <span id="reasons-title">
                      <span className={styles.reasonsTitleDesktop}>
                        身体と美容のことを、
                        <br />
                        安心して相談できる場所。
                      </span>
                      <span className={styles.reasonsTitleMobile}>
                        身体と美容の
                        <br />
                        ことを、安心して
                        <br />
                        相談できる場所。
                      </span>
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
              <figure className={styles.signatureImage} data-reveal="left">
                <Image
                  src={treatmentImage}
                  alt="施術着の上から肩と背中をケアする様子"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
                  className={styles.coverImage}
                />
              </figure>

              <div className={styles.signatureCopy} data-reveal="right" data-reveal-delay="1">
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
                  <span className={styles.relatedTitleDesktop}>
                    その日の希望に合わせて、
                    <br />
                    ほかのケアも選べます。
                  </span>
                  <span className={styles.relatedTitleMobile}>
                    その日の希望に
                    <br />
                    合わせて、ほかの
                    <br />
                    ケアも選べます。
                  </span>
                </span>
              }
              intro="肩甲骨はがしを中心に、温かさを感じながら受けられるメニューや、全身をケアするメニューもご用意しています。"
            />

            <div className={styles.relatedMenus} data-reveal="up" data-reveal-delay="1">
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

            <div className={styles.otherCare} data-reveal="scale">
              <div className={styles.otherCareHeading}>
                <p className={styles.overline}>OTHER CARE</p>
                <h2 id="other-care-title">
                  <span className={styles.otherCareTitleDesktop}>
                    お悩みに合わせたメニューも
                    <br />
                    ご用意しています。
                  </span>
                  <span className={styles.otherCareTitleMobile}>
                    お悩みに合わせたメニューも
                    <br />
                    ご用意しています。
                  </span>
                </h2>
                <p>
                  各メニューの詳しい内容は公式LINEでご相談いただけます。空き状況はHot Pepperでもご確認いただけます。
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
              公式LINEでその他のメニューを相談する
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
                  <span className={styles.caseTitleDesktop}>
                    後ろ姿と向き合った、
                    <br />
                    お客様の事例
                  </span>
                  <span className={styles.caseTitleMobile}>
                    後ろ姿と
                    <br />
                    向き合った、
                    <br />
                    お客様の事例
                  </span>
                </span>
              }
              intro="誇張せず、同じ大きさの写真で施術前後の見え方をご紹介します。"
            />

            <article className={styles.caseStudy}>
              <div className={styles.comparison} data-reveal="left">
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

              <div className={styles.caseCopy} data-reveal="right" data-reveal-delay="1">
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

        <section id="voice" className={styles.voice} aria-labelledby="voice-title">
          <div className={styles.container}>
            <div className={styles.voiceGrid}>
              <div className={styles.voiceCopy} data-reveal="left">
                <p className={styles.overline}>VOICE</p>
                <h2 id="voice-title">
                  <span className={styles.voiceTitleDesktop}>
                    お客様からいただいた、
                    <br />
                    うれしいご感想
                  </span>
                  <span className={styles.voiceTitleMobile}>
                    お客様から
                    <br />
                    いただいた、
                    <br />
                    うれしいご感想
                  </span>
                </h2>
                <blockquote>
                  <span>「背中がスッキリなってきました!!</span>
                  <span>夏までにビキニになりたいー！」</span>
                </blockquote>
                <p className={styles.voiceMeta}>
                  30代・4回目のお客様のご感想（原文）
                </p>
                <p className={styles.disclaimer}>
                  こちらはお客様個人の感想です。施術による感じ方には個人差があります。
                </p>
              </div>

              <figure className={styles.voiceImage} data-reveal="scale" data-reveal-delay="1">
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
              <div className={styles.profileCopy} data-reveal="left">
                <p className={styles.overline}>ABOUT CHIE</p>
                <h2 id="profile-title">
                  <span className={styles.profileTitleDesktop}>
                    一人ひとりのお悩みに、
                    <br />
                    私が向き合います。
                  </span>
                  <span className={styles.profileTitleMobile}>
                    一人ひとりのお悩みに、
                    <br />
                    私が向き合います。
                  </span>
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

              <figure className={styles.profileImage} data-reveal="right" data-reveal-delay="1">
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

        <section id="flow" className={styles.flow} aria-labelledby="flow-title">
          <div className={styles.container}>
            <SectionHeading
              overline="FLOW"
              title={
                <span id="flow-title">
                  <span className={styles.flowTitleLine}>ご予約から、</span>
                  <span className={styles.flowTitleLine}>施術までの流れ</span>
                </span>
              }
            />
            <ol className={styles.flowList} data-reveal="up" data-reveal-delay="1">
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

        <section id="faq" className={styles.faq} aria-labelledby="faq-title">
          <div className={styles.container}>
            <div className={styles.faqGrid} data-reveal="up">
              <SectionHeading
                overline="FAQ"
                title={
                  <span id="faq-title">
                    <span className={styles.faqTitleDesktop}>
                      よくある
                      <br />
                      ご質問
                    </span>
                    <span className={styles.faqTitleMobile}>よくあるご質問</span>
                  </span>
                }
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
              <div className={styles.accessStatement} data-reveal="left">
                <p className={styles.overline}>ACCESS</p>
                <h2 id="access-title">
                  <span className={styles.accessTitleLine}>Private salon</span>
                  <span className={styles.accessTitleLine}>cherish</span>
                </h2>
                <p>
                  横浜・日ノ出町、桜木町から徒歩圏。
                  <br />
                  完全予約制のプライベートサロンです。
                </p>
                <figure className={styles.salonAtmosphere}>
                  <Image
                    src={salonInteriorImage}
                    alt="自然光が入るPrivate salon cherishの施術室"
                    fill
                    sizes="(max-width: 767px) calc(100vw - 40px), 42vw"
                    className={styles.coverImage}
                  />
                  <figcaption>SALON SPACE</figcaption>
                </figure>
                <div className={styles.accessDecoration} aria-hidden="true">
                  <span>YOKOHAMA</span>
                </div>
              </div>
              <div className={styles.shopPanel} data-reveal="right" data-reveal-delay="1">
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
          <div className={styles.reservationMedia} data-reveal="scale">
            <Image
              src={reservationImage}
              alt="施術ベッドのタオルを整える手元の提案用イメージ"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className={styles.coverImage}
            />
            <span className={styles.imageNote}>提案用イメージ</span>
          </div>
          <div className={styles.reservationPanel} data-reveal="right" data-reveal-delay="1">
            <div>
              <p className={styles.overline}>RESERVATION</p>
              <h2 id="reservation-title">
                <span className={styles.reservationTitleDesktop}>
                  メニューが決まっていなくても、
                  <br />
                  まずはご相談ください。
                </span>
                <span className={styles.reservationTitleMobile}>
                  メニューが決まっていなくても、
                  <br />
                  まずはご相談ください。
                </span>
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
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <a className={styles.footerBrand} href="#hero">
              <Image
                src={footerLogo}
                alt="Private salon cherish"
                className={styles.footerLogo}
                sizes="(max-width: 767px) 280px, 320px"
              />
            </a>
            <p className={styles.footerTagline}>
              肩甲骨から、後ろ姿をもっと好きに。
            </p>

            <span className={styles.footerDivider} aria-hidden="true" />

            <div className={styles.footerInformation}>
              <p className={styles.footerAddress}>
                神奈川県横浜市中区宮川町3-93-5 アルバ503
              </p>
              <p className={styles.footerDetails}>
                <span>完全予約制・不定休</span>
                <span className={styles.footerDetailBreak} aria-hidden="true">｜</span>
                <span>10:00〜18:30</span>
              </p>
              <p className={styles.footerReservation}>
                ご予約・メニューのご相談は、各予約ページより承ります。
              </p>
            </div>

            <nav className={styles.footerLinks} aria-label="公式サイト・予約リンク">
              <a href={siteLinks.instagram} {...externalLinkProps}>
                <span>Instagram</span>
                <small>公式アカウント</small>
              </a>
              <a href={siteLinks.line} {...externalLinkProps}>
                <span>LINE</span>
                <small>相談・ご予約</small>
              </a>
              <a href={siteLinks.hotpepper} {...externalLinkProps}>
                <span>Hot Pepper</span>
                <small>空き状況を確認</small>
              </a>
            </nav>

            <p className={styles.copyright}>© Private salon cherish</p>
          </div>
        </div>
      </footer>

      <StickyCta />
    </>
  );
}
