import{j as r,r as F}from"./iframe-Ca6Y6Qbd.js";import{b as n,u as p,F as a,t as S}from"./Form-BzkK98Z8.js";import{R as u,S as l}from"./ResetButton-C16fmyxf.js";import{B as d}from"./Button-Cmpvhu71.js";import{S as x}from"./Section-DDmZgP0d.js";import{A as E}from"./ActionGroup-DteDdq98.js";import{s as c}from"./Action-BHbL3yoQ.js";import{S as m}from"./Switch-DRcWuuo5.js";import{F as j}from"./FieldError-Btuc_7Om.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CaH7ifbO.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./clsx-B-dksMZM.js";import"./index-dqS1_mS3.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./context-BSVjMcq9.js";import"./browser-CbMIui3y.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-CgPiupY7.js";import"./useRef-Cv9XEJ0w.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./Text-BEUemzSa.js";import"./EmulatedBoldText-B497YwdM.js";import"./Text-XI5tIYL5.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BwNAbkAI.js";import"./ProgressBar-CbWR67C5.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-7njUzVdk.js";import"./useFocus-YlOppDM-.js";import"./useFocusRing-DB26dgIQ.js";import"./useFocusable-DsA9Nlin.js";import"./ContextMenuSection-Dxs1x_rP.js";import"./Dialog-B1e_uHMT.js";import"./RSPContexts-CuMU_eQB.js";import"./OverlayArrow-BonLfIYe.js";import"./useControlledState-CsFJYMR6.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./useCollator-BHsGRBEt.js";import"./FocusScope-g3u6sbgU.js";import"./VisuallyHidden-DA0DNDbd.js";import"./getActionGroupSlot-DZQMPipw.js";import"./useStatic-CLFM6Rz8.js";import"./context-BIxaIE9W.js";import"./useFieldComponent-Drxg4ucu.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C8bfozUY.js";import"./useFormReset-QXLzcWbc.js";import"./FieldError-DTh-affr.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Wr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Dr as __namedExportsOrder,Wr as default};
