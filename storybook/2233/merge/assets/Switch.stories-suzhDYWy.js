import{j as r,r as F}from"./iframe-BeQWUZkN.js";import{b as n,u as p,F as a,t as S}from"./Form-B98UMnS4.js";import{R as u,S as l}from"./ResetButton-9QuJv1px.js";import{B as d}from"./Button-CGVqLO1a.js";import{S as x}from"./Section-BPuqexdG.js";import{A as E}from"./ActionGroup-nS8Oj4Mn.js";import{s as c}from"./Action-E4S27TIO.js";import{S as m}from"./Switch-CesNZomq.js";import{F as j}from"./FieldError-BcvtKrk-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CY8Jd6pV.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./clsx-B-dksMZM.js";import"./index-C7QqpnOV.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./context-BW8umLlU.js";import"./browser-CC8M21FF.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-DahaGO1Z.js";import"./useRef-CcGz0D1s.js";import"./IconWarning-BINGtqrd.js";import"./remote-BjhB0wla.js";import"./Text-DBLOUBNs.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./Text-oRZAcHnn.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CL6J7LkF.js";import"./ProgressBar-DrS-kVcX.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bej11zP_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DC5PU-Mt.js";import"./useFocus-B8WX1wz4.js";import"./useFocusRing-plkuiMUL.js";import"./useFocusable-5ZG33T1u.js";import"./ContextMenuSection-of5hagQh.js";import"./Dialog-BcNKaqXQ.js";import"./RSPContexts-3R6axPUC.js";import"./OverlayArrow-CQhuNf01.js";import"./useControlledState-CVKu2BVA.js";import"./Collection-BT4mtoIi.js";import"./CollectionBuilder-8XmSCxqz.js";import"./SelectionIndicator-CpkhsEOb.js";import"./Separator-jKx-ftTc.js";import"./SelectionManager-g_157G_P.js";import"./useEvent-D73bdPYV.js";import"./useCollator-BitTSQ9h.js";import"./FocusScope-BFFCHkyv.js";import"./VisuallyHidden-Dai9OIPt.js";import"./getActionGroupSlot-Mt7aWTck.js";import"./useStatic-H-gT8Tnv.js";import"./context-C8zS221N.js";import"./useFieldComponent-Df_LAOUO.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D_PN-5xb.js";import"./useFormReset-C8CI0grL.js";import"./FieldError-D83BnXEF.js";import"./AlertText-zAJvVLJZ.js";import"./AlertIcon-Bvyhnsbm.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Wr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
