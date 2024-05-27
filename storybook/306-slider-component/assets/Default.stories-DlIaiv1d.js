import{R as e}from"./index-uCp2LrAq.js";import{B as r}from"./Button-RSy4MY88.js";import{B as c}from"./ButtonGroup-CQUdJCSi.js";import{T as p}from"./Text-JJiRTb5U.js";import{T as h}from"./TextField-BhrjsnaH.js";import{L as H}from"./Label-BAdgD445.js";import{C as i}from"./Content-DI6z1bUP.js";import{H as u}from"./Heading-vdGWPYbu.js";import{M as s}from"./Modal-Bw-ib7VC.js";import{u as G,A as d}from"./Action-BUT9Rdrj.js";import{O as S}from"./OverlayTrigger-CBwtIVIO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-v92cY4my.js";import"./index-CFQDndEx.js";import"./IconApp-DEshkfZj.js";import"./flowComponent-B3aOilil.js";import"./index-BOkhicXD.js";import"./IconWarning-Ba_VjyzM.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Dx1NoUG_.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-D4VcI4Uu.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DpEA8Hsr.js";import"./usePress-CaJD4Kpr.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./TextFieldBase-Cw1GKatC.js";import"./FormField.module-ChrANffr.js";import"./Form-BOwpWbru.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Input-AN0YuBj3.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BQk6lJ-q.js";import"./Activity-Ck-RMSDT.js";import"./RSPContexts-CJnKmcd7.js";import"./useSelector-CGMllKad.js";import"./Dialog-Dm6TnyDd.js";import"./OverlayArrow-BCqBDIej.js";import"./number-nHrFdSb-.js";import"./FocusScope-Bpk85l6Y.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-DWE0U9Im.js";const Me={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:G({defaultOpen:!0})},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=G();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(u,null,"New Customer"),e.createElement(i,null,e.createElement(p,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(H,null,"Customer name"))),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(u,null,"Delete project"),e.createElement(i,null,e.createElement(p,null,"Are you sure you want to delete this project?")),e.createElement(c,null,e.createElement(d,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const De=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{o as Default,l as Mobile,m as OffCanvas,n as WithController,a as WithTrigger,De as __namedExportsOrder,Me as default};
