#include <bits/stdc++.h>
using namespace std;

struct rec
{
    int roll;
    string name;
};

class hashing
{
    rec hashtable[10];
    string name;
    int roll;

public:
    hashing()
    {
        for (int i = 0; i < 10; i++)
        {
            hashtable[i].roll = -1;
        }
    }
    void insert(int roll1, string name1)
    {
        int x = roll1 % 10;
        int u = 0;
        for (int i = 0; i < 10; i++)
        {
            if (hashtable[x % 10].roll == -1)
            {
                hashtable[x % 10].roll = roll1;
                hashtable[x % 10].name = name1;
                u++;
                break;
            }
            x++;
        }
        if (u == 0)
        {
            cout << "no space \n";
        }
    }

    int search(int roll1)
    {
        int u = 0;
        int i = roll1 % 10;
        for (int j = 0; j < 10; j++)
        {
            if (hashtable[i % 10].roll == roll1)
            {
                cout << "found : " << hashtable[i].name << endl;
                u++;
                break;
            }
            i++;
        }
        if (u == 0)
        {
            cout << "Not found\n";
        }
    }

    void display()
    {
        cout << "hashtable-:\n";
        for (int i = 0; i < 10; i++)
        {
            cout << hashtable[i].roll << " " << hashtable[i].name << endl;
        }
    }
    void dlt(int roll1)
    {
        int i = roll1 % 10;
        for (int j = 0; j < 10; j++)
        {
            if (hashtable[i % 10].roll == -1)
            {
                cout << "empty\n";
                break;
            }
            else if (hashtable[i % 10].roll == -2)
            {
                i++;
            }
            else if (hashtable[i % 10].roll == roll1)
            {
                hashtable[i % 10].roll = -2;
                hashtable[i % 10].name = "";
                break;
            }
        }
    }
};
int main()
{
    hashing obj;
    int a;
    string b;
    for (int i = 0; i < 10; i++)
    {
        cin >> a >> b;
        obj.insert(a, b);
    }
    obj.display();
    int n;
    cin >> n;
    while (n--)
    {
        int x;
        cout << "enter roll no to be searched\n";
        cin >> x;
        obj.search(x);
    }
    int k;
    cin >> k;
    while (k--)
    {
        cout << "enter roll no to be deleted\n";
        int y;
        cin >> y;
        obj.dlt(y);
    }
    obj.display();
}