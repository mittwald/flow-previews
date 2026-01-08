import{j as r,r as F}from"./iframe-BMquwUxp.js";import{b as n,u as p,F as a,t as S}from"./Form-CH4Jd3Vi.js";import{R as u,S as l}from"./ResetButton-BmqhXreY.js";import{B as d}from"./Button-DvE0An6z.js";import{S as x}from"./Section-Cjc_LDxh.js";import{A as E}from"./ActionGroup-CFM0ipne.js";import{s as c}from"./Action-4VgG125V.js";import{S as m}from"./Switch-CV-3kgrO.js";import{F as j}from"./FieldError-DmIKwRtH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3tImXr.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./clsx-B-dksMZM.js";import"./index-cAMRUrux.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./context-BcuHL9mG.js";import"./browser-CBlt42Oy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-C54becjs.js";import"./useRef-DMo9v2cQ.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./Text-EG4UQ_l2.js";import"./EmulatedBoldText-CntJSrfE.js";import"./Text-CPXkgTZA.js";import"./LoadingSpinner-BPW5hp_J.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CwpJPQ3S.js";import"./ProgressBar-ztA157SI.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-RZvczw.js";import"./useFocus-DaRXVXg_.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./ContextMenuSection-DHh_hwVu.js";import"./Dialog-Dx0VK2pV.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./VisuallyHidden-D31Z6xaf.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./useStatic-BMpae3_g.js";import"./context-BbITb74L.js";import"./useFieldComponent-7OMeXUSU.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CQCmiVfi.js";import"./useFormReset-DGUxmLDL.js";import"./FieldError-D0s5eFn1.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Wr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
