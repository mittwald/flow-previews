import{R as e}from"./index-uCp2LrAq.js";import{B as r}from"./Button-5wt70xhe.js";import{B as c}from"./ButtonGroup-Bo_BQ6YB.js";import{T as p}from"./Text-Cxmp4Xqy.js";import{T as h}from"./TextField-BDIUJynl.js";import{L as H}from"./Label-Q6SiwJeY.js";import{C as i}from"./Content-BFcxmuHI.js";import{H as u}from"./Heading-Bi46QOGb.js";import{M as s,a as S}from"./ModalTrigger-Bn9wQSn9.js";import{u as G,A as d}from"./Action-C3AFCfTu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-v92cY4my.js";import"./index-CFQDndEx.js";import"./IconApp-Cn5k3X6X.js";import"./flowComponent-BXgpTJfi.js";import"./index-BOkhicXD.js";import"./IconWarning-BlJfL1s8.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DfSuOTAm.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-nTbqVPLP.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-rZ2Ly5zk.js";import"./usePress-B-dVD-xw.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./TextFieldBase-5-knkaEe.js";import"./FormField.module-CzKuKGNz.js";import"./Form-DfhY7G1r.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Input-CMYLvj2s.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BQk6lJ-q.js";import"./Activity-Ck-RMSDT.js";import"./RSPContexts-CJnKmcd7.js";import"./ModalOverlay-DVcEXr0W.js";import"./OverlayTrigger-JOE2BXQm.js";import"./OverlayArrow-BDeolAmD.js";import"./number-nHrFdSb-.js";import"./FocusScope-DHvs1HAk.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-dBh8p4gE.js";const je={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:G({defaultOpen:!0})},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=G();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(u,null,"Delete project"),e.createElement(i,null,e.createElement(p,null,"Are you sure you want to delete this project?")),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var g,f,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,v,B;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var T,b,A;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <ModalTrigger>
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
    </ModalTrigger>
}`,...(A=(b=a.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var w,M,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,x,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(D=(x=m.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const xe=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{o as Default,l as Mobile,m as OffCanvas,n as WithController,a as WithTrigger,xe as __namedExportsOrder,je as default};
