import{R as e}from"./index-uCp2LrAq.js";import"./index-zti3acSC.js";import"./index-DMBKdXyj.js";import"./index-iYGABMg6.js";import{T as h}from"./index-BZtVdekf.js";import"./index-D7MUhtKV.js";import"./index-DinGGEzd.js";import"./index-DhfwWM_x.js";import{M as s}from"./index-DvvVQQHR.js";import{u as H,A as c}from"./index-DI89UD1G.js";import{O as S}from"./index-CLC4cy1X.js";import{H as p}from"./Heading-Q1_bACrd.js";import{C as i}from"./Content-t02d2fbA.js";import{T as u}from"./Text-CktkOlMV.js";import{L as G}from"./Label-BjuUHv-W.js";import{B as d}from"./ButtonGroup-C4pXusOI.js";import{B as r}from"./Button-CU2zxCcK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-4v1PQ01f.js";import"./FormField.module-B_bPHYr2.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xPf8ERfU.js";import"./index-7Bm5Bt6L.js";import"./index-BOkhicXD.js";import"./IconApp-CCsuGVcA.js";import"./IconWarning-BPi22R4m.js";import"./Form-DC_Jaq0Q.js";import"./useFocusable-BGYghl-O.js";import"./utils-CHnd_qWz.js";import"./useLabel-CRisioBB.js";import"./useLabels-7II0TQXO.js";import"./Text-QhWkLhD7.js";import"./Input-DZsvBgax.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Co0XpM0Q.js";import"./useControlledState-B8AA3oOY.js";import"./Label-D2L52JVz.js";import"./useSelector-DVSXhtVp.js";import"./Dialog-CmqFKjmg.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DMphC9df.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Cwaj61aR.js";import"./usePress-C4eoOWOJ.js";import"./FocusScope-BAgquhRo.js";import"./VisuallyHidden-DMUsmByH.js";import"./Wrap-DQq6jo70.js";import"./index-DBUGr6AP.js";import"./index-DePfloUh.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BhCV00Wa.js";import"./Button-D-FvJARW.js";const Ge={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const Se=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{o as Default,l as Mobile,m as OffCanvas,n as WithController,a as WithTrigger,Se as __namedExportsOrder,Ge as default};
