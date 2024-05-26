import express, { json } from "express";
import cors from "cors";
import { main } from "./jobsearch.js";
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/resume", async (req, res) => {
  var jobRequirements = `
   Introduction:
      • Refine Plastic Surgery, a premier institution specializing in aesthetic and reconstructive procedures, is seeking a meticulous and skilled Accountant to join our Finance and Accounts department. Our commitment to excellence extends beyond patient care to include robust financial management and accountability. Reporting to the Head of Human Resource and Administration, this role involves preparing financial reports, performing account reconciliations, maintaining the general ledger, preparing tax returns, assisting with audit preparations, and performing other assigned accounting duties.

      Role Overview:

      As an Accountant at Refine Plastic Surgery, you will be responsible for ensuring accurate financial reporting and compliance with all relevant financial regulations. Your duties will include preparing detailed financial statements, conducting regular account reconciliations, managing the general ledger, and handling tax-related matters. Additionally, you will support audit preparations and perform various accounting tasks to ensure the financial health and transparency of our operations. Join us in our mission to uphold the highest standards of financial management and contribute to the overall success of our institution.

      Duties and Responsibilities:
      • Assisting with annual audit preparations
      • Custodian of accountable documents, i.e., receipt books, cheque books, and other documents associated with accounting
      • Reviewing and recommending modifications to accounting systems and procedures
      • Preparing revenue projections and forecasting expenditure
      • Reviewing journal entries of junior accountants to ensure accuracy
      • Investigating and resolving audit findings, account discrepancies, and issues of non-compliance
      • Making recommendations based on analysis and status of reserves, assets, and expenditures
      • Producing error-free accounting reports and presenting their results
      • Coordinating accounting functions and programs
      • Assisting with financial and tax audits
      • Maintaining and reconciling various ledgers, bank accounts, budgetary control reports, and expenditure control
      • Balancing the debt and the credit levels of the company to ensure smooth operation
      • Following up on reconciling items for clearance
      • Performing other accounting duties and supporting junior staff as required or assigned
      • Developing performance financial measures that support the hospital's strategy and direction
      • Maintaining books of accounts and submitting them for consideration by the Board within the agreed timelines
      • Preparing and submitting financial reports and statements and providing advice to the Board on their implications
      • Reviewing management accounts and ensuring they are submitted within agreed monthly timelines
      • Managing hospital banking/cash transactions, including cash-flow management. This includes negotiating bank facilities, updating bank mandates and signatories, and ensuring compliance with bank covenants and agreements
      • Ensuring compliance with legal financial obligations and requirements of statutory bodies
      • Responsible for financial risk management

      Requirements Education and Qualifications:
      • University degree in Commerce/Economics/Business Administration or related field
      • Working knowledge of tax laws and Generally Accepted Accounting Principles as well as IFRS
      • Strong financial analysis skills
      • Registered member of ICPAK or any other equivalent will be an added advantage
      • Must be a qualified accountant with relevant professional qualifications such as Certified Public Accountant (CPA-K) or ACCA
      • Minimum of 5 years accounting experience with 3 years at management level
      • Hospital experience is an added advantage

      Key Competencies and Skills:
      • Strong interpersonal and communication skills
      • Excellent problem-solving skills
      • Strong leadership qualities
      • Proficiency in Microsoft Office, particularly with Excel. Proficiency in ERP is also required
      • Ability to train and manage staff
      • Ability to work with little to no supervision
      • Highest level of integrity

      BenefitsJoin our team at Refine Plastic Surgery and apply your expertise as an Accountant in a dynamic and supportive environment dedicated to maintaining financial excellence and enhancing operational efficiency `;
  var resume = await main(jobRequirements);
  res.send({ message: resume });
});

app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
