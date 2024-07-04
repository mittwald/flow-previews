import{R as e}from"./index-BwDkhjyp.js";import{B as r}from"./Button-CGYujOOx.js";import{T as i}from"./Text-OHQxmlAI.js";import{T as G}from"./TextField-DNmp17te.js";import{L}from"./Label-DqyDhkXf.js";import{C as u}from"./Content-D12a__op.js";import{H as d}from"./Heading-CYnWOiGh.js";import{M as c,a as W}from"./ModalTrigger-BRfOkqxL.js";import{u as V}from"./OverlayTrigger-CcMw9uE5.js";import{A as p}from"./Action-DJglBR0x.js";import{A as f}from"./ActionGroup-3ytB5zzr.js";import{c as N}from"./lib-e9su9h-L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DR_AoDrQ.js";import"./index-D1Z7wIYD.js";import"./IconApp-C-B10zNi.js";import"./flowComponent-pf1ZT_RA.js";import"./index-B8XB3FuZ.js";import"./IconWarning-D08KcEGW.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./Button-j9P20aTv.js";import"./utils-_0I8Kdxf.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-Di1f8vLw.js";import"./usePress-CipJ8IEr.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-YaHrFsZr.js";import"./TextFieldBase-vnBPC-xk.js";import"./FormField.module-DmKGlvAf.js";import"./Form-RrZ3zN_v.js";import"./useLabel-Dy08JOVD.js";import"./useLabels-h5MY4Xo1.js";import"./FieldDescription-DDIKcJ3T.js";import"./Input-Bxlqy7dR.js";import"./Label-BbJlieEf.js";import"./useTextField-Bm63tU9y.js";import"./useFormReset-CqSSSrN8.js";import"./useControlledState-C0C-dzuH.js";import"./Activity-DsHdYeGi.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CTAo9QmE.js";import"./number-nHrFdSb-.js";import"./Header-0z1MCI7V.js";import"./PressResponder-CS6YBkA6.js";import"./FocusScope-h9apr_hQ.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-CctDujdB.js";import"./context-ZkthLU-2.js";import"./useSelector-Pyc-engy.js";import"./dynamic-DKDa4OpU.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";const Pe={title:"Overlays/Modal",component:c,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(c,{...t,controller:V("Modal",{defaultOpen:!0})},e.createElement(d,null,"New Customer"),e.createElement(u,null,e.createElement(i,null,"Create a new customer to manage your projects, members and payments."),e.createElement(G,null,e.createElement(L,null,"Customer name"))),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(p,{action:N},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const g=V("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:g.open},"Create customer"),e.createElement(c,{...t,controller:g},e.createElement(d,null,"New Customer"),e.createElement(u,null,e.createElement(i,null,"Create a new customer to manage your projects, members and payments."),e.createElement(G,null,e.createElement(L,null,"Customer name"))),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(W,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(c,{...t},e.createElement(d,null,"Delete project"),e.createElement(u,null,e.createElement(i,null,"Are you sure you want to delete this project?")),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}},s={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}};var E,C,y;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,M,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const Re=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasMobile"];export{o as Default,l as Mobile,m as OffCanvas,s as OffCanvasMobile,n as WithController,a as WithTrigger,Re as __namedExportsOrder,Pe as default};
