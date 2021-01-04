import dayjs from "dayjs";

export const getAgoDate = (date) => {
  let days = dayjs().diff(date, "day");
  if (days !== 0) return `${days} days ago`;
  let hours = dayjs().diff(date, "hour");
  if (hours !== 0) return `${hours} hours ago`;
  let mins = dayjs().diff(date, "minute");
  return `${mins} mins ago`;
};

export const getJobDetails = (jobs, jobId) => {
  let jobObj = jobs.filter((el) => el.id == jobId)[0];

  return {
    description: jobObj.description,
    company_url: jobObj.company_url,
    company_logo: jobObj.company_logo,
    company_name: jobObj.company,
  };
};
