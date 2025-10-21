import{j as r}from"./iframe-EtTbRQoM.js";import{a as m,u as s,F as n,t as x}from"./Form-B86kUuvW.js";import{L as p}from"./Label-BHPxSoWd.js";import{B as i}from"./Button-DxuCaQyR.js";import{S as h}from"./Section-BmVYkrqh.js";import{A as f}from"./ActionGroup-Cl4D3H2T.js";import{s as a}from"./Action-CL-CoYGw.js";import{S as u}from"./Slider-DaLkrIFh.js";import"./index-nuYtCEEu.js";import"./dynamic-Cv7GHFn6.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./FieldError-Bx65Dx0T.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./browser-Cob99Do9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./getActionGroupSlot-CxKatSQe.js";import"./useStatic-DxnBGf3l.js";import"./context-C1SllNhn.js";import"./useMakeFocusable-qjH8k0Qb.js";import"./useFormReset-B1BZ1rNK.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,F=S("submit"),gr={title:"Integrations/React Hook Form/Slider",component:m,render:()=>{const t=async l=>{await a(1500),F(l)},c=s({defaultValues:{storage:50}}),d=x();return r.jsx(n,{form:c,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(d,{name:"storage",children:r.jsx(u,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(p,{children:"Storage"})})}),r.jsx(f,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=s();return r.jsxs(n,{form:t,onSubmit:async()=>await a(2e3),children:[r.jsx(m,{name:"text",rules:{required:!0},children:r.jsx(u,{children:r.jsx(p,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const yr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,yr as __namedExportsOrder,gr as default};
