import{R as e}from"./index-uCp2LrAq.js";import{B as r}from"./Button-COr4qXCu.js";import{T as p}from"./Text-EyCvEgnK.js";import{T as h}from"./TextField-Cw-QnNz-.js";import{L as H}from"./Label-BfZsFn3a.js";import{C as i}from"./Content-Dc1SMPBR.js";import{H as u}from"./Heading-Dx4e16v2.js";import{M as c,a as G}from"./ModalTrigger-BairkNFt.js";import{u as F}from"./OverlayTrigger-6VtsQuLn.js";import{A as s}from"./Action-D1MPQzaf.js";import{A as d}from"./ActionGroup-CjDMM_dt.js";import{c as L}from"./lib-CG-5S3pI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./IconApp-DZ6iFK1V.js";import"./flowComponent-D0hgC601.js";import"./index-BOkhicXD.js";import"./IconWarning-D5KLWx1O.js";import"./LoadingSpinner-CsLReDiT.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./Button-D3-i4KBG.js";import"./utils-DsDc2z3f.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-R-ZPDh0R.js";import"./useFocusRing-DQ9q31uS.js";import"./usePress-v15KrNwr.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-DAlZawmB.js";import"./TextFieldBase-Cfc8pxAA.js";import"./FormField.module-B1Ek3pwS.js";import"./Form-CP-B8ZEw.js";import"./useLabel-C-G_TB0Q.js";import"./useLabels-CrvI0Xse.js";import"./FieldDescription-C_JyU3ZG.js";import"./Input-oGq534xr.js";import"./useFormReset-D51lDO-b.js";import"./useControlledState-B8AA3oOY.js";import"./Label-C3uTUzzd.js";import"./Activity-DYbiBj6P.js";import"./RSPContexts-CJnKmcd7.js";import"./ModalOverlay-KXZKbjBc.js";import"./OverlayArrow-C3Uw9j7L.js";import"./number-nHrFdSb-.js";import"./FocusScope-tP5bytlL.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-rZYQhwXt.js";import"./context-1gARON2y.js";import"./useSelector-CYhu1s7z.js";import"./dynamic-DKDa4OpU.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";const Le={title:"Overlays/Modal",component:c,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(c,{...t,controller:F("Modal",{defaultOpen:!0})},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(d,null,e.createElement(s,{closeOverlay:"Modal"},e.createElement(s,{action:L},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=F("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(c,{...t,controller:E},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(d,null,e.createElement(s,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(G,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(c,{...t},e.createElement(u,null,"Delete project"),e.createElement(i,null,e.createElement(p,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(s,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,v,M;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Modal");
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
          <ActionGroup>
            <Action closeOverlay="Modal">
              <Button color="accent">Create customer</Button>
              <Button color="secondary" variant="soft">
                Abort
              </Button>
            </Action>
          </ActionGroup>
        </Modal>
      </>;
  }
}`,...(M=(v=n.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var A,T,b;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <ModalTrigger>
      <Button color="danger">Delete project</Button>
      <Modal {...props}>
        <Heading>Delete project</Heading>
        <Content>
          <Text>Are you sure you want to delete this project?</Text>
        </Content>
        <ActionGroup>
          <Action closeOverlay="Modal">
            <Button color="danger">Delete project</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ActionGroup>
      </Modal>
    </ModalTrigger>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var B,w,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(O=(w=l.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var j,x,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(D=(x=m.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const Se=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{o as Default,l as Mobile,m as OffCanvas,n as WithController,a as WithTrigger,Se as __namedExportsOrder,Le as default};
