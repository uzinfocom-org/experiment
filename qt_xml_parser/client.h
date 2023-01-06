#ifndef HEXODRONE_CONFIG_H
#define HEXODRONE_CONFIG_H

#include <QString>
#include <QtSql>

class Client : public QObject {
    Q_OBJECT
public:
    explicit Client(QObject* parent = 0);

signals:

public slots:
    bool load();
    bool close();
    bool set(const QString& key, const QString& value);
    QString get(const QString& key);

private:
    QSqlDatabase db;
};
#endif // HEXODRONE_CONFIG_H