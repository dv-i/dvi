import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getCaseStudy(slug) {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/case-studies", slug + ".md"),
    "utf-8"
  );

  const { data } = matter(markdownWithMeta);

  return data;
}

export function getAllCaseStudies() {
  const files = fs.readdirSync(path.join("src/case-studies"));

  const caseStudyData = files.map((filename) => {
    const fileContents = fs.readFileSync(
      path.join("src/case-studies", filename),
      "utf8"
    );

    const { data } = matter(fileContents);
    return { ...data, slug: filename.replace(".md", "") };
  });

  return caseStudyData;
}

export function getCaseStudyCategories() {
  const caseStudies = getAllCaseStudies();
  const uniqueCategories = [
    ...new Set(caseStudies.map((caseStudy) => caseStudy.category)),
  ];

  return uniqueCategories;
}
