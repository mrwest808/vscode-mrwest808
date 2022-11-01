import * as vscode from "vscode";
import { vimFriendlyExpandAbbreviation } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  let disposables = [
    vscode.commands.registerCommand(
      "mrwest808.vimFriendlyExpandAbbreviation",
      vimFriendlyExpandAbbreviation
    ),
  ];

  context.subscriptions.push(...disposables);
}

export function deactivate() {}
