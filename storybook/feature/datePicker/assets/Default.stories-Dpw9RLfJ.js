import{R as e}from"./index-BwDkhjyp.js";import"./index-BhwfpT24.js";import"./index-C2ZNd_js.js";import"./index-ClBBAz8G.js";import{T as h}from"./index-u9_jXk2b.js";import"./index-BUKT1Mbq.js";import"./index-CTZVGI_L.js";import"./index-CFi-0kt5.js";import{M as s}from"./index-By2zHiun.js";import{u as H,A as c}from"./index-CrcpoVsX.js";import{O as S}from"./index-i-EOeHUO.js";import{H as p}from"./Heading-Dpoua6td.js";import{C as i}from"./Content-voJAjZIO.js";import{T as u}from"./Text-CME0CjX1.js";import{L as G}from"./Label-Dw5IQixM.js";import{B as d}from"./ButtonGroup-DiL7Og_c.js";import{B as r}from"./Button-Vp9K0Jj0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C3O-7nAE.js";import"./FormField.module-DvflTJWd.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dglj5cqB.js";import"./index-B8XB3FuZ.js";import"./IconApp-_FcSWQQl.js";import"./IconWarning-DZA2CR2B.js";import"./Form-DmVgoquN.js";import"./useFocusable-1hkoevAF.js";import"./utils-DDqfTkhb.js";import"./useLabel-CGKcXo82.js";import"./useLabels-DNsw1HUe.js";import"./Text-Ck09bxUA.js";import"./Input-KxH1mW2Q.js";import"./Label-C1MFjKOK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-DSnLTMjq.js";import"./useFormReset-Dz9no7wq.js";import"./useControlledState-C0C-dzuH.js";import"./useSelector-Cm3ogMLN.js";import"./Dialog-BzI3DpKU.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-C-JGts0N.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNfLxuDa.js";import"./usePress-CeNy5sqc.js";import"./FocusScope-DcAV6EIT.js";import"./VisuallyHidden-DuYGmAhQ.js";import"./Heading-DY1nJOWO.js";import"./index-dhKWstfL.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-igBsChks.js";import"./Button-DxZy_SLj.js";const He={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
