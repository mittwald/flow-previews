import{j as r,r as f}from"./iframe-BQyHcTNh.js";import{a,u as p,F as c,t as F}from"./Form-Dghv3XBA.js";import{L as s}from"./Label-JK740Dk1.js";import{B as m}from"./Button-ieCP1ArV.js";import{S}from"./Section-D4fUAwGu.js";import{A as x}from"./ActionGroup-WBeyu3m_.js";import{s as d}from"./Action-Bi6tM7BN.js";import{S as n}from"./SearchField-Dls7lsC0.js";import{F as j}from"./FieldError-AQx_Co0q.js";import"./index-nuYtCEEu.js";import"./dynamic-V8J33Kah.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./clsx-B-dksMZM.js";import"./index-D5h5WobT.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./browser-CktdIn7a.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D_Hg-3H4.js";import"./utils-CdCPWCHO.js";import"./Hidden-c61kZDYL.js";import"./IconWarning-D8COeLpG.js";import"./Text-_hc15B6K.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./LoadingSpinner-CEYsHom-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./ContextMenuSection-ZyWidMUH.js";import"./Dialog-CTkyeFiO.js";import"./RSPContexts-BtdGc8q9.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useControlledState-TEYDAVm8.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./VisuallyHidden-rd1eTAwo.js";import"./getActionGroupSlot-DtqoduiB.js";import"./useStatic-CIMbf_kn.js";import"./context-B5Yt5ZbD.js";import"./useFieldComponent-Cyrlnow6.js";import"./ClearPropsContext-CD4xLCoc.js";import"./ReactAriaControlledValueFix-CUbxH7dl.js";import"./Form-CjlO_WmK.js";import"./Group-D0yjr4EW.js";import"./Input-POMMqA2k.js";import"./useTextField-0T4qffof.js";import"./useFormReset-DB-Y7LtK.js";import"./useFormValidation-Dr6xiKJA.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),Ir={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const e=async h=>{await d(5e3),E(h)},u=p({defaultValues:{user:""}}),l=F();return r.jsx(c,{form:u,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(l,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},t={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Pr as __namedExportsOrder,Ir as default};
