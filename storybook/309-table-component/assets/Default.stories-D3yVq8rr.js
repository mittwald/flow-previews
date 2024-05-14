import{R as e}from"./index-BwDkhjyp.js";import"./index-ajPlF_if.js";import"./index-ClpEaHmI.js";import"./index-C0raSsgL.js";import{T as h}from"./index-C96EqvCY.js";import"./index-Bxd6nhvt.js";import"./index-ZSW3VHiY.js";import"./index-D3WyxQ4e.js";import{M as s}from"./index-80v0LCwC.js";import{u as H,A as c}from"./index-D-_85alv.js";import{O as S}from"./index-E5PnWMuH.js";import{H as p}from"./Heading-BxjLDyJj.js";import{C as i}from"./Content-DL78Mf50.js";import{T as u}from"./Text-phIOO8u9.js";import{L as G}from"./Label-wWG0xxvc.js";import{B as d}from"./ButtonGroup-BOGA6Tzx.js";import{B as r}from"./Button-D8pmMIBp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CrF0ssBL.js";import"./FormField.module-DxGAUAvA.js";import"./clsx-B-dksMZM.js";import"./index-CoJk2QQB.js";import"./IconApp-RPV2UACM.js";import"./flowComponent-syVPRVDK.js";import"./index-B8XB3FuZ.js";import"./IconWarning-D1gyLIYa.js";import"./Form-UOu9ohy-.js";import"./useFocusable-C08EbcBh.js";import"./utils-bTb4N6hy.js";import"./useLabel-CgqvziXr.js";import"./useLabels-DByniHrJ.js";import"./Text-fvXBaVCt.js";import"./Input-uGmnc6nV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-BqJg0Uge.js";import"./useControlledState-C0C-dzuH.js";import"./Label-gkOQ74H0.js";import"./useSelector-BvFSKP2Z.js";import"./Dialog-BDggyyJu.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-fvqKTS-v.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Cfq_zrt4.js";import"./usePress-18_TO7Wj.js";import"./FocusScope-B_JIBP49.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-Jq0fOfeV.js";import"./Wrap-DQq6jo70.js";import"./index-dhKWstfL.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-JGHWlUAu.js";import"./Button-D5gdTRso.js";const Ge={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
