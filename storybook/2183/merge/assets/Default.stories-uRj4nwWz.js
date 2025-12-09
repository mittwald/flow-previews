import{j as e,r as W}from"./iframe-BIOR2-hs.js";import{B as n}from"./Button-CfZ-AQyp.js";import{T as s}from"./Text-DusIDTsD.js";import{M as l,T as u,a9 as P,A as q,D as z,v as N,R as _,I as D,al as k}from"./TimeField-DsDqWsQ-.js";import{L as d}from"./Label-BLkwK3Kt.js";import{C as i}from"./Content-BrpitEoE.js";import{H as t}from"./Heading-Cv__lUFC.js";import{u as x}from"./Popover-BGEckYFs.js";import{S as p,A as c}from"./Section-BqNRxlPT.js";import{A as m}from"./ActionGroup-CY4j-L1M.js";import{c as I}from"./lib-D2KMdrZF.js";import{u as w,F as L,b as H}from"./Form-DmAReG0K.js";import{S as O}from"./ResetButton-DZ7gY5XE.js";import{A as E}from"./Align-C8XIH-7n.js";import{C as G}from"./FileCardList-C94A5o8Z.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RMvdN3RZ.js";import"./mergeRefs-U5WlywcK.js";import"./index-k9AOzptS.js";import"./IconWarning-DZ71cvXF.js";import"./remote-CjhnXpnY.js";import"./LoadingSpinner-CKTuHmBU.js";import"./Button-Vr3ctEdr.js";import"./utils-DsOUUUiG.js";import"./ProgressBar-_rI0OtV6.js";import"./Hidden-CVR9fNcA.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BLOg-x3I.js";import"./useFocusRing-1hKsP8MW.js";import"./useFocusable-B_nx0oid.js";import"./useLocalizedStringFormatter-BKbYN9ME.js";import"./browser-D0ITs1ti.js";import"./EmulatedBoldText-Wg5Zh9Cq.js";import"./Accordion-NoXfJmUE.js";import"./dynamic-BVxG6scv.js";import"./Alert-CoZzyuQ9.js";import"./AlertIcon-BvUo9Etu.js";import"./AlertBadge-DCY0z1jh.js";import"./Collection-Cvuk07Q7.js";import"./CollectionBuilder-Dgt7X-YC.js";import"./TableFooterRow-BUV2_OgU.js";import"./SkeletonText-DYOjw4oF.js";import"./RSPContexts-DcPCJIF5.js";import"./SelectionIndicator-DG9tWISV.js";import"./context-CUEzUKrh.js";import"./Separator-DTwWIU6f.js";import"./useStatic-CRF1h1Jc.js";import"./Avatar-BUQx2CI1.js";import"./AvatarStack-Xz4hqYuD.js";import"./Badge-Cr-ClmAO.js";import"./BigNumber-L7ZWV3y6.js";import"./Breadcrumb-qAQdTaCx.js";import"./Link-DoJ4IPEN.js";import"./Legend-ZeqB-YKM.js";import"./Color-CnqARC2o.js";import"./OverlayTrigger-4gUv_Eql.js";import"./ContextualHelpTrigger-BXnzR8Ux.js";import"./CounterBadge-BfId8Yot.js";import"./DonutChart-C8wwiAZA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-8GDMUcKQ.js";import"./Header-CRVpFWgA.js";import"./Image-DwW9X8dg.js";import"./Initials-D4NqoMu-.js";import"./InlineCode-DaFFs495.js";import"./PopoverTrigger-BXV6g6Jr.js";import"./Separator-BAa6viOO.js";import"./Message-DKDXC3NB.js";import"./MessageSeparator-CGyHmQ4m.js";import"./NavigationGroup-D7bLGYP0.js";import"./Notification-D2xjz265.js";import"./NotificationProvider-XOHGZ29Q.js";import"./ProgressBar-B6DJTl7K.js";import"./Rating-UOf7auGu.js";import"./Skeleton-BNldNKri.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,fn={title:"Overlays/Modal",component:l,parameters:{controls:{exclude:["controller"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s",offCanvas:!1},render:r=>e.jsxs(l,{...r,controller:x("Modal",{isDefaultOpen:!0}),children:[e.jsx(t,{children:"New Customer"}),e.jsx(i,{children:e.jsxs(p,{children:[e.jsx(s,{children:"Create a new customer to manage your projects, members and payments."}),e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})]})}),e.jsx(m,{children:e.jsxs(c,{closeOverlay:"Modal",children:[e.jsx(c,{action:I,children:e.jsx(n,{color:"accent",children:"Create customer"})}),e.jsx(n,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},j={},f={render:r=>{const a=x("Modal",{onOpen:()=>R("onOpen")(),onClose:()=>R("onClose")()});return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onPress:a.open,children:"Create customer"}),e.jsxs(l,{...r,controller:a,children:[e.jsx(t,{children:"New Customer"}),e.jsxs(i,{children:[e.jsx(s,{children:"Create a new customer to manage your projects, members and payments."}),e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})]}),e.jsx(m,{children:e.jsxs(c,{closeOverlay:"Modal",children:[e.jsx(n,{color:"accent",children:"Create customer"}),e.jsx(n,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},C={render:r=>e.jsxs(P,{children:[e.jsx(n,{color:"danger",children:"Delete project"}),e.jsxs(l,{...r,children:[e.jsx(t,{children:"Delete project"}),e.jsx(i,{children:e.jsx(s,{children:"Are you sure you want to delete this project?"})}),e.jsx(m,{children:e.jsxs(c,{closeOverlay:"Modal",children:[e.jsx(n,{color:"danger",children:"Delete project"}),e.jsx(n,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},g={parameters:{viewport:{defaultViewport:"mobile1"}}},v={args:{offCanvas:!0}},A={args:{offCanvas:!0,offCanvasOrientation:"left"}},S={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},T={render:r=>{const a=w(),o=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"accent",onPress:o.open,children:"Add customer"}),e.jsx(l,{...r,controller:o,children:e.jsxs(L,{form:a,onSubmit:()=>o.close(),children:[e.jsx(t,{children:"Add Customer"}),e.jsx(i,{children:e.jsx(H,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})})}),e.jsxs(m,{children:[e.jsx(O,{color:"accent",children:"Submit"}),e.jsx(c,{closeOverlay:"Modal",children:e.jsx(n,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},y={render:r=>{const a=w(),o=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"accent",onPress:o.open,children:"Add customer"}),e.jsx(l,{offCanvas:!0,...r,controller:o,children:e.jsxs(L,{form:a,onSubmit:()=>o.close(),children:[e.jsx(t,{children:"Add customer"}),e.jsx(i,{children:e.jsx(H,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Customer name"})})})}),e.jsxs(m,{children:[e.jsx(O,{color:"accent",children:"Submit"}),e.jsx(c,{closeOverlay:"Modal",children:e.jsx(n,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:r=>{const a=w(),o=x("Modal");return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"accent",onPress:o.open,children:"Add nameservers"}),e.jsxs(l,{...r,controller:o,children:[e.jsx(t,{children:"Add nameservers"}),e.jsx(i,{children:e.jsx(L,{form:a,onSubmit:()=>o.close(),children:e.jsxs(E,{children:[e.jsx(H,{name:"name",rules:{required:"Please enter a name"},children:e.jsx(u,{children:e.jsx(d,{children:"Nameservers"})})}),e.jsx(O,{children:"Add"})]})})}),e.jsxs(m,{children:[e.jsx(n,{color:"accent",children:"Submit"}),e.jsx(c,{closeOverlay:"Modal",children:e.jsx(n,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}},F={args:{size:"l",offCanvas:!0},render:r=>e.jsxs(P,{children:[e.jsx(n,{color:"accent",children:"Book tariff"}),e.jsxs(l,{...r,children:[e.jsx(t,{children:"Book tariff"}),e.jsxs(G,{children:[e.jsxs(p,{children:[e.jsx(t,{children:"Configuration"}),e.jsx(s,{children:h.long}),e.jsx(s,{children:h.long}),e.jsx(s,{children:h.long})]}),e.jsx(q,{children:e.jsxs(p,{children:[e.jsx(t,{level:4,children:"Overview"}),e.jsx(s,{children:h.medium})]})})]}),e.jsxs(m,{children:[e.jsx(O,{color:"accent",children:"Submit"}),e.jsx(c,{closeOverlay:"Modal",children:e.jsx(n,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})},B={args:{size:"l",offCanvas:!0},render:r=>e.jsxs(P,{...r,children:[e.jsx(n,{children:"Add SFTP user"}),e.jsxs(l,{size:"m",offCanvas:!0,children:[e.jsx(t,{children:"Add SFTP user"}),e.jsxs(i,{children:[e.jsxs(p,{children:[e.jsx(t,{children:"Description"}),e.jsx(s,{children:"An SFTP user allows you to connect to your project, for example to upload files."}),e.jsxs(G,{m:[1,1],children:[e.jsx(u,{isRequired:!0,children:e.jsx(d,{children:"Name"})}),e.jsxs(z,{children:[e.jsx(d,{children:"Expiration Date"}),e.jsx(N,{children:"After this date, the SFTP user will be deleted."})]})]})]}),e.jsxs(p,{children:[e.jsx(t,{children:"Permissions"}),e.jsx(s,{children:"Select the permissions the SFTP user should have."}),e.jsxs(_,{s:[1,1],defaultValue:"read&write",children:[e.jsxs(D,{value:"write",children:[e.jsx(s,{children:"Read Access"}),e.jsx(i,{children:"The SFTP user can view and download files."})]}),e.jsxs(D,{value:"read&write",children:[e.jsx(s,{children:"Read and Write Access"}),e.jsx(i,{children:"The SFTP user can view, edit, upload, and download files."})]})]})]}),e.jsxs(p,{children:[e.jsx(t,{children:"Directory Selection"}),e.jsx(s,{children:"Specify the directory the SFTP user should have access to."}),e.jsx(u,{isRequired:!0,children:e.jsx(d,{children:"Path"})})]})]}),e.jsx(m,{children:e.jsxs(c,{closeOverlay:"Modal",children:[e.jsx(n,{color:"accent",children:"Create SFTP User"}),e.jsx(n,{variant:"soft",color:"secondary",children:"Cancel"})]})})]})]})},V=new Promise(()=>{}),U=()=>{throw V},M={render:r=>{const[a,o]=W.useState(!0);return k(()=>o(!1),3e3),e.jsx(l,{...r,controller:x("Modal",{isDefaultOpen:!0}),children:a?e.jsx(U,{}):e.jsx(i,{children:"Loaded content!"})})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"{}",...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            <SubmitButton color="accent">Submit</SubmitButton>
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
}`,...M.parameters?.docs?.source}}};const Cn=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside","LargeOffCanvas","WithSubHeadings","WithSuspense"];export{j as Default,F as LargeOffCanvas,g as Mobile,v as OffCanvas,S as OffCanvasMobile,A as OffCanvasOrientationLeft,y as OffCanvasWithForm,f as WithController,T as WithForm,b as WithFormInside,B as WithSubHeadings,M as WithSuspense,C as WithTrigger,Cn as __namedExportsOrder,fn as default};
