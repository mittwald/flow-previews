import{j as r,r as f}from"./iframe-DoVgBQr5.js";import{a as c,u as a,F as u,t as h}from"./Form-C01f8eVU.js";import{B as n}from"./Button-2cUDiMZd.js";import{S as x}from"./Section-BB2ZqUlo.js";import{A as F}from"./ActionGroup-C1j2d8AL.js";import{s as d}from"./Action-5AgtWQtu.js";import{C as o}from"./Checkbox-LQenX1bS.js";import{F as j}from"./useFieldComponent-Dl5zd8_u.js";import"./index-nuYtCEEu.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./clsx-B-dksMZM.js";import"./index-CnXLT15x.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./context-DKZO50eL.js";import"./browser-CTr_Jj6j.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BITNguYJ.js";import"./Text-DarT3iBq.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./Text-BnwT6LTw.js";import"./utils-BUNxWnYj.js";import"./LoadingSpinner-BjGFLica.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf2Tt4tQ.js";import"./ProgressBar-i7FI2__w.js";import"./Label-8ulleTCg.js";import"./Hidden-VhCLrHg5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dokwxw5N.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMEqlp6n.js";import"./useFocus-DgyX4ANK.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocusable-CYiqpOWe.js";import"./ContextMenuSection-DNqsPT3L.js";import"./Dialog-BOL4Q97z.js";import"./RSPContexts-DwowBXaw.js";import"./OverlayArrow-F14P5UPi.js";import"./useControlledState-JsyFwj7N.js";import"./Collection-BP7ufpBw.js";import"./CollectionBuilder-DJiBT6Uj.js";import"./SelectionIndicator-DHuWhUvH.js";import"./Separator-Ck__hFdD.js";import"./SelectionManager-GAqkDmB6.js";import"./useEvent-CXpyXyC8.js";import"./useCollator-BaFQCUm3.js";import"./FocusScope-DbQQ9osx.js";import"./VisuallyHidden-BzJhkBGh.js";import"./dynamic-DslUBYil.js";import"./getActionGroupSlot-Cx2xgGVq.js";import"./useStatic-DVOn0oZR.js";import"./context-C0oFmp5D.js";import"./useMakeFocusable-4hJKvVl2.js";import"./Form-ISVWAvzv.js";import"./useFormValidation-BBVxENjx.js";import"./useToggleState-nk3Bcv3_.js";import"./useFormReset-DOuAY3sG.js";import"./react-children-utilities-NLX1q1W1.js";import"./ClearPropsContext-8Ai0JzP3.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Or as __namedExportsOrder,kr as default};
