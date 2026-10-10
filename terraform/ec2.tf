data "aws_ami" "ubuntu" {
  most_recent = true
  owners = ["099720109477"]
  filter {
    name = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }
  filter {
    name = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_instance" "ec2_1" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  subnet_id = aws_subnet.public_subnet_1.id
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  key_name = "terraform-key"

  user_data = <<-EOF
    #!/bin/bash
    apt update -y
    apt install -y docker.io
    systemctl enable docker
    systemctl start docker
  EOF

  tags = {
    Name = "Terraform-EC2-1"
  }
}

resource "aws_instance" "ec2_2" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  subnet_id = aws_subnet.public_subnet_2.id
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  key_name = "terraform-key"

  user_data = <<-EOF
    #!/bin/bash
    apt update -y
    apt install -y docker.io
    systemctl enable docker
    systemctl start docker
  EOF

  tags = {
    Name = "Terraform-EC2-2"
  }
}
