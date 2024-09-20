import{R as e}from"./index-Cs7sjTYM.js";import{B as r}from"./Button-D9bhsRGO.js";import{T as M}from"./Text-OA-i8KWP.js";import{T as y}from"./TextField-ju1IkFOZ.js";import{L as b}from"./Label-CkNEJYRB.js";import{C as m}from"./Content-DCYQwudB.js";import{H as s}from"./Heading-yDKHFW2e.js";import{M as a,a as ee}from"./ModalTrigger-DGzznofp.js";import{u as A}from"./OverlayTrigger-DD33fYz0.js";import{A as l}from"./Action-DLPAjbQp.js";import{A as c}from"./ActionGroup-Bn5ipvDu.js";import{c as re}from"./lib-szFvplng.js";import{u as Y,F as Z,a as $}from"./Form-N2b4JZnO.js";import{a as O}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./IconApp-C8WE169t.js";import"./flowComponent-CvwRENnB.js";import"./index-BU4L-DQy.js";import"./IconWarning-N6qlzk8A.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DZbbkHo4.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Button-B_pBO4HW.js";import"./utils-CgpzwoFP.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DdFCD-YN.js";import"./usePress-C9_maMb0.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";import"./TextFieldBase-8nLZQxai.js";import"./FormField.module-Dg6pWKpN.js";import"./Form-DAtDAkn6.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./FieldDescription-wuh1vDL7.js";import"./Input-BPUwJsxH.js";import"./Label-BRZ8BO2K.js";import"./useTextField-8-06sg4o.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./Activity-CPnWONG0.js";import"./Heading-2-efPYe9.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-B9aGSeR2.js";import"./number-nHrFdSb-.js";import"./Header-DnS09Zjd.js";import"./FocusScope-jwB0dEBj.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-Bx6BLr_2.js";import"./context-CXlEaGVI.js";import"./useSelector-CJePwlsu.js";import"./dynamic-DKDa4OpU.js";import"./v4-CQkTLCs1.js";const ar={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:t=>e.createElement(a,{...t,controller:A("Modal",{isDefaultOpen:!0})},e.createElement(s,null,"New Customer"),e.createElement(m,null,e.createElement(M,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(b,null,"Customer name"))),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(l,{action:re},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},i={},u={render:t=>{const n=A("Modal",{onOpen:()=>O("onOpen")(),onClose:()=>O("onClose")()});return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:n.open},"Create customer"),e.createElement(a,{...t,controller:n},e.createElement(s,null,"New Customer"),e.createElement(m,null,e.createElement(M,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(b,null,"Customer name"))),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},p={render:t=>e.createElement(ee,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(a,{...t},e.createElement(s,null,"Delete project"),e.createElement(m,null,e.createElement(M,null,"Are you sure you want to delete this project?")),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},d={parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{offCanvas:!0}},C={args:{offCanvas:!0,offCanvasOrientation:"left"}},E={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},g={render:t=>{const n=Y(),o=A("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:o.open},"Add customer"),e.createElement(a,{...t,controller:o},e.createElement(Z,{form:n,onSubmit:()=>o.close()},e.createElement(s,null,"Add Customer"),e.createElement(m,null,e.createElement($,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(b,null,"Customer name")))),e.createElement(c,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}},v={render:t=>{const n=Y(),o=A("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:o.open},"Add customer"),e.createElement(a,{offCanvas:!0,...t,controller:o},e.createElement(Z,{form:n,onSubmit:()=>o.close()},e.createElement(s,null,"Add Customer"),e.createElement(m,null,e.createElement($,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(b,null,"Customer name")))),e.createElement(c,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}};var F,B,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var S,w,x;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const lr=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm"];export{i as Default,d as Mobile,f as OffCanvas,E as OffCanvasMobile,C as OffCanvasOrientationLeft,v as OffCanvasWithForm,u as WithController,g as WithForm,p as WithTrigger,lr as __namedExportsOrder,ar as default};
