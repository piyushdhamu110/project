#include <bits/stdc++.h>
using namespace std;

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
    void search(int key);
    void display();
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
        int store = -1;

        while (hashtable[index].key != -1)
        {
            if ((hashtable[index].key) % 10 == value % 10)
            {
                store = index;
                break;
            }
            index++;
            if (index == initialIndex)
            {
                cout << "Table is full\n";
                return;
            }
            index = index % 10;
        }

        hashtable[index].key = value;
        if (store != -1)
        {
            hashtable[store].chain = index;
        }
    }
}

void hashing::search(int value)
{
    int index = value % 10;
    int initialIndex = index;

    // if hash value is equal
    if ((hashtable[index].key) % 10 == value % 10)
    {
        // follow chain
        while (index != -1 && hashtable[index].key != value)
        {
            index = (hashtable[index].chain) % 10;
        }

        if (index != -1 && hashtable[index].key == value)
        {
            cout << "Value found\n";
        }
        else
        {
            cout << "Value not found\n";
        }
    }
    // if hash value is not equal
    else
    {
        // find same hash value to follow chain
        while ((hashtable[index].key) % 10 != value % 10)
        {
            index = (index + 1) % 10;
        }

        // follow chain
        while (index != -1 && hashtable[index].key != value)
        {
            index = (hashtable[index].chain) % 10;
        }

        if (index != -1 && hashtable[index].key == value)
        {
            cout << "Value found\n";
        }
        else
        {
            cout << "Value not found\n";
        }
    }
}
void hashing::display()
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

int main()
{
    hashing h;

    cout << "-----------------Inserting-----------------\n";

    h.insert(131);
    h.insert(13);
    h.insert(14);
    h.insert(31);
    h.insert(51);
    h.insert(16);
    h.insert(71);
    h.insert(74);
    h.insert(75);

    cout << "-----------------Display-----------------\n";

    h.display();

    cout << "-----------------Searching-----------------\n";

    h.search(31);
    h.search(41);
    h.search(131);
    h.search(75);
    h.search(755);
}