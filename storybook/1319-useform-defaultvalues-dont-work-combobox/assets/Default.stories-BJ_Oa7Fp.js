import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import{B as e}from"./Button-CzD1-bVV.js";import{T as c}from"./Text-VF_oP7nB.js";import{T as d}from"./TextField-BQm-fS8O.js";import{L as p}from"./Label-C3GsNgl3.js";import{C as m}from"./Content-hpcy-Uta.js";import{H as t}from"./Heading-DkfS3F_u.js";import{M as a,a as mr}from"./Modal-6f1n-Ifm.js";import{u}from"./OverlayTrigger-CeSY8tTU.js";import{A as l}from"./Action-BzpotNjO.js";import{A as i}from"./ActionGroup-btqjAAND.js";import{c as dr}from"./lib-D1Yuh6Dt.js";import{u as F,F as T,a as S}from"./Form-DwbY1Vp2.js";import{a as w}from"./index-B-lxVbXh.js";import{S as O}from"./Section-B3bS0dJT.js";import{A as pr}from"./Align-C1nUgiIf.js";import{C as ur}from"./ColumnLayout-V6_UbH1_.js";import{A as xr}from"./AccentBox-mRCof9DO.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./IconApp-ZwiVKkvj.js";import"./IconWarning-5243rr5p.js";import"./LoadingSpinner-UHuKZSXM.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./Button-BGa7Lue7.js";import"./utils-D0CTRpvX.js";import"./ProgressBar-TBeTHm5P.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEYeyB88.js";import"./useFocus-HZduNndM.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-oMr6ueMZ.js";import"./TextFieldBase-BnnfD1a4.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BagpYpY1.js";import"./FieldError-DHw7a52T.js";import"./FieldDescription-DV5kfhzf.js";import"./Form-DrDCrztH.js";import"./Input-DIVKzZcg.js";import"./useTextField-CGlHkggm.js";import"./useFormReset-Dt6BcYvw.js";import"./useControlledState-BKUqB07S.js";import"./useFormValidation-CI5EZsou.js";import"./Heading-BzdgKMPb.js";import"./RSPContexts-8O1fXkhd.js";import"./DialogTriggerView--BsqquDh.js";import"./Overlay-8eWm40ps.js";import"./Dialog-Ds9EASAq.js";import"./OverlayArrow-Cidi8nN7.js";import"./Collection-mdal2UB1.js";import"./CollectionBuilder-Bzd5BBwK.js";import"./Separator-CJeFikfz.js";import"./useOverlayTriggerState-Zz3oHLvd.js";import"./SelectionManager-BAB-BMSj.js";import"./useEvent-BQK_0uZ_.js";import"./useCollator-B4aWBoUu.js";import"./FocusScope-Cx-5Cw_n.js";import"./VisuallyHidden-p5Z0Rn92.js";import"./Header-Czinm9Tb.js";import"./ButtonView-BPFRdH3s.js";import"./context-CTL7IXlD.js";import"./useStatic-6gmUMcuL.js";import"./getActionGroupSlot-OAZ-j8kn.js";import"./dynamic-DKDa4OpU.js";import"./v4-CtRu48qb.js";import"./ContextMenuSection-CKwYExBR.js";const Ve={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(a,{...o,controller:u("Modal",{isDefaultOpen:!0}),children:[r.jsx(t,{children:"New Customer"}),r.jsx(m,{children:r.jsxs(O,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(l,{action:dr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},f={},j={render:o=>{const s=u("Modal",{onOpen:()=>w("onOpen")(),onClose:()=>w("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:s.open,children:"Create customer"}),r.jsxs(a,{...o,controller:s,children:[r.jsx(t,{children:"New Customer"}),r.jsxs(m,{children:[r.jsx(c,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},h={render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Delete project"}),r.jsx(m,{children:r.jsx(c,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(l,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},C={parameters:{viewport:{defaultViewport:"mobile1"}}},g={args:{offCanvas:!0}},v={args:{offCanvas:!0,offCanvasOrientation:"left"}},A={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},y={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add Customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(a,{offCanvas:!0,...o,controller:n,children:r.jsxs(T,{form:s,onSubmit:()=>n.close(),children:[r.jsx(t,{children:"Add customer"}),r.jsx(m,{children:r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},B={render:o=>{const s=F(),n=u("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(a,{...o,controller:n,children:[r.jsx(t,{children:"Add nameservers"}),r.jsx(m,{children:r.jsx(T,{form:s,onSubmit:()=>n.close(),children:r.jsxs(pr,{children:[r.jsx(S,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(d,{children:r.jsx(p,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}},M={args:{size:"l",offCanvas:!0},render:o=>r.jsxs(mr,{children:[r.jsx(e,{color:"accent",children:"Book tariff"}),r.jsxs(a,{...o,children:[r.jsx(t,{children:"Book tariff"}),r.jsxs(ur,{children:[r.jsxs(O,{children:[r.jsx(t,{children:"Configuration"}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long}),r.jsx(c,{children:x.long})]}),r.jsx(xr,{children:r.jsxs(O,{children:[r.jsx(t,{level:4,children:"Overview"}),r.jsx(c,{children:x.medium})]})})]}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(l,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})};var H,L,P;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...(P=(L=f.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var G,W,D;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(ir=(cr=M.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};const Ee=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside","LargeOffCanvas"];export{f as Default,M as LargeOffCanvas,C as Mobile,g as OffCanvas,A as OffCanvasMobile,v as OffCanvasOrientationLeft,b as OffCanvasWithForm,j as WithController,y as WithForm,B as WithFormInside,h as WithTrigger,Ee as __namedExportsOrder,Ve as default};
