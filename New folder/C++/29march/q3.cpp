#include<iostream>
using namespace std;
int main()
{
  int a,b,c;
  cout<<"Enter three numbers:";
  cin>>a>>b>>c;

  if(a>c && a>b){
    cout<<endl<<a;
  }
  else if(b>a && b>c){
    cout<<endl<<b;
  }
  else{
    cout<<endl<<c;
  }

return 0;
}