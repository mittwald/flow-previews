import{R as e}from"./index-BwDkhjyp.js";import"./index-CkqFYb2z.js";import"./index-DB4i2a_1.js";import"./index-C54xbiei.js";import{T as h}from"./index-CD6TZjmE.js";import"./index-CFfOdAw2.js";import"./index-DxBfxD7c.js";import"./index-CsIF0d8P.js";import{M as s}from"./index-LPm0oyzP.js";import{u as H,A as c}from"./index-CUev0BaE.js";import{O as S}from"./index-cuKK3X6D.js";import{H as p}from"./Heading-DI5I2A91.js";import{C as i}from"./Content-Qyp8GMrj.js";import{T as u}from"./Text-CJTQbeNn.js";import{L as G}from"./Label-S-uniype.js";import{B as d}from"./ButtonGroup-DKCYqN-L.js";import{B as r}from"./Button-Cq_ZV_AH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DczMKnb-.js";import"./FormField.module-CYRw8qgA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9DLSnGg.js";import"./index-B8XB3FuZ.js";import"./IconApp-JyWhxCMW.js";import"./IconWarning-C_kJLkLV.js";import"./Form-CmcgVqgW.js";import"./useFocusable-MoxYh-uU.js";import"./utils-CFgm1FN7.js";import"./useLabel-CWK-s9y2.js";import"./useLabels-B4xl8Q9B.js";import"./Text-lHr3U40N.js";import"./Input-DIJXBTmN.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-C1GDru7d.js";import"./useControlledState-C0C-dzuH.js";import"./Label-CvjXK79E.js";import"./useSelector-DiRlhfeC.js";import"./Dialog-DzxZJdi6.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-B4XMciY_.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-DihPW0Td.js";import"./usePress-MPJq79ab.js";import"./FocusScope-rBNftQuu.js";import"./VisuallyHidden-nkBW5OaY.js";import"./Wrap-DQq6jo70.js";import"./index-dhKWstfL.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CMA-K2VV.js";import"./Button-BK2AeOPB.js";const he={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController();
    return <>
        <Button color="primary" onPress={controller.open}>
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
            <Action closeOverlay>
              <Button color="accent">Create customer</Button>
              <Button color="secondary" variant="soft">
                Abort
              </Button>
            </Action>
          </ButtonGroup>
        </Modal>
      </>;
  }
}`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var O,T,b;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <OverlayTrigger>
      <Button color="danger">Delete project</Button>
      <Modal {...props}>
        <Heading>Delete project</Heading>
        <Content>
          <Text>Are you sure you want to delete this project?</Text>
        </Content>
        <ButtonGroup>
          <Action closeOverlay>
            <Button color="danger">Delete project</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ButtonGroup>
      </Modal>
    </OverlayTrigger>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var A,w,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var x,M,D;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const He=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{o as Default,l as Mobile,m as OffCanvas,n as WithController,a as WithTrigger,He as __namedExportsOrder,he as default};
