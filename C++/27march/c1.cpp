#include<iostream>
using namespace std;
int main()
{
  char val;
  cout<<"Enter character:";
  cin>>val;

  (val=='a'||val=='e'||val=='i'||val=='o'||val=='u')? cout<<"vowel": cout<<"consonant";

return 0;
}