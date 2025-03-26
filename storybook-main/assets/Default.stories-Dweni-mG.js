import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import{B as e}from"./Button-MRB8ulec.js";import{T as y}from"./Text-CyHz7mQc.js";import{T as m}from"./TextField-7lUiLe5C.js";import{L as d}from"./Label-CHmSul_2.js";import{C as l}from"./Content-Bl9SFQnu.js";import{H as c}from"./Heading-BNmY3x36.js";import{M as s,a as tr}from"./Modal-BL1kB5YL.js";import{u as p}from"./OverlayTrigger-CE90xnC_.js";import{A as a}from"./Action-DufWMBOU.js";import{A as i}from"./ActionGroup-C79hYXdq.js";import{c as sr}from"./lib-bNriaa4B.js";import{u as M,F,a as O}from"./Form-Cyp8412I.js";import{a as B}from"./index-B-lxVbXh.js";import{S as ar}from"./Section-DdYgVX4Q.js";import{A as lr}from"./Align-BOOsgnmY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaA12yFO.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./IconApp-DCJnWfXR.js";import"./IconWarning-C5oUT_gq.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner--ApQP2yb.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./Button-PaysjOmZ.js";import"./utils-DcjC1aig.js";import"./ProgressBar-qxoNL0r_.js";import"./Label-CvscwPf9.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DPCVhyCF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D57HKG0J.js";import"./useFocus-nbRcaiXq.js";import"./useFocusRing-CXNfaX1r.js";import"./useFocusable-CZzsVVWR.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-UNZxgqCx.js";import"./TextFieldBase-BAQkJL9N.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-9gdLNyCU.js";import"./FieldError-CQDuJ0EJ.js";import"./FieldDescription-DLNp07ic.js";import"./Form-B6mfikVx.js";import"./Input-D73fD5bD.js";import"./useTextField-DrsVPilB.js";import"./useFormReset-CGMiLjFo.js";import"./useControlledState-BKUqB07S.js";import"./useFormValidation-DG4TqYaU.js";import"./Heading-gLVfuOEw.js";import"./RSPContexts-8O1fXkhd.js";import"./DialogTriggerView-Bknz71w1.js";import"./Overlay-C_qzSSEB.js";import"./Dialog-DMNLsUVl.js";import"./OverlayArrow-Dips9o2N.js";import"./Collection-BupEJ213.js";import"./CollectionBuilder-92b9NEiR.js";import"./Separator-pz6eaBqf.js";import"./useOverlayTriggerState-DY-7iay5.js";import"./SelectionManager-B5yo36z-.js";import"./useEvent-KizPqgSt.js";import"./useCollator-Sm__dF4I.js";import"./FocusScope-71KNoUag.js";import"./VisuallyHidden-DdD-CBUj.js";import"./Header-CGzaOzE8.js";import"./ButtonView-BBg23Oel.js";import"./context-gLf2glmD.js";import"./useStatic-OjKlncZ_.js";import"./getActionGroupSlot-Sw8Lj_V0.js";import"./dynamic-DKDa4OpU.js";import"./v4-CtRu48qb.js";import"./ContextMenuSection-CHLCd5sN.js";const Le={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(s,{...o,controller:p("Modal",{isDefaultOpen:!0}),children:[r.jsx(c,{children:"New Customer"}),r.jsx(l,{children:r.jsxs(ar,{children:[r.jsx(y,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(a,{action:sr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},u={},x={render:o=>{const t=p("Modal",{onOpen:()=>B("onOpen")(),onClose:()=>B("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:t.open,children:"Create customer"}),r.jsxs(s,{...o,controller:t,children:[r.jsx(c,{children:"New Customer"}),r.jsxs(l,{children:[r.jsx(y,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},f={render:o=>r.jsxs(tr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(s,{...o,children:[r.jsx(c,{children:"Delete project"}),r.jsx(l,{children:r.jsx(y,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},j={parameters:{viewport:{defaultViewport:"mobile1"}}},h={args:{offCanvas:!0}},C={args:{offCanvas:!0,offCanvasOrientation:"left"}},g={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},v={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{...o,controller:n,children:r.jsxs(F,{form:t,onSubmit:()=>n.close(),children:[r.jsx(c,{children:"Add Customer"}),r.jsx(l,{children:r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},A={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{offCanvas:!0,...o,controller:n,children:r.jsxs(F,{form:t,onSubmit:()=>n.close(),children:[r.jsx(c,{children:"Add customer"}),r.jsx(l,{children:r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(s,{...o,controller:n,children:[r.jsx(c,{children:"Add nameservers"}),r.jsx(l,{children:r.jsx(F,{form:t,onSubmit:()=>n.close(),children:r.jsxs(lr,{children:[r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}};var S,T,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var P,L,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(nr=(or=b.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};const He=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside"];export{u as Default,j as Mobile,h as OffCanvas,g as OffCanvasMobile,C as OffCanvasOrientationLeft,A as OffCanvasWithForm,x as WithController,v as WithForm,b as WithFormInside,f as WithTrigger,He as __namedExportsOrder,Le as default};
