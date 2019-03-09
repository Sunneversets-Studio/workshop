# -*- coding: utf-8 -*-
# Copyright 2007 - 2019 Jan Bodnar 
# ZetCode.com

import sys
from PyQt5.QtWidgets import QWidget, QPushButton, QApplication

class Example(QWidget):
    
    def __init__(self):
        super().__init__()
        
        self.initUI()
        
    def initUI(self):               
        
        btn = QPushButton('Quit', self)
        btn.clicked.connect(self.close)
        btn.resize(btn.sizeHint())

        self.resize(300, 300)
        self.setWindowTitle('Quit button')    
        self.show()
        
if __name__ == '__main__':
    
    app = QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())