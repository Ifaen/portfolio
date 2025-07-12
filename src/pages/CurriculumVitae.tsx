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
import { useLocation } from "react-router-dom";

export default function CurriculumVitae() {
  const { t } = useTranslation(["curriculum_vitae", "certificates", "paths"]);
  const { setLanguage } = getLanguageContext();
  const location = useLocation();

  useEffect(() => {
    if ("/resume" === location.pathname) {
      setLanguage("en");
    }
  }, [location]);

  function TimelineItem(props: {
    date: string;
    location: string;
    url: string;
    title: string;
    role: string;
    bullets: string[];
  }): JSX.Element {
    return (
      <article className="grid grid-cols-2 sm:grid-cols-[6fr_1fr] mx-4 mb-4 sm:mx-0">
        <header>
          <h3 className="flex">
            <a
              href={props.url}
              className="rounded transition-colors sm:text-lg hover:bg-amber-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{props.title}</strong>
            </a>
          </h3>

          <em> {props.role}</em>
        </header>

        <aside className="flex flex-col justify-start items-end text-xs sm:justify-center">
          <span>{props.date}</span>
          <span>{props.location}</span>
        </aside>

        <section className="flex flex-col col-span-2 text-sm sm:col-span-1">
          <ul className="ml-4 list-disc">
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
      <article className="mx-4 text-sm sm:mx-0">
        <h3 className="font-bold">{props.name}</h3>
        <ul className="grid gap-y-1 gap-x-6 ml-6 list-disc sm:grid-cols-2">
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
      <article className="mx-4 text-sm sm:mx-0">
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
      <article className="mx-4 text-sm sm:mx-0">
        <h3 className="font-bold">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h3>
        <div className="flex justify-between ml-4 font-mono text-xs sm:justify-start sm:gap-12">
          <p>{props.date}</p> <p>{props.location}</p>
        </div>
      </article>
    );
  }

  function LanguageItem(props: {
    name: string;
    level: number;
    certificates?: Record<string, Certificate>;
  }): JSX.Element {
    return (
      <article className="mx-4 text-sm sm:mx-0">
        <header className="flex justify-between">
          <h3 className="font-bold">{props.name}</h3>
          <div className="flex gap-1 items-center">
            {Array.from({ length: props.level }, (_, i) => (
              <Circle
                className="w-2 h-2 text-[#a13e2d] fill-[#a13e2d]"
                key={i}
              />
            ))}
            {Array.from({ length: 5 - props.level }, (_, i) => (
              <Circle className="w-2 h-2 text-[#a13e2d]" key={i} />
            ))}
          </div>
        </header>

        {props.certificates && (
          <ul className="ml-6 list-disc">
            {Object.entries(props.certificates).map(([_, certificate], i) => (
              <li key={i} className="text-xs">
                <a
                  href={`${t("paths:certificates")}/${certificate.url}`}
                  className="flex gap-1 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="px-1 rounded transition-colors hover:bg-amber-100">
                    {certificate.title}
                  </p>
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

  return (
    <>
      <main className="bg-white grid overflow-y-auto max-w-[960px] mx-auto shadow-2xl">
        <header className="grid  sm:grid-cols-[1fr_4fr] bg-[#d5c7bc] p-8 gap-2 sm:gap-10">
          <div className="flex justify-center items-center">
            <img
              src={cvImage}
              width={150}
              height={150}
              alt="Selfie of Santiago Fuentes"
              className="object-cover rounded-full"
            />
          </div>

          <section className="flex flex-col gap-y-2 justify-between">
            <div>
              <h1 className="grid text-2xl font-bold sm:flex sm:gap-3">
                Santiago Fuentes
                <span className="hidden sm:block">-</span>
                <span className="text-xl font-normal sm:text-2xl sm:font-bold">
                  {t("title")}
                </span>
              </h1>

              <p className="hidden text-xl sm:block">{t("engineer")}</p>
            </div>

            <address className="grid grid-cols-2 gap-y-1.5 justify-center items-center not-italic text-xs sm:text-base">
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
                <p>Punta Arenas, Chile</p>
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

        <section className="grid gap-y-8 sm:px-10 sm:py-6">
          <CVSection
            icon={
              <Briefcase className="w-5 h-5 bg-[#a13e2d] text-[#ffffff] rounded p-0.5" />
            }
            title={t("curriculum_vitae:section.experience")}
          >
            <>
              <TimelineItem
                date="05/2025 - 06/2025"
                location="Punta Arenas, Chile"
                url="https://www.puntaarenas.cl"
                title={t("curriculum_vitae:laboral_experience.cim_glass.title")}
                role={t("curriculum_vitae:laboral_experience.cim_glass.role")}
                bullets={
                  t("curriculum_vitae:laboral_experience.cim_glass.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />

              <TimelineItem
                date="01/2025 - 03/2025"
                location="Punta Arenas, Chile"
                url="https://www.puntaarenas.cl"
                title={t(
                  "curriculum_vitae:laboral_experience.municipality.title"
                )}
                role={t(
                  "curriculum_vitae:laboral_experience.municipality.role"
                )}
                bullets={
                  t(
                    "curriculum_vitae:laboral_experience.municipality.bullets",
                    {
                      returnObjects: true,
                    }
                  ) as string[]
                }
              />

              <TimelineItem
                date="11/2023 - 01/2024"
                location="Punta Arenas, Chile"
                url="https://www.sernapesca.cl"
                title={t(
                  "curriculum_vitae:laboral_experience.sernapesca.title"
                )}
                role={t("curriculum_vitae:laboral_experience.sernapesca.role")}
                bullets={
                  t("curriculum_vitae:laboral_experience.sernapesca.bullets", {
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
            title={t("curriculum_vitae:section.hard_skills")}
          >
            <div className="grid grid-cols-2 gap-y-2 gap-x-5">
              <HardSkillItem
                name={t("curriculum_vitae:hard_skills.languages.name")}
                bullets={
                  t("curriculum_vitae:hard_skills.languages.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HardSkillItem
                name={t("curriculum_vitae:hard_skills.frameworks.name")}
                bullets={
                  t("curriculum_vitae:hard_skills.frameworks.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HardSkillItem
                name={t("curriculum_vitae:hard_skills.databases.name")}
                bullets={
                  t("curriculum_vitae:hard_skills.databases.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HardSkillItem
                name={t("curriculum_vitae:hard_skills.environments.name")}
                bullets={
                  t("curriculum_vitae:hard_skills.environments.bullets", {
                    returnObjects: true,
                  }) as string[]
                }
              />
              <HardSkillItem
                name={t("curriculum_vitae:hard_skills.patterns.name")}
                bullets={
                  t("curriculum_vitae:hard_skills.patterns.bullets", {
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
            title={t("curriculum_vitae:section.soft_skills")}
          >
            <div className="grid grid-cols-2 gap-y-3 gap-x-5">
              <SoftSkillItem
                name={t("curriculum_vitae:soft_skills.learning.name")}
                description={t(
                  "curriculum_vitae:soft_skills.learning.description"
                )}
              />
              <SoftSkillItem
                name={t("curriculum_vitae:soft_skills.team.name")}
                description={t("curriculum_vitae:soft_skills.team.description")}
              />
              <SoftSkillItem
                name={t("curriculum_vitae:soft_skills.proactive.name")}
                description={t(
                  "curriculum_vitae:soft_skills.proactive.description"
                )}
              />
              <SoftSkillItem
                name={t("curriculum_vitae:soft_skills.resilence.name")}
                description={t(
                  "curriculum_vitae:soft_skills.resilence.description"
                )}
              />
              <SoftSkillItem
                name={t("curriculum_vitae:soft_skills.kindness.name")}
                description={t(
                  "curriculum_vitae:soft_skills.kindness.description"
                )}
              />
              <SoftSkillItem
                name={t("curriculum_vitae:soft_skills.empathy.name")}
                description={t(
                  "curriculum_vitae:soft_skills.empathy.description"
                )}
              />
            </div>
          </CVSection>

          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-0">
            <CVSection
              icon={
                <GraduationCap className="w-5 h-5 bg-[#a13e2d] text-[#ffffff] rounded p-0.5" />
              }
              title={t("curriculum_vitae:section.education")}
            >
              <>
                <EducationItem
                  name={t("curriculum_vitae:education.university")}
                  location="Viña del Mar, Chile"
                  date="2020 - 2024"
                  url="https://www.unab.cl"
                />

                <EducationItem
                  name={t("curriculum_vitae:education.high_school")}
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
              title={t("curriculum_vitae:section.languages")}
            >
              <>
                <LanguageItem name={t("common:languages.es")} level={5} />
                <LanguageItem
                  name={t("common:languages.en")}
                  level={4}
                  certificates={
                    t("certificates:categories.english", {
                      returnObjects: true,
                    }) as Record<string, Certificate>
                  }
                />
              </>
            </CVSection>
          </div>
        </section>

        <footer className="grid px-10 pt-10 pb-12 sm:pt-4 sm:px-30">
          <div className="flex justify-center border-t py-4 border-[#a13e2d] text-[#a13e2d] items-center gap-2">
            <h2 className="text-xs font-extrabold">
              {t("curriculum_vitae:cv_link")}: sfuentes.cl/cv
            </h2>

            <SquareMousePointer className="w-4 h-4 text-[#a13e2d]" />
          </div>
        </footer>
      </main>
    </>
  );
}
