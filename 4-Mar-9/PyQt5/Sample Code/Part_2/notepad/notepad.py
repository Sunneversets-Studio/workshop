import sys
from PyQt5.QtWidgets import QMainWindow, QFileDialog, QApplication

from ui_Notepad import Ui_MainWindow
 
class Ui(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super(Ui, self).__init__()
        self.setupUi(self)
        self.show()

        self.actionOpen.triggered.connect(self.openFile)
        self.actionSave.triggered.connect(self.saveFile)
        self.textArea.textChanged.connect(self.wordCnt)

    def openFile(self):
        self.fname = QFileDialog.getOpenFileName(
            self, 'Open file', 
           '.', "Plain text (*.txt)"
        )[0]

        if self.fname:
            file = open(self.fname, "r")
            self.textArea.setPlainText(file.read())
            file.close()

    def saveFile(self):
        if self.fname:
            file = open(self.fname, "w")
            file.write(self.textArea.toPlainText())
            file.close()
 
    def wordCnt(self):
        self.statusBar().showMessage(
            "Length: "+ str(len(self.textArea.toPlainText()))
        )

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = Ui()
    sys.exit(app.exec_())