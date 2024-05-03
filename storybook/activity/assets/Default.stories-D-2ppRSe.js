import{R as e}from"./index-BwDkhjyp.js";import"./index-R9SXROV0.js";import"./index-CIzygn6C.js";import"./index-Cmm4kSfL.js";import{T as h}from"./index-BsutFZoW.js";import"./index--Bo1CDgE.js";import"./index-3_QjF02i.js";import"./index-DR0RA5x6.js";import{M as s}from"./index-CPK2NR7R.js";import{u as H,A as c}from"./index-DXY-z19o.js";import{O as S}from"./index-ex2IWOU-.js";import{H as p}from"./Heading-ByzHdISf.js";import{C as i}from"./Content-DU0RYJRW.js";import{T as u}from"./Text-_YkQ25lp.js";import{L as G}from"./Label-BII7KLVu.js";import{B as d}from"./ButtonGroup-LTmw1lIf.js";import{B as r}from"./Button-DuqxXfo1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C1TDKjEy.js";import"./FormField.module-BuInoB3g.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DSjr-DA9.js";import"./index-B8XB3FuZ.js";import"./IconApp-Cw_YJm7P.js";import"./IconWarning-Brm6znG4.js";import"./Form-ClPd1WN4.js";import"./useFocusable-DzpyvdoN.js";import"./utils-BPWq_g-Q.js";import"./useLabel-DZ-VsmYu.js";import"./useLabels-DU7gDNHk.js";import"./Text-DaIqyakl.js";import"./Input-Cvkbf79e.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-D-ULXoWK.js";import"./useControlledState-C0C-dzuH.js";import"./Label-8qM4s33n.js";import"./useSelector-Ca9JKhGg.js";import"./Dialog-DpHOp60S.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BQ0eDFRq.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BrR5B9uo.js";import"./usePress-BlWeTRZV.js";import"./FocusScope-BcVerVEk.js";import"./VisuallyHidden-BhpnabCC.js";import"./Wrap-DQq6jo70.js";import"./index-CYd1cWx8.js";import"./index-dhKWstfL.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B41iwwvE.js";import"./Button-CgYWhGLL.js";const He={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const Ge=["Default","WithController","WithTrigger","Mobile","OffCanvas"];export{o as Default,l as Mobile,m as OffCanvas,n as WithController,a as WithTrigger,Ge as __namedExportsOrder,He as default};
