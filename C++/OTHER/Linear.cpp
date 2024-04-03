#include <bits/stdc++.h>
using namespace std;

struct rec
{
    int rollNo;
    string name;
};

class hashing
{
    rec hashtable[10];

public:
    hashing()
    {
        for (int i = 0; i < 10; ++i)
        {
            hashtable[i].rollNo = -1;
            hashtable[i].name = "";
        }
    }

    void insert(int rollNo, string name);
    void search(int rollNo);
    void display();
};

void hashing::insert(int rollNo, string name)
{
    int index = rollNo % 10;
    int initialIndex = index;

    while (hashtable[index].rollNo != -1)
    {
        index = (index + 1) % 10;
        if (index == initialIndex)
        {
            cout << "Hashtable is full. No more entry\n";
            return;
        }
    }

    hashtable[index].rollNo = rollNo;
    hashtable[index].name = name;

    cout << "Record inserted successfully." << endl;
}

void hashing::search(int rollNo)
{
    int index = rollNo % 10;
    int initialIndex = index;

    while (hashtable[index].rollNo != rollNo && hashtable[index].rollNo != -1)
    {
        index = (index + 1) % 10;

        if (index == initialIndex)
        {
            cout << "Record not found." << endl;
            return;
        }
    }

    if (hashtable[index].rollNo == rollNo)
    {
        cout << "Record found - Roll No: " << rollNo << ", Name: " << hashtable[index].name << endl;
    }
    else
    {
        cout << "Record not found." << endl;
    }
}

void hashing::display()
{
    for (int i = 0; i < 10; ++i)
    {
        cout << "Index " << i << ": ";
        if (hashtable[i].rollNo != -1)
        {
            cout << "Roll No: " << hashtable[i].rollNo << ", Name: " << hashtable[i].name;
        }
        else
        {
            cout << "Empty";
        }
        cout << endl;
    }
}

int main()
{
    hashing hashTable;

    cout << "-----------------Inserting-----------------\n";

    hashTable.insert(19, "Depanshu");
    hashTable.insert(8, "Ankit");
    hashTable.insert(11, "Aryan");
    hashTable.insert(21, "Divyanshi");
    hashTable.insert(33, "Mahindra");
    hashTable.insert(24, "Gourav");

    cout << "-----------------Display-----------------\n";
    hashTable.display();

    cout << "-----------------Search-----------------\n";
    hashTable.search(11);
    hashTable.search(39);

    return 0;
}