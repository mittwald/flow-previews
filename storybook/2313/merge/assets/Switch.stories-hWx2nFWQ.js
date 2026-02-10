import{r as F,j as r}from"./iframe-HxmydubW.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-H0M11BQL.js";import{B as d}from"./Button-CfZWs4w7.js";import{S as x}from"./Section-DaADFqCH.js";import{A as E}from"./ActionGroup-D6Gqna5x.js";import{s as c}from"./ActionBatch-ChYSHCOJ.js";import{S as m}from"./Switch-CBAxDBE4.js";import{F as j}from"./FieldError-431GXjJZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7w-3Mi4.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./clsx-B-dksMZM.js";import"./index-CEuE-GZL.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./context-CAIZZp13.js";import"./useRef-D0OjaGz6.js";import"./utils-QtLN3P4K.js";import"./useStatic-ffXkYFOn.js";import"./ButtonView-BtepizEV.js";import"./browser-XpDtWA4a.js";import"./IconWarning-C9xwJqAl.js";import"./remote-fubbDoJI.js";import"./Text-CUJOJiDD.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./Text-CyO0jXov.js";import"./LoadingSpinner-CzIk11gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B_Zn8gpO.js";import"./ProgressBar-BLMl0tpz.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CkTRhQb0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-yluX3X-J.js";import"./useFocus-AF-IcVAt.js";import"./useFocusRing-CAJt6BJw.js";import"./useFocusable-H6SSWU_B.js";import"./ContextMenuSection-DBGHgVvh.js";import"./Dialog-BZeO2Xjo.js";import"./RSPContexts-Cjdg_leM.js";import"./OverlayArrow-CRirkybg.js";import"./useControlledState-N-j6hnQm.js";import"./Collection-Dh0U_T2u.js";import"./CollectionBuilder-DZvSqS6p.js";import"./SelectionIndicator-dYnAwztx.js";import"./Separator-D3qRtCTd.js";import"./SelectionManager-BhAKHVOw.js";import"./useEvent-Br9MlQ6p.js";import"./useCollator-qjE4hkog.js";import"./FocusScope-D_FLL8Ht.js";import"./VisuallyHidden-BPW-z4K2.js";import"./getActionGroupSlot-CHtGBuk8.js";import"./context-I_ID-Cd_.js";import"./useFieldComponent-Bahj-THY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BE0q7bB3.js";import"./useFormReset-C2bi11DR.js";import"./FieldError-BaqMj9An.js";import"./AlertText-CJjUY60n.js";import"./AlertIcon-BFPz9yZd.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
