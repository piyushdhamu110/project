// #include <iostream>
// #include <stack>
// using namespace std;

// // Structure for binary tree node
// struct btree
// {
//     int data;
//     struct btree *left, *right;
// };

// // Function to create a new node
// struct btree *newNode(int data)
// {
//     struct btree *temp = new btree;
//     temp->data = data;
//     temp->left = temp->right = NULL;
//     return temp;
// }

// // Function to perform DFS traversal (inorder) of binary tree
// void inorderDFS(struct btree *root)
// {
//     stack<struct btree *> s;
//     struct btree *current = root;

//     while (current != NULL || !s.empty())
//     {
//         while (current != NULL)
//         {
//             s.push(current);
//             current = current->left;
//         }
//         current = s.top();
//         s.pop();
//         cout << current->data << " ";
//         current = current->right;
//     }
// }

// // Function to perform DFS traversal (preorder) of binary tree
// void preorderDFS(struct btree *root)
// {
//     stack<struct btree *> s;
//     s.push(root);

//     while (!s.empty())
//     {
//         struct btree *current = s.top();
//         s.pop();
//         cout << current->data << " ";

//         if (current->right != NULL)
//             s.push(current->right);
//         if (current->left != NULL)
//             s.push(current->left);
//     }
// }

// // Function to perform DFS traversal (postorder) of binary tree
// void postorderDFS(struct btree *root)
// {
//     stack<struct btree *> s;
//     stack<int> out;
//     s.push(root);

//     while (!s.empty())
//     {
//         struct btree *current = s.top();
//         s.pop();
//         out.push(current->data);

//         if (current->left != NULL)
//             s.push(current->left);
//         if (current->right != NULL)
//             s.push(current->right);
//     }

//     while (!out.empty())
//     {
//         cout << out.top() << " ";
//         out.pop();
//     }
// }

// // Driver code
// int main()
// {
//     struct btree *root = newNode(1);
//     root->left = newNode(2);
//     root->right = newNode(3);
//     root->left->left = newNode(4);
//     root->left->right = newNode(5);

//     cout << "Inorder DFS traversal of binary tree is:\n";
//     inorderDFS(root);
//     cout << endl;

//     cout << "Preorder DFS traversal of binary tree is:\n";
//     preorderDFS(root);
//     cout << endl;

//     cout << "Postorder DFS traversal of binary tree is:\n";
//     postorderDFS(root);
//     cout << endl;

//     return 0;
// }

#include <iostream>
#include <stack>
using namespace std;

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void displayDescending(TreeNode *root)
{
    if (root == nullptr)
        return;

    stack<TreeNode *> stack;
    TreeNode *current = root;

    while (current != nullptr || !stack.empty())
    {
        // Reach the leftmost node of current
        while (current != nullptr)
        {
            stack.push(current);
            current = current->right;
        }

        // Pop the top node from stack
        current = stack.top();
        stack.pop();

        // Display the node value
        cout << current->val << " ";

        // Move to the left child of the popped node
        current = current->left;
    }
}

// Example usage:
int main()
{
    // Constructing the tree
    TreeNode *root = new TreeNode(5);
    root->left = new TreeNode(3);
    root->right = new TreeNode(7);
    root->left->left = new TreeNode(2);
    root->left->right = new TreeNode(4);
    root->right->right = new TreeNode(8);

    cout << "Data in BST in descending order: ";
    displayDescending(root);
    cout << endl;

    return 0;
}
