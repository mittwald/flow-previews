import{R as e}from"./index-uCp2LrAq.js";import{B as r}from"./Button-W4_ZgcSN.js";import{B as c}from"./ButtonGroup-BpRChEO2.js";import{T as p}from"./Text-BBko_iOc.js";import{T as h}from"./TextField-C0-hKnbT.js";import{L as H}from"./Label-DvKf7Vpa.js";import{C as i}from"./Content-C9ImVhiS.js";import{H as u}from"./Heading-BnYMjqIa.js";import{M as s}from"./Modal-BjS2Hb8u.js";import{u as G,A as d}from"./Action-BYLt5q-x.js";import{O as S}from"./OverlayTrigger-B7XpfcMh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CNW7-kvN.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./IconApp-C8mhOEhl.js";import"./IconWarning-CzCYt-nQ.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DUvQXv5-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-B3LWHon2.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DIAzcF9v.js";import"./usePress-DL4LW3M_.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./TextFieldBase-BvPCPNYl.js";import"./FormField.module-4TCsvFMM.js";import"./Form-DZXnnIG4.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Input-DX5EHvrS.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BQk6lJ-q.js";import"./Activity-Ck-RMSDT.js";import"./RSPContexts-CJnKmcd7.js";import"./useSelector-CNSXmums.js";import"./Dialog-CDIqkoPK.js";import"./OverlayArrow-CvHeNTZs.js";import"./number-nHrFdSb-.js";import"./FocusScope-CNJ-ZnPk.js";import"./VisuallyHidden-xpUhodH8.js";const je={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:G({defaultOpen:!0})},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=G();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(u,null,"Delete project"),e.createElement(i,null,e.createElement(p,null,"Are you sure you want to delete this project?")),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const xe=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{o as Default,l as Mobile,m as OffCanvas,n as WithController,a as WithTrigger,xe as __namedExportsOrder,je as default};
