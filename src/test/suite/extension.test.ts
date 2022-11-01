import * as assert from "assert";
import * as vscode from "vscode";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("vimFriendlyExpandAbbreviation", async () => {
    const doc = await vscode.workspace.openTextDocument({
      content: "div",
      language: "html",
    });
    await vscode.window.showTextDocument(doc);
    assert.strictEqual(doc.getText(), "div");
    await vscode.commands.executeCommand("extension.vim_insert");
    const editor = vscode.window.activeTextEditor!;
    editor.selection = new vscode.Selection(0, 3, 0, 3);
    await vscode.commands.executeCommand(
      "mrwest808.vimFriendlyExpandAbbreviation"
    );
    assert.strictEqual(doc.getText(), "<div></div>");
    assert.strictEqual(editor.selection.active.character, 5);
  });
});
