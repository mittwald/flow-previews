import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{B as e}from"./Button-CFQpmMRz.js";import{T as y}from"./Text-ycSbjUMH.js";import{T as m}from"./TextField-yB1lsoIU.js";import{L as d}from"./Label-B_MIQF8H.js";import{C as l}from"./Content-CgnPnPNS.js";import{H as c}from"./Heading-D5B3zhCX.js";import{M as s,a as tr}from"./ModalTrigger-aGFut_1O.js";import{u as p}from"./MenuTrigger-i2Sw8DHR.js";import{A as a}from"./Action-Ctv3AlgX.js";import{A as i}from"./ActionGroup-WvCGJncO.js";import{c as sr}from"./lib-lRUWDlTw.js";import{u as M,F,a as O}from"./Form-nrJO5DJN.js";import{a as B}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{S as ar}from"./Section-CAaxpG4l.js";import{A as lr}from"./Align-BFO_A8HK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./index-IBhSrjl6.js";import"./clsx-B-dksMZM.js";import"./IconApp-6KkRxCXW.js";import"./flowComponent-Cjf8M1qv.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./IconWarning-CBLFzXEL.js";import"./LoadingSpinner-B6hxwIay.js";import"./Button-BBWo3kGM.js";import"./utils-CzVyYWZn.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./browser-B1A6F7LW.js";import"./Text-PTaPc_Ci.js";import"./TextFieldBase-Cy1oouHV.js";import"./FieldDescription-DoeHHc2Z.js";import"./FormField.module-C6ssJHmz.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Input-DaA3cxmW.js";import"./useTextField-uM6U_XJE.js";import"./useFormReset-CilIRCFg.js";import"./useControlledState-4nfZ-XMX.js";import"./Heading-BCoG4c8D.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayContent-BvjykA4H.js";import"./Dialog-BV8uMRwe.js";import"./OverlayArrow-CByfAkhe.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./Header-DEYZ1qjG.js";import"./ButtonView-DpTPZa1V.js";import"./DialogTriggerView-CNwIBrqG.js";import"./context-MqXDt7Zp.js";import"./useStatic-576-OCoL.js";import"./getActionGroupSlot-OJm5rF-m.js";import"./dynamic-DKDa4OpU.js";import"./v4-CtRu48qb.js";import"./ContextMenuSection-D5rGdyZY.js";const Be={title:"Overlays/Modal",component:s,parameters:{controls:{exclude:["controller","offCanvas"]}},argTypes:{size:{control:"inline-radio",options:["s","m"]}},args:{size:"s"},render:o=>r.jsxs(s,{...o,controller:p("Modal",{isDefaultOpen:!0}),children:[r.jsx(c,{children:"New Customer"}),r.jsx(l,{children:r.jsxs(ar,{children:[r.jsx(y,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})]})}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(a,{action:sr,children:r.jsx(e,{color:"accent",children:"Create customer"})}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})},u={},x={render:o=>{const t=p("Modal",{onOpen:()=>B("onOpen")(),onClose:()=>B("onClose")()});return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"primary",onPress:t.open,children:"Create customer"}),r.jsxs(s,{...o,controller:t,children:[r.jsx(c,{children:"New Customer"}),r.jsxs(l,{children:[r.jsx(y,{children:"Create a new customer to manage your projects, members and payments."}),r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})]}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(e,{color:"accent",children:"Create customer"}),r.jsx(e,{color:"secondary",variant:"soft",children:"Abort"})]})})]})]})}},f={render:o=>r.jsxs(tr,{children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsxs(s,{...o,children:[r.jsx(c,{children:"Delete project"}),r.jsx(l,{children:r.jsx(y,{children:"Are you sure you want to delete this project?"})}),r.jsx(i,{children:r.jsxs(a,{closeOverlay:"Modal",children:[r.jsx(e,{color:"danger",children:"Delete project"}),r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})]})})]})]})},j={parameters:{viewport:{defaultViewport:"mobile1"}}},h={args:{offCanvas:!0}},C={args:{offCanvas:!0,offCanvasOrientation:"left"}},g={args:{offCanvas:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},v={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{...o,controller:n,children:r.jsxs(F,{form:t,onSubmit:()=>n.close(),children:[r.jsx(c,{children:"Add Customer"}),r.jsx(l,{children:r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},A={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add customer"}),r.jsx(s,{offCanvas:!0,...o,controller:n,children:r.jsxs(F,{form:t,onSubmit:()=>n.close(),children:[r.jsx(c,{children:"Add customer"}),r.jsx(l,{children:r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Customer name"})})})}),r.jsxs(i,{children:[r.jsx(e,{type:"submit",color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})})]})}},b={render:o=>{const t=M(),n=p("Modal");return r.jsxs(r.Fragment,{children:[r.jsx(e,{color:"accent",onPress:n.open,children:"Add nameservers"}),r.jsxs(s,{...o,controller:n,children:[r.jsx(c,{children:"Add nameservers"}),r.jsx(l,{children:r.jsx(F,{form:t,onSubmit:()=>n.close(),children:r.jsxs(lr,{children:[r.jsx(O,{name:"name",rules:{required:"Please enter a name"},children:r.jsx(m,{children:r.jsx(d,{children:"Nameservers"})})}),r.jsx(e,{type:"submit",children:"Add"})]})})}),r.jsxs(i,{children:[r.jsx(e,{color:"accent",children:"Submit"}),r.jsx(a,{closeOverlay:"Modal",children:r.jsx(e,{variant:"soft",color:"secondary",children:"Abort"})})]})]})]})}};var S,T,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var P,L,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(nr=(or=b.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};const Se=["Default","WithController","WithTrigger","Mobile","OffCanvas","OffCanvasOrientationLeft","OffCanvasMobile","WithForm","OffCanvasWithForm","WithFormInside"];export{u as Default,j as Mobile,h as OffCanvas,g as OffCanvasMobile,C as OffCanvasOrientationLeft,A as OffCanvasWithForm,x as WithController,v as WithForm,b as WithFormInside,f as WithTrigger,Se as __namedExportsOrder,Be as default};
