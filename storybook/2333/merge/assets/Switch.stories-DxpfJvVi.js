import{r as F,j as r}from"./iframe-DQkRMfo_.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-CYoqNksw.js";import{B as d}from"./Button-CTuc7Sb1.js";import{S as x}from"./Section-L3monAfc.js";import{A as E}from"./ActionGroup-CsHM66H4.js";import{s as c}from"./ActionBatch-CnbeSwOL.js";import{S as s}from"./Switch-CIfDdHE2.js";import{F as j}from"./FieldError-Bk57uQQs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bf6rAVHb.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./clsx-B-dksMZM.js";import"./index-BmRrr2ih.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./context-XfcuIoVT.js";import"./ActionGroupView-3Ij1E1q5.js";import"./Content-o4sDFduR.js";import"./Heading-fqnL9RrB.js";import"./Heading-CDc2BCk7.js";import"./RSPContexts-Bk8qKDL5.js";import"./utils-Bfb5K-41.js";import"./Text-DZXogYJp.js";import"./browser-BnHwZVCd.js";import"./EmulatedBoldText-BSCRafBI.js";import"./Text-BXxFgtol.js";import"./Modal-CJ5SZ1IH.js";import"./useOverlayController-CkVtRdpi.js";import"./useStatic-D2wW9JFL.js";import"./Overlay-Z1E506pH.js";import"./OverlayContextProvider-jcPJZwNr.js";import"./LoadingSpinner-BfuFQdyU.js";import"./IconWarning-D2qqMRrO.js";import"./remote-CkmXCgJk.js";import"./Dialog-cFet4L4X.js";import"./Button-BqHvWFWe.js";import"./ProgressBar-D5_QzmmX.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKmqgaQh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8-KGEPi.js";import"./useFocus-BSyQYzHK.js";import"./useFocusRing-CrR0o1Yj.js";import"./useFocusable-BWtjl4YZ.js";import"./OverlayArrow-CqKSMCIB.js";import"./useControlledState-CA4wGiI1.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./SelectionIndicator-D4WNQsp1.js";import"./Separator-6qwbqbNk.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./FocusScope-DAhxUr4_.js";import"./VisuallyHidden-CreEQc-P.js";import"./ButtonView-CdT4dZVW.js";import"./Flex-DdCAiEkA.js";import"./useRef-D8jPCy5Y.js";import"./ContextMenuSection-CK2JeTTJ.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./useFieldComponent-DKGKIVkH.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BXYT-WIx.js";import"./useFormReset-CbTvEeV3.js";import"./FieldError-BDV0g7vQ.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
