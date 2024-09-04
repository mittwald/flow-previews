import{R as e}from"./index-Cs7sjTYM.js";import{B as r}from"./Button-B7deuCYz.js";import{T as A}from"./Text-DcJx5oEt.js";import{T as y}from"./TextField-DNZdQHAq.js";import{L as v}from"./Label-DgK2Pwx_.js";import{C as m}from"./Content-_3Xrs8nk.js";import{H as c}from"./Heading-CKRtCiYS.js";import{M as a,a as X}from"./ModalTrigger-D63ARdk0.js";import{u as b}from"./OverlayTrigger-6qdPerM9.js";import{A as l}from"./Action-CnE_Y1GL.js";import{A as s}from"./ActionGroup-ClD0tomU.js";import{c as Y}from"./lib-BicDjWDK.js";import{u as K,F as Q,a as U}from"./Form-CzxBrWkK.js";import{a as M}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./IconApp-jQj0ru9P.js";import"./flowComponent-DSJF3wQc.js";import"./index-BU4L-DQy.js";import"./IconWarning-Chlir0wc.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Ol9shMvM.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Button-B_pBO4HW.js";import"./utils-CgpzwoFP.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DdFCD-YN.js";import"./usePress-C9_maMb0.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";import"./TextFieldBase-DHEw97KH.js";import"./FormField.module-CAlv2JPD.js";import"./Form-DAtDAkn6.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./FieldDescription-BHxvwGR_.js";import"./Input-BPUwJsxH.js";import"./Label-BRZ8BO2K.js";import"./useTextField-8-06sg4o.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./Activity-CPnWONG0.js";import"./Heading-2-efPYe9.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-B9aGSeR2.js";import"./number-nHrFdSb-.js";import"./Header-B45ZFAiH.js";import"./FocusScope-jwB0dEBj.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-Bx6BLr_2.js";import"./context-mxc100gO.js";import"./useSelector-C41EylEs.js";import"./dynamic-DKDa4OpU.js";import"./v4-CQkTLCs1.js";const rr={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>e.createElement(a,{...o,controller:b("Modal",{isDefaultOpen:!0})},e.createElement(c,null,"New Customer"),e.createElement(m,null,e.createElement(A,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(v,null,"Customer name"))),e.createElement(s,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(l,{action:Y},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},i={},u={render:o=>{const n=b("Modal",{onOpen:()=>M("onOpen")(),onClose:()=>M("onClose")()});return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:n.open},"Create customer"),e.createElement(a,{...o,controller:n},e.createElement(c,null,"New Customer"),e.createElement(m,null,e.createElement(A,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(v,null,"Customer name"))),e.createElement(s,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},p={render:o=>e.createElement(X,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(a,{...o},e.createElement(c,null,"Delete project"),e.createElement(m,null,e.createElement(A,null,"Are you sure you want to delete this project?")),e.createElement(s,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},d={parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{offCanvas:!0}},C={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},E={render:o=>{const n=K(),t=b("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:t.open},"Add customer"),e.createElement(a,{...o,controller:t},e.createElement(Q,{form:n,onSubmit:()=>t.close()},e.createElement(c,null,"Add Customer"),e.createElement(m,null,e.createElement(U,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(v,null,"Customer name")))),e.createElement(s,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}},g={render:o=>{const n=K(),t=b("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:t.open},"Add customer"),e.createElement(a,{offCanvas:!0,...o,controller:t},e.createElement(Q,{form:n,onSubmit:()=>t.close()},e.createElement(c,null,"Add Customer"),e.createElement(m,null,e.createElement(U,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(v,null,"Customer name")))),e.createElement(s,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}};var F,B,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(O=(B=i.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var T,w,S;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(w=u.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var x,j,h;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(j=p.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var H,P,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var G,L,W;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(W=(L=f.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var q,V,N;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(N=(V=C.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var z,R,_;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(R=E.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var k,I,J;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(J=(I=g.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const or=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasMobile","WithForm","OffCanvasWithForm"];export{i as Default,d as Mobile,f as OffCanvas,C as OffCanvasMobile,g as OffCanvasWithForm,u as WithController,E as WithForm,p as WithTrigger,or as __namedExportsOrder,rr as default};
