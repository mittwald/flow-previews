import{j as e,r as W}from"./iframe-tI_lG94_.js";import{B as r}from"./Button-WUI-ZJ9l.js";import{T as s}from"./Text-DDIuCQxA.js";import{T as u}from"./TextField-BMoy0rRP.js";import{L as d}from"./Label-CdVUwStZ.js";import{C as i}from"./Content-C33nzTY4.js";import{H as t}from"./Heading-BGy3_a0K.js";import{M as l,a as O}from"./Modal-DUJGZR9d.js";import{u as x}from"./useOverlayController-B_c7Bk6_.js";import{A as c}from"./Action-CkhZi8kw.js";import{A as m}from"./ActionGroup-d8ZYu-yv.js";import{c as q}from"./lib-B3c88vRy.js";import{u as P,F as w,b as L}from"./Form-ADUKHz3J.js";import{S as H}from"./ResetButton-CllDkjik.js";import{S as p}from"./Section-Zl-SwqAC.js";import{A as z}from"./Align-C7ZFv3DS.js";import{C as G}from"./ColumnLayout-CQyMv4yV.js";import{A as N}from"./AccentBox-CLhsRQzC.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import{R as _,a as D}from"./RadioButton-DsnFguKA.js";import{D as k}from"./DatePicker-CYACR_l9.js";import{F as E}from"./FieldDescription-CSWmc1EX.js";import{a as I}from"./index-BTlJSdCD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./LoadingSpinner-KbaLfraT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./context-CBF_EHvQ.js";import"./Button-EHR8zEQX.js";import"./utils-bmh-HeLH.js";import"./ProgressBar-B0YygRTY.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1ke7TUF.js";import"./useFocus-DCHopMY8.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocusable-BnM0ssdw.js";import"./browser-DuhBvQkx.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./Text-Bx7ijqLX.js";import"./TextFieldBase-Cf2px3GI.js";import"./useFieldComponent-_Dyiwxtg.js";import"./TextField-U30YbphT.js";import"./FieldError-CdG59lLT.js";import"./RSPContexts-C1ceWNax.js";import"./Form-B72YgAOe.js";import"./Group-CWqc5_8a.js";import"./Input-DTXfGVIZ.js";import"./useTextField-DIaV0kgB.js";import"./useFormReset-LNt8buNd.js";import"./useControlledState-BE5RFE46.js";import"./useFormValidation--MR_E_GW.js";import"./useControlledHostValueProps-Mo_orcSi.js";import"./Label.module-CUYTf9Jc.js";import"./Heading-Ds7I4FP5.js";import"./OverlayTrigger-CuZ4GO5W.js";import"./Dialog-Bo5p_Zqr.js";import"./OverlayArrow-DuDGHp0O.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./context-Ci5c_Wjo.js";import"./useStatic-vWo9ean7.js";import"./OverlayContextProvider-CkzPVZUF.js";import"./DialogTriggerView-x8fU52HH.js";import"./dynamic-DqOiE30k.js";import"./Overlay-CLpKqSoU.js";import"./ButtonView-Djy9x0J3.js";import"./Flex-CXkXcGUX.js";import"./getActionGroupSlot-DPvye52P.js";import"./FieldError-DYW7UPuf.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-kpcDmihX.js";import"./ContextMenuSection-Co6pbj1l.js";import"./useMakeFocusable-D27zQnKA.js";import"./RadioGroup-BJU8TaZP.js";import"./DateInput-CU6HyERk.js";import"./useSpinButton-DDLCKafs.js";import"./useFilter-CtVpXd3A.js";import"./Popover-DkoOxFI-.js";import"./RangeCalendar-Bb8SmBbw.js";import"./useUpdateEffect-0aRQ1hE1.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Overlays/Modal",component:l,parameters:{controls:{exclude:["controller"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s",offCanvas:!1},render:n=>e.jsxs(l,{...n,controller:x("Modal",{isDefaultOpen:!0}),children:[e.jsx(t,{children:"New Customer"}),e.jsx(i,{children:e.jsxs(p,{children:[e.jsx(s,{children:"Create a new customer to manage your projects, members and payments."}),e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})]})}),e.jsx(m,{children:e.jsxs(c,{closeOverlay:"Modal",children:[e.jsx(c,{action:q,children:e.jsx(r,{color:"accent",children:"Create customer"})}),e.jsx(r,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},f={},j={render:n=>{const a=x("Modal",{onOpen:()=>R("onOpen")(),onClose:()=>R("onClose")()});return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"primary",onPress:a.open,children:"Create customer"}),e.jsxs(l,{...n,controller:a,children:[e.jsx(t,{children:"New Customer"}),e.jsxs(i,{children:[e.jsx(s,{children:"Create a new customer to manage your projects, members and payments."}),e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})]}),e.jsx(m,{children:e.jsxs(c,{closeOverlay:"Modal",children:[e.jsx(r,{color:"accent",children:"Create customer"}),e.jsx(r,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},C={render:n=>e.jsxs(O,{children:[e.jsx(r,{color:"danger",children:"Delete project"}),e.jsxs(l,{...n,children:[e.jsx(t,{children:"Delete project"}),e.jsx(i,{children:e.jsx(s,{children:"Are you sure you want to delete this project?"})}),e.jsx(m,{children:e.jsxs(c,{closeOverlay:"Modal",children:[e.jsx(r,{color:"danger",children:"Delete project"}),e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},g={parameters:{viewport:{defaultViewport:"mobile1"}}},v={args:{offCanvas:!0}},A={args:{offCanvas:!0,offCanvasOrientation:"left"}},S={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},T={render:n=>{const a=P(),o=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"accent",onPress:o.open,children:"Add customer"}),e.jsx(l,{...n,controller:o,children:e.jsxs(w,{form:a,onSubmit:()=>o.close(),children:[e.jsx(t,{children:"Add Customer"}),e.jsx(i,{children:e.jsx(L,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})})}),e.jsxs(m,{children:[e.jsx(H,{color:"accent",children:"Submit"}),e.jsx(c,{closeOverlay:"Modal",children:e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},y={render:n=>{const a=P(),o=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"accent",onPress:o.open,children:"Add customer"}),e.jsx(l,{offCanvas:!0,...n,controller:o,children:e.jsxs(w,{form:a,onSubmit:()=>o.close(),children:[e.jsx(t,{children:"Add customer"}),e.jsx(i,{children:e.jsx(L,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})})}),e.jsxs(m,{children:[e.jsx(H,{color:"accent",children:"Submit"}),e.jsx(c,{closeOverlay:"Modal",children:e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:n=>{const a=P(),o=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"accent",onPress:o.open,children:"Add nameservers"}),e.jsxs(l,{...n,controller:o,children:[e.jsx(t,{children:"Add nameservers"}),e.jsx(i,{children:e.jsx(w,{form:a,onSubmit:()=>o.close(),children:e.jsxs(z,{children:[e.jsx(L,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Nameservers"})})}),e.jsx(H,{children:"Add"})]})})}),e.jsxs(m,{children:[e.jsx(r,{color:"accent",children:"Submit"}),e.jsx(c,{closeOverlay:"Modal",children:e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}},F={args:{size:"l",offCanvas:!0},render:n=>e.jsxs(O,{children:[e.jsx(r,{color:"accent",children:"Book tariff"}),e.jsxs(l,{...n,children:[e.jsx(t,{children:"Book tariff"}),e.jsxs(G,{children:[e.jsxs(p,{children:[e.jsx(t,{children:"Configuration"}),e.jsx(s,{children:h.long}),e.jsx(s,{children:h.long}),e.jsx(s,{children:h.long})]}),e.jsx(N,{children:e.jsxs(p,{children:[e.jsx(t,{level:4,children:"Overview"}),e.jsx(s,{children:h.medium})]})})]}),e.jsxs(m,{children:[e.jsx(r,{color:"accent",children:"Submit"}),e.jsx(c,{closeOverlay:"Modal",children:e.jsx(r,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})},B={args:{size:"l",offCanvas:!0},render:n=>e.jsxs(O,{...n,children:[e.jsx(r,{children:"Add SFTP user"}),e.jsxs(l,{size:"m",offCanvas:!0,children:[e.jsx(t,{children:"Add SFTP user"}),e.jsxs(i,{children:[e.jsxs(p,{children:[e.jsx(t,{children:"Description"}),e.jsx(s,{children:"An SFTP user allows you to connect to your project, for example to upload files."}),e.jsxs(G,{m:[1,1],children:[e.jsx(u,{isRequired:!0,children:e.jsx(d,{children:"Name"})}),e.jsxs(k,{children:[e.jsx(d,{children:"Expiration Date"}),e.jsx(E,{children:"After this date, the SFTP user will be deleted."})]})]})]}),e.jsxs(p,{children:[e.jsx(t,{children:"Permissions"}),e.jsx(s,{children:"Select the permissions the SFTP user should have."}),e.jsxs(_,{s:[1,1],defaultValue:"read&write",children:[e.jsxs(D,{value:"write",children:[e.jsx(s,{children:"Read Access"}),e.jsx(i,{children:"The SFTP user can view and download files."})]}),e.jsxs(D,{value:"read&write",children:[e.jsx(s,{children:"Read and Write Access"}),e.jsx(i,{children:"The SFTP user can view, edit, upload, and download files."})]})]})]}),e.jsxs(p,{children:[e.jsx(t,{children:"Directory Selection"}),e.jsx(s,{children:"Specify the directory the SFTP user should have access to."}),e.jsx(u,{isRequired:!0,children:e.jsx(d,{children:"Path"})})]})]}),e.jsx(m,{children:e.jsxs(c,{closeOverlay:"Modal",children:[e.jsx(r,{color:"accent",children:"Create SFTP User"}),e.jsx(r,{variant:"soft",color:"secondary",children:"Cancel"})]})})]})]})},V=new Promise(()=>{}),U=()=>{throw V},M={render:n=>{const[a,o]=W.useState(!0);return I(()=>o(!1),3e3),e.jsx(l,{...n,controller:x("Modal",{isDefaultOpen:!0}),children:a?e.jsx(U,{}):e.jsx(i,{children:"Loaded content!"})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    offCanvas: true,
    offCanvasOrientation: "left"
  }
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
              <SubmitButton color="accent">Submit</SubmitButton>
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
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
              <SubmitButton color="accent">Submit</SubmitButton>
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
                <SubmitButton>Add</SubmitButton>
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
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [isLoading, setIsLoading] = useState(true);
    useTimeout(() => setIsLoading(false), 3000);
    return <Modal {...props} controller={useOverlayController("Modal", {
      isDefaultOpen: true
    })}>
        {isLoading ? <Loader /> : <Content>Loaded content!</Content>}
      </Modal>;
  }
}`,...M.parameters?.docs?.source}}};const zr=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside","LargeOffCanvas","WithSubHeadings","WithSuspense"];export{f as Default,F as LargeOffCanvas,g as Mobile,v as OffCanvas,S as OffCanvasMobile,A as OffCanvasOrientationLeft,y as OffCanvasWithForm,j as WithController,T as WithForm,b as WithFormInside,B as WithSubHeadings,M as WithSuspense,C as WithTrigger,zr as __namedExportsOrder,qr as default};
