import{j as r}from"./iframe-D3XbVUAE.js";import{a as u,u as l,F as d,t as j}from"./Form-C5MCGQf3.js";import{L as h}from"./Label-BTIrFf4y.js";import{B as m}from"./Button-DI43yX0M.js";import{S as g}from"./Section-BUZrj2S6.js";import{A as y}from"./ActionGroup-F8VITapX.js";import{s as f}from"./Action-CZBfRLDN.js";import{S as x}from"./Switch-BDC2z-6r.js";import"./index-Cun1SEai.js";import"./dynamic-GIq4BKTG.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./clsx-B-dksMZM.js";import"./index-BE_iNncf.js";import"./FieldError-DuGPuZu9.js";import"./IconWarning-DpoKEiS2.js";import"./FieldError-NLw4NqNk.js";import"./utils-BWY6h_sn.js";import"./Text-D1dMR7Bg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./browser-DZQtGRWw.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./Text-D8iCnd0a.js";import"./EmulatedBoldText-C38wPnte.js";import"./LoadingSpinner-LCrs4rVN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DzXxx4G-.js";import"./useFocus-DS8-NOtK.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./ContextMenuSection-CLGzRvVY.js";import"./Dialog-D6YV7AqF.js";import"./RSPContexts-BakoLx3C.js";import"./OverlayArrow-9doXs0eI.js";import"./useControlledState-Dbx7ZwrT.js";import"./Collection-C3nUBF4h.js";import"./CollectionBuilder-B_u7Wa0Q.js";import"./SelectionIndicator-Cq3hNpeI.js";import"./Separator-BCuxzefv.js";import"./SelectionManager-CUwtbCt4.js";import"./useEvent-nRU769M-.js";import"./useCollator-zmWlXBku.js";import"./FocusScope-Bgf4u7XC.js";import"./VisuallyHidden-ChWvOP_M.js";import"./getActionGroupSlot-CXPM0c0n.js";import"./useStatic-B8Xkh7jF.js";import"./context-Do4klyfP.js";import"./useMakeFocusable-C7JQv0_C.js";import"./useToggleState-CeAt6cNe.js";import"./useFormReset-BLKvBmEx.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:u,render:()=>{const o=async b=>{await f(5e3),E(b)},F=l({defaultValues:{isEnabled:!1}}),S=j();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(S,{name:"isEnabled",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await f(2e3),children:[r.jsx(u,{name:"email",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("email"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <Switch>
            <Label>Text</Label>
          </Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const Lr=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Lr as __namedExportsOrder,Ar as default};
