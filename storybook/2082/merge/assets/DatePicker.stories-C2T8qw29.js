import{j as r}from"./iframe-EtTbRQoM.js";import{a,u as p,F as c,t as x}from"./Form-B86kUuvW.js";import{L as o}from"./Label-BHPxSoWd.js";import{B as n}from"./Button-DxuCaQyR.js";import{S as h}from"./Section-BmVYkrqh.js";import{A as f}from"./ActionGroup-Cl4D3H2T.js";import{s as u}from"./Action-CL-CoYGw.js";import{J as j,h as b,L as F}from"./DateField-BJ7gPXMm.js";import{D as e}from"./DatePicker-DlUsdq2y.js";import"./index-nuYtCEEu.js";import"./dynamic-Cv7GHFn6.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./FieldError-Bx65Dx0T.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./browser-Cob99Do9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./getActionGroupSlot-CxKatSQe.js";import"./useStatic-DxnBGf3l.js";import"./context-C1SllNhn.js";import"./Form-CyJo_kk3.js";import"./Group-DeuTwRQ_.js";import"./Input-TlPGvJ5n.js";import"./useFormValidation-CisZkPpg.js";import"./useFormReset-B1BZ1rNK.js";import"./useSpinButton-FsnqNS7d.js";import"./useFilter-BJjLne1z.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-ByVAPhqX.js";import"./useOverlayController-BhlWBiph.js";import"./OverlayContextProvider-6Zh7EMbz.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./RangeCalendar-CenfKX4-.js";import"./Heading-DTQh2nx3.js";import"./useUpdateEffect-yEmayx_8.js";import"./useMakeFocusable-qjH8k0Qb.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,S=D("submit"),Ir={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const t=async l=>{await u(1500),S(l)},d=p({defaultValues:{dateDefaultValue:j("2025-09-01")}}),i=x();return r.jsx(c,{form:d,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:b(F()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(f,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=p();return r.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFocusAndError"];export{m as Default,s as WithFocusAndError,Mr as __namedExportsOrder,Ir as default};
