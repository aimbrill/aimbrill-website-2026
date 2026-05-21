type JsonLdProps = {
  data: object;
};

/** JSON-LD in document head for search and AI retrieval. */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
