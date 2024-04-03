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

	void insert(int key, int chain);
	void search(int key, int chain);
	void Delete(int key, int chain);
	void display();
};

void hashing::insert(int key, int chain)
{

	int index = key % 10;
	int initialIndex = index;

	if (hashtable[index].key == -1 && hashtable[index].chain == -1)
	{
		hashtable[index].key = key;
	}
	else if (hashtable[index].key != -1)
	{
		if (hashtable[index].chain == -1)
		{
			int store = -2;
			while (hashtable[index].key != -1)
			{

				if ((hashtable[index].key) % 10 == initialIndex)
				{
					store = index;
				}

				index = (index + 1) % 10;
				if (index == initialIndex)
				{
					cout << "Hashtable is full. No more entry\n";
					return;
				}
			}

			hashtable[index].key = key;
			if (store != -2)
			{
				hashtable[store].chain = index;
			}
		}
		else
		{
			while (hashtable[index].chain != -1)
			{
				index = hashtable[index].chain;
			}
		}
	}

	while (hashtable[index].key != -1)
	{
		index = (index + 1) % 10;
		if (index == initialIndex)
		{
			cout << "Hashtable is full. No more entry\n";
			return;
		}
	}

	hashtable[index].key = key;
	hashtable[index].chain = chain;

	cout << "Record inserted successfully." << endl;
}
void hashing::search(int key, int chain)
{
}
void hashing::Delete(int key, int chain)
{
}

void hashing::display()
{
}

int main()
{
	hashing h;
}