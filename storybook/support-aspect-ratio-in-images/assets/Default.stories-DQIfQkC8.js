import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{B as e}from"./Button-wBfRci_n.js";import{T as y}from"./Text-BPAvSiAh.js";import{T as m}from"./TextField-6jdRAlwp.js";import{L as d}from"./Label-Awo8DmgK.js";import{C as l}from"./Content-fE7CgtG0.js";import{H as c}from"./Heading-CmQGQTPk.js";import{M as s,a as tr}from"./Modal-BqE733fL.js";import{u as p}from"./OverlayTrigger-BUDTS6yc.js";import{A as a}from"./Action-DdkAMDFz.js";import{A as i}from"./ActionGroup-DmEMTz5D.js";import{c as sr}from"./lib-vFULvXLf.js";import{u as M,F,a as O}from"./Form-FpyCBsMG.js";import{a as B}from"./index-B-lxVbXh.js";import{S as ar}from"./Section-CVO2kTV1.js";import{A as lr}from"./Align-B6d11fPM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./IconApp-DZf0STiH.js";import"./IconWarning-BqX4qer7.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-_BP_ZOWb.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./Button-DAivm4ks.js";import"./utils-BAtcVSHo.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChNHSMR7.js";import"./useFocus-B7LXpZ-i.js";import"./useFocusRing-CYqHz5Aw.js";import"./useFocusable-XxrpiuTs.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-CxIdO6ok.js";import"./TextFieldBase-8HHMQ7rB.js";import"./FieldError-BeNnsonN.js";import"./FieldError-D8y9Veva.js";import"./FieldDescription-DtEGO0XD.js";import"./Form-8WJ3ztGx.js";import"./Input-CxXkjS8B.js";import"./useTextField-46OSuMtl.js";import"./useFormReset-4n_yD9ws.js";import"./useControlledState-4nfZ-XMX.js";import"./Heading-DmITIAYD.js";import"./RSPContexts-BEYwq1Zw.js";import"./DialogTriggerView-D4zJWcQb.js";import"./Overlay-UksA2u45.js";import"./Dialog-BXcqMr2E.js";import"./OverlayArrow-PYb9PIt4.js";import"./Collection-BNxR9rC7.js";import"./CollectionBuilder-BlZkV0U0.js";import"./Separator-xQlHCyu8.js";import"./SelectionManager-B6hW899S.js";import"./useEvent-0eO3yNkM.js";import"./useCollator-CDl7pGf-.js";import"./FocusScope-BXsjqcwe.js";import"./VisuallyHidden-CfzjMNmM.js";import"./Header-DDZuB5EH.js";import"./ButtonView-DAEe8CrV.js";import"./context-BWt75kQX.js";import"./useStatic-CZ_o1reA.js";import"./getActionGroupSlot-CeuQjEkT.js";import"./dynamic-DKDa4OpU.js";import"./v4-CtRu48qb.js";import"./ContextMenuSection-vnKZrTgn.js";const Te={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(s,{...o,controller:p("Modal",{isDefaultOpen:!0}),children:[r.jsx(c,{children:"New Customer"}),r.jsx(l,{children:r.jsxs(ar,{children:[r.jsx(y,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(a,{action:sr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},u={},x={render:o=>{const t=p("Modal",{onOpen:()=>B("onOpen")(),onClose:()=>B("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:t.open,children:"Create customer"}),r.jsxs(s,{...o,controller:t,children:[r.jsx(c,{children:"New Customer"}),r.jsxs(l,{children:[r.jsx(y,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},f={render:o=>r.jsxs(tr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(s,{...o,children:[r.jsx(c,{children:"Delete project"}),r.jsx(l,{children:r.jsx(y,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},j={parameters:{viewport:{defaultViewport:"mobile1"}}},h={args:{offCanvas:!0}},C={args:{offCanvas:!0,offCanvasOrientation:"left"}},g={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},v={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{...o,controller:n,children:r.jsxs(F,{form:t,onSubmit:()=>n.close(),children:[r.jsx(c,{children:"Add Customer"}),r.jsx(l,{children:r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},A={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{offCanvas:!0,...o,controller:n,children:r.jsxs(F,{form:t,onSubmit:()=>n.close(),children:[r.jsx(c,{children:"Add customer"}),r.jsx(l,{children:r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(s,{...o,controller:n,children:[r.jsx(c,{children:"Add nameservers"}),r.jsx(l,{children:r.jsx(F,{form:t,onSubmit:()=>n.close(),children:r.jsxs(lr,{children:[r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}};var S,T,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var P,L,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(nr=(or=b.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};const we=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside"];export{u as Default,j as Mobile,h as OffCanvas,g as OffCanvasMobile,C as OffCanvasOrientationLeft,A as OffCanvasWithForm,x as WithController,v as WithForm,b as WithFormInside,f as WithTrigger,we as __namedExportsOrder,Te as default};
