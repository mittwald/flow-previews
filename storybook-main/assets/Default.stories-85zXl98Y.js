import{j as r}from"./iframe--ZPVLz8g.js";import{B as e}from"./Button-ipeD2xQq.js";import{T as c}from"./Text-BWChA6Qp.js";import{T as d}from"./TextField--shl7M9A.js";import{L as u}from"./Label-CEhk5YLt.js";import{C as m}from"./Content-BT8CXfL9.js";import{H as t}from"./Heading-ChU8ySRU.js";import{M as a,a as mr}from"./Modal-DyTexPrA.js";import{u as p}from"./DialogTriggerView-CLfTDJ19.js";import{A as l}from"./Action-B8fzCGcN.js";import{A as i}from"./ActionGroup-lLniZOzG.js";import{c as dr}from"./lib-Ri7WdkhP.js";import{u as F,F as T,a as S}from"./Form-C4Q336nW.js";import{S as O}from"./Section-CuoJ4ODt.js";import{A as ur}from"./Align-AIgDUMip.js";import{C as pr}from"./ColumnLayout-DISukqyT.js";import{A as xr}from"./AccentBox-B6KCCdxE.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nWC3VOMj.js";import"./mergeRefs-VsgLfvv3.js";import"./index-CUxE1TYv.js";import"./IconWarning-4_E3WNTs.js";import"./LoadingSpinner-DOWHWybS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D8nOtH8X.js";import"./context-CYq-vfev.js";import"./Button-nXFtpqu6.js";import"./utils-CjuahFs2.js";import"./ProgressBar-C7iwaIvl.js";import"./Label-jWQ4-Gqi.js";import"./Hidden-F0y0p3A_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-rVnfHrLk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BT12SUT-.js";import"./useFocus-BI6mVvV1.js";import"./useFocusRing-CQfGGNBr.js";import"./useFocusable-CySdtwHN.js";import"./browser-D6_kvesK.js";import"./EmulatedBoldText-Qqp8fG5V.js";import"./Text-du_1NL-y.js";import"./TextFieldBase-Cn-O1K8l.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-D2ZL0CC8.js";import"./FieldError-jq5pvDUD.js";import"./FieldDescription-CeJeSW2L.js";import"./TextField-BusVcIbT.js";import"./Form-CzoyYLrP.js";import"./Group-CTVEw3FJ.js";import"./useTextField-DLQgkNBY.js";import"./useFormReset-B3ZybcNU.js";import"./useControlledState-CTCa-DaJ.js";import"./ReactAriaControlledValueFix-D0soGR-L.js";import"./Heading-CDhBsMWB.js";import"./RSPContexts-4UEDZgUk.js";import"./dynamic-DKDa4OpU.js";import"./Overlay-BSSku_cf.js";import"./Dialog-C5Xh-9_q.js";import"./OverlayArrow-BrvbOkZ-.js";import"./Collection-BOzi5_VH.js";import"./CollectionBuilder-BMRUZo1e.js";import"./Separator-BUnYRuL5.js";import"./SearchField-DDwMLnUN.js";import"./useEvent-Co8EjSPm.js";import"./SelectionManager-V388soIh.js";import"./useCollator-CfPt7Von.js";import"./FocusScope-C9FAKDVz.js";import"./VisuallyHidden-CbNFz2F0.js";import"./ButtonView-DHL-tWsL.js";import"./context-BCg0Ekp8.js";import"./useStatic-IQie-ZqP.js";import"./getActionGroupSlot-CF1hG1RQ.js";import"./ContextMenuSection-R5ibJYOc.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,De={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(a,{...o,controller:p("Modal",{isDefaultOpen:!0}),children:[r.jsx(t,{children:"New Customer"}),r.jsx(m,{children:r.jsxs(O,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(u,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(l,{action:dr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},f={},j={render:o=>{const s=p("Modal",{onOpen:()=>L("onOpen")(),onClose:()=>L("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:s.open,children:"Create customer"}),r.jsxs(a,{...o,controller:s,children:[r.jsx(t,{children:"New Customer"}),r.jsxs(m,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(u,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},h={render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Delete project"}),r.jsx(m,{children:r.jsx(c,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},C={parameters:{viewport:{defaultViewport:"mobile1"}}},g={args:{offCanvas:!0}},v={args:{offCanvas:!0,offCanvasOrientation:"left"}},A={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},y={render:o=>{const s=F(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add Customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(u,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const s=F(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{offCanvas:!0,...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(u,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},B={render:o=>{const s=F(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(a,{...o,controller:n,children:[r.jsx(t,{children:"Add nameservers"}),r.jsx(m,{children:r.jsx(T,{form:s,onSubmit:()=>n.close(),children:r.jsxs(ur,{children:[r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(u,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}},M={args:{size:"l",offCanvas:!0},render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"accent",children:"Book tariff"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Book tariff"}),r.jsxs(pr,{children:[r.jsxs(O,{children:[r.jsx(t,{children:"Configuration"}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long})]}),r.jsx(xr,{children:r.jsxs(O,{children:[r.jsx(t,{level:4,children:"Overview"}),r.jsx(c,{children:x.medium})]})})]}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})};var w,H,P;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var G,D,W;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
