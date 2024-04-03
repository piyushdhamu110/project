#include <bits/stdc++.h>
using namespace std;
#define int long long
signed main()
{
    int t;
    cin >> t;
    while(t--)
    {

    
    int n;
    cin >> n;
    int a[n];
    set<int> s;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    int x = 0, minus = 1;

    while (true)
    {
        int cnt = 0;
        for (int i = x; i < n; i++)
        {
            if ((a[i] - minus) >= 0)
            {
                cnt++;
            }
        }
        if ((a[x + 1] - minus) > 0)
        {
            x++;
        }
        else
        {
            x += 2;
        }
        minus++;

        s.insert(cnt);
        if (cnt == 0)
        {
            break;
        }
    }
    vector<int> v;
    for (auto i : s)
    {
        v.push_back(i);
    }

    for (int i = v.size() - 1; i >= 0; i--)
    {
        cout << v[i] << " ";
    }
    cout << endl;
}
}