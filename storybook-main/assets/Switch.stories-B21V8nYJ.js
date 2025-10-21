import{j as r}from"./iframe-D_6zdLny.js";import{a as e,u as s,F as n,t as h}from"./Form-CRAgCDt6.js";import{L as p}from"./Label-DYStaM4r.js";import{B as m}from"./Button-Hd0_GbPh.js";import{S as f}from"./Section-BOMWvKE6.js";import{A as x}from"./ActionGroup-DJbcBDj6.js";import{s as a}from"./Action-CDIAK01E.js";import{S as c}from"./Switch-BkRhWUbF.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./browser-D7xr6uHh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./context-BfwnKq6d.js";import"./useMakeFocusable-CL_92pgO.js";import"./useToggleState-BXMhRIJO.js";import"./useFormReset-jO9kfZl0.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,S=F("submit"),Br={title:"Integrations/React Hook Form/Switch",component:e,render:()=>{const o=async d=>{await a(5e3),S(d)},u=s({defaultValues:{isEnabled:!1}}),l=h();return r.jsx(n,{form:u,onSubmit:o,children:r.jsxs(f,{children:[r.jsx(l,{name:"isEnabled",children:r.jsx(c,{children:r.jsx(p,{children:"Text"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=s();return r.jsxs(n,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(e,{name:"email",children:r.jsx(c,{children:r.jsx(p,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("email"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Er=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Er as __namedExportsOrder,Br as default};
