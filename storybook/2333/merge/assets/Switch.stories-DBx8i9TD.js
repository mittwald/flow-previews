import{r as F,j as r}from"./iframe-CaMmm6JB.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-DZiVofRK.js";import{B as d}from"./Button-Ccdb4ZyB.js";import{S as x}from"./Section-z5Dz65CL.js";import{A as E}from"./ActionGroup-C2ezmeu7.js";import{s as c}from"./ActionBatch-Q41d4eeq.js";import{S as s}from"./Switch-COCFAiCk.js";import{F as j}from"./FieldError-gBRSHyIP.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCT0rfWD.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./clsx-B-dksMZM.js";import"./index-bUizOk6y.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./context-COlkIlq2.js";import"./ActionGroupView-SXd6Ahs2.js";import"./Content-D39bfGls.js";import"./Heading-6UA8ouUH.js";import"./Heading-DZNcobqI.js";import"./RSPContexts-HzcDbyvj.js";import"./utils-BWel_6vJ.js";import"./Text-BytpHB1v.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./Text-DltKapPO.js";import"./Modal-D-BKA9RG.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./Overlay-DFrCfT03.js";import"./OverlayContextProvider-_LkIzv60.js";import"./LoadingSpinner-D3IBMWR2.js";import"./IconWarning-CjIU5uAw.js";import"./remote-B2IWJRNM.js";import"./Dialog-YsZQ1_o0.js";import"./Button-Br8oe_nB.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BlkmcG0L.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bq52eadg.js";import"./useFocus-CsmVawkN.js";import"./useFocusRing-D0nVGfyc.js";import"./useFocusable-D5loONxI.js";import"./OverlayArrow-BudvLkgn.js";import"./useControlledState-DS3iWteE.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./ButtonView-VN2wxJGS.js";import"./Flex-BB0MY87d.js";import"./useRef-6651uh8r.js";import"./ContextMenuSection-CGa5WiYd.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./useFieldComponent-l9GEjfOW.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DeOLjKQe.js";import"./useFormReset-B22K348z.js";import"./FieldError-rN2a2i1l.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
