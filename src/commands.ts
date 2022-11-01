import * as vscode from "vscode";

// https://github.com/VSCodeVim/Vim/issues/5884
export async function vimFriendlyExpandAbbreviation() {
  try {
    await vscode.commands.executeCommand(
      "editor.emmet.action.expandAbbreviation"
    );
    await vscode.commands.executeCommand("extension.vim_escape");
    await vscode.commands.executeCommand("extension.vim_insert");

    // Defer the balanceIn command to ensure that the cursor is in the
    // correct position
    await new Promise((resolve) => {
      setTimeout(() => {
        vscode.commands
          .executeCommand("editor.emmet.action.balanceIn")
          .then(resolve);
      }, 2);
    });
  } catch (error) {
    vscode.window.showErrorMessage((error as Error).message ?? "Doh");
  }
}
