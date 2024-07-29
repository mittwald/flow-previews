import{R as e}from"./index-Cs7sjTYM.js";import{B as r}from"./Button-ETWxWgqR.js";import{T as i}from"./Text-DrKyKMJq.js";import{T as G}from"./TextField-BpP84nct.js";import{L}from"./Label-C-aczTYm.js";import{C as u}from"./Content-D_K7R7po.js";import{H as d}from"./Heading-BOKzrxeE.js";import{M as c,a as W}from"./ModalTrigger-BmqKUTcF.js";import{u as V}from"./OverlayTrigger-05SHITif.js";import{A as p}from"./Action-CQarenSX.js";import{A as f}from"./ActionGroup-Bg-OBFjc.js";import{c as N}from"./lib-DZnny5-S.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./IconApp-COwJ0ZRR.js";import"./flowComponent-BqZrLudx.js";import"./index-BMdlDBjA.js";import"./IconWarning-CBdDJmJC.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BB5hHLYh.js";import"./useLocalizedStringFormatter-QuGsJjbc.js";import"./Button-DB69cHYY.js";import"./utils-Ca6JWPXc.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-OJvPCLGe.js";import"./usePress-DiyYDbeg.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-DkFxhH4d.js";import"./TextFieldBase-DVhxZiZ4.js";import"./FormField.module-DHQpNdM-.js";import"./Form-yihfkm38.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./FieldDescription-CGzCV37F.js";import"./TextField-DlniDS2c.js";import"./Input-DrqkB9m8.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./Label-D27JuWFB.js";import"./Activity-CPnWONG0.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BxlO7pa5.js";import"./number-nHrFdSb-.js";import"./Header-ClGk2rJ_.js";import"./FocusScope-DZAGVQVL.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BF1ug10U.js";import"./context-D6OB3BUw.js";import"./useSelector-D7b7Gg7N.js";import"./dynamic-DKDa4OpU.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";const ze={title:"Overlays/Modal",component:c,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:t=>e.createElement(c,{...t,controller:V("Modal",{defaultOpen:!0})},e.createElement(d,null,"New Customer"),e.createElement(u,null,e.createElement(i,null,"Create a new customer to manage your projects, members and payments."),e.createElement(G,null,e.createElement(L,null,"Customer name"))),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(p,{action:N},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const g=V("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:g.open},"Create customer"),e.createElement(c,{...t,controller:g},e.createElement(d,null,"New Customer"),e.createElement(u,null,e.createElement(i,null,"Create a new customer to manage your projects, members and payments."),e.createElement(G,null,e.createElement(L,null,"Customer name"))),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(W,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(c,{...t},e.createElement(d,null,"Delete project"),e.createElement(u,null,e.createElement(i,null,"Are you sure you want to delete this project?")),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}},s={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}};var E,C,y;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,M,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var A,w,T;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(w=a.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var B,O,j;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(j=(O=l.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var x,D,h;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(h=(D=m.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var H,S,F;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const Pe=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasMobile"];export{o as Default,l as Mobile,m as OffCanvas,s as OffCanvasMobile,n as WithController,a as WithTrigger,Pe as __namedExportsOrder,ze as default};
