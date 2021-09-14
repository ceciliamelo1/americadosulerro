var estado, pos_cursor;
var largura = 200;
var altura = 50;
var xbotao = 200; // nao criei a do botao 2 pq o x é igual
var ybotao1 = 210; // igual ao ycursor, botao do menu
var ybotao2 = 270;

var xcursor = 200;
var ycursor = 210; // igual ao ybotao1

 //botao das alternativas 1-6
var xjogo = 310;
var yjogo1 = 210;
var yjogo2 = 250;
var yjogo3 = 290;
var yjogo4 = 330;

var xcursor1 = 310;
var ycursor1 = 210;

var xcursor2 = 330;
var ycursor2 = 210;

var pos_cursor2;

var america,capa,face7,face8,face9,face10;

function preload() {
  capa = loadImage('capa.png');
  america = loadImage('america.png');
  face7 = loadImage('fase_7.jpg');
  face8 = loadImage('fase_8.jpg');
  face9 = loadImage('fase_9.jpg');
  face10 = loadImage('fase_10.jpg');
  
}

function setup() {
  createCanvas(640, 460);
  
  estado = 1;
  pos_cursor = 1; //posição do cursor
  pos_cursor2 = 1;
  score = 0;
  
}

function draw() {
  if(estado == 1){
    menu();
  }
  else if(estado==2){
    inicio();
  }
  else if(estado===3){
    objetivo();
  }
  else if(estado===4){
    fase2();
  }
  else if(estado===5){
    fase3();
  }
  else if(estado===6){
    fase4();
  }
  else if(estado===7){
    fase5();
  }
  else if(estado===8){
    fase6();
  }
  else if(estado===9){
    fase7();
  }
  else if(estado===10){
    fase8();
  }
  else if(estado===11){
    fase9();
  }
  else if(estado===12){
    fase10();
  }
  else if(estado===13){
    fim();
  }
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    if(estado==1){
      ycursor = ybotao1;
      pos_cursor = 1; //botao iniciar;
    }
    else if(estado==2){
      ycursor1 = yjogo1;
      pos_cursor2 = 1;
    }  
    else if(estado==4 || estado==5 || estado==6 || estado==7 || estado==8){
      ycursor1 = yjogo1;
      pos_cursor2 = 1;
    }
    else if(estado==9 || estado==10 || estado==11 || estado==12){
      ycursor2 = yjogo1;
      pos_cursor2 = 1;
    }
  }
  if(keyCode==DOWN_ARROW){
    if(estado==1){
      ycursor = ybotao2;
      pos_cursor = 2; //botao objetivo;
    }
    else if(estado==2){
      ycursor1 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==4){
      ycursor1 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==5){
      ycursor1 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==6){
      ycursor1 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==7){
      ycursor1 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==8){
      ycursor1 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==9){
      ycursor2 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==10){
      ycursor2 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==11){
      ycursor2 = yjogo2;
      pos_cursor2 = 2;
    }
    else if(estado==12){
      ycursor2 = yjogo2;
      pos_cursor2 = 2;
    }
  }
  if(keyCode==ENTER){
    if(estado==1 && pos_cursor==1){
      estado = 2; // vai para fase 1
    }
    else if(estado==1 && pos_cursor2==2){
      estado = 3; // vai para objetivo
    }
    else if(estado==2){
      estado = 4; // vai para fase 2
      if(pos_cursor2==2){
        score = score + 10;
      }
    }
    else if(estado == 4){
      estado = 5; // vai para fase 3
      if(pos_cursor2==1){
        score = score + 10;
      }
    }
    else if(estado == 5){
      estado = 6; // vai para fase 4
      if(pos_cursor2==2){
        score = score + 10;
      }
    }
    else if(estado == 6){
      estado = 7; // vai para fase 5
      if(pos_cursor2==1){
        score = score + 10;
      }
    }
    else if(estado == 7){
      estado = 8; // vai para fase 6
      if(pos_cursor2==1){
        score = score + 10;
      }
    }
    else if(estado == 8){
      estado = 9; // vai para fase 7
      if(pos_cursor2==2){
        score = score + 10;
      }
    }
    else if(estado == 9){
      estado = 10; // vai para fase 8
      if(pos_cursor2==2){
        score = score + 10;
      }
    }
    else if(estado == 10){
      estado = 11; // vai para fase 9
      if(pos_cursor2==1){
        score = score + 10;
      }
    }
    else if(estado == 11){
      estado = 12; // vai para fase 10
      if(pos_cursor2==1){
        score = score + 10;
      }
    }
    else if(estado == 12){
      estado = 13;
      if(pos_cursor2==2){
        score = score + 10;
      }
    }
    else if(estado==2 && pos_cursor2==2){
      score ++;
    }
  }
  if(keyCode==LEFT_ARROW){
     if(estado==2 || estado==3 || estado==13){
       estado = 1
     }
  }
}
  
function menu(){
    textStyle(NORMAL);
    background(215,244,238); // cor do fundo
    image (capa,0,0);
    textSize(35); //tamanho da letra;
    fill(0,162,232); // cor da letra;
    text("Belezas da América", 300,150);
    text("do Sul", 300,190);
    score = 0;
    
    textAlign(CENTER);
    textSize(26);
    
    noFill(); //cor do botao
    stroke(220); //cor da borda do botao
    strokeWeight(4);
    rect(xcursor,ycursor, largura, altura,30); //botao (retangulo)
      
     
    fill(0,162,232);
    noStroke();
    text("Iniciar",300,245);
    
    // Objetivo do Jogo
    
    noFill(); //cor do botao
    stroke(220); // cor da borda
    strokeWeight(4);
    rect(xcursor,ycursor,largura,altura,30);
      
    fill(0,162,232);
    noStroke();
    text("Objetivo",300,303);
}

function inicio(){
  image(america,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("1º Fase", 440,80);
  textSize(20); //tamanho da letra
  text("Qual o nome do país representado",450,120);
  text("pela cor amarela? E qual",410,150)
  text("é a sua capital?", 370, 180);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke(); // cor da borda
  circle(310,210,30);
  circle(310,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor1,ycursor1,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Peru, Lima",383,217);
  text("Brasil, Brasília",398,258); //certa
  text("1",197,160);
  text(score + " pontos", 580,445);
  
}

function objetivo(){
  background(215,244,238);
  textSize(40);
  fill(0,162,232);
  text("O objetivo desse jogo é", 320, 90);
  text("aprender os nomes dos", 320,130);
  text("países da América do Sul",320,170);
  text("e em seguida aprender",320,210);
  text("sobre seus principais",320,250);
  text("monumentos e pontos turísticos",320,290);
  text("por meio de um quiz.",320,330);
  textSize(18);
  text("Para voltar aperte seta para esquerda",160,450);
}

function fase2(){
  image(america,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("2º Fase", 440,80);
  textSize(20); //tamanho da letra
  text("Quais são os países que",430,120);
  text("estão na cor verde?",410,150)
  //text("é a sua capital?", 370, 180);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke(); // cor da borda
  circle(310,210,30);
  circle(310,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor1,ycursor1,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Suriname, Bolívia e Uruguai",457,217);//certa
  text("Uruguai, Suriname e Chile",450,258);
  text("1",172,40);
  text("2",135,195);
  text("3",195,320);
  text(score + " pontos", 580,445);
} 

function fase3(){
  image(america,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("3º Fase", 440,80);
  textSize(20); //tamanho da letra
  text("Quais são os países que",435,120);
  text("estão na cor roxa?",410,150)
  //text("é a sua capital?", 370, 180);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke();
  circle(310,210,30);
  circle(310,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor1,ycursor1,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Peru, Argentina, Bolívia",440,217);
  text("Guiana Francesa, Equador,",458,258);//certa
  text("Argentina", 458, 278);
  text("1",185,45);
  text("2",45,90);
  text("3",180,350);
  text(score + " pontos", 580,445);
} 

function fase4(){
  image(america,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("4º Fase", 440,80);
  textSize(20); //tamanho da letra
  text("Quais são os países que",430,120);
  text("estão na cor laranja?",415,150)
  //text("é a sua capital?", 370, 180);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke();
  circle(310,210,30);
  circle(310,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor1,ycursor1,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Guiana e Peru",396,217);//certa
  text("Brasil e Guiana Francesa",445,258);
  text("1",162,35);
  text("2",60,160);
  text(score + " pontos", 580,445);
} 

function fase5(){
  image(america,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("5º Fase", 440,80);
  textSize(20); //tamanho da letra
  text("Quais são os países que",440,120);
  text("estão na cor vermelha?",435,150)
  //text("é a sua capital?", 370, 180);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke();
  circle(310,210,30);
  circle(310,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor1,ycursor1,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Venezuela e Chile",413,217);//certa
  text("Colômbia e Paraguai",425,258); 
  text("1",130,45);
  text("2",100,300);
  text(score + " pontos", 580,445);
} 

function fase6(){
  image(america,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("6º Fase", 440,80);
  textSize(20); //tamanho da letra
  text("Quais são os países que",445,120);
  text("estão na cor rosa?",420,150)
  //text("é a sua capital?", 370, 180);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke();
  circle(310,210,30);
  circle(310,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor1,ycursor1,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Venezuela e Suriname",435,217);
  text("Colômbia, Paraguai",420,258); //certa
  text("1",90,65);
  text("2",158,225);
  text(score + " pontos", 580,445);
} 

function fase7(){
  image(face7,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("7º Fase", 455,80);
  textSize(20); //tamanho da letra
  text("De onde são esses monumentos?",455,120);
  //text("estão na cor roxa?",410,150)
  //text("é a sua capital?", 370, 180);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke();
  circle(330,210,30);
  circle(330,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor2,ycursor2,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Guiana e Colômbia",438,217);
  text("Peru e Brasil",410,258); //certa
  text(score + " pontos", 580,445);
} 

function fase8(){
  image(face8,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("8º Fase", 450,80);
  textSize(20); //tamanho da letra
  text("De onde são esses centros",450,120);
  text("históricos?",380,150)
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke();
  circle(330,210,30);
  circle(330,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor2,ycursor2,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Colômbia e Bolívia",435,217); //certa
  text("Uruguai e Equador",435,258);
  text(score + " pontos", 580,445);
} 

function fase9(){
  image(face9,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("9º Fase", 450,80);
  textSize(20); //tamanho da letra
  text("De onde são esses centros",450,120);
  text("históricos?",377,150);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke();
  circle(330,210,30);
  circle(330,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor2,ycursor2,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Chile e Uruguai",421,217); //certa
  text("Guiana Francesa e Peru",461,258);
  text(score + " pontos", 580,445);
} 

function fase10(){
  image(face10,0,0);
  textSize(25);
  fill(0,162,232); //cor da letra
  text("10º Fase", 450,80);
  textSize(20); //tamanho da letra
  text("Onde fica esses lugares?",450,120);
  
  //alternativas
  fill(255); // cor que preenche o círculo
  noStroke();
  circle(330,210,30);
  circle(330,250,30);
  //circulo para acertar a alternativa
  noFill();
  stroke(0,162,232); // cor da borda
  circle(xcursor2,ycursor2,30);
  
  //respostas
  fill(0,162,232); //cor da letra
  noStroke();
  text("Bolívia e Uruguai",428,217);
  text("Equador e Argentina",443,258); //certa
  text(score + " pontos", 580,445);
} 

function fim(){
  textStyle(NORMAL);
  background(215,244,238); // cor do fundo
  image (capa,0,0);
  textSize(40); //tamanho da letra;
  fill(0,162,232); // cor da letra;
  text("Você Ganhou", 300,180);
  textSize(35);
  text(score + " pontos", 300,250);
  textSize(18)
  text("Para Menu aperte seta para esquerda",300,345)
}