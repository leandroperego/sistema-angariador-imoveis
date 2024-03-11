import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

import { addImovel } from '../../infra/db/imoveisAngariacao';

function FormCadastro() {
    const { Formik } = formik;

    const tiposImoveis = [
        'Casa',
        'Apartamento',
        'Sobrado',
        'Ponto Comercial',
    ]

    const schema = yup.object().shape({
        comercializacao: yup.string().required().oneOf(['Venda', 'Aluguel']),
        tipo: yup.string().required().oneOf(tiposImoveis),
        endereco: yup.string(),
        cidade: yup.string().required('Cidade é obrigatório'),
        bairro: yup.string(),
        pontoRef: yup.string(),
        img: yup.string(),
        nome: yup.string(),
        telefone1: yup.string().required('Telefone 1 é obrigatório'),
        telefone2: yup.string(),
    });

    const handleSubmit = async (data, reset) => {
        console.log(data);
        await addImovel(data);
        reset();
    };
  
    return (

    <Formik
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        initialValues={{
            comercializacao: 'Venda',
            tipo: 'Escolha...',
            cidade: '',
            endereco: '',
            bairro: '',
            pontoRef: '',
            img: 'https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg',
            nome: '',
            telefone1: '',
            telefone2: '',
        }}
    >
        {
            ({ handleSubmit, handleChange, resetForm, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <div>
                        <Form.Label>Dados do Imóvel</Form.Label>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridTipo">
                            <Form.Label>Comercialização</Form.Label>
                            <Form.Select 
                                value={values.tipo} 
                                name="comercializacao" 
                                onChange={handleChange} 
                                isValid={touched.comercializacao && !errors.comercializacao} 
                                isInvalid={touched.comercializacao && errors.comercializacao}
                            >
                                <option>Venda</option>
                                <option>Aluguel</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTipo">
                            <Form.Label>Tipo do Imóvel</Form.Label>
                            <Form.Select 
                                value={values.tipo} 
                                name="tipo" 
                                onChange={handleChange} 
                                isValid={touched.tipo && !errors.tipo} 
                                isInvalid={touched.tipo && values.tipo === 'Escolha...'}
                            >
                                <option>Escolha...</option>
                                {
                                    tiposImoveis.map((tipo, index) => (
                                        <option key={index}>{tipo}</option>
                                    ))
                                }
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Selecione um tipo</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Form.Group  className="mb-3" controlId="formGridEndereco">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control 
                                placeholder="Nome da rua e número"
                                name="endereco"
                                value={values.endereco}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control 
                                type='text'
                                name="cidade" 
                                value={values.cidade} 
                                onChange={handleChange} 
                                isValid={touched.cidade && !errors.cidade}
                                isInvalid={touched.cidade && errors.cidade}
                            />
                            <Form.Control.Feedback type="invalid">{errors.cidade}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridBairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control 
                                type='text'
                                name="bairro"
                                value={values.bairro}
                                onChange={handleChange}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPontoRef">
                            <Form.Label>Ponto de Referência</Form.Label>
                            <Form.Control 
                                type='text' 
                                name="pontoRef"
                                value={values.pontoRef}
                                onChange={handleChange}
                            />
                            </Form.Group>
                        </Row>
                        <Row>
                            {/* <Form.Group className="position-relative mb-3">
                                <Form.Label>Imagem</Form.Label>
                                <Form.Control
                                type="file"
                                name="img"
                                onChange={handleChange}
                                isInvalid={!!errors.img}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.file}
                                </Form.Control.Feedback>
                            </Form.Group> */}
                            <Form.Group as={Col} controlId="formGridImagem">
                                <Form.Label>Imagem</Form.Label>
                                <Form.Control 
                                    type='text' 
                                    name="img"
                                    value={values.img}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                    </div>
                    <br/>
                    <div>
                        <Form.Label>Dados do Contato</Form.Label>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFone1">
                            <Form.Label>Telefone 1</Form.Label>
                            <Form.Control 
                                type="text"
                                name="telefone1"
                                value={values.telefone1}
                                onChange={handleChange}
                                isValid={touched.telefone1 && !errors.telefone1}
                                isInvalid={touched.telefone1 && errors.telefone1}
                            />
                            <Form.Control.Feedback type="invalid">{errors.telefone1}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFone2">
                            <Form.Label>Telefone 2</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="telefone2"
                                value={values.telefone2}
                                onChange={handleChange}
                            />
                            </Form.Group>

                        </Row>
                    </div>

                  <Button variant="primary" type="submit">
                    Cadastrar
                  </Button>
                </Form>
            )
        }

    </Formik>
  );
}

export default FormCadastro;