import { useEffect, type JSX } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Link,
  Linkedin,
  GithubIcon,
  Briefcase,
  Terminal,
  CircleUser,
  GraduationCap,
  Languages,
  SquareMousePointer,
  Circle,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import cvImage from "../assets/cv-image.jpg";
import type { Certificate } from "../lib/types";
import { getLanguageContext } from "../components/LanguageContext";

function TimelineItem(props: {
  date: string;
  location: string;
  url: string;
  title: string;
  role: string;
  bullets: string[];
}): JSX.Element {
  return (
    <article className="grid grid-cols-[1fr_4fr]">
      <aside className="flex flex-col mt-1 text-sm">
        <span>{props.date}</span>
        <span>{props.location}</span>
      </aside>

      <section className="flex flex-col text-sm">
        <h3>
          <a
            href={props.url}
            className="p-1 rounded transition-colors hover:bg-amber-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-lg font-bold">{props.title}</span>
            <span className="italic">, {props.role}</span>
          </a>
        </h3>
        <ul className="ml-6 text-sm list-disc">
          {props.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function HardSkillItem(props: {
  name: string;
  bullets: string[];
}): JSX.Element {
  return (
    <article className="text-sm">
      <h3 className="font-bold">{props.name}</h3>
      <ul className="grid grid-cols-2 gap-x-6 ml-6 list-disc">
        {props.bullets.map((item, i) => {
          const isLong = item.length > 25;
          return (
            <li key={i} className={isLong ? "col-span-2" : ""}>
              {item}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function SoftSkillItem(props: {
  name: string;
  description: string;
}): JSX.Element {
  return (
    <article className="text-sm">
      <h3 className="font-bold">{props.name}</h3>
      <p>{props.description}</p>
    </article>
  );
}

function EducationItem(props: {
  name: string;
  location: string;
  date: string;
  url: string;
}): JSX.Element {
  return (
    <article className="text-sm">
      <h3 className="font-bold">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.name}
        </a>
      </h3>
      <div className="flex gap-12 ml-4 font-mono text-xs">
        <p>{props.date}</p> <p>{props.location}</p>
      </div>
    </article>
  );
}

function LanguageItem(props: {
  name: string;
  level: number;
  certificates?: Certificate[];
}): JSX.Element {
  return (
    <article className="text-sm">
      <header className="flex justify-between">
        <h3 className="font-bold">{props.name}</h3>
        <div className="flex gap-1 items-center">
          {Array.from({ length: props.level }, (_, i) => (
            <Circle className="w-2 h-2 text-[#a13e2d] fill-[#a13e2d]" key={i} />
          ))}
          {Array.from({ length: 5 - props.level }, (_, i) => (
            <Circle className="w-2 h-2 text-[#a13e2d]" key={i} />
          ))}
        </div>
      </header>

      {props.certificates && (
        <ul className="ml-6 list-disc">
          {props.certificates.map(({ title, url }, i) => (
            <li key={i} className="text-xs">
              <a href={url} className="flex gap-1 items-center">
                <span className="px-1 rounded transition-colors hover:bg-amber-100">
                  {title}
                </span>
                <SquareArrowOutUpRight className="w-2 h-2" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function CVSection(props: {
  icon: JSX.Element;
  title: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <section className="flex flex-col gap-y-2">
      <header className="flex justify-center border-y border-[#a13e2d] text-[#a13e2d] items-center gap-2">
        {props.icon}
        <h2 className="text-lg font-extrabold">{props.title}</h2>
      </header>
      {props.children}
    </section>
  );
}

export default function CurriculumVitae() {
  const { t, i18n } = useTranslation();
  const { language } = getLanguageContext();

  useEffect(() => {
    if (language === "es") {
      i18n.changeLanguage("es");
    } else if (language === "en") {
      i18n.changeLanguage("en");
    }
  }, [language]);

  return (
    <>
      <main className="bg-white grid w-[960px] mx-auto">
        <header className="grid grid-cols-[1fr_4fr] bg-[#d5c7bc] p-8 gap-10">
          <div className="flex justify-center items-center">
            <img
              src={cvImage}
              alt="Selfie of Santiago Fuentes"
              className="object-cover rounded-full"
            />
          </div>

          <section className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Santiago Fuentes - {t("cv.title")}
              </h1>

              <span className="text-xl">{t("cv.engineer")}</span>
            </div>

            <address className="grid grid-cols-2 gap-y-2 justify-center items-center not-italic">
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 stroke-[#a13e2d] stroke-3" />
                <a href="tel:+56986890981">+56 9 8689 0981</a>
              </div>

              <div className="flex gap-2 items-center">
                <GithubIcon className="w-4 h-4 fill-[#a13e2d] stroke-[#a13e2d]" />
                <a
                  href="https://github.com/ifaen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ifaen
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <MapPin className="w-4 h-4 stroke-3 stroke-[#a13e2d]" />
                <span>Punta Arenas, Chile</span>
              </div>

              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 stroke-[#a13e2d] stroke-3" />
                <a
                  href="mailto:dev@sfuentes.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dev@sfuentes.cl
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <Link className="w-4 h-4 stroke-[#a13e2d] stroke-3" />
                <a href="https://sfuentes.cl">sfuentes.cl</a>
              </div>

              <div className="flex gap-2 items-center">
                <Linkedin className="w-4 h-4 stroke-[#a13e2d] stroke-3" />
                <a
                  href="https://linkedin.com/in/dev-sfuentes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dev-sfuentes
                </a>
              </div>
            </address>
          </section>
        </header>

        <section className="grid gap-y-8 px-10 py-6">
          <CVSection
            icon={
              <Briefcase className="w-5 h-5 bg-[#a13e2d] text-[#ffffff] rounded p-0.5" />
            }
            title={t("cv.section.experience")}
          >
            <>
              <TimelineItem
                date="01/2025 - 03/2025"
                location="Punta Arenas, Chile"
                url="https://www.puntaarenas.cl"
                title={t("cv.laboral_experience.municipality.title")}
                role={t("cv.laboral_experience.municipality.role")}
                bullets={
                  t("cv.laboral_experience.municipality.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />

              <TimelineItem
                date="11/2023 - 01/2024"
                location="Punta Arenas, Chile"
                url="https://www.sernapesca.cl"
                title={t("cv.laboral_experience.sernapesca.title")}
                role={t("cv.laboral_experience.sernapesca.role")}
                bullets={
                  t("cv.laboral_experience.sernapesca.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
            </>
          </CVSection>

          <CVSection
            icon={
              <Terminal className="w-5 h-5 bg-[#a13e2d] text-[#ffffff] rounded p-0.5" />
            }
            title={t("cv.section.hard_skills")}
          >
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <HardSkillItem
                name={t("cv.hard_skills.languages.name")}
                bullets={
                  t("cv.hard_skills.languages.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HardSkillItem
                name={t("cv.hard_skills.databases.name")}
                bullets={
                  t("cv.hard_skills.databases.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HardSkillItem
                name={t("cv.hard_skills.environments.name")}
                bullets={
                  t("cv.hard_skills.environments.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HardSkillItem
                name={t("cv.hard_skills.frameworks.name")}
                bullets={
                  t("cv.hard_skills.frameworks.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HardSkillItem
                name={t("cv.hard_skills.patterns.name")}
                bullets={
                  t("cv.hard_skills.patterns.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
            </div>
          </CVSection>

          <CVSection
            icon={
              <CircleUser className="w-5 h-5 bg-[#a13e2d] text-[#ffffff] rounded p-0.5" />
            }
            title={t("cv.section.soft_skills")}
          >
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              <SoftSkillItem
                name={t("cv.soft_skills.learning.name")}
                description={t("cv.soft_skills.learning.description")}
              />
              <SoftSkillItem
                name={t("cv.soft_skills.team.name")}
                description={t("cv.soft_skills.team.description")}
              />
              <SoftSkillItem
                name={t("cv.soft_skills.proactive.name")}
                description={t("cv.soft_skills.proactive.description")}
              />
              <SoftSkillItem
                name={t("cv.soft_skills.resilence.name")}
                description={t("cv.soft_skills.resilence.description")}
              />
              <SoftSkillItem
                name={t("cv.soft_skills.kindness.name")}
                description={t("cv.soft_skills.kindness.description")}
              />
              <SoftSkillItem
                name={t("cv.soft_skills.empathy.name")}
                description={t("cv.soft_skills.empathy.description")}
              />
            </div>
          </CVSection>

          <div className="grid grid-cols-2 gap-x-6">
            <CVSection
              icon={
                <GraduationCap className="w-5 h-5 bg-[#a13e2d] text-[#ffffff] rounded p-0.5" />
              }
              title={t("cv.section.education")}
            >
              <>
                <EducationItem
                  name={t("cv.education.university")}
                  location="Viña del Mar, Chile"
                  date="2020 - 2024"
                  url="https://www.unab.cl"
                />

                <EducationItem
                  name={t("cv.education.high_school")}
                  location="Punta Arenas, Chile"
                  date="2015 - 2018"
                  url="https://www.luisalbertobarrera.cl"
                />
              </>
            </CVSection>

            <CVSection
              icon={
                <Languages className="w-5 h-5 bg-[#a13e2d] text-[#ffffff] rounded p-0.5" />
              }
              title={t("cv.section.languages")}
            >
              <>
                <LanguageItem name={t("languages.es")} level={5} />
                <LanguageItem
                  name={t("languages.en")}
                  level={4}
                  certificates={
                    t("certificates.english.bullets", {
                      returnObjects: true,
                    }) as Certificate[]
                  }
                />
              </>
            </CVSection>
          </div>
        </section>

        <footer className="grid gap-y-4 pt-4 pb-12 px-30">
          <div className="flex justify-center border-t py-4 border-[#a13e2d] text-[#a13e2d] items-center gap-2">
            <h2 className="text-xs font-extrabold">
              {t("cv.cv_link")}: sfuentes.cl/cv
            </h2>

            <SquareMousePointer className="w-4 h-4 text-[#a13e2d]" />
          </div>
        </footer>
      </main>
    </>
  );
}
