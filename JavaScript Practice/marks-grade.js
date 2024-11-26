let a = 96;
if(a>95 && a<=100)
    console.log("Grade A+");
else if(a>90 && a<=95)
    console.log("Grade A");
else if(a>80 && a<=90)
    console.log("Grade B");
else if(a>70 && a<=80)
    console.log("Grade C");
else if(a>60 && a<=70)
    console.log("Grade D");
else if(a>50 && a<=60)
    console.log("Grade E+");
else if(a>40 && a<=50)
    console.log("Grade E");
else if(a<1 || a>100)
    console.log("You Are Becoming OverSmart.");
else
    console.log("Better Luck Next Time");