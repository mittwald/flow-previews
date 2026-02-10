import{r as S,j as r}from"./iframe-CLDMeli7.js";import{a as n,u as a,F as p,R as u,S as l,t as x}from"./ResetButton-B9K5TeM3.js";import{L as s}from"./Label-B6NnPYhK.js";import{B as d}from"./Button-BzVheXKP.js";import{S as j}from"./Section-28IJbL-t.js";import{A as b}from"./ActionGroup-BbpNtRTX.js";import{s as c}from"./Action-B36_bDyV.js";import{S as m}from"./SearchField-C6JM3H8B.js";import{F as E}from"./FieldError-DepvOCr4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQUXTbxb.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./clsx-B-dksMZM.js";import"./index-9eDA9WpJ.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./context-CJeO-2nS.js";import"./useRef-DgpT8kFB.js";import"./utils-CeJP1xg2.js";import"./ButtonView-DsZzpVxf.js";import"./browser-DchrXhwC.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./IconWarning-p4W4x8Yn.js";import"./remote-B4IT0gy2.js";import"./Text-CP7Ip6pC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./Text-Doo8ujkC.js";import"./LoadingSpinner-DoDeCRPK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DkOX4zii.js";import"./ProgressBar-DFW8NzQ8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BXv9j1Wx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5-cRdm9R.js";import"./useFocus-DccW9XIs.js";import"./useFocusRing-D-0mJeTX.js";import"./useFocusable-B-HKy_Nj.js";import"./ContextMenuSection-BNGygWDz.js";import"./Dialog-BqnORwX4.js";import"./RSPContexts-SpTJ-p__.js";import"./OverlayArrow-B5yP7TKG.js";import"./useControlledState-DtGWcuCb.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./useCollator-CMIPrcXy.js";import"./FocusScope-CDi_kcpI.js";import"./VisuallyHidden--NZ_Ses-.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./useStatic-CZ7UkCej.js";import"./context-ZEvjkl_L.js";import"./useFieldComponent-BtEJhhry.js";import"./useControlledHostValueProps-BugW_XdF.js";import"./FieldError-DzENXQGA.js";import"./Form-BccCs6cg.js";import"./Group-DSf025N_.js";import"./Input-imA8gTQv.js";import"./useTextField-CiZiWOVA.js";import"./useFormReset-BkQU1ELB.js";import"./useFormValidation-DfHAcEvH.js";import"./AlertText-tt9Tj7ZR.js";import"./AlertIcon-BgEbwDh4.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,kr as default};
