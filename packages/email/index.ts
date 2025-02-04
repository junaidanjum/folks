import { render } from "@react-email/render";

// @ts-ignore
import Invite from "./emails/Invite";
// @ts-ignore
import PaswordResetConfirmation from "./emails/PasswordResetConfirmation";
// @ts-ignore
import PasswordResetRequest from "./emails/PasswordResetRequest";
// @ts-ignore
import VerifyEmail from "./emails/VerifyEmail";

export function renderInvite(url: string) {
  return render(Invite({ url: url }));
}

export function renderVerifyEmail(url: string, name: string) {
  return render(VerifyEmail({ url: url, name: name }));
}

export function renderPasswordResetRequest(url: string, name: string) {
  return render(PasswordResetRequest({ url: url, name: name }));
}

export function renderPasswordResetConfirmation(name: string) {
  return render(PaswordResetConfirmation({ name: name }));
}
