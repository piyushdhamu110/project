#include <iostream>

using namespace std;

// Node structure for the threaded binary search tree
struct Node
{
    int data;
    Node *left;
    Node *right;
    bool rightThread;

    Node(int val) : data(val), left(nullptr), right(nullptr), rightThread(false) {}
};

// Insert a new node into the threaded binary search tree
Node *insert(Node *root, int key)
{
    if (root == nullptr)
        return new Node(key);

    if (key < root->data)
    {
        root->left = insert(root->left, key);
    }
    else
    {
        if (root->right == nullptr)
        {
            root->right = insert(root->right, key);
            root->rightThread = true;
        }
        else
        {
            root->right = insert(root->right, key);
        }
    }
    return root;
}

// Inorder traversal of threaded binary search tree
void inorderTraversal(Node *root)
{
    Node *curr = root;
    while (curr != nullptr)
    {
        while (curr->left != nullptr)
            curr = curr->left;
        cout << curr->data << " ";
        while (curr->rightThread)
        {
            curr = curr->right;
            cout << curr->data << " ";
        }
        curr = curr->right;
    }
}

// Preorder traversal of threaded binary search tree
void preorderTraversal(Node *root)
{
    if (root == nullptr)
        return;

    cout << root->data << " ";
    if (!root->rightThread)
        preorderTraversal(root->left);
    preorderTraversal(root->right);
}

// Convert a given binary search tree into threaded binary search tree
Node *convertToThreadedBST(Node *root)
{
    static Node *prev = nullptr;

    if (root == nullptr)
        return nullptr;

    // Recur for left subtree
    convertToThreadedBST(root->left);

    // If previous node exists, make it threaded to the current node
    if (prev != nullptr && prev->right == nullptr)
    {
        prev->right = root;
        prev->rightThread = true;
    }

    // Update prev
    prev = root;

    // Recur for right subtree
    convertToThreadedBST(root->right);

    return prev;
}

int main()
{
    Node *root = nullptr;

    // Insertion
    root = insert(root, 10);
    root = insert(root, 5);
    root = insert(root, 15);
    root = insert(root, 3);
    root = insert(root, 7);
    root = insert(root, 12);
    root = insert(root, 18);

    // Convert to threaded binary search tree
    convertToThreadedBST(root);

    // Inorder traversal
    cout << "Inorder Traversal: ";
    inorderTraversal(root);
    cout << endl;

    // Preorder traversal
    cout << "Preorder Traversal: ";
    preorderTraversal(root);
    cout << endl;

    return 0;
}
