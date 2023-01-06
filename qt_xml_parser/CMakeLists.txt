cmake_minimum_required(VERSION 3.22)
project(xmlparser)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

find_package(Qt5 COMPONENTS Core Gui Widgets Network Xml Sql REQUIRED)

add_executable(xmlparser main.cpp client.cpp client.h)
target_link_libraries(xmlparser Qt5::Core Qt5::Gui Qt5::Widgets Qt5::Network Qt5::Xml Qt5::Sql)