import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./Button-YE2AeZeo.js";import{T as c}from"./Text-CzmRNsGj.js";import{T as d}from"./TextField-DUw9au-g.js";import{L as p}from"./Label-B9_Pxomy.js";import{C as m}from"./Content-BouiCLMi.js";import{H as t}from"./Heading-C18KV3rn.js";import{M as a,a as mr}from"./Modal-DKk7Q_OD.js";import{u}from"./OverlayTrigger-BEoseFxw.js";import{A as l}from"./Action-ch6EkoLR.js";import{A as i}from"./ActionGroup-D1pwhtyX.js";import{c as dr}from"./lib-Bmcl35N7.js";import{u as F,F as T,a as S}from"./Form-Bmj622V7.js";import{a as w}from"./index-B-lxVbXh.js";import{S as O}from"./Section-Beu_iW1K.js";import{A as pr}from"./Align-CM5PvrQF.js";import{C as ur}from"./ColumnLayout-CAMBxwED.js";import{A as xr}from"./AccentBox-Cr1RxMPh.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./index-BdpSHsi2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-iKmpBTwT.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-pwMmdtJm.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./IconWarning-CdPCc21P.js";import"./LoadingSpinner-CSp0VLdS.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./Button-0sHIpBCS.js";import"./utils-B2jHvTU8.js";import"./ProgressBar-D87xnYtB.js";import"./Label-DULpRqFS.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BTthEqzH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-J3t5Qa20.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-bCwBREBS.js";import"./TextFieldBase-DZjmDUfh.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Dug7l7c6.js";import"./FieldError-DsqxgZkx.js";import"./FieldDescription-B9nMPzCI.js";import"./TextField-4NekkW3z.js";import"./Form-D_RCBvUR.js";import"./Input-Cd7kiHog.js";import"./useTextField-CRJUdjbO.js";import"./useFormReset-dEmc_A_j.js";import"./useControlledState-B-V-WRDl.js";import"./useFormValidation-BVpaaUUN.js";import"./Heading-FTY3VzEi.js";import"./RSPContexts-Cbm9ZJUe.js";import"./DialogTriggerView-0kT0UIbR.js";import"./Overlay-CJQL_1EL.js";import"./Dialog-6hciMxaP.js";import"./OverlayArrow-BSrl9XNn.js";import"./Collection-DiFzyIMP.js";import"./CollectionBuilder-CBZ2qMwz.js";import"./Separator-C9CvzOtQ.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./useCollator-B6tK7UUT.js";import"./FocusScope-D-amBDVp.js";import"./VisuallyHidden-DvRlzb5d.js";import"./Header-CXRv_dnp.js";import"./ButtonView-BMz3kw7Z.js";import"./context-CxDuddNF.js";import"./useStatic-CDTc3QJC.js";import"./getActionGroupSlot-DqYce3-T.js";import"./dynamic-DKDa4OpU.js";import"./v4-CtRu48qb.js";import"./ContextMenuSection-ZwPB6YqR.js";const Ee={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(a,{...o,controller:u("Modal",{isDefaultOpen:!0}),children:[r.jsx(t,{children:"New Customer"}),r.jsx(m,{children:r.jsxs(O,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(l,{action:dr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},f={},j={render:o=>{const s=u("Modal",{onOpen:()=>w("onOpen")(),onClose:()=>w("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:s.open,children:"Create customer"}),r.jsxs(a,{...o,controller:s,children:[r.jsx(t,{children:"New Customer"}),r.jsxs(m,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},h={render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Delete project"}),r.jsx(m,{children:r.jsx(c,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},C={parameters:{viewport:{defaultViewport:"mobile1"}}},g={args:{offCanvas:!0}},v={args:{offCanvas:!0,offCanvasOrientation:"left"}},A={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},y={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add Customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{offCanvas:!0,...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},B={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(a,{...o,controller:n,children:[r.jsx(t,{children:"Add nameservers"}),r.jsx(m,{children:r.jsx(T,{form:s,onSubmit:()=>n.close(),children:r.jsxs(pr,{children:[r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}},M={args:{size:"l",offCanvas:!0},render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"accent",children:"Book tariff"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Book tariff"}),r.jsxs(ur,{children:[r.jsxs(O,{children:[r.jsx(t,{children:"Configuration"}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long})]}),r.jsx(xr,{children:r.jsxs(O,{children:[r.jsx(t,{level:4,children:"Overview"}),r.jsx(c,{children:x.medium})]})})]}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})};var H,L,P;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...(P=(L=f.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var G,W,D;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(D=(W=j.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var q,N,k;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(k=(N=h.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var z,V,E;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(E=(V=C.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var I,_,R;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    offCanvas: true,
    offCanvasOrientation: "left"
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ir=(cr=M.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};const Ie=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside","LargeOffCanvas"];export{f as Default,M as LargeOffCanvas,C as Mobile,g as OffCanvas,A as OffCanvasMobile,v as OffCanvasOrientationLeft,b as OffCanvasWithForm,j as WithController,y as WithForm,B as WithFormInside,h as WithTrigger,Ie as __namedExportsOrder,Ee as default};
