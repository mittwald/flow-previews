import{R as e}from"./index-Cs7sjTYM.js";import{B as r}from"./Button-I8usChom.js";import{T as A}from"./Text-F433P2hn.js";import{T as y}from"./TextField-BnPsGDmF.js";import{L as v}from"./Label-D3FjCbQ5.js";import{C as m}from"./Content-DTJYmTdG.js";import{H as c}from"./Heading-CXy_emFx.js";import{M as a,a as U}from"./ModalTrigger-cyW-B8nm.js";import{u as b}from"./OverlayTrigger-Cs8XsCl-.js";import{A as l}from"./Action-gRX6I2a5.js";import{A as s}from"./ActionGroup-DUld_-qO.js";import{c as X}from"./lib-dhXtojww.js";import{u as J,F as K,a as Q}from"./Form-29kWsSEp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./IconApp-C6Ekwtz9.js";import"./flowComponent-8D1yScr8.js";import"./index-BU4L-DQy.js";import"./IconWarning-BmHOAWu0.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-V2DU6wd9.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./Button-inQNMO4w.js";import"./utils-CgpzwoFP.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BkYgQ3nW.js";import"./usePress-e9a-mRh7.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";import"./TextFieldBase-HJt3kRLF.js";import"./FormField.module-BQuq2dIH.js";import"./Form-DbuIRMOS.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./FieldDescription-BgEhY3kk.js";import"./Input-Cw3QD1cL.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./Label-BRZ8BO2K.js";import"./Activity-CPnWONG0.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-DV_Q4mkz.js";import"./number-nHrFdSb-.js";import"./Header-PsucT4kc.js";import"./FocusScope-BciiliGi.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-DH_5EOkC.js";import"./context-BvyrjmQo.js";import"./useSelector-BdoEZMWP.js";import"./dynamic-DKDa4OpU.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";const Ze={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:t=>e.createElement(a,{...t,controller:b("Modal",{defaultOpen:!0})},e.createElement(c,null,"New Customer"),e.createElement(m,null,e.createElement(A,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(v,null,"Customer name"))),e.createElement(s,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(l,{action:X},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},i={},u={render:t=>{const n=b("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:n.open},"Create customer"),e.createElement(a,{...t,controller:n},e.createElement(c,null,"New Customer"),e.createElement(m,null,e.createElement(A,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(v,null,"Customer name"))),e.createElement(s,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},p={render:t=>e.createElement(U,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(a,{...t},e.createElement(c,null,"Delete project"),e.createElement(m,null,e.createElement(A,null,"Are you sure you want to delete this project?")),e.createElement(s,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},d={parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{offCanvas:!0}},C={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},E={render:t=>{const n=J(),o=b("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:o.open},"Add customer"),e.createElement(a,{...t,controller:o},e.createElement(K,{form:n,onSubmit:()=>o.close()},e.createElement(c,null,"Add Customer"),e.createElement(m,null,e.createElement(Q,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(v,null,"Customer name")))),e.createElement(s,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}},g={render:t=>{const n=J(),o=b("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:o.open},"Add customer"),e.createElement(a,{offCanvas:!0,...t,controller:o},e.createElement(K,{form:n,onSubmit:()=>o.close()},e.createElement(c,null,"Add Customer"),e.createElement(m,null,e.createElement(Q,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(v,null,"Customer name")))),e.createElement(s,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}};var M,F,B;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var O,T,w;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,x,j;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var h,H,P;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var G,L,D;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(D=(L=f.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var W,q,V;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(V=(q=C.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var N,z,R;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(z=E.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var _,k,I;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      name: string;
    }>();
    const modalController = useOverlayController("Modal");
    return <>
        <Button color="accent" onPress={modalController.open}>
          Add customer
        </Button>

        <Modal offCanvas {...props} controller={modalController}>
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
}`,...(I=(k=g.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const $e=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasMobile","WithForm","OffCanvasWithForm"];export{i as Default,d as Mobile,f as OffCanvas,C as OffCanvasMobile,g as OffCanvasWithForm,u as WithController,E as WithForm,p as WithTrigger,$e as __namedExportsOrder,Ze as default};
