export default function dots (current, total) {
  const tail = current > 3;
  const head = current + 5 < total;
  const start = tail ? (head ? current - 1 : total - 6) : 1;
  const last = Math.min(start + 4, total - 2);
  const pages = [0];

  if (tail) {
    pages.push('...');
  }

  for (let i = start; i <= last; i++) {
    pages.push(i);
  }

  if (head) {
    pages.push('...');
  }

  pages.push(total - 1);

  return pages;
}
