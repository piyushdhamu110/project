#include <bits/stdc++.h>
using namespace std;
int main()
{
    int t, n;
    cin >> t;
    while (t--)
    {
        string s;
        cin >> s;

        int hour = (s[0] - '0') * 10 + s[1] - '0';

        if (hour == 0)
        {
            cout << "12" << s[2] << s[3] << s[4] << " "
                 << "AM\n";
        }
        else if (hour == 12)
        {
            cout << s << " "
                 << "PM\n";
        }
        else if (hour > 0 && hour < 12)
        {
            cout << s << " "
                 << "AM\n";
        }
        else
        {
            if ((hour - 12) < 10)
                cout << "0" << hour - 12 << s[2] << s[3] << s[4] << " "
                     << "PM\n";
            else
            {
                cout << hour - 12 << s[2] << s[3] << s[4] << " "
                     << "PM\n";
            }
        }
    }
}