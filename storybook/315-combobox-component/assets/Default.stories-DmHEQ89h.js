import{R as e}from"./index-uCp2LrAq.js";import"./index-B9XJpLw1.js";import"./index-FhlPAh1E.js";import"./index-B_ou1i4R.js";import{T as h}from"./index-CLJk_5g7.js";import"./index-B__7BxyL.js";import"./index-DhOmVTQT.js";import"./index-KxW2TRL5.js";import{M as s}from"./index-DM_UTNv5.js";import{u as H,A as c}from"./index-CczkjrUC.js";import{O as S}from"./index-fcl66h9g.js";import{H as p}from"./Heading-4tYTrSDh.js";import{C as i}from"./Content-BQ4ywcdk.js";import{T as u}from"./Text-Dp5UV4Su.js";import{L as G}from"./Label-hD4PBlz8.js";import{B as d}from"./ButtonGroup-CfAK63hw.js";import{B as r}from"./Button-aU2Eeeyj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cgt-y8q0.js";import"./FormField.module-Co8ldtVA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvmVviyC.js";import"./index-BOkhicXD.js";import"./IconApp-FFx7s__U.js";import"./IconWarning-CZBb_lzG.js";import"./Form-BZ0PxO7a.js";import"./useFocusable-Ci2wVYze.js";import"./utils-BGsKKjDw.js";import"./useLabel-Cohmypox.js";import"./useLabels-COLBOOlB.js";import"./Text-Daiml_5e.js";import"./Input-zmw4YJce.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-B-YRps-i.js";import"./useControlledState-B8AA3oOY.js";import"./Label-tIxD_xLh.js";import"./useSelector-DLy-NWpF.js";import"./Dialog-BTcu6PHq.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CBf0Hfqk.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CsLYpn7N.js";import"./usePress-CP78YWrE.js";import"./FocusScope-CRWuoD-1.js";import"./VisuallyHidden-DG5wj4QR.js";import"./Wrap-DQq6jo70.js";import"./index-IVpWfQyc.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Cqz6fh5v.js";import"./Button-C6109VW8.js";const he={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
