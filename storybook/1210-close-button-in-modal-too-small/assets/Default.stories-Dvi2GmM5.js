import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{B as o}from"./Button-C7laaEmM.js";import{T as b}from"./Text-D9M1FVhy.js";import{T as g}from"./TextField-DHtfMba1.js";import{L as v}from"./Label-BWLhaeSV.js";import{C as l}from"./Content-B9uXJDfZ.js";import{H as i}from"./Heading-BVIvgIlX.js";import{M as s,a as rr}from"./ModalTrigger-CTbJ2l6f.js";import{u as y}from"./MenuTrigger-CHUqx2dT.js";import{A as a}from"./Action-Dnj71fzz.js";import{A as c}from"./ActionGroup-cxfsNxpG.js";import{c as or}from"./lib-C4BjCCg_.js";import{u as Y,F as Z,a as $}from"./Form-FyO7oTZC.js";import{a as A}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{S as er}from"./Section-VaUdaP2P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./index-IBhSrjl6.js";import"./clsx-B-dksMZM.js";import"./IconApp-Bv3EfL7N.js";import"./flowComponent-BYduNA4_.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./IconWarning-BQfoWbD3.js";import"./LoadingSpinner-BSAtCngE.js";import"./Button-BBWo3kGM.js";import"./utils-CzVyYWZn.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./browser-B1A6F7LW.js";import"./Text-PTaPc_Ci.js";import"./TextFieldBase-CP6DLIGt.js";import"./FieldDescription-DWIAfkTb.js";import"./FormField.module-mFUPrda5.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Input-DaA3cxmW.js";import"./useTextField-uM6U_XJE.js";import"./useFormReset-CilIRCFg.js";import"./useControlledState-4nfZ-XMX.js";import"./Heading-BCoG4c8D.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayContent-dzOj_DcB.js";import"./Dialog-BV8uMRwe.js";import"./OverlayArrow-CByfAkhe.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./Header-B2nFIf1k.js";import"./ButtonView-C-eXUCdb.js";import"./DialogTriggerView-BBOWZO_U.js";import"./context-T6wCf2v9.js";import"./useStatic-79kqjvSG.js";import"./getActionGroupSlot-CjUGCB-i.js";import"./dynamic-DKDa4OpU.js";import"./v4-CtRu48qb.js";import"./ContextMenuSection-COnqG3mz.js";const bo={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:e=>r.jsxs(s,{...e,controller:y("Modal",{isDefaultOpen:!0}),children:[r.jsx(i,{children:"New Customer"}),r.jsx(l,{children:r.jsxs(er,{children:[r.jsx(b,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(g,{children:r.jsx(v,{children:"Customer name"})})]})}),r.jsx(c,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(a,{action:or,children:r.jsx(o,{color:"accent",children:"Create customer"})}),r.jsx(o,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},m={},d={render:e=>{const t=y("Modal",{onOpen:()=>A("onOpen")(),onClose:()=>A("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"primary",onPress:t.open,children:"Create customer"}),r.jsxs(s,{...e,controller:t,children:[r.jsx(i,{children:"New Customer"}),r.jsxs(l,{children:[r.jsx(b,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(g,{children:r.jsx(v,{children:"Customer name"})})]}),r.jsx(c,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(o,{color:"accent",children:"Create customer"}),r.jsx(o,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},p={render:e=>r.jsxs(rr,{children:[r.jsx(o,{color:"danger",children:"Delete project"}),r.jsxs(s,{...e,children:[r.jsx(i,{children:"Delete project"}),r.jsx(l,{children:r.jsx(b,{children:"Are you sure you want to delete this project?"})}),r.jsx(c,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(o,{color:"danger",children:"Delete project"}),r.jsx(o,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},u={parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{offCanvas:!0}},x={args:{offCanvas:!0,offCanvasOrientation:"left"}},j={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},C={render:e=>{const t=Y(),n=y("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{...e,controller:n,children:r.jsxs(Z,{form:t,onSubmit:()=>n.close(),children:[r.jsx(i,{children:"Add Customer"}),r.jsx(l,{children:r.jsx($,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(g,{children:r.jsx(v,{children:"Customer name"})})})}),r.jsxs(c,{children:[r.jsx(o,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(o,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},h={render:e=>{const t=Y(),n=y("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(o,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{offCanvas:!0,...e,controller:n,children:r.jsxs(Z,{form:t,onSubmit:()=>n.close(),children:[r.jsx(i,{children:"Add Customer"}),r.jsx(l,{children:r.jsx($,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(g,{children:r.jsx(v,{children:"Customer name"})})})}),r.jsxs(c,{children:[r.jsx(o,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(o,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}};var M,O,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var B,T,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
