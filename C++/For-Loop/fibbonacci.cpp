#include<iostream>
using namespace std;
int main()
{
  int num,first=0,second=1,next=0;;
  cout<<"Enter terms:";
  cin>>num;

  for(int i=0; i<num; i++){
    cout<<first;
    next=first+second;
    first=second;
    second=next;
    cout<<endl;
  }
  return 0;

}