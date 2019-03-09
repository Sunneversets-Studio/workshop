# -*- coding: utf-8 -*-
# Copyright 2007 - 2019 Jan Bodnar 
# ZetCode.com

import sys
from PyQt5.QtWidgets import QApplication, QWidget

if __name__ == '__main__':
    
    app = QApplication(sys.argv)

    w = QWidget()
    w.setWindowTitle('hello, world')
    w.show()
    
    sys.exit(app.exec_())
