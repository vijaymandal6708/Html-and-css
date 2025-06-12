#include<iostream>
using namespace std;
int main()
{
  int a;
  cout<<"Enter a number:";
  cin>>a;
  int b=0;
  if(a>=0 && a<=30)
  {
    b=a*10;
    cout<<endl<<b;
  }
  if(a>30 && a<=50)
  {
    b=a*10;
    cout<<endl<<b;
  }
  if(a>50 && a<=200)
  {
    b=a*10;
    cout<<endl<<b;
  }
  if(a>200)
  {
    b=a*10;
    cout<<endl<<b;
  }


return 0;
}