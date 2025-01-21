import{R as e}from"./index-B-o1Wr-g.js";import{B as r}from"./Button-DL4zOTEl.js";import{T as M}from"./Text-Cl00oEZR.js";import{T as y}from"./TextField-4FXGaYXq.js";import{L as b}from"./Label-_TQx26eL.js";import{C as m}from"./Content-BRrO9N7C.js";import{H as s}from"./Heading-Cx3jvWcZ.js";import{M as a,a as ee}from"./ModalTrigger-BPnZ5Ab8.js";import{u as A}from"./OverlayTrigger-DBMCsseW.js";import{A as l}from"./Action-nwH1LYxm.js";import{A as c}from"./ActionGroup-CkAMrken.js";import{c as re}from"./lib-gWVNUwz6.js";import{u as Y,F as Z,a as $}from"./Form-A-nf3K_U.js";import{a as O}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as te}from"./Section-Gc3v0DWm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./IconApp--rto3B0B.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./IconWarning-C7RtCnUV.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-D3THsmJZ.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-CFfO75lD.js";import"./utils-7gTBvjqH.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./useAltKeySelectionProps-Dqsvf2Or.js";import"./Text-R-rrVGxo.js";import"./TextFieldBase-Dx8UIi70.js";import"./FieldError-LYy7OxxH.js";import"./FieldError-Dc7wTCBj.js";import"./FieldDescription-DGgJkyCL.js";import"./Form-CS2x0aS5.js";import"./Input-In3k7nSs.js";import"./useTextField-BGTL6xBV.js";import"./useFormReset-DMREOE0P.js";import"./useControlledState-BgxdDqm0.js";import"./Heading-CrY40Q5a.js";import"./RSPContexts-BT50PPhj.js";import"./Overlay-CW_3TDd8.js";import"./Dialog-ugMEkBXT.js";import"./OverlayArrow-CuXMKzfT.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Header-gKSh-KKu.js";import"./context-HWij4CCA.js";import"./useSelector-iQqgW7gO.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./dynamic-DKDa4OpU.js";import"./v4-CQkTLCs1.js";import"./ContextMenuSection-BrbuS3OG.js";const br={title:"Overlays/Modal",component:a,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:t=>e.createElement(a,{...t,controller:A("Modal",{isDefaultOpen:!0})},e.createElement(s,null,"New Customer"),e.createElement(m,null,e.createElement(te,null,e.createElement(M,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(b,null,"Customer name")))),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(l,{action:re},e.createElement(r,{color:"accent"},"Create customer")),e.createElement(r,{color:"secondary",variant:"soft"},"Abort"))))},i={},p={render:t=>{const n=A("Modal",{onOpen:()=>O("onOpen")(),onClose:()=>O("onClose")()});return e.createElement(e.Fragment,null,e.createElement(r,{color:"primary",onPress:n.open},"Create customer"),e.createElement(a,{...t,controller:n},e.createElement(s,null,"New Customer"),e.createElement(m,null,e.createElement(M,null,"Create a new customer to manage your projects, members and payments."),e.createElement(y,null,e.createElement(b,null,"Customer name"))),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"accent"},"Create customer"),e.createElement(r,{color:"secondary",variant:"soft"},"Abort")))))}},u={render:t=>e.createElement(ee,null,e.createElement(r,{color:"danger"},"Delete project"),e.createElement(a,{...t},e.createElement(s,null,"Delete project"),e.createElement(m,null,e.createElement(M,null,"Are you sure you want to delete this project?")),e.createElement(c,null,e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{color:"danger"},"Delete project"),e.createElement(r,{variant:"soft",color:"secondary"},"Abort")))))},d={parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{offCanvas:!0}},C={args:{offCanvas:!0,offCanvasOrientation:"left"}},E={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},g={render:t=>{const n=Y(),o=A("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:o.open},"Add customer"),e.createElement(a,{...t,controller:o},e.createElement(Z,{form:n,onSubmit:()=>o.close()},e.createElement(s,null,"Add Customer"),e.createElement(m,null,e.createElement($,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(b,null,"Customer name")))),e.createElement(c,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}},v={render:t=>{const n=Y(),o=A("Modal");return e.createElement(e.Fragment,null,e.createElement(r,{color:"accent",onPress:o.open},"Add customer"),e.createElement(a,{offCanvas:!0,...t,controller:o},e.createElement(Z,{form:n,onSubmit:()=>o.close()},e.createElement(s,null,"Add Customer"),e.createElement(m,null,e.createElement($,{name:"name",rules:{required:"Please enter a name"}},e.createElement(y,null,e.createElement(b,null,"Customer name")))),e.createElement(c,null,e.createElement(r,{type:"submit",color:"accent"},"Submit"),e.createElement(l,{closeOverlay:"Modal"},e.createElement(r,{variant:"soft",color:"secondary"},"Abort"))))))}};var F,B,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var S,w,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var j,L,h;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(h=(L=u.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var H,P,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var G,W,q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  }
}`,...(q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var V,N,z;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    offCanvas: true,
    offCanvasOrientation: "left"
  }
}`,...(z=(N=C.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var R,_,k;E.parameters={...E.parameters,docs:{...(R=E.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    offCanvas: true
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(k=(_=E.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var I,J,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Ar=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm"];export{i as Default,d as Mobile,f as OffCanvas,E as OffCanvasMobile,C as OffCanvasOrientationLeft,v as OffCanvasWithForm,p as WithController,g as WithForm,u as WithTrigger,Ar as __namedExportsOrder,br as default};
