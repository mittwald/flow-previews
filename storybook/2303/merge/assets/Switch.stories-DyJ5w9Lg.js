import{j as r,r as F}from"./iframe-BTP_Z9Sf.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-D_dyfali.js";import{B as d}from"./Button-er0RkDrE.js";import{S as x}from"./Section-Bql58_C6.js";import{A as E}from"./ActionGroup-Kh2CN0rv.js";import{s as c}from"./Action-CBjIM5JV.js";import{S as m}from"./Switch-nTWd4UMx.js";import{F as j}from"./FieldError-DnUQcxCL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-LcJrXyvC.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./clsx-B-dksMZM.js";import"./index-E_qagHnK.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./context-BBaC2IfM.js";import"./useRef-Fcqlcr2u.js";import"./utils-DP1LA6WE.js";import"./ButtonView-B2TbsKhv.js";import"./browser-eyJ8FPIK.js";import"./IconWarning-CwZb39At.js";import"./remote-BmAp8UvO.js";import"./Text-Cq5MQ8wu.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Text-CZ1YR4oj.js";import"./LoadingSpinner-Cv-igvht.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgJw7YNb.js";import"./ProgressBar-CBYSqGBG.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BnZLj0Nc.js";import"./useFocus-BU1lOliM.js";import"./useFocusRing-CQvdF7rp.js";import"./useFocusable-Hlf8Yc9h.js";import"./ContextMenuSection-De_H5Wjl.js";import"./Dialog-DITwbnCq.js";import"./RSPContexts-Bn1hDyBd.js";import"./OverlayArrow-DzMljQ2A.js";import"./useControlledState-B5h2rUtG.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./getActionGroupSlot-V7kcySO7.js";import"./useStatic-kc5QKD7I.js";import"./context-BwxZaZwM.js";import"./useFieldComponent-Da-vFXDP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BvD2wu9z.js";import"./useFormReset-Bo1Ib9da.js";import"./FieldError-BvNBTK6b.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
