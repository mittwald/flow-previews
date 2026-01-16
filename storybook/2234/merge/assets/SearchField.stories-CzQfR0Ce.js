import{j as r,r as S}from"./iframe-DZ4teeW0.js";import{b as n,u as a,F as p,t as x}from"./Form-DTH9u47l.js";import{L as m}from"./Label-DoWn6F4v.js";import{R as u,S as l}from"./ResetButton-Cubo-Q6d.js";import{B as d}from"./Button-DKoFnNBZ.js";import{S as j}from"./Section-239igX5r.js";import{A as b}from"./ActionGroup-CGiFoQ-O.js";import{s as c}from"./Action-IUgUGwCY.js";import{S as s}from"./SearchField-BTaVzW41.js";import{F as E}from"./FieldError-AZ-rkViQ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DLpaDBxN.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./clsx-B-dksMZM.js";import"./index-hJtfnrYv.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./context-CZC3VL3b.js";import"./browser-BOIGtlkn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DqsFtup3.js";import"./utils-CmR_RyV0.js";import"./Hidden-D1rcdGtX.js";import"./useRef-DPiX1vSz.js";import"./IconWarning-BMXzPSbA.js";import"./remote-C7mA51oY.js";import"./Text-C4YBtGrU.js";import"./EmulatedBoldText-D386c9ln.js";import"./Text-BkVlga5W.js";import"./LoadingSpinner-DJRFuNH9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNevv18m.js";import"./ProgressBar-qebYfenN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CN_YQU3T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DM-2A3ZD.js";import"./useFocus-DPzONbd_.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocusable-V-w09cqm.js";import"./ContextMenuSection-NaF-svH4.js";import"./Dialog-mp_BsC5B.js";import"./RSPContexts-BvqxEhTE.js";import"./OverlayArrow-DMnQ82Lw.js";import"./useControlledState-CE05dG3o.js";import"./Collection-w_out5sE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./SelectionIndicator-C2FrsSd1.js";import"./Separator-Dh-vjBlE.js";import"./SelectionManager-W-Kl84XM.js";import"./useEvent-Rvr_SgMv.js";import"./useCollator-DxlaTcxe.js";import"./FocusScope-BJdWB0PZ.js";import"./VisuallyHidden-DG5gzPUr.js";import"./getActionGroupSlot-H_zTh0GS.js";import"./useStatic-C2g0a5Fu.js";import"./context-CSe622gL.js";import"./useFieldComponent-D07Wu5hH.js";import"./useControlledHostValueProps-uUZrCOOz.js";import"./FieldError-DkoCPEDN.js";import"./Form-DzpbW5Q4.js";import"./Group-CcFwVgnp.js";import"./Input-D0qY3wir.js";import"./useTextField-BGWNueLQ.js";import"./useFormReset-CHb94_Ie.js";import"./useFormValidation-DQHMrpfA.js";import"./AlertText-Dur7DX9B.js";import"./AlertIcon-Dng1V2P2.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
