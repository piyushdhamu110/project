#include <bits/stdc++.h>
#include <set>
using namespace std;

int main()
{

    unordered_set<int> s1;
    s1.insert(10);
    s1.insert(5);
    s1.insert(12);
    s1.insert(4);

    for (auto i : s1)
    {
        cout << i << ' ';
    }
    return 0;
}