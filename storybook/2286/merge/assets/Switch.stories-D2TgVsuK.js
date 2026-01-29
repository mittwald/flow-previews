import{j as r,r as F}from"./iframe-CgeYxcj8.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-Cs7EEVT-.js";import{B as d}from"./Button-DR_1qYQ2.js";import{S as x}from"./Section-C3AA-XhZ.js";import{A as E}from"./ActionGroup-SAvPHs6u.js";import{s as c}from"./Action-DlDUTAjM.js";import{S as m}from"./Switch-CoRSaaHb.js";import{F as j}from"./FieldError-CDWzOCc-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CbTKsx_B.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./clsx-B-dksMZM.js";import"./index-SS9EXt6e.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./context-CYaZBhkg.js";import"./useRef-YSwTV-ZZ.js";import"./utils-BH6Z59zo.js";import"./ButtonView-DNnrBHqR.js";import"./browser-DJjrqqpQ.js";import"./IconWarning-CNkUjla4.js";import"./remote-CtdlUY7L.js";import"./Text-fEw-hlGn.js";import"./EmulatedBoldText-B9jRyhwt.js";import"./Text-D1ETBO0D.js";import"./LoadingSpinner-Czq10wCK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-x-eiCRcG.js";import"./ProgressBar-FiBC1zNG.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CNkOKuMy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DX014ZyL.js";import"./useFocus-BDu45Ayq.js";import"./useFocusRing-BNw3vzKJ.js";import"./useFocusable-UxYwgi7z.js";import"./ContextMenuSection-CBMk4BqO.js";import"./Dialog-LUBljj5i.js";import"./RSPContexts-D3svuC0u.js";import"./OverlayArrow-1gQSfgj3.js";import"./useControlledState-CjPSf5xo.js";import"./Collection-D2EAa2oZ.js";import"./CollectionBuilder-C9W5aaEP.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./Separator-CcrRe_Zj.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./useCollator-Jdxh6jfg.js";import"./FocusScope-CGvyVacv.js";import"./VisuallyHidden-ty8jLyKB.js";import"./getActionGroupSlot-Bx9RQO4h.js";import"./useStatic-BH0JS_W8.js";import"./context-x8law5mp.js";import"./useFieldComponent-DjF7VplI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D5RJaWcN.js";import"./useFormReset-CLCQkLzV.js";import"./FieldError-BanRAUWl.js";import"./AlertText-BHVf3OWG.js";import"./AlertIcon-BVEvo4xP.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
