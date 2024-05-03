import{R as e}from"./index-BwDkhjyp.js";import"./index-DzrNjVda.js";import"./index-CIpzwOvJ.js";import"./index--1Agfdy1.js";import{T as h}from"./index-C9qYVs5U.js";import"./index-CZYo53nU.js";import"./index-ClCz9vVa.js";import"./index-BVe1Ob2o.js";import{M as s}from"./index-Brqbmf-v.js";import{u as H,A as c}from"./index-BI5lnJdq.js";import{O as S}from"./index-DbGxFAIf.js";import{H as p}from"./Heading-DJHKz8W4.js";import{C as i}from"./Content-DqKB1jss.js";import{T as u}from"./Text-DLsw2oYK.js";import{L as G}from"./Label-DDYD1iYc.js";import{B as d}from"./ButtonGroup-CVuUE0eK.js";import{B as r}from"./Button-jClpZjQg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DleXkfFV.js";import"./FormField.module-D54uLd6o.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-onzJUu.js";import"./index-B8XB3FuZ.js";import"./IconApp-O1Ko_agd.js";import"./IconWarning-CPLPaO8l.js";import"./Form-Dlp6bjBW.js";import"./useFocusable-B-LauCUn.js";import"./utils-DRHmYb2_.js";import"./useLabel-BI_LBsYD.js";import"./useLabels-Bmsr8nBw.js";import"./Text-COwT3C7Z.js";import"./Input-BQ8JcjYo.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-bp4irgL8.js";import"./useControlledState-C0C-dzuH.js";import"./Label-BaB2g2WF.js";import"./useSelector-BoWWcPfB.js";import"./Dialog-BRP8ORPr.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-99HcePCc.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-DayyQCdx.js";import"./usePress-BkIif8cm.js";import"./FocusScope-CDZwNdd7.js";import"./VisuallyHidden-DhvvBhri.js";import"./Wrap-DQq6jo70.js";import"./index-dhKWstfL.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BrgvgqA3.js";import"./Button-C9ymswsl.js";const he={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m","l"]}},args:{size:"s"},render:t=>e.createElement(s,{...t,controller:H({defaultOpen:!0})},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},o={},n={render:t=>{const E=H();return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:E.open},"Create customer"),e.createElement(s,{...t,controller:E},e.createElement(p,null,"New Customer"),e.createElement(i,null,e.createElement(u,null,"Create a new customer to manage your projects, members and payments."),e.createElement(h,null,e.createElement(G,null,"Customer name"))),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},a={render:t=>e.createElement(S,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(s,{...t},e.createElement(p,null,"Delete project"),e.createElement(i,null,e.createElement(u,null,"Are you sure you want to delete this project?")),e.createElement(d,null,e.createElement(c,{closeOverlay:!0},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},l={parameters:{viewport:{defaultViewport:"mobile1"}}},m={args:{offCanvas:!0}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,v,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
