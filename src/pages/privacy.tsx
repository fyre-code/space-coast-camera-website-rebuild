import { GetStaticProps } from "next";
import SEOHead from "@/components/SEOHead";

interface Props {
  content: string;
}

export default function Privacy({ content }: Props) {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Space Coast Camera, Indialantic, FL"
        description="Space Coast Camera privacy policy. Space Coast Camera provides camera and lens rentals in Indialantic, FL. Contact us at (321) 831-2652."
        keywords="Space Coast Camera privacy policy, camera rental privacy, Space Coast Camera legal"
        url="https://www.spacecoastcamera.com/privacy"
      />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        {content ? (
          <div
            className="prose prose-gray max-w-none text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p className="text-gray-600">
            Privacy policy content is available at{" "}
            <a
              href="https://spacecoastcamera.com/privacy"
              className="text-amber-600 underline"
            >
              spacecoastcamera.com/privacy
            </a>
            .
          </p>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://spacecoastcamera.com/privacy", {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; SpaceCoastCameraBot/1.0)" },
    });
    const html = await res.text();
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    const body = bodyMatch ? bodyMatch[1] : "";
    const noScripts = body
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[\s\S]*?<\/nav>/gi, "")
      .replace(/<header[\s\S]*?<\/header>/gi, "")
      .replace(/<footer[\s\S]*?<\/footer>/gi, "");
    const mainMatch = noScripts.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    const content = mainMatch ? mainMatch[1].trim() : noScripts.trim();
    return { props: { content }, revalidate: 86400 };
  } catch {
    return { props: { content: "" }, revalidate: 86400 };
  }
};
