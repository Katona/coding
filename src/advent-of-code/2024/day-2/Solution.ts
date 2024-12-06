const change = (a: number, b: number) => {
  return Math.sign(a - b);
};

const isSafeReport = (report: number[]) => {
  for (let i = 1; i < report.length - 1; i++) {
    const curr = report[i] ?? 0;
    const prev = report[i - 1] ?? 0;
    const next = report[i + 1] ?? 0;
    if (change(prev, curr) !== change(curr, next)) return false;
    const prevDiff = Math.abs(prev - curr);
    const nextDiff = Math.abs(next - curr);
    if (prevDiff < 1 || prevDiff > 3) return false;
    if (nextDiff < 1 || nextDiff > 3) return false;
  }
  return true;
};

const safeReportCounts = (reports: number[][]) => {
  return reports.reduce((count, report) => (isSafeReport(report) ? count + 1 : count), 0);
};
const safeReportCountsWithDampener = (reports: number[][]) => {
  return reports.reduce((count, report) => {
    for (let i = 0; i < report.length; i++) {
      const dampenedReport = [...report];
      dampenedReport.splice(i, 1);
      if (isSafeReport(dampenedReport)) return count + 1;
    }
    return count;
  }, 0);
};

export { isSafeReport, safeReportCounts, safeReportCountsWithDampener };
