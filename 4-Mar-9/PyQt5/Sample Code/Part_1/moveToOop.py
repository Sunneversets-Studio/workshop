# -*- coding: utf-8 -*-
# Copyright 2007 - 2019 Jan Bodnar 
# ZetCode.com

import sys
from PyQt5.QtWidgets import QApplication, QWidget

class oopExample(QWidget):
    
    def __init__(self):
        super().__init__()

        self.initUI()
        
    def initUI(self):
        self.resize(300, 300)
        self.move(300, 300)

        self.show()
        
        
if __name__ == '__main__':
    
    app = QApplication(sys.argv)
    ex = oopExample()
    sys.exit(app.exec_())