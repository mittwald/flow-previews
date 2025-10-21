import{j as r}from"./iframe-D_6zdLny.js";import{a as m,u as s,F as n,t as x}from"./Form-CRAgCDt6.js";import{L as p}from"./Label-DYStaM4r.js";import{B as i}from"./Button-Hd0_GbPh.js";import{S as h}from"./Section-BOMWvKE6.js";import{A as f}from"./ActionGroup-DJbcBDj6.js";import{s as a}from"./Action-CDIAK01E.js";import{S as u}from"./Slider-DUwjAACi.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./browser-D7xr6uHh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./context-BfwnKq6d.js";import"./useMakeFocusable-CL_92pgO.js";import"./useFormReset-jO9kfZl0.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,F=S("submit"),yr={title:"Integrations/React Hook Form/Slider",component:m,render:()=>{const t=async l=>{await a(1500),F(l)},c=s({defaultValues:{storage:50}}),d=x();return r.jsx(n,{form:c,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(d,{name:"storage",children:r.jsx(u,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(p,{children:"Storage"})})}),r.jsx(f,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=s();return r.jsxs(n,{form:t,onSubmit:async()=>await a(2e3),children:[r.jsx(m,{name:"text",rules:{required:!0},children:r.jsx(u,{children:r.jsx(p,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Slider>
            <Label>Text</Label>
          </Slider>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};const Br=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Br as __namedExportsOrder,yr as default};
