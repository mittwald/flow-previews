import{j as r}from"./iframe-CB_IvR8I.js";import{B as e}from"./Button-B6pH5E7T.js";import{T as c}from"./Text-C_h1oOw9.js";import{T as d}from"./TextField-DT_zLHBn.js";import{L as u}from"./Label-DQjiInKi.js";import{C as m}from"./Content-DWHWqwEq.js";import{H as t}from"./Heading-5jxFfyfL.js";import{M as a,a as mr}from"./Modal-CCdKha4c.js";import{u as p}from"./DialogTriggerView-SiWvQg2j.js";import{A as l}from"./Action-DXrBr-ZU.js";import{A as i}from"./ActionGroup-BUPr_rwT.js";import{c as dr}from"./lib-D49wyM5X.js";import{u as F,F as T,a as S}from"./Form-DpTUUNrZ.js";import{S as O}from"./Section-ChgdckCA.js";import{A as ur}from"./Align-DjbXtJgh.js";import{C as pr}from"./ColumnLayout-6Jhkzuia.js";import{A as xr}from"./AccentBox-C2uSiKh2.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./IconWarning-DHvxn9zQ.js";import"./LoadingSpinner-B018WmYG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./context-CQpLcUPr.js";import"./Button-BNZImaSB.js";import"./utils-g_K47B_Q.js";import"./ProgressBar-DB_rXcaP.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DNzpHOuu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSSkfFZ6.js";import"./useFocus-B0PqsM1A.js";import"./useFocusRing-gt8SzE7T.js";import"./useFocusable-B2StGM5o.js";import"./browser-CyPw7Cgt.js";import"./EmulatedBoldText-B-vVao8K.js";import"./Text-B8w1c0_W.js";import"./TextFieldBase-Dw3h-uuj.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-COPLGoQY.js";import"./FieldError-7I8SRRkd.js";import"./FieldDescription-CzRSGrqM.js";import"./TextField-nXjEyJdg.js";import"./Form-BSDtEK6z.js";import"./Group-BtoN_DlS.js";import"./useTextField-Dvn-D0Cy.js";import"./useFormReset-DVL0Bkgs.js";import"./useControlledState-CS3WyH2d.js";import"./ReactAriaControlledValueFix-DdwC-f5X.js";import"./Heading-9QvowWck.js";import"./RSPContexts-PWzkBgmU.js";import"./dynamic-DKDa4OpU.js";import"./Overlay-dF9WQWt5.js";import"./Dialog-nVDPewl7.js";import"./OverlayArrow-01R9fjkr.js";import"./Collection-BYXnLO4u.js";import"./CollectionBuilder-opZAg4uy.js";import"./Separator-Bv7qspKp.js";import"./SearchField-CR8AG0pb.js";import"./useEvent--a1AA2TN.js";import"./SelectionManager-DyWAPqsT.js";import"./useCollator-3DG3Mrdl.js";import"./FocusScope-2f5e0YPn.js";import"./VisuallyHidden-D4WM3JvY.js";import"./ButtonView-BKH7_-Wq.js";import"./context-B4EC4nRx.js";import"./useStatic-y0oZYxL5.js";import"./getActionGroupSlot-Bj-rdEEm.js";import"./ContextMenuSection-CCIV1sJL.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,De={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(a,{...o,controller:p("Modal",{isDefaultOpen:!0}),children:[r.jsx(t,{children:"New Customer"}),r.jsx(m,{children:r.jsxs(O,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(u,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(l,{action:dr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},f={},j={render:o=>{const s=p("Modal",{onOpen:()=>L("onOpen")(),onClose:()=>L("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:s.open,children:"Create customer"}),r.jsxs(a,{...o,controller:s,children:[r.jsx(t,{children:"New Customer"}),r.jsxs(m,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(u,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},h={render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Delete project"}),r.jsx(m,{children:r.jsx(c,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},C={parameters:{viewport:{defaultViewport:"mobile1"}}},g={args:{offCanvas:!0}},v={args:{offCanvas:!0,offCanvasOrientation:"left"}},A={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},y={render:o=>{const s=F(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add Customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(u,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const s=F(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{offCanvas:!0,...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(u,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},B={render:o=>{const s=F(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(a,{...o,controller:n,children:[r.jsx(t,{children:"Add nameservers"}),r.jsx(m,{children:r.jsx(T,{form:s,onSubmit:()=>n.close(),children:r.jsxs(ur,{children:[r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(u,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}},M={args:{size:"l",offCanvas:!0},render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"accent",children:"Book tariff"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Book tariff"}),r.jsxs(pr,{children:[r.jsxs(O,{children:[r.jsx(t,{children:"Configuration"}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long})]}),r.jsx(xr,{children:r.jsxs(O,{children:[r.jsx(t,{level:4,children:"Overview"}),r.jsx(c,{children:x.medium})]})})]}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})};var w,H,P;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var G,D,W;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(W=(D=j.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var _,q,N;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(q=h.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var k,z,V;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(V=(z=C.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var E,I,R;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(R=(I=g.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var K,U,Y;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    offCanvas: true,
    offCanvasOrientation: "left"
  }
}`,...(Y=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,Q,X;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,rr;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(rr=($=y.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,or,nr;b.parameters={...b.parameters,docs:{...(er=b.parameters)==null?void 0:er.docs,source:{originalSource:`{
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
}`,...(nr=(or=b.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};var tr,sr,ar;B.parameters={...B.parameters,docs:{...(tr=B.parameters)==null?void 0:tr.docs,source:{originalSource:`{
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
}`,...(ar=(sr=B.parameters)==null?void 0:sr.docs)==null?void 0:ar.source}}};var lr,cr,ir;M.parameters={...M.parameters,docs:{...(lr=M.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    size: "l",
    offCanvas: true
  },
  render: props => {
    return <ModalTrigger>
        <Button color="accent">Book tariff</Button>

        <Modal {...props}>
          <Heading>Book tariff</Heading>

          <ColumnLayout>
            <Section>
              <Heading>Configuration</Heading>
              <Text>{dummyText.long}</Text>
              <Text>{dummyText.long}</Text>
              <Text>{dummyText.long}</Text>
            </Section>
            <AccentBox>
              <Section>
                <Heading level={4}>Overview</Heading>
                <Text>{dummyText.medium}</Text>
              </Section>
            </AccentBox>
          </ColumnLayout>

          <ActionGroup>
            <Button color="accent">Submit</Button>
            <Action closeOverlay="Modal">
              <Button variant="soft" color="secondary">
                Abort
              </Button>
            </Action>
          </ActionGroup>
        </Modal>
      </ModalTrigger>;
  }
}`,...(ir=(cr=M.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};const We=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside","LargeOffCanvas"];export{f as Default,M as LargeOffCanvas,C as Mobile,g as OffCanvas,A as OffCanvasMobile,v as OffCanvasOrientationLeft,b as OffCanvasWithForm,j as WithController,y as WithForm,B as WithFormInside,h as WithTrigger,We as __namedExportsOrder,De as default};
