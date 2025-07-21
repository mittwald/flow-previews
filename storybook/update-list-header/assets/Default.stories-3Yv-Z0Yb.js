import{j as r}from"./iframe-p6Bp2Ow-.js";import{B as e}from"./Button-BLeGlv8j.js";import{T as c}from"./Text-BtmxEKoY.js";import{T as d}from"./TextField-DwFPs3Wi.js";import{L as p}from"./Label-BhgKcmWm.js";import{C as m}from"./Content-BJKPjitb.js";import{H as t}from"./Heading-Cfc5zEsW.js";import{M as a,a as mr}from"./Modal-DAl7KhPy.js";import{u}from"./DialogTriggerView-DhZV5udn.js";import{A as l}from"./Action-A5AfYnIu.js";import{A as i}from"./ActionGroup-2L28pbmD.js";import{c as dr}from"./lib-B060dEVN.js";import{u as F,F as T,a as S}from"./Form-rEKVmEEP.js";import{S as O}from"./Section-6dzBO9Hh.js";import{A as pr}from"./Align-BGtcow09.js";import{C as ur}from"./ColumnLayout-Bpk8tkMB.js";import{A as xr}from"./AccentBox-BuOpSdso.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BTW_bpGX.js";import"./mergeRefs-BhA_prJr.js";import"./index-CjBL_wgX.js";import"./IconWarning-_xRihr7t.js";import"./LoadingSpinner-Aq6Gq52o.js";import"./useLocalizedStringFormatter-DIJ10SGn.js";import"./context-BreHr6W7.js";import"./Button-DuvBnjq7.js";import"./utils-CnAbB5du.js";import"./ProgressBar-NAttgbiM.js";import"./Label-zTn1BqTc.js";import"./Hidden-Bh_0QKLq.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Db1j6kak.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dx_e9Euk.js";import"./useFocus-DgSV50G0.js";import"./useFocusRing-BMw7ZmRN.js";import"./useFocusable-B_o37Ayh.js";import"./browser-B4AtpSGe.js";import"./EmulatedBoldText-DJP3uLZJ.js";import"./Text-Cx3sBrCD.js";import"./TextFieldBase-CStm2Qnu.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CUHeG-Uy.js";import"./FieldError-Drz17t_W.js";import"./FieldDescription-a6PsZscf.js";import"./TextField-D4rInykg.js";import"./Form-JnaaWtcr.js";import"./Input-CreDFhOd.js";import"./useTextField-B_B9v3Ja.js";import"./useFormReset-BpxJN7m8.js";import"./useControlledState-rcKaJ30A.js";import"./ReactAriaControlledValueFix-Bp0gUIy8.js";import"./Heading-ietWoT3o.js";import"./RSPContexts-D2-zMuP7.js";import"./Overlay-BWQk9dbF.js";import"./Dialog-_gMyH4Hj.js";import"./OverlayArrow-jZ3LH-Hh.js";import"./Collection-BslN4fmG.js";import"./CollectionBuilder-0vjbF6vR.js";import"./Separator--jTylhFG.js";import"./SearchField-Djq6QHUL.js";import"./Group-U4W79Xdy.js";import"./SelectionManager-D33tAYjc.js";import"./useEvent-yXH8ok0I.js";import"./useCollator-DwKmC7HY.js";import"./FocusScope-U7qUa4av.js";import"./VisuallyHidden-DLIZ8dPS.js";import"./Header-ButA05Zw.js";import"./ButtonView-re4rscF4.js";import"./context-B70X11Ud.js";import"./useStatic-3gyrNX_Q.js";import"./getActionGroupSlot-BY1hyZob.js";import"./dynamic-DKDa4OpU.js";import"./ContextMenuSection-CDQ5retU.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,_e={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(a,{...o,controller:u("Modal",{isDefaultOpen:!0}),children:[r.jsx(t,{children:"New Customer"}),r.jsx(m,{children:r.jsxs(O,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(l,{action:dr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},f={},j={render:o=>{const s=u("Modal",{onOpen:()=>L("onOpen")(),onClose:()=>L("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:s.open,children:"Create customer"}),r.jsxs(a,{...o,controller:s,children:[r.jsx(t,{children:"New Customer"}),r.jsxs(m,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},h={render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Delete project"}),r.jsx(m,{children:r.jsx(c,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},C={parameters:{viewport:{defaultViewport:"mobile1"}}},g={args:{offCanvas:!0}},v={args:{offCanvas:!0,offCanvasOrientation:"left"}},A={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},y={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add Customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{offCanvas:!0,...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},B={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(a,{...o,controller:n,children:[r.jsx(t,{children:"Add nameservers"}),r.jsx(m,{children:r.jsx(T,{form:s,onSubmit:()=>n.close(),children:r.jsxs(pr,{children:[r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}},M={args:{size:"l",offCanvas:!0},render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"accent",children:"Book tariff"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Book tariff"}),r.jsxs(ur,{children:[r.jsxs(O,{children:[r.jsx(t,{children:"Configuration"}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long})]}),r.jsx(xr,{children:r.jsxs(O,{children:[r.jsx(t,{level:4,children:"Overview"}),r.jsx(c,{children:x.medium})]})})]}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})};var w,H,P;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var G,D,W;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(ir=(cr=M.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};const qe=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside","LargeOffCanvas"];export{f as Default,M as LargeOffCanvas,C as Mobile,g as OffCanvas,A as OffCanvasMobile,v as OffCanvasOrientationLeft,b as OffCanvasWithForm,j as WithController,y as WithForm,B as WithFormInside,h as WithTrigger,qe as __namedExportsOrder,_e as default};
