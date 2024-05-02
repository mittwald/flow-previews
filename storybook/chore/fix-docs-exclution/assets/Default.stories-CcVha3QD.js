import{R as e}from"./index-BwDkhjyp.js";import"./index-Bvj9sSMo.js";import"./index-CYr4DoOo.js";import"./index-HBuN0i9E.js";import{T as h}from"./index-DE2bTr_9.js";import"./index-kone6XRS.js";import"./index-DGd3cwV7.js";import"./index-EXyjxhm4.js";import{M as m,a as G}from"./index-CJ2rlPOV.js";import{A as c,u as S}from"./index-BcFq7X7a.js";import{H as u}from"./Heading-B_Xdk3YQ.js";import{C as i}from"./Content-GAEXbwDP.js";import{T as p}from"./Text-DFvNZx2y.js";import{L as H}from"./Label-BY-lGqJc.js";import{B as d}from"./ButtonGroup-DFAP0P-9.js";import{B as t}from"./Button-BViRxOm6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./import-Cu03TQlK.js";import"./flowComponent-DnUs06RV.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./real-module-_6R3Ww0Q.js";import"./index-DEb3SoUq.js";import"./FormField.module-B5hG92F8.js";import"./IconApp-Bwxw5AuI.js";import"./IconWarning-DFvgIVCz.js";import"./useSelector-lySlwgFo.js";import"./index-dhKWstfL.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-D3tEegIC.js";const ue={title:"Overlays/Modal",component:m,parameters:{controls:{exclude:["state","defaultOpen","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:r=>e.createElement(m,{...r,defaultOpen:!0},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeModal:!0},e.createElement(t,{variant:"accent"},"Create customer"),e.createElement(t,{variant:"secondary",style:"soft"},"Abort"))))},n={},o={render:r=>{const E=S();return e.createElement(e.Fragment,null,e.createElement(t,{variant:"primary",onPress:E.open},"Create customer"),e.createElement(m,{...r,controller:E},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeModal:!0},e.createElement(t,{variant:"accent"},"Create customer"),e.createElement(t,{variant:"secondary",style:"soft"},"Abort")))))}},a={render:r=>e.createElement(G,null,e.createElement(t,{variant:"danger"},"Delete project"),e.createElement(m,{...r},e.createElement(u,null,"Delete project"),e.createElement(i,null,e.createElement(p,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeModal:!0},e.createElement(t,{variant:"danger"},"Delete project"),e.createElement(t,{style:"soft",variant:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},s={args:{offCanvas:!0}};var f,g,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,v,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController();
    return <>
        <Button variant="primary" onPress={controller.open}>
          Create customer
        </Button>
        <Modal {...props} controller={controller}>
          <Heading>New Customer</Heading>
          <Content>
            <Text>
              Create a new customer to manage your projects, members and
              payments.
            </Text>
            <TextField>
              <Label>Customer name</Label>
            </TextField>
          </Content>
          <ButtonGroup>
            <Action closeModal>
              <Button variant="accent">Create customer</Button>
              <Button variant="secondary" style="soft">
                Abort
              </Button>
            </Action>
          </ButtonGroup>
        </Modal>
      </>;
  }
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var M,T,b;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <ModalTrigger>
      <Button variant="danger">Delete project</Button>
      <Modal {...props}>
        <Heading>Delete project</Heading>
        <Content>
          <Text>Are you sure you want to delete this project?</Text>
        </Content>
        <ButtonGroup>
          <Action closeModal>
            <Button variant="danger">Delete project</Button>
            <Button style="soft" variant="secondary">
              Abort
            </Button>
          </Action>
        </ButtonGroup>
      </Modal>
    </ModalTrigger>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var A,w,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var x,D,O;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const ie=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{n as Default,l as Mobile,s as OffCanvas,o as WithController,a as WithTrigger,ie as __namedExportsOrder,ue as default};
