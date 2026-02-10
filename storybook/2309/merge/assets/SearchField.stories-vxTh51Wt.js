import{r as S,j as r}from"./iframe--WfF81Kk.js";import{a as n,u as a,F as p,R as u,S as l,t as x}from"./ResetButton-BDtprYGS.js";import{L as s}from"./Label-BrCJfTYV.js";import{B as d}from"./Button-Csb2zbZD.js";import{S as j}from"./Section-CsSoxbiI.js";import{A as b}from"./ActionGroup-D33IDY3J.js";import{s as c}from"./Action-B7MToOoF.js";import{S as m}from"./SearchField-CozwAdT8.js";import{F as E}from"./FieldError-DwJ8vXTD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-3udm1Ueo.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./clsx-B-dksMZM.js";import"./index-C06vQZsJ.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./context-BGH-DtkU.js";import"./useRef-BG-z1Shz.js";import"./utils-DjCd38Rb.js";import"./ButtonView-DWC1hYKd.js";import"./browser-DaXQhhrD.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./IconWarning-BCj0akvL.js";import"./remote-BYVMC2eP.js";import"./Text-BQUBTPZI.js";import"./EmulatedBoldText-Bc2SrKM1.js";import"./Text-2H1diUJp.js";import"./LoadingSpinner-BoJLilDa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cdObnXIw.js";import"./ProgressBar-CcHuDHhg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-b3rJJe.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuA8A2Wl.js";import"./useFocus-BstfIGzX.js";import"./useFocusRing-xiCVrDfg.js";import"./useFocusable-CYWdX1lX.js";import"./ContextMenuSection-BxJIjSzE.js";import"./Dialog-C_VjyLol.js";import"./RSPContexts-D6CGk5en.js";import"./OverlayArrow-zU7WmGPw.js";import"./useControlledState-33z9BU53.js";import"./Collection-WxHe4g5S.js";import"./CollectionBuilder-D8350JFC.js";import"./SelectionIndicator-BGWzSObI.js";import"./Separator-C9zEzG3T.js";import"./SelectionManager-D0POi5wt.js";import"./useEvent-CGxaeV4J.js";import"./useCollator-lImoFu1C.js";import"./FocusScope-D57rWz_c.js";import"./VisuallyHidden-BWpEL0hX.js";import"./getActionGroupSlot-DP_ddCf6.js";import"./useStatic-DJuRNbYT.js";import"./context-BQE_egpR.js";import"./useFieldComponent-DtaSYFu8.js";import"./useControlledHostValueProps-Bw-7xkTM.js";import"./FieldError-8xlfKJ8p.js";import"./Form-fKP9Mvs-.js";import"./Group-BfXMsi0-.js";import"./Input-DN6feiEe.js";import"./useTextField-BSgmlJ8f.js";import"./useFormReset-B7XwhHp1.js";import"./useFormValidation-CPuMB1ok.js";import"./AlertText-4irfy3TS.js";import"./AlertIcon-Bc0kQsAW.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
