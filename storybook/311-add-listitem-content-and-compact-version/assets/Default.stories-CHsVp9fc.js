import{R as e}from"./index-uCp2LrAq.js";import"./index-DKGoyJng.js";import"./index-BnXOlZkL.js";import"./index-DPz7AJqL.js";import{T as h}from"./index-DzGYij4y.js";import"./index-Cu0DIzMf.js";import"./index-eN4YWScM.js";import"./index-WuRQOomu.js";import{M as s}from"./index-_vZsD2F0.js";import{u as H,A as c}from"./index-BbnjpHj5.js";import{O as S}from"./index-DMWUQoEB.js";import{H as p}from"./Heading-B96kFBTJ.js";import{C as i}from"./Content-BmqqH9bA.js";import{T as u}from"./Text-BCaZeLgd.js";import{L as G}from"./Label-D3S2mFHP.js";import{B as d}from"./ButtonGroup-CbURn9lM.js";import{B as r}from"./Button-DdiMHN0-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DEsUTjf3.js";import"./FormField.module-DHkMZlWs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DziSYcSt.js";import"./index-BOkhicXD.js";import"./IconApp-C_Ee2cAg.js";import"./IconWarning-DXLSgN4Z.js";import"./Form-CFx9F0t1.js";import"./useFocusable-COvHRmfY.js";import"./utils-8G7INyPj.js";import"./useLabel-hjbLx6Vu.js";import"./useLabels-BQEMyRqd.js";import"./Text-DnTC8Fwv.js";import"./Input-COXA4GZG.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-CWeWCuHL.js";import"./useControlledState-B8AA3oOY.js";import"./Label-DV4r7soL.js";import"./useSelector--8cGpCN1.js";import"./Dialog-DPtrt-IL.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DVSzW_UP.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-B2aKG-1k.js";import"./usePress-dpeNPdVr.js";import"./FocusScope-DrwDeQCl.js";import"./VisuallyHidden-Cd1iXq69.js";import"./Wrap-DQq6jo70.js";import"./index-DVibwfqw.js";import"./index-DePfloUh.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BP2Mc1p0.js";import"./Button-DUc748qi.js";const He={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
