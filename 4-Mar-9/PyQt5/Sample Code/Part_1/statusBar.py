# -*- coding: utf-8 -*-
# Copyright 2007 - 2019 Jan Bodnar 
# ZetCode.com

import sys
from PyQt5.QtWidgets import QMainWindow, QApplication, QPushButton

class Example(QMainWindow):
    
    def __init__(self):
        super().__init__()
        
        self.initUI()
        
        
    def initUI(self):               
        self.statusBar().showMessage('PyQt5 Ready')

        btn = QPushButton('Click Me', self)
        btn.clicked.connect(
            lambda: self.statusBar().showMessage('Oh you have clicked the button')
        )

        self.resize(300, 300)
        self.setWindowTitle('Statusbar')
        self.show()

if __name__ == '__main__':
    
    app = QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())