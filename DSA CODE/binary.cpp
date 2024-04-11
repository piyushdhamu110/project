// binary tree
#include <bits/stdc++.h>
using namespace std;

class node
{
public:
    int data;
    node *left;
    node *right;
    node(int item)
    {
        this->left = NULL;
        this->right = NULL;
        this->data = item;
    }
};

// code for normal binary tree insertion
void insert(node *root, int key)
{
    node *t = new node(key);
    node *temp = root;

    cout << " where to enter : right(r) or left(l) of " << temp->data;
    char c;
    cin >> c;
    if (c == 'r')
    {
        if (temp->right == NULL)
        {
            temp->right = t;
            cout << "node entered successfully\n";
            return;
        }
        else
        {
            temp = temp->right;
            insert(temp, key);
        }
    }
    else
    {
        if (temp->left == NULL)
        {
            cout << "node entered succesfully\n";
            return;
        }
        else
        {
            temp = temp->left;
            insert(temp, key);
        }
    }
}

// insertion in binary searchtree

void insertbtree(node *root, int key)
{
    node *t = new node(key);
    node *temp = root;
    while (1)
    {
        if (temp->data > key)
        {
            if (temp->left == NULL)
            {
                temp->left = t;
                cout << "Node entered successfully\n";
                break;
            }
            else
            {
                temp = temp->left;
            }
        }
        else
        {
            if (temp->right == NULL)
            {
                temp->right = t;
                cout << "Node entered succesfully\n";
                break;
            }
            else
            {
                temp = temp->right;
            }
        }
    }
}

// recursive function for inorder
void displayinorder(node *root)
{
    node *temp = root;
    if (temp->left != NULL)
    {
        displayinorder(temp->left);
    }
    cout << temp->data << " ";

    if (temp->right != NULL)
    {
        displayinorder(temp->right);
    }
}

// iterative function for inorder
void iterativeinorder(node *root)
{
    stack<node *> st;
    node *t = root;
    while (t != NULL || !st.empty())
    {
        while (t != NULL)
        {
            st.push(t);
            t = t->left;
        }
        t = st.top();
        st.pop();
        cout << t->data << " ";
        t = t->right;
    }
}

void displaypreorder(node *root)
{
    node *temp = root;
    cout << temp->data << " ";

    if (temp->left != NULL)
    {
        displayinorder(temp->left);
    }

    if (temp->right != NULL)
    {
        displayinorder(temp->right);
    }
}

void iterativepreorder(node *root)
{
    stack<node *> st;
    st.push(root);
    while (st.empty() == false)
    {
        node *temp = st.top();
        cout << temp->data << " ";
        st.pop();
        if (temp->right != NULL)
        {
            st.push(temp->right);
        }
        if (temp->left != NULL)
        {
            st.push(temp->left);
        }
    }
}

void displaypostorder(node *root)
{
    node *temp = root;

    if (temp->left != NULL)
    {
        displaypostorder(temp->left);
    }

    if (temp->right != NULL)
    {
        displaypostorder(temp->right);
    }
    cout << temp->data << " ";
}

void iterativepostorder(node *root)
{
    if (root == NULL)
        return;
    stack<node *> s1, s2;
    s1.push(root);
    while (!s1.empty())
    {
        node *temp = s1.top();
        s1.pop();
        s2.push(temp);
        if (temp->left != NULL)
        {
            s1.push(temp->left);
        }
        if (temp->right != NULL)
        {
            s1.push(temp->right);
        }
    }
    while (!s2.empty())
    {
        cout << s2.top()->data << " ";
        s2.pop();
    }
}

int height(node *root)
{
    if (root == NULL)
        return 0;
    else
    {
        return max(height(root->left), height(root->right)) + 1;
    }
}

node *mirrorimage(node *root)
{
    if (root != NULL)
    {
        node *x = new node(root->data);
        x->right = mirrorimage(root->left);
        x->left = mirrorimage(root->right);
        return x;
    }
    else
    {
        return NULL;
    }
}

node *clone(node *root)
{
    if (root != NULL)
    {
        node *x = new node(root->data);
        x->left = clone(root->left);
        x->right = clone(root->right);
        return x;
    }
    else
    {
        return NULL;
    }
}

node *search(node *root, int key)
{
    if (root == NULL)
    {
        cout << "Not Found" << endl;
        return root;
    }
    else
    {
        node *temp = root;
        if ((temp->left->data == key) || (temp->right->data == key))
        // {cout << "Found"<<endl; return; }
        {
            return temp;
        }
        else if (temp->data < key)
        {
            temp = temp->right;
            search(temp, key);
        }
        else
        {
            temp = temp->left;
            search(temp, key);
        }
    }
}

node *delete_node(node *root, int key)
{
    if (root == NULL)
    {
        return root;
    }
    else if (root->data > key)
    {
        root->left = delete_node(root->left, key);
    }
    else if (root->data < key)
    {
        root->right = delete_node(root->right, key);
    }
    if (root->left == NULL)
    {
        node *temp = root->left;
        delete root;
        return temp;
    }
    else if (root->right == NULL)
    {
        node *temp = root->left;
        delete root;
        return temp;
    }
    else
    {
        node *succesive_parent = root;
        node *succ = root->right;
        while (succ->left != NULL)
        {
            succesive_parent = succ;

            succ = succ->left;
        }
        if (succesive_parent != root)
        {
            succesive_parent->left = succ->right;
        }
        else
        {
            succesive_parent->right = succ->right;
        }
        root->data = succ->data;
        delete succ;
        return root;
    }
}

int preIndex = 0;
node *ctree(int in[], int pre[], int ist, int iend)
{
    if (ist > iend)
        return NULL;
    node *doon = new node(pre[preIndex++]);

    int inIndex = 0;
    for (int i = ist; i <= iend; i++)
    {
        if (in[i] == doon->data)
        {
            inIndex = i;
            break;
        }
    }
    doon->left = ctree(in, pre, ist, inIndex - 1);
    doon->right = ctree(in, pre, inIndex + 1, iend);
    return doon;
}

int main()
{
    node *root = NULL;
    node *p = new node(25);
    root = p;
    root->left = new node(5);
    root->right = new node(17);

    // insertbtree(root, 10);
    // insertbtree(root, 6);
    // insertbtree(root,8);
    // insertbtree(root, 9);

    cout << "Number of element you want to enter";
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        int t;
        cin >> t;
        insertbtree(root, t);
    }
    cout << "Inorder representation" << endl;
    displayinorder(root);
    cout << endl;
    cout << "Delete a node \n";
    delete_node(root, 20);
    cout << "Inorder representation" << endl;
    displayinorder(root);
    cout << endl;

    cout << "preorder representation" << endl;
    displaypreorder(root);
    cout << endl;
    cout << "IT-preorder representation" << endl;
    iterativepreorder(root);
    cout << endl;
    cout << "IT-Inorder representation" << endl;
    iterativeinorder(root);
    cout << endl;
    cout << "postorder representation" << endl;
    displaypostorder(root);
    cout << endl;
    cout << "IT-postorder representation" << endl;
    iterativepostorder(root);
    cout << endl;
    cout << "Height of tree" << endl;
    cout << height(root);
    cout << endl;
    cout << "mirror of tree" << endl;
    displayinorder(mirrorimage(root));
    cout << endl;
    cout << "clone of tree" << endl;
    displayinorder(clone(root));
    cout << endl;
    search(root, 23);
    cout << endl;
    int pre[] = {100, 20, 10, 30, 200, 150, 300};
    int in[] = {10, 20, 30, 100, 150, 200, 300};
    node *don = ctree(in, pre, 0, 6);
    displayinorder(don);
    cout << endl;
    displaypreorder(don);
    cout << endl;
}

// level order using queue
void level_order(node *root)
{
    if (root == NULL)
        return;
    queue<node *> q;
    q.push(root);
    while (!q.empty())
    {
        root = q.front();
        cout << root->data << " ";
        q.pop();
        if (root->left != NULL)
            q.push(root->left);
        if (root->right != NULL)
            q.push(root->right);
    }
}
