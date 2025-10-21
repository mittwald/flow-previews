import{j as r}from"./iframe-D_6zdLny.js";import{a,u as p,F as c,t as x}from"./Form-CRAgCDt6.js";import{L as o}from"./Label-DYStaM4r.js";import{B as n}from"./Button-Hd0_GbPh.js";import{S as h}from"./Section-BOMWvKE6.js";import{A as f}from"./ActionGroup-DJbcBDj6.js";import{s as u}from"./Action-CDIAK01E.js";import{J as j,h as b,L as F}from"./DateField-B40TpUZW.js";import{D as e}from"./DatePicker-Dbp5Gqhx.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./browser-D7xr6uHh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./context-BfwnKq6d.js";import"./Form-BEwxiqG9.js";import"./Group-DD12aKc0.js";import"./Input-DeyWgLjK.js";import"./useFormValidation-B8Bdwi3p.js";import"./useFormReset-jO9kfZl0.js";import"./useSpinButton-CyrnvqWk.js";import"./useFilter-BIKF0mDd.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-B3PEdI3k.js";import"./useOverlayController-ClIsDnWC.js";import"./OverlayContextProvider-D1-D5Oi5.js";import"./ClearPropsContextView-BWtGAMVv.js";import"./RangeCalendar-BsajEUc5.js";import"./Heading-CDoCnjT3.js";import"./useUpdateEffect-nzMAFCYp.js";import"./useMakeFocusable-CL_92pgO.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,S=D("submit"),Mr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const t=async l=>{await u(1500),S(l)},d=p({defaultValues:{dateDefaultValue:j("2025-09-01")}}),i=x();return r.jsx(c,{form:d,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:b(F()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(f,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=p();return r.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFocusAndError"];export{m as Default,s as WithFocusAndError,Wr as __namedExportsOrder,Mr as default};
