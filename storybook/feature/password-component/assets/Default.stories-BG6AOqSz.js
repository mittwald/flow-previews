import{R as e}from"./index-BwDkhjyp.js";import{B as r}from"./Button-86gkFkCw.js";import{T as i}from"./Text-xMX89lYJ.js";import{T as G}from"./TextField-CxsQxITw.js";import{L}from"./Label-Doa_m8lQ.js";import{C as u}from"./Content-ChZUa8dZ.js";import{H as d}from"./Heading-BMx6bwiN.js";import{M as c,a as W}from"./ModalTrigger-BTppStbh.js";import{u as V}from"./OverlayTrigger-B-iEVEid.js";import{A as p}from"./Action-CatRQW-r.js";import{A as f}from"./ActionGroup-BMrI49iQ.js";import{c as N}from"./lib-1TunOrY2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./IconApp-D5gedeYa.js";import"./flowComponent-B5uZ4s1Y.js";import"./index-B8XB3FuZ.js";import"./IconWarning-DT8hSaQm.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-5UBwHS6-.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./Button-CJW8IwaF.js";import"./utils-CcQIssJO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BcMbiAJh.js";import"./usePress-CqD9eiQF.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-22vGTmcn.js";import"./TextFieldBase-C8oXy505.js";import"./FormField.module-CWdTNYuH.js";import"./Form-DYn-vm94.js";import"./useLabel-BaXqGmeE.js";import"./useLabels-kg7v6Afk.js";import"./FieldDescription-Wv4h-N9O.js";import"./TextField-CIb_y3cC.js";import"./Input-B2pvGP9E.js";import"./useFormReset-CfqvoD0r.js";import"./useControlledState-C0C-dzuH.js";import"./Label-C622KGdQ.js";import"./Activity-Cov3f-FH.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BERv84ls.js";import"./number-nHrFdSb-.js";import"./Header-DVchM5wQ.js";import"./FocusScope-BuxQ1peU.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-DA6R-bu4.js";import"./context-DcNveDbd.js";import"./useSelector-Be3r6XND.js";import"./dynamic-DKDa4OpU.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";const ze={title:"Overlays/Modal",component:c,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:t=>e.createElement(c,{...t,controller:V("Modal",{defaultOpen:!0})},e.createElement(d,null,"New Customer"),e.createElement(u,null,e.createElement(i,null,"Create a new customer to manage your projects, members and payments."),e.createElement(G,null,e.createElement(L,null,"Customer name"))),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(p,{action:N},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const g=V("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:g.open},"Create customer"),e.createElement(c,{...t,controller:g},e.createElement(d,null,"New Customer"),e.createElement(u,null,e.createElement(i,null,"Create a new customer to manage your projects, members and payments."),e.createElement(G,null,e.createElement(L,null,"Customer name"))),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(W,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(c,{...t},e.createElement(d,null,"Delete project"),e.createElement(u,null,e.createElement(i,null,"Are you sure you want to delete this project?")),e.createElement(f,null,e.createElement(p,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}},s={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}};var E,C,y;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,M,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
