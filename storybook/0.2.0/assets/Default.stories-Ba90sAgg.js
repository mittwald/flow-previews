import{j as r}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{B as o}from"./Button-BV02oueB.js";import{T as b}from"./Text-DWihI4Ms.js";import{T as g}from"./TextField-Cw5n4ckL.js";import{L as v}from"./Label-CysJgzvk.js";import{C as l}from"./Content-D-_uD6v5.js";import{H as i}from"./Heading-BBJR5mQq.js";import{M as s,a as rr}from"./ModalTrigger-DfhSY9uH.js";import{u as y}from"./OverlayTrigger-BcgVlnqK.js";import{A as a}from"./Action-Dl4Zo7Nk.js";import{A as c}from"./ActionGroup-o0X2mAog.js";import{c as or}from"./lib-CwblNVKJ.js";import{u as Y,F as Z,a as $}from"./Form-BZtgIH6n.js";import{a as A}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{S as er}from"./Section-BjFQa9Gt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./IconApp--3KTiVI4.js";import"./flowComponent-CGvK_9lq.js";import"./index-Y1p7vO9S.js";import"./index-ByctJgwf.js";import"./IconWarning-FtXT-ZGp.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BJ3acLU2.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Button-TFgGWmnA.js";import"./utils-DbIpkr2E.js";import"./ProgressBar-Bu1Xugb0.js";import"./Label-wrbsGWF5.js";import"./Hidden-le53pkqW.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CJ8wXOex.js";import"./useFocusRing-BUEgee7k.js";import"./usePress-CheaiuQC.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Text-DUOeOfAn.js";import"./TextFieldBase-B9-rvDF7.js";import"./FieldError-emy1jJyU.js";import"./FieldError-Di-56-XY.js";import"./FieldDescription-b8iFIwo0.js";import"./Form-D-sIjvit.js";import"./Input-Cw-yF1VB.js";import"./useTextField-B6NJKPbp.js";import"./useFormReset-SCbFK273.js";import"./useControlledState-19OAjgUP.js";import"./Heading-TsowwGP7.js";import"./RSPContexts-BG_vMng8.js";import"./Overlay-J6UnWnD7.js";import"./Dialog-DtCnPnDw.js";import"./OverlayArrow-C189HunQ.js";import"./Collection-B01CSX5r.js";import"./CollectionBuilder-bECbC7Nm.js";import"./Separator-CAFr1tdS.js";import"./SelectionManager-T3qadk1f.js";import"./FocusScope-CBujmq_y.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-rt50tWWG.js";import"./VisuallyHidden-CFrJCYb7.js";import"./Header-6Qs4kzVW.js";import"./context-DuD98iKb.js";import"./useSelector-CRM3rZ6U.js";import"./getActionGroupSlot-BgdDmpj6.js";import"./dynamic-DKDa4OpU.js";import"./v4-CtRu48qb.js";import"./ContextMenuSection-DJUCdmQz.js";const bo={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:e=>r.jsxs(s,{...e,controller:y("Modal",{isDefaultOpen:!0}),children:[r.jsx(i,{children:"New Customer"}),r.jsx(l,{children:r.jsxs(er,{children:[r.jsx(b,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(g,{children:r.jsx(v,{children:"Customer name"})})]})}),r.jsx(c,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(a,{action:or,children:r.jsx(o,{color:"accent",children:"Create customer"})}),r.jsx(o,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},m={},d={render:e=>{const t=y("Modal",{onOpen:()=>A("onOpen")(),onClose:()=>A("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"primary",onPress:t.open,children:"Create customer"}),r.jsxs(s,{...e,controller:t,children:[r.jsx(i,{children:"New Customer"}),r.jsxs(l,{children:[r.jsx(b,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(g,{children:r.jsx(v,{children:"Customer name"})})]}),r.jsx(c,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(o,{color:"accent",children:"Create customer"}),r.jsx(o,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},p={render:e=>r.jsxs(rr,{children:[r.jsx(o,{color:"danger",children:"Delete project"}),r.jsxs(s,{...e,children:[r.jsx(i,{children:"Delete project"}),r.jsx(l,{children:r.jsx(b,{children:"Are you sure you want to delete this project?"})}),r.jsx(c,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(o,{color:"danger",children:"Delete project"}),r.jsx(o,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},u={parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{offCanvas:!0}},x={args:{offCanvas:!0,offCanvasOrientation:"left"}},j={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},C={render:e=>{const t=Y(),n=y("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{...e,controller:n,children:r.jsxs(Z,{form:t,onSubmit:()=>n.close(),children:[r.jsx(i,{children:"Add Customer"}),r.jsx(l,{children:r.jsx($,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(g,{children:r.jsx(v,{children:"Customer name"})})})}),r.jsxs(c,{children:[r.jsx(o,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(o,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},h={render:e=>{const t=Y(),n=y("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{offCanvas:!0,...e,controller:n,children:r.jsxs(Z,{form:t,onSubmit:()=>n.close(),children:[r.jsx(i,{children:"Add Customer"}),r.jsx(l,{children:r.jsx($,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(g,{children:r.jsx(v,{children:"Customer name"})})})}),r.jsxs(c,{children:[r.jsx(o,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(o,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}};var M,O,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var B,T,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var w,L,H;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(L=p.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var P,D,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(G=(D=u.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var W,q,V;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(V=(q=f.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var N,z,E;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    offCanvas: true,
    offCanvasOrientation: "left"
  }
}`,...(E=(z=x.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var _,R,k;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(k=(R=j.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var I,J,K;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Ao=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm"];export{m as Default,u as Mobile,f as OffCanvas,j as OffCanvasMobile,x as OffCanvasOrientationLeft,h as OffCanvasWithForm,d as WithController,C as WithForm,p as WithTrigger,Ao as __namedExportsOrder,bo as default};
