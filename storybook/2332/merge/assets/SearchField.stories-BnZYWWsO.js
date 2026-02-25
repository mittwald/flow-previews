import{r as S,j as r}from"./iframe-5GKEjLm3.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-BScoo_H0.js";import{L as m}from"./Label-BiEVFhkG.js";import{B as d}from"./Button-DbzE4WUt.js";import{S as j}from"./Section-130PRHAT.js";import{A as b}from"./ActionGroup-B4RftQ4W.js";import{s as c}from"./ActionBatch-C4EMIU3M.js";import{S as s}from"./SearchField-C9amqj_J.js";import{F as E}from"./FieldError-qE1en1IM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BSdZm6V5.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./clsx-B-dksMZM.js";import"./index-CxI-AdtT.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./context-CYoVNjzy.js";import"./ActionGroupView-CkXwMiBE.js";import"./Content-CfJLe_6_.js";import"./Heading-BfDqySHg.js";import"./Heading-kRLjhOcq.js";import"./RSPContexts-AhaMx3-_.js";import"./utils-DZdTZXxi.js";import"./Text-4Jq61r3V.js";import"./browser-DpyY6Jfh.js";import"./EmulatedBoldText-Dw9vtGzr.js";import"./Text-jTefV10v.js";import"./Modal-lgO2eFy3.js";import"./useOverlayController-DTNq5pfb.js";import"./useStatic-BQSB_Jfu.js";import"./Overlay-BOgy6OMv.js";import"./OverlayContextProvider-CsuZ0G7f.js";import"./LoadingSpinner-Bp8vDBpW.js";import"./IconWarning-B10RUVd-.js";import"./remote-DrqTcZe1.js";import"./Dialog-BTalxjOJ.js";import"./Button-CslHKHnR.js";import"./ProgressBar-CehyS7IW.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-sguPTXZB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CYa1OoRC.js";import"./useFocus-BEqaOfOz.js";import"./useFocusRing-CsUwZj84.js";import"./useFocusable-BDWe4YTb.js";import"./OverlayArrow-C_Skf-4I.js";import"./useControlledState-D9ovZV70.js";import"./Collection-DOmJuy3e.js";import"./CollectionBuilder-DAbTUazM.js";import"./SelectionIndicator-C_xwSetB.js";import"./Separator-BxdVDEg-.js";import"./SelectionManager-rbmArbuf.js";import"./useEvent-_LgPAmJ5.js";import"./useCollator-COkB7H3x.js";import"./FocusScope-BteWf5AP.js";import"./VisuallyHidden-BfZLOvo3.js";import"./ButtonView-CWXAC1Vh.js";import"./Flex-tVpMcloB.js";import"./useRef-Dk-mLUQr.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BLAYEuJ8.js";import"./getActionGroupSlot-06aUfNYP.js";import"./useFieldComponent-B3twwSIL.js";import"./useControlledHostValueProps-CXgJdXNv.js";import"./FieldError-DNER0k2B.js";import"./Form-CkcBXY70.js";import"./Group-Gic7CvlE.js";import"./Input-VyCJjbfE.js";import"./useTextField-ByXQXWS6.js";import"./useFormReset-Bzn3Tj6K.js";import"./useFormValidation-Dje-UJVy.js";import"./AlertText-BQlCz9t6.js";import"./AlertIcon-xcA2PG-d.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
