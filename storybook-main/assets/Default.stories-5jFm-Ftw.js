import{R as e}from"./index-uCp2LrAq.js";import"./index-aWlJG3iA.js";import"./index-DcAUCQmr.js";import"./index-AB4t4iiq.js";import{T as h}from"./index-C4PLwbr_.js";import"./index-D4sAUk7Q.js";import"./index-CB7B9O3u.js";import"./index-BX8i4PLD.js";import{M as s}from"./index-i68YYBj_.js";import{u as H,A as c}from"./index-DpWmS5YO.js";import{O as S}from"./index-DJPKF2bi.js";import{H as p}from"./Heading-Bo4BwSuY.js";import{C as i}from"./Content-Beh31jq-.js";import{T as u}from"./Text-DO63ymi3.js";import{L as G}from"./Label-DR5LScjm.js";import{B as d}from"./ButtonGroup-pwvTtCo1.js";import{B as r}from"./Button-z705SHmQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B0gsvtGS.js";import"./FormField.module-LvYbSK_w.js";import"./clsx-B-dksMZM.js";import"./flowComponent-mx6gNTLC.js";import"./index-BOkhicXD.js";import"./IconApp-BIdwNI98.js";import"./IconWarning-D8_Kmr9-.js";import"./Form-CYvIfZY5.js";import"./useFocusable-DNSguhwx.js";import"./utils-CdQPmsSK.js";import"./useLabel-BPOl7npH.js";import"./useLabels-Cb96l7Yv.js";import"./Text-CCrwicCI.js";import"./Input-CS4ZEe3F.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BVAoG5kh.js";import"./useControlledState-B8AA3oOY.js";import"./Label-CQOGn-Bz.js";import"./useSelector-Dgx0GWGz.js";import"./Dialog-D2Subqkv.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-F9Tj1JST.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSZsX2U2.js";import"./usePress-BYMZ8FXB.js";import"./FocusScope-C7oaV3dv.js";import"./VisuallyHidden-kdbq3tHP.js";import"./Wrap-DQq6jo70.js";import"./index-DePfloUh.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-66NAcl6E.js";import"./Button-B0KPMA4K.js";const he={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
