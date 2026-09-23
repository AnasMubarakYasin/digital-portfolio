import Typography from "@components/Typography";
export default function Test() {
  return (
    <div>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>

      <Typography variant="overline">overline</Typography>
      <Typography variant="title">title</Typography>
      <Typography variant="subtitle">subtitle</Typography>
      <Typography variant="body">body</Typography>

      <Typography variant="base">base</Typography>

      <Typography variant="base" size="7xl" weight="extrabold">Custom 7xl extrabold</Typography>
    </div>
  );
}
