const LOGO = "https://framerusercontent.com/images/urFmPvvAKkpVpjuL7AooFl6ZRT4.svg";

export function Footer() {
  const col = "space-y-3";
  const link = "block text-sm text-text-secondary hover:text-foreground transition-colors";
  const heading = "text-xs uppercase tracking-wider text-text-tertiary mb-4";

  return (
    <footer className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <img src={LOGO} alt="Ault Blockchain" className="h-7 w-auto mb-4" />
            <p className="text-sm text-text-secondary leading-relaxed">
              Sovereign Layer 1 chain with a Licensed Mining Node layer for off-chain verifiable work.
            </p>
          </div>

          <div className={col}>
            <div className={heading}>Network</div>
            <a className={link} href="/#about">What is Ault</a>
            <a className={link} href="/#architecture">Technology & Architecture</a>
            <a className={link} href="/nodes">Licensed Mining Nodes</a>
          </div>

          <div className={col}>
            <div className={heading}>Documents</div>
            {/* TODO: replace /whitepaper placeholder route with canonical whitepaper PDF when available */}
            <a className={link} href="/whitepaper">Whitepaper</a>
            <a className={link} href="https://docs.aultblockchain.com" target="_blank" rel="noopener noreferrer">Public Docs ↗</a>
            <a className={link} href="/tokenomics">Tokenomics</a>
            <a className={link} href="/legal/constitution">Constitution</a>
            <a className={link} href="/legal/terms">Terms & Conditions</a>
            <a className={link} href="/legal/privacy">Privacy Policy</a>
            <a className={link} href="/legal/risk-disclosures">Risk Disclosures</a>
          </div>

          <div className={col}>
            <div className={heading}>Connect</div>
            <a className={link} href="https://t.me/officialaultblockchain" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a className={link} href="https://x.com/aultblockchain" target="_blank" rel="noopener noreferrer">X</a>
            <a className={link} href="https://discord.gg/Kwae6KsV8J" target="_blank" rel="noopener noreferrer">Discord</a>
            <a className={link} href="https://www.instagram.com/aultblockchain/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>

          <div className={col}>
            <div className={heading}>Contact</div>
            <a className={link} href="/contact">Contact us</a>
            <a className={link} href="mailto:support@aultblockchain.com">support@aultblockchain.com</a>
            <a className={link} href="mailto:sales@aultblockchain.com">sales@aultblockchain.com</a>
            <a className={link} href="mailto:press@aultblockchain.com">press@aultblockchain.com</a>
          </div>
        </div>

        <p className="mt-12 text-xs italic leading-relaxed text-text-tertiary max-w-5xl">
          This website is intended to be for informational purposes only and does not constitute investment, legal, or financial advice, nor should it be relied upon as such. Nothing herein constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation of any security or digital asset. Any forward-looking statements regarding products, services, or future development are subject to known and unknown risks, including technical, regulatory, and market conditions, and no assurance can be given that the plans or objectives described herein will be achieved. Actual results may differ materially from those expressed or implied in any forward-looking statement. For more information, visit aultblockchain.com.
        </p>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-text-tertiary">
          <span>© 2026 Ault Capital Group. All rights reserved.</span>
          <span>Ault Capital Group is a wholly-owned subsidiary of Hyperscale Data, Inc. (NYSE: GPUS).</span>
        </div>
      </div>
    </footer>
  );
}
