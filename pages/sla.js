import Head from "next/head";
import Link from "next/link";

import PageDefault from "@/layouts/PageDefault";

export default function Sla() {
    return (
        <>
            <Head>
                <title>Support Services</title>
                <meta key="robots" name="robots" content="noindex,follow" />
            </Head>
            <PageDefault>
                <div className="mb-6">
                    <h1>
                        RUBY.IO, INC. D/B/A NUE.IO <br />
                        SUPPORT SERVICES
                    </h1>
                </div>

                <p>
                    <strong>1. CONTACTING SUPPORT</strong>
                </p>

                <br />
                <ul className="pl-6">
                    <li>
                        1.1 Customer may designate up to two primary Customer
                        Contacts. Customer may also designate one backup
                        Customer Contact for each primary Customer Contact.
                        Customer shall provide Nue.io a list of its Customer
                        Contacts as well as updates to that list as appropriate.
                    </li>
                    <li>
                        1.2 Customer Contacts can communicate with Nue.io
                        support as follows: <strong>Customer Portal</strong>:{" "}
                        <Link href="http://support@nue.io/">
                            <a>http://support@nue.io/</a>
                        </Link>
                    </li>
                    <li>
                        1.3 Support is available 8:00 a.m. to 6:00 p.m. PST time
                        zone, Monday through Friday, excluding Nue.io holidays.
                    </li>
                </ul>
                <p>
                    <strong>2. RESPONSE LEVELS. </strong> Nue.io will respond to
                    submitted cases as follows:
                </p>
                <br />
                <table>
                    <thead>
                        <tr>
                            <td className="">Priority</td>
                            <td className="">Definition</td>
                            <td className=" ">Response Level</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">P1</td>
                            <td className="">
                                Urgent: The Nue.io Service on the production
                                system is not accessible or operational.
                            </td>
                            <td className="">
                                Support for P1 cases is available from 6:00 a.m.
                                to 6:00 p.m. PST time zone, Monday through
                                Friday, excluding Nue.io holidays. Initial
                                response within 1 business hour of case being
                                submitted. The designated Customer Contact will
                                be updated twice daily during business days
                                regarding progress. Actions to resolve will
                                commence within 1 business hour.
                            </td>
                        </tr>
                        <tr>
                            <td className="">P2</td>
                            <td className="">
                                Important: (1) The Nue.io Service on the
                                production system is operational but
                                experiencing a major functional loss that
                                impedes transactions from being completed; or
                                (2) the development/test system is not
                                accessible or operational.
                            </td>
                            <td className="">
                                Support for P2 cases is available from 6:00 a.m.
                                to 6:00 p.m. PST time zone, Monday through
                                Friday, excluding Nue.io holidays. Initial
                                response within 2 business hours of case being
                                submitted. The designated Customer Contact will
                                be updated daily during business days regarding
                                progress. Actions to resolve will commence
                                within 4 business hours.
                            </td>
                        </tr>
                        <tr>
                            <td className="">P3</td>
                            <td className="">
                                Necessary: (1) The Nue.io Service on the
                                production system is experiencing a functional
                                loss that does not significantly impede
                                transactions from being completed but that
                                affects performance or user quality; or (2) the
                                development/test system is experiencing a major
                                functional loss that impedes transactions from
                                being completed.
                            </td>
                            <td className="">
                                Initial response within 4 business hours of case
                                being submitted. The designated Customer Contact
                                will be updated weekly regarding progress.
                                Actions to resolve will commence within 2
                                business days.
                            </td>
                        </tr>
                        <tr>
                            <td className="">P4</td>
                            <td className="">
                                Minor: (1) The Nue.io Service has a cosmetic or
                                other minor error that does not affect its
                                performance or functionality; or (2) Customer
                                questions regarding use of the Nue.io Service.
                            </td>
                            <td className="">
                                Initial response within 1 business day of case
                                being submitted. The designated Customer Contact
                                will be updated upon request.
                            </td>
                        </tr>
                        <tr>
                            <td className="">P1</td>
                            <td className="">
                                Enhancement Request: Request for a new feature
                                that does not currently exist in the Nue.io
                                Service.
                            </td>
                            <td className="">
                                Requests will be logged and evaluated in
                                Nue.io&apos; sole discretion for inclusion in a
                                future release. The designated Customer Contact
                                will be updated upon request.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    <strong>3. CUSTOMER RESPONSIBILITIES. </strong>
                </p>
                <br />
                <ul>
                    <li>
                        3.1 Customer shall cooperate with Nue.io and provide
                        relevant information to enable Nue.io to reproduce,
                        troubleshoot and resolve the experienced error.
                    </li>
                    <li>
                        3.2 Customer shall designate at least one primary IT
                        contact and one backup IT contact, who shall be the
                        primary IT contacts for Nue.io and Customer Users with
                        regard to Customer IT issues across all Customer sites.
                        Customer IT issues include issues relating to
                        Customer&apos;s hardware, software, desktop setup,
                        network, ISP and all other technical issues for which
                        Customer is responsible that may affect Customer&apos;s
                        ability to access and use the Nue.io Service.
                    </li>
                </ul>
            </PageDefault>
        </>
    );
}
