#include "client.h"
#include <QApplication>

int main(int argc, char** argv)
{
    QApplication app(argc, argv);
    qDebug() << "Test";
    return 0;
    return app.exec();
}