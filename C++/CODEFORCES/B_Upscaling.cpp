#include <bits/stdc++.h>
using namespace std;
int main()
{
    int t, n;
    cin >> t;
    while (t--)
    {
        cin >> n;

        for (int i = 0; i < 2 * n; i++)
        {
            if((i%4==0 || (i-1)%4==0))
            {
                for (int j = 0; j < 2 * n; j++)
                {
                    if ((j % 4 == 0 || (j - 1) % 4 == 0))
                    {
                        cout << "#";
                    }
                    else
                    {
                        cout << ".";
                    }
                }
            }
            else{
                for (int j = 0; j < 2 * n; j++)
                {
                    if ((j % 4 == 0 || (j - 1) % 4 == 0))
                    {
                        cout << ".";
                    }
                    else
                    {
                        cout << "#";
                    }
                }
            }
            cout << endl;
        }
    }
}