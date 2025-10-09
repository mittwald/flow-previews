import{j as e}from"./iframe-C72LIGrp.js";import{B as r}from"./Button-Dmf_fI6U.js";import{T as t}from"./Text-CvlnZLd7.js";import{T as u}from"./TextField-Cx75r7Px.js";import{L as d}from"./Label-BuGN1EiA.js";import{C as a}from"./Content-CmhQgHK-.js";import{H as o}from"./Heading-CQTj2TvE.js";import{M as i,a as M}from"./Modal-BS_LB8GF.js";import{u as x}from"./useOverlayController-Bq6Nzlwb.js";import{A as l}from"./Action-BbbbpS8d.js";import{A as m}from"./ActionGroup-BgMPlWay.js";import{c as fe}from"./lib-DseYjQel.js";import{u as O,F as P,a as w}from"./Form-BrAeY_1h.js";import{S as p}from"./Section-CMWdy8sM.js";import{A as Ce}from"./Align-D8HQ4IBk.js";import{C as je}from"./ColumnLayout-CJcwC2YA.js";import{A as ge}from"./AccentBox-CK4bsL2l.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import{R as ve,a as H}from"./RadioButton-CJKkc6OB.js";import{D as Ae}from"./DatePicker-Bim4xXA1.js";import{F as Te}from"./FieldDescription-Ch1dZGOn.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./index-D1phmMZw.js";import"./IconWarning-DoRUMKye.js";import"./LoadingSpinner-_EHg-BbH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./context-BWimVEWy.js";import"./Button-BS54933W.js";import"./utils-Day1TTYQ.js";import"./ProgressBar-BXSV1RNz.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CqQxVakl.js";import"./useFocus-B4vRNHSZ.js";import"./useFocusRing-DuRh0iim.js";import"./useFocusable-Dej5ci1L.js";import"./browser-Bf0-GHuQ.js";import"./EmulatedBoldText-CkSYZpi_.js";import"./Text-_4m1t08i.js";import"./TextFieldBase-C6C3GzH_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-D1AwEDR1.js";import"./FieldError-DSjxrI1_.js";import"./TextField-CzyfmXJa.js";import"./context-yrxx87JI.js";import"./Form-BHgRaZ3j.js";import"./Group-BK-2drbg.js";import"./Input-Dda4VuA-.js";import"./useTextField-BTvozyhw.js";import"./useFormReset-Bg8mSl5k.js";import"./useControlledState-BbMqle0_.js";import"./useFormValidation-wW6D6XQK.js";import"./ReactAriaControlledValueFix-B91Z4yvN.js";import"./Heading-BNkuiER5.js";import"./RSPContexts-CxFI_fU2.js";import"./OverlayTrigger-FJ2Pyz9u.js";import"./Dialog-DSx4rsSv.js";import"./OverlayArrow-CdAhbmJ_.js";import"./Collection-CdRuOc0_.js";import"./CollectionBuilder-CIcvBtxV.js";import"./Separator-B7O3kRSm.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./useCollator-BOhm7rcx.js";import"./FocusScope-CCmAn32n.js";import"./VisuallyHidden-BStPS_vY.js";import"./ControlledNotification-DkB8_49S.js";import"./context-BXphONxA.js";import"./useStatic-DPVFgY8A.js";import"./OverlayContextProvider-C5iPb09x.js";import"./DialogTriggerView-ikS86VIU.js";import"./dynamic-M8RwUexW.js";import"./Overlay-Bi_cYiLQ.js";import"./ClearPropsContextView-DQBdf73E.js";import"./ButtonView-b3o-zoCr.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./ContextMenuSection-DZErrfjN.js";import"./useMakeFocusable-cMpHNIXZ.js";import"./RadioGroup-D4GL3jWT.js";import"./DateField-BG8zzrQ6.js";import"./useSpinButton-Bk9dYK_C.js";import"./useFilter-DK95WFqd.js";import"./Popover-D3GlmI5m.js";import"./RangeCalendar-DvHvhQEE.js";import"./useUpdateEffect-CzQpd6AQ.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,ln={title:"Overlays/Modal",component:i,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:n=>e.jsxs(i,{...n,controller:x("Modal",{isDefaultOpen:!0}),children:[e.jsx(o,{children:"New Customer"}),e.jsx(a,{children:e.jsxs(p,{children:[e.jsx(t,{children:"Create a new customer to manage your projects, members and payments."}),e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})]})}),e.jsx(m,{children:e.jsxs(l,{closeOverlay:"Modal",children:[e.jsx(l,{action:fe,children:e.jsx(r,{color:"accent",children:"Create customer"})}),e.jsx(r,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},j={},f={render:n=>{const c=x("Modal",{onOpen:()=>L("onOpen")(),onClose:()=>L("onClose")()});return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"primary",onPress:c.open,children:"Create customer"}),e.jsxs(i,{...n,controller:c,children:[e.jsx(o,{children:"New Customer"}),e.jsxs(a,{children:[e.jsx(t,{children:"Create a new customer to manage your projects, members and payments."}),e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})]}),e.jsx(m,{children:e.jsxs(l,{closeOverlay:"Modal",children:[e.jsx(r,{color:"accent",children:"Create customer"}),e.jsx(r,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},C={render:n=>e.jsxs(M,{children:[e.jsx(r,{color:"danger",children:"Delete project"}),e.jsxs(i,{...n,children:[e.jsx(o,{children:"Delete project"}),e.jsx(a,{children:e.jsx(t,{children:"Are you sure you want to delete this project?"})}),e.jsx(m,{children:e.jsxs(l,{closeOverlay:"Modal",children:[e.jsx(r,{color:"danger",children:"Delete project"}),e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},g={parameters:{viewport:{defaultViewport:"mobile1"}}},v={args:{offCanvas:!0}},A={args:{offCanvas:!0,offCanvasOrientation:"left"}},T={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},y={render:n=>{const c=O(),s=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"accent",onPress:s.open,children:"Add customer"}),e.jsx(i,{...n,controller:s,children:e.jsxs(P,{form:c,onSubmit:()=>s.close(),children:[e.jsx(o,{children:"Add Customer"}),e.jsx(a,{children:e.jsx(w,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})})}),e.jsxs(m,{children:[e.jsx(r,{type:"submit",color:"accent",children:"Submit"}),e.jsx(l,{closeOverlay:"Modal",children:e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},S={render:n=>{const c=O(),s=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"accent",onPress:s.open,children:"Add customer"}),e.jsx(i,{offCanvas:!0,...n,controller:s,children:e.jsxs(P,{form:c,onSubmit:()=>s.close(),children:[e.jsx(o,{children:"Add customer"}),e.jsx(a,{children:e.jsx(w,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})})}),e.jsxs(m,{children:[e.jsx(r,{type:"submit",color:"accent",children:"Submit"}),e.jsx(l,{closeOverlay:"Modal",children:e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},F={render:n=>{const c=O(),s=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"accent",onPress:s.open,children:"Add nameservers"}),e.jsxs(i,{...n,controller:s,children:[e.jsx(o,{children:"Add nameservers"}),e.jsx(a,{children:e.jsx(P,{form:c,onSubmit:()=>s.close(),children:e.jsxs(Ce,{children:[e.jsx(w,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Nameservers"})})}),e.jsx(r,{type:"submit",children:"Add"})]})})}),e.jsxs(m,{children:[e.jsx(r,{color:"accent",children:"Submit"}),e.jsx(l,{closeOverlay:"Modal",children:e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}},b={args:{size:"l",offCanvas:!0},render:n=>e.jsxs(M,{children:[e.jsx(r,{color:"accent",children:"Book tariff"}),e.jsxs(i,{...n,children:[e.jsx(o,{children:"Book tariff"}),e.jsxs(je,{children:[e.jsxs(p,{children:[e.jsx(o,{children:"Configuration"}),e.jsx(t,{children:h.long}),e.jsx(t,{children:h.long}),e.jsx(t,{children:h.long})]}),e.jsx(ge,{children:e.jsxs(p,{children:[e.jsx(o,{level:4,children:"Overview"}),e.jsx(t,{children:h.medium})]})})]}),e.jsxs(m,{children:[e.jsx(r,{color:"accent",children:"Submit"}),e.jsx(l,{closeOverlay:"Modal",children:e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})},B={args:{size:"l",offCanvas:!0},render:n=>e.jsxs(M,{...n,children:[e.jsx(r,{children:"Add SFTP user"}),e.jsxs(i,{size:"m",offCanvas:!0,children:[e.jsx(o,{children:"Add SFTP user"}),e.jsxs(a,{children:[e.jsxs(p,{children:[e.jsx(o,{children:"Description"}),e.jsx(t,{children:"An SFTP user allows you to connect to your project, for example to upload files."}),e.jsxs(je,{m:[1,1],children:[e.jsx(u,{isRequired:!0,children:e.jsx(d,{children:"Name"})}),e.jsxs(Ae,{children:[e.jsx(d,{children:"Expiration Date"}),e.jsx(Te,{children:"After this date, the SFTP user will be deleted."})]})]})]}),e.jsxs(p,{children:[e.jsx(o,{children:"Permissions"}),e.jsx(t,{children:"Select the permissions the SFTP user should have."}),e.jsxs(ve,{s:[1,1],defaultValue:"read&write",children:[e.jsxs(H,{value:"write",children:[e.jsx(t,{children:"Read Access"}),e.jsx(a,{children:"The SFTP user can view and download files."})]}),e.jsxs(H,{value:"read&write",children:[e.jsx(t,{children:"Read and Write Access"}),e.jsx(a,{children:"The SFTP user can view, edit, upload, and download files."})]})]})]}),e.jsxs(p,{children:[e.jsx(o,{children:"Directory Selection"}),e.jsx(t,{children:"Specify the directory the SFTP user should have access to."}),e.jsx(u,{isRequired:!0,children:e.jsx(d,{children:"Path"})})]})]}),e.jsx(m,{children:e.jsxs(l,{closeOverlay:"Modal",children:[e.jsx(r,{color:"accent",children:"Create SFTP User"}),e.jsx(r,{variant:"soft",color:"secondary",children:"Cancel"})]})})]})]})};var D,R,G;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(G=(R=j.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var W,q,z;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(q=f.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var N,_,k;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(_=C.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var V,E,I;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var U,K,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var J,Q,X;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    offCanvas: true,
    offCanvasOrientation: "left"
  }
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(ee=($=T.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,se,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,le,ce;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=F.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,xe,he;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    size: "l",
    offCanvas: true
  },
  render: props => {
    return <ModalTrigger {...props}>
        <Button>Add SFTP user</Button>
        <Modal size="m" offCanvas>
          <Heading>Add SFTP user</Heading>
          <Content>
            <Section>
              <Heading>Description</Heading>
              <Text>
                An SFTP user allows you to connect to your project, for example
                to upload files.
              </Text>
              <ColumnLayout m={[1, 1]}>
                <TextField isRequired>
                  <Label>Name</Label>
                </TextField>
                <DatePicker>
                  <Label>Expiration Date</Label>
                  <FieldDescription>
                    After this date, the SFTP user will be deleted.
                  </FieldDescription>
                </DatePicker>
              </ColumnLayout>
            </Section>
            <Section>
              <Heading>Permissions</Heading>
              <Text>Select the permissions the SFTP user should have.</Text>
              <RadioGroup s={[1, 1]} defaultValue="read&write">
                <RadioButton value="write">
                  <Text>Read Access</Text>
                  <Content>The SFTP user can view and download files.</Content>
                </RadioButton>
                <RadioButton value="read&write">
                  <Text>Read and Write Access</Text>
                  <Content>
                    The SFTP user can view, edit, upload, and download files.
                  </Content>
                </RadioButton>
              </RadioGroup>
            </Section>
            <Section>
              <Heading>Directory Selection</Heading>
              <Text>
                Specify the directory the SFTP user should have access to.
              </Text>
              <TextField isRequired>
                <Label>Path</Label>
              </TextField>
            </Section>
          </Content>
          <ActionGroup>
            <Action closeOverlay="Modal">
              <Button color="accent">Create SFTP User</Button>
              <Button variant="soft" color="secondary">
                Cancel
              </Button>
            </Action>
          </ActionGroup>
        </Modal>
      </ModalTrigger>;
  }
}`,...(he=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};const cn=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside","LargeOffCanvas","WithSubHeadings"];export{j as Default,b as LargeOffCanvas,g as Mobile,v as OffCanvas,T as OffCanvasMobile,A as OffCanvasOrientationLeft,S as OffCanvasWithForm,f as WithController,y as WithForm,F as WithFormInside,B as WithSubHeadings,C as WithTrigger,cn as __namedExportsOrder,ln as default};
