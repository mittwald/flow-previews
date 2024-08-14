import{R as e}from"./index-Cs7sjTYM.js";import{B as r}from"./Button-I8usChom.js";import{T as g}from"./Text-F433P2hn.js";import{T as y}from"./TextField-B87zAoma.js";import{L as v}from"./Label-BIpm9EFM.js";import{C as d}from"./Content-DTJYmTdG.js";import{H as f}from"./Heading-CXy_emFx.js";import{M as o,a as R}from"./ModalTrigger-FLI2zY7-.js";import{u as b}from"./OverlayTrigger-Cs8XsCl-.js";import{A as n}from"./Action-gRX6I2a5.js";import{A as E}from"./ActionGroup-DUld_-qO.js";import{c as _}from"./lib-dhXtojww.js";import{u as k,F as I,a as J}from"./Form-29kWsSEp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./IconApp-C6Ekwtz9.js";import"./flowComponent-8D1yScr8.js";import"./index-BU4L-DQy.js";import"./IconWarning-BmHOAWu0.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-V2DU6wd9.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./Button-inQNMO4w.js";import"./utils-CgpzwoFP.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BkYgQ3nW.js";import"./usePress-e9a-mRh7.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";import"./TextFieldBase-DaMBU4hF.js";import"./FormField.module-BQuq2dIH.js";import"./Form-DbuIRMOS.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./FieldDescription-BgEhY3kk.js";import"./Input-Cw3QD1cL.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./Label-BRZ8BO2K.js";import"./Activity-CPnWONG0.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-DV_Q4mkz.js";import"./number-nHrFdSb-.js";import"./Header-PsucT4kc.js";import"./FocusScope-BciiliGi.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-DH_5EOkC.js";import"./context-BvyrjmQo.js";import"./useSelector-BdoEZMWP.js";import"./dynamic-DKDa4OpU.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";const Qe={title:"Overlays/Modal",component:o,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:t=>e.createElement(o,{...t,controller:b("Modal",{defaultOpen:!0})},e.createElement(f,null,"New Customer"),e.createElement(d,null,e.createElement(g,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(v,null,"Customer name"))),e.createElement(E,null,e.createElement(n,{closeOverlay:"Modal"},e.createElement(n,{action:_},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},l={},m={render:t=>{const a=b("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:a.open},"Create customer"),e.createElement(o,{...t,controller:a},e.createElement(f,null,"New Customer"),e.createElement(d,null,e.createElement(g,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(v,null,"Customer name"))),e.createElement(E,null,e.createElement(n,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},c={render:t=>e.createElement(R,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(o,{...t},e.createElement(f,null,"Delete project"),e.createElement(d,null,e.createElement(g,null,"Are you sure you want to delete this project?")),e.createElement(E,null,e.createElement(n,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},s={parameters:{viewport:{defaultViewport:"mobile1"}}},i={args:{offCanvas:!0}},p={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},u={render:t=>{const a=k(),C=b("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:C.open},"Add customer"),e.createElement(o,{...t,controller:C},e.createElement(I,{form:a,onSubmit:()=>C.close()},e.createElement(f,null,"Add Customer"),e.createElement(d,null,e.createElement(J,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(v,null,"Customer name")))),e.createElement(E,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(n,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}};var A,M,B;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(B=(M=l.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var F,T,O;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Modal");
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
            <Action closeOverlay="Modal">
              <Button color="accent">Create customer</Button>
              <Button color="secondary" variant="soft">
                Abort
              </Button>
            </Action>
          </ActionGroup>
        </Modal>
      </>;
  }
}`,...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var w,x,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <ModalTrigger>
      <Button color="danger">Delete project</Button>
      <Modal {...props}>
        <Heading>Delete project</Heading>
        <Content>
          <Text>Are you sure you want to delete this project?</Text>
        </Content>
        <ActionGroup>
          <Action closeOverlay="Modal">
            <Button color="danger">Delete project</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ActionGroup>
      </Modal>
    </ModalTrigger>
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,h,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(D=(h=s.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var H,G,L;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(L=(G=i.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var P,W,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(V=(W=p.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var N,q,z;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      name: string;
    }>();
    const modalController = useOverlayController("Modal");
    return <>
        <Button color="accent" onPress={modalController.open}>
          Add customer
        </Button>

        <Modal {...props} controller={modalController}>
          <Form form={form} onSubmit={() => modalController.close()}>
            <Heading>Add Customer</Heading>
            <Content>
              <Field name="name" rules={{
              required: "Please enter a name"
            }}>
                <TextField>
                  <Label>Customer name</Label>
                </TextField>
              </Field>
            </Content>
            <ActionGroup>
              <Button type="submit" color="accent">
                Submit
              </Button>
              <Action closeOverlay="Modal">
                <Button variant="soft" color="secondary">
                  Abort
                </Button>
              </Action>
            </ActionGroup>
          </Form>
        </Modal>
      </>;
  }
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const Ue=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasMobile","WithForm"];export{l as Default,s as Mobile,i as OffCanvas,p as OffCanvasMobile,m as WithController,u as WithForm,c as WithTrigger,Ue as __namedExportsOrder,Qe as default};
