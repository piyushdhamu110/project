#include <bits/stdc++.h>
using namespace std;

class TreeNode
{
public:
    int value;
    TreeNode *left;
    TreeNode *right;

    TreeNode()
    {
        left = NULL;
        right = NULL;
    }

    TreeNode(int x)
    {
        value = x;
        left = NULL;
        right = NULL;
    }
};

void insertNode(int x, TreeNode *&root)
{
    TreeNode *newNode = new TreeNode(x);
    if (root == NULL)
    {
        root = newNode;
        return;
    }
    char choice;
    TreeNode *temp = root;
    while (true)
    {
        cout << "Move left(l) or right(r) of " << temp->value << endl;
        cin >> choice;
        if (choice == 'l')
        {
            if (temp->left == NULL)
            {
                temp->left = newNode;
                return;
            }
            else
                temp = temp->left;
        }
        else if (choice == 'r')
        {
            if (temp->right == NULL)
            {
                temp->right = newNode;
                return;
            }
            else
                temp = temp->right;
        }
    }
}

void insertIntoBST(TreeNode *&root, int key)
{
    TreeNode *newNode = new TreeNode(key);
    if (root == NULL)
    {
        root = newNode;
        return;
    }
    TreeNode *temp = root;
    while (true)
    {
        if (temp->value > key)
        {
            if (temp->left == NULL)
            {
                temp->left = newNode;
                return;
            }
            else
                temp = temp->left;
        }
        else
        {
            if (temp->right == NULL)
            {
                temp->right = newNode;
                return;
            }
            else
                temp = temp->right;
        }
    }
}

TreeNode *deleteNode(TreeNode *root, int k)
{
    if (root == NULL)
        return root;

    if (root->value > k)
    {
        root->left = deleteNode(root->left, k);
        return root;
    }
    else if (root->value < k)
    {
        root->right = deleteNode(root->right, k);
        return root;
    }

    if (root->left == NULL)
    {
        TreeNode *temp = root->right;
        delete root;
        return temp;
    }
    else if (root->right == NULL)
    {
        TreeNode *temp = root->left;
        delete root;
        return temp;
    }
    else
    {
        TreeNode *succParent = root;
        TreeNode *succ = root->right;
        while (succ->left != NULL)
        {
            succParent = succ;
            succ = succ->left;
        }
        if (succParent != root)
            succParent->left = succ->right;
        else
            succParent->right = succ->right;

        root->value = succ->value;

        delete succ;
        return root;
    }
}

int search(vector<int> arr, int strt, int end, int value)
{
    for (int i = strt; i <= end; i++)
    {
        if (arr[i] == value)
            return i;
    }
}

TreeNode *buildTree(vector<int> in, vector<int> pre, int inStrt, int inEnd)
{
    static int preIndex = 0;
    if (inStrt > inEnd)
        return NULL;

    TreeNode *tNode = new TreeNode(pre[preIndex++]);

    if (inStrt == inEnd)
        return tNode;

    int inIndex = search(in, inStrt, inEnd, tNode->value);
    tNode->left = buildTree(in, pre, inStrt, inIndex - 1);
    tNode->right = buildTree(in, pre, inIndex + 1, inEnd);
    return tNode;
}

void mirrorImage(TreeNode *root, TreeNode *&image)
{
    if (root == NULL)
        return;
    else if (root)
        image = new TreeNode(root->value);
    mirrorImage(root->left, image->right);
    mirrorImage(root->right, image->left);
}

void cloning(TreeNode *root, TreeNode *&cloned)
{
    if (root == NULL)
        return;
    cloned = new TreeNode(root->value);
    cloning(root->left, cloned->left);
    cloning(root->right, cloned->right);
}

void levelOrderTraversal(TreeNode *root)
{
    TreeNode *temp = root;
    vector<int> v;
    queue<TreeNode *> q;
    q.push(root);
    cout << "Level order traversal : " << endl;
    while (!q.empty())
    {
        TreeNode *curr = q.front();
        cout << curr->value << " ";
        v.push_back(curr->value);
        q.pop();
        if (curr->left)
            q.push(curr->left);
        if (curr->right)
            q.push(curr->right);
    }
    cout << endl;
}

void preOrderTraversal(TreeNode *root)
{
    if (root == NULL)
        return;
    cout << root->value << " ";
    preOrderTraversal(root->left);
    preOrderTraversal(root->right);
}

void inOrderTraversal(TreeNode *root)
{
    if (root == NULL)
        return;
    inOrderTraversal(root->left);
    cout << root->value << " ";
    inOrderTraversal(root->right);
}

void postOrderTraversal(TreeNode *root)
{
    if (root == NULL)
        return;
    postOrderTraversal(root->left);
    postOrderTraversal(root->right);
    cout << root->value << " ";
}

vector<int> iterativePreOrder(TreeNode *root)
{
    vector<int> v;
    TreeNode *temp = root;
    stack<TreeNode *> s;
    if (root == NULL)
        return v;
    else
        s.push(root);
    while (!s.empty())
    {
        TreeNode *curr = s.top();
        v.push_back(curr->value);
        s.pop();
        if (curr->right != NULL)
            s.push(curr->right);
        if (curr->left != NULL)
            s.push(curr->left);
    }
    cout << "Iterative preorder traversal: ";
    for (auto it : v)
    {
        cout << it << " ";
    }
    cout << endl;
    return v;
}

vector<int> iterativeInOrder(TreeNode *root)
{
    vector<int> v;
    TreeNode *temp = root;
    stack<TreeNode *> s;
    while (true)
    {
        if (temp != NULL)
        {
            s.push(temp);
            temp = temp->left;
        }
        else
        {
            if (s.empty())
                break;
            temp = s.top();
            v.push_back(temp->value);
            s.pop();
            temp = temp->right;
        }
    }
    cout << "Iterative inorder traversal :" << endl;
    for (auto it : v)
    {
        cout << it << " ";
    }
    cout << endl;
    return v;
}

void iterativePostOrder(TreeNode *root)
{
    stack<TreeNode *> first;
    stack<TreeNode *> second;
    TreeNode *temp = root;
    if (root == NULL)
        return;
    first.push(root);
    while (!first.empty())
    {
        temp = first.top();
        first.pop();
        second.push(temp);
        if (temp->left)
            first.push(temp->left);
        if (temp->right)
            first.push(temp->right);
    }
    cout << "Iterative postorder traversal : " << endl;
    while (!second.empty())
    {
        temp = second.top();
        cout << temp->value << " ";
        second.pop();
    }
    cout << endl;
}

int height(TreeNode *root)
{
    if (root == NULL)
        return 0;
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    return 1 + max(leftHeight, rightHeight);
}

int main()
{
    TreeNode *root = NULL;
    root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    // root->left->right = new TreeNode(5);
    // root->right->left = new TreeNode(6);
    root->right->right = new TreeNode(7);

    // char ch='y';
    // while(ch=='y')
    // {
    //   int x;
    //   cout<<"Enter the value to be inserted : "<<endl;
    //   cin>>x;
    //   insertNode(x,root);
    //   cout<<"Press y to continue: ";
    //   cin>>ch;
    // }

    TreeNode *bst = NULL;
    insertIntoBST(bst, 1);
    insertIntoBST(bst, 2);
    insertIntoBST(bst, 3);
    insertIntoBST(bst, 4);
    insertIntoBST(bst, 5);
    levelOrderTraversal(bst);
    cout << "..........................................................." << endl;
    TreeNode *mirror = NULL;
    mirrorImage(bst, mirror);
    cout << "Mirror image for above bst : ";
    levelOrderTraversal(mirror);
    cout << "..........................................................." << endl;
    TreeNode *copyTree = NULL;
    cloning(bst, copyTree);
    cout << "Clone of given bst : ";
    levelOrderTraversal(copyTree);
    cout << "..........................................................." << endl;
    // levelOrderTraversal(root);
    vector<int> pre = iterativePreOrder(root);
    vector<int> in = iterativeInOrder(root);
    iterativePostOrder(root);
    int lenIn = in.size() - 1;
    TreeNode *formed = buildTree(in, pre, 0, lenIn);
    cout << "Tree built using preorder and inorder traversal : " << endl;
    iterativeInOrder(formed);
    iterativePreOrder(formed);
    cout << "............................................................." << endl;
    cout << "Inorder traversal : " << endl;
    inOrderTraversal(root);
    cout << endl;
    cout << "Preorder traversal : " << endl;
    preOrderTraversal(root);
    cout << endl;
    cout << "Postorder traversal : " << endl;
    postOrderTraversal(root);
    cout << endl;
    cout << "..............................................................." << endl;
    cout << "Height of the given tree is : " << height(root) << endl;
}
