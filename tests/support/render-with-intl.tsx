import { NextIntlClientProvider } from "next-intl";
import { render } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

const messages = { en, fr } as const;

export function renderWithIntl(
  ui: ReactNode,
  locale: keyof typeof messages = "en",
): ReturnType<typeof render> {
  return render(
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      {ui as ReactElement}
    </NextIntlClientProvider>,
  );
}
