# -*- coding: utf-8 -*-
# Copyright 2007 - 2019 Jan Bodnar 
# ZetCode.com

import sys
from PyQt5.QtWidgets import QMainWindow, QAction, qApp, QApplication


class Example(QMainWindow):
    def __init__(self):
        super().__init__()
        
        self.initUI()  
        
    def initUI(self):               
        exitAct = QAction('&Exit', self)        
        exitAct.setShortcut('Ctrl+Q')
        exitAct.setStatusTip('Exit application')
        exitAct.triggered.connect(qApp.quit)

        self.statusBar()

        menubar = self.menuBar()
        fileMenu = menubar.addMenu('&File')
        fileMenu.addAction(exitAct)
        
        self.resize(300, 300)
        self.setWindowTitle('Simple menu')    
        self.show()
        
        
if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())