import{R as e}from"./index-uCp2LrAq.js";import{B as r}from"./Button-C83TB_Br.js";import{T as p}from"./Text-45YGqDyb.js";import{T as h}from"./TextField-D4MMbTNU.js";import{L as H}from"./Label-BbIZPVxU.js";import{C as i}from"./Content-DYXpuJG3.js";import{H as u}from"./Heading-BOKnc2y2.js";import{M as c,a as G}from"./ModalTrigger-CWz3PwOx.js";import{u as F,A as s}from"./Action-BZHYLJuU.js";import{A as d}from"./ActionGroup-CMo1z391.js";import{c as L}from"./lib-C2o6Yg7N.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./IconApp-Bvp8_lYy.js";import"./flowComponent-Cgwf_8Pz.js";import"./index-BOkhicXD.js";import"./IconWarning-B_x1GzbP.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Bqf3v_Ad.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-DEqt5BuM.js";import"./utils-VMHz66w6.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BnMUMntI.js";import"./usePress-BwUp6-ib.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-CV99Jc8q.js";import"./TextFieldBase-B-vvf2GW.js";import"./FormField.module-zpuapejh.js";import"./Form-CiidE__u.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Input-udh8AIzL.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-ByvKXg4M.js";import"./Activity-Ck-RMSDT.js";import"./RSPContexts-CJnKmcd7.js";import"./ModalOverlay-C3v4lp3V.js";import"./OverlayTrigger-Bw1ONM8y.js";import"./OverlayArrow-CzGgKwTX.js";import"./number-nHrFdSb-.js";import"./FocusScope-CWd9kKtL.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-C35j07Di.js";import"./dynamic-DKDa4OpU.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";const He={title:"Overlays/Modal",component:c,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(c,{...t,controller:F({defaultOpen:!0})},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(d,null,e.createElement(s,{closeOverlay:!0},e.createElement(s,{action:L},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=F();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(c,{...t,controller:E},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(d,null,e.createElement(s,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(G,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(c,{...t},e.createElement(u,null,"Delete project"),e.createElement(i,null,e.createElement(p,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(s,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var g,f,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,v,A;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          <ActionGroup>
            <Action closeOverlay>
              <Button color="accent">Create customer</Button>
              <Button color="secondary" variant="soft">
                Abort
              </Button>
            </Action>
          </ActionGroup>
        </Modal>
      </>;
  }
}`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var T,b,B;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <ModalTrigger>
      <Button color="danger">Delete project</Button>
      <Modal {...props}>
        <Heading>Delete project</Heading>
        <Content>
          <Text>Are you sure you want to delete this project?</Text>
        </Content>
        <ActionGroup>
          <Action closeOverlay>
            <Button color="danger">Delete project</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ActionGroup>
      </Modal>
    </ModalTrigger>
}`,...(B=(b=a.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var w,M,O;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,x,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(D=(x=m.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const Fe=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{o as Default,l as Mobile,m as OffCanvas,n as WithController,a as WithTrigger,Fe as __namedExportsOrder,He as default};
