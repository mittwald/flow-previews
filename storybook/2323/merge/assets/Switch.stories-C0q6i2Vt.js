import{r as F,j as r}from"./iframe-EfPcFfHz.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./FormRootError-Chgvna3W.js";import{B as d}from"./Button-wFzIQtGi.js";import{S as x}from"./Section-CV61pRu2.js";import{A as E}from"./ActionGroup-Lxqbjb-D.js";import{s as c}from"./ActionBatch-DG-IZD13.js";import{S as s}from"./Switch-BRWRrgiA.js";import{F as j}from"./FieldError-Bm6xTrGY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BKd_XzPu.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./clsx-B-dksMZM.js";import"./index-BhGEUnhH.js";import"./Overlay-BiUskXOC.js";import"./useOverlayController-xYgjz7Dg.js";import"./useStatic-V9jmy_2G.js";import"./OverlayContextProvider-rUMdRUMd.js";import"./LoadingSpinner-5WRu_N9f.js";import"./IconWarning-73LpV07E.js";import"./remote-D3-8ROh8.js";import"./utils-Cnkpfm_P.js";import"./Dialog-DJ1EGGEI.js";import"./Button-BlxZZJFh.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DunHH7R3.js";import"./context-kn7lEdrW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CzmE2CoS.js";import"./useFocus-7edk4FfO.js";import"./useFocusRing-8P8y2KFJ.js";import"./useFocusable-CT_qKlvn.js";import"./RSPContexts-CIVPcPB5.js";import"./OverlayArrow-MDNnCdLA.js";import"./useControlledState-WqoJm4pI.js";import"./Collection-BHjKpR2C.js";import"./CollectionBuilder-BX09WhcJ.js";import"./SelectionIndicator-CeAI6QPx.js";import"./Separator-DgmB0SGY.js";import"./Text-B4oHPq8R.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./FocusScope-CSvsVBha.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./VisuallyHidden-CH2GsO1v.js";import"./ActionGroupView-HLt9OMBJ.js";import"./Content-CoxcjBGV.js";import"./Heading-D-lxgqSK.js";import"./Heading-fpS9fclC.js";import"./Text-CRFCcT-P.js";import"./browser-hyQhTs1N.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Modal-Lm05iuR_.js";import"./ButtonView-BN2-gVKk.js";import"./Flex-DI6XMfKS.js";import"./useRef-ClwNZ3BN.js";import"./ContextMenuSection-CgcrgsP7.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./useFieldComponent-BpgXbjM-.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DCnxvtLO.js";import"./useFormReset-CDR6jl2x.js";import"./FieldError-DGjeovc7.js";import"./AlertText-BC8DinUo.js";import"./AlertIcon-CtDfui7q.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
