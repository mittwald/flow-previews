import{j as r}from"./iframe-EtTbRQoM.js";import{a as p,u as c,F as u,t as P}from"./Form-B86kUuvW.js";import{L as d}from"./Label-BHPxSoWd.js";import{B as e}from"./Button-DxuCaQyR.js";import{S as b}from"./Section-BmVYkrqh.js";import{A as F}from"./ActionGroup-Cl4D3H2T.js";import{s as h}from"./Action-CL-CoYGw.js";import{S as j}from"./SearchField-CRUBxBKU.js";import{d as w,O as f,P as x,n as o,r as S}from"./PasswordCreationField-DDXVH0P6.js";import{e as g}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-nuYtCEEu.js";import"./dynamic-Cv7GHFn6.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./FieldError-Bx65Dx0T.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./browser-Cob99Do9.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./getActionGroupSlot-CxKatSQe.js";import"./useStatic-DxnBGf3l.js";import"./context-C1SllNhn.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-CYrgQbLH.js";import"./Form-CyJo_kk3.js";import"./Group-DeuTwRQ_.js";import"./Input-TlPGvJ5n.js";import"./useTextField-Ec9tFhY1.js";import"./useFormReset-B1BZ1rNK.js";import"./useFormValidation-CisZkPpg.js";import"./TextField-D5UL4yco.js";import"./FieldDescription-RyyHlj0A.js";import"./Tooltip-Bd-mtq7X.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./ContextualHelpTrigger-DpLJnDqv.js";import"./Popover-ByVAPhqX.js";import"./useOverlayController-BhlWBiph.js";import"./OverlayContextProvider-6Zh7EMbz.js";import"./OverlayTrigger-fEmiW_c4.js";import"./ControlledNotification-DztR7-dO.js";import"./Heading-YEToWG6x.js";import"./Heading-DTQh2nx3.js";import"./useManagedValue-DOWOMeeY.js";const B=(t=w)=>async i=>{if(!i)return!0;try{const n=await f.fromDeclaration(t).validate(i);return g(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:v}=__STORYBOOK_MODULE_ACTIONS__,C=v("submit"),y={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[S.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Jr={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),C(n)},i=c({defaultValues:{user:""}}),s=P();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(s,{name:"user",children:r.jsx(j,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(F,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(x,{validationPolicy:y,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=f.fromDeclaration(y),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:B(t)},name:"password",children:r.jsxs(x,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};const Qr=["Default","WithFocusAndError","WithForm"];export{a as Default,m as WithFocusAndError,l as WithForm,Qr as __namedExportsOrder,Jr as default};
