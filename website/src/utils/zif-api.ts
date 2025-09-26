import type { NextApiRequest, NextApiResponse } from "next"
import puppeteer from "puppeteer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const browser = await puppeteer.launch({ args: ["--no-sandbox"] })
        const page = await browser.newPage()
        await page.goto(
            "https://blogs.uni-bielefeld.de/blog/zif/entry/artificial-intelligence-and-digital-autonomy",
            { waitUntil: "networkidle0" }
        )

        const mainContent = await page.$eval(".section__main", el => el.innerHTML)
        await browser.close()

        res.status(200).send(mainContent)
    } catch (err) {
        res.status(500).send("Fehler beim Laden der Seite")
    }
}
