import{R as e}from"./index-Cs7sjTYM.js";import{B as r}from"./Button-Bq7y9BIZ.js";import{T as M}from"./Text-DZmFXo-e.js";import{T as y}from"./TextField-BoKTUj3a.js";import{L as b}from"./Label-3TwhOvTI.js";import{C as m}from"./Content-SctQ_6lp.js";import{H as s}from"./Heading-i4QpT3vc.js";import{M as a,a as ee}from"./ModalTrigger-B0pK5Met.js";import{u as A}from"./OverlayTrigger-CuDFj76r.js";import{A as l}from"./Action-DQr6rgUQ.js";import{A as c}from"./ActionGroup-BFxZDqF9.js";import{c as re}from"./lib-c8cKyaq5.js";import{u as Y,F as Z,a as $}from"./Form-C8EVfVf8.js";import{a as O}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./IconApp-CKfGrMYq.js";import"./flowComponent-Bg40pdZw.js";import"./index-Cf-03bMR.js";import"./IconWarning-DoqSRZU1.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-9k8jsvZY.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-CB57Q0FS.js";import"./utils-GKDLJ2vO.js";import"./ProgressBar-CpzbYRLN.js";import"./Label-qcDNDzhS.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BZB42ELj.js";import"./useFocusRing-Cx5sZpw_.js";import"./usePress-IYK5Xs6I.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-DP1y2Dk0.js";import"./TextFieldBase-D8slg9uC.js";import"./FormField.module-CjJo_njJ.js";import"./Form-VOSHarlK.js";import"./FieldDescription-DFuVvWqw.js";import"./Input-Bgn03Bkw.js";import"./useTextField-CXFORGy2.js";import"./useFormReset-BmVKDtZT.js";import"./useControlledState-B7K2eYzO.js";import"./Heading-Ys7-2L7-.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-HdKIwz3h.js";import"./Header-dj3Po25X.js";import"./PressResponder-Bhz1UQIJ.js";import"./FocusScope-Dq1DdGw4.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-sPIK_yL0.js";import"./context-BnMUo41h.js";import"./useSelector-DiJHxpbu.js";import"./getActionGroupSlot-DLuT6VQZ.js";import"./dynamic-DKDa4OpU.js";import"./v4-CQkTLCs1.js";const sr={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:t=>e.createElement(a,{...t,controller:A("Modal",{isDefaultOpen:!0})},e.createElement(s,null,"New Customer"),e.createElement(m,null,e.createElement(M,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(b,null,"Customer name"))),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(l,{action:re},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},i={},u={render:t=>{const n=A("Modal",{onOpen:()=>O("onOpen")(),onClose:()=>O("onClose")()});return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:n.open},"Create customer"),e.createElement(a,{...t,controller:n},e.createElement(s,null,"New Customer"),e.createElement(m,null,e.createElement(M,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(b,null,"Customer name"))),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},p={render:t=>e.createElement(ee,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(a,{...t},e.createElement(s,null,"Delete project"),e.createElement(m,null,e.createElement(M,null,"Are you sure you want to delete this project?")),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},d={parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{offCanvas:!0}},C={args:{offCanvas:!0,offCanvasOrientation:"left"}},E={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},g={render:t=>{const n=Y(),o=A("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:o.open},"Add customer"),e.createElement(a,{...t,controller:o},e.createElement(Z,{form:n,onSubmit:()=>o.close()},e.createElement(s,null,"Add Customer"),e.createElement(m,null,e.createElement($,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(b,null,"Customer name")))),e.createElement(c,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}},v={render:t=>{const n=Y(),o=A("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:o.open},"Add customer"),e.createElement(a,{offCanvas:!0,...t,controller:o},e.createElement(Z,{form:n,onSubmit:()=>o.close()},e.createElement(s,null,"Add Customer"),e.createElement(m,null,e.createElement($,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(b,null,"Customer name")))),e.createElement(c,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}};var F,B,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var S,w,x;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Modal", {
      onOpen: () => action("onOpen")(),
      onClose: () => action("onClose")()
    });
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
}`,...(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var j,L,h;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(h=(L=p.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var H,P,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var G,W,q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var V,N,z;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    offCanvas: true,
    offCanvasOrientation: "left"
  }
}`,...(z=(N=C.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var R,_,k;E.parameters={...E.parameters,docs:{...(R=E.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(k=(_=E.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var I,J,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const cr=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm"];export{i as Default,d as Mobile,f as OffCanvas,E as OffCanvasMobile,C as OffCanvasOrientationLeft,v as OffCanvasWithForm,u as WithController,g as WithForm,p as WithTrigger,cr as __namedExportsOrder,sr as default};
