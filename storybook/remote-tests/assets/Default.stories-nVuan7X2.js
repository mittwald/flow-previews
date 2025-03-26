import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import{B as e}from"./Button-y_xQsClG.js";import{T as y}from"./Text-BoP-iRG5.js";import{T as m}from"./TextField-CIFNdeyI.js";import{L as d}from"./Label-Ci6hAk30.js";import{C as l}from"./Content-Dp0Tjigt.js";import{H as c}from"./Heading-tfuBRgBf.js";import{M as s,a as tr}from"./Modal-CuC9jL8n.js";import{u as p}from"./OverlayTrigger-wtZR0Cj_.js";import{A as a}from"./Action-i0thx0q2.js";import{A as i}from"./ActionGroup-CNOdpYTp.js";import{c as sr}from"./lib-C3kKdXGg.js";import{u as M,F,a as O}from"./Form-DpYkGN_O.js";import{a as B}from"./index-B-lxVbXh.js";import{S as ar}from"./Section-BC96zk_3.js";import{A as lr}from"./Align-Zbmd0zlk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./IconApp-DtTJ2r0A.js";import"./IconWarning-BwSZGWRf.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DbRP1bJP.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./Button-DL5r24IA.js";import"./utils-DDUQIigj.js";import"./ProgressBar-C4A5wsjg.js";import"./Label-i7acEou4.js";import"./Hidden-6cPdUftz.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DAPKuvGY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CK926LJU.js";import"./useFocus-DNP1_3BC.js";import"./useFocusRing-BfJpuzZz.js";import"./useFocusable-DFPniEHk.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-By-RYQJw.js";import"./Text-yNWxiVQR.js";import"./TextFieldBase-DzXGJ7nw.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BpzgSl-I.js";import"./FieldError-Cj9Fprf0.js";import"./FieldDescription-0TSCGh7i.js";import"./Form-hD-YL6KK.js";import"./Input-RYKDaaJa.js";import"./useTextField-D72aunu8.js";import"./useFormReset-Cvvd9M-x.js";import"./useControlledState-Cu5tmcxR.js";import"./useFormValidation-Dyo9Ifhv.js";import"./Heading-BGdWAVxG.js";import"./RSPContexts-BTRAHvSh.js";import"./DialogTriggerView-BBAvKYPc.js";import"./Overlay-CtoHAtfF.js";import"./Dialog-6iLCfCA_.js";import"./OverlayArrow-BL-OvAHI.js";import"./Collection-CQq09VNS.js";import"./CollectionBuilder-R_fDQQgL.js";import"./Separator-BUgKPSk1.js";import"./SelectionManager-B8z5pZap.js";import"./useEvent-C5s-DRkH.js";import"./useCollator-BnjbLxAL.js";import"./FocusScope-DxW0A0A2.js";import"./VisuallyHidden-Dk-02uN1.js";import"./Header-BJ8AGauZ.js";import"./ButtonView-CXnuD52B.js";import"./context-DBHSqzRK.js";import"./useStatic--5L2q-n6.js";import"./getActionGroupSlot-DrfnkDvY.js";import"./dynamic-DKDa4OpU.js";import"./v4-CtRu48qb.js";import"./ContextMenuSection-CPhM0sZK.js";const Pe={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(s,{...o,controller:p("Modal",{isDefaultOpen:!0}),children:[r.jsx(c,{children:"New Customer"}),r.jsx(l,{children:r.jsxs(ar,{children:[r.jsx(y,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(a,{action:sr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},u={},x={render:o=>{const t=p("Modal",{onOpen:()=>B("onOpen")(),onClose:()=>B("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:t.open,children:"Create customer"}),r.jsxs(s,{...o,controller:t,children:[r.jsx(c,{children:"New Customer"}),r.jsxs(l,{children:[r.jsx(y,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},f={render:o=>r.jsxs(tr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(s,{...o,children:[r.jsx(c,{children:"Delete project"}),r.jsx(l,{children:r.jsx(y,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},j={parameters:{viewport:{defaultViewport:"mobile1"}}},h={args:{offCanvas:!0}},C={args:{offCanvas:!0,offCanvasOrientation:"left"}},g={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},v={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{...o,controller:n,children:r.jsxs(F,{form:t,onSubmit:()=>n.close(),children:[r.jsx(c,{children:"Add Customer"}),r.jsx(l,{children:r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},A={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{offCanvas:!0,...o,controller:n,children:r.jsxs(F,{form:t,onSubmit:()=>n.close(),children:[r.jsx(c,{children:"Add customer"}),r.jsx(l,{children:r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(s,{...o,controller:n,children:[r.jsx(c,{children:"Add nameservers"}),r.jsx(l,{children:r.jsx(F,{form:t,onSubmit:()=>n.close(),children:r.jsxs(lr,{children:[r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}};var S,T,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var P,L,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(L=x.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var G,W,D;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(D=(W=f.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var q,N,V;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(V=(N=j.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var z,E,I;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(I=(E=h.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var _,R,k;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    offCanvas: true,
    offCanvasOrientation: "left"
  }
}`,...(k=(R=C.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
            <Heading>Add customer</Heading>
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
}`,...(rr=($=A.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,or,nr;b.parameters={...b.parameters,docs:{...(er=b.parameters)==null?void 0:er.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      name: string;
    }>();
    const modalController = useOverlayController("Modal");
    return <>
        <Button color="accent" onPress={modalController.open}>
          Add nameservers
        </Button>

        <Modal {...props} controller={modalController}>
          <Heading>Add nameservers</Heading>
          <Content>
            <Form form={form} onSubmit={() => modalController.close()}>
              <Align>
                <Field name="name" rules={{
                required: "Please enter a name"
              }}>
                  <TextField>
                    <Label>Nameservers</Label>
                  </TextField>
                </Field>
                <Button type="submit">Add</Button>
              </Align>
            </Form>
          </Content>
          <ActionGroup>
            <Button color="accent">Submit</Button>
            <Action closeOverlay="Modal">
              <Button variant="soft" color="secondary">
                Abort
              </Button>
            </Action>
          </ActionGroup>
        </Modal>
      </>;
  }
}`,...(nr=(or=b.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};const Le=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside"];export{u as Default,j as Mobile,h as OffCanvas,g as OffCanvasMobile,C as OffCanvasOrientationLeft,A as OffCanvasWithForm,x as WithController,v as WithForm,b as WithFormInside,f as WithTrigger,Le as __namedExportsOrder,Pe as default};
