import{j as r,r as F}from"./iframe-B9uPShpw.js";import{u as s,F as a}from"./Form-Q90y3tRs.js";import{L as n}from"./Label-KwkmvcNF.js";import{B as l}from"./Button-BmSId73m.js";import{S as g}from"./Section-Ny8qJyCT.js";import{A as S}from"./ActionGroup-BzV4LqD-.js";import{s as p}from"./Action-BG9uiL-h.js";import{S as m}from"./Slider-B9mLsGae.js";import{F as b}from"./FieldError-CWcQNDFm.js";import{F as u,t as j}from"./Field-DaTa4ON7.js";import{R as d}from"./ResetButton-CiFLSEoZ.js";import{S as c}from"./SubmitButton-67a0DKJ8.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DkOndk9b.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaNB93st.js";import"./index-BHigKFJv.js";import"./index-C-9nCgVF.js";import"./useLocalizedStringFormatter-BoeFAG81.js";import"./context-C9xya_TD.js";import"./Label-DMYXGfMz.js";import"./utils-Daj4d2Cf.js";import"./Hidden-DXuNaD-Y.js";import"./IconApp-Dlsy_N62.js";import"./remote-BWMO5jwH.js";import"./IconX-9DqQUbWU.js";import"./IconCheck-CR4Xfb4H.js";import"./Text-CNAgZ6Gu.js";import"./EmulatedBoldText-CttSSL63.js";import"./Text-BY4f0OUC.js";import"./LoadingSpinner-Du_twv2V.js";import"./ariaLive-BNqOvCbo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CfSbOp9X.js";import"./ProgressBar-BCTL0_PO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CcI46r6t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIPi1cMp.js";import"./useFocus-BRHOSDKu.js";import"./useFocusRing-kdNWDtkT.js";import"./useFocusable-3eJpH5lU.js";import"./ContextMenuSection-CdGZ4RR9.js";import"./lib-90ocxLs-.js";import"./Dialog-D67Qmi5f.js";import"./RSPContexts-D3LiPnZ6.js";import"./OverlayArrow-D2N0P4yy.js";import"./useControlledState-DaoeHdVs.js";import"./Collection-CsRpAj9n.js";import"./CollectionBuilder-g4fV9EQ5.js";import"./SelectionIndicator-C2YxFtZ5.js";import"./Separator-BAZWFUsp.js";import"./SelectionManager-CuNUAezw.js";import"./useEvent-B8UCcaDh.js";import"./useCollator-YFGcYRYP.js";import"./FocusScope-DabbQPzk.js";import"./VisuallyHidden-C1crbJmY.js";import"./dynamic-DCdgkrTe.js";import"./getActionGroupSlot-MOt65LPv.js";import"./useStatic-DxPieb3u.js";import"./context-B0UTB4Wa.js";import"./IconMinus-Cts0nYhr.js";import"./IconPlus-BMByyLMK.js";import"./useFieldComponent-BtkWQmwv.js";import"./useFormReset-BDYhp5bc.js";import"./FieldError-B2c6KACK.js";import"./IconDanger-q09hWhBt.js";import"./useRef-DWqG7DdS.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Cr={title:"Integrations/React Hook Form/Slider",component:u,render:()=>{const t=async x=>{await p(1500),E(x)},f=s({defaultValues:{storage:50}}),h=j();return r.jsx(a,{form:f,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(S,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},e={render:()=>{const t=s();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=s();return r.jsxs(a,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <Slider formatOptions={{
        style: "unit",
        unit: "gigabyte"
      }} minValue={10} maxValue={100} isInvalid>
          <Label>Storage</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,e as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
