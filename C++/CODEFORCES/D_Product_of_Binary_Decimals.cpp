#include <bits/stdc++.h>
using namespace std;
int main()
{
    int t, n;
    cin >> t;
    while (t--)
    {
        int temp;
        cin >> temp;
        string s = to_string(temp);
        int n = s.size();
        bool f = 0;
        // cout << s[0] <<" "<< s[n - 1] << endl;

        for (int i = 0; i < n; i++)
        {
            if (s[i] != '1' && s[i] != '0')
            {
                f = 1;
                // cout << "------";
                break;
            }
            else
                continue;
        }
        if (f == 1)
        {
            if (s[0] != '1' || s[n - 1] != '1' || (s[n - 1] != '0' && s[n - 1] != '1'))
            {
                cout << "NO\n";
            }
            else
            {
                int even_sum = 0, odd_sum = 0;
                for (int i = 0; i < n; i++)
                {
                    if (i % 2 == 0)
                    {
                        even_sum += s[i] - '0';
                    }
                    else
                        odd_sum += s[i] - '0';
                }

                if (abs(even_sum - odd_sum) % 11 == 0)
                {
                    cout << "YES\n";
                }
                else
                    cout << "NO\n";
            }
        }
        else
            cout << "YES\n";
    }
}