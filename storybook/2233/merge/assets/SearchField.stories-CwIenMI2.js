import{j as r,r as S}from"./iframe-BMquwUxp.js";import{b as n,u as a,F as p,t as x}from"./Form-CH4Jd3Vi.js";import{L as m}from"./Label-RP2jfdXb.js";import{R as u,S as l}from"./ResetButton-BmqhXreY.js";import{B as d}from"./Button-DvE0An6z.js";import{S as j}from"./Section-Cjc_LDxh.js";import{A as b}from"./ActionGroup-CFM0ipne.js";import{s as c}from"./Action-4VgG125V.js";import{S as s}from"./SearchField-r0lFIYUh.js";import{F as E}from"./FieldError-DmIKwRtH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3tImXr.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./clsx-B-dksMZM.js";import"./index-cAMRUrux.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./context-BcuHL9mG.js";import"./browser-CBlt42Oy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BA-uOG5q.js";import"./utils-C54becjs.js";import"./Hidden-DXpev5BT.js";import"./useRef-DMo9v2cQ.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./Text-EG4UQ_l2.js";import"./EmulatedBoldText-CntJSrfE.js";import"./Text-CPXkgTZA.js";import"./LoadingSpinner-BPW5hp_J.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CwpJPQ3S.js";import"./ProgressBar-ztA157SI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-RZvczw.js";import"./useFocus-DaRXVXg_.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./ContextMenuSection-DHh_hwVu.js";import"./Dialog-Dx0VK2pV.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./VisuallyHidden-D31Z6xaf.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./useStatic-BMpae3_g.js";import"./context-BbITb74L.js";import"./useFieldComponent-7OMeXUSU.js";import"./useControlledHostValueProps-D7O5jAV7.js";import"./FieldError-D0s5eFn1.js";import"./Form-i5hQHr5E.js";import"./Group-CqoaeHFC.js";import"./Input-DU1QpXVG.js";import"./useTextField-BJeGxBtu.js";import"./useFormReset-DGUxmLDL.js";import"./useFormValidation-BU69543b.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
