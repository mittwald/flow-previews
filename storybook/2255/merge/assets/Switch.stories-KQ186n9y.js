import{j as r,r as F}from"./iframe-CO_SbVCH.js";import{b as n,u as p,F as a,t as S}from"./Form-CKDpo35Y.js";import{R as u,S as l}from"./ResetButton-DQlSeI9_.js";import{B as d}from"./Button-D1ylE5rB.js";import{S as x}from"./Section-DzQL888J.js";import{A as E}from"./ActionGroup-Y22B5gXp.js";import{s as c}from"./Action-0SsHJzT_.js";import{S as m}from"./Switch-fAFJ-mWl.js";import{F as j}from"./FieldError-ApIzqFqI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7BzGeVfl.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./clsx-B-dksMZM.js";import"./index-CiuYSwxA.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./context-CagKbUB8.js";import"./browser-DqZUP5aL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-D6Fob7yO.js";import"./useRef-BtpKrvaf.js";import"./IconWarning-DnAYmwAM.js";import"./remote-CpzHRyGl.js";import"./Text-DxwcuI28.js";import"./EmulatedBoldText-f0IFAvFk.js";import"./Text-CKhrTn1e.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B5AHzCCb.js";import"./ProgressBar-B7Qw6Oz5.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dm4P9x_e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dh95oJrl.js";import"./useFocus-CPWqIWXE.js";import"./useFocusRing-BEFuW2jQ.js";import"./useFocusable-CMm0HKMh.js";import"./ContextMenuSection-m6biFtp2.js";import"./Dialog-UmHwq-hs.js";import"./RSPContexts-BwOC89i_.js";import"./OverlayArrow-D4OM36Ak.js";import"./useControlledState-BplPLiu_.js";import"./Collection-ghLLd_h5.js";import"./CollectionBuilder-BVAhjiTU.js";import"./SelectionIndicator-Ca0su_yA.js";import"./Separator-CUNyVGir.js";import"./SelectionManager-XN_Qhkpg.js";import"./useEvent-BzLyT1Z_.js";import"./useCollator-BikNysJq.js";import"./FocusScope-Ptf693hL.js";import"./VisuallyHidden-DDIsYkXL.js";import"./getActionGroupSlot-DAKAs_h9.js";import"./useStatic-D6cqHfiz.js";import"./context-BbDJJF8K.js";import"./useFieldComponent-DVhqfPKz.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-9K6TRVAf.js";import"./useFormReset-DQMHGRs0.js";import"./FieldError-C8I7NIV7.js";import"./AlertText-BQJ0P8Cx.js";import"./AlertIcon-3Vdm-iqE.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Wr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
