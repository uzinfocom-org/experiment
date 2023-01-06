#include "client.h"

Client::Client(QObject* parent)
    : QObject(parent)
{
}

bool Client::load()
{
    db = QSqlDatabase::addDatabase("QSQLITE");
    db.setDatabaseName("data/base.db");
    if (!db.open()) {
        return false;
    }

    return true;
}

bool Client::close()
{
    db.close();
    return true;
}

bool Client::set(const QString& key, const QString& value)
{
    QSqlQuery query;
    query.prepare("UPDATE settings SET setting_value = :value WHERE setting_key = :key");
    query.bindValue(":key", key);
    query.bindValue(":value", value);

    return query.exec();
}

QString Client::get(const QString& key)
{
    QSqlQuery query;
    query.prepare("SELECT setting_key, setting_value FROM settings WHERE setting_key = :key");
    query.bindValue(":key", key);

    if (query.exec()) {
        if (query.first()) { // get the first record in the result,
            QString value = query.value("setting_value").toString();
            return value;
        }
    }

    return "";
}