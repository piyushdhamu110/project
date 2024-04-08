#include <bits/stdc++.h>
using namespace std;

struct rec
{
    int rollNo;
    string name;
};

class linear_hashing
{
    rec linear_hashtable[10];

public:
    linear_hashing()
    {
        for (int i = 0; i < 10; ++i)
        {
            linear_hashtable[i].rollNo = -1;
            linear_hashtable[i].name = "";
        }
    }

    void linear_insert(int rollNo, string name);
    void linear_search(int rollNo);
    void linear_delete(int rollNo);
    void linear_display();
};

void linear_hashing::linear_insert(int rollNo, string name)
{
    int index = rollNo % 10;
    int initialIndex = index;

    while (linear_hashtable[index].rollNo != -1)
    {
        index = (index + 1) % 10;
        if (index == initialIndex)
        {
            cout << "linear_hashtable is full. No more entry\n";
            return;
        }
    }

    linear_hashtable[index].rollNo = rollNo;
    linear_hashtable[index].name = name;

    cout << "Record linear_inserted successfully." << endl;
}

void linear_hashing::linear_search(int rollNo)
{
    int index = rollNo % 10;
    int initialIndex = index;

    while (linear_hashtable[index].rollNo != rollNo && linear_hashtable[index].rollNo != -1)
    {
        index = (index + 1) % 10;

        if (index == initialIndex)
        {
            cout << "Record not found." << endl;
            return;
        }
    }

    if (linear_hashtable[index].rollNo == rollNo)
    {
        cout << "Record found - Roll No: " << rollNo << ", Name: " << linear_hashtable[index].name << endl;
    }
    else
    {
        cout << "Record not found." << endl;
    }
}

void linear_hashing::linear_delete(int rollNo)
{
    int index = rollNo % 10;
    int initialIndex = index;

    while (linear_hashtable[index].rollNo != rollNo && linear_hashtable[index].rollNo != -1)
    {
        index = (index + 1) % 10;

        if (index == initialIndex)
        {
            cout << "Record not found for deletion." << endl;
            return;
        }
    }

    if (linear_hashtable[index].rollNo == rollNo)
    {
        linear_hashtable[index].rollNo = 0;
        linear_hashtable[index].name = "";

        cout << "Record linear_deleted successfully." << endl;
    }
    else
    {
        cout << "Record not found for deletion." << endl;
    }
}

void linear_hashing::linear_display()
{
    for (int i = 0; i < 10; ++i)
    {
        cout << "Index " << i << ": ";
        if (linear_hashtable[i].rollNo != -1)
        {
            cout << "Roll No: " << linear_hashtable[i].rollNo << ", Name: " << linear_hashtable[i].name;
        }
        else
        {
            cout << "Empty";
        }
        cout << endl;
    }
}

// 

struct chain
{
    int key, chain;
};

class hashing
{
    chain hashtable[10];

public:
    hashing()
    {
        for (int i = 0; i < 10; ++i)
        {
            hashtable[i].key = -1;
            hashtable[i].chain = -1;
        }
    }

    void insert(int key);
    // void search(int key, int chain);
    // void Delete(int key, int chain);
    void linear_display();
};

void hashing::insert(int value)
{

    int index = value % 10;
    int initialIndex = index;

    // Empty
    if (hashtable[index].key == -1 && hashtable[index].chain == -1)
    {
        hashtable[index].key = value;
        return;
    }

    // not empty && having same hash value
    else if (hashtable[index].key != -1 && (hashtable[index].key) % 10 == value % 10)
    {

        if (hashtable[index].chain != -1)
        {
            index = ((hashtable[index].chain));

            while (hashtable[index].chain != -1)
            {
                index = ((hashtable[index].chain));
            }
        }

        int store = index;

        while (hashtable[index].key != -1)
        {
            index = (index + 1) % 10;
        }

        hashtable[index].key = value;
        hashtable[store].chain = index;
    }

    // not empty and having different hash value
    else if (hashtable[index].key != -1 && (hashtable[index].key) % 10 != value % 10)
    {
        int store;
        while (hashtable[index].key != -1)
        {
            if ((hashtable[index].key) % 10 == value % 10)
            {
                store = index;
            }
            index++;
            index = index % 10;
        }

        hashtable[index].key = value;
        hashtable[store].chain = index;
    }
}

// void hashing::search(int key, int chain)
// {
// }
// void hashing::Delete(int key, int chain)
// {
// }

void hashing::linear_display()
{
    for (int i = 0; i < 10; ++i)
    {
        cout << "Index " << i << ": ";
        if (hashtable[i].key != -1)
        {
            cout << "Key: " << hashtable[i].key << ", Chain: " << hashtable[i].chain;
        }
        else
        {
            cout << "Empty";
        }
        cout << endl;
    }
}